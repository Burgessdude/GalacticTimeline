# Getting Book Covers from Wookieepedia

Wookieepedia is the best source for accurate Star Wars book covers. Here's how to manually add them to your website.

## Quick Method

### Step 1: Find the books that need covers

Run this to see the list:
```bash
python3 /tmp/list_placeholder_covers.py
```

### Step 2: Get cover URLs from Wookieepedia

For each book in the list:

1. **Go to Wookieepedia** - Open https://starwars.fandom.com/
2. **Search for the book** - Type the book title in the search box
3. **Find the cover image** - On the book's page, right-click the cover image
4. **Copy image address** - Select "Copy Image Address" or "Copy Image Link"
5. **Verify it's a direct link** - The URL should end in `.jpg`, `.png`, or `.webp`

**Example:**
- Book: "Darth Bane: Path of Destruction"
- Search: https://starwars.fandom.com/wiki/Darth_Bane:_Path_of_Destruction
- Cover URL: `https://static.wikia.nocookie.net/starwars/images/[...]/Darth_Bane_PoD.jpg`

### Step 3: Add to cover-overrides.json

Open `cover-overrides.json` and add the book ID + URL:

```json
{
  "legends": {
    "darth-bane-path-of-destruction": "https://static.wikia.nocookie.net/starwars/images/.../Darth_Bane_PoD.jpg"
  },
  "canon": {
    "light-of-the-jedi": "https://static.wikia.nocookie.net/starwars/images/.../Light_of_the_Jedi.jpg"
  }
}
```

### Step 4: Apply the changes

```bash
python3 /tmp/apply_cover_overrides.py
```

Your website will immediately update with the new covers!

## Tips for Faster Updates

**Batch mode:** Do 5-10 books at a time, then apply all at once.

**Search shortcuts:**
- Most books can be found by searching: `Book Title site:starwars.fandom.com`
- Or go directly to: `https://starwars.fandom.com/wiki/[Book_Title_With_Underscores]`

**Common book series URLs:**
- Darth Bane Trilogy: https://starwars.fandom.com/wiki/Darth_Bane_trilogy
- Thrawn Trilogy: https://starwars.fandom.com/wiki/Thrawn_trilogy
- The High Republic: https://starwars.fandom.com/wiki/The_High_Republic
- New Jedi Order: https://starwars.fandom.com/wiki/The_New_Jedi_Order

## Image URL Format

Wookieepedia images typically look like:
```
https://static.wikia.nocookie.net/starwars/images/[hash]/[hash]/[filename].jpg
```

Make sure you copy the **full URL** including the hash paths.

## Priority Books to Update

Based on popularity, consider updating these first:

**Legends (most well-known):**
1. Darth Bane trilogy
2. Thrawn trilogy (Heir to the Empire, etc.)
3. Clone Wars novels
4. Republic Commando series

**Canon (most recent):**
1. High Republic series
2. Thrawn (new canon)
3. Sequel trilogy novels
4. The Acolyte tie-ins

## Current Status

Run `python3 /tmp/list_placeholder_covers.py` to see:
- **40 total books** need covers (21 Legends, 19 Canon)
- All other books already have covers from Open Library
