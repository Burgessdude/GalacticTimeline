// Script to add 'legends' and era tags to all Legends books
import fs from 'fs';
import { legendsNovels } from '../src/app/data/novels';
import { legendsEras, getLegendsEraForTimeline } from '../src/app/utils/eras';

function addLegendsTagsToBooks() {
  console.log('📚 Adding Legends and Era tags to all Legends books...\n');

  // Read novels.ts
  let novelsContent = fs.readFileSync('src/app/data/novels.ts', 'utf-8');

  let updateCount = 0;

  // For each book, add 'legends' and the era to bookType
  legendsNovels.forEach(book => {
    const eraId = getLegendsEraForTimeline(book.timelinePlacement);
    const era = legendsEras.find(e => e.id === eraId);
    if (!era) return;

    const eraName = era.name;

    // Match the book object by ID
    const idPattern = new RegExp(`(\\{[^}]*id:\\s*['"]${book.id}['"][^}]*bookType:\\s*\\[)([^\\]]*)(\\])`, 's');

    const match = novelsContent.match(idPattern);
    if (match) {
      const beforeArray = match[1];
      const currentTypes = match[2];
      const afterArray = match[3];

      // Parse current bookType array
      const typeMatches = currentTypes.match(/'([^']+)'|"([^"]+)"/g) || [];
      const currentTypesSet = new Set(
        typeMatches.map(t => t.replace(/['"]/g, ''))
      );

      // Add 'Legends' and era if not already present
      if (!currentTypesSet.has('Legends')) {
        currentTypesSet.add('Legends');
      }
      if (!currentTypesSet.has(eraName)) {
        currentTypesSet.add(eraName);
      }

      // Build new bookType array
      const newTypes = Array.from(currentTypesSet).map(t => `'${t}'`).join(', ');
      const newBookType = beforeArray + newTypes + afterArray;

      novelsContent = novelsContent.replace(idPattern, newBookType);
      updateCount++;
    }
  });

  // Write back to file
  fs.writeFileSync('src/app/data/novels.ts', novelsContent);

  console.log(`✅ Updated ${updateCount} Legends books`);
  console.log('🎉 Done! All Legends books now have "Legends" and era tags.');
}

addLegendsTagsToBooks();
