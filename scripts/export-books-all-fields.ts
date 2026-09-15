// Script to export all books with all editable fields to one CSV
import { legendsNovels, canonNovels } from '../src/app/data/novels';
import fs from 'fs';

function escapeCSV(str: string): string {
  if (!str) return '';
  // Escape quotes and wrap in quotes if contains comma, quote, or newline
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function generateCSV() {
  const header = 'Timeline,ID,Title,Author,Amazon Link,Description,Release Date\n';

  const rows: string[] = [];

  // Add Legends books
  legendsNovels.forEach(book => {
    rows.push([
      'Legends',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
      escapeCSV(book.amazonLink || ''),
      escapeCSV(book.description || ''),
      escapeCSV(book.releaseDate || '')
    ].join(','));
  });

  // Add Canon books
  canonNovels.forEach(book => {
    rows.push([
      'Canon',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
      escapeCSV(book.amazonLink || ''),
      escapeCSV(book.description || ''),
      escapeCSV(book.releaseDate || '')
    ].join(','));
  });

  const csv = header + rows.join('\n');

  fs.writeFileSync('books-all-data.csv', csv);
  console.log('✅ Created books-all-data.csv');
  console.log(`📚 Total books: ${legendsNovels.length + canonNovels.length}`);
  console.log('\nThis CSV includes:');
  console.log('  - Amazon Link');
  console.log('  - Description');
  console.log('  - Release Date');
  console.log('\nNext steps:');
  console.log('1. Open books-all-data.csv in Excel/Google Sheets');
  console.log('2. Edit any of the fields (Amazon Link, Description, Release Date)');
  console.log('3. Save the CSV file');
  console.log('4. Run: pnpm exec tsx scripts/update-books-all-fields.ts');
}

generateCSV();
