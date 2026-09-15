// Script to regenerate all CSV files from novels.ts
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

// Generate books-all-data.csv
function generateAllDataCSV() {
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
  console.log('✅ Generated books-all-data.csv');
}

// Generate books-amazon-links.csv
function generateAmazonLinksCSV() {
  const header = 'Timeline,ID,Title,Author,Amazon Link\n';
  const rows: string[] = [];

  // Add Legends books
  legendsNovels.forEach(book => {
    rows.push([
      'Legends',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
      escapeCSV(book.amazonLink || '')
    ].join(','));
  });

  // Add Canon books
  canonNovels.forEach(book => {
    rows.push([
      'Canon',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
      escapeCSV(book.amazonLink || '')
    ].join(','));
  });

  const csv = header + rows.join('\n');
  fs.writeFileSync('books-amazon-links.csv', csv);
  console.log('✅ Generated books-amazon-links.csv');
}

// Generate books-descriptions.csv
function generateDescriptionsCSV() {
  const header = 'Timeline,ID,Title,Author,Description\n';
  const rows: string[] = [];

  // Add Legends books
  legendsNovels.forEach(book => {
    rows.push([
      'Legends',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
      escapeCSV(book.description || '')
    ].join(','));
  });

  // Add Canon books
  canonNovels.forEach(book => {
    rows.push([
      'Canon',
      book.id,
      escapeCSV(book.title),
      escapeCSV(book.author),
      escapeCSV(book.description || '')
    ].join(','));
  });

  const csv = header + rows.join('\n');
  fs.writeFileSync('books-descriptions.csv', csv);
  console.log('✅ Generated books-descriptions.csv');
}

// Generate books-release-dates.csv
function generateReleaseDatesCSV() {
  const header = 'Timeline,ID,Title,Author,Release Date\n';
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
  console.log('✅ Generated books-release-dates.csv');
}

console.log('📚 Regenerating all CSV files from novels.ts...\n');

generateAllDataCSV();
generateAmazonLinksCSV();
generateDescriptionsCSV();
generateReleaseDatesCSV();

const totalBooks = legendsNovels.length + canonNovels.length;
console.log(`\n🎉 Done! Generated 4 CSV files with ${totalBooks} total books (${legendsNovels.length} Legends, ${canonNovels.length} Canon)`);
