# Manual Book Cover Updates

This guide explains how to manually update book cover images for the Star Wars novels website.

## Overview

Currently, **40 books** have placeholder images (Unsplash stock photos) instead of real book covers. You can manually add the correct cover URLs using the system described below.

## Step 1: See which books need covers

Run this command to see all books with placeholder covers:

```bash
python3 /tmp/list_placeholder_covers.py
```

This will show you:
- The book title
- The book ID (used for updates)
- The author

## Step 2: Find the correct cover image

For each book you want to fix:

1. Search Google Images for: `"[Book Title]" star wars book cover`
2. Find a high-quality cover image
3. Right-click and copy the image URL (make sure it's a direct image link ending in .jpg, .png, etc.)

**Good sources:**
- Amazon book pages (right-click cover → Copy image address)
- Wookieepedia (Star Wars wiki)
- Publisher websites (Del Rey, Disney-Lucasfilm Press)

## Step 3: Add the URL to cover-overrides.json

Open `cover-overrides.json` and add the book ID and cover URL:

```json
{
  "legends": {
    "darth-bane-path-of-destruction": "https://example.com/real-cover.jpg",
    "heir-to-empire": "https://another-site.com/thrawn-cover.jpg"
  },
  "canon": {
    "light-of-the-jedi": "https://example.com/high-republic-cover.jpg"
  }
}
```

## Step 4: Apply the updates

Run this command to apply your cover overrides:

```bash
python3 /tmp/apply_cover_overrides.py
```

This will update `src/app/data/novels.ts` with your new cover URLs and show you which books were updated.

## Example Workflow

1. List placeholders: `python3 /tmp/list_placeholder_covers.py`
2. You see "Darth Bane: Path of Destruction" needs a cover
3. Search Google for the cover image
4. Find: `https://images-na.ssl-images-amazon.com/images/I/51ABC123.jpg`
5. Add to `cover-overrides.json`:
   ```json
   {
     "legends": {
       "darth-bane-path-of-destruction": "https://images-na.ssl-images-amazon.com/images/I/51ABC123.jpg"
     }
   }
   ```
6. Run: `python3 /tmp/apply_cover_overrides.py`
7. The website now shows the real cover!

## Current Status

- **Legends:** 21 books need covers
- **Canon:** 19 books need covers
- **Total:** 40 books

Run `/tmp/list_placeholder_covers.py` to see the complete list.
