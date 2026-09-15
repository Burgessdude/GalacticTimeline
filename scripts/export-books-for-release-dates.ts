// Script to export all books to CSV for adding release dates manually
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
  const header = 'Timeline,ID,Title,Author,Current Release Date\n';

  const rows: string[] = [];

  // Add Legends books
  legendsNovels.forEach(book => {
    rows.push([
      'Legends',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
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
      escapeCSV(book.releaseDate || '')
    ].join(','));
  });

  const csv = header + rows.join('\n');

  fs.writeFileSync('books-release-dates.csv', csv);
  console.log('✅ Created books-release-dates.csv');
  console.log(`📚 Total books: ${legendsNovels.length + canonNovels.length}`);
  console.log('\nNext steps:');
  console.log('1. Open books-release-dates.csv in Excel/Google Sheets');
  console.log('2. Add release dates in the "Current Release Date" column (e.g., "April 1, 1991" or "2015-09-04")');
  console.log('3. Save the CSV file');
  console.log('4. Run: pnpm exec tsx scripts/update-book-release-dates.ts');
}

generateCSV();
