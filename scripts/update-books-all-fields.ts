// Script to read CSV and update novels.ts with all fields (Amazon links, descriptions, release dates)
import fs from 'fs';

interface BookUpdates {
  amazonLink?: string;
  description?: string;
  releaseDate?: string;
}

function parseCSV(csvText: string): Record<string, BookUpdates> {
  const updates: Record<string, BookUpdates> = {};

  // Parse CSV handling multi-line quoted fields and escaped quotes
  const rows: string[] = [];
  let currentRow = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"' && nextChar === '"' && inQuotes) {
      // Escaped quote ("") - add both and skip next
      currentRow += '""';
      i++; // Skip the next quote
    } else if (char === '"') {
      inQuotes = !inQuotes;
      currentRow += char;
    } else if (char === '\n' && !inQuotes) {
      if (currentRow.trim()) {
        rows.push(currentRow);
      }
      currentRow = '';
    } else {
      currentRow += char;
    }
  }
  if (currentRow.trim()) {
    rows.push(currentRow);
  }

  // Skip header row
  const dataRows = rows.slice(1);

  dataRows.forEach(line => {
    // Parse CSV fields (handles quoted fields and escaped quotes)
    const parts: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"' && nextChar === '"' && inQuotes) {
        // Escaped quote - don't toggle inQuotes, just add the character
        current += '"';
        i++; // Skip the next quote
      } else if (char === '"') {
        inQuotes = !inQuotes;
        // Don't add the quote character itself
      } else if (char === ',' && !inQuotes) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current); // Add last field

    if (parts.length >= 7) {
      const [timeline, id, title, author, amazonLink, description, releaseDate] = parts;
      const bookId = id.trim();

      updates[bookId] = {};

      if (amazonLink && amazonLink.trim()) {
        updates[bookId].amazonLink = amazonLink.trim();
      }

      if (description && description.trim()) {
        updates[bookId].description = description.trim();
      }

      if (releaseDate && releaseDate.trim()) {
        updates[bookId].releaseDate = releaseDate.trim();
      }

      // Remove book from updates if it has no fields to update
      if (!updates[bookId].amazonLink && !updates[bookId].description && !updates[bookId].releaseDate) {
        delete updates[bookId];
      }
    }
  });

  return updates;
}

function updateNovelsFile() {
  // Read CSV
  if (!fs.existsSync('books-all-data.csv')) {
    console.error('❌ books-all-data.csv not found!');
    console.log('Run: pnpm exec tsx scripts/export-books-all-fields.ts first');
    process.exit(1);
  }

  const csvContent = fs.readFileSync('books-all-data.csv', 'utf-8');
  const updates = parseCSV(csvContent);

  console.log(`📝 Found ${Object.keys(updates).length} books to update`);

  // Count updates by type
  let amazonCount = 0;
  let descriptionCount = 0;
  let releaseDateCount = 0;

  Object.values(updates).forEach(update => {
    if (update.amazonLink) amazonCount++;
    if (update.description) descriptionCount++;
    if (update.releaseDate) releaseDateCount++;
  });

  console.log(`   - ${amazonCount} Amazon links`);
  console.log(`   - ${descriptionCount} descriptions`);
  console.log(`   - ${releaseDateCount} release dates`);

  // Read novels.ts
  let novelsContent = fs.readFileSync('src/app/data/novels.ts', 'utf-8');

  let updateCount = 0;

  // For each book with updates, find the book object and add/update fields
  Object.entries(updates).forEach(([id, fields]) => {
    // Match the book object by ID
    const idPattern = new RegExp(`(\\{[^}]*id:\\s*['"]${id}['"][^}]*)(\\})`, 's');

    novelsContent = novelsContent.replace(idPattern, (match, before, after) => {
      let updated = before;

      // Update or add each field
      if (fields.amazonLink) {
        const escapedLink = fields.amazonLink
          .replace(/\\/g, '\\\\')
          .replace(/'/g, "\\'");

        if (updated.includes('amazonLink:')) {
          updated = updated.replace(
            /amazonLink:\s*('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/,
            `amazonLink: '${escapedLink}'`
          );
        } else {
          updated = addField(updated, 'amazonLink', escapedLink);
        }
      }

      if (fields.description) {
        // Normalize line endings
        const normalizedDesc = fields.description
          .replace(/\r\n/g, '\n')  // Normalize Windows line endings
          .replace(/\r/g, '\n');    // Normalize old Mac line endings

        // Use template literals (backticks) for multi-line strings
        const hasNewlines = normalizedDesc.includes('\n');
        let escapedDesc: string;
        let quoteChar: string;

        if (hasNewlines) {
          // Use backticks for multi-line - escape backticks and ${}
          escapedDesc = normalizedDesc
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\$\{/g, '\\${');
          quoteChar = '`';
        } else {
          // Use single quotes for single-line - escape quotes
          escapedDesc = normalizedDesc
            .replace(/\\/g, '\\\\')
            .replace(/'/g, "\\'");
          quoteChar = "'";
        }

        if (updated.includes('description:')) {
          // Match description field with proper quote/backtick handling
          // This regex matches: description: followed by either:
          // - `...` (backtick template literal - can span multiple lines)
          // - '...' (single quoted string)
          // - "..." (double quoted string)
          updated = updated.replace(
            /description:\s*(`(?:[^`\\]|\\.)*`|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/s,
            `description: ${quoteChar}${escapedDesc}${quoteChar}`
          );
        } else {
          updated = addFieldWithQuote(updated, 'description', escapedDesc, quoteChar);
        }
      }

      if (fields.releaseDate) {
        const escapedDate = fields.releaseDate
          .replace(/\\/g, '\\\\')
          .replace(/'/g, "\\'");

        if (updated.includes('releaseDate:')) {
          updated = updated.replace(
            /releaseDate:\s*('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/,
            `releaseDate: '${escapedDate}'`
          );
        } else {
          updated = addField(updated, 'releaseDate', escapedDate);
        }
      }

      updateCount++;
      return updated + after;
    });
  });

  // Write back to file
  fs.writeFileSync('src/app/data/novels.ts', novelsContent);

  console.log(`\n✅ Updated ${updateCount} books in src/app/data/novels.ts`);
  console.log('🎉 Done! All your book data is now in the code.');
}

function addField(bookObject: string, fieldName: string, value: string): string {
  return addFieldWithQuote(bookObject, fieldName, value, "'");
}

function addFieldWithQuote(bookObject: string, fieldName: string, value: string, quoteChar: string): string {
  const lines = bookObject.split('\n');
  const lastLineIndex = lines.length - 1;
  lines[lastLineIndex] = lines[lastLineIndex].trimEnd();

  // Add comma if needed
  if (!lines[lastLineIndex].endsWith(',')) {
    lines[lastLineIndex] += ',';
  }

  // Add field
  const indent = lines[lastLineIndex].match(/^\s*/)?.[0] || '';
  lines.push(`${indent}${fieldName}: ${quoteChar}${value}${quoteChar}`);

  return lines.join('\n');
}

updateNovelsFile();
