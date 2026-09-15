// Script to remove duplicate 'Legends' tags from all Legends books
import fs from 'fs';

function removeDuplicateLegendsTags() {
  console.log('📚 Removing duplicate "Legends" tags from all Legends books...\n');

  // Read novels.ts
  let novelsContent = fs.readFileSync('src/app/data/novels.ts', 'utf-8');

  // Find all bookType arrays and remove duplicate 'Legends' entries
  // Match bookType: [...] patterns
  const bookTypePattern = /(bookType:\s*\[)([^\]]+)(\])/g;

  let updateCount = 0;

  novelsContent = novelsContent.replace(bookTypePattern, (match, before, content, after) => {
    // Extract all the types from the array
    const types = content.match(/'([^']+)'|"([^"]+)"/g) || [];
    const typeValues = types.map(t => t.replace(/['"]/g, ''));

    // Check if 'Legends' appears more than once
    const legendsCount = typeValues.filter(t => t === 'Legends').length;

    if (legendsCount > 1) {
      // Remove duplicates while preserving order
      const seen = new Set();
      const uniqueTypes = typeValues.filter(t => {
        if (seen.has(t)) {
          return false;
        }
        seen.add(t);
        return true;
      });

      // Rebuild the array
      const newContent = uniqueTypes.map(t => `'${t}'`).join(', ');
      updateCount++;
      return before + newContent + after;
    }

    return match;
  });

  // Write back to file
  fs.writeFileSync('src/app/data/novels.ts', novelsContent);

  console.log(`✅ Updated ${updateCount} books (removed duplicate Legends tags)`);
  console.log('🎉 Done!');
}

removeDuplicateLegendsTags();
