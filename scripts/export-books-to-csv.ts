// Script to export all books to CSV for adding Amazon links
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
  const header = 'Timeline,ID,Title,Author,Current Amazon Link\n';

  const rows: string[] = [];

  // Add Legends books
  legendsNovels.forEach(book => {
    rows.push([
      'Legends',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
      book.amazonLink || ''
    ].join(','));
  });

  // Add Canon books
  canonNovels.forEach(book => {
    rows.push([
      'Canon',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
      book.amazonLink || ''
    ].join(','));
  });

  const csv = header + rows.join('\n');

  fs.writeFileSync('books-amazon-links.csv', csv);
  console.log('✅ Created books-amazon-links.csv');
  console.log(`📚 Total books: ${legendsNovels.length + canonNovels.length}`);
  console.log('\nNext steps:');
  console.log('1. Open books-amazon-links.csv in Excel/Google Sheets');
  console.log('2. For each book, search on Amazon and copy the affiliate link from SiteStripe');
  console.log('3. Paste the Amazon link in the "Current Amazon Link" column');
  console.log('4. Save the CSV file');
  console.log('5. Run: tsx scripts/update-amazon-links.ts');
}

generateCSV();
