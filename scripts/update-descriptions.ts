// Script to update novels.ts with descriptions from descriptions.json
import fs from 'fs';

function updateDescriptions() {
  // Read descriptions
  if (!fs.existsSync('descriptions.json')) {
    console.error('❌ descriptions.json not found!');
    console.log('Run: pnpm exec tsx scripts/fetch-book-descriptions.ts first');
    process.exit(1);
  }

  const descriptions: Record<string, string> = JSON.parse(
    fs.readFileSync('descriptions.json', 'utf-8')
  );

  console.log(`📝 Found ${Object.keys(descriptions).length} descriptions to add`);

  // Read novels.ts
  let novelsContent = fs.readFileSync('src/app/data/novels.ts', 'utf-8');

  let updateCount = 0;

  // For each description, find the book object and add it
  Object.entries(descriptions).forEach(([id, description]) => {
    // Escape special characters in description for regex
    const escapedDescription = description
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n');

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
  console.log('🎉 Done!');
}

updateDescriptions();
