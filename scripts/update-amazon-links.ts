// Script to read CSV and update novels.ts with Amazon links
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
      const [timeline, id, title, author, amazonLink] = parts;

      if (amazonLink && amazonLink.trim()) {
        updates[id.trim()] = amazonLink.trim().replace(/^"|"$/g, ''); // Remove surrounding quotes
      }
    }
  });

  return updates;
}

function updateNovelsFile() {
  // Read CSV
  if (!fs.existsSync('books-amazon-links.csv')) {
    console.error('❌ books-amazon-links.csv not found!');
    console.log('Run: tsx scripts/export-books-to-csv.ts first');
    process.exit(1);
  }

  const csvContent = fs.readFileSync('books-amazon-links.csv', 'utf-8');
  const updates = parseCSV(csvContent);

  console.log(`📝 Found ${Object.keys(updates).length} Amazon links to update`);

  // Read novels.ts
  let novelsContent = fs.readFileSync('src/app/data/novels.ts', 'utf-8');

  let updateCount = 0;

  // For each update, find the book object and add/update amazonLink
  Object.entries(updates).forEach(([id, amazonLink]) => {
    // Match the book object by ID
    const idPattern = new RegExp(`(\\{[^}]*id:\\s*['"]${id}['"][^}]*)(\\})`, 's');

    novelsContent = novelsContent.replace(idPattern, (match, before, after) => {
      // Check if amazonLink already exists
      if (before.includes('amazonLink:')) {
        // Update existing link
        const updated = before.replace(
          /amazonLink:\s*['"][^'"]*['"]/,
          `amazonLink: '${amazonLink}'`
        );
        updateCount++;
        return updated + after;
      } else {
        // Add new amazonLink before the closing brace
        const lines = before.split('\n');
        const lastLineIndex = lines.length - 1;
        lines[lastLineIndex] = lines[lastLineIndex].trimEnd();

        // Add comma if needed
        if (!lines[lastLineIndex].endsWith(',')) {
          lines[lastLineIndex] += ',';
        }

        // Add amazonLink
        const indent = lines[lastLineIndex].match(/^\s*/)?.[0] || ''; // Get indentation
        lines.push(`${indent}amazonLink: '${amazonLink}'`);

        updateCount++;
        return lines.join('\n') + after;
      }
    });
  });

  // Write back to file
  fs.writeFileSync('src/app/data/novels.ts', novelsContent);

  console.log(`✅ Updated ${updateCount} Amazon links in src/app/data/novels.ts`);
  console.log('🎉 Done! Your affiliate links are now in the code.');
}

updateNovelsFile();
