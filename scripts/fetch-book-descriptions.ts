// Script to fetch book descriptions from Google Books API
import { legendsNovels, canonNovels } from '../src/app/data/novels';
import fs from 'fs';

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

// Rate limiting helper
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface GoogleBooksResponse {
  items?: Array<{
    volumeInfo: {
      title: string;
      authors?: string[];
      description?: string;
    };
  }>;
}

async function fetchDescription(title: string, author: string): Promise<string | null> {
  try {
    // Clean up title and author for search
    const searchQuery = `intitle:${title} inauthor:${author}`.replace(/ /g, '+');
    const url = `${GOOGLE_BOOKS_API}?q=${searchQuery}&maxResults=1`;

    const response = await fetch(url);

    if (!response.ok) {
      console.log(`⚠️  API error for "${title}": ${response.status}`);
      return null;
    }

    const data: GoogleBooksResponse = await response.json();

    if (data.items && data.items.length > 0) {
      const description = data.items[0].volumeInfo.description;
      if (description) {
        console.log(`✅ Found: "${title}"`);
        return description;
      }
    }

    console.log(`❌ No description: "${title}"`);
    return null;
  } catch (error) {
    console.log(`⚠️  Error fetching "${title}":`, error);
    return null;
  }
}

async function fetchAllDescriptions() {
  console.log('📚 Fetching book descriptions from Google Books API...\n');

  const allBooks = [...legendsNovels, ...canonNovels];
  const descriptions: Record<string, string> = {};
  let successCount = 0;

  for (let i = 0; i < allBooks.length; i++) {
    const book = allBooks[i];

    // Skip if already has description
    if (book.description) {
      console.log(`⏭️  Skipping "${book.title}" (already has description)`);
      continue;
    }

    console.log(`[${i + 1}/${allBooks.length}] Searching: "${book.title}" by ${book.author}`);

    const description = await fetchDescription(book.title, book.author);

    if (description) {
      descriptions[book.id] = description;
      successCount++;
    }

    // Rate limit: wait 1 second between requests to be nice to the API
    await sleep(1000);
  }

  console.log(`\n✅ Successfully fetched ${successCount} descriptions`);
  console.log(`📝 Saving to descriptions.json...\n`);

  // Save descriptions to JSON file
  fs.writeFileSync('descriptions.json', JSON.stringify(descriptions, null, 2));

  console.log('Done! Run update-descriptions.ts to add these to novels.ts');
}

fetchAllDescriptions();
