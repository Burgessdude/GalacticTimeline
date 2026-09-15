// Script to read CSV and update novels.ts with descriptions
import fs from 'fs';

function parseCSV(csvText: string): Record<string, string> {
  const lines = csvText.split('\n');
  const rows = lines.slice(1).filter(line => line.trim());

  const updates: Record<string, string> = {};

  rows.forEach(line => {
    // Simple CSV parsing (handles quoted fields)
    const parts: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current); // Add last field

    if (parts.length >= 5) {
      const [timeline, id, title, author, description] = parts;

      if (description && description.trim()) {
        updates[id.trim()] = description.trim().replace(/^"|"$/g, ''); // Remove surrounding quotes
      }
    }
  });

  return updates;
}

function updateNovelsFile() {
  // Read CSV
  if (!fs.existsSync('books-descriptions.csv')) {
    console.error('❌ books-descriptions.csv not found!');
    console.log('Run: pnpm exec tsx scripts/export-books-for-descriptions.ts first');
    process.exit(1);
  }

  const csvContent = fs.readFileSync('books-descriptions.csv', 'utf-8');
  const updates = parseCSV(csvContent);

  console.log(`📝 Found ${Object.keys(updates).length} descriptions to update`);

  // Read novels.ts
  let novelsContent = fs.readFileSync('src/app/data/novels.ts', 'utf-8');

  let updateCount = 0;

  // For each update, find the book object and add/update description
  Object.entries(updates).forEach(([id, description]) => {
    // Escape special characters for JavaScript string
    const escapedDescription = description
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '');

    // Match the book object by ID
    const idPattern = new RegExp(`(\\{[^}]*id:\\s*['"]${id}['"][^}]*)(\\})`, 's');

    novelsContent = novelsContent.replace(idPattern, (match, before, after) => {
      // Check if description already exists
      if (before.includes('description:')) {
        // Update existing description
        const updated = before.replace(
          /description:\s*['"][^'"]*['"]/s,
          `description: '${escapedDescription}'`
        );
        updateCount++;
        return updated + after;
      } else {
        // Add new description before the closing brace
        const lines = before.split('\n');
        const lastLineIndex = lines.length - 1;
        lines[lastLineIndex] = lines[lastLineIndex].trimEnd();

        // Add comma if needed
        if (!lines[lastLineIndex].endsWith(',')) {
          lines[lastLineIndex] += ',';
        }

        // Add description
        const indent = lines[lastLineIndex].match(/^\s*/)?.[0] || '';
        lines.push(`${indent}description: '${escapedDescription}'`);

        updateCount++;
        return lines.join('\n') + after;
      }
    });
  });

  // Write back to file
  fs.writeFileSync('src/app/data/novels.ts', novelsContent);

  console.log(`✅ Updated ${updateCount} descriptions in src/app/data/novels.ts`);
  console.log('🎉 Done! Your book descriptions are now in the code.');
}

updateNovelsFile();
