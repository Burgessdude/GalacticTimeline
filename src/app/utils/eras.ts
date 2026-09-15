export interface Era {
  id: string;
  name: string;
  description: string;
  timeRange: string;
  gradient: string;
}

export const canonEras: Era[] = [
  {
    id: 'high-republic',
    name: 'The High Republic',
    description: 'An era of peace and prosperity, when the Jedi Order was at its height',
    timeRange: '500 BBY - 100 BBY',
    gradient: 'from-amber-900/40 to-yellow-900/40'
  },
  {
    id: 'fall-of-jedi',
    name: 'Fall of the Jedi',
    description: 'The Republic\'s final days, the Clone Wars, and the rise of the Empire',
    timeRange: '100 BBY - 19 BBY',
    gradient: 'from-blue-900/40 to-purple-900/40'
  },
  {
    id: 'reign-of-empire',
    name: 'Reign of the Empire',
    description: 'The dark times under Imperial rule',
    timeRange: '19 BBY - 5 BBY',
    gradient: 'from-red-900/40 to-gray-900/40'
  },
  {
    id: 'age-of-rebellion',
    name: 'Age of Rebellion',
    description: 'The Rebellion against the Empire and the original trilogy',
    timeRange: '5 BBY - 4 ABY',
    gradient: 'from-orange-900/40 to-red-900/40'
  },
  {
    id: 'new-republic',
    name: 'The New Republic',
    description: 'Rebuilding the galaxy after the Empire\'s fall',
    timeRange: '5 ABY - 33 ABY',
    gradient: 'from-blue-900/40 to-cyan-900/40'
  },
  {
    id: 'rise-of-first-order',
    name: 'Rise of the First Order',
    description: 'A new threat emerges from the Unknown Regions',
    timeRange: '34 ABY - 35 ABY',
    gradient: 'from-yellow-900/40 to-orange-900/40'
  },
  {
    id: 'story-collections',
    name: 'Story Collections',
    description: 'Anthologies and compilations from across the timeline',
    timeRange: 'Various dates',
    gradient: 'from-yellow-900/40 to-orange-900/40'
  }
];

export const legendsEras: Era[] = [
  {
    id: 'before-the-republic',
    name: 'Dawn of the Jedi',
    description: 'The ancient origins of the Jedi Order',
    timeRange: '37,000 – 25,000 BBY',
    gradient: 'from-purple-900/40 to-indigo-900/40'
  },
  {
    id: 'old-republic',
    name: 'The Old Republic',
    description: 'Galactic conflicts between Sith and Jedi spanning millennia',
    timeRange: '25,000 – 980 BBY',
    gradient: 'from-amber-900/40 to-orange-900/40'
  },
  {
    id: 'rise-of-the-sith',
    name: 'Rise of the Sith',
    description: 'The Sith rise as the Republic falls toward war',
    timeRange: '980 - 22 BBY',
    gradient: 'from-blue-900/40 to-purple-900/40'
  },
  {
    id: 'clone-wars',
    name: 'The Clone Wars',
    description: 'The galaxy is consumed by war as the Republic crumbles',
    timeRange: '22 - 19 BBY',
    gradient: 'from-blue-900/40 to-purple-900/40'
  },
  {
    id: 'rise-of-empire',
    name: 'Reign of the Empire',
    description: 'The Empire tightens its grip as hope begins to rise',
    timeRange: '19 - 0 BBY',
    gradient: 'from-blue-900/40 to-purple-900/40'
  },
  {
    id: 'rebellion',
    name: 'Rebellion',
    description: 'The Rebel Alliance fights against the Galactic Empire',
    timeRange: '0 - 4 ABY',
    gradient: 'from-orange-900/40 to-red-900/40'
  },
  {
    id: 'new-republic',
    name: 'New Republic',
    description: 'Rebuilding the galaxy after the Empire\'s defeat',
    timeRange: '5 - 25 ABY',
    gradient: 'from-blue-900/40 to-cyan-900/40'
  },
  {
    id: 'new-jedi-order',
    name: 'New Jedi Order',
    description: 'The Yuuzhan Vong invasion and its aftermath',
    timeRange: '25 - 36 ABY',
    gradient: 'from-green-900/40 to-teal-900/40'
  },
  {
    id: 'legacy',
    name: 'Legacy',
    description: 'The distant future of the Star Wars galaxy',
    timeRange: '40+ ABY',
    gradient: 'from-red-900/40 to-pink-900/40'
  }
];

export function getEraForTimeline(timelinePlacement: number): string {
  // The High Republic: -500 to -100
  if (timelinePlacement <= -100) {
    return 'high-republic';
  }
  // Fall of the Jedi: -100 to -18
  if (timelinePlacement < -18) {
    return 'fall-of-jedi';
  }
  // Reign of the Empire: -19 to -5
  if (timelinePlacement < -5) {
    return 'reign-of-empire';
  }
  // Age of Rebellion: -5 to 4
  if (timelinePlacement <= 4) {
    return 'age-of-rebellion';
  }
  // The New Republic: 5 to 33
  if (timelinePlacement <= 33) {
    return 'new-republic';
  }
  // Rise of the first order: 33 to 40
  if (timelinePlacement <= 40) {
    return 'rise-of-first-order';
  }
  // Story Collections: Various times set at 40+
  return 'story-collections';
}

export function getLegendsEraForTimeline(timelinePlacement: number): string {
  // Before the Republic: -37000 to -25000
  if (timelinePlacement <= -25000) {
    return 'before-the-republic';
  }
  // The Old Republic: -5000 to -1000
  if (timelinePlacement <= -980) {
    return 'old-republic';
  }
  // The Old Republic: -5000 to -1000
  if (timelinePlacement < -22) {
    return 'rise-of-the-sith';
  }
  // The Old Republic: -5000 to -1000
  if (timelinePlacement < -18.9) {
    return 'clone-wars';
  }
  // Rise of the Empire: -980 to 0
  if (timelinePlacement < 0) {
    return 'rise-of-empire';
  }
  // Rebellion: 0 to 4 ABY (Battle of Endor)
  if (timelinePlacement < 5) {
    return 'rebellion';
  }
  // New Republic: 5 to 25
  if (timelinePlacement < 25) {
    return 'new-republic';
  }
  // New Jedi Order: 25 to 36
  if (timelinePlacement < 37) {
    return 'new-jedi-order';
  }
  // Legacy: 40+
  return 'legacy';
}
