#!/usr/bin/env ts-node

// Apply cover URL overrides from cover-overrides.json to novels.ts
import * as fs from 'fs';
import * as path from 'path';

const novelsPath = path.join(__dirname, '../src/app/data/novels.ts');
const overridesPath = path.join(__dirname, '../cover-overrides.json');

// Read files
let content = fs.readFileSync(novelsPath, 'utf8');
const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));

let appliedCount = 0;

// Apply legends overrides
for (const [bookId, newUrl] of Object.entries(overrides.legends) as [string, string][]) {
  if (!newUrl) continue;

  // Find and replace the cover URL for this book
  const pattern = new RegExp(
    `(\\{[^}]*id: '${bookId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',[^}]*coverUrl: ')[^']+(')`,'g'
  );

  const beforeLength = content.length;
  content = content.replace(pattern, `$1${newUrl}$2`);

  if (content.length !== beforeLength) {
    console.log(`✓ Updated Legends: ${bookId}`);
    appliedCount++;
  }
}

// Apply canon overrides
for (const [bookId, newUrl] of Object.entries(overrides.canon) as [string, string][]) {
  if (!newUrl) continue;

  const pattern = new RegExp(
    `(\\{[^}]*id: '${bookId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',[^}]*coverUrl: ')[^']+(')`,'g'
  );

  const beforeLength = content.length;
  content = content.replace(pattern, `$1${newUrl}$2`);

  if (content.length !== beforeLength) {
    console.log(`✓ Updated Canon: ${bookId}`);
    appliedCount++;
  }
}

// Write back
fs.writeFileSync(novelsPath, content, 'utf8');

console.log(`\n✅ Applied ${appliedCount} cover override(s) to novels.ts`);
