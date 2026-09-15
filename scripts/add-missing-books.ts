// Script to add missing books from CSV to novels.ts
import fs from 'fs';
import { legendsNovels, canonNovels } from '../src/app/data/novels';

interface BookUpdates {
  timeline: string;
  id: string;
  title: string;
  author: string;
  amazonLink?: string;
  description?: string;
  releaseDate?: string;
}

function parseCSV(csvText: string): BookUpdates[] {
  const books: BookUpdates[] = [];

  // Parse CSV handling multi-line quoted fields
  const rows: string[] = [];
  let currentRow = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"' && nextChar === '"' && inQuotes) {
      currentRow += '""';
      i++;
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
    const parts: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"' && nextChar === '"' && inQuotes) {
        current += '"';
        i++;
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current);

    if (parts.length >= 7) {
      const [timeline, id, title, author, amazonLink, description, releaseDate] = parts;
      books.push({
        timeline: timeline.trim(),
        id: id.trim(),
        title: title.trim(),
        author: author.trim(),
        amazonLink: amazonLink?.trim() || undefined,
        description: description?.trim() || undefined,
        releaseDate: releaseDate?.trim().replace(/\r$/, '') || undefined
      });
    }
  });

  return books;
}

function addMissingBooks() {
  // Read CSV
  if (!fs.existsSync('books-all-data.csv')) {
    console.error('❌ books-all-data.csv not found!');
    process.exit(1);
  }

  const csvContent = fs.readFileSync('books-all-data.csv', 'utf-8');
  const csvBooks = parseCSV(csvContent);

  // Get existing book IDs
  const existingIds = new Set([...legendsNovels, ...canonNovels].map(b => b.id));

  // Find missing books
  const missingBooks = csvBooks.filter(b => !existingIds.has(b.id));

  if (missingBooks.length === 0) {
    console.log('✅ No missing books! All CSV books are already in novels.ts');
    return;
  }

  console.log(`📚 Found ${missingBooks.length} missing books to add`);

  const missingLegends = missingBooks.filter(b => b.timeline === 'Legends');
  const missingCanon = missingBooks.filter(b => b.timeline === 'Canon');

  console.log(`   - ${missingLegends.length} Legends books`);
  console.log(`   - ${missingCanon.length} Canon books`);

  // Read novels.ts
  let novelsContent = fs.readFileSync('src/app/data/novels.ts', 'utf-8');

  // For each missing book, we need to find a placeholder or add it
  // Since these books don't have timelinePlacement, coverUrl, or bookType,
  // we need to add placeholders for them

  // Find the end of legendsNovels array
  const legendsArrayEnd = novelsContent.indexOf('export const canonNovels');

  if (missingLegends.length > 0) {
    // Add missing Legends books before the canonNovels export
    const insertPosition = novelsContent.lastIndexOf('];', legendsArrayEnd);

    let newBooks = '';
    missingLegends.forEach(book => {
      const hasNewlines = book.description && book.description.includes('\n');
      const descQuote = hasNewlines ? '`' : "'";
      const escapedDesc = book.description
        ? hasNewlines
          ? book.description.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
          : book.description.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
        : '';

      newBooks += `,\n  {\n`;
      newBooks += `    id: '${book.id}',\n`;
      newBooks += `    title: '${book.title.replace(/'/g, "\\'")}',\n`;
      newBooks += `    author: '${book.author.replace(/'/g, "\\'")}',\n`;
      newBooks += `    timelinePlacement: 0,\n`;  // Placeholder
      newBooks += `    timelineLabel: 'TBD',\n`;  // Placeholder
      newBooks += `    bookType: ['Adult'],\n`;  // Default
      newBooks += `    coverUrl: '',\n`;  // Placeholder
      if (book.amazonLink) {
        newBooks += `    amazonLink: '${book.amazonLink.replace(/'/g, "\\'")}',\n`;
      }
      if (book.description) {
        newBooks += `    description: ${descQuote}${escapedDesc}${descQuote},\n`;
      }
      if (book.releaseDate) {
        newBooks += `    releaseDate: '${book.releaseDate.replace(/'/g, "\\'")}'`;
      } else {
        newBooks = newBooks.trimEnd().replace(/,\s*$/, '');
      }
      newBooks += `\n  }`;
    });

    novelsContent = novelsContent.slice(0, insertPosition) + newBooks + novelsContent.slice(insertPosition);
  }

  if (missingCanon.length > 0) {
    // Add missing Canon books at the end of canonNovels array
    const canonArrayEnd = novelsContent.lastIndexOf('];');

    let newBooks = '';
    missingCanon.forEach(book => {
      const hasNewlines = book.description && book.description.includes('\n');
      const descQuote = hasNewlines ? '`' : "'";
      const escapedDesc = book.description
        ? hasNewlines
          ? book.description.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
          : book.description.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
        : '';

      newBooks += `,\n  {\n`;
      newBooks += `    id: '${book.id}',\n`;
      newBooks += `    title: '${book.title.replace(/'/g, "\\'")}',\n`;
      newBooks += `    author: '${book.author.replace(/'/g, "\\'")}',\n`;
      newBooks += `    timelinePlacement: 0,\n`;  // Placeholder
      newBooks += `    timelineLabel: 'TBD',\n`;  // Placeholder
      newBooks += `    bookType: ['Adult'],\n`;  // Default
      newBooks += `    coverUrl: '',\n`;  // Placeholder
      if (book.amazonLink) {
        newBooks += `    amazonLink: '${book.amazonLink.replace(/'/g, "\\'")}',\n`;
      }
      if (book.description) {
        newBooks += `    description: ${descQuote}${escapedDesc}${descQuote},\n`;
      }
      if (book.releaseDate) {
        newBooks += `    releaseDate: '${book.releaseDate.replace(/'/g, "\\'")}'`;
      } else {
        newBooks = newBooks.trimEnd().replace(/,\s*$/, '');
      }
      newBooks += `\n  }`;
    });

    novelsContent = novelsContent.slice(0, canonArrayEnd) + newBooks + novelsContent.slice(canonArrayEnd);
  }

  // Write back to file
  fs.writeFileSync('src/app/data/novels.ts', novelsContent);

  console.log(`\n✅ Added ${missingBooks.length} books to src/app/data/novels.ts`);
  console.log('⚠️  Note: New books have placeholder values for timelinePlacement, timelineLabel, and coverUrl');
  console.log('🎉 Done!');
}

addMissingBooks();
