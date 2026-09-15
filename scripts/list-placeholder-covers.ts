#!/usr/bin/env ts-node

// List all books that currently have placeholder Unsplash images
import * as fs from 'fs';
import * as path from 'path';

const novelsPath = path.join(__dirname, '../src/app/data/novels.ts');
const content = fs.readFileSync(novelsPath, 'utf8');

interface PlaceholderBook {
  id: string;
  title: string;
  author: string;
  currentUrl: string;
}

const placeholderBooks: {
  legends: PlaceholderBook[];
  canon: PlaceholderBook[];
} = {
  legends: [],
  canon: []
};

const legendsMatch = content.match(/export const legendsNovels: Novel\[\] = \[([\s\S]*?)\];/);
const canonMatch = content.match(/export const canonNovels: Novel\[\] = \[([\s\S]*?)\];/);

function extractPlaceholders(text: string): PlaceholderBook[] {
  const books: PlaceholderBook[] = [];
  const pattern = /\{\s*id: '([^']+)',\s*title: '([^']+)',\s*author: '([^']+)',[\s\S]*?coverUrl: '(https:\/\/images\.unsplash\.com[^']+)'/g;

  let match;
  while ((match = pattern.exec(text)) !== null) {
    books.push({
      id: match[1],
      title: match[2].replace(/\\'/g, "'"),
      author: match[3].replace(/\\'/g, "'"),
      currentUrl: match[4]
    });
  }

  return books;
}

if (legendsMatch) {
  placeholderBooks.legends = extractPlaceholders(legendsMatch[1]);
}

if (canonMatch) {
  placeholderBooks.canon = extractPlaceholders(canonMatch[1]);
}

console.log('='.repeat(80));
console.log('BOOKS WITH PLACEHOLDER COVERS');
console.log('='.repeat(80));
console.log('\nTo fix these, add the correct cover URL to cover-overrides.json\n');

console.log(`\n${'LEGENDS'.padEnd(40)} (${placeholderBooks.legends.length} books)`);
console.log('-'.repeat(80));
placeholderBooks.legends.forEach((book, idx) => {
  console.log(`${(idx + 1).toString().padStart(3)}. ${book.title}`);
  console.log(`     ID: ${book.id}`);
  console.log(`     Author: ${book.author}`);
  console.log();
});

console.log(`\n${'CANON'.padEnd(40)} (${placeholderBooks.canon.length} books)`);
console.log('-'.repeat(80));
placeholderBooks.canon.forEach((book, idx) => {
  console.log(`${(idx + 1).toString().padStart(3)}. ${book.title}`);
  console.log(`     ID: ${book.id}`);
  console.log(`     Author: ${book.author}`);
  console.log();
});

console.log('='.repeat(80));
console.log(`TOTAL: ${placeholderBooks.legends.length + placeholderBooks.canon.length} books need cover images`);
console.log('='.repeat(80));
