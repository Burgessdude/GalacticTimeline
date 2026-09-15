const coverCanonImages = import.meta.glob(
  '../../assets/covers/canon/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>;

const coverLegendsImages = import.meta.glob(
  '../../assets/covers/Legends/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>;

function getCanonCover(filename: string) {
  return coverCanonImages[`../../assets/covers/canon/${filename}`];
}

function getLegendsCover(filename: string) {
  return coverLegendsImages[`../../assets/covers/Legends/${filename}`];
}



export interface Novel {
  id: string;
  title: string;
  author: string;
  timelinePlacement: number;
  timelineLabel: string;
  coverUrl: string;
  amazonLink?: string;
  bookType?: (
    | "Young Adult"
    | "Adult"
    | "Adaptations"
    | "Script Book"
  )[];
  description?: string;
  releaseDate?: string;
}

export const legendsNovels: Novel[] = [
  {
    id: "dawn-of-the-jedi-into-the-void",
    title: "Dawn of the Jedi: Into the Void",
    author: "Tim Lebbon",
    timelinePlacement: -25793.0,
    timelineLabel: "25,793 BBY",
    bookType: ["Adult", "Legends", "Dawn of the Jedi"],
    coverUrl: getLegendsCover("dawnofthejedi.jpg"),
    amazonLink: "https://amzn.to/4fvdX6i",
    description: `NEW YORK TIMES BESTSELLER • Discover the origins of the Jedi order, as a lone Je’daii ranger fights to save their ancient homeworld, Tython, from disaster.

On the planet Tython, the ancient Je’daii order was founded. And at the feet of its wise Masters, Lanoree Brock learned the mysteries and methods of the Force—and found her calling as one of its most powerful disciples. But as strongly as the Force flowed within Lanoree and her parents, it remained absent in her brother, who grew to despise and shun the Je’daii, and whose training in its ancient ways ended in tragedy.
 
Now, from her solitary life as a Ranger keeping order across the galaxy, Lanoree has been summoned by the Je’daii Council on a matter of utmost urgency. The leader of a fanatical cult, obsessed with traveling beyond the reaches of known space, is bent on opening a cosmic gateway using dreaded dark matter as the key—risking a cataclysmic reaction that will consume the entire star system. But more shocking to Lanoree than even the prospect of total galactic annihilation, is the decision of her Je’daii Masters to task her with the mission of preventing it. Until a staggering revelation makes clear why she was chosen: The brilliant, dangerous madman she must track down and stop at any cost is the brother whose death she has long grieved—and whose life she must now fear.`,
    releaseDate: "May 7, 2013",
  },
  {
    id: "lost-tribe-of-the-sith-the-collected-stories",
    title: "Lost Tribe of the Sith: The Collected Stories",
    author: "John Jackson Miller",
    timelinePlacement: -5000.0,
    timelineLabel: "5000-2975 BBY",
    bookType: ["Adult", "Anthology", "Legends", "The Old Republic",],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1326407357i/13023324.jpg",
    amazonLink: "https://amzn.to/49wY5ws",
    description: `At last in one volume, the eight original installments of the epic Lost Tribe of the Sith eBook series . . . along with the explosive, never-before-published finale, Pandemonium—more than one hundred pages of new material!
 
Five thousand years ago. After a Jedi ambush, the Sith mining ship Omen lies wrecked on a remote, unknown planet. Its commander, Yaru Korsin, battles the bloodshed of a mutinous faction led by his own brother. Marooned and facing death, the Sith crew have no choice but to venture into their desolate surroundings. They face any number of brutal challenges—vicious predators, lethal plagues, tribal people who worship vengeful gods—and like true Sith warriors, counter them with the dark side of the Force.
 
The struggles are just beginning for the proud, uncompromising Sith, driven as they are to rule at all costs. They will vanquish the primitive natives, and they will find their way back to their true destiny as rulers of the galaxy. But as their legacy grows over thousands of years, the Sith ultimately find themselves tested by the most dangerous threat of all: the enemy within.`,
    releaseDate: "July 24, 2012",
  },
  {
    id: "the-old-republic-revan",
    title: "The Old Republic: Revan",
    author: "Drew Karpyshyn",
    timelinePlacement: -3954.0,
    timelineLabel: "3,954-3,950 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl: getLegendsCover("revan.jpg"),
    amazonLink: "https://amzn.to/4nyvInw",
    description: `There’s something out there:
a juggernaut of evil bearing down to crush the Republic—
unless one lone Jedi, shunned and reviled, can stop it.

Hero, traitor, conqueror, villain, savior—the man called Revan has been all of these. He left Coruscant a Jedi, on a mission to defeat the Mandalorians. He returned a Sith disciple, bent on destroying the Republic. The Jedi Council gave Revan his life back, but the price of redemption was the loss of his memories. All that’s left are nightmares—and deep, abiding fear. What happened beyond the Outer Rim that Revan can’t quite remember or entirely forget? One thing he’s certain of: Something dark is plotting to destroy the very existence of the Republic. With no idea how to identify the threat, let alone stop it, Revan may be doomed to fail. For he’s never faced a more powerful and diabolic enemy. But only death can stop him from trying.`,
    releaseDate: "October 1, 2011",
  },
  {
    id: "the-old-republic-deceived",
    title: "The Old Republic: Deceived",
    author: "Paul S. Kemp",
    timelinePlacement: -3653.0,
    timelineLabel: "3,653 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1333577642i/12828692.jpg",
    amazonLink: "https://amzn.to/3PLAxx8",
    description: `The Sith Empire rises from the ashes, set on a path of destruction and devastation in the wake of one of its most sinister dark lords—Darth Malgus.

Our time has come. For three hundred years we prepared; we grew stronger while you rested in your cradle of power, believing your people were safe and protected. You were trusted to lead the Republic, but you were deceived, as our powers of the dark side have blinded you. . . . You were deceived and now your Republic shall fall.

It is a time of vengeance in a galaxy far, far away.

Darth Malgus steps out of the shadows to lead the Sith in striking a fatal blow to the heart of the Jedi Order. Crimson blades rain death and pain upon the Republic, seizing control of Coruscant. But even in triumph, Darth Malgus discovers betrayal by his own brethren, a quest for peace with the Republic that will only corrode their hard-won power.`,
    releaseDate: "March 22, 2011",
  },
  {
    id: "red-harvest",
    title: "Red Harvest",
    author: "Joe Schreiber",
    timelinePlacement: -3645.0,
    timelineLabel: "3,645 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320421116i/11752662.jpg",
    amazonLink: "https://amzn.to/3RbkY2i",
    description: `The era of the Old Republic is a dark and dangerous time, as Jedi Knights valiantly battle the Sith Lords and their ruthless armies. But the Sith have disturbing plans – and none more so than the fulfilment of Darth Scabrous’s fanatical dream, which is about to become nightmarish reality.

Unlike those other Jedi sidelined to the Agricultural Corps – young Jedi whose abilities have not proved up to snuff – Hestizo Trace possesses one extraordinary Force talent: a gift with plants. Suddenly her quiet existence among greenhouse and garden specimens is violently destroyed by the arrival of an emissary from Darth Scabrous. For the rare black orchid that she has nurtured and bonded with is the final ingredient in an ancient Sith formula that promises to grant Darth Scabrous his greatest desire.

But at the heart of the formula is a never-before-seen virus that’s worse than fatal – it doesn’t just kill, it transforms. Now the rotting, ravenous dead are rising, driven by a bloodthirsty hunger for all things living –and commanded by a Sith Master with an insatiable lust for power and the ultimate prize: immortality… no matter the cost.`,
    releaseDate: "December 28, 2010",
  },
  {
    id: "the-old-republic-fatal-alliance",
    title: "The Old Republic: Fatal Alliance",
    author: "Sean Williams",
    timelinePlacement: -3643.0,
    timelineLabel: "3,643 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1338217780i/10994778.jpg",
    amazonLink: "https://amzn.to/49LdQQn",
    description: `Long-standing foes must put aside their ancient grudges and deep-seated distrust to uncover and defeat a threat to the galaxy before it can escape its isolation—forcing Sith and Jedi to raise their lightsabers together.

“When I look into you, I see no loyalty. . . . I sense only tangled allegiances. . . . Given a choice, I would never trust you.”

From across the galaxy they’ve come: agents of both the Republic and the Sith Empire, an investigating Jedi Padawan, an ex-trooper drummed out of the Republic’s elite Blackstar Squad, and a mysterious Mandalorian.

An extraordinary auction has drawn them all together—in quest of a prize only one can claim. Each is prepared to do what he must to possess the treasure, whose value may be the wealth of a world itself. No one intends to leave empty-handed. All have secrets, desires, and schemes. And nothing could ever unite them as allies—except the truth about the deadly danger of the object they covet.

But can Sith and Jedi, Republic and Empire—enemies for millennia—join as one against the certain doom of the galaxy?`,
    releaseDate: "July 1, 2010",
  },
  {
    id: "the-old-republic-annihilation",
    title: "The Old Republic: Annihilation",
    author: "Drew Karpyshyn",
    timelinePlacement: -3640.0,
    timelineLabel: "3,640 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1337956283i/13533656.jpg",
    amazonLink: "https://amzn.to/4eQ2KNw",
    description: `Light side, dark side—these are just empty words. . . . There are only two sides I care about: us and them. Republic or Empire!

The Sith Empire is in flux. The Emperor is missing, presumed dead, and an ambitious Sith lord’s attempt to seize the throne has ended fatally. Still, Darth Karrid, commander of the fearsome Imperial battle cruiser Ascendant Spear, continues her relentless efforts to achieve total Sith domination of the galaxy.

But Karrid’s ruthless determination is more than matched by the steely resolve of Theron Shan, whose unfinished business with the Empire could change the course of the war for good. Though the son of a Jedi master, Theron does not wield the Force—but, like his renowned mother, he has the spirit of rebellion in his blood. As a top covert agent for the Republic, he struck a crucial blow against the Empire by exposing and destroying a Sith superweapon arsenal—which makes him the ideal operative for a daring and dangerous mission to end Ascendant Spear’s reign of terror.

Joined by hot-headed smuggler Teff’ith, with whom he has an inexplicable bond, and wise Jedi warrior Gnost-Dural, Darth Karrid’s former master, Theron must match wits and weapons with a battle-tested crew of the most cold-blooded disciples of the Dark Side. But time is running brutally short. And if they don’t seize their one chance to succeed, they will surely have countless opportunities to die.`,
    releaseDate: "January 1, 2012",
  },
  {
    id: "knight-errant",
    title: "Knight Errant",
    author: "John Jackson Miller",
    timelinePlacement: -1032.0,
    timelineLabel: "1,032 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320541726i/8323122.jpg",
    amazonLink: "https://amzn.to/4wsf7FP",
    description: `A thousand years before Luke Skywalker, a generation before Darth Bane, in a galaxy far, far away . . .

The Republic is in crisis. The Sith roam unchecked, vying with one another to dominate the galaxy. 

But one lone Jedi, Kerra Holt, is determined to take down the Dark Lords. Her enemies are strange and many: Lord Daiman, who imagines himself the creator of the universe; Lord Odion, who intends to be its destroyer; the curious siblings Quillan and Dromika; the enigmatic Arkadia. So many warring Sith weaving a patchwork of brutality—with only Kerra Holt to defend the innocents caught underfoot.

Sensing a sinister pattern in the chaos, Kerra embarks on a journey that will take her into fierce battles against even fiercer enemies. With one against so many, her only chance of success lies with forging alliances among those who serve her enemies—including a mysterious Sith spy and a clever mercenary general. But will they be her adversaries or her salvation?`,
    releaseDate: "January 25, 2011",
  },
  {
    id: "darth-bane-path-of-destruction",
    title: "Darth Bane: Path of Destruction",
    author: "Drew Karpyshyn",
    timelinePlacement: -1003.0,
    timelineLabel: "1,003-1,000 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388713193i/35430.jpg",
    amazonLink: "https://amzn.to/3PHsSA0",
    description: `This essential Star Wars Legends novel is the first in a trilogy chronicling the rise of the fearsome Sith lord Darth Bane.
 
“A solid space adventure [that] charts the evolution of an antihero almost as chilling as Darth Vader.”—Publishers Weekly

On the run from vengeful Republic forces, Dessel, a cortosis miner, vanishes into the ranks of the Sith army and ships out to join the bloody war against the Republic and its Jedi champions. There Dessel’s brutality, cunning, and exceptional command of the Force swiftly win him renown as a warrior. But in the eyes of his watchful masters, a far greater destiny awaits him.

As an acolyte in the Sith academy, studying the secrets and skills of the dark side, Dessel embraces his new identity: Bane. But the true test is yet to come. In order to gain acceptance into the Brotherhood of Darkness, he must defy the most sacred traditions and reject all he has been taught. It is a trial by fire in which he must surrender fully to the dark side—and forge from the ashes a new era of absolute power.`,
    releaseDate: "September 6, 2006",
  },
  {
    id: "darth-bane-rule-of-two",
    title: "Darth Bane: Rule of Two",
    author: "Drew Karpyshyn",
    timelinePlacement: -1000.0,
    timelineLabel: "1,000-990 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1281997208i/1347837.jpg",
    amazonLink: "https://amzn.to/3RcMEDU",
    description: `In this essential Star Wars Legends novel, the second in the Darth Bane trilogy, the fearsome Sith lord takes on a deadly new apprentice.

Darth Bane’s twisted genius made him a natural leader among the Sith–until his radical embrace of an all-but-forgotten wisdom drove him to destroy his own order . . . and create it anew from the ashes. As the last surviving Sith, Darth Bane promulgated a harsh new directive: the Rule of Two.

Two there should be; no more, no less.
One to embody the power, the other to crave it.

Now Darth Bane is ready to put his policy into action and thinks he has found the key element that will make his triumph complete: a student to train in the ways of the dark side. Though she is young, Zannah possesses an instinctive link to the dark side that rivals his own. With his guidance, she will become essential in his quest to destroy the Jedi and dominate the galaxy.`,
    releaseDate: "December 26, 2007",
  },
  {
    id: "darth-bane-dynasty-of-evil",
    title: "Darth Bane: Dynasty of Evil",
    author: "Drew Karpyshyn",
    timelinePlacement: -980.0,
    timelineLabel: "980 BBY",
    bookType: ["Adult", "Legends", "The Old Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1410768705i/18412456.jpg",
    amazonLink: "https://amzn.to/3RtYhq5",
    description: `The future of the dark side hangs in the balance in the stunning conclusion to the Darth Bane series.

Twenty years have passed since the Sith and their endless rivalries were eradicated and replaced with the Rule of Two. Darth Bane now reigns alongside his young acolyte, Zannah, who must study and train in the dark side of the Force until the time comes to strike down her master and claim the mantle for herself.

But Bane’s brutal new regime has one potential fatal flaw—how will their legacy continue if an apprentice fails to raise their blade in combat? The only solution must be for the Dark Lord of the Sith to rediscover a long-forgotten secret of the order—the key to immortality.

Bane’s doubt spurs his young apprentice into action, and Zannah vows to destroy her master at any cost. After he mysteriously vanishes, she tracks him across the galaxy to a desolate desert outpost, where the fate of the dark side will be forged by a final fight to the death.`,
    releaseDate: "December 1, 2009",
  },
  {
    id: "legacy-of-the-jedi",
    title: "Legacy of the Jedi",
    author: "Jude Watson",
    timelinePlacement: -89.0,
    timelineLabel: "89-22 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328867482i/791780.jpg",
    amazonLink: "https://amzn.to/4wu3X3n",
    description: `Four generations of Jedi come together in this must-have Star Wars special edition, an all new story featuring Yoda, Obi-Wan, Qui-Gon, and the evil Count Dooku...before he turns bad.

4 Masters. 4 Apprentices. Yoda and Dooku. Dooku and Qui-Gon. Qui-Gon and Obi-Wan (the focus of the best-selling Jedi Apprentice series). Obi-Wan and Anakin (featured in the best-selling Jedi Quest series).

One enemy. A Jedi student with a dark streak at the beginning of the book, he becomes a powerful -- and potentially dangerous -- planetary leader whose help Obi-Wan and Anakin will need in the Clone Wars.`,
    releaseDate: "August 1, 2003",
  },
  {
    id: "crucible",
    title: "Crucible",
    author: "Troy Denning",
    timelinePlacement: 45.0,
    timelineLabel: "45 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71uhn1peJ8L._SY522_.jpg",
    amazonLink: "https://amzn.to/4eKCV1n",
    description: `Han Solo, Leia Organa Solo, and Luke Skywalker return in an all-new Star Wars adventure, which will challenge them in ways they never expected—and forever alter their understanding of life and the Force.
 
When Han and Leia Solo arrive at Lando Calrissian’s Outer Rim mining operation to help him thwart a hostile takeover, their aim is just to even up the odds and lay down the law. Then monstrous aliens arrive with a message, and mere threats escalate into violent sabotage with mass fatalities. When the dust settles, what began as corporate warfare becomes a battle with much higher stakes—and far deadlier consequences.
 
Now Han, Leia, and Luke team up once again in a quest to defeat a dangerous adversary bent on galaxy-wide domination. Only this time, the Empire is not the enemy. It is a  pair of ruthless geniuses with a lethal ally and a lifelong vendetta against Han Solo. And when the murderous duo gets the drop on Han, he finds himself outgunned in the fight of his life. To save him, and the galaxy, Luke and Leia must brave a gauntlet of treachery, terrorism, and the untold power of an enigmatic artifact capable of bending space, time, and even the Force itself into an apocalyptic nightmare.`,
    releaseDate: "July 9, 2013",
  },
  {
    id: "allies",
    title: "Allies",
    author: "Christie Golden",
    timelinePlacement: 44.0,
    timelineLabel: "44 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/616pDobJmML._SY522_.jpg",
    amazonLink: "https://amzn.to/3Rs8Uts",
    description: `Only one thing could unite the forces of Jedi and Sith: an enemy far deadlier than both.
 
What began as a quest for truth has become a struggle for survival for Luke Skywalker and his son, Ben. They have used the secrets of the Mind Walkers to speak with the spirits of the fallen, risking their lives in the process. They have faced a team of Sith assassins and beaten the odds to destroy them. And now the death squad’s sole survivor, Sith apprentice Vestara Khai, has summoned an entire fleet of Sith frigates to engage the embattled father and son. But the dark warriors come bearing a surprising proposition that will bring Jedi and Sith together in an unprecedented alliance against an adversary more ancient and alien than they can imagine. For in the treacherous web of black holes that is the Maw, the Skywalkers and their Sith allies will have to fight an unimaginable evil, and Luke will be rocked by a staggering truth.`,
    releaseDate: "May 25, 2010",
  },
  {
    id: "vortex",
    title: "Vortex",
    author: "Troy Denning",
    timelinePlacement: 44.0,
    timelineLabel: "44 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91WJ74n3keL._SY522_.jpg",
    amazonLink: "https://amzn.to/493D4JJ",
    description: `Jedi and Sith fight side by side against an even greater foe.
But how long can enemies remain allies?
And how high is the price of betrayal?
 
In a stunning turn of events, Luke Skywalker and his son, Ben, joined forces with the Sith armada sent to kill them—and used their combined might against the monstrous being Abeloth. But when the wounded creature escapes, the fragile armistice crumbles, and hostilities resume with the attempted assassination of Luke.

On the hunt for Abeloth and on the run from the Sith, Luke and Ben find themselves trapped by a mob of angry Force adepts who care little for the difference between light side and dark side.

With the Jedi’s most famous father-and-son team outnumbered and outgunned, the countdown to galactic disaster has begun—and time is running out.`,
    releaseDate: "November 30, 2010",
  },
  {
    id: "conviction",
    title: "Conviction",
    author: "Aaron Allston",
    timelinePlacement: 44.0,
    timelineLabel: "44 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91AbUmapqfL._SY522_.jpg",
    amazonLink: "https://amzn.to/4wxvHEd",
    description: `The Jedi have struck a blow against tyranny. Can they strike down ultimate evil?
 
Chief of State Natasi Daala has been overthrown, and the Jedi Order has taken control of the Galactic Alliance. But while the new governors dismantle Daala’s draconian regime, forces still loyal to the deposed official are mobilizing a counterstrike. And even the Jedi’s new authority may not be enough to save Tahiri Veila, the former Jedi Knight and onetime Sith apprentice convicted of treason for the killing of Galactic Alliance officer Gilad Pellaeon.
 
Meanwhile, Luke and Ben Skywalker are relentlessly pursuing Abeloth, the powerful dark-side entity bent on ruling the galaxy. But as they corner their monstrous quarry on the planet Nam Chorios, the two lone Jedi must also face the fury of the Sith death squadron bearing down on them. And when Abeloth turns the tables with an insidious ambush, the Skywalkers’ quest threatens to become a suicide mission.`,
    releaseDate: "May 24, 2011",
  },
  {
    id: "ascension",
    title: "Ascension",
    author: "Christie Golden",
    timelinePlacement: 44.0,
    timelineLabel: "44 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81rvNGzYkGL._SY522_.jpg",
    amazonLink: "https://amzn.to/4ny3nNV",
    description: `THE GALAXY STANDS LEADERLESS. CAN THE JEDI SAVE IT—OR WILL THEIR ENEMIES ENSLAVE IT?

The toppling of ruthless Natasi Daala has left a political vacuum on Coruscant and ignited a power struggle between opposing factions racing to claim control of the Galactic Alliance. Surrounded by hidden agendas, treacherous conspiracies, and covert Sith agents, the Jedi Order must keep the government from collapsing into anarchy—while facing the combined threats of the resurgent Lost Sith Tribe, a deposed dictator bent on vengeance, and the enduring menace of Abeloth, the profoundly evil entity hungry to become a god.`,
    releaseDate: "August 9, 2011",
  },
  {
    id: "apocalypse",
    title: "Apocalypse",
    author: "Troy Denning",
    timelinePlacement: 44.0,
    timelineLabel: "44 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/816Z6z0PE8L._SY522_.jpg",
    amazonLink: "https://amzn.to/4dg7UkU",
    description: `There can be no surrender. There will be no mercy.
It’s not just the future of the galaxy at stake.
It’s the destiny of the Force.

In the stunning finale of the epic Fate of the Jedi series, Jedi and Sith face off—with Coruscant as their battlefield. For the Sith, it’s the chance to restore their dominance over the galaxy that forgot them for so long. For Abeloth, it’s a giant step in her quest to conquer all life everywhere. For Luke Skywalker, it’s a call to arms to eradicate the Sith and their monstrous new master once and for all.
 
In a planetwide strike, teams of Jedi Knights take the Sith infiltrators by swift and lethal surprise. But victory against the cunning and savage Abeloth, and the terrifying endgame she has planned, is anything but certain. And as Luke, Ben, Han, Leia, Jaina, Jag, and their allies close in, the devastating truth about the dark side incarnate will be exposed—and send shock waves through the Jedi Order, the galaxy, and the Force itself.`,
    releaseDate: "March 13, 2012",
  },
  {
    id: "x-wing-mercy-kill",
    title: "Mercy Kill",
    author: "Aaron Allston",
    timelinePlacement: 44.0,
    timelineLabel: "44 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51yhOwpJwML.jpg",
    amazonLink: "https://amzn.to/3Rue8F7",
    description: `Wraith Squadron soars back into action, on a full-throttle mission to match wits and weapons with an Imperial General gone rogue.

Wraith Squadron: The elite X-wing unit of rogues and misfits who became legends of the Rebellion, specializing in carrying out the most dangerous and daring operations before breaking up and going their separate ways. Now, three decades later, their singular skills are back in demand for a tailor-made Wraith Squadron mission.

A powerful general in the Galactic Alliance Army, once renowned for his valor, is suspected of participating in a conspiracy that nearly succeeded in toppling the Alliance back into the merciless hands of the Empire. With orders to expose and apprehend the traitor—and license to do so by any and all means—the Wraiths will become thieves, pirates, impostors, forgers . . . and targets, as they put their guts, their guns, and their riskiest game plan to the test!`,
    releaseDate: "August 7, 2012",
  },
  {
    id: "millennium-falcon",
    title: "Millennium Falcon",
    author: "James Luceno",
    timelinePlacement: 43,
    timelineLabel: "43 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81JdQdw1XeL._SY522_.jpg",
    amazonLink: "https://amzn.to/4nu9jYh",
    description: `Climb aboard, buckle up, and prepare to jump to hyperspace for a dazzling adventure aboard the ship that launched a thousand fates.

Two years have passed since the death of the brutal Sith Lord Darth Caedus–once known as Jacen Solo. The galaxy is slowly healing from civil war, while Jacen’s family and friends are left to mourn his loss alone. For Han and Leia, still grieving for their son, the only bright spot is Jacen’s daughter, Allana, who has been given into their care. Now Allana introduces new adventure into her grandparents’ lives when she discovers a strange device hidden aboard the Millennium Falcon–a discovery that sparks a fact-finding expedition to retrace the people, places, and events in the checkered history of the famous spaceship. But the Solos are not alone in their quest: Crime lords, galactic pirates, rogue politicians, and fortune hunters alike will race to a final standoff for a prize some will risk everything to find–and pay any cost to possess.`,
    releaseDate: "October 22, 2008",
  },
  {
    id: "outcast",
    title: "Outcast",
    author: "Aaron Allston",
    timelinePlacement: 43,
    timelineLabel: "43 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81Ho+aeeGNL._SY522_.jpg",
    amazonLink: "https://amzn.to/42EedbF",
    description: `Does a new start for the Galactic Alliance mark the beginning of the fall of the Jedi Order?
 
After a violent civil war and the devastation wrought by the now fallen Darth Caedus, the Galactic Alliance is in crisis. From all corners, politicians, power brokers, and military leaders converge on Coruscant for a crucial summit to restore order and determine the future of their unified worlds. But even more critical, and far more uncertain, is the future of the Jedi.

In a shocking move, Chief of State Natasi Daala orders the arrest of Luke Skywalker for failing to prevent Jacen Solo’s turn to the dark side and his subsequent reign of terror as a Sith Lord. But it’s only the first blow in an anti-Jedi backlash fueled by a hostile government and suspicious public. Negotiating his freedom in exchange for his exile from the Jedi Order, Luke, with his son, Ben, at his side, sets out to unravel the shocking truth behind Jacen Solo’s corruption and downfall. But the secrets Luke uncovers may bring his quest—and life as he knows it—to a sudden end. And all the while, another Jedi Knight, consumed by madness, is headed to Coruscant on a fearsome mission that could devastate the entire galaxy.`,
    releaseDate: "March 24, 2009",
  },
  {
    id: "omen",
    title: "Omen",
    author: "Christie Golden",
    timelinePlacement: 43,
    timelineLabel: "43 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/814E3ZloSoL._SY522_.jpg",
    amazonLink: "https://amzn.to/4nsIDXS",
    description: `The Jedi Order is in crisis. The late Jacen Solo’s shocking transformation into murderous Sith Lord Darth Caedus has cast a damning pall over those who wield the Force for good: Two Jedi Knights have succumbed to an inexplicable and dangerous psychosis, criminal charges have driven Luke Skywalker into self-imposed exile, and power-hungry Chief of State Natasi Daala is exploiting anti-Jedi sentiment to undermine the Order’s influence within the Galactic Alliance.

Forbidden to intervene in Jedi affairs, Luke is on a desperate mission to uncover the truth behind Jacen’s fall to the dark side–and to learn what’s turning peaceful Jedi into raving lunatics. But finding answers will mean venturing into the mind-bending space of the Kathol Rift and bargaining with an alien species as likely to destroy outsiders as deal with them. Still, there is no other choice and no time to lose, as the catastrophic events on Coruscant continue to escalate. Stricken by the same violent dementia that infected her brother, Valin, Jedi Knight Jysella Horn faces an equally grim fate after her capture by Natasi Daala’s police. And when Han and Leia Solo narrowly foil another deranged Jedi bent on deadly destruction, even acting Jedi Grand Master Kenth Hamner appears willing to bow to Daala’s iron will–at the expense of the Jedi Order.

But an even greater threat is looming. Millennia in the past, a Sith starship crashed on an unknown low-tech planet, leaving the survivors stranded. Over the generations, their numbers have grown, the ways of the dark side have been nurtured, and the time is fast approaching when this lost tribe of Sith will once more take to the stars to reclaim their legendary destiny as rulers of the galaxy. Only one thing stands in their way, a name whispered to them through the Force: Skywalker.`,
    releaseDate: "June 23, 2009",
  },
    {
    id: "abyss",
    title: "Abyss",
    author: "Troy Denning",
    timelinePlacement: 43,
    timelineLabel: "43 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71nan1016QL._SY522_.jpg",
    amazonLink: "https://amzn.to/4dMCIcZ",
    description: `Peace is the way of the Jedi. But with deadly enemies on every side, war may be the only way out.
 
On Coruscant, an epidemic of madness is preying on the ranks of the Jedi Order—driving the Galactic Alliance to martial actions. As Han and Leia Solo, along with their daughter, Jaina, join the fight to protect more stricken Knights from arrest, Jedi healers race to find a cure for the rapidly spreading affliction.
   
Meanwhile, Luke Skywalker continues his quest to find the reasons behind Jacen Solo’s dark downfall and to win redemption for the Jedi Order—a journey that draws Luke and his son, Ben, to the forbidden reaches of the Maw Cluster. There dwell the Mind Walkers: those whose power to transcend their bodies and be one with the Force is as seductive as it is potentially fatal. As Luke and Ben push their Force abilities beyond known limits, they draw closer to a nexus of dark-side energy unprecedented in its power, and to an explosive confrontation from which only one Master—good or evil—can emerge alive.`,
    releaseDate: "August 18, 2009",
  },
  {
    id: "backlash",
    title: "Backlash",
    author: "Aaron Allston",
    timelinePlacement: 43,
    timelineLabel: "43 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81xe1c1ZS8L._SY522_.jpg",
    amazonLink: "https://amzn.to/4uUY263",
    description: `Locked in a war of wills and weapons, the Jedi Order and the Galactic Alliance must come to terms—before the Sith’s army of darkness enacts revenge.
 
Repercussions from the dark side’s fatal seduction of Jacen Solo and the mysterious plague of madness afflicting young Jedi continue to wreak galaxywide havoc. Luke and Ben Skywalker are in pursuit of the now Masterless Sith apprentice—a chase that leads to the forbidding planet Dathomir, where the Skywalkers will be forced into combat for their quarry and their lives. Meanwhile, Han and Leia have completed their own desperate mission, shuttling madness-stricken Jedi to safe haven beyond the grasp of Galactic Alliance Chief of State Natasi Daala. Yet no greater threat exists than Abeloth, a being of ravenous dark-side energy who calls out to Jedi and Sith alike. For some it may be the ultimate source of answers for survival. For others it could be the ultimate weapon of conquest. But for all, it is a game-changing encounter of untold magnitude with unimaginable consequences.`,
    releaseDate: "March 9, 2010",
  },
  {
    id: "revelation",
    title: "Revelation",
    author: "Karen Traviss",
    timelinePlacement: 41.0,
    timelineLabel: "41 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81McgfMseaL._SY522_.jpg",
    amazonLink: "https://amzn.to/4uf9cT9",
    description: `During this savage civil war, all efforts to end Jacen Solo’s tyranny of the Galactic Alliance have failed. Now with Jacen approaching the height of his dark powers, no one–not even the Solos and the Skywalkers–knows if anything can stop the Sith Lord before his plan to save the galaxy ends up destroying it.

Jacen Solo’s shadow of influence has threatened many, especially those closest to him. Jaina Solo is determined to bring her brother in, but in order to track him down, she must first learn unfamiliar skills from a man she finds ruthless, repellent, and dangerous. Meanwhile, Ben Skywalker, still haunted by suspicions that Jacen killed his mother, Mara, decides he must know the truth, even if it costs him his life. And as Luke Skywalker contemplates once unthinkable strategies to dethrone his nephew, the hour of reckoning for those on both sides draws near. The galaxy becomes a battlefield where all must face their true nature and darkest secrets, and live–or die–with the consequences.`,
    releaseDate: "February 26, 2008",
  },
  {
    id: "invincible",
    title: "Invincible",
    author: "Troy Denning",
    timelinePlacement: 41,
    timelineLabel: "41 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81u--sJU9mL._SY522_.jpg",
    amazonLink: "https://amzn.to/3PKpIvl",
    description: `No war can last forever. Now, in the long and punishing battle between the defiant champions of the New Jedi Order and the juggernaut that is the Galactic Alliance, the endgame is finally at hand. With so much lost–and nothing less than the course of the future still at stake–there can be no turning back. No matter the consequences.

The rebel cause is losing ground under the twin blows of Admiral Gilad Pellaeon’s assassination and the death of Mara Jade Skywalker. At the same time, having gained the support of the Imperial Remnant and its ruthlessly efficient forces, the Galactic Alliance, with the extraordinary power and dark brilliance of newly ascendant Sith Lord Darth Caedus at its helm, may be unstoppable. Tormented and torn between the call of duty and the thirst for vengeance, Luke has searched the Force and beheld an unspeakable vision of the galaxy enslaved under tyranny more monstrous than even Palpatine’s. Now it seems that the last, best hope lies in mobilizing the scattered Jedi for one decisive search-and-destroy mission. The objective: eliminate Darth Caedus.

It’s a plan that will be as difficult and dangerous to execute as it is daring. For Caedus is a scion of both the Skywalker and Solo bloodlines whose command of the Force surpasses even that of his grandfather

Darth Vader. There is only one who is bound by destiny to stand against him in what will surely be a duel to the death, only one with an outside chance of bringing down the dark lord who was once Jacen Solo.

Failure is not an option. The furious final moments between power and peace are here, and whoever confronts Darth Caedus will decide the outcome–and the fate of those left standing.`,
    releaseDate: "May 13, 2008",
  },
  {
    id: "crosscurrent",
    title: "Crosscurrent",
    author: "Paul S. Kemp",
    timelinePlacement: 41,
    timelineLabel: "41 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71Zx2UiUWzL._SY522_.jpg",
    amazonLink: "https://amzn.to/4wFgCAP",
    description: `An ancient Sith ship hurtles into the future carrying a lethal cargo that could forever destroy Luke Skywalker’s hopes for peace.
 
The Civil War is almost over when Jedi Knight Jaden Korr experiences a Force vision so intense he must act. Enlisting two salvage jocks and their ship, Jaden sets out into space. Someone—or something—appears to be in distress.

But what Jaden and his crew find confounds them. A five-thousand-year-old dreadnaught—bringing with it a full force of Sith and one lone Jedi—has inadvertently catapulted eons from the past into the present. The ship’s weapons may not be cutting-edge, but its cargo, a special ore that makes those who use the dark side nearly invincible, is unsurpassed. The ancient Jedi on board is determined to destroy the Sith. But for Jaden, even more is at stake: for his vision has led him to uncover a potentially indestructible threat to everything the Jedi Order stands for.`,
    releaseDate: "January 26, 2010",
  },
  {
    id: "riptide",
    title: "Riptide",
    author: "Paul S. Kemp",
    timelinePlacement: 41,
    timelineLabel: "41 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81fAHlvWsCL._SY522_.jpg",
    amazonLink: "https://amzn.to/495PC39",
    description: `Anyone can escape danger. No one can escape the truth.

When a ship full of Sith warriors arrived in Galactic Alliance space, the fight to destroy it accidentally uncovered a hidden menace: a long-hidden group of clones, secretly created as insidious weapons capable of wielding the Force and heedless of the differences between light side and dark side. Now the clones have escaped—and evidence suggests that they are flawed by genetic disease and violent madness.

Jedi Knight Jaden Korr pursues the clones, hoping to heal them but prepared to destroy them. What he doesn’t know is that Sith agents are hot on his heels, determined not only to recover the clones for their Master but to capture Jaden for their own dark-side purposes. In a life-or-death battle, Jaden will confront a shocking reality that will rock him to his core and bring him face-to-face with the question of what makes a man . . . and a Jedi.`,
    releaseDate: "October 25, 2011",
  },
  {
    id: "betrayal",
    title: "Betrayal",
    author: "Aaron Allston",
    timelinePlacement: 40.0,
    timelineLabel: "40 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71-+yqWHVwL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3RInRaU",
    description: `Honor and duty collide with friendship and blood ties as the Skywalker and Solo clans find themselves on opposing sides of an explosive conflict.

When a mission to uncover an illegal missile factory on the planet Adumar ends in a violent ambush–from which Jedi Knight Jacen Solo and his protégé and cousin, Ben Skywalker, narrowly escape with their lives–it’s the most alarming evidence yet that political unrest is threatening to ignite into total rebellion. The specter of full-scale war looms between a growing cadre of defiant planets and the Galactic Alliance that some fear is becoming a new Empire.

Determined to root out those behind the mayhem, Jacen follows a trail of cryptic clues to a rendezvous with the most shocking of revelations. Meanwhile Luke grapples with something even more troubling: dream visions of a shadowy figure whose Force power and ruthlessness remind him of Darth Vader. If Luke’s visions come to pass, they will bring untold pain to the Jedi Master . . . and to the galaxy.`,
    releaseDate: "May 30, 2006",
  },
  {
    id: "bloodlines",
    title: "Bloodlines",
    author: "Karen Traviss",
    timelinePlacement: 40.0,
    timelineLabel: "40 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/61wPBw6QrTL._SY522_.jpg",
    amazonLink: "https://amzn.to/4uMoZbS",
    description: `A new era of exciting adventures and shocking revelations continues to unfold, as the legendary Star Wars saga sweeps forward into astonishing new territory.

Civil war looms as the fledgling Galactic Alliance confronts a growing number of rebellious worlds–and the approaching war is tearing the Skywalker and Solo families apart. Han and Leia return to Han’s homeworld, Corellia, the heart of the resistance. Their children, Jacen and Jaina, are soldiers in the Galactic Alliance’s campaign to crush the insurgents.

Jacen, now a complete master of the Force, has his own plans to bring order to the galaxy. Guided by his Sith mentor, Lumiya, and with Luke’s young son Ben at his side, Jacen embarks on the same path that his grandfather Darth Vader once did. And while Han and Leia watch their only son become a stranger, a secret assassin entangles the couple with a dreaded name from Han’s past: Boba Fett. In the new galactic order, friends and enemies are no longer what they seem. . . .`,
    releaseDate: "August 29, 2006",
  },
  {
    id: "tempest",
    title: "Tempest",
    author: "Troy Denning",
    timelinePlacement: 40.0,
    timelineLabel: "40 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81IeVQtBpKL._SY522_.jpg",
    amazonLink: "https://amzn.to/4uODQ5z",
    description: `Forty years after the Battle of Yavin a dangerous new era in the Star Wars epic begins–the revelations are shocking, the stakes desperate, and the enemy everywhere.

As civil war threatens the unity of the Galactic Alliance, Han and Leia Solo have enraged their families and the Jedi by joining the Corellian insurgents. But the Solos draw the line when they discover the rebels’ plot to make the Hapan Consortium an ally–which rests upon Hapan nobles murdering their pro-Alliance queen and her daughter.

Yet the Solos’ selfless determination to save the queen cannot dispel the inescapable consequences of their actions, that will pit mother against son and brother against sister in the battles ahead. For as Jacen Solo’s dark powers grow stronger under the Dark Jedi Lumiya, and his influence over Ben Skywalker becomes more insidious, Luke’s concern for his nephew forces him into a life-and-death struggle against his fiercest foe, and Han and Leia Solo find themselves at the mercy of their deadliest enemy . . . their son.`,
    releaseDate: "November 28, 2006",
  },
  {
    id: "exile",
    title: "Exile",
    author: "Aaron Allston",
    timelinePlacement: 40.0,
    timelineLabel: "40 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/614XxnG5ebL._SY522_.jpg",
    amazonLink: "https://amzn.to/49Q9abY",
    description: `In the Stars Wars galaxy, evil is on the move as the Galactic Alliance and Jedi order battle forces seen and unseen, from rampant internal treachery to the nightmare of all-out war.

With each victory against the Corellian rebels, Jacen Solo becomes more admired, more powerful, and more certain of achieving galactic peace. But that peace may come with a price. Despite strained relationships caused by opposing sympathies in the war, Han and Leia Solo and Luke and Mara Skywalker remain united by one frightening suspicion: Someone insidious is manipulating this war, and if he or she isn’t stopped, all efforts at reconciliation may be for naught. And as sinister visions lead Luke to believe that the source of the evil is none other than Lumiya, Dark Lady of the Sith, the greatest peril revolves around Jacen himself. . . .`,
    releaseDate: "February 27, 2007",
  },
  {
    id: "sacrifice",
    title: "Sacrifice",
    author: "Karen Traviss",
    timelinePlacement: 40.0,
    timelineLabel: "40 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51qMHjKl21L.jpg",
    amazonLink: "https://amzn.to/4wx4hOZ",
    description: `Civil war rages as the Galactic Alliance–led by Cal Omas and the Jedi forces of Luke Skywalker–battles a confederation of breakaway planets that rally to the side of rebellious Corellia. Suspected of involvement in an assassination plot against Queen Mother Tenel Ka of the Hapes Consortium, Han and Leia Solo are on the run, hunted by none other than their own son, Jacen, whose increasingly authoritarian tactics as head of GA security have led Luke and Mara Skywalker to fear that their nephew may be treading perilously close to the dark side.

But as his family sees in Jacen the chilling legacy of his Sith grandfather, Darth Vader, many of the frontline troops adore him, and countless citizens see him as a savior. The galaxy has been torn apart by too many wars. All Jacen wants is safety and stability for all–and he’s prepared to do whatever it takes to achieve that goal.

To end the bloodshed and suffering, what sacrifice would be too great? That is the question tormenting Jacen. Already he has sacrificed much, embracing the pitiless teachings of Lumiya, the Dark Lady of the Sith, who has taught him that a strong will and noble purpose can hold the evil excesses of the dark side at bay, bringing peace and order to the galaxy–but at a price.

For there is one final test that Jacen must pass before he can gain the awesome power of a true Sith Lord: He must bring about the death of someone he values dearly. What troubles Jacen isn’t whether he has the strength to commit murder. He has steeled himself for that, and worse if necessary. No, the question that troubles Jacen is who the sacrifice should be.

As the strands of destiny draw ever more tightly together in a galaxy-spanning web, the shocking answer will shatter two families . . . and cast a grim shadow over the future.`,
    releaseDate: "May 29, 2007",
  },
  {
    id: "inferno",
    title: "Inferno",
    author: "Troy Denning",
    timelinePlacement: 40.0,
    timelineLabel: "40 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/61gMGo3ErnL._SY522_.jpg",
    amazonLink: "https://amzn.to/3P3v04Y",
    description: `Luke Skywalker wanted to unify the Jedi order and bring peace to the universe. Instead his wife Mara lies dead at the hands of an unknown assassin, his wayward nephew Jacen has seized control of the Galactic Alliance, and the galaxy has exploded in all-out civil war.

With Luke consumed by grief, Jacen Solo works quickly to consolidate his power and jumpstart his plan to take over the Jedi. Convinced he’s the only one who can save the galaxy, Jacen will do whatever it takes, even ambush his own parents.

With the Rebel confederacy driving deep into the Core to attack Coruscant and the Jedi under siege, Luke must reassert his position. Only he can lead the Jedi through this crisis, but it means solving the toughest problem Luke’s ever faced. Does he fight alongside his nephew Jacen, a tyrant who’s illegally taken over the GA, or does he join the rebels to smash the Galactic Alliance he helped create?`,
    releaseDate: "August 28, 2007",
  },
  {
    id: "fury",
    title: "Fury",
    author: "Aaron Allston",
    timelinePlacement: 40.0,
    timelineLabel: "40 ABY",
    bookType: ["Adult", "Legends", "Legacy"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71v4ReHkubL._SY522_.jpg",
    amazonLink: "https://amzn.to/42Eeawv",
    description: `Fighting alongside the Corellian rebels, Han and Leia are locked in a war against their son Jacen, who grows more powerful and more dangerous with each passing day. Nothing can stop Jacen’s determination to bring peace with a glorious Galactic Alliance victory–whatever the price.

While Luke grieves the loss of his beloved wife and deals with his guilt over killing the wrong person in retaliation, Jaina, Jag, and Zekk hunt for the real assassin, unaware that the culprit commands Sith powers that can cloud their minds and misdirect their attacks–and even turn them back on themselves.

As Luke and Ben Skywalker struggle to find their place among the chaos, Jacen, shunned by friends and family, launches an invasion to rescue the only person still loyal to him. But with the battle raging on, and the galaxy growing more turbulent and riotous, there’s no question that it is Jacen who is most wanted: dead or alive.`,
    releaseDate: "November 27, 2007",
  },
  {
    id: "the-unseen-queen",
    title: "The Unseen Queen",
    author: "Troy Denning",
    timelinePlacement: 36.0,
    timelineLabel: "36 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1386922277i/160987.jpg",
    amazonLink: "https://amzn.to/4uUXCfZ",
    description: `The epic Star Wars odyssey enters a new frontier as the heroes of the New Jedi Order confront a monstrous evil–insidious, unseen, and insatiable. . . .

Despite being given new worlds to populate, the insectoid Killiks have not found peace. An unknown enemy has been attacking the new nests–and the Killiks hold the Jedi responsible. Traveling back to the Unknown Regions to unravel the mystery, the Skywalkers and Solos discover an evil far more familiar than they ever expected . . . and even more terrifying. Why does the Dark Nest want to kill Mara? Will Jacen’s apocalyptic vision trigger another galactic war or prevent one? And perhaps most ominous of all, what deadly secret are the Killiks hiding?

To find out, Luke, Mara, Han, and Leia mustembark on a perilous journey into the uncharted void between right and wrong. The ferocious Unknown Terrors are only the beginning of the awesome challenges that lie ahead in their quest to fathom the unfathomable. For an obscure dispute is about to explode into chaos, pitting Jedi against Jedi–and threatening the very galaxy itself.`,
    releaseDate: "September 27, 2005",
  },
  {
    id: "the-swarm-war",
    title: "The Swarm War",
    author: "Troy Denning",
    timelinePlacement: 36.0,
    timelineLabel: "36 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51H9kp24+gL.jpg",
    amazonLink: "https://amzn.to/4dQKQs3",
    description: `In the explosive conclusion to the Dark Nest trilogy, Luke Skywalker summons the heroes of the New Jedi Order from near and far, as the Star Wars galaxy teeters on the edge of eternal war. Yet even the combined powers of the formidable Jedi may not be enough to vanquish the deadly perils confronting them.

The Chiss-Killik border war is threatening to engulf the entire galaxy and raising the awful specter of Killiks sweeping across space to absorb all living creatures into a single hive mind. The only hope for peace lies with the Jedi–and only if they can not only end the bloodshed between two fierce enemies but also combat the insidious evil spread by the elusive Dark Nest and its unseen queen.

Leia’s newly acquired Jedi skills will be put to the ultimate test in the coming life-and-death battle. As for Luke, he will have to prove, in a lightning display of Force strength and swordplay, that he is– beyond a shadow of a doubt–the greatest Jedi Master in the galaxy.`,
    releaseDate: "December 27, 2005",
  },
  {
    id: "the-joiner-king",
    title: "The Joiner King",
    author: "Troy Denning",
    timelinePlacement: 35.0,
    timelineLabel: "35 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/512pHbGjQOL.jpg",
    amazonLink: "https://amzn.to/4dpHcoC",
    description: `After triumphing in Star Wars: The Unifying Force, the heroes of the New Jedi Order return in a dazzling new adventure!

Luke Skywalker is worried: A handful of Jedi Knights, including his nephew and niece, Jaina and Jacen Solo, have disappeared into the Unknown Regions in response to a strange cry for help that only they could hear. Now the alien Chiss have angrily lodged a formal complaint, accusing the missing Jedi of meddling in a border dispute between the Chiss and an unidentified aggressor.

Luke has no choice but to head to the Unknown Regions for serious damage control. Han and Leia follow, intent on protecting their children from what could be grave danger. But none of them are prepared for what they find when they reach their destination.

A colony of mysterious aliens is expanding toward the edge of Chiss space. The leader of the alien nest is resolute. Adept in the Force, he is drawing old friends to his side, compelling them to join the colony and meld their Force-abilities with his, even if it leads to all-out war. . . .`,
    releaseDate: "July 26, 2005",
  },
  {
    id: "episode-i-adventures-1-search-for-the-lost-jedi",
    title: "Episode I Adventures 1: Search for the Lost Jedi",
    author: "Ryder Windham",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures1.jpg"),
    amazonLink: "https://amzn.to/4dCI1KG",
    description: `A Jedi Master is missing.

She is trapped in a hostile fortress.

Qui-Gon Jinn, Obi-Wan Kenobi, and their fellow Jedi are her only hope.

The rescue has begun.`,
    releaseDate: "September 1, 1999",
  },
  {
    id: "episode-i-adventures-2-the-bartokk-assassins",
    title: "Episode I Adventures 2: The Bartokk Assassins",
    author: "Ryder Windham",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures2.jpg"),
    amazonLink: "https://amzn.to/4dolUZM",
    description: `A band of Bartokk assassins is in possession of many unusual Trade Federation starfighters.

They have also kidnapped an innocent child.

The Bartokks must be stopped.

More than one life hangs in the balance.`,
    releaseDate: "October 1, 1999",
  },
  {
    id: "episode-i-adventures-3-the-fury-of-darth-maul",
    title: "Episode I Adventures 3: The Fury of Darth Maul",
    author: "Ryder Windham",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures3.jpg"),
    amazonLink: "https://amzn.to/42O3rzK",
    description: `Someone has stolen something that belongs to Darth Sidious.

Now he wants it back.

And when a Sith Lord wants something, there's only one person he can trust to get it –

Another Sith Lord.`,
    releaseDate: "November 1, 1999",
  },
  {
    id: "episode-i-adventures-4-jedi-emergency",
    title: "Episode I Adventures 4: Jedi Emergency",
    author: "Ryder Windham",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures4.jpg"),
    amazonLink: "https://amzn.to/4tSbUx0",
    description: `A young girl has been found who has the power to become a Jedi.

But an evil scientist doesn't want to let her go. And her home is under attack by Bartokk Assassins.

Yoda, Mace Windu, and the other Jedi must save her.

The future is at stake.`,
    releaseDate: "December 1, 1999",
  },
  {
    id: "episode-i-adventures-5-the-ghostling-children",
    title: "Episode I Adventures 5: The Ghostling Children",
    author: "Dave Wolverton",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures5.jpg"),
    amazonLink: "https://amzn.to/3PwxFnW",
    description: `The Ghostling children live on a beautiful, isolated world, safe from harm…until they are captured by an evil trader. Soon they find themselves on the harsh planet of Tatooine, about to be sold to the terrifying Gardulla the Hutt.

Their only hope of survival is a young slave named Anakin and his friends.

Can the Ghostlings be freed?`,
    releaseDate: "January 1, 2000",
  },
  {
    id: "episode-i-adventures-6-the-hunt-for-anakin-skywalker",
    title: "Episode I Adventures 6: The Hunt for Anakin Skywalker",
    author: "Dave Wolverton",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures6.jpg"),
    amazonLink: "https://amzn.to/3RNK7At",
    description: `Anakin Skywalker and his friends have helped to free a group of Ghostling slaves. Now their owner, Gardulla the Hutt, wants to find out who's responsible. And the Hutt wants revenge.

Some of the best trackers on the planet of Tatooine are searching for Anakin.

Will he be caught?`,
    releaseDate: "February 1, 2000",
  },
  {
    id: "episode-i-adventures-7-capture-arawynne",
    title: "Episode I Adventures 7: Capture Arawynne",
    author: "Dave Wolverton",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures7.jpg"),
    amazonLink: "https://amzn.to/4xsZcI2",
    description: `Jabba the Hutt is angry. Princess Arawynne and the rest of the Ghostling children are missing. They have been hidden, and Jabba wants them found…at any cost. He sends four of his most fearsome trackers into the pleasure garden of Gardulla the Hutt's fortress in order to catch the slaves.

But Arawynne and her friends aren't going to be captured without a fight!`,
    releaseDate: "March 1, 2000",
  },
  {
    id: "episode-i-adventures-8-trouble-on-tatooine",
    title: "Episode I Adventures 8: Trouble on Tatooine",
    author: "Dave Wolverton",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures8.jpg"),
    amazonLink: "https://amzn.to/4afha6G",
    description: `Anakin Skywalker and his friends are in big trouble. Slave hunters are after them. The fate of the Ghostling children rests in their hands. And they have only one chance to find freedom.

Will they make it?`,
    releaseDate: "April 1, 2000",
  },
  {
    id: "episode-i-adventures-9-rescue-in-the-core",
    title: "Episode I Adventures 9: Rescue in the Core",
    author: "Ryder Windham",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures9.jpg"),
    amazonLink: "https://amzn.to/4awKgOW",
    description: `Jar Jar Binks is in trouble. He is clumsy, and he just caused a big accident. He is being taken to the Quarry, a spooky fortress that few prisoners have survived. Along the way, the bongo carrying Jar Jar is attacked.

Can Jar Jar save himself…and save the day?`,
    releaseDate: "May 1, 2000",
  },
  {
    id: "episode-i-adventures-10-festival-of-warriors",
    title: "Episode I Adventures 10: Festival of Warriors",
    author: "Ryder Windham",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures10.jpg"),
    amazonLink: "https://amzn.to/4f1VFK0",
   description: `The Festival of Warriors is the most challenging athletic competition in Otoh Gunga. Hundreds of Gungans, including Boss Nass and Jar Jar Binks, participate in its main event, the Big Nasty Free-For-All. This year's Free-For-All is the nastiest yet, because of the unexpected arrivals of some very unfriendly droids.

Who will win the race…and save the Gungans?`,
    releaseDate: "June 1, 2000",
  },
  {
    id: "episode-i-adventures-11-pirates-from-beyond-the-sea",
    title: "Episode I Adventures 11: Pirates from Beyond the Sea",
    author: "Ryder Windham",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures11.jpg"),
    amazonLink: "https://amzn.to/43WRpEw",
    description: `Space pirates have attacked the Gungans' sacred place, hijacking ancient statues and threatening to sell them to the highest bidder. They have also taken Rep Teers hostage. Only a small band of Gungans can save Teers and the treasures.

The pirates have invaded—and time is running out.`,
    releaseDate: "July 1, 2000",
  },
  {
    id: "episode-i-adventures-12-the-bongo-rally",
    title: "Episode I Adventures 12: The Bongo Rally",
    author: "Ryder Windham",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures12.jpg"),
    amazonLink: "https://amzn.to/4uguXkN",
    description: `The festival arena outside Otoh Gunga is under attack. An evil pirate and a renegade pair of droids are speeding toward the big Bongo Rally to cause mass destruction. Only one Gungan can warn Boss Nass in time.

His name is Jar Jar Binks.`,
    releaseDate: "August 1, 2000",
  },
  {
    id: "maul-lockdown",
    title: "Maul: Lockdown",
    author: "Joe Schreiber",
    timelinePlacement: -33.0,
    timelineLabel: "33 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1364853096i/13317315.jpg",
    amazonLink: "https://amzn.to/4f8YVDt",
    description: `It's kill or be killed in the space penitentiary that houses the galaxy’s worst criminals, where convicts face off in gladiatorial combat while an underworld gambling empire reaps the profits of the illicit blood sport. But the newest contender in this savage arena, as demonic to behold as he is deadly to challenge, is fighting for more than just survival. His do-or-die mission, for the dark masters he serves, is to capture the ultimate weapon: an object that will enable the Sith to conquer the galaxy.
 
Sith lords Darth Plagueis and Darth Sidious are determined to possess the prize. And one of the power-hungry duo has his own treacherous plans for it. But first, their fearsome apprentice must take on a bloodthirsty prison warden, a cannibal gang, cutthroat crime lord Jabba the Hutt, and an unspeakable alien horror. No one else could brave such a gauntlet of death and live. But no one else is the dreaded dark-side disciple known as Darth Maul.`,
    releaseDate: "January 24, 2014",
  },
  {
    id: "cloak-of-deception",
    title: "Cloak of Deception",
    author: "James Luceno",
    timelinePlacement: -32,
    timelineLabel: "32 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320553963i/1005559.jpg",
    amazonLink: "https://amzn.to/42XaEO9",
    description: `Mired in greed and corruption, tangled in bureaucracy, the Galactic Republic is crumbling. In the outlying systems, where the Trade Federation maintains a stranglehold on shipping routes, tensions are boiling over—while back in the comfort of Coruscant, the hub of civilized space and seat of the Republic government, few senators seem inclined to investigate the problem. And those who suspect Supreme Chancellor Valorum of having a hand in the machinations are baffled—especially when Jedi Master Qui-Gon Jinn and his apprentice Obi-Wan Kenobi foil an assassination attempt on the Chancellor.

With the crisis escalating, Valorum calls for an emergency trade summit. As humans and aliens gather, conspiracies sealed with large sums of money run rampant, and no one is entirely above suspicion. But the greatest threat of all remains unknown to everyone except three members of the Trade Federation who have entered into a shadowy alliance with a dark overlord. While the trio will be content with more money and fewer problems, Darth Sidious has grander, far more terrifying plans.

It is a time that tests the mettle of all those who strive to hold the Republic together—none more so than the Jedi Knights, who have long been the galaxy's best hope for preserving peace and justice. Yet despite their most valiant efforts, the meeting will explode into fiery chaos beyond everyone's worst fears . . .`,
    releaseDate: "May 29, 2000",
  },
  {
    id: "darth-maul-shadow-hunter",
    title: "Darth Maul: Shadow Hunter",
    author: "Michael Reaves",
    timelinePlacement: -32,
    timelineLabel: "32 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1406699271i/942118.jpg",
    amazonLink: "https://amzn.to/4ddbzjg",
    description: `After years of waiting in the shadows, Darth Sidious is taking the first step in his master plan to bring the Republic to its knees. Key to his scheme are the Neimoidians of the Trade Federation. Then one of his Neimoidian contacts disappears, and Sidious does not need his Force-honed instincts to suspect betrayal. He orders his apprentice, Darth Maul, to hunt the traitor down.

But he is too late. The secret has already passed into the hands of information broker Lorn Pavan, which places him right at the top of Darth Maul’s hit list. Then, in the labyrinthine alleyways and sewers of Coruscant, capital city of the Republic, Lorn crosses paths with Darsha Assant, a Jedi Padawan on a mission to earn her Knighthood.

Now the future of the Republic depends on Darsha and Lorn. But how can an untried Jedi and an ordinary man, stranger to the powerful ways of the Force, hope to triumph over one of the deadliest killers in the galaxy?`,
    releaseDate: "January 30, 2001",
  },
  {
    id: "episode-i-the-phantom-menace",
    title: "Star Wars: The Phantom Menace",
    author: "Terry Brooks",
    timelinePlacement: -32,
    timelineLabel: "32 BBY",
    bookType: [
      "Adaptations",
      "Adult",
      "Legends",
    ],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1349115978i/34941.jpg",
    amazonLink: "https://amzn.to/4f8Zw8b",
    description: `A long time ago in a galaxy far, far away, an evil legacy long believed dead is stirring. Now the dark side of the Force threatens to overwhelm the light, and only an ancient Jedi prophecy stands between hope and doom for the entire galaxy.

On the green, unspoiled world of Naboo, Jedi Master Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi, arrive to protect the realm's young queen as she seeks a diplomatic solution to end the siege of her planet by Trade Federation warships. At the same time, on desert-swept Tatooine, a slave boy named Anakin Skywalker, who possesses a strange ability for understanding the "rightness" of things, toils by day and dreams by night—of becoming a Jedi Knight and finding a way to win freedom for himself and his beloved mother. It will be the unexpected meeting of Jedi, Queen, and a gifted boy that will mark the start of a drama that will become legend.`,
    releaseDate: "April 21, 1999",
  },
  {
    id: "darth-plagueis",
    title: "Darth Plagueis",
    author: "James Luceno",
    timelinePlacement: -67.0,
    timelineLabel: "67-32 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1405546262i/11099729.jpg",
    amazonLink: "https://amzn.to/3RJGona",
    description: `Darth Plagueis: one of the most brilliant Sith Lords who ever lived. Possessing power is all he desires; losing it is the only thing he fears. As an apprentice, he embraces the ruthless ways of the Sith. When the time is right, he destroys his Master—and vows never to suffer the same fate. For like no other disciple of the dark side, Darth Plagueis learns to command the ultimate power . . . over life and death.

Darth Sidious: Plagueis’s chosen apprentice. Under the guidance of his Master, he secretly studies the ways of the Sith while publicly rising to power in the galactic government, first as Senator, then as Chancellor, and eventually as Emperor.

Darth Plagueis and Darth Sidious, Master and acolyte, target the galaxy for domination—and the Jedi Order for annihilation. But can they defy the merciless Sith tradition? Or will the desire of one to rule supreme, and the dream of the other to live forever, sow the seeds of their destruction?`,
    releaseDate: "January 10, 2012",
  },
  {
    id: "jedi-apprentice-the-rising-force",
    title: "Jedi Apprentice: The Rising Force",
    author: "Dave Wolverton",
    timelinePlacement: -44,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl: getLegendsCover("Rising_Force.jpg"),
    amazonLink: "https://amzn.to/3RfQL23",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
Twelve-year-old Obi-Wan Kenobi desperately wants to be a Jedi Knight. After years at the Jedi Temple, he knows the power of the lightsaber and the Force. But he cannot control his own anger and fear. Because of this, the Jedi Master Qui-Gon Jinn will not take him on as a Padawan apprentice.

Now Obi-Wan is about to have his first encounter with true evil. He must face off against unexpected enemies—and face up to his own dark wishes.

Only then can his education as a Jedi truly begin.`,
    releaseDate: "May 3, 1999",
  },
  {
    id: "jedi-apprentice-the-dark-rival",
    title: "Jedi Apprentice: The Dark Rival",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1394397541i/791694.jpg",
    amazonLink: "https://amzn.to/4tPMss0",
    description: `Peace over anger. Honor over hate. Strength over fear.

Qui-Gon Jinn's past is not at rest. How can he forge a bond with young Obi-Wan Kenobi while he is haunted by the betrayal of his first apprentice—Xanatos? Xanatos was also a promising student…until the dark side of the Force intervened. Qui-Gon thought he was gone forever.

But now Xanatos is back. And he wants revenge.`,
    releaseDate: "May 3, 1999",
  },
  {
    id: "jedi-apprentice-the-hidden-past",
    title: "Jedi Apprentice: The Hidden Past",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1391977084i/263875.jpg",
    amazonLink: "https://amzn.to/49q9Ogv",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
After Obi-Wan Kenobi and Qui-Gon Jinn are hijacked to the planet Phindar, they find themselves trapped in a world gone mad. The ruling Syndicat controls the people by erasing their memories. The planet's only hope lies with a band of thieving rebels.

Qui-Gon and Obi-Wan are caught in a mind war.

And if they're not careful, their own pasts will be wiped out forever.`,
    releaseDate: "August 1, 1999",
  },
  {
    id: "jedi-apprentice-the-mark-of-the-crown",
    title: "Jedi Apprentice: The Mark of the Crown",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374774448i/20086.jpg",
    amazonLink: "https://amzn.to/4doSCJi",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
A queen is dying. Her angry son is conspiring to thwart his planet's elections and maintain his rule. But he might not be her only heir. There may be another bearing the elusive Mark of the Crown.

Qui-Gon Jinn and young Obi-Wan Kenobi come to the planet of Gala as guardians of peace. Now they are facing a deadly battle for power and royal position.

The true heir must be found.

The Jedi must find the way.`,
    releaseDate: "October 1, 1999",
  },
  {
    id: "jedi-apprentice-defenders-of-the-dead",
    title: "Jedi Apprentice: Defenders of the Dead",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374774399i/359819.jpg",
    amazonLink: "https://amzn.to/4wzXZ10",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
The Defenders of the Dead live in the past while they destroy the future. They face a revolt of the Young—a band of rebels led by two teenagers, Cerasi and Nield.

Thirteen-year-old Obi-Wan Kenobi and his Jedi Master Qui-Gon Jinn are not supposed to take sides in any war. But once Obi-Wan meets Cerasi and Nield, he feels he must join their fight…even though Qui-Gon forbids it.

The rebellion has become personal.

And Obi-Wan and Qui-Gon are on opposing sides.`,
    releaseDate: "December 1, 1999",
  },
  {
    id: "jedi-apprentice-the-uncertain-path",
    title: "Jedi Apprentice: The Uncertain Path",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374774335i/359821.jpg",
    amazonLink: "https://amzn.to/4nw6Psq",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
Obi-Wan Kenobi is no longer a Jedi. He has chosen instead to be a part of the revolution on the planet Melida/Daan. His Master, Qui-Gon Jinn, has gone back to Coruscant, where trouble is stirring inside the Jedi Temple.

Obi-Wan takes comfort in his friends, the other leaders of the revolution. Together they have power—perhaps too much power. As the revolution continues, friends become enemies, and Obi-Wan's path grows more and more uncertain. Qui-Gon is no longer around to help him.

Obi-Wan is on his own.`,
    releaseDate: "February 1, 2000",
  },
  {
    id: "jedi-apprentice-the-captive-temple",
    title: "Jedi Apprentice: The Captive Temple",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1371939804i/359786.jpg",
    amazonLink: "https://amzn.to/4drhG2i",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
The Jedi Temple is under attack. An attempt has been made to kill Yoda. A dangerous intruder has infiltrated the Jedi.

Everybody is under suspicion, and no one is safe from harm. Obi-Wan Kenobi and Qui-Gon Jinn must get to the heart of the conspiracy…or watch the Temple be destroyed—from the inside.`,
    releaseDate: "April 1, 2000",
  },
  {
    id: "jedi-apprentice-the-day-of-reckoning",
    title: "Jedi Apprentice: The Day of Reckoning",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374774312i/320407.jpg",
    amazonLink: "https://amzn.to/3PJkHmM",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
Qui-Gon Jinn's evil former apprentice, Xanatos, has set a trap for his old Master. He has lured Qui-Gon and young Obi-Wan Kenobi to his home planet of Telos… and has framed them for a crime they did not commit.

The penalty is death.

Suddenly Qui-Gon and Obi-Wan are fugitives on a planet where everyone is an enemy.

Xanatos' day of reckoning has come.`,
    releaseDate: "June 1, 2000",
  },
  {
    id: "jedi-apprentice-the-fight-for-truth",
    title: "Jedi Apprentice: The Fight for Truth",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1741894827i/359824.jpg",
    amazonLink: "https://amzn.to/4tyKE6h",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
Most people on the planet Kegan don't want to have anything to do with the rest of the galaxy. But when a young potential Jedi is discovered there, Qui-Gon Jinn, Adi Gallia, and their apprentices, Obi-Wan and Siri, are compelled to visit this strangely isolated world.

They are not welcomed with open arms. Instead, Qui-Gon and Adi find themselves caught in a web of deception while Obi-Wan and Siri are imprisoned in a school where thought is dictated, dissent is forbidden, and detention is permanent.

On this planet, the Jedi must fight for truth…even though nobody wants to face it.`,
    releaseDate: "August 1, 2000",
  },
  {
    id: "jedi-apprentice-the-shattered-peace",
    title: "Jedi Apprentice: The Shattered Peace",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328040872i/9314392.jpg",
    amazonLink: "https://amzn.to/4wStWlx",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
For generations, the firstborn children of the rulers of the planet Rutan and the moon Senali have been exchanged at the age of seven. This was meant to promote peace and understanding between the societies. Now it has led them to the brink of war.

Leed, the heir to the Rutan throne, does not want to return to his home planet. His father will stop at nothing to get him back. Qui-Gon Jinn and Obi-Wan Kenobi must prevent this rift from turning to bloodshed.

It is their hardest challenge yet.`,
    releaseDate: "October 1, 2000",
  },
  {
    id: "jedi-apprentice-deceptions",
    title: "Jedi Apprentice: Special Edition: Deceptions",
    author: "Jude Watson",
    timelinePlacement: -44.0,
    timelineLabel: "44-29 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/I/5144RPXNGVL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/49C4OoQ",
    description: `Qui-Gon and Obi-Wan. Obi-Wan and Anakin. Two Masters. Two Apprentices. One Mystery.
As an apprentice, Obi-Wan Kenobi is blamed for the death of another Jedi student. With the help of his Master, Qui-Gon Jinn, Obi-Wan must fight to clear his name. But even if he is found not guilty, he has gained an enemy for life—the dead boy's vindictive father.

Twelve years later, Obi-Wan is a Jedi Knight, with his own young apprentice, Anakin Skywalker. Anakin doesn't know about the secrets Obi-Wan is hiding. But as the past comes back to attack them, Obi-Wan and Anakin must fight deception with truth—and face off against enemies both new and old.`,
    releaseDate: "July 1, 2001",
  },
  {
    id: "jedi-apprentice-the-deadly-hunter",
    title: "Jedi Apprentice: The Deadly Hunter",
    author: "Jude Watson",
    timelinePlacement: -43.0,
    timelineLabel: "43 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374774230i/359810.jpg",
    amazonLink: "https://amzn.to/43eQnDC",
    description: `Peace over anger. Honor over hate. Strength over fear.
    
Nobody knows her name. Nobody knows when she will strike. All they know is that she is a deadly bounty hunter—and her latest mission has taken her to Coruscant, home of the Jedi.

Her target: an old friend of Qui-Gon Jinn's.

Qui-Gon and his apprentice, Obi-Wan Kenobi, make an attempt to catch her...and fail. Now they are her targets, too.`,
    releaseDate: "December 1, 2000",
  },
  {
    id: "jedi-apprentice-the-evil-experiment",
    title: "Jedi Apprentice: The Evil Experiment",
    author: "Jude Watson",
    timelinePlacement: -43.0,
    timelineLabel: "43 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1395606952i/359796.jpg",
    amazonLink: "https://amzn.to/4nyAYHN",
    description: `Peace over Anger. Honor over Hate. Strength over Fear.
    
An evil scientist is imprisoning and torturing Jedi to find the secret behind the Force. She taps their emotions, monitors their actions…and then drains them of their blood.

Qui-Gon Jinn is now her captive.

Obi-Wan Kenobi is desperately searching for his Master. Meanwhile, Qui-Gon must match wits with one of the most dangerous enemies he has ever encountered.

His survival depends on it.`,
    releaseDate: "February 1, 2001",
  },
  {
    id: "jedi-apprentice-the-dangerous-rescue",
    title: "Jedi Apprentice: The Dangerous Rescue",
    author: "Jude Watson",
    timelinePlacement: -43.0,
    timelineLabel: "43 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328011446i/9314387.jpg",
    amazonLink: "https://amzn.to/4dwCkOs",
    description: `Peace over Anger. Honor over Hate. Strength over Fear.

Murder. Kidnapping. Torture.

Jenna Zan Arbor will stop at nothing in her quest to discover the secrets of the Force—and use them for her own power and greed. One Jedi remains in her dangerous grasp. And a whole planet is being held hostage by her sinister plans.

Only a single team of Jedi stands in her way….`,
    releaseDate: "April 1, 2001",
  },
{
    id: "jedi-apprentice-the-ties-that-bind",
    title: "Jedi Apprentice: The Ties That Bind",
    author: "Jude Watson",
    timelinePlacement: -41.0,
    timelineLabel: "41 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1396022536i/359829.jpg",
    amazonLink: "https://amzn.to/4wByfkI",
    description: `Peace over Anger. Honor over Hate. Strength over Fear.
    
Six years ago, Qui-Gon Jinn and Tahl helped the people of the planet Apsolon choose their first free leader. It seemed that peace had arrived at last.

Now the leader has been killed. His daughters have been kidnapped. And Qui-Gon and Tahl have returned to Apsolon with Qui-Gon's apprentice Obi-Wan—against the wishes of the Jedi Council.

The ties that bind Qui-Gon and Tahl are about to experience their most powerful test yet.`,
    releaseDate: "August 1, 2001",
  },
  {
    id: "jedi-apprentice-the-death-of-hope",
    title: "Jedi Apprentice: The Death of Hope",
    author: "Jude Watson",
    timelinePlacement: -41.0,
    timelineLabel: "41 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374774039i/359823.jpg",
    amazonLink: "https://amzn.to/4dPbnHa",
    description: `Peace over Anger. Honor over Hate. Strength over Fear.
    
"I pledge myself to you, Tahl."

"I pledge myself to you, Qui-Gon."

With these words, two Jedi Knights acknowledged that their bond had grown beyond friendship and into love.

Now Tahl has been abducted in a trap that Qui-Gon feels he should have foreseen. Consumed by dark visions, Qui-Gon and Obi-Wan Kenobi must do everything in their power to get her back before it's too late. But that won't be easy in a land where nobody can be trusted…and everyone has something to hide.`,
    releaseDate: "October 1, 2001",
  },
  {
    id: "jedi-apprentice-the-call-to-vengeance",
    title: "Jedi Apprentice: The Call to Vengeance",
    author: "Jude Watson",
    timelinePlacement: -41.0,
    timelineLabel: "41 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1381439575i/359827.jpg",
    amazonLink: "https://amzn.to/4dPbpig",
    description: `Peace over Anger. Honor over Hate. Strength over Fear.
    
Qui-Gon Jinn is a man on the edge. His heart has been shattered. His beliefs have been destroyed. And now he is dangerously close to stepping over a line that no Jedi dares to cross.

He wants revenge.

His fellow Jedi—his apprentice Obi-Wan Kenobi, and Jedi Council member Mace Windu—will try to stop him. But when Qui-Gon strikes out on his own, anything can happen. Revenge is not a Jedi trait…but it is a Human one. Can Qui-Gon separate his personal feelings from his Jedi training?`,
    releaseDate: "December 1, 2001",
  },
  {
    id: "jedi-apprentice-the-only-witness",
    title: "Jedi Apprentice: The Only Witness",
    author: "Jude Watson",
    timelinePlacement: -40.0,
    timelineLabel: "40 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1374773864i/359809.jpg",
    amazonLink: "https://amzn.to/4dlm4Qc",
    description: `Peace over Anger. Honor over Hate. Strength over Fear.
    
An evil crime family controls the fate of a planet. Only one witness can bring them down—someone from the inside. In order to make it off the planet to testify, she's going to need the protection of the Jedi.

Qui-Gon Jinn and Obi-Wan Kenobi take the assignment, thinking it will be easy. But nothing is ever easy when crime is concerned, and soon the two Jedi are entangled in a violent web of power, corruption, and lies. Qui-Gon and Obi-Wan know their allegiance is to the witness. But can she be trusted?

`,
    releaseDate: "February 1, 2002",
  },
  {
    id: "jedi-apprentice-the-threat-within",
    title: "Jedi Apprentice: The Threat Within",
    author: "Jude Watson",
    timelinePlacement: -40.0,
    timelineLabel: "40 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1381867700i/359808.jpg",
    amazonLink: "https://amzn.to/4dPbsKY",
    description: `Peace over Anger. Honor over Hate. Strength over Fear.
    
When Obi-Wan Kenobi started off as Qui-Gon Jinn's Jedi apprentice, he was just a boy. Now, on the verge of manhood, he is starting on the path that will lead him to become a Jedi Knight…and the master of his own fate.

As Obi-Wan and Qui-Gon investigate a strange wave of planetary sabotages, they find their relationship shifting—sometimes in a dangerous direction. As events turn deadly, their lives may never be the same again.`,
    releaseDate: "March 1, 2002",
  },
  {
    id: "jedi-apprentice-special-edition-the-followers",
    title: "Jedi Apprentice Special Edition: The Followers",
    author: "Jude Watson",
    timelinePlacement: -39.0,
    timelineLabel: "39–29 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1298516310i/359826.jpg",
    amazonLink: "https://amzn.to/3RKdfbw",
    description: `Qui-Gon and Obi-Wan. Obi-Wan and Anakin. Two Masters. Two Apprentices. One Mystery.
    
Who are the followers of the Sith? Devoted to the study of the dark side of the Force, they live an underground existence…but their threat is growing. Although they do not have Sith power, they are on a constant search for it. Nothing—not even the Jedi Knights—will get in their way.

Dr. Lundi is the leader of the Sith followers. As he gets closer to attaining a Sith Holocron, he comes face-to-face with Qui-Gon Jinn and his apprentice Obi-Wan.

Ten years later, when the Sith followers reappear, Obi-Wan and his own apprentice, Anakin Skywalker, must rely on Lundi to help them. But he is to be feared, not trusted.

The Sith are on the rise. The Jedi must stop them.`,
    releaseDate: "April 1, 2002",
  },
  {
    id: "secrets-of-the-jedi",
    title: "Secrets of the Jedi",
    author: "Jude Watson",
    timelinePlacement: -39.0,
    timelineLabel: "39–22 BBY",
    bookType: ["Middle Grade", "Legends"],
    coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328867482i/359830.jpg",
    amazonLink: "https://amzn.to/3P8cQ1Z",
    description: `Three generations of Jedi.
Three untold secrets.

A Jedi is never to fall in love....

Grieving for the loss of his friend Tahl, Jedi Master Qui-Gon Jinn has been sent back to the Jedi Temple to recover. But this peace is soon shattered by an urgent mission -- a young boy with a knack for technology has intercepted a message that indicates a mass assassination of planetary leaders is about to take place. It is up to Qui-Gon and his apprentice, Obi-Wan Kenobi, to protect the boy from the bounty hunter assassins...and to foil the deadly plot.

Joining Qui-Gon and Obi-Wan on their mission are the Jedi Master Adi Gallia and her headstrong apprentice, Siri. Obi-Wan and Siri have been sparring friends for a long time. But as the assassins' pursuit tightens, they find their relationship beginning to change in an unexpected direction....

A generation later, Obi-Wan, Siri, and the boy they tried to save are reunited once more -- with the fate of the Clone Wars hinging on the outcome. Old tensions rise once more -- as well as new conflicts and secrets. Obi-Wan's apprentice, Anakin Skywalker, has many things to hide, and when his secret wife, Padmé Amidala, joins the Jedi mission, the risks becomes even greater than before.

Secrets are dangerous.
Secrets are difficult.
Secrets can kill.`,
    releaseDate: "March 1, 2005",
  },
  {
    id: "star-wars-episode-i-the-phantom-menace",
    title: "Star Wars Episode I: The Phantom Menace Junior Novelization",
    author: "Patricia C. Wrede",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade", "Adaptations"],
    coverUrl: getLegendsCover("Ep1_junior.jpg"),
    amazonLink: "https://amzn.to/4wMuIAd",
    description: `A long time ago in a galaxy far, far away…

A world is threatened. A young queen must save her people. A dark evil rises again. A young Jedi is discovered.

The journey begins.`,
    releaseDate: "May 3, 1999",
  },
  {
    id: "star-wars-journal-anakin-skywalker",
    title: "Star Wars Journal: Anakin Skywalker",
    author: "Todd Strasser",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("AnakinJournal.jpg"),
    amazonLink: "https://amzn.to/4uCqMRc",
    description: `I am a nine-year-old slave on the planet of Tatooine. I am owned by a creature named Watto. There's no way to escape.

Then one day a Jedi appears. He says I am to be a Jedi, too. But first I must prove myself.

First I must survive.

My name is Anakin Skywalker. This is my story.`,
    releaseDate: "May 3, 1999",
  },
  {
    id: "star-wars-journal-darth-maul",
    title: "Star Wars Journal: Darth Maul",
    author: "Jude Watson",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("DMaulJournal.jpg"),
    amazonLink: "https://amzn.to/3S2EvSM",
    description: `I have followed the Sith path to power, drawing strength from hate. My vow is to defeat the Jedi. I have embraced the dark side…and the dark side has embraced me.

I have been chosen. My mission is clear.

I will have revenge.

My name is Darth Maul. This is my story.`,
    releaseDate: "March 1, 2000",
  },
  {
    id: "star-wars-journal-queen-amidala",
    title: "Star Wars Journal: Queen Amidala",
    author: "Jude Watson",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("AmidalaJournal.jpg"),
    amazonLink: "https://amzn.to/3Q47XHu",
    description: `My world is under attack. My life is in danger. But I must be strong. I must save my people.

I will disguise myself. I will fight with all my power.

I will never give in.

My name is Amidala, Queen of Naboo. This is my story.`,
    releaseDate: "May 3, 1999",
  },
  {
    id: "episode-i-adventures-13-danger-on-naboo",
    title: "Episode I Adventures 13: Danger on Naboo",
    author: "A. L. Singer",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures13.jpg"),
    amazonLink: "https://amzn.to/4fO8Y15",
    description: `The planet of Naboo has been blockaded. Obi-Wan Kenobi and Qui-Gon Jinn have been sent as Jedi emissaries to establish peace. But they find war instead.

Naboo needs their help.`,
    releaseDate: "September 1, 2000",
  },
  {
    id: "episode-i-adventures-14-podrace-to-freedom",
    title: "Episode I Adventures 14: Podrace to Freedom",
    author: "A. L. Singer",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures14.jpg"),
    amazonLink: "https://amzn.to/4ukMwjG",
    description: `Anakin Skywalker is a slave on the planet Tatooine. When a band of visitors needs a way to leave Tatooine, he offers to help.

His only hope is to win the most dangerous Podrace of his life.`,
    releaseDate: "October 1, 2000",
  },
  {
    id: "episode-i-adventures-15-the-final-battle",
    title: "Episode I Adventures 15: The Final Battle",
    author: "A. L. Singer",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("Adventures15.jpg"),
    amazonLink: "https://amzn.to/49EEL0w",
    description: `The Trade Federation has captured the peaceful planet Naboo. Now a band of Jedi, Gungan, and Naboo fighters must save it. Battle droids, starfighters, and an evil Sith Lord stand in their way.

Can they do it?`,
    releaseDate: "November 1, 2000",
  },
  {
    id: "rogue-planet",
    title: "Rogue Planet",
    author: "Greg Bear",
    timelinePlacement: -29.0,
    timelineLabel: "29 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1452403063i/28500721.jpg",
    amazonLink: "https://amzn.to/4uX3Qfj",
    description: `The Force is strong in twelve-year-old Anakin Skywalker . . . so strong that the Jedi Council, despite misgivings, entrusted young Obi-Wan Kenobi with the mission of training him to become a Jedi Knight. Obi-Wan—like his slain Master Qui-Gon—believes Anakin may be the chosen one, the Jedi destined to bring balance to the Force. But first Obi-Wan must help his undisciplined apprentice, who still bears the scars of slavery, find his own balance.

Dispatched to the mysterious planet of Zonama Sekot, source of the fastest ships in the galaxy, Obi-Wan and Anakin are swept up in a swirl of deadly intrigue and betrayal. They sense a disturbance in the Force unlike any they have encountered before. It seems there are more secrets on Zonama Sekot than meet the eye. But the search for those secrets will threaten the bond between Obi-Wan and Anakin . . . and bring the troubled young apprentice face-to-face with his deepest fears—and his darkest destiny.`,
    releaseDate: "January 1, 2000",
  },
  {
    id: "jedi-quest-path-to-truth",
    title: "Jedi Quest: Path to Truth",
    author: "Jude Watson",
    timelinePlacement: -28.0,
    timelineLabel: "28 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("PathtoTruth.jpg"),
    amazonLink: "https://amzn.to/4uoEzKa",
    description: `CHOSEN TO RISE.
DESTINED TO FALL.

Anakin Skywalker is no longer a boy, but not yet a man. Almost thirteen, he has begun to travel on the path that will lead him to glory…and infamy.

In the mysterious caves of Ilum, Anakin must create his lightsaber after confronting the demons of his past—and his future. Once the lightsaber is completed, Anakin joins his Master, Obi-Wan Kenobi, on a mission that will cut to the heart of his fear, anger, and power.

When Anakin was a young slave on Tatooine, everyone lived in terror of a creature named Krayn, who kidnapped slaves for his own profit—and killed anyone who got in his way. Now Krayn's evil has grown to a dangerous degree, threatening peace and safe passage throughout the galaxy.

Anakin and Obi-Wan must stop Krayn. But can Obi-Wan also stop Anakin from seeking vengeance against an old enemy?

The path to truth is a clear one.

Anakin's path is not.`,
    releaseDate: "September 1, 2001",
  },
  {
    id: "jedi-quest-the-way-of-the-apprentice",
    title: "Jedi Quest: The Way of the Apprentice",
    author: "Jude Watson",
    timelinePlacement: -27.0,
    timelineLabel: "27 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("wayofapprentice.jpg"),
    amazonLink: "https://amzn.to/4ese9T2",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

Fourteen-year-old Anakin Skywalker is strong in the ways of the Force. His lightsaber skills are exceptional, and his piloting is legendary. He should be an ideal Jedi apprentice. And yet, there is so much he still has to learn.

It is up to Obi-Wan Kenobi to teach him these things. But on a mission to a planet threatened by toxic disaster, Obi-Wan and Anakin are separated. Anakin and three other apprentices—one of them his rival—must work together in order to survive. Anakin's instincts are clear…but are they right?

Anakin Skywalker's destiny will determine the future of a galaxy. These are the events that form his fate.`,
    releaseDate: "April 23, 2002",
  },
  {
    id: "the-unifying-force",
    title: "The Unifying Force",
    author: "James Luceno",
    timelinePlacement: 29.0,
    timelineLabel: "29 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51se+u78dNL.jpg",
    amazonLink: "https://amzn.to/4dMCcM5",
    description: `At long last, the New York Times bestselling series that launched the Star Wars saga into the next generation and into thrilling new territory reaches its spectacular finale. Side by side, Luke Skywalker, Han Solo, Leia Organa Solo, their children, and their comrades in the Galactic Alliance rally for their last stand against the enemy that threatens not only the galaxy, but the Force itself.

The Galactic Alliance’s hard-won success in countering the Yuuzhan Vong onslaught has proven all too brief—and the tide has turned once more to the invaders’ advantage. Having overcome the sabotage strategies of the Jedi and their allies, the marauding aliens have pushed deeper into the galaxy and subjugated more worlds in their ruthless quest for domination. Coruscant has been remade into a Yuuzhan Vong stronghold. The remnants of the resistance are struggling to form a united front. Luke, Mara, and Jacen are missing in action. Clearly the stage is set for endgame.

Now, as Han and Leia receive the chilling news that hundreds of high-ranking Galactic Alliance prisoners face slaughter in a sacrifice to the enemy’s bloodthirsty gods, Luke and his team try desperately to convince the living world of Zonama Sekot to join the Jedi’s final campaign against the Yuuzhan Vong. Yet even as they speak, a lone space station is all that stands between Alliance headquarters on Mon Calamari . . . and wave after wave of ferocious enemy forces waging their most decisive assault.

At the same time, the Jedi’s alliances throughout the galaxy are being tested—and the chances of victory jeopardized—by rogue factions determined to deploy the lethal weapon that will exterminate the Yuuzhan Vong . . . and perhaps countless other species. And among the Yuuzhan Vong themselves, the threat of revolt has reached a boiling point—as the oppressed underclass and powerful officials alike fear their Supreme Overlord’s mad actions will provoke the wrath of the gods.

Ultimately, for both the forces of invasion and resistance, too much has been sacrificed —and too much is at stake—to ever turn back. And now, nothing can stand in the way of seizing victory . . . or facing annihilation.`,
    releaseDate: "November 4, 2003",
  },
  {
    id: "destiny-s-way",
    title: "Destiny's Way",
    author: "Walter Jon Williams",
    timelinePlacement: 28.0,
    timelineLabel: "28 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81FVkDFw+ZL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4uJ6gOg",
    description: `The time of reckoning is close at hand. Events in the New York Times bestselling Star Wars The New Jedi Order series take a decisive turn, as the heroes of the New Republic prepare for their most volatile clash yet with the enemy—from without and within.

In the war against the ruthless Yuuzhan Vong, the fall of Coruscant leaves the New Republic divided by internal strife, and on the verge of bowing to conquest. But those who steadfastly refuse to consider surrender—Luke Skywalker, Han Solo, Leia Organa Solo, and their children and comrades-in-arms—are determined to seize victory against overwhelming odds. And now, finally, there are signs that the tide may be turning in the New Republic’s favor.

After capturing crucial Yuuzhan Vong intelligence, Jedi fighter-pilot Jaina Solo prepares to lead a daring surprise strike against an enemy flagship. Meanwhile, Jaina’s brother Jacen—liberated from the hands of the enemy and newly schooled in an even greater mastery of the Force by the Jedi Knight Vergere—is eagerly poised to bring his unique skills to bear against the invaders. And on Mon Calamari, the New Republic’s provisional capital, the retired, ailing hero Admiral Ackbar has conceived a major tactical plan that could spell the beginning of a swift end for the Yuuzhan Vong.

Yet even as opposing squadrons face off in the depths of space, intrigue runs rampant: in the heated political race for Chief of State . . . in the shadows where Yuuzhan Vong spies plot assassinations . . . and in the inscrutable creature Vergere, a Jedi Knight whose allegiance is impossible to predict. And as Luke Skywalker sets about reestablishing the Jedi Council, the growing faction opposed to the ways of the Force unveil a terrifying weapon designed to annihilate the Yuuzhan Vong species. But in doing so, they may be dooming the New Republic to becoming the very thing it has sworn to fight against—and unleashing the power of the dark side.`,
    releaseDate: "October 1, 2002",
  },
  {
    id: "force-heretic-i-remnant",
    title: "Force Heretic I: Remnant",
    author: "Sean Williams and Shane Dix",
    timelinePlacement: 28.0,
    timelineLabel: "28 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/61DSAVF3aGL._SY522_.jpg",
    amazonLink: "https://amzn.to/3PLQT90",
    description: `As the bloodied and weary galaxy faces battle once more, the Jedi take on the formidable task of bringing the last of the Empire into the light. . . .

From the ashes of the New Republic—torn to shreds by the savage Yuuzhan Vong forces—the newly formed Galactic Alliance has risen, determined to bring peace to the entire galaxy. But first the Yuuzhan Vong must be contained once and for all. And so Luke Skywalker seeks a world long lost to legend: Zonama Sekot, a sentient planet believed to have repelled an invasion by the Yuuzhan Vong decades ago. Deciphering the enigmatic secrets of Zonama Sekot just might turn the tides of a relentless war.

Aboard the Jade Shadow, Luke, his wife Mara, Jacen Solo, and other Jedi head off into the Unknown Regions, where rumors and clues suggest Zonama Sekot might be found. Yet the mission has barely begun when the searchers stumble into a horrific battle. The Imperial Remnant, in retreat from the mighty Yuuzhan Vong, is about to be destroyed. It would seem those aboard the Jade Shadow have little choice but to leave the Empire to its fate. But these are no ordinary space travelers, they are Jedi. . . .`,
    releaseDate: "February 13, 2003",
  },
  {
    id: "force-heretic-ii-refugee",
    title: "Force Heretic II: Refugee",
    author: "Sean Williams and Shane Dix",
    timelinePlacement: 28.0,
    timelineLabel: "28 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/61tV9CF4odL._SY522_.jpg",
    amazonLink: "https://amzn.to/4nxXkZX",
    description: `Swift and deadly, the Yuuzhan Vong have blasted their way across the galaxy—and now stand on the threshold of total victory. Yet a courageous few still dare to oppose them. . . .

Rife with hostile cultures and outright enemies, the Unknown Regions holds many perils for Luke Skywalker and the Jedi, searching for Zonama Sekot, the living planet that may hold the key to dealing once and for all with the Yuuzhan Vong.

Meanwhile, on the edge of the galaxy and in the heart of a trusted ally, old enemies are stirring. The Yuuzhan Vong have inflamed long-forgotten vendettas that are even now building up to crisis point. And as Han and Leia journey on their quest to knit the unraveling galaxy back together, betrayal and deception await them. . . .`,
    releaseDate: "April 29, 2003",
  },
  {
    id: "force-heretic-iii-reunion",
    title: "Force Heretic III: Reunion",
    author: "Sean Williams and Shane Dix",
    timelinePlacement: 28.0,
    timelineLabel: "28 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://i.ebayimg.com/images/g/MH8AAeSwr-VpNqCh/s-l960.webp",
    amazonLink: "https://amzn.to/4uf8QMj",
    description: `The Jedi move one step closer to saving the embattled galaxy— only to confront a formidable wall of resistance.

The harrowing search for Zonama Sekot is finally over for Luke Skywalker, Jacen Solo, and the others aboard the Jade Shadow. But joy turns to alarm when the living planet sends a defiant message: it refuses to follow them back to a galaxy full of war, exploitation, and misery.

While Luke works feverishly to persuade the elusive planet to reconsider, the Yuuzhan Vong launches a full-scale attack aimed at the heart of the new alliance. Sent to defend a major communications base, Han and Leia find themselves hopelessly outnumbered. Reinforcements are just too far away to help before everything is destroyed. So the courageous pair must now fight an unrelenting battle against staggering odds. Whether they actually survive is another matter. . . .`,
    releaseDate: "July 1, 2003",
  },
  {
    id: "the-final-prophecy",
    title: "The Final Prophecy",
    author: "Greg Keyes",
    timelinePlacement: 28.0,
    timelineLabel: "28 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71gV-9DApmL._SY522_.jpg",
    amazonLink: "https://amzn.to/4fmJveD",
    description: `As a beleaguered galaxy fights its way back from the brink of destruction, the Jedi’s most fearsome enemy plots to end the war–and claim victory–with a final act of domination. . . .

The troubles for the embattled living planet Zonama Sekot have just begun. As Luke Skywalker and Jacen Solo negotiate its place in the galactic struggle against the Yuuzhan Vong, one of its organic ships is taken by the alien invaders. Scientist Nen Yim is ordered to use the captive to find weak spots in Zonama Sekot’s technology. But what Nen Yim discovers about the planet and its mysteries shocks her to the core. Clearly her people have gone terribly astray. For the peace-loving planet harbors not only the key to its own destruction, but the long-forgotten secrets of the Yuuzhan Vong themselves.

Meanwhile, General Wedge Antilles, commanding one fleet in a three-pronged campaign to retake the Bilbringi system, is suddenly stranded deep in Yuuzhan Vong space, cut off from all contact. Wedge and his ships must rely on trickery and brilliant battle tactics if they are to survive long enough to ensure the success of one of the deadliest and most crucial missions the Galactic Alliance forces
have ever seen. . . .`,
    releaseDate: "September 30, 2003",
  },
  {
    id: "outbound-flight",
    title: "Outbound Flight",
    author: "Timothy Zahn",
    timelinePlacement: -27.0,
    timelineLabel: "27 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1405546347i/192523.jpg",
    amazonLink: "https://amzn.to/4wy6Ksk",
    description: `On an epic voyage far beyond the Republic, the Jedi will confront their most extraordinary enemy—and test the limits of honor and sacrifice against their most devastating challenge.

The Clone Wars have yet to erupt when Jedi Master Jorus C’baoth petitions the Senate for support of a singularly ambitious undertaking: the dream of Outbound Flight. Six Jedi Masters, twelve Jedi Knights, and fifty thousand men, women, and children will embark—aboard a gargantuan vessel, equipped for years of travel—on a mission to contact intelligent life and colonize undiscovered worlds beyond the known galaxy.

Unknown to the famed Jedi Master, the launch of the mission is secretly being orchestrated by an unlikely ally: the evil Sith Lord Darth Sidious, who has his own reasons for wanting Outbound Flight to move forward.

Yet Darth Sidious is not the mission’s most dangerous challenge. Once underway, the starship crosses paths at the edge of Unknown Space with the forces of the alien Chiss Ascendancy and a brilliant mastermind named Thrawn. Even Jedi knight Obi-Wan Kenobi, aboard Outbound Flight with his young Padawan student Anakin Skywalker, cannot help to avert disaster. What begins as a peaceful Jedi mission is violently transformed into an all-out war for survival against staggering odds—and the most diabolical of adversaries.`,
    releaseDate: "January 31, 2006",
  },
  {
    id: "jedi-quest-the-trail-of-the-jedi",
    title: "Jedi Quest: The Trail of the Jedi",
    author: "Jude Watson",
    timelinePlacement: -27.0,
    timelineLabel: "27 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("trailofjedi.jpg"),
    amazonLink: "https://amzn.to/4dPE5b2",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

Anakin Skywalker knows that Obi-Wan Kenobi did not choose him as an apprentice. Instead, it was the dying wish of Obi-Wan's own Master, Qui-Gon Jinn, that brought them together. Now, Anakin is beginning to doubt his Master's commitment…and Obi-Wan is starting to wonder if he will ever be as good a Master as Qui-Gon.

With these things in mind, Master and apprentice head out on a training exercise that soon turns into a struggle to survive. A squad of bounty hunters has been hired to capture the Jedi—and they will stop at nothing to do it. Anakin and Obi-Wan must avoid the traps and ambushes…and try to discover who is behind the deadly Jedi hunt.`,
    releaseDate: "April 23, 2002",
  },
  {
    id: "jedi-quest-the-dangerous-games",
    title: "Jedi Quest: The Dangerous Games",
    author: "Jude Watson",
    timelinePlacement: -27.0,
    timelineLabel: "27 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("dangerousgames.jpg"),
    amazonLink: "https://amzn.to/4afj4Ek",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

When Obi-Wan Kenobi and Anakin Skywalker are sent to the Galactic Games, they are meant to be keepers of the peace. Then they discover an illegal event that Anakin knows all too well: Podracing. Even though Obi-Wan forbids it, Anakin cannot resist the thrill of the race—and the chance to face off against his childhood rival, the loathsome Sebulba.

As a Jedi, Anakin is supposed to let go of his past. But his past will not let go of him.`,
    releaseDate: "August 1, 2002",
  },
  {
    id: "jedi-quest-the-master-of-disguise",
    title: "Jedi Quest: The Master of Disguise",
    author: "Jude Watson",
    timelinePlacement: -25.0,
    timelineLabel: "25 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("masterofdisguise.jpg"),
    amazonLink: "https://amzn.to/3PPhItb",
    description: `How do you defeat an enemy whose riches buy unlimited power?

How do you defeat an enemy who is a master of disguise?

How do you defeat an enemy you cannot find?

Anakin Skywalker and Obi-Wan Kenobi are facing a very real threat from a very elusive adversary, who is as cunning as he is evil. He will stop at nothing to draw others to the dark side and undermine the Republic. If the Jedi do not stop him, it will mean danger for the whole galaxy.`,
    releaseDate: "November 1, 2002",
  },
  {
    id: "jedi-quest-the-school-of-fear",
    title: "Jedi Quest: The School of Fear",
    author: "Jude Watson",
    timelinePlacement: -25.0,
    timelineLabel: "25 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("schooloffear.jpg"),
    amazonLink: "https://amzn.to/4uqyvRr",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

A Senator's son has vanished. A secret squad of renegade students exists in the shadows of his elite leadership school. Do they have something to do with the disappearance? Or is it linked to the Senator's unseen political foes, who are pushing the planet toward war?

The only way to solve the mystery and maintain peace is for two Jedi apprentices—Anakin Skywalker and his rival, Ferus Olin—to infiltrate one of the fiercest places in the galaxy: school.`,
    releaseDate: "February 1, 2003",
  },
  {
    id: "jedi-quest-the-shadow-trap",
    title: "Jedi Quest: The Shadow Trap",
    author: "Jude Watson",
    timelinePlacement: -25.0,
    timelineLabel: "25 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("shadowtrap.jpg"),
    amazonLink: "https://amzn.to/4xcpAWr",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

The planet of Mawan has been decimated by war and the resulting chaos. The population has taken refuge underground, while three greedy crimelords battle over food and fuel on the planet's surface. Only one group has a chance at securing peace—the Jedi.

But what if there's something even more sinister behind the chaos? What if the planet is really a trap, with many innocent lives held in the balance?

What if, in order to save Mawan, a Jedi must die?`,
    releaseDate: "May 1, 2003",
  },
  {
    id: "jedi-quest-the-moment-of-truth",
    title: "Jedi Quest: The Moment of Truth",
    author: "Jude Watson",
    timelinePlacement: -25.0,
    timelineLabel: "25 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("momentoftruth.jpg"),
    amazonLink: "https://amzn.to/4dTZccd",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

There is increasing tension between Obi-Wan Kenobi and Anakin Skywalker. Anakin still feels responsible for the death of a Jedi Council member—a guilt he does not think Obi-Wan can help him overcome.

Obi-Wan feels he is a less-than-perfect Master—trying to teach a less-than-perfect apprentice.

It is with these feelings that Obi-Wan and Anakin head to the last free planets of the Uziel system to make a daring rescue attempt. When the rescue goes awry and Anakin is taken prisoner, the Master and Padawan must overcome their conflict—or a planet will die.`,
    releaseDate: "November 1, 2003",
  },
  {
    id: "jedi-quest-the-changing-of-the-guard",
    title: "Jedi Quest: The Changing of the Guard",
    author: "Jude Watson",
    timelinePlacement: -24.0,
    timelineLabel: "24 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("changingofguard.jpg"),
    amazonLink: "https://amzn.to/4vwfwWv",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

The planet of Romin is a hotbed of villainy and corruption. It is a refuge for criminals from across the galaxy—including evil scientist Jenna Zan Arbor, an arch-enemy of the Republic.

In order to foil Zan Arbor's insidious plans, Obi-Wan Kenobi, Anakin Skywalker, and a team of Jedi must infiltrate Romin—disguised as a band of thieves. Where lawlessness is the law, the Jedi will have to master the art of deception to trap a master deceiver.`,
    releaseDate: "March 1, 2004",
  },
  {
    id: "jedi-quest-the-false-peace",
    title: "Jedi Quest: The False Peace",
    author: "Jude Watson",
    timelinePlacement: -24.0,
    timelineLabel: "24 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("falsepeace.jpg"),
    amazonLink: "https://amzn.to/43fNfrh",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

The Senate makes the laws that ensure peace and justice in the galaxy. It is meant to keep chaos and lawlessness from taking over.

But what if the Senators are not safe? What if they are about to be attacked by powerful and sinister forces?

Under the watchful eye of Supreme Chancellor Palpatine, Anakin Skywalker and Obi-Wan Kenobi must counter the threat to the Senate—or the whole galaxy might be thrown into a violent darkness.`,
    releaseDate: "July 1, 2004",
  },
  {
    id: "jedi-quest-the-final-showdown",
    title: "Jedi Quest: The Final Showdown",
    author: "Jude Watson",
    timelinePlacement: -23.0,
    timelineLabel: "23 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("finalshowdown.jpg"),
    amazonLink: "https://amzn.to/4obImch",
    description: `Obi-Wan Kenobi and Anakin Skywalker.
Master and apprentice.
Chosen by fate. Destined for conflict.

Granta Omega is an evil mastermind who has one goal: to help the Sith destroy the Jedi Order. Now Omega has escaped to the planet of Korriban—home to the tombs of the ancient Sith Lords and their terrible secrets. Obi-Wan Kenobi and Anakin Skywalker must stop him before his sinister power grows out of control.

They are not alone on this mission. Anakin's rival, Ferus, is also searching for Omega, and Anakin sees this as a contest he must win. But as the dark side of the Force becomes stronger and stronger, there is only one guaranteed outcome for any showdown:

Death.`,
    releaseDate: "November 1, 2004",
  },
  {
    id: "star-wars-adventures-1-hunt-the-sun-runner",
    title: "Star Wars Adventures 1: Hunt the Sun Runner",
    author: "Ryder Windham",
    timelinePlacement: -23.0,
    timelineLabel: "23 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("sunrunner.jpg"),
    amazonLink: "https://amzn.to/4uYj4B4",
    description: `When a legendary spacecraft appears, the planet Fondor and its moon, Nallastia, are on the verge of civil war to claim ownership. Only the Jedi Knights can solve the conflict and bring order back to the people of Fondor.`,
    releaseDate: "October 1, 2002",
  },
  {
    id: "star-wars-adventures-2-the-cavern-of-screaming-skulls",
    title: "Star Wars Adventures 2: The Cavern of Screaming Skulls",
    author: "Ryder Windham",
    timelinePlacement: -23.0,
    timelineLabel: "23 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("screamingskulls.jpg"),
    amazonLink: "https://amzn.to/4fpRNma",
    description: `After the fallout of the Sun Runner incident, the Jedi are stranded in the jungles of Nallastia, where hostile natives send them on a quest to recover sacred gems said to hold the key to an ancient prophecy.`,
    releaseDate: "November 1, 2002",
  },
  {
    id: "star-wars-adventures-3-the-hostage-princess",
    title: "Star Wars Adventures 3: The Hostage Princess",
    author: "Ryder Windham",
    timelinePlacement: -23.0,
    timelineLabel: "23 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("hostageprincess.jpg"),
    amazonLink: "https://amzn.to/4xaSJB8",
    description: `Mace Windu and Kit Fisto investigate the sudden siege of a Fondor spaceport by droid forces. The capture of a Nallastian noble leads the Jedi on a pursuit. They must act quickly to save the life of the captive princess.`,
    releaseDate: "December 1, 2002",
  },
  {
    id: "star-wars-adventures-4-jango-fett-vs-the-razor-eaters",
    title: "Star Wars Adventures 4: Jango Fett vs. the Razor Eaters",
    author: "Ryder Windham",
    timelinePlacement: -23.0,
    timelineLabel: "23 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("razoreaters.jpg"),
    amazonLink: "https://amzn.to/4xczuHz",
    description: `Count Dooku has discovered a conspiracy that he wants stopped.

He knows just the bounty hunter to stop it.

Jango Fett.

May the Force be with you.`,
    releaseDate: "January 1, 2003",
  },
  {
    id: "star-wars-adventures-5-the-shape-shifter-strikes",
    title: "Star Wars Adventures 5: The Shape-Shifter Strikes",
    author: "Ryder Windham",
    timelinePlacement: -23.0,
    timelineLabel: "23 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("shapeshifter.jpg"),
    amazonLink: "https://amzn.to/4v0aP7y",
    description: `Darth Tyranus has placed a bounty on the head of Hurlo Holowan, the diabolical droid engineer.

But Holowan has fled to her fortified estate on Kuat.

Getting into her headquarters is going to be difficult. Getting out is going to be tougher. Only a shapeshifter could hope to enter. Only a bounty hunter named Zam Wesell could hope to exit…alive.`,
    releaseDate: "February 1, 2003",
  },
  {
    id: "star-wars-adventures-6-the-warlords-of-balmorra",
    title: "Star Wars Adventures 6: The Warlords of Balmorra",
    author: "Ryder Windham",
    timelinePlacement: -23.0,
    timelineLabel: "23 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("balmorra.jpg"),
    amazonLink: "https://amzn.to/49NtCdQ",
    description: `What Count Dooku wants, Count Dooku gets.

Even if it's a Senator.

Even if it's a Hutt.

He is lucky to have bounty hunters like Jango Fett and Aurra Sing to help him.`,
    releaseDate: "March 1, 2003",
  },
  {
    id: "dark-journey",
    title: "Dark Journey",
    author: "Elaine Cunningham",
    timelinePlacement: 27.0,
    timelineLabel: "27 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327942667i/376546.jpg",
    amazonLink: "https://amzn.to/4tIG7hV",
    description: `The New Jedi Order continues as Jaina Solo struggles with anger and despair after the Jedi Knights’ harrowing adventure behind enemy lines.

Though the Jedi strike force completed its deadly mission into Yuuzhan Vong territory, the price of success was tragedy: not everyone made it out alive. In a daring getaway, hotshot pilot Jaina Solo stole an enemy ship, taking along her fellow survivors—and leaving behind a huge piece of her heart.

With the enemy in hot pursuit, Jaina is forced to seek haven in the unprotected, unfriendly Hapes Cluster, where the Jedi are held responsible for a past tragedy—and where the royal family has grim plans for their famous Jedi guest. Even more sinister are the intentions of the Yuuzhan Vong, desperate to capture Jaina for a hideous sacrifice.

Grief-stricken and obsessed with revenge, Jaina is blind to these threats—and to the overpowering evil dangerously close to consuming her. In the coming conflagration, Jaina will be fighting not for victory or vengeance, but for her very being.`,
    releaseDate: "January 29, 2002",
  },
  {
    id: "enemy-lines-i-rebel-dream",
    title: "Enemy Lines I: Rebel Dream",
    author: "Aaron Allston",
    timelinePlacement: 27.0,
    timelineLabel: "27 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51eHvznse1L.jpg",
    amazonLink: "https://amzn.to/49T6LNM",
    description: `As the Yuuzhan Vong’s spectacular conquests continue unchecked, Luke Skywalker, Han and Leia Solo , and Wedge Antilles are forced to destroy what they have risked their lives to create. . . .

Scattering like rats before the Yuuzhan Vong’s invasion of Coruscant, the panic-stricken members of the New Republic Advisory’s Council pause just long enough to set up a mock defense on nearby Borleias—a transparent attempt to buy time that fools no one, least of all the Jedi.

Leia and Han Solo trek from world to world to foment rebellion against the New Republic’s disastrous appeasement policies. But Luke Skywalker has chosen the most dangerous assignment of all: to sneak into the Yuuzhan Vong’s stronghold on Coruscant. His outrageous scheme to gain entry is either brilliant or suicidal, depending on the outcome. And bearing down swiftly on Borleias is a Vong invasion fleet, determined to destroy the galaxy’s remaining defenders. . . .`,
    releaseDate: "March 26, 2002",
  },
  {
    id: "enemy-lines-ii-rebel-stand",
    title: "Enemy Lines II: Rebel Stand",
    author: "Aaron Allston",
    timelinePlacement: 27.0,
    timelineLabel: "27 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/611WJoq6TQL._SY522_.jpg",
    amazonLink: "https://amzn.to/49ztAGa",
    description: `Not since Emperor Palpatine have the Jedi battled such monstrous evil. Unless they succeed against staggering odds, the galaxy is doomed.

Luke Skywalker’s daring mission to halt the Yuuzhan Vong’s nefarious plot to overthrow the New Republic is struggling on all fronts. And time is slipping away for Han and Leia Organa Solo, trapped on a small planet whose rulers are about to yield to Yuuzhan Vong pressure to give up the Jedi rebels.

On Coruscant, Luke and Mara Jade Skywalker have made a shocking discovery that is preventing the Yuuzhan Vong from exerting complete control. But when the enemy tracks them down, Luke and Mara are thrust into a fierce battle for their lives. Suddenly, the chances of escaping appear nearly impossible. And in space, another battle rages, one that holds ominous consequences for the New Republic—and for the Jedi themselves. . . .`,
    releaseDate: "May 28, 2002",
  },
  {
    id: "traitor",
    title: "Traitor",
    author: "Matthew Stover",
    timelinePlacement: 27.0,
    timelineLabel: "27 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51iZ+tuI9YL.jpg",
    amazonLink: "https://amzn.to/3RbAOdg",
    description:
      "From the depths of catastrophe, a glimmer of hope. After the capture of Coruscant, the mighty heart of the New Republic, a stunned galaxy fears that nothing can stop the Yuuzhan Vong. Still, that crushing defeat produces one small Jacen Solo is alive. Yet he can scarcely imagine himself in stranger circumstances.The young Jedi Knight is in the care of Vergere, a fascinating creature of mystery and power, her intentions hard to fathom, her cruelties rarely concealed. But this master of inscrutable arts has much to teach the young Jedi...for she holds the key to a new way to experience the Force, to take it to another level - dangerous, dazzling, perhaps deadly.In the wrong hands, the tremendous energies of the Force can be devastating. And there are others watching Jacen's progress closely, waiting patiently for the moment when he will be ready for their own dire purposes. Now, all is in shadows. Yet whatever happens, whether Jacen's newfound mastery unleashes light or darkness, he will never be the same Jedi again...",
    releaseDate: "July 30, 2002",
  },
  {
    id: "balance-point",
    title: "Balance Point",
    author: "Kathy Tyers",
    timelinePlacement: 26.0,
    timelineLabel: "26 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81dejS+nxpL._SY522_.jpg",
    amazonLink: "https://amzn.to/4fp0E7u",
    description: `In the aftermath of one tragedy,will a young Jedi’s search for redemption lead to yet another?

There is no place else to channel the flood of refugees fleeing the murderous Yuuzhan Vong but the overcrowded planet Duro, poisoned by centuries of technological excess. Fortunately a deal is struck: In exchange for a new home, the refugees will work to restore the planet to health, under the watchful eye of Leia Organa Solo.

While tempers flare between the Duros and the New Republic, Han Solo, his son, Jacen, and the Ryn called Droma arrive to keep the peace. They are unaware that Leia is on Duro . . . and that Luke, Mara, and Anakin are on their way, searching for a missing Jedi apprentice. And none realize that the Yuuzhan Vong have chosen this embattled planet as the next target in their brutal coreward thrust.

Now, as the fragile stability on Duro threatens to collapse into violence, Jacen Solo must face his greatest dilemma: At what point does the use of power become aggression? Whatever he decides, his next step could tip the galaxy’s destiny toward the light or toward darkness–with the life of someone he loves hanging in the balance . . .`,
    releaseDate: "November 1, 2000",
  },
  {
    id: "edge-of-victory-i-conquest",
    title: "Edge of Victory I: Conquest",
    author: "Greg Keyes",
    timelinePlacement: 26.0,
    timelineLabel: "26 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51YJQQ0DGTL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4wCY0kY",
    description: `The dazzling Star Wars space adventure continues in The New JediOrder as Luke Skywalker, Anakin Solo, Mara Jade Skywalker, and others battle their deadliest enemy in a tale of nonstop action, shadowy evil, and spectacular triumph . . .

No longer content with the destruction the Yuuzhan Vong have already sown, Warmaster Tsavong Lah has demanded the heads of all the Jedi. Now the Jedi Knights are in terrible danger–and none more so than the young students at the Jedi academy on Yavin 4. Already the sympathizers known as the Peace Brigade are in the Yavin system–and a Yuuzhan Vong fleet is not far behind.

At Luke Skywalker’s request, Talon Karrde mounts an expedition to rescue the young students. Anakin Solo has his own ideas. Impatient, and figuring that forgiveness is easier to come by than permission, he takes off for Yavin 4 in his X-wing.

When it comes to confidence, courage, and raw Force talent, Anakin has few peers. But when his friend Tahiri is separated from the other academy kids and captured by the Yuuzhan Vong, even Anakin may be in over his head. For the aliens have a different future in mind for Tahiri, and they will stop at nothing to achieve their horrific ends . . .`,
    releaseDate: "April 3, 2001",
  },
  {
    id: "edge-of-victory-ii-rebirth",
    title: "Edge of Victory II: Rebirth",
    author: "Greg Keyes",
    timelinePlacement: 26.0,
    timelineLabel: "26 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81PMGxRxnRL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4wQ6t4r",
    description: `The Star Wars epic continues its dazzling space odyssey in The New Jedi Order–as Luke and Mara, Leia and Han, and others battle the mighty enemy from beyond the galactic rim.

The brutal Yuuzhan Vong are scouring the universe for Jedi to slaughter. With no help from the divided New Republic, the Jedi stand alone against their seemingly invincible foe. Han and Leia Organa Solo risk deadly consequences with their controversial tactics to bolster the Jedi resistance. After uncovering a new Yuuzhan Vong menace, Anakin and Tahiri find themselves wanted for murder by the Peace Brigade. To avoid capture, they jump into hyperspace . . . and into trouble far graver.

Hunted by the Yuuzhan Vong, wanted as criminals by the New Republic, and with unrest stirring within their own ranks, the Jedi find peril everywhere they turn. But even in the midst of despair, while the most fiercest battle of all looms on the horizon, hope arises with the birth of one very special child. . . .`,
    releaseDate: "July 31, 2001",
  },
  {
    id: "young-jedi-knights-heirs-of-the-force",
    title: "Young Jedi Knights: Heirs of the Force",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 23.0,
    timelineLabel: "23 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("heirsoftheforce.jpg"),
    amazonLink: "https://amzn.to/4eq12BM",
    description: `While exploring the jungle outside the academy, the twins make a startling discovery—the remains of a TIE fighter that had crashed years ago during the battle against the first Death Star. Mechanical whiz Jaina thinks she can repair it…if they can sneak the right parts from the academy.

Meanwhile, their work is being closely watched—but not by academy eyes. The original pilot, an Imperial trooper, has been living wild in the jungle since his ship went down. Waiting to return to duty. And now his chance has come…`,
    releaseDate: "June 1, 1995",
  },
  {
    id: "young-jedi-knights-shadow-academy",
    title: "Young Jedi Knights: Shadow Academy",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 23.0,
    timelineLabel: "23 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("shadowacademy.jpg"),
    amazonLink: "https://amzn.to/4xdMxIE",
    description: `The Dark Jedi Brakiss—the student Luke Skywalker expelled from his academy—has learned much since he left. Enough to master the dark side of the Force. And enough to establish his own school for training Jedi—the Shadow Academy.

But now Brakiss has been given an even greater task. Not only must he create a sinister legion of Dark Jedi to serve the Empire, he must undertake a challenge not even Darth Vader and the Emperor could meet: Kidnap the heirs of the Skywalker bloodline, and turn them to the dark side of the Force…`,
    releaseDate: "September 1, 1995",
  },
  {
    id: "young-jedi-knights-the-lost-ones",
    title: "Young Jedi Knights: The Lost Ones",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 23.0,
    timelineLabel: "23 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("thelostones.jpg"),
    amazonLink: "https://amzn.to/4obGZdN",
    description: `During a break in training, Jacen and Jaina are reunited with their old friend Zekk, an orphan living in the streets on their home planet of Coruscant. Young, wild, and free, Zekk has never had a care in the world…until now. He sees the changes in his friends. Jacen and Jaina have learned so much, have grown in so many ways. Compared to them, he is only a lost little boy.

However, a powerful being has seen his potential. Someone who knows about shame and jealousy—and how to make use of them. Someone who knows that the dark side of the Force is especially attractive when you've got nothing to lose…`,
    releaseDate: "December 1, 1995",
  },
  {
    id: "young-jedi-knights-lightsabers",
    title: "Young Jedi Knights: Lightsabers",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 23.0,
    timelineLabel: "23 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("lightsabers.jpg"),
    amazonLink: "https://amzn.to/3PYpJvT",
    description: `Luke Skywalker has come to a grim conclusion. With the threat of a new generation of Dark Jedi being trained at the Shadow Academy, he knows the New Republic will need all the fighters it can muster. At last, it is time for the young Jedi Knights to build their lightsabers.

But there is more to mastering the ancient weapon than mere swordsmanship. Each student must learn about the mysterious bond between Jedi and lightsaber. For Jacen and Jaina, success will mean growing stronger in the Force. But for one of their friends, failure will mean tragedy...`,
    releaseDate: "March 1, 1996",
  },
  {
    id: "young-jedi-knights-darkest-knight",
    title: "Young Jedi Knights: Darkest Knight",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 23.0,
    timelineLabel: "23 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("darkestknight.jpg"),
    amazonLink: "https://amzn.to/4g40rqz",
    description: `Lowie is concerned for his sister, Sirra, who is about to undergo a dangerous Wookiee rite a passage. Lowie returns to Kashyyyk, accompanied by Jacen, Jainaand Tenel Ka. When the Second Imperium learns of this, Master Brakiss dispatches Zekk and a team of Dark Jedi to lead a raid on Thikkiiana City, a major exporter of computer technology, to steal vital computer parts. By executing this mission, he will fulfill his great potential and win the title of the Darkest Knight of the Second Imperium. As a test of his loyalty, Zekk is also tasked with slaying his former friends should they cross paths. The Second Imperium attacks Kashyyyk, and the young Jedi are chased through the lower levels of the treacherous jungles. Zekk and Jaina confront each other, but Zekk cannot bring himself to harm her. He lets her go, warning her that Yavin 4 will soon be under attack. Zekk informs his colleagues that he killed Jaina. Meanwhile, the Emperor arrives at the Shadow Academy. Much to the consternation of Brakiss, he is not allowed to see or speak to Palpatine. But the Emperor remotely orders Brakiss to set course for Yavin 4.`,
    releaseDate: "June 1, 1996",
  },
  {
    id: "young-jedi-knights-jedi-under-siege",
    title: "Young Jedi Knights: Jedi Under Siege",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 23.0,
    timelineLabel: "23 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("jediundersiege.jpg"),
    amazonLink: "https://amzn.to/4obLqFj",
    description: `The day of reckoning is at hand for the young Jedi Knights. The Shadow Academy—with its army of Dark Jedi and Imperial stormtroopers—has appeared in the sky over Yavin 4. And when a commando raid destroys the shield generator protecting the Jedi academy, there is only one option: to fight.

Now Jacen and Jaina, along with Luke Skywalker and their friends, must trust in the Force and do battle with their sworn enemies—the Dark Jedi Zekk, his master Brakiss, and the loathsome Nightsister Tamith Kai. Victory means a new legacy of Jedi coming of age. Defeat means a final cloak of darkness over the entire galaxy.`,
    releaseDate: "September 1, 1996",
  },
  {
    id: "young-jedi-knights-shards-of-alderaan",
    title: "Young Jedi Knights: Shards of Alderaan",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 23.5,
    timelineLabel: "23–24 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("shardsofalderaan.jpg"),
    amazonLink: "https://amzn.to/4oa5qIm",
    description: `When the Empire died, they were born—a new hope for the New Republic. The young twins of Han Solo and Princess Leia have taken their first steps as Jedi Knights, defeating the evil minions of the Shadow Academy. Now, with their friends Tenel Ka and Lowbacca the Wookiee, the future heroes of an already legendary saga continue their training.

Jacen and Jaina set off for the Alderaan system, determined to salvage a piece of the shattered planet as a gift for their mother. But amid the ghosts of a dead world, the twins are in for a deadly surprise: some ghosts still live. A long-lost enemy of the Solo family is about to return…`,
    releaseDate: "January 1, 1997",
  },
  {
    id: "young-jedi-knights-diversity-alliance",
    title: "Young Jedi Knights: Diversity Alliance",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 24.0,
    timelineLabel: "24 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("diversityalliance.jpg"),
    amazonLink: "https://amzn.to/3PPl0g1",
    description: `Everyone is searching for Bornan Thul. Not only is he father to one of Jacen's and Jaina's fellow students, he holds the key to a secret coalition gaining power in the New Republic. The young Jedi Knights race across the galaxy to find him—but they may be too late. For their true enemy is about to show its treacherous face. And it will be shockingly familiar…`,
    releaseDate: "April 1, 1997",
  },
  {
    id: "young-jedi-knights-delusions-of-grandeur",
    title: "Young Jedi Knights: Delusions of Grandeur",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 24.0,
    timelineLabel: "24 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("delusionsofgrandeur.jpg"),
    amazonLink: "https://amzn.to/4ecUqp7",
    description: `As the search for Raynar Thul's father continues, the young Jedi Knights turn for help to a most unusual—and dangerous—source: the reprogrammed assassin droid IG-88. They think they can keep him under control. But can one of the most feared bounty hunters in the galaxy be trusted?`,
    releaseDate: "July 1, 1997",
  },
  {
    id: "young-jedi-knights-jedi-bounty",
    title: "Young Jedi Knights: Jedi Bounty",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 24.0,
    timelineLabel: "24 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("jedibounty.jpg"),
    amazonLink: "https://amzn.to/4oioDrG",
    description: `Lowbacca has left the Jedi academy and traveled to the planet Ryloth, headquarters of the Diversity Alliance, to see what the Diversity Alliance is really all about.

On Yavin 4, Jacen, Jaina and the other young Jedi Knights have already discovered one truth about the Alliance—once you go to Ryloth, you either join or you die. Lowie is in great danger, and they must rescue him. But what can a small group of humans do against a planet full of hostile aliens?`,
    releaseDate: "October 1, 1997",
  },
  {
    id: "young-jedi-knights-the-emperors-plague",
    title: "Young Jedi Knights: The Emperor's Plague",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 24.0,
    timelineLabel: "24 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("theemperorsplague.jpg"),
    amazonLink: "https://amzn.to/4dROPWq",
    description: `Jacen and Jaina

When the Galactic Empire died, they were born—a new hope for the New Republic. The young twins of Han Solo and Princess Leia have taken their first steps as Jedi Knights, defeating the evil minions of the Shadow Academy. Now, with their friends Tenel Ka and Lowbacca the Wookiee, the future heroes of an already legendary saga continue their training.

Bornan Thul's secret is out: he's been protecting a deadly plague that could devastate the galaxy if released. And the evil Nolaa Tarkona—leader of the Diversity Alliance—knows where it is hidden.

Now Jacen, Jaina and their allies must race against time. As a massive battle rages between New Republic soldiers and the forces of the Diversity Alliance, the young Jedi Knights must find and destroy the plague before it can be released.

But they first must face Nolaa Tarkona. And her very lethal hired hand, Boba Fett.`,
    releaseDate: "January 1, 1998",
  },
  {
    id: "young-jedi-knights-return-to-ord-mantell",
    title: "Young Jedi Knights: Return to Ord Mantell",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 24.0,
    timelineLabel: "24 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("returntoordmantell.jpg"),
    amazonLink: "https://amzn.to/3SqCRKT",
    description: `Jacen and Jaina

When the Galactic Empire died, they were born—a new hope for the New Republic. The young twins of Han Solo and Princess Leia have grown strong with the Force, thwarting the evil Nolaa Tarkona and destroying the Emperor's Plague. Now, with their friends Lowbacca the Wookiee and Tenel Ka, the future heroes of an already legendary saga continue their training.

Han Solo's past is about to catch up with him. When he and the twins take the Millennium Falcon to Ord Mantell for a high-speed race, they meet a battle-hungry woman wielding a lightsaber. Her name is Anja Gallandro, and she knows more about Han's history than he likes. But Anja Gallandro guards an even more devastating secret—a secret that could mean disaster for the entire Solo family.`,
    releaseDate: "May 1, 1998",
  },
  {
    id: "young-jedi-knights-trouble-on-cloud-city",
    title: "Young Jedi Knights: Trouble on Cloud City",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 24.0,
    timelineLabel: "24 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("troubleoncloudcity.jpg"),
    amazonLink: "https://amzn.to/4fAI8cF",
    description: `Jacen and Jaina

When the Empire died, they were born—a new hope for the New Republic. The young twins of Han Solo and Princess Leia have grown strong with the Force, thwarting the evil Nolaa Tarkona and destroying the Emperor's Plague. Now, with their friends Lowbacca the Wookiee and Tenel Ka, the future heroes of an already legendary saga continue their training.

Lando Calrissian offers the young Jedi Knights a rare opportunity—a vacation on Cloud City. They jump at the chance—as long as their new friend, the mysterious Anja Gallandro, can come along.

Anja is happy to be included. But little do the twins know that they are actually helping Anja hatch her sinister plan. A plan that goes far deeper than simple revenge…`,
    releaseDate: "August 1, 1998",
  },
  {
    id: "young-jedi-knights-crisis-at-crystal-reef",
    title: "Young Jedi Knights: Crisis at Crystal Reef",
    author: "Kevin J. Anderson & Rebecca Moesta",
    timelinePlacement: 24.0,
    timelineLabel: "24 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("crisisatcrystalreef.jpg"),
    amazonLink: "https://amzn.to/3SaMopn",
    description: `Anja Gallandro planned to destroy the Solo family. But now she fights an intense inner battle—against her growing spice addiction, and her growing friendship with Jacen and Jaina. She no longer knows where her loyalties lie. In desperation for spice, she steals a ship and flees the Jedi academy.

The young Jedi Knights give chase, following her from the spice mines of Kessel to the dangerous paradise of Crystal Reef. But Anja has been a pawn all along in a game that is much bigger than all of them. And they just landed in the middle of it…`,
    releaseDate: "December 1, 1998",
  },
  {
    id: "vector-prime",
    title: "Vector Prime",
    author: "R. A. Salvatore",
    timelinePlacement: 25.0,
    timelineLabel: "25 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81z-i-0AeIL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4fppWCu",
    description: `Twenty-one years after the Battle of Endor, the New Republic will face an even darker enemy. . . .

More than two decades after the heroes of the Rebel Alliance destroyed the Death Star and broke the power of the Emperor, the New Republic has struggled to maintain peace and prosperity among the peoples of the galaxy. But unrest has begun to spread and threatens to destroy the Republic’s tenuous reign.

Into this volatile atmosphere comes Nom Anor, a charismatic firebrand who heats passions to the boiling point, sowing seeds of dissent for his own dark motives. And as the Jedi and the Republic focus on internal struggles, a new threat surfaces from beyond the farthest reaches of the Outer Rim—an enemy bearing weapons and technology unlike anything New Republic scientists have ever seen.

Suddenly, Luke Skywalker; his wife, Mara; Han Solo; Leia Organa Solo; and Chewbacca—along with the Solo children—are thrust again into battle, to defend the freedom so many have fought and died for. But this time, the power of the Force itself may not be enough. . . .`,
    releaseDate: "October 5, 1999",
  },
  {
    id: "dark-tide-i-onslaught",
    title: "Dark Tide I: Onslaught",
    author: "Michael Stackpole",
    timelinePlacement: 25.0,
    timelineLabel: "25 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81xrsQGhENL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4tCpZyc",
    description: `In this epic of unsurpassed action and imagination, Michael Stackpole helps to launch an exciting new era in Star Wars history. Onslaught pits the battle-tested heroes of the past—Luke Skywalker, Han Solo, and Leia Organa Solo—along with the next generation of Jedi and droids, against fearsome never-before-encountered enemies from beyond the galactic rim . . .

It is a perilous time for the New Republic. Just when unity is needed most, mistrust is on the rise. Even the Jedi feel the strain, as rogue elements rebel against Luke's leadership. When alien invaders known as the Yunnan Vong strike without warning, the New Republic is thrown on the defensive. Merciless warriors, the Yunnan Vong glory in torture. Their technology is as strange as it is deadly. Most ominous of all, they are impervious to the Force.

Now Luke must wield all the awesome powers of a Jedi Master to defeat the gravest threat since Darth Vader. As Leia and Gavin Darklighter lead desperate refugees in a fighting retreat from Yunnan Vong forces, Mara Jade, Anakin, Jacen, and Corran Horn find themselves tested as never before by a faceless, implacable foe determined to smother the light of the New Republic forever beneath a shroud of darkest evil . . .`,
    releaseDate: "February 1, 2000",
  },
  {
    id: "dark-tide-ii-ruin",
    title: "Dark Tide II: Ruin",
    author: "Michael Stackpole",
    timelinePlacement: 25.0,
    timelineLabel: "25 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71LQldBtpwL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3PKoIHB",
    description: `New York Times bestselling author Michael A. Stackpole continues The New Jedi Order epic with Dark Tide II: Ruin, a thrilling Star Wars adventure in which the Jedi Knights must fight their most treacherous battle—against an unrelenting evil intent on devouring the galaxy. . . .

The alien Yuuzhan Vong have launched an attack on the worlds of the Outer Rim.  They are merciless, without regard for life—and they stand utterly outside the Force.  Their ever-changing tactics stump the New Republic military. Even the Jedi, once the greatest guardians of peace in the galaxy, are rendered helpless by this impervious foe—and their solidarity has begun to unravel.

While Luke struggles to keep the Jedi together, Knights Jacen Solo and Corran Horn set off on a reconnaissance mission to the planet Garqi, an occupied world. There, at last, they uncover a secret that might be used to undermine the enemy—if only they can stay alive long enough to use it!`,
    releaseDate: "June 6, 2000",
  },
  {
    id: "agents-of-chaos-i-hero-s-trial",
    title: "Agents of Chaos I: Hero's Trial",
    author: "James Luceno",
    timelinePlacement: 25.0,
    timelineLabel: "25 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://images.wikia.com/starwars/images/e/e8/AgentsChaos1_PB.jpg",
    amazonLink: "https://amzn.to/49xdmxi",
    description: `Merciless attacks by an invincible alien force have left the New Republic reeling. Dozens of worlds have succumbed to occupation or annihilation, and even the Jedi Knights have tasted defeat. In these darkest of times, the noble Chewbacca is laid to rest, having died as heroically as he lived--and a grief-stricken Han Solo is left to fit the pieces of his shattered soul back together before he loses everything: friends, family, and faith.

Refusing help from Leia or Luke, Han becomes the loner he once was, seeking to escape the pain of his partner's death in adventure . . . and revenge. When he learns that an old friend from his smuggling days is operating as a mercenary for the enemy, he sets out to expose the traitor. But Han's investigation uncovers an even greater evil: a sinister conspiracy aimed at the very heart of the New Republic's will and ability to fight--the Jedi.

Now Han must face down his inner demons and, with the help of a new and unexpected ally, honor Chewbacca's sacrifice in the only way that matters--by being worthy of it.`,
    releaseDate: "August 1, 2000",
  },
  {
    id: "agents-of-chaos-ii-jedi-eclipse",
    title: "Agents of Chaos II: Jedi Eclipse",
    author: "James Luceno",
    timelinePlacement: 25.0,
    timelineLabel: "25 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://i0.wp.com/images.wikia.com/starwars/images/8/8d/Jedi_Eclipse_Cover.jpg",
    amazonLink: "https://amzn.to/4dnGZCh",
    description: `A string of smashing victories by the forces of the sinister aliens known as the Yuuzhan Vong has left New Republic resources and morale stretched to the breaking point. Leia Organa Solo, estranged from her husband, Han, oversees the evacuation of refugees on planets in the path of the merciless invaders. Luke Skywalker struggles to hold the fractious Jedi Knights together, even while one of them undertakes a bold but reckless undercover mission.

Manipulating their alliance with the amoral Hutts, the Yuuzhan Vong leave a cunning trail of vital information where New Republic agents are sure to find it--information the desperate defenders cannot afford to ignore: the location of the aliens' next target.

Then Han Solo stumbles into the dark heart of raging battle, thus beginning a furious race against time that will require every skill and trick in his arsenal to win...`,
    releaseDate: "October 3, 2000",
  },
  {
    id: "the-approaching-storm",
    title: "The Approaching Storm",
    author: "Alan Dean Foster",
    timelinePlacement: -22.1,
    timelineLabel: "22 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388360388i/35149.jpg",
    amazonLink: "https://amzn.to/4uxM6rb",
    description:
      "The Republic is decaying, even under the leadership of Supreme Chancellor Palpatine, who was elected to save the galaxy from collapsing under the forces of discontent. On the tiny but strategic planet of Ansion, a powerful faction is on the verge of joining the growing secessionist movement. At the Chancellor’s request, the Jedi Council sends two Jedi Knights, Obi-Wan Kenobi and Luminara Unduli, along with their Padawans Anakin Skywalker and Barriss Offee, to stabilize the planet’s population. To succeed, the Jedi will have to fulfill near-impossible tasks, befriend wary strangers, and influence two great armies, stalked all the while by an enemy sworn to see the negotiations collapse and the mission fail. . . .",
    releaseDate: "December 1, 2002",
  },
  {
    id: "episode-ii-attack-of-the-clones",
    title: "Star Wars: Attack of the Clones",
    author: "R.A. Salvatore",
    timelinePlacement: -22,
    timelineLabel: "22 BBY",
    bookType: [
      "Adaptations",
      "Adult",
      "Legends",
    ],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1441320475i/629384.jpg",
    amazonLink: "https://amzn.to/4uguBvl",
    description: `There is a great disturbance in the Force. . . . From the sleek ships of the glimmering Coruscant skyscape to the lush gardens of pastoral Naboo, dissent is roiling. The Republic is failing, even under the leadership of Supreme Chancellor Palpatine, elected ten years earlier to save the crumbling government. Separatists threaten war, and the Senate is hopelessly divided, unable to determine whether to raise an army for battle or keep the fragile peace. It is a stalemate that once broken, could lead to galactic chaos.

Mischievous and resolved, courageous to the point of recklessness, Anakin Skywalker has come of age in a time of great upheaval. The nineteen-year-old apprentice to Obi-Wan Kenobi is an enigma to the Jedi Council, and a challenge to his Jedi Master. Time has not dulled Anakin's ambition, nor has his Jedi training tamed his independent streak. When an attempt on Senator Padmé Amidala's life brings them together for the first time in ten years, it is clear that time also has not dulled Anakin's intense feelings for the beautiful diplomat.

The attack on Senator Amidala just before a crucial vote thrusts the Republic even closer to the edge of disaster. Masters Yoda and Mace Windu sense enormous unease. The dark side is growing, clouding the Jedi's perception of the events. Unbeknownst to the Jedi, a slow rumble is building into the roar of thousands of soldiers readying for battle. But even as the Republic falters around them, Anakin and Padmé find a connection so intense that all else begins to fall away. Anakin will lose himself—and his way—in emotions a Jedi, sworn to hold allegiance only to the Order, is forbidden to have.

Based on the story by George Lucas and the screenplay by George Lucas and Jonathan Hales, this intense and revealing novel by bestselling author R. A. Salvatore sheds new light on the legend of Star Wars—and skillfully illuminates one of our most beloved sagas.`,
    releaseDate: "May 1, 2002",
  },
  {
    id: "star-wars-episode-ii-attack-of-the-clones",
    title: "Star Wars Episode II: Attack of the Clones",
    author: "Patricia C. Wrede",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade", "Adaptations"],
    coverUrl: getLegendsCover("clonesjunior.jpg"),
    amazonLink: "https://amzn.to/4ofW126",
    description: `A long time ago in a galaxy far, far away....

A galaxy is undermined. An army emerges. A love is forbidden. A dark turn approaches.

The saga continues.`,
    releaseDate: "April 23, 2002",
  },
  {
    id: "boba-fett-the-fight-to-survive",
    title: "Boba Fett: The Fight to Survive",
    author: "Terry Bisson",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("fightsurvive.jpg"),
    amazonLink: "https://amzn.to/4ebCRWA",
    description: `Boba Fett is not like other boys. His father, Jango Fett, is a bounty hunter. His planet, Kamino, is home to an army of clones. He has no friends, no school. The one thing he does have is a future as a bounty hunter.

This future comes quickly. Suddenly Boba Fett is all alone in a dangerous galaxy. He must struggle for safety — and vengeance — using his strength, his intelligence, and his father's hard lessons.

Boba Fett will grow up to be one of the most feared bounty hunters in the galaxy.

But first he must survive his childhood.`,
    releaseDate: "April 23, 2002",
  },
  {
    id: "boba-fett-crossfire",
    title: "Boba Fett: Crossfire",
    author: "Terry Bisson",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("crossfire.jpg"),
    amazonLink: "https://amzn.to/4ofFGur",
    description: `His most important ally is his greatest enemy.

Boba Fett is alone in the world. His father is dead. He's never had friends. The only thing that keeps him going is his desire to survive—and become a bounty hunter.

Aurra Sing has taken him to Count Dooku's lair on the toxic planet of Raxus Prime. Boba thinks Dooku will help him. But Dooku has other plans…and the Jedi have their plans as well.

The Clone Wars are raging throughout the galaxy, and Boba Fett is caught in a spectacular crossfire on Raxus Prime. What he discovers there will change the course of his life.`,
    releaseDate: "November 1, 2002",
  },
  {
    id: "boba-fett-maze-of-deception",
    title: "Boba Fett: Maze of Deception",
    author: "Elizabeth Hand",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("mazedeception.jpg"),
    amazonLink: "https://amzn.to/4oaHDIx",
    description: `'Trust no one. Especially a bounty hunter.'

When he died in the first Clone War battle, Jango Fett left a fortune somewhere on the planet of Aargau. The bounty hunter Aurra Sing is the only person who knows where the fortune is. But Jango's son, Boba Fett, is the only person who can get to it.

Aurra Sing needs Boba, and Boba needs Aurra Sing. But there's no way they can trust each other. Every move could be a deception. Every word could be a lie.

As the search for Jango Fett's legacy becomes dangerously complicated, young Boba Fett must outsmart and outmaneuver enemies of all kinds—even hidden ones. His future as a bounty hunter depends on it.`,
    releaseDate: "April 1, 2003",
  },
  {
    id: "the-cestus-deception",
    title: "The Cestus Deception",
    author: "Steven Barnes",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1394335649i/21236280.jpg",
    amazonLink: "https://amzn.to/3RIge4g",
    description:
      "When the economically depressed government of Ord Cestus threatens to sell incredibly deadly battle droids to the Separatists, Supreme Chancellor Palpatine dispatches a team led by Jedi Knight Obi-Wan Kenobi to the planet. Their mission: to halt the deal. A peaceful resolution is preferable, but if all else fails, the Republic will not hesitate to demonstrate the consequences of disloyalty by launching a full-scale attack—wiping out not only the means of biodroid production but countless lives as well. The prospect of such a slaughter only fuels Obi-Wan’s growing suspicions about the sinister path the Republic seems to be taking. Facing a crisis of conscience, Obi-Wan must find the wisdom and strength to prevent a bloodbath and safeguard the Republic—while abiding by the ancient code to which he has pledged his life.",
    releaseDate: "January 1, 2004",
  },
  {
    id: "jedi-trial",
    title: "Jedi Trial",
    author: "David Sherman & Dan Cragg",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389677287i/184279.jpg",
    amazonLink: "https://amzn.to/4wz7rBA",
    description: `With these ominous words, Pors Tonith, ruthless minion of Count Dooku, declares the fate of the Republic sealed. Commanding a Separatist invasion force more than one million strong, the cunning financier-turned-warrior lays siege to the planet Praesitlyn, home of the strategic intergalactic communications center that is key to the Republic’s survival in the Clone Wars. Left unchallenged, this decisive strike could indeed pave the way for the toppling of more Republic worlds . . . and ultimate victory for the Separatists. Retaliation must be swift and certain.

But engaging the enemy throughout the galaxy has already stretched Supreme Chancellor Palpatine’s armies to the limit. There is no choice but to move against the surging waves of invading battle-droids on Praesitlyn with only a small contingent of clone soldiers. Commanding them will be Jedi Master Nejaa Halcyon–hand-picked by the Council for the do-or-die mission. And at his side, skilled young starfighter pilot Anakin Skywalker, a promising young Jedi Padawan eager to be freed of the bonds of apprenticeship–and to be awarded the title of Jedi Knight.

Shoulder to shoulder with a rogue Republic army officer and his battle-hardened crew, a hulking Rondian mercenary with an insatiable taste for combat, and a duo of ready-for-anything soldiers, the Jedi generals take to the skies and the punishing desert terrain of occupied Praesitlyn–to bring the battle to the Separatist forces. Already outnumbered and outgunned, when confronted with an enemy ultimatum that could lead to the massacre of innocents, they may also be out of options. Unless Anakin Skywalker can strike a crucial balance between the wisdom born of the Force . . . and the instincts of a born warrior.`,
    releaseDate: "October 26, 2004",
  },
  {
    id: "star-wars-the-clone-wars-movie-novelization",
    title: "Star Wars: The Clone Wars",
    author: "Karen Traviss",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: [
      "Adaptations",
      "Adult",
      "Legends",
    ],
    coverUrl:
      "https://m.media-amazon.com/images/I/61Y7DyqPsAL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4dnctZm",
    description: `Across the galaxy, the Clone Wars are raging. The Separatists, led by Count Dooku, the onetime Jedi and now secret Sith Lord, continue to press forward, and more and more worlds are either falling, or seceding and joining the cause. Under the leadership of Supreme Chancellor Palpatine, the Republic heroically battles on, championed by its huge army of cloned soldiers and their Jedi generals.

Anakin Skywalker, believed by some to be the prophesied “Chosen One” destined to bring balance to the Force, is now a Jedi Knight under the tutelage of his Jedi Master, Obi-Wan Kenobi. Death is a constant possibility–and his chances of survival aren’t improved by the unexpected arrival of an apprentice: Ahsoka, a brash, inexperienced fourteen-year-old Padawan apprenticed to Anakin. But there’s no time for Anakin to question his latest orders: He and Obi-Wan have been assigned a new mission, and failure is not an option.

Jabba the Hutt’s precious infant son has been kidnapped, and when the frantic parent applies to the Jedi for help, it falls to Anakin, Obi-Wan, Ahsoka, and their clone troops to track down the evidence and retrieve the missing Huttlet. And more is at stake: For a grateful Jabba just might allow the Republic access to the Hutt-controlled space lanes that the Grand Army desperately needs in order to beat the Separatists into submission.

But the Republic is not the only power that craves access to those space lanes. Count Dooku, determined to win the prize for the Separatists, has set a trap for the Jedi. When they find the Huttlet, they will also find Dooku’s master assassin, Asajj Ventress, and countless legions of battle droids waiting to spring a trap.

The blazing new animated feature film Star Wars: The Clone Wars takes place in the years preceding Star Wars: Episode III: Revenge of the Sith and sets the stage for the groundbreaking TV series. Both contain all original material–direct from the brilliant imagination of legendary Star Wars creator George Lucas. And these exciting new adventures and characters are being brought to life in book form by none other than #1 New York Times bestselling Star Wars author Karen Traviss.`,
    releaseDate: "July 26, 2008",
  },
  {
    id: "the-clone-wars",
    title: "The Clone Wars",
    author: "Tracey West",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade", "Adaptations"],
    coverUrl: getLegendsCover("clonewarsjunior.jpg"),
    amazonLink: "https://amzn.to/4fqxV2j",
    description: `War has spread chaos across the galaxy, and Jedi Generals Obi-Wan Kenobi and Anakin Skywalker find themselves leading a massive clone army into battle against Count Dooku and his Separatist Alliance. On the planet of Tatooine, deep in the Outer Rim of the galaxy, crime lord Jabba the Hutt's son has been kidnapped. To gain the Hutt's allegiance, an advantage over Dooku, the Jedi have agreed to find and rescue Jabba's son.`,
    releaseDate: "July 26, 2008",
  },
  {
    id: "the-clone-wars-defenders-of-the-republic",
    title: "The Clone Wars: Defenders of the Republic",
    author: "Rob Valois",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("defendersrepublic.jpg"),
    amazonLink: "https://amzn.to/4obKiS5",
    description: `Based on the Star Wars: The Clone Wars television series, this novel follows a group of clone troopers as they rise through the ranks from cadets, to rookies, and all the way to elite ARC troopers`,
    releaseDate: "October 7, 2010",
  },
  {
    id: "the-clone-wars-secret-missions-1-breakout-squad",
    title: "The Clone Wars: Secret Missions 1: Breakout Squad",
    author: "Ryder Windham",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("breakoutsquad.jpg"),
    amazonLink: "https://amzn.to/4e6ZNWV",
    description: `A Jedi general vanishes on a distant world, leaving his young apprentice and a group of untested clone troopers to complete a dangerous secret mission.

Trapped in the vast expanse of Wild Space, in the far outskirts of the galaxy, this inexperienced team must look for help among a world of smugglers and criminals while evading Darth Sidious's ruthless bounty hunter, Cad Bane. With few options and time running out, they'll need all the help they can get!`,
    releaseDate: "September 3, 2009",
  },
  {
    id: "the-clone-wars-secret-missions-2-curse-of-the-black-hole-pirates",
    title: "The Clone Wars: Secret Missions 2: Curse of the Black Hole Pirates",
    author: "Ryder Windham",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("cursepirates.jpg"),
    amazonLink: "https://amzn.to/4fAGGad",
    description: `Jedi Padawan Nuru Kungurama and the clone troopers of Breakout Squad—Breaker, Knuckles, Sharp, and Chatterbox—are sent on a diplomatic mission to the Unknown Regions by Chancellor Palpatine. Traveling with renegade cargo pilot Lalo Gunn in the Hasty Harpy, the young Jedi and his clone escorts are in for an unexpected surprise as they encounter the infamous Black Hole Pirates.`,
    releaseDate: "July 22, 2010",
  },
  {
    id: "the-clone-wars-secret-missions-3-duel-at-shattered-rock",
    title: "The Clone Wars: Secret Missions 3: Duel at Shattered Rock",
    author: "Ryder Windham",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("shatteredrock.jpg"),
    amazonLink: "https://amzn.to/4ukODnC",
    description: `Young Jedi Nuru Kungurama and the clone troopers of Breakout Squad receive orders to escort new allies across space to Coruscant. But the diplomatic mission turns deadly when the identity of a mysterious saboteur is revealed and Nuru encounters a deadly armored warrior with ties to Count Dooku. This series is written by acclaimed writer Ryder Windham, who has authored over 50 Star Wars books.`,
    releaseDate: "March 3, 2011",
  },
  {
    id: "the-clone-wars-grievous-attacks",
    title: "The Clone Wars: Grievous Attacks!",
    author: "Veronica Wasserman, Tracey West & Rob Valois",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("grievousattacks.jpg"),
    amazonLink: "https://amzn.to/4e6ZThf",
    description: `"I will rest when the Jedi are dead." —General Grievous

One of the most fearsome enemies of the Galactic Republic, General Grievous, has made it his sole duty to hunt down and destroy every last Jedi. In this trilogy of stories, a group of young clone soldiers goes up against Grievous's droid army, the general captures R2-D2, and finally the Jedi find themselves trapped inside Grievous's evil lair. Be careful, you never know what will happen when Grievous Attacks!`,
    releaseDate: "February 5, 2009",
  },
  {
    id: "the-clone-wars-secret-missions-4-guardians-of-the-chiss-key",
    title: "The Clone Wars: Secret Missions 4: Guardians of the Chiss Key",
    author: "Ryder Windham",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("chisskey.jpg"),
    amazonLink: "https://amzn.to/3SoysIm",
    description: `The Clone Wars: Secret Missions series of original novels concludes as Nuru Kungurama returns to the Jedi Temple on Coruscant while the remaining members of Breakout Squad await their next mission. But after an alien escape pod vanishes from the Jedi Archives, Kung finds himself flung toward a fateful encounter with his own Jedi Master, Ring-Sol Ambase.`,
    releaseDate: "March 15, 2012",
  },
  {
    id: "the-clone-wars-wild-space",
    title: "The Clone Wars: Wild Space",
    author: "Karen Miller",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388275661i/3108764.jpg",
    amazonLink: "https://amzn.to/4wNkD6i",
    description: `The Clone Wars have exploded across the galaxy as Republic forces and Separatists struggle to gain the upper hand. But while the Jedi generals work tirelessly to defeat Count Dooku and his rebels, Supreme Chancellor Palpatine is hatching his own dark plans.

The Separatists have launched a sneak attack on Coruscant. Obi-Wan Kenobi, wounded in battle, insists that Anakin Skywalker and his rookie Padawan Ahsoka leave on a risky mission against General Grievous. But when Senator Bail Organa reveals explosive intelligence that could turn the tide of war in the Republic’s favor, the Jedi Master agrees to accompany him to an obscure planet on the Outer Rim to verify the facts. What Obi-Wan and Bail don’t realize is that they’re walking into a deadly trap concocted by Palpatine . . . and that escape may not be an option.

Inspired by the full-length animated feature film Star Wars: The Clone Wars and the brand-new TV series, this thrilling adventure is filled with provocative, never-before-revealed insights into the characters of Obi-Wan, Anakin, Padme, Yoda, Count Dooku, and many other Star Wars favorites.`,
    releaseDate: "December 9, 2008",
  },
  {
    id: "boba-fett-hunted",
    title: "Boba Fett: Hunted",
    author: "Elizabeth Hand",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("bobahunted.jpg"),
    amazonLink: "https://amzn.to/4o9nqTe",
    description: `His first mission may be his last.

On the barren planet of Tatooine, young Boba Fett is surrounded by criminals, mercenaries, and thieves. In his quest to become a bounty hunter, he is searching out the greatest crime lord of all—Jabba the Hutt.

But Jabba the Hutt is not easily found…or easily impressed. When Boba finally tracks down the crime lord, Jabba has an offer for him: one assignment, one chance. He must capture a deadly bounty…or else.

It is the biggest test Boba Fett has ever faced—one that will determine his future.`,
    releaseDate: "October 1, 2003",
  },
  {
    id: "republic-commando-hard-contact",
    title: "Republic Commando: Hard Contact",
    author: "Karen Traviss",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1466586536i/30730576.jpg",
    amazonLink: "https://amzn.to/49CddZr",
    description: `Experience the first in the epic series featuring the brave members of Omega Squad—an elite team of clone commandos—fighting to protect the Galactic Republic.
 
On a mission to sabotage a chemical weapon research facility on a Separatist-held planet, four clone troopers operate under the very noses of their enemies. The commandos are outnumbered and outgunned, deep behind enemy lines with no backup–and working with strangers instead of trusted teammates. Matters don’t improve when Darman, the squad’s demolitions expert, gets separated from the others during planetfall. Even Darman’s apparent good luck in meeting an inexperienced Padawan vanishes once Etain admits to her woeful naivety.
 
For the separated clone commandos and stranded Jedi, a long, dangerous journey lies ahead, through hostile territory brimming with Trandoshan slavers, Separatists, and suspicious natives. A single misstep could mean discovery . . . and death. It’s a virtual suicide mission for anyone–anyone except Republic Commandos.`,
    releaseDate: "October 26, 2004",
  },
  {
    id: "shatterpoint",
    title: "Shatterpoint",
    author: "Matthew Stover",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320548499i/2691616.jpg",
    amazonLink: "https://amzn.to/4tF5YHp",
    description: `In this essential Star Wars Legends novel, Mace Windu must journey to his long-forgotten homeworld to confront a terrifying mystery with dire personal consequences.

The jungle planet of Haruun Kal, homeworld of the legendary Jedi Master Mace Windu, has become a battleground in the increasing hostilities between the Republic and the renegade Separatist movement. The Jedi Council has sent Depa Billaba—Mace’s former Padawan and fellow Council member—to Haruun Kal to train the local tribesmen as a guerrilla resistance force. But now the Separatists have pulled back, and Depa has not returned. The only clue to her disappearance is a cryptic recording left at the scene of a brutal massacre: a recording that hints of madness and murder, and the darkness in the jungle . . . a recording in Depa’s own voice.

Mace Windu trained Depa. Only he can find her. Only he can learn what has changed her. Only he can stop her. He will leave behind the Republic he serves, the civilization he believes in, everything but his passion for peace and his devotion to his former Padawan. And he will learn the terrible price that must be paid when keepers of the peace are forced to make war. . . .`,
    releaseDate: "June 3, 2003",
  },
  {
    id: "the-clone-wars-no-prisoners",
    title: "The Clone Wars: No Prisoners",
    author: "Karen Traviss",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388275648i/5560685.jpg",
    amazonLink: "https://amzn.to/3PJVCrN",
    description: `The Clone Wars rage on. As insurgent Separatists fight furiously to wrest control of the galaxy from the Republic, Supreme Chancellor Palpatine cunningly manipulates both sides for his own sinister purposes.

Torrent Company’s Captain Rex agrees to temporarily relieve Anakin Skywalker of Ahsoka, his ubiquitous–and insatiably curious–Padawan, by bringing her along on a routine three-day shakedown cruise aboard Captain Gilad Pellaeon’s newly refitted assault ship. But the training run becomes an active–and dangerous–rescue mission when Republic undercover agent Hallena Devis goes missing in the middle of a Separatist invasion.

Dispatched to a distant world to aid a local dictator facing a revolution, Hallena finds herself surrounded by angry freedom fighters and questioning the Republic’s methods–and motives. Summoned to rescue the missing operative who is also his secret love, Pellaeon–sworn to protect the Republic over all–is torn between duty and desire. And Ahsoka, sent in with Rex and six untested clone troopers to extract Hallena, encounters a new and different Jedi philosophy, which shakes the foundation of her upbringing to the core. As danger and intrigue intensify, the loyalties and convictions of all involved will be tested. . . .`,
    releaseDate: "May 19, 2009",
  },
  {
    id: "survivor-s-quest",
    title: "Survivor's Quest",
    author: "Timothy Zahn",
    timelinePlacement: 22.0,
    timelineLabel: "22 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71o9vbCkX8L._SY522_.jpg",
    amazonLink: "https://amzn.to/4fqHiih",
    description: `The specter of the menacing Grand Admiral Thrawn looms over Luke and Mara Jade Skywalker as they embark on a journey to recover an important piece of Jedi history.

Sometimes it seems a Jedi’s work is never done, and Luke and Mara Jade Skywalker know this only too well. Despite the bond they share in the Force, the Jedi Master and his wife are still learning the ropes of being a couple after three years of marriage—and struggling to find time together between the constant demands of duty. But all that will change when they’re united on an unexpected mission: They must pool their exceptional skills to combat an insidious enemy and salvage a part of Jedi history.

Whatever may await, the Skywalkers will not face it alone. Joining them on the strange and solemn journey are an officer of the post-Palpatine Empire escorted by a detachment of Imperial stormtroopers; a party of diplomats from a gentle alien species that reveres the fallen Jedi for saving them from bloodthirsty conquerors; and a New Republic ambassador who harbors his own mysterious agenda.

Soon enough, suspicion, secrecy, and an unknown saboteur run rampant aboard the isolated ship. But the gravest danger lies within the derelict walls of Outbound Flight, buried for half a century on a desolate planetoid. As the marooned hulk yields up stunning revelations and unexpected terrors to its visitors, Luke and Mara find all that they stand for—and their very existence—brutally challenged. The ultimate test will be surviving the deathtrap carefully laid by foes who are legendary for their ruthlessness, and determined to complete the job Thrawn began: exterminating the Jedi.`,
    releaseDate: "February 3, 2004",
  },
  {
    id: "republic-commando-triple-zero",
    title: "Republic Commando: Triple Zero",
    author: "Karen Traviss",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1386920880i/22201.jpg",
    amazonLink: "https://amzn.to/4ddf5ds",
    description: `Dive into the epic series featuring the brave warriors of Omega Squad—an elite team of clone commandos fighting to protect the Galactic Republic.

Following the eruption of the bloody Clone Wars at the battle of Geonosis, both sides remain deadlocked in a stalemate that can be broken only by elite warrior teams like Omega Squad, clone commandos with terrifying combat skills and a lethal arsenal.

For Omega Squad, deployed deep behind enemy lines, it’s the same old special ops grind: sabotage, espionage, ambush, and assassination. But when Omega Squad is rushed to Coruscant, the war’s most dangerous new hotspot, the commandos discover they’re not the only ones penetrating the heart of the enemy. 

A surge in Separatist attacks has been traced to a network of cells in the Republic’s capital, masterminded by a mole in Command Headquarters. To identify and destroy a Separatist spy and terror network in a city full of civilians will require special talents and skills. Not even the leadership of Jedi generals, along with the assistance of Delta Squad and a certain notorious ARC trooper, can even the odds against the Republic Commandos. And while success may not bring victory in the Clone Wars, failure means certain defeat.`,
    releaseDate: "February 28, 2006",
  },
  {
    id: "clone-wars-gambit-stealth",
    title: "Clone Wars Gambit: Stealth",
    author: "Karen Miller",
    timelinePlacement: -21,
    timelineLabel: "21 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320436814i/6562329.jpg",
    amazonLink: "https://amzn.to/4wtL6FP",
    description: `Planet by planet, darkness creeps across the galaxy. Among warriors and generals, among ordinary beings living in far-flung worlds, the fear will not go away: We are losing this war. . . .
 
Anakin Skywalker feels it, too. The Separatist Alliance, with ruthlessness and treachery, is beating the Republic to every strategic target. But after a costly clash with General Grievous for the planet Kothlis, Anakin has a mission that will focus his anxious mind. Alongside Obi-Wan Kenobi, he is posing as a long-lost native of Lanteeb, an impoverished world on the Outer Rim. This seemingly unimportant planet has drawn the interest of the Seps—and Anakin and Obi-Wan soon discover the disturbing reason: A scientist enslaved by General Lok Durd is drawing on Lanteeb’s one natural resource for a devastating bioweapon. Now Anakin and Obi-Wan have entered the eye of a storm. Their presence has been exposed, Lok Durd’s plans unveiled, and a fight has begun for survival behind enemy lines—and a chance of winning a war that must be fought at any cost.`,
    releaseDate: "February 23, 2010",
  },
  {
    id: "clone-wars-gambit-siege",
    title: "Clone Wars Gambit: Siege",
    author: "Karen Miller",
    timelinePlacement: -21,
    timelineLabel: "21 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388275576i/7024357.jpg",
    amazonLink: "https://amzn.to/4974kqB",
    description: `On the Outer Rim, the planet Lanteeb has no strategic value, no political power, and one enormous problem: It has been invaded by an emboldened Separatist Alliance. To find out why, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi have snuck onto Lanteeb--and now look oblivion in the eye. . . .

Hiding their lightsabers beneath their dusty disguises, Anakin and Obi-Wan draw on their Jedi skills to stay one step ahead of Lok Durd's droid army on Lanteeb. The Jedi know that a captive scientist has given Durd the keys to a terrifying bioweapon. Durd knows that the Jedi are on his planet. With Yoda calling on the powers of the Jedi Council, with a new Separatist technology jamming the Guardians' communications, and with a traitor at the heart of the Republic's government, the wheels of war are turning. But the Separatists have blockaded Lanteeb. The finishing touches are being put on a weapon to destroy whole worlds. And it will be up to the two Jedi Knights and their most trusted comrades to liberate Lanteeb or forever suffer the consequences.`,
    releaseDate: "July 6, 2010",
  },
  {
    id: "republic-commando-true-colors",
    title: "Republic Commando: True Colors",
    author: "Karen Traviss",
    timelinePlacement: -21.0,
    timelineLabel: "21 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328301831i/12026257.jpg",
    amazonLink: "https://amzn.to/4dMqWPN",
    description: `The third installment of the epic series featuring the brave warriors of Omega Squad—an elite team of clone commandos—fighting to protect the Galactic Republic

As the savage Clone Wars rage unchecked, the Republic’s deadliest warriors face the grim truth that the Separatists aren’t their only enemy—or even their worst.

In the Grand Army’s desperate fight to crush the Separatists, the secret special ops missions of its elite clone warriors have never been more critical . . . or more dangerous. A growing menace threatens Republic victory, and the members of Omega Squad make a shocking discovery that shakes their very loyalty.

As the lines continue to blur between friend and enemy, citizens—from civilians and sergeants to Jedi and generals—find themselves up against a new foe: the doubt in their own hearts and minds. The truth is a fragile, shifting illusion—and only the approaching inferno will reveal both sides’ true colors.`,
    releaseDate: "October 30, 2007",
  },
  {
    id: "the-clone-wars-decide-your-destiny-the-way-of-the-jedi",
    title: "The Clone Wars: Decide Your Destiny: The Way of the Jedi",
    author: "Jake Forbes",
    timelinePlacement: -21.0,
    timelineLabel: "21 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("wayofjedi.jpg"),
    amazonLink: "https://amzn.to/4xcBwaF",
    description: `Have you ever wanted to be a Jedi Knight? Well, here's your chance. From the chambers of the Jedi Temple you can travel to the forests of Kashyyyk and fight alongside the mighty Wookiees, or you can fly through space and battle bounty hunters in your starfighter. With dozens of paths to choose from, and over twenty-five different endings, there will be a whole new adventure waiting for you with every read.`,
    releaseDate: "October 2, 2008",
  },
  {
    id: "the-clone-wars-tethan-battle-adventure",
    title: "The Clone Wars: Decide Your Destiny: Tethan Battle Adventure",
    author: "Sue Behrent",
    timelinePlacement: -21.0,
    timelineLabel: "21 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("tethanbattle.jpg"),
    amazonLink: "https://amzn.to/3PYoIE5",
    description: `Have you ever wanted to travel from the tangled jungles of Teth to the desert lands of Tatooine? Well, here's your chance! Discover the secrets of B'Omarr Monastery, dodge blaster fire and come face to face with Asajj Ventress! Only you have the power to decide to become a Jedi or turn to the dark side. Crack the codes that link you to online digital content, with an exciting speeder bike game and lots of thrilling animated sequences! There's a new adventure waiting for you with every read. Begin your adventures.`,
    releaseDate: "Jan 7, 2010",
  },
  {
    id: "the-clone-wars-decide-your-destiny-the-lost-legion",
    title: "The Clone Wars: Decide Your Destiny: The Lost Legion",
    author: "Tracey West",
    timelinePlacement: -21.0,
    timelineLabel: "21 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("lostlegion.jpg"),
    amazonLink: "https://amzn.to/4xvI2cT",
    description: `Do you have what it takes to be a clone trooper in the Republic Army? In this Decide Your Destiny story set in the world of Star Wars: The Clone Wars you can choose from multiple characters—such as medic, commander, demolitions expert, or recon—and dozens of paths to create your own adventure. With over twenty-five different endings, every time you read this book it'll be a whole new adventure.

Plot summary`,
    releaseDate: "July 23, 2009",
  },
  {
    id: "the-clone-wars-decide-your-destiny-crisis-on-coruscant",
    title: "The Clone Wars: Decide Your Destiny: Crisis on Coruscant",
    author: "Jonathan Green",
    timelinePlacement: -21.0,
    timelineLabel: "21 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("crisiscoruscant.jpg"),
    amazonLink: "https://amzn.to/3Q0UdgQ",
    description: `Join the characters in Star Wars: The Clone Wars on your very own adventure! Jump in and out of cyberspace to continue the experience online with exclusive content, amazing animated scenes and games! There's a new adventure with every read. The Galactic Senate is under attack! As Padawan to Jedi Master Shaak Ti, your mission is to rescue Chancellor Palpatine, then find out who is responsible for the plot. Your adventure will take you from the depths of the underlevels on Coruscant, to the Great Mesra Plateau and Jabba the Hutt's Palace on Tatooine. Will you prove yourself worthy of your Jedi training or turn to the dark side when the going gets tough?`,
    releaseDate: "January 28, 2010",
  },
  {
    id: "the-clone-wars-decide-your-destiny-dookus-secret-army",
    title: "The Clone Wars: Decide Your Destiny: Dooku's Secret Army",
    author: "Sue Behrent",
    timelinePlacement: -21.0,
    timelineLabel: "21 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("dookussecret.jpg"),
    amazonLink: "https://amzn.to/3Q6zojV",
    description: `Join the characters in Star Wars: The Clone Wars on your very own adventure! Jump in and out of cyberspace to continue the experience online with exclusive content, amazing animated scenes and games! There's a new adventure with every read. Rumor has it that Count Dooku is building a highly-trained army to destroy the Jedi! Apprenticed to Jedi Master Plo Koon, you are assigned a mission to locate and destroy the training ground of Dooku's secret army. Your search will take you to different planets and introduce you to many interesting characters – but who should you trust? And can you complete your mission before you are betrayed?`,
    releaseDate: "January 28, 2010",
  },
  {
    id: "the-clone-wars-warriors-of-the-deep",
    title: "The Clone Wars: Warriors of the Deep",
    author: "Rob Valois",
    timelinePlacement: -21.0,
    timelineLabel: "21 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("warriorsdeep.jpg"),
    amazonLink: "https://amzn.to/43y3Arj",
    description: `Based on season four of the hit animated series, this novelization follows the continuing adventures of Anakin Skywalker and his fellow Jedi as they battle against the sinister armies of the dark side.`,
    releaseDate: "January 1, 2011",
  },
    {
    id: "the-wrath-of-darth-maul",
    title: "The Wrath of Darth Maul",
    author: "Ryder Windham",
    timelinePlacement: -20.0,
    timelineLabel: "20 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("WrathofDarthMaul.jpg"),
    amazonLink: "https://amzn.to/4nQ2K2s",
    description: `Forged by rage

Taken as a child and trained in the ways of the Sith, he became the apprentice to the greatest evil the galaxy has ever known….

Honed by the dark side

After years of plotting in secrecy, he and his Master will take revenge on the Jedi Order—and the once-mighty Republic will tremble….

The savage story of Darth Maul has been shrouded in mystery—until now.`,
    releaseDate: "January 1, 2012",
  },
  {
    id: "medstar-i-battle-surgeons",
    title: "Medstar I: Battle Surgeons",
    author: "Michael Reaves & Steve Perry",
    timelinePlacement: -20.0,
    timelineLabel: "20 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/61XcxI-AjlL._SY522_.jpg",
    amazonLink: "https://amzn.to/4ddh4yr",
    description: `As Civil War between the Republic and the Separatists rages across the galaxy, nowhere is the fighting more fierce than on the swamp world of Drongar, where a beleaguered mobile hospital unit wages a never-ending war of its own . . .

A surgeon who covers his despair with wise-cracks; another who faces death and misery head-on, venting his emotions through beautiful music . . . A nurse with her heart in her work and her eye on a doctor . . . A Jedi Padawan on a healing mission without her Master . . .  These are the core members of a tiny med unit serving the jungle world of Drongar, where battle is waged over the control of a priceless native plant, and an endless line of medlifters brings in the wounded and dying—mostly clone troopers, but also soldiers of all species.

While the healers work desperately to save lives, others plot secretly to profit from the war—either by dealing on the black market or by manipulating the events of the war itself. In the end, though, all will face individual tests, and only those of compassionate hearts and staunch spirits can hope to survive to fight another day.`,
    releaseDate: "June 29, 2004",
  },
  {
    id: "medstar-ii-jedi-healer",
    title: "Medstar II: Jedi Healer",
    author: "Michael Reaves & Steve Perry",
    timelinePlacement: -20.0,
    timelineLabel: "20 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/815HNkG2guL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4nuqUiO",
    description: `While the Clone Wars wreak havoc throughout the galaxy, the situation on the far world of Drongar is desperate, as Republic forces engage in a fierce fight with the Separatists. . . .

The threatened enemy offensive begins as the Separatists employ legions of droids into their attack. Even with reinforcements, the flesh and blood of the Republic forces are just no match for battle droids’ durasteel. Nowhere is this point more painfully clear than in the steaming Jasserak jungle, where the doctors and nurses of a small med unit face an impossible situation. As the dead and wounded start to pile up, surgeons Jos Vandar and Kornell “Uli” Divini know that time is running out.

Even the Jedi abilities of Padawan Barriss Offee have been stretched to the limit. Ahead lies a test for Barriss that could very well lead to her death–and that of countless others. For the conflict is growing–and for this obscure mobile med unit, there’s only one resolution. Shocking, bold, unprecedented, it’s the only option Jos and his colleagues really have.The unthinkable has become the inevitable. Whether it kills them or not remains to be seen.`,
    releaseDate: "September 28, 2004",
  },
  {
    id: "the-clone-wars-darth-maul-shadow-conspiracy",
    title: "The Clone Wars: Darth Maul: Shadow Conspiracy",
    author: "Jason Fry",
    timelinePlacement: -20.0,
    timelineLabel: "20 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("shadowconspiracy.jpg"),
    amazonLink: "https://amzn.to/3RRAb94",
    description: `Fueled by vengeance and rage, the newly reunited brothers Darth Maul and Savage Opress spread terror and violence. As they forcibly recruit criminals from the darkest corners of the Outer Rim to join their army, the brothers begin to consolidate their new criminal empire in an effort to bring out Darth Maul's most hated enemy: Obi-Wan Kenobi.

With the backing of an army composed of the galaxy's most vicious criminal organizations, there is nothing that stands in Maul's way that he cannot crush. Will Darth Maul have his vengeance against Obi-Wan Kenobi, or will the Jedi Knight escape his grasp? And if so, at what cost?`,
    releaseDate: "January 1, 2013",
  },
  {
    id: "yoda-dark-rendezvous",
    title: "Yoda: Dark Rendezvous",
    author: "Sean Stewart",
    timelinePlacement: -19.0,
    timelineLabel: "19 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81Uo2AgpF3L._SY522_.jpg",
    amazonLink: "https://amzn.to/4dtBJxe",
    description: `A gripping Clone Wars–era adventure featuring a showdown between Grand Master Yoda and his former apprentice, the sinister Count Dooku.
 
The savage Clone Wars have forced the Republic to the edge of collapse. During the height of the battle, one Jedi Knight escapes the carnage to deliver a message to Yoda on Coruscant. It appears that Dooku wants peace and demands a rendezvous. Chances are slim that the treacherous Count is sincere but, with a million lives at stake, Yoda has no choice.

The meeting will take place on Vjun, a planet steeped in evil. The challenge could not be more difficult. Can Yoda win back his once promising pupil from the dark side or will Count Dooku unleash his sinister forces against his former mentor? Either way, Yoda is sure of one thing: this battle will be one of the fiercest he’ll ever face.`,
    releaseDate: "November 23, 2004",
  },
  {
    id: "boba-fett-a-new-threat",
    title: "Boba Fett: A New Threat",
    author: "Elizabeth Hand",
    timelinePlacement: -19.0,
    timelineLabel: "19 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("newthreat.jpg"),
    amazonLink: "https://amzn.to/4oicumy",
    description: `A powerful enemy is the greatest danger.

When you work for Jabba the Hutt, you do whatever he wants you to do—no matter what the risk. As Jabba's newest bounty hunter, Boba Fett has a lot to prove…and little time to prove it. So when Jabba sends him into the thick of the Clone Wars, there's no backing down from the fight.

General Grievous is at the heart of the plot to overthrow the Republic. He is fierce, strong, and virtually unstoppable. When his path crosses Boba's, sparks fly—and many lives are threatened.`,
    releaseDate: "April 1, 2004",
  },
  {
    id: "boba-fett-pursuit",
    title: "Boba Fett: Pursuit",
    author: "Elizabeth Hand",
    timelinePlacement: -19.0,
    timelineLabel: "19 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("pursuit.jpg"),
    amazonLink: "https://amzn.to/4e2Azc8",
    description: `A father's death. A son's revenge.

Boba Fett is emerging as one of the most skilled bounty hunters in the galaxy. After surviving his deadly battle with the fearsome General Grievous, there's one bounty he wants more than any other: Mace Windu, the Jedi who killed his father.

When fate and Anakin Skywalker bring Boba Fett to the city-planet of Coruscant, Boba plunges into the Coruscant underworld and arms himself for the greatest confrontation of his young life.

It's the bounty hunter vs. the Jedi as Boba Fett takes his one and only chance at revenge.`,
    releaseDate: "December 1, 2004",
  },
  {
    id: "labyrinth-of-evil",
    title: "Labyrinth of Evil",
    author: "James Luceno",
    timelinePlacement: -19.0,
    timelineLabel: "19 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320517329i/924928.jpg",
    amazonLink: "https://amzn.to/4tFMKBx",
    description: `The war that erupted in Star Wars:Episode II Attack of the Clones is nearing its boiling point, as the dauntless Separatist forces continue their assault on the teetering Republic–and the diabolical triumvirate of Count Dooku, General Grievous, and their Master, Darth Sidious, fine-tune their strategy for conquest. In Episode III Revenge of the Sith the fates of key players on both sides of the conflict will be sealed. But first, crucial events that pave the way to that time of reckoning unfold in a labyrinth of evil. . . .

Capturing Trade Federation Viceroy–and Separatist Councilmember–Nute Gunray is the mission that brings Jedi Knights Obi-Wan Kenobi and Anakin Skywalker, with a squad of clones in tow, to Neimoidia. But the treacherous ally of the Sith proves as slippery as ever, evading his Jedi pursuers even as they narrowly avoid deadly disaster. Still, their daring efforts yield an unexpected prize: a unique holotransceiver that bears intelligence capable of leading the Republic forces to their ultimate quarry, the ever-elusive Darth Sidious.

Swiftly taking up the chase, Anakin and Obi-Wan follow clues from the droid factories of Charros IV to the far-flung worlds of the Outer Rim . . . every step bringing them closer to pinpointing the location of the Sith Lord–whom they suspect has been manipulating every aspect of the Separatist rebellion. Yet somehow, in the escalating galaxy-wide chess game of strikes, counterstrikes, ambushes, sabotage, and retaliations, Sidious stays constantly one move ahead.

Then the trail takes a shocking turn. For Sidious and his minions have set in motion a ruthlessly orchestrated campaign to divide and overwhelm the Jedi forces–and bring the Republic to its knees.`,
    releaseDate: "January 25, 2005",
  },
  {
    id: "episode-iii-revenge-of-the-sith",
    title: "Star Wars: Revenge of the Sith",
    author: "Matthew Stover",
    timelinePlacement: -19.0,
    timelineLabel: "19 BBY",
    bookType: [
      "Adaptations",
      "Adult",
      "Legends",
    ],
    coverUrl:
      "https://m.media-amazon.com/images/I/71CP6jHA4qL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4tCS88r",
    description: `The turning point for the entire Star Wars saga is at hand

After years of civil war, the Separatists have battered the already faltering Republic nearly to the point of collapse. On Coruscant, the Senate watches anxiously as Supreme Chancellor Palpatine aggressively strips away more and more constitutional liberties in the name of safeguarding the Republic. Yoda, Mace Windu, and their fellow Masters grapple with the Chancellor’ s disturbing move to assume control of the Jedi Council. And Anakin Skywalker, the prophesied Chosen One, destined to bring balance to the Force, is increasingly consumed by his fear that his secret love, Senator Padmé Amidala, will die.

As the combat escalates across the galaxy, the stage is set for an explosive endgame: Obi-Wan undertakes a perilous mission to destroy the dreaded Separatist military leader General Grievous. Palpatine, eager to secure even greater control, subtly influences public opinion to turn against the Jedi. And a conflicted Anakin–tormented by unspeakable visions– edges dangerously closer to the brink of a galaxy-shaping decision. It remains only for Darth Sidious, whose shadow looms ever larger, to strike the final staggering blow against the Republic . . . and to ordain a fearsome new Sith Lord: Darth Vader.

Based on the screenplay of the eagerly anticipated final film in George Lucas’s epic saga, bestselling Star Wars author Matthew Stover’s novel crackles with action, captures the iconic characters in all their complexity, and brings a space opera masterpiece full circle in stunning style.`,
    releaseDate: "April 2, 2005",
  },
  {
    id: "star-wars-episode-iii-revenge-of-the-sith",
    title: "Star Wars Episode III: Revenge of the Sith",
    author: "Patricia C. Wrede",
    timelinePlacement: -19.0,
    timelineLabel: "19 BBY",
    bookType: ["Legends", "Middle Grade", "Adaptations"],
    coverUrl: getLegendsCover("ep3junior.jpg"),
    amazonLink: "https://amzn.to/4esgwFq",
    description: `A long time ago in a galaxy far, far, far away....

A vow is broken. A Jedi falls. A Sith Lord rises.

The Empire is born.`,
    releaseDate: "April 2, 2005",
  },
  {
    id: "republic-commander-order-66",
    title: "Republic Commando: Order 66",
    author: "Karen Traviss",
    timelinePlacement: -19,
    timelineLabel: "19 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1410140410i/18412828.jpg",
    amazonLink: "https://amzn.to/4dtp2Cm",
    description: `Omega Squadron faces the ultimate trial during the final days of the Clone Wars as Palpatine issues Order 66.

The Clone Wars rage to their bloody climax. Treachery reigns. Treason takes courage. Commandos, Jedi, and the entire Galactic Republic must face the end of life as they know it . . . and the dreaded dawn of a new empire.

Even as the Clone Wars are about to reach an explosive conclusion, no one knows whether victory will favor the Grand Army of the Republic or the Separatists. But no matter who wins, the stakes are highest for elite Special Ops clones like the Republic Commandos in Omega and Delta squads—and the notorious renegade Advanced Recon Commando troopers known as Null ARCs. And now even the deadliest weapon may not be powerful enough to defeat the realmenace: the apocalyptic horror that will be unleashed when Palpatine utters the chilling words “The time has come. Execute Order 66.” Translation: The Jedi have tried to stage a coup, and all must be executed on sight.

With their faith in the Republic and their loyalty to their Jedi allies put to the ultimate test, how will the men of Omega and Delta squads react to the most infamous command in galactic history?`,
    releaseDate: "September 16, 2008",
  },
  {
    id: "kenobi",
    title: "Kenobi",
    author: "John Jackson Miller",
    timelinePlacement: -18.9,
    timelineLabel: "19 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1369503659i/17262173.jpg",
    amazonLink: "https://amzn.to/4ueOUZN",
    description: `The Republic has fallen. Sith Lords rule the galaxy. Jedi Master Obi-Wan Kenobi has lost everything . . . everything but hope.

Tatooine—a harsh desert world where farmers toil in the heat of two suns while trying to protect themselves and their loved ones from the marauding Tusken Raiders. A backwater planet on the edge of civilized space. And an unlikely place to find a Jedi Master in hiding, or an orphaned infant boy on whose tiny shoulders rests the future of a galaxy.

Known to locals only as “Ben,” the bearded and robed offworlder is an enigmatic stranger who keeps to himself, shares nothing of his past, and goes to great pains to remain an outsider. But as tensions escalate between the farmers and a tribe of Sand People led by a ruthless war chief, Ben finds himself drawn into the fight, endangering the very mission that brought him to Tatooine.

Ben—Jedi Master Obi-Wan Kenobi, hero of the Clone Wars, traitor to the Empire, and protector of the galaxy’s last hope—can no more turn his back on evil than he can reject his Jedi training. And when blood is unjustly spilled, innocent lives threatened, and a ruthless opponent unmasked, Ben has no choice but to call on the wisdom of the Jedi—and the formidable power of the Force—in his never-ending fight for justice.`,
    releaseDate: "August 27, 2013",
  },
  {
    id: "dark-lord-the-rise-of-darth-vader",
    title: "Dark Lord: The Rise of Darth Vader",
    author: "James Luceno",
    timelinePlacement: -18.9,
    timelineLabel: "19 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71tTgVfaDeL._SY522_.jpg",
    amazonLink: "https://amzn.to/3ReSR27",
    description: `Anakin Skywalker–the Chosen One–is dead. In his place rises Darth Vader, who now hunts what Jedi survived the desctruction of their temple on Coruscant.

From the site of Anakin Skywalker’s last stand–on the molten surface of the planet Mustafar, where he sought to destroy his friend and former master, Obi-Wan Kenobi–a fearsome specter in black has risen. Once the most powerful Knight ever known to the Jedi Order, he is now a disciple of the dark side, a lord of the dreaded Sith, and the avenging right hand of the galaxy’s ruthless new Emperor. Seduced, deranged, and destroyed by the machinations of the Dark Lord Sidious, Anakin Skywalker is dead . . . and Darth Vader lives.

Word of the events that created him–the Jedi Council’s failed mutiny against Supreme Chancellor Palpatine, the self-crowned Emperor’s retaliatory command to exterminate the Jedi Order, and Anakin’s massacre of his comrades and Masters in the Jedi Temple–has yet to reach all quarters. On the Outer Rim world of Murkhana, Jedi Masters Roan Shryne and Bol Chatak and Padawan Olee Starstone are leading a charge on a Separatist stronghold, unaware that the tide, red with Jedi blood, has turned suddenly against them.

When the three narrowly elude execution–and become the desperate prey in a hunt across space–it’s neither clone soldiers, nor the newly deployed stormtroopers, nor even the wrath of the power-hungry Emperor himself they must fear most. The deadliest threat rests in the hideously swift and lethal crimson lightsaber of Darth Vader–behind whose brooding mask lies a shattered heart, a poisoned soul, and a cunning, twisted mind hell-bent on vengeance.

For the handful of scattered Jedi, survival is imperative if the light side of the Force is to be protected and the galaxy somehow, someday reclaimed. Yet more important still is the well-being of the twin infants, Leia and Luke Skywalker, the children of Anakin and his doomed bride, Padmé Amidala. Separated after Padmé’s death, they must be made safe at all costs, lest the hope they represent for the future be turned to horror by the new Sith regime–and the unspeakable power of the dark side.`,
    releaseDate: "November 22, 2005",
  },
  {
    id: "imperial-commando-501st",
    title: "Imperial Commando: 501st",
    author: "Karen Traviss",
    timelinePlacement: -18.9,
    timelineLabel: "19 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81RgoyfC5oL._SY522_.jpg",
    amazonLink: "https://amzn.to/4dr7h6B",
    description: `Omega Squad is no more—in its place stand the Imperial commandos, under the imperious command of Darth Vader and the Empire.

The Clone Wars are over, but for those with reason to run from the new galactic Empire, the battle to survive has only just begun. . . .

The Jedi have been decimated in the Great Purge, and the Republic has fallen. Now the former Republic commandos—the galaxy’s finest special forces troops, cloned from Jango Fett—find themselves on opposing sides and in very different armor. Some have deserted and fled to Mandalore with the mercenaries, renegade clone troopers, and rogue Jedi who make up Kal Skirata’s ragtag resistance to Imperial occupation.

Others—including men from Delta Squad and Omega Squad—now serve as Imperial commandos, a black ops unit within Vader’s own 501st Legion, tasked to hunt down fugitive Jedi and clone deserters. For Darman, who’s grieving for his Jedi wife and separated from his son, it’s an agonizing test of loyalty. But he’s not the only one who’ll be forced to test the ties of brotherhood.

On Mandalore, clone deserters and the planet’s own natives, who have no love for the Jedi, will have their most cherished beliefs challenged. In the savage new galactic order, old feuds may have to be set aside to unite against a far bigger threat, and nobody can take old loyalties for granted.`,
    releaseDate: "October 27, 2009",
  },
  {
    id: "scourge",
    title: "Scourge",
    author: "Jeff Grubb",
    timelinePlacement: 19.1,
    timelineLabel: "19 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71gmFYKwpqL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4udTfwi",
    description: `In the heart of crime-ridden Hutt Space, a Jedi Scholar searches for justice.
 
While trying to obtain the coordinates of a secret, peril-packed, but potentially beneficial trade route, a novice Jedi is killed—and the motive for his murder remains shrouded in mystery. Now his former Master, Jedi archivist Mander Zuma, wants answers, even as he fights to erase doubts about his own abilities as a Jedi. What Mander gets is immersion into the perilous underworld of the Hutts as he struggles to stay one step ahead in a game of smugglers, killers, and crime lords bent on total control.`,
    releaseDate: "April 24, 2012",
  },
  {
    id: "junior-jedi-knights-the-golden-globe",
    title: "Junior Jedi Knights: The Golden Globe",
    author: "Nancy Richardson",
    timelinePlacement: 22.0,
    timelineLabel: "22 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("goldenglobe.jpg"),
    amazonLink: "https://amzn.to/4v0dJsY",
    description: `Anakin Solo is now eleven—and headed for the Jedi academy! The Force is very strong with him—he can feel it. And his uncle Luke thinks it is time for him to start his training…

On his first day at the Jedi academy, Anakin makes a new friend named Tahiri. The Force is with her too. Soon they find out that together they can accomplish feats that surprise even their teachers!

But the teachers don't know what else Anakin and Tahiri do together. Every night, they both have the same dream of going down the river by the Academy on a raft. In the dream, they are drawn by the Force…but for all they know, it could be the dark side!

There is only one way to find out for sure. They have to go down the river all by themselves—for real!`,
    releaseDate: "October 1, 1995",
  },
  {
    id: "junior-jedi-knights-lyrics-world",
    title: "Junior Jedi Knights: Lyric's World",
    author: "Nancy Richardson",
    timelinePlacement: 22.0,
    timelineLabel: "22 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("lyricsworld.jpg"),
    amazonLink: "https://amzn.to/4ahYjI9",
    description: `Anakin Solo is now eleven—and headed for the Jedi academy! The Force is very strong with him—he can feel it. And his uncle Luke thinks it is time for him to start his training…

Anakin and Tahiri are off on an adventure to the distant moon of Yavin 8! There they will help their alien friend Lyric join the "elders," the adults of her race. To do it, she must go through a strange and wonderful change. And when it is over, Lyric won't look anything like her old self!

But Anakin and Tahiri are in for an even bigger surprise. Deep within the caves of Lyric's world are carvings that match the ones they back in the temple on Yavin 4. If they can read them, they might be able to break the curse of the mysterious Golden Globe and defeat the dark side of the Force!

But there is something waiting for them down in the caves. Something large and dangerous. And it will take more than the Force to defeat it!`,
    releaseDate: "January 1, 1996",
  },
  {
    id: "junior-jedi-knights-promises",
    title: "Junior Jedi Knights: Promises",
    author: "Nancy Richardson",
    timelinePlacement: 22.0,
    timelineLabel: "22 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("promises.jpg"),
    amazonLink: "https://amzn.to/49G0N30",
    description: `Anakin Solo is now eleven—and headed for the Jedi academy! The Force is very strong with him—he can feel it. And his uncle Luke thinks it is time for him to start his training…

Before she joined the academy, Anakin's friend Tahiri lived with a strange and dangerous tribe. She knows nothing of her real parents—or how she came to live with the treacherous Tusken Raiders. Tahiri knew the day would come when she'd learn everything about her past…and that day has come!

But first, Tahiri must prove she's worthy. And that means she must complete a deadly task that will test her skills as a warrior and a Jedi Knight. With Anakin by her side, she will have to use the Force like never before.

If Tahiri succeeds, she will learn how her parents lived—and died. But if she fails, she and Anakin may have to pay the ultimate price…`,
    releaseDate: "April 1, 1996",
  },
  {
    id: "junior-jedi-knights-anakins-quest",
    title: "Junior Jedi Knights: Anakin's Quest",
    author: "Rebecca Moesta",
    timelinePlacement: 22.0,
    timelineLabel: "22 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("anakinquest.jpg"),
    amazonLink: "https://amzn.to/4uUB3bp",
    description: `Anakin Solo is now eleven—and headed for the Jedi academy! The Force is very strong with him—he can feel it. And his uncle Luke thinks it is time for him to start his training…

Anakin has been having terrible dreams of a secret cave on Dagobah. He asks his uncle Luke if he can go there, to see if it's real. Luke says yes—but only if Tahiri, R2-D2 and the Jedi Master Ikrit go along.

Anakin and his friends find more danger than they bargained for in the swamps of Dagobah. But they do find the cave. What is inside? And will Anakin be strong enough in the Force to face it?`,
    releaseDate: "May 1, 1997",
  },
  {
    id: "junior-jedi-knights-vaders-fortress",
    title: "Junior Jedi Knights: Vader's Fortress",
    author: "Rebecca Moesta",
    timelinePlacement: 22.0,
    timelineLabel: "22 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("vadersfortress.jpg"),
    amazonLink: "https://amzn.to/49MSu5j",
    description: `Anakin Solo is now eleven—and headed for the Jedi academy! The Force is very strong with him—he can feel it. And his uncle Luke thinks it is time for him to start his training…

Anakin and his friends just heard an incredible secret! Darth Vader may have retrieved Obi-Wan Kenobi's lightsaber from the original Death Star. The lost weapon may be hidden in Vader's abandoned fortress on the planet Vjun, and Luke Skywalker agrees that it must be recovered.

Now Anakin and his friends—along with Tionne and the Jedi Master Ikrit—are heading off to Vjun to find the legendary fortress. Untold dangers await them, for no one knows what secrets still lie within those ancient walls. Even abandoned, it is a stronghold of dark power.

But the biggest danger may not have shown its face. For if they know about Obi-Wan's saber…who else does?`,
    releaseDate: "July 1, 1997",
  },
  {
    id: "junior-jedi-knights-kenobis-blade",
    title: "Junior Jedi Knights: Kenobi's Blade",
    author: "Rebecca Moesta",
    timelinePlacement: 22.0,
    timelineLabel: "22 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("kenobisblade.jpg"),
    amazonLink: "https://amzn.to/3Q1DnOS",
    description: `Anakin Solo is now eleven—and headed for the Jedi academy! The Force is very strong with him—he can feel it. And his uncle Luke thinks it is time for him to start his training…

Uldir, Anakin's classmate at the Jedi academy, wants to be a Jedi more than anything. But he can't even lift a feather with the Force. He thinks he knows how he can learn faster: the Holocron.

The Holocron is a cube that holds all the secrets of the ancient Jedi Masters. By "borrowing" it, along with Obi-Wan Kenobi's lightsaber, Uldir believes he will become a powerful Jedi Knight!

Now Anakin—along with Tahiri, R2-D2, Tionne and the Jedi Master Ikrit—must race across the galaxy to find Uldir. If they don't, Uldir could be killed. And Kenobi's blade and the holocron will fall into the hands of a very evil man…`,
    releaseDate: "September 1, 1997",
  },
  {
    id: "coruscant-nights-i-jedi-twilight",
    title: "Coruscant Nights I: Jedi Twilight",
    author: "Michael Reaves",
    timelinePlacement: -18.9,
    timelineLabel: "19 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81HIvw0-LvL._SY522_.jpg",
    amazonLink: "https://amzn.to/4nugFei",
    description: `With the dark ascension of the Empire, and the Jedi Knights virtually wiped out, one Jedi who escaped the massacre is slated for a date with destiny–and a confrontation with Darth Vader.

Jax Pavan is one of the few Jedi Knights who miraculously survived the slaughter that followed Palpatine’s ruthless Order 66. Now, deep in Coruscant’s Blackpit Slums, Jax ekes out a living as a private investigator, trying to help people in need while concealing his Jedi identity and staying one step ahead of the killers out for Jedi blood. And they’re not the only ones in search of the elusive Jax. Hard-boiled reporter Den Dhur and his buddy, the highly unorthodox droid I-5YQ, have shocking news to bring Jax–about the father he never knew.

But when Jax learns that his old Jedi Master has been killed, leaving behind the request that Jax finish a mission critical to the resistance, Jax has no choice but to emerge from hiding–and risk detection by Darth Vader–to fulfill his Master’s dying wish.`,
    releaseDate: "June 24, 2008",
  },
  {
    id: "the-last-of-the-jedi-the-desperate-mission",
    title: "The Last of the Jedi: The Desperate Mission",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("desperatemission.jpg"),
    amazonLink: "https://amzn.to/3RJoJMK",
    description: `The Empire has risen. The Jedi Order has been destroyed. As far as the Emperor is concerned, the Jedi are all but extinct.

But on the remote planet of Tatooine, one Jedi Master remains: Obi-Wan Kenobi. Devastated by the loss of his fellow Jedi—and the betrayal of his former apprentice Anakin—Obi-Wan has been left with one last task: to watch over and protect a young child named Luke.

When Obi-Wan finds out that a former Jedi apprentice has survived, he must make a painful decision: whether to stay on Tatooine or go on one last, desperate mission—right into the heart of the Empire.

The thrilling new series from The New York Times bestselling author of Jedi Apprentice and Jedi Quest.`,
    releaseDate: "May 1, 2005",
  },
  {
    id: "the-last-of-the-jedi-dark-warning",
    title: "The Last of the Jedi: Dark Warning",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("darkwarning.jpg"),
    amazonLink: "https://amzn.to/4oel1qy",
    description: `Who Are the Last of the Jedi?

Obi-Wan Kenobi is on a mission. Along with the former Jedi apprentice Ferus Olin and a headstrong kid named Trever, he is trying to keep the Jedi's most important secret safe from the inquisitive Empire. With Boba Fett on their trail and time running out, Obi-Wan, Ferus, and Trever must make some daring and desperate escapes…into even more danger.

Along the way, they discover some incredible news: Obi-Wan and Yoda are not the only Jedi to have survived the Emperor's annihilation of the Order. There is at least one other…and he is hiding in the Caves of Ilum, a place where nightmares become reality and dark warnings tell of conflicts yet to come.

The thrilling new series from The New York Times bestselling author of Jedi Apprentice and Jedi Quest.`,
    releaseDate: "September 1, 2005",
  },
  {
    id: "the-last-of-the-jedi-underworld",
    title: "The Last of the Jedi: Underworld",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("underworld.jpg"),
    amazonLink: "https://amzn.to/4e9LGju",
    description: `A disgraced Padawan returns to the captive Jedi Temple on Coruscant to redeem himself. Ferus Olin has heard rumors that the Empire holds imprisoned Jedi within the desecrated building. Olin and his street-kid partner, Trever Flume, must plunge into the depths of Coruscant's dark and dangerous underworld in order to free the Jedi Knights. The lower reaches of the city planet have become a perilous sanctuary from those fleeing the Emperor's wrath, and navigating its alleyways and corridors may be just as dangerous as a foolhardy mission to breach the temple.

The thrilling new series from The New York Times bestselling author of Jedi Apprentice and Jedi Quest.

Alternate Book Summary

Who are the Last of the Jedi?

As a Jedi apprentice, Ferus Olin had to leave the Jedi Temple in disgrace. Now he must return to redeem himself--and save the future of the Jedi Order. The Empire now controls the Temple and everything inside... including, it is rumored, an imprisoned Jedi. Ferus and his street kid partner, Trever, must plunge into the depths of Coruscant in order to free the Jedi, exposing themselves to a dark underworld where both thieves and refugees hide from the Emperor's wrath. Breaking into the temple isn't going to be easy... and surviving the underworld is going to be even harder.

The thrilling new series from The New York Times bestselling author of Jedi Apprentice and Jedi Quest.`,
    releaseDate: "December 1, 2005",
  },
  {
    id: "the-last-of-the-jedi-death-on-naboo",
    title: "The Last of the Jedi: Death on Naboo",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("deathonnaboo.jpg"),
    amazonLink: "https://amzn.to/43ofGmS",
    description: `Who Are the Last of the Jedi?

Ex-Jedi Ferus Olin has been imprisoned by the Empire. His crime? Trying to save the Jedi Order.

The sinister Empire won't be able to hold Ferus for long—not when he has a friend on the inside. But escaping is only part of the problem. Ferus's quest is going to take him to the planet of Naboo, where a secret vital to the survival of the Jedi and the entire galaxy is being kept…and is in danger of being revealed.

In order to keep this secret, Ferus will have to face the ruthless Inquisitor Malorum. A battle will be fought—and lives will be lost.

Who will die on Naboo?

The thrilling new series from The New York Times bestselling author of Jedi Apprentice and Jedi Quest.`,
    releaseDate: "April 1, 2006",
  },
  {
    id: "coruscant-nights-ii-street-of-shadows",
    title: "Coruscant Nights II: Street of Shadows",
    author: "Michael Reaves",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71rgCjYY4wL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3R3jFCB",
    description: `With the Jedi all but wiped out in the grim aftermath of Order 66, the Empire’s power seems unchecked. But one lone Knight continues to fight the good fight–against all odds and when all else fails.

Deep in the bowels of Coruscant, Jedi Jax Pavan ekes out a living as a private investigator, a go-to, can-do guy for the downtrodden. Now a mysterious Zeltron knockout named Deejah approaches Jax with a case that needs to be cracked: to find out who killed her artist lover Volette, brutally murdered hours after his triumphant unveiling of a dazzling new light sculpture with obvious links to lightsaber pyrotechnics.

Finding Volette’s killer won’t be easy–too many secrets, too many suspects, and all kinds of motives. But with the droid I-5YQ’s help, and ex-reporter Den Dhur’s excellent snooping skills, the investigation is soon operating like a well-oiled machine.

Unfortunately, there’s a far more efficient machine hunting Jax. It’s a deadly game of cat-and-mouse as the clock starts ticking toward the final explosive showdown . . . to see who strikes first and who will die first.`,
    releaseDate: "August 26, 2008",
  },
  {
    id: "the-last-of-the-jedi-a-tangled-web",
    title: "The Last of the Jedi: A Tangled Web",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("tangledweb.jpg"),
    amazonLink: "https://amzn.to/3PKVSXN",
    description: `Who Are the Last of the Jedi?

Since evil Emperor Palpatine destroyed the Jedi Knights and seized power, his reign has been absolute. He controls the Senate. He controls the Imperial Army. He controls the galaxy. He is a Sith.

And now, for mysterious reasons, he wants to control Ferus Olin, ex-Padawan.

Ferus does not want to aid the Empire in any way. But when the Emperor threatens the lives of the people closest to him, Ferus doesn't have a choice. He agrees to go on a secret mission for Palpatine—to become a double-agent—and somehow keep his allegiance to the fallen Jedi Order.

Can he succeed? Or are the Emperor and his henchman Darth Vader too powerful to overcome?

The thrilling new series from The New York Times bestselling author of Jedi Apprentice and Jedi Quest.`,
    releaseDate: "July 1, 2006",
  },
  {
    id: "the-last-of-the-jedi-return-of-the-dark-side",
    title: "The Last of the Jedi: Return of the Dark Side",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("returndarkside.jpg"),
    amazonLink: "https://amzn.to/4e70dMZ",
    description: `Years ago, when they were both Jedi apprentices, Ferus Olin and Anakin Skywalker were rivals. Now their paths are about to cross again....

Abandoning the Jedi Order saved Ferus's life. As a result, he is the only one who can track down and save Jedi who have survived the rise of the Galactic Empire. He has rebellion on his mind, and hopes to bring about the fall of the Emperor.

Only Darth Vader stands in his way. Ferus might not realize it, but his old rival is now his new deadly enemy.

The thrilling new series from the New York Times bestselling author of Jedi Apprentice and Jedi Quest'.`,
    releaseDate: "November 17, 2006",
  },
  {
    id: "the-last-of-the-jedi-secret-weapon",
    title: "The Last of the Jedi: Secret Weapon",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("secretweapon.jpg"),
    amazonLink: "https://amzn.to/4ukqDRs",
    description: `On the planet Belassa, parts of a secret new weapon are being built by the Empire. Darth Vader and Grand Moff Tarkin are present to make sure the secret stays a secret — and they are joined by none other than the former Jedi apprentice and Rebel leader Ferus Olin.

But is Ferus Olin really on their side? Or is he a double agent, trying to save his planet and steal the Empire's plans? Ferus must guard the secret of his own allegiance… or become yet another victim consumed by the dark side.

The thrilling new series from the New York Times bestselling author of Jedi Apprentice and Jedi Quest.`,
    releaseDate: "March 1, 2007",
  },
  {
    id: "the-last-of-the-jedi-against-the-empire",
    title: "The Last of the Jedi: Against the Empire",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("againsttheempire.jpg"),
    amazonLink: "https://amzn.to/4umDBhB",
    description: `As the Empire's power grows, rebels face a choice: give in… or fight. Some form pockets of resistance on battleground planets. Some go undercover, trying to fight the Empire from within. Others watch and wait.

For Ferus Olin, hatred of the Empire is personal. The things that have been closest to him have been destroyed. The Jedi Order he once belonged to has been decimated. And the future isn't looking much brighter…

Unless a true Rebellion can be born.

The thrilling new series from The New York Times bestselling author of Jedi Apprentice and Jedi Quest.`,
    releaseDate: "October 1, 2007",
  },
  {
    id: "the-last-of-the-jedi-master-of-deception",
    title: "The Last of the Jedi: Master of Deception",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("masterofdeception.jpg"),
    amazonLink: "https://amzn.to/43o0mXp",
    description: `The planet of Alderaan is a peaceful one…and Senator Bail Organa wants to keep it that way. But the presence of the Empire is starting to cast a shadow over their tranquility — as spies and traitors infiltrate the corridors of power.

Alderaan holds a secret — a secret on which the future existence of the Jedi depends. Under strict instructions from the Emperor, double agent Ferus Olin must both uncover this secret and protect it. What he discovers raises dark questions from his own past — and puts him in direct conflict with another former Jedi…the sinister Dark Lord of the Sith, Darth Vader.

The thrilling series from the New York Times best-selling author of Jedi Apprentice and Jedi Quest'.`,
    releaseDate: "February 1, 2008",
  },
  {
    id: "the-last-of-the-jedi-reckoning",
    title: "The Last of the Jedi: Reckoning",
    author: "Jude Watson",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("reckoning.jpg"),
    amazonLink: "https://amzn.to/4vqe346",
    description: `When Ferus Olin was a young Jedi apprentice, his rival was a headstrong student named Anakin Skywalker.

Now Ferus is older, trying to save the Jedi Order from extinction. His enemy, however, remains the same. Because Anakin Skywalker is now Darth Vader…and Darth Vader wants Ferus Olin destroyed.

This is their final encounter.

The fate of the galaxy hangs in the balance.

The thrilling series from The New York Times bestselling author of Jedi Apprentice and Jedi Quest.`,
    releaseDate: "May 7, 2008",
  },
  {
    id: "coruscant-nights-iii-patterns-of-force",
    title: "Coruscant Nights III: Patterns of Force",
    author: "Michael Reaves",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81WC4hIuz+L._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/43de0wi",
    description: `After the Empire’s bloody purge of the Jedi, one lone Knight still fights for those who cannot, unaware that he’s about to be swept into a cataclysmic battle against the Master of Darkness himself.

Throughout the galaxy, a captured Jedi is a dead Jedi, even in Coruscant’s most foul subterranean slums, where Jedi Knight Jax Pavan champions the causes of the oppressed with the help of hard-nosed reporter Den Dhur and the wisecracking droid I-5YQ. But Jax is also involved in another struggle–to unlock the secrets of his father’s death and his own past.

While Jax believes that I-5YQ holds some of those answers, he never imagines that the truth could be shocking enough to catapult him to the frontlines of a plot to kill Emperor Palpatine. Worse yet, Darth Vader’s relentless search for Jax is about to end . . . in triumph.

The future looming over the valiant Jedi and his staunch pals promises to be dark and brief, because there’s no secret whatsoever about the harshest truth of all: Few indeed are those who tangle with Darth Vader . . . and live to tell the tale.`,
    releaseDate: "January 27, 2009",
  },
  {
    id: "the-last-jedi",
    title: "The Last Jedi",
    author: "Michael Reaves and Maya Kaathryn Bohnhoff",
    timelinePlacement: -17.0,
    timelineLabel: "18-17 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/I/819a20qIegL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/42DW79K",
    description: `KNIGHT OF RECKONING
 
The Emperor’s ruthless Order 66 has all but exterminated the Jedi. The few remaining who still wield the Force for good have been driven into exile or hiding. But not Jax Pavan, who’s been steadily striking blows against the Empire—as a lone guerrilla fighter and a valued partner of Whiplash, a secret Coruscant-based resistance group. Now he’s taking on his most critical mission: transporting a valued Whiplash leader, targeted for assassination, from Coruscant to safety on a distant world. It’s a risky move under any circumstances, but Jax and his trusted crew aboard the Far Ranger, including the irrepressible droid I-Five, are prepared to pit their combat skills and their vessel’s firepower against all Imperial threats—except the one Jax fears most. Reports have raced across the galaxy that the dark lord of the Sith has fallen in a duel to the death with a Rebel freedom fighter. But Jax discovers the chilling truth when he reaches out with the Force . . . only to touch the dark, unmistakable, and malignantly alive presence that is Darth Vader. And Jax knows that Vader will stop at nothing until the last Jedi has fallen.`,
    releaseDate: "February 26, 2013",
  },
  {
    id: "the-new-rebellion",
    title: "The New Rebellion",
    author: "Kristine Kathryn Rusch",
    timelinePlacement: 17.0,
    timelineLabel: "17 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51JYq1oHYbL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3PsJNpU",
    description: `Award-winning author Kristine Kathryn Rusch brings her remarkable talents to the Star Wars(r) universe, where the New Republic faces sudden and total annihilation....

Somewhere in the galaxy, millions suddenly perish--a disruption of the Force so shocking it is felt by Luke at his Jedi academy and by Leia on Coruscant.  While Leia must deal with an assassination attempt, a rumored plot against the New Republic, and allegations that Han Solo is involved, Luke seeks out a former Jedi student who may hold the key to the mass destruction.  But Brakiss is only the bait in a deadly trap set by a master of the dark side who is determined to rule as emperor.  He's targeted Luke, Leia, and Leia's Jedi children to die.  Then billions will follow, in a holocaust unequaled in galactic history.`,
    releaseDate: "November 7, 1996",
  },
  {
    id: "the-crystal-star",
    title: "The Crystal Star",
    author: "Vonda McIntyre",
    timelinePlacement: 14.0,
    timelineLabel: "14 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/8165fa9KpGL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4dtEDlC",
    description: `Hugo and Nebula award-winning author Vonda N. McIntyre continues the bestselling Star Wars saga as the ultimate space adventure unfolds in The Crystal Star.

Princess Leia's children have been kidnapped. Along with Chewbacca and Artoo-Detoo, she follows the kidnappers' trail to a disabled refugee ship, from which children are also missing. Here she learns of a powerful Imperial officer with a twisted plan to restore the Empire. Meanwhile, Han Solo and Luke Skywalker are cut off from Leia by the death of a nearby star, which has caused a disruption in the Force. They have gone to the planet Crseih to investigate a report of a lost group of Jedi. Instead they find a charismatic alien named Waru whose miraculous healing powers have attracted a fanatic following. As Leia follows the path of her children across space, Luke and Han draw closer to the truth behind Waru's sinister cult. Together they will face an explosive showdown that will decide the survival of the New Republic . . . and the universe itself!`,
    releaseDate: "December 8, 1994",
  },
  {
    id: "x-wing-starfighters-of-adumar",
    title: "Starfighters of Adumar",
    author: "Aaron Allston",
    timelinePlacement: 13.0,
    timelineLabel: "13 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328348745i/11937950.jpg",
    amazonLink: "https://amzn.to/3RcZQJ1",
    description: `The aces of Wraith Squadron return in another thrilling adventure!

The X-wing fighter pilots of Wraith Squadron have earned their reputation as the Rebel Alliance’s ultimate strike force by overwhelming enemies with their rapid-fire assaults. But now they are about to embark on a diplomatic mission that will prove to be even more hazardous than all-out combat. . . .

The neutral world of Adumar has decided to pick a side in the war to control the galaxy. Delegates from both the New Republic and the Empire have been invited to Adumar, and each camp will be given a chance to plead its government’s case. But there is one small catch: since the Adumari prize military skill above all else, they insist that both delegations be composed exclusively of fighter pilots.

For pilot Wedge Antilles and his company, it’s an unfamiliar exercise in diplomacy—and one that’s filled with unexpected peril. For once they arrive, the squad is challenged by Adumar’s fierce warriors and attacked by Imperial assassins bent on eliminating all competition. But these challenges pale in comparison to the threat posed by a rogue Republic agent . . . one who is determined to win Adumar’s allegiance once and for all—even if it costs the X-wing pilots their lives.`,
    releaseDate: "August 3, 1999",
  },
  {
    id: "darksaber",
    title: "Darksaber",
    author: "Kevin J. Anderson",
    timelinePlacement: 12.5,
    timelineLabel: "12.5 BBY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/A1h3QRduc0S._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4dLj5lv",
    description: `Luke Skywalker and Han Solo, cloaked by the Force and riding with the hostile Sand People, have returned to the dunes of the desert planet Tatooine in hopes of finding what Luke so desperately seeks: contact with Obi-Wan Kenobi.  Luke is hoping the old Jedi Knight's spirit will tell him how to help his  love, Callista, regain her lost ability to use the Force.  Tormented and haunted, Luke cannot rest until Callista is a Jedi in the fullest sense, for only then will the link between their minds and souls be restored. Yet brewing on Tatooine is news that will shake Luke and Han and  threaten everything they value.

The disturbing piece of information is that the evil Hutts, criminal warlords of the galaxy, are building a secret superweapon: a reconstruction of the original Death Star, to be named Darksaber. This planet-crushing power will be in the ruthless hands of Durga the Hutt -- a creature without conscience or mercy.

But there is worse news yet: the Empire lives. The beautiful Admiral Daala, still very much alive and more driven than ever to destroy the Jedi, has joined forces with the defeated Pellaeon, former second in command to Grand Admiral Thrawn. Together they are marshaling Imperial forces to wipe out the New Republic.

Now, as Luke, Han, Leia, Chewbacca, Artoo and Threepio regroup to face these threats, they are joined by new Jedi Knights and Callista. Together they must
fight on two fronts, outshooting and outsmarting the most formidable enemies in the galaxy. In Darksaber the Jedi are heading for the ultimate test of their power--a test in which all the temptations of the dark side beckon.  And Luke Skywalker must draw upon his innermost resources to fight for a world in which he can not only live, but dare to love.`,
    releaseDate: "October 1, 1995",
  },
  {
    id: "children-of-the-jedi",
    title: "Children of the Jedi",
    author: "Barbara Hambly",
    timelinePlacement: 12.0,
    timelineLabel: "12 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91UBwnYl6OL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3P6Rnqd",
    description: `Princess Leia, Han Solo, and Chewbacca set out on a mission vital to the survival of the fragile New Republic. They are searching for the long-lost children of the Jedi, a quest that takes them to the once vibrant stronghold of Belsavis - a nearly forgotten frozen world. Leia has heard tales of a Jedi exodus from the dark crypts below the planet's surface. She has also heard that since the time of the exodus no one entering the crypts has returned alive.

Halfway across the galaxy, Luke Skywalker has undertaken an equally dangerous expedition that, if it fails, could have fatal consequences for Leia, Han, and Chewbacca. Haunted by ominous dreams and guided by a force he cannot identify, Luke journeys to a remote asteroid field over the planet Pzob. There he discovers the automated dreadnought Eye of Palpatine - from the days of all-out war.

Camouflaged deep within a nebulous gas cloud and dormant for thirty years, Eye of Palpatine is governed by a super-sophisticated artificial intelligence system known as The Will. Taken aboard the dreadnought, Luke is counselled by the spirit of Callista, a Jedi Knight who gave her life to stop the ship once before. Now Luke must learn from her how to destroy it once and for all. The Will has awakened. The Eye of Palpatine is on the move. Its mission: the total annihilation of Belsavis.`,
    releaseDate: "May 1, 1995",
  },
  {
    id: "i-jedi",
    title: "I, Jedi",
    author: "Michael Stackpole",
    timelinePlacement: 11.1,
    timelineLabel: "11 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51ZxmyyuOWL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/495qhGJ",
    description: `The dramatic story of an X-wing pilot on the razor’s edge between the hero he once was and the power he could have—if he’s willing to embrace the Dark Side

Corran Horn was an officer in the Corellian Security Force before casting his lot with the New Republic. As the grandson of a legendary Jedi hero, he has latent Force powers that have yet to be developed. But he has managed to distinguish himself with Rogue Squadron, the X-wing fighter force that has become the scourge of the Empire and of the pirates that prey on Republic shipping.

When his wife, Mirax, vanishes on a covert mission for the New Republic, Corran vows to find her. He begins Jedi training at Luke Skywalker’s Jedi academy, hoping to develop his untapped powers. But as Corran grows dissatisfied with the Jedi master’s methods, he chooses to break with the academy before his training is finished.

Now Corran is on his own. Using his undercover experience, he must infiltrate, sabotage, and destroy a ruthless organization in order to find his wife. But to succeed, Corran will have to come to terms with his Jedi heritage—and make a terrible choice: surrender to the Dark Side . . . or die.`,
    releaseDate: "May 4, 1998",
  },
  {
    id: "luke-skywalker-and-the-shadows-of-mindor",
    title: "Luke Skywalker and the Shadows of Mindor",
    author: "Matthew Stover",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1696930883i/123734931.jpg",
    amazonLink: "https://amzn.to/4dorObZ",
    description: `Emperor Palpatine and Darth Vader are dead. The Empire has been toppled by the triumphant Rebel Alliance, and the New Republic is ascendant. But the struggle against the dark side and the Sith Order is not over. Luke Skywalker, Princess Leia, Han Solo, Lando Calrissian, and their faithful comrades have had little time to savor victory before being called on to defend the newly liberated galaxy.

Powerful remnants of the vanquished Empire, hungry for retaliation, are still at large, committing acts of piracy, terrorism, and wholesale slaughter against the worlds of the fledgling New Republic. The most deadly of these, a ruthless legion of black-armored Stormtroopers, do the brutal bidding of the newly risen warlord Shadowspawn. Striking from a strategically advantageous base on the planet Mindor, they are waging a campaign of plunder and destruction, demolishing order and security across the galaxy–and breeding fears of an Imperial resurgence. Another reign of darkness beneath the boot-heel of Sith despotism is something General Luke Skywalker cannot, and will not, risk.

Mobilizing the ace fighters of Rogue Squadron–along with the trusty Chewbacca, See-Threepio, and Artoo-Detoo–Luke, Han, and Leia set out to take the battle to the enemy and neutralize the threat before it’s too late. But their imminent attack on Mindor will be playing directly into the hands of their cunning new adversary. Lord Shadowspawn is no freshly anointed Sith Chieftain but in fact a vicious former Imperial Intelligence officer–and Prophet of the Dark Side. The Emperor’s death has paved the way for Shadowspawn’s return from exile in the Outer Rim, and mastery of ancient Sith knowledge and modern technology has given him the capability to mount the ultimate power play for galaxy wide dominion. Dark prophecy has foretold that only one obstacle stands in his way, and he is ready–even eager–for the confrontation.

All the classic heroes, all the explosive action and adventure, all the unparalleled excitement of Star Wars come breathlessly alive as the adventures of Luke Skywalker continue.`,
    releaseDate: "December 30, 2008",
  },
  {
    id: "the-glove-of-darth-vader",
    title: "The Glove of Darth Vader",
    author: "Paul Davids & Hollace Davids",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gloveofvader.jpg"),
    amazonLink: "https://amzn.to/4upsSTF",
    description: `The Death Star has been destroyed.

The Empire is in ruins.

But the Dark Side lives on.

Luke Skywalker, Princess Leia, Han Solo, and the Rebel Alliance have fought valiantly against the evil Galactic Empire. Together they have kept alive the hopes for freedom, and helped restore the ways of the Old Republic with its wise Senate and noble line of Jedi Knights. But now a new threat awaits the Alliance.

Within the evil Empire, the surviving Imperial warlords have been fighting among themselves for power. No one knows who will seize control, but the Prophets of the Dark Side have foretold that soon a new Emperor will arise, and on his right hand he shall wear an indestructible symbol of evil…`,
    releaseDate: "June 1, 1992",
  },
  {
    id: "the-lost-city-of-the-jedi",
    title: "The Lost City of the Jedi",
    author: "Paul Davids & Hollace Davids",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("lostcityjedi.jpg"),
    amazonLink: "https://amzn.to/43S2abj",
    description: `Trioculus has assumed power.

The Empire has been reborn.

And a young Jedi is about to be discovered.

The battle to defeat the forces of the evil Galactic Empire rages on. Throughout the vastness of space, heroic men, women, and aliens of the Rebel Alliance fight valiantly to keep alive the hopes for freedom and to restore the ways of the Old Republic with its wise Senate and noble line of Jedi Knights. But now a sinister plot is about to befall the Alliance.

Having secured the glove of Darth Vader, Trioculus receives a warning that a Jedi Prince will be a threat to his reign and must be destroyed. Underground, beneath the rain forests of the fourth moon of Yavin, the young Jedi is growing up hidden within…`,
    releaseDate: "June 1, 1992",
  },
  {
    id: "zorba-the-hutts-revenge",
    title: "Zorba the Hutt's Revenge",
    author: "Paul Davids & Hollace Davids",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("zorbathehutt.jpg"),
    amazonLink: "https://amzn.to/43Qi5XB",
    description: `Han Solo is thinking of getting married.

Trioculus has found his queen.

But the father of Jabba the Hutt is about to shatter their plans.

The battle to defeat the forces of the evil Galactic Empire rages on. Throughout the vastness of space, heroic men, women, and aliens of the Rebel Alliance fight valiantly to keep alive the hopes for freedom and to restore the ways of the Old Republic with its wise Senate and noble line of Jedi Knights. But a feud between two powerful villains may prove disastrous for the Alliance.

Trioculus is determined to steal away Princess Leia from Han Solo and make her his dark queen. But when Jabba the Hutt's father, Zorba, returns to Tatooine and learns that his son died by Leia's hand, Zorba takes off to Cloud City and prepares for…`,
    releaseDate: "July 1, 1992",
  },
  {
    id: "mission-from-mount-yoda",
    title: "Mission from Mount Yoda",
    author: "Paul Davids & Hollace Davids",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("mountyoda.jpg"),
    amazonLink: "https://amzn.to/3Qskyo2",
    description: `'A DYING PLANET.'

A DESPERATE MISSION.

'AND A PROPHECY OF DOOM FOR THE REBEL ALLIANCE.'

The battle against the evil Empire rages on as heroic men, women, and aliens of the Rebel Alliance continue their struggle to end the era of darkness. But now a mysterious visitor comes to the Rebel fortress located atop Mount Yoda, bringing ominous news.

Kadann, Supreme Prophet of the Dark Side, plots to capture and destroy the carbonized body of Trioculus and take control of the Empire. Meanwhile, the Rebel Alliance races to save the archaeologists of the dying planet Duro, only to discover an incredible mystery in the underground tunnels, a secret that depends on a perilous… Mission from Mount Yoda.`,
    releaseDate: "January 1, 1993",
  },
  {
    id: "queen-of-the-empire",
    title: "Queen of the Empire",
    author: "Paul Davids & Hollace Davids",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("queenempire.jpg"),
    amazonLink: "https://amzn.to/3QskzIC",
    description: `A DANGEROUS EXPERIMENT.

A SHOCKING MARRIAGE.

AND THE REAPPEARANCE OF AN OLD ENEMY.

The battle against the evil Empire rages on as heroic men, women, and aliens of the Rebel Alliance continue their struggle to end the era of darkness. But the ultimate defeat of the Imperial forces could come from within the Empire itself.

The Imperial grand moffs are in revolt against the Prophets of the Dark Side. As the Alliance struggles with its latest weapon, Project Decoy, Princess Leia is kidnapped by an old enemy, then menaced by the surprise of another evil foe – one obsessed with turning Leia to the Dark Side and making her the… Queen of the Empire.`,
    releaseDate: "March 1, 1993",
  },
  {
    id: "prophets-of-the-dark-side",
    title: "Prophets of the Dark Side",
    author: "Paul Davids & Hollace Davids",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("prophetsdark.jpg"),
    amazonLink: "https://amzn.to/43OFoRE",
    description: `'A JEDI PRINCE.'

A DEVASTATING BETRAYAL.

AND THE DESTRUCTION OF THE LOST CITY?

The battle against the evil Empire rages on as heroic men, women, and aliens of the Rebel Alliance continue their struggle to end the era of darkness. But by rescuing an Imperial prisoner, have the Rebels brought disaster upon themselves?

While on a perilous quest in the mushroom forest of Arzid, Luke and Ken are captured by Kadann, Supreme Imperial Prophet. Having tempted the young Jedi Prince into revealing the location of the Lost City of the Jedi, the Supreme Prophet plans to steal the ancient knowledge of the Jedi Knights. Now Kadann will rule over a new tyrannical empire, as foretold by the… Prophets of the Dark Side.`,
    releaseDate: "April 1, 1993",
  },
  {
    id: "tales-from-jabba-s-palace",
    title: "Tales from Jabba's Palace",
    author: "various authors",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Adult", "Anthology", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/61hwk-JWK+L._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4degCjp",
    description:
      "In the dusty heat of twin-sunned Tatooine lives the wealthiest gangster in a hundred worlds, master of a vast crime empire and keeper of a vicious, flesh-eating monster for entertainment (and disposal of his enemies). Bloated and sinister, Jabba the Hutt might have made a good joke -- if he weren't so dangerous. A cast of soldiers, spies, assassins, scoundrels, bounty hunters, and pleasure seekers have come to his palace, and every visitor to Jabba's grand abode has a story. Some of them may even live to tell it. . . .",
    releaseDate: "December 1, 1995",
  },
  {
    id: "star-wars-return-of-the-jedi",
    title: "Star Wars: Return of the Jedi",
    author: "James Kahn",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Adaptations", "Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81cY-e6u0OL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4uPGW9B",
    description: `It was a dark time for the Rebel Alliance...

Han Solo, frozen in carbonite, has been delivered into the hands of the vile gangster Jabba the Hutt. Determined to rescue him, Luke Skywalker, Princess Leia and Lando Calrissian launch a hazardous mission against Jabba's Tatooine stronghold.

Now, in the most exciting chapter of the STAR WARS saga, the Rebel commanders have gathered all the warships of the Rebel fleet into a single giant armada. And Darth Vader, who has ordered construction to begin on a new and even more powerful Death Star, makes his plans to crush the Rebel Alliance once and for all.`,
    releaseDate: "June 6, 1983",
  },
  {
    id: "star-wars-episode-vi-return-of-the-jedi",
    title: "Star Wars Episode VI: Return of the Jedi",
    author: "Ryder Windham",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("rotjjn.jpg"),
    amazonLink: "https://amzn.to/4g56lI0",
    description: `A long time ago in a galaxy far, far away....

A rebellion makes its most desperate move. A galaxy hangs in the balance. A new Jedi rises. A circle is completed. The journey ends.`,
    releaseDate: "October 1, 2004",
  },
  {
    id: "journal-hero-for-hire",
    title: "Journal: Hero for Hire",
    author: "Donna Tauscher",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("heroforhire.jpg"),
    amazonLink: "https://amzn.to/4esh664",
    description: `In this book, Han Solo records his trials and adventures in Jabba the Hutt's dungeon.`,
    releaseDate: "July 1, 1998",
  },
  {
    id: "the-rise-and-fall-of-darth-vader",
    title: "The Rise and Fall of Darth Vader",
    author: "Ryder Windham",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("riseandfall.jpg"),
    amazonLink: "https://amzn.to/3RW3oQ8",
    description: `This is the legendary story of Anakin Skywalker as it's never been told before - through his eyes…

From rise to fall, from light to dark, and back again.

Born a slave.

Raised a Jedi.

Feared by a Galaxy.`,
    releaseDate: "October 1, 2007",
  },
  {
    id: "tales-of-the-bounty-hunters",
    title: "Tales of the Bounty Hunters",
    author: "various authors",
    timelinePlacement: 3.1,
    timelineLabel: "3 ABY",
    bookType: ["Adult", "Anthology", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91SZx9+1Y6L._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4ddgtNc",
    description:
      "In a wild and battle-scarred galaxy, assassins, pirates, smugglers, and cutthroats of every description roam at will, fearing only the professional bounty hunters-amoral adventurers who track down the scum  of the universe...for a fee. When Darth Vader seeks to strike at the heart of the Rebellion by targeting Han Solo and the Millennium Falcon, he calls upon six of  the most successful-and feared-hunters, including the merciless Boba Fett. They all have two things in common: lust for profit and contempt for life... Featuring original stories by Kevin J. Anderson, M. Shayne Bell, Daniel Keys Moran, Kathy Tyers and Dave Wolverton.",
    releaseDate: "November 1, 1996",
  },
  {
    id: "galaxies-the-ruins-of-dantooine",
    title: "Galaxies: The Ruins of Dantooine",
    author: "Voronica Whitney-Robinson w/ Haden Blackman",
    timelinePlacement: 1.5,
    timelineLabel: "1.5 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320517326i/571016.jpg",
    amazonLink: "https://amzn.to/4ntWEVi",
    description: `STAR WARS GALAXIES:
AN EMPIRE DIVIDED!

It is a time of great turmoil. The oppressive Empire is close to seizing complete control of the galaxy. The ragtag guerrilla army of the Rebel Alliance fights on, striking wherever it can, but now something has come to light that could spell certain doom. Hidden in the Jedi ruins of Dantooine is a Holocron containing a list of high-level Rebel sympathizers. If that list were to fall into the hands of Darth Vader, the Rebel Alliance would lose its most valued support—and possibly the war itself.

As an Imperial bio-engineer who frequently visits other worlds, Dusque Mistflier is the perfect cover for a Rebel who needs to travel far and wide without arousing suspicion. And so she agrees to help Rebel spy Finn Darktrin in his quest to recover the crucial Holocron. Despite help from Han, Luke, and Leia, the mission is fraught with peril. And as their journey takes them into the fiery belly of the beast that is galactic civil war, Dusque and Finn will learn that the hardest part of all is figuring out whose side you’re on—and how far you’re willing to go to win. . . .`,
    releaseDate: "December 30, 2003",
  },
  {
    id: "death-troopers",
    title: "Death Troopers",
    author: "Joe Schreiber",
    timelinePlacement: -0.9,
    timelineLabel: "1 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320537605i/6310782.jpg",
    amazonLink: "https://amzn.to/4tFNruD",
    description: `The chilling tale of the undead in a galaxy far, far away.

“This is the Star Wars of every horror fan’s dreams—gory, funny, and brimming with a blood-spattered cast of swashbucklers and space-zombies.”—Seth Grahame-Smith, author of Pride and Prejudice and Zombies

When the Imperial prison barge Purge—temporary home to five hundred of the galaxy’s most ruthless killers, Rebels, scoundrels, and thieves—breaks down in a distant part of space, its only hope appears to lie with a Star Destroyer found drifting and seemingly abandoned. But when a boarding party from the Purge is sent to scavenge for parts, only half of them come back—bringing with them a horrific disease so lethal that within hours, nearly all aboard the Purge die in ways too hideous to imagine.

And death is only the beginning.

The Purge’s half-dozen survivors will do whatever it takes to stay alive. But nothing can prepare them for what lies waiting aboard the Star Destroyer. For the dead are rising: soulless, unstoppable, and unspeakably hungry.`,
    releaseDate: "October 13, 2009",
  },
  {
    id: "shadow-games",
    title: "Shadow Games",
    author: "Michael Reaves and Maya Kaathryn Bohnhoff",
    timelinePlacement: 0,
    timelineLabel: "0 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328342867i/11576910.jpg",
    amazonLink: "https://amzn.to/4uT6PFv",
    description: `SOME GAMES ARE PLAYED FOR LIFE OR DEATH.
 
Javul Charn is the most famous pop star in the galaxy—and the runaway bride of a violent lieutenant in Black Sun, the crime syndicate commanded by Prince Xizor. Or so Javul says. Soon after Dash Rendar, broke and desperate, agrees to be Javul’s bodyguard, he realizes that openness is not her strong suit—and that murder is stalking her tour. Between the discovery of dead bodies in a cargo hold and an attack by an unidentified warship, Dash and co-pilot Eaden Vrill desperately try to understand who is terrorizing Javul’s tour and why. When Han Solo suddenly joins Javul’s road show, the stakes are raised even higher. Now Dash, who has a history with Han and an even worse history with Prince Xizor, follows his instincts, his discoveries, and Javul herself—straight into a world that may be too dangerous to survive.`,
    releaseDate: "November 29, 2011",
  },
  {
    id: "star-wars-a-new-hope",
    title: "Star Wars: A New Hope",
    author: "George Lucas",
    timelinePlacement: 0,
    timelineLabel: "0 ABY",
    bookType: ["Adaptations", "Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81CIXJxQ3TL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4d8e06I",
    description: `The classic adventure that started the Star Wars saga.

Luke Skywalker lived and worked on his uncle's farm on the remote planet of Tatooine—and he was bored beyond belief. He yearned for adventures out among the stars, adventures that would take him beyond the farthest galaxies to distant and alien worlds.

But Luke gets more than he bargained for when he intercepts a cryptic message from a beautiful princess held captive by a dark and powerful warlord. Luke doesn't know who she is, but he knows he has to save her—and soon, because time is running out.

Armed only with courage and with the lightsaber that had been his father's, Luke is catapulted into the middle of the most savage space war ever—and headed straight for a desperate encounter on the enemy battle station known as the Death Star. . . .`,
    releaseDate: "December 5, 1976",
  },
  {
    id: "tales-from-the-mos-eisley-cantina",
    title: "Tales from the Mos Eisley Cantina",
    author: "Various Authors",
    timelinePlacement: 0,
    timelineLabel: "0 ABY",
    bookType: ["Adult", "Anthology", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1389144602i/1386416.jpg",
    amazonLink: "https://amzn.to/4fn5CBE",
    description: `Sixteen stories from the most infamous cantina in the universe...by some of today's leading writers of science fiction.

In a far corner of the universe, on the small desert planet of Tatooine, there is a dark, nic-i-tain-filled cantina where you can down your favorite intoxicant while listening to the best jazz riffs in the universe.  But beware your fellow denizens of this pangalactic watering hole, for they are cutthroats and cutpurses, assassins and troopers, humans and aliens, gangsters and thieves....`,
    releaseDate: "July 1, 1995",
  },
  {
    id: "star-wars-episode-iv-a-new-hope",
    title: "Star Wars Episode IV: A New Hope",
    author: "Ryder Windham",
    timelinePlacement: 0.0,
    timelineLabel: "0 BBY",
    bookType: ["Legends", "Middle Grade", "Adaptations"],
    coverUrl: getLegendsCover("newhope.jpg"),
    amazonLink: "https://amzn.to/4vvnfUJ",
    description: `A long time ago in a galaxy far, far away....

A young Jedi is discovered. A rebellion grows. A deadly weapon unleashes its power. A master confronts his old apprentice. The journey begins a new chapter.`,
    releaseDate: "October 1, 2004",
  },
  {
    id: "journal-the-fight-for-justice",
    title: "Journal: The Fight for Justice",
    author: "John Peel",
    timelinePlacement: 0.0,
    timelineLabel: "0 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("fightforjustice.jpg"),
    amazonLink: "https://amzn.to/4akrIl1",
    description: `SKYWALKER DATA PAD ENTRY

LOCATION: TATOOINE

In just half a day, my whole world has changed. The farm, my aunt and uncle.... They're gone. Destroyed by the Empire. All my life I've been waiting for something to happen to me. Something important. And now that it has, I'm not sure I know how to handle it.`,
    releaseDate: "July 1, 1998",
  },
  {
    id: "journal-captive-to-evil",
    title: "Journal: Captive to Evil",
    author: "Jude Watson",
    timelinePlacement: 0.0,
    timelineLabel: "0 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("captivetoevil.jpg"),
    amazonLink: "https://amzn.to/4uU00nr",
    description: `Princess Leia makes regular entries in her data pad, a palm-sized computer hidden in her belt. In each entry she recalls all details of her intergalactic capture and rescue—and how she really feels about Han Solo and Luke.

PRINCESS LEIA DATA PAD

LOCATION: PRISONER'S DOCK,

DEATH STAR

"I don't know how I can escape this station of death. Or how I can continue to fight against the torture and the pain. But I vow that I will. And then the real battle will begin. Not for vengeance—for justice."`,
    releaseDate: "July 1, 1998",
  },
  {
    id: "scoundrels",
    title: "Scoundrels",
    author: "Timothy Zahn",
    timelinePlacement: 0,
    timelineLabel: "0 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/913Ick89mZL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/42CiCvW",
    description: `To make his biggest score, Han's ready to take even bigger risks. But even he can't do this job solo.

Han Solo should be basking in his moment of glory. After all, the cocky smuggler and captain of the Millennium Falcon just played a key role in the daring raid that destroyed the Death Star and landed the first serious blow to the Empire in its war against the Rebel Alliance. But after losing the reward his heroics earned him, Han’s got nothing to celebrate. Especially since he’s deep in debt to the ruthless crime lord Jabba the Hutt. There's a bounty on Han's head—and if he can’t cough up the credits, he’ll surely pay with his hide. The only thing that can save him is a king's ransom. Or maybe a gangster’s fortune?

That's what a mysterious stranger is offering in exchange for Han’s less-than-legal help with a riskier-than-usual caper. The payoff will be more than enough for Han to settle up with Jabba—and ensure he never has to haggle with the Hutts again.

All he has to do is infiltrate the ultra-fortified stronghold of a Black Sun crime syndicate underboss and crack the galaxy’s most notoriously impregnable safe. It sounds like a job for miracle workers . . . or madmen. So Han assembles a gallery of rogues who are a little of both—including his indispensable sidekick Chewbacca and the cunning Lando Calrissian. If anyone can dodge, deceive, and defeat heavily armed thugs, killer droids, and Imperial agents alike—and pull off the heist of the century—it’s Solo’s scoundrels. But will their crime really pay, or will it cost them the ultimate price?`,
    releaseDate: "January 1, 2013",
  },
  {
    id: "rebel-force-target",
    title: "Rebel Force: Target",
    author: "Alex Wheeler",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("target.jpg"),
    amazonLink: "https://amzn.to/43k1sU8",
    description: `The Death Star has been destroyed. But back at the Rebel base, the celebration is over. The Alliance has intercepted a coded transmission, indicating that the Empire is determined to discover which pilot was responsible for the destruction of the Death Star. New security protocol is in effect: The details of the Death Star mission are now top secret, and no one is to know that Luke fired the decisive shot.

But that's hardly the Alliance's only problem. Almost all their finances were lost with the destruction of Alderaan – and they are out of money. Their last hope is to access the secret accounts on Muunilinst, the former home of the InterGalactic Banking Clan, and the financial heart of the galaxy. So Luke, Leia, Han, Chewbacca, and the droids head for Muunilinst.

The Empire's top assassin will be waiting for them.`,
    releaseDate: "December 2, 2008",
  },
  {
    id: "rebel-force-hostage",
    title: "Rebel Force: Hostage",
    author: "Alex Wheeler",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("hostage.jpg"),
    amazonLink: "https://amzn.to/4v0d4I0",
    description: `The deadly assassin contracted by the Empire, X-7, is closer than ever to discovering the identity of his target. He's already infiltrated the top levels of the Rebel Alliance and gained Leia's trust. But he still hasn't been able to get Leia to give up the classified information he needs.

After all, Leia Organa is unbreakable: the youngest, toughest member of the Galactic Senate, and after its dissolution, the fiercest opponent of the Empire. She's survived kidnapping and torture under Darth Vader, but she's never had to do anything more difficult than her latest mission. She is going home.

And X-7 knows it will be the perfect opportunity to destroy her.`,
    releaseDate: "January 1, 2009",
  },
  {
    id: "rebel-force-renegade",
    title: "Rebel Force: Renegade",
    author: "Alex Wheeler",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("renegade.jpg"),
    amazonLink: "https://amzn.to/4eolNxL",
    description: `Deadly assassin X-7 has infiltrated the Rebel Alliance. Trained by ruthless Commander Rezi Soresh, X-7 is the best there is: He feels nothing and sees everything. Now, he's gunning for the ultimate prize: Luke Skywalker, the pilot that destroyed the Death Star.

The seemingly clueless kid from Tatooine proves more resourceful and difficult to eliminate than X-7 could ever have imagined. Surrounded by friends and allies, and with a connection to the Force that grows stronger every day, Luke seems all but impervious to the usual tactics.

But X-7 isn't done with him yet. This time, he knows how to bring Luke down. He'll shatter the trust that holds the Rebel Alliance together—and manufacture the ultimate betrayal.`,
    releaseDate: "May 1, 2009",
  },
  {
    id: "rebel-force-firefight",
    title: "Rebel Force: Firefight",
    author: "Alex Wheeler",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("firefight.jpg"),
    amazonLink: "https://amzn.to/3PZwmhx",
    description: `Deadly assassin X-7 has never failed to complete a mission--until now.

Unmasked and unarmed, he narrowly escapes from the Rebels with his life and little else. His cover may be blown, but he's not returning to Commander Rezi Soresh until his target has been eliminated. This time, he has a new plan. He'll gather six of the best pilots in the galaxy–all of them roguish mercenaries who care only about money–and turn them loose on Red Squadron.

He counts on his pilot's mercenary instincts to keep them in line. But one of them has a secret that could cost X-7 his victory.`,
    releaseDate: "September 1, 2009",
  },
  {
    id: "rebel-force-trapped",
    title: "Rebel Force: Trapped",
    author: "Alex Wheeler",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("trapped.jpg"),
    amazonLink: "https://amzn.to/4uPwOxP",
    description: `When valuable prisoner Lune Divinian disappears from his cell on Yavin 4, Luke is determined to find him. As the only link to X-7, the assassin sent to kill Luke, Div is the only hope to staying a step ahead of the Empire.

Across the galaxy, X-7 has escaped from Imperial custody. Caught between the past and the present, X-7 must fight the only battle for which he's not prepared: the battle with his identity. But his desperate confusion makes him more dangerous than ever.

A chance encounter and a figure from the past bring X-7, Luke, and Div together for a final showdown that will reveal everything—or destroy them all.`,
    releaseDate: "January 1, 2010",
  },
  {
    id: "allegiance",
    title: "Allegiance",
    author: "Timothy Zahn",
    timelinePlacement: 0,
    timelineLabel: "0 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1168588167i/35414.jpg",
    amazonLink: "https://amzn.to/4uf65KX",
    description: `Never before has the incendiary mix of action, politics, and intrigue that has become Timothy Zahn’s trademark, been mmore evident that in this new Star Wars epic. On the heels of the stunning events chronicled in Star Wars: A New Hope, the newly minted heroes of the Rebellion–fledgling Jedi Luke Skywalker, smuggler turned reluctant freedom-fighter Han Solo, and Princess Leia Organa, a bold leader with a world to avenge–must face the harsh realities of the cataclysmic conflict into which they have so bravely plunged. From this point forward, legends will grow, treachery will abound, and lives will be irrevocably altered, in the long, hard fight to counter the fist of tyranny and restore hope to a galaxy too long in darkness.

The destruction of the Death Star by the Rebel Alliance was a decisive blow against the Empire, but Palpatine and his monstrous enforcer, Darth Vader, are no less of a threat. The brutal extermination of Alderaan not only demonstrated the magnitude of their murderous power, but served as a chilling testament to their resolve to crush the Rebel uprising. Standing against them, Skywalker, Solo, and the Princess remain uncertain opponents. Luke is gifted and brave, but unschooled in the power he possesses. Han has doubts about waging someone else’s war–and his contentiousness is one more burden for Leia to bear as she struggles to help keep the Rebellion alive. The three have been sent to mediate a dispute between Rebel Alliance factions in Shelsha Sector–agitating matters by forcing Han to deal not only with pirates, but with his more dreaded enemy, politics. At the same time, Mara Jade–all of eighteen and years away from her fateful meeting with Luke–is serving her evil master, Palpatine, well in her role as the Emperor’s Hand: tracking suspected treachery in the Empire to what may be high places–while trying to stay out of Darth Vader’s way.

But the Rebels will prove to be only one of the Empire’s concerns. For Imperial Stormtrooper Daric LaRone, his faith in the Empire shaken by the wanton destruction of Alderaan, will commit a sudden and violent act of defiance, and take four other enforcers with him, in a desperate bid to elude their masters’ wrath.

Each of these fateful actions, whether sanctioned, secret, or scandalous, will expose brutality and corruption, spur upheavals destined to shake the Empire to its core, and shape momentous events yet to come.`,
    releaseDate: "January 30, 2007",
  },
  {
    id: "rebel-force-uprising",
    title: "Rebel Force: Uprising",
    author: "Alex Wheeler",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("uprising.jpg"),
    amazonLink: "https://amzn.to/4xt25IS",
    description: `It was supposed to be a simple mission to the palace of Nyemari. Quick, covert, easy.

But before the Rebels can get off the planet, Luke receives a mysterious—and deadly—message from former Imperial Commander Rezi Soresh. Though Soresh's assassin, X-7, didn't manage to kill Luke, Soresh hasn't given up on vengeance.

Luke must surrender himself, or Soresh is prepared to kill a ship full of innocent travelers. Luke has no choice. To save the hostages, he must follow Soresh's directions.

Even if they lead straight into a trap.`,
    releaseDate: "May 1, 2010",
  },
  {
    id: "star-wars-science-adventures-emergency-in-escape-pod-four",
    title: "Star Wars Science Adventures: Emergency in Escape Pod Four",
    author: "Jude Watson & K.D. Burkett",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("escapepodfour.jpg"),
    amazonLink: "https://amzn.to/4dIpOgj",
    description: `ONLY SCIENCE CAN SAVE THEM!

Artoo-Detoo, See-Threepio, and the scientific droid Forbee-X are on a crash course toward adventure. Along with a Rebel kid named Stuart Zissu, the three droids are trapped in Escape Pod Four—with no easy way out. Asteroids stand in their way. The pod is out of control. Artoo, Threepio, Forbee, and Stuart must fly hard and think fast…or else!`,
    releaseDate: "February 1, 1999",
  },
  {
    id: "star-wars-science-adventures-journey-across-planet-x",
    title: "Star Wars Science Adventures: Journey Across Planet X",
    author: "Jude Watson & K.D. Burkett",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("planetx.jpg"),
    amazonLink: "https://amzn.to/4o2UUT9",
    description: `ONLY SCIENCE CAN SAVE THEM!

Trapped on a mysterious planet, Artoo-Detoo, See-Threepio, Forbee-X, and a young Rebel named Stuart Zissu must summon all their courage — and knowledge — in order to survive. Strange creatures, weird weather, and killer twisters stand in their way. There's only one chance at rescue. Will the Rebels make it in time?`,
    releaseDate: "February 1, 1999",
  },
  {
    id: "galaxy-of-fear-eaten-alive",
    title: "Galaxy of Fear: Eaten Alive",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofea.jpg"),
    amazonLink: "https://amzn.to/4odl9Xi",
    description: `Vanished?

D'vouran seems like a normal enough planet. The friendly locals welcome Tash, Zak, and their uncle Hoole with open arms.

But Tash has a bad feeling about this place.

There's a madman running around the streets shouting that people are disappearing. He's saying they've just vanished into thin air.

Tash knows that's impossible. But something is really wrong on D'vouran. Will she find the courage to trust her gut instincts…before it's too late?`,
    releaseDate: "January 1, 1997",
  },
  {
    id: "galaxy-of-fear-city-of-the-dead",
    title: "Galaxy of Fear: City of the Dead",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofcotd.jpg"),
    amazonLink: "https://amzn.to/4uv8L6E",
    description: `Welcome to the city of the dead…

When Hoole, Tash, and Zak stop on Necropolis to look for a new starship, Zak immediately makes friends with the local kids. And he's willing to pull a crazy stunt—like going into the Necropolitan cemetery at midnight—just to prove he's as tough as they are.

The cemetery is silent as death and full of white, wriggling boneworms. And maybe Zak should have thought twice before accepting this dare. Just because the bodies are buried doesn't mean they're dead.`,
    releaseDate: "January 1, 1997",
  },
  {
    id: "galaxy-of-fear-planet-plague",
    title: "Galaxy of Fear: Planet Plague",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofpp.jpg"),
    amazonLink: "https://amzn.to/4dVm4bi",
    description: `When Hoole decides to visit the planet Gobindi, even a warning from Tash's anonymous HoloNet contact isn't enough to change his mind. He's determined to study the planet's ancient ruins. For Tash, it's a chance to discover what her mysterious uncle is really up to.

On Gobindi, Tash thinks she's discovered an Imperial plot to spread a terrible virus across the galaxy. But when Hoole assures her that nothing is wrong, Tash is relieved.

For a little while.

When a big brown bump appears on her arm, Tash is scared. Has Hoole lied to her? Is he working with the Empire? Tash knows she must discover the truth.

Meanwhile, the bump on her arm is getting bigger….`,
    releaseDate: "April 1, 1997",
  },
  {
    id: "galaxy-of-fear-the-nightmare-machine",
    title: "Galaxy of Fear: The Nightmare Machine",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("goftnm.jpg"),
    amazonLink: "https://amzn.to/4x9ukw1",
    description: `Hologram Fun World. It's a theme park visited by families from all across the galaxy. It's a place where Tash and Zak can safely hang out while Hoole continues his work.

It's a place where daytime fun turns into nighttime terror.

One of the park's attractions is called the Nightmare Machine. It scans your brain, then shows you your worst fears in holographic form. Hairy, creepy-crawly insects. Cyborrean battle dogs thirsting for blood.

But it's not real, so it's fun—right?

Wrong.

As Zak and Tash will soon find out, nightmares can come true.`,
    releaseDate: "May 12, 1997",
  },
  {
    id: "galaxy-of-fear-ghost-of-the-jedi",
    title: "Galaxy of Fear: Ghost of the Jedi",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofgotj.jpg"),
    amazonLink: "https://amzn.to/4o9Pztg",
    description: `Tash, Zak, and their uncle Hoole are on the run from evil Imperial scientist Borborygmus Gog. The only place to hide is on Nespis 8, an abandoned space station.

There used to be a giant Jedi library on Nespis 8. According to Deevee, the library is still there, but it's cursed…and haunted by the ghost of a Jedi.

If they can find the library, maybe Tash and Zak can find a way to stop Gog.

But something evil dwells on Nespis 8.

And it's much scarier than a Jedi ghost.`,
    releaseDate: "July 7, 1997",
  },
  {
    id: "galaxy-of-fear-army-of-terror",
    title: "Galaxy of Fear: Army of Terror",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofaot.jpg"),
    amazonLink: "https://amzn.to/4g50ToA",
    description: `Tash, Zak, and their uncle Hoole want to make sure that Borborygmus Gog's Project Starscream has been destroyed. So they journey to Kiva, a planet on the galaxy's Outer Rim.

Kiva is dark, rocky, and barren.

Except for some strange shadows, the planet is completely lifeless.

And when they find Gog's laboratory, it's empty. Or so they think….`,
    releaseDate: "September 8, 1997",
  },
  {
    id: "galaxy-of-fear-the-brain-spiders",
    title: "Galaxy of Fear: The Brain Spiders",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("goftbs.jpg"),
    amazonLink: "https://amzn.to/4unxOIK",
    description: `Uncle Hoole's idea of a vacation is visiting the palace of Jabba the Hutt. Of course, it's a working vacation. Hoole wants to study the B'omarr monks who live in tunnels beneath the palace. If Jabba isn't enough to give Zak and Tash nightmares, the monks should do it. The most enlightened monks don't have bodies. They're just brains in jars. Brains in jars that walk around on robotic legs. Worst of all, one of the monks is mad—not just angry-mad, but out-of-his-mind mad. And if Tash isn't careful, she might lose her head.`,
    releaseDate: "November 10, 1997",
  },
  {
    id: "galaxy-of-fear-the-swarm",
    title: "Galaxy of Fear: The Swarm",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofts.jpg"),
    amazonLink: "https://amzn.to/4vDyCu1",
    description: `Uncle Hoole wants to study the S'krrr--a race of creatures that look like giant bugs. While Hoole works, Zak and Tash visit the S'krrr's huge garden--it's the most beautiful place they have ever seen. It's also full of very strange creatures. When a batlike shreev swoops down at Zak, he panics and accidentally kills it. Suddenly, the garden is overrun by big beetles. When Zak wakes up in the middle of the night covered with creepy crawly bugs, he's terrified. Did Zak upset the garden's delicate ecological balance by killing the shreev? Or is something far more sinister at work?`,
    releaseDate: "January 12, 1998",
  },
  {
    id: "choices-of-one",
    title: "Choices of One",
    author: "Timothy Zahn",
    timelinePlacement: 0,
    timelineLabel: "0 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51zKORQXQrL.jpg",
    amazonLink: "https://amzn.to/4uipZES",
    description: `The fate of the Rebellion rests on Luke Skywalker’s next move.
But have the rebels entered a safe harbor or a death trap?

Eight months after the Battle of Yavin, the Rebellion is in desperate need of a new base. So when Governor Ferrouz of Candoras Sector proposes an alliance, offering the Rebels sanctuary in return for protection against the alien warlord Nuso Esva, Luke, Leia, Han, and Chewie are sent to evaluate the deal.

Mara Jade, the Emperor’s Hand, is also heading for Candoras, along with the five renegade stormtroopers known as the Hand of Judgment. Their mission: to punish Ferrouz’s treason and smash the Rebels for good.

But in this treacherous game of betrayals within betrayals, a wild card is waiting to be played.`,
    releaseDate: "July 19, 2011",
  },
  {
    id: "galaxy-of-fear-spore",
    title: "Galaxy of Fear: Spore",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofs.jpg"),
    amazonLink: "https://amzn.to/4g4PSUi",
    description: `Tash, Zak, and Uncle Hoole stop on the planet Ithor for supplies, including a mineral the Shroud needs for its engines. The mineral isn't available on Ithor, but one of the Ithorians knows where they can find it—on a mining colony in the middle of a space slug-filled asteroid belt. The journey to the colony is filled with many dangers. But nothing prepares Hoole, Tash, and Zak for what they meet when they reach their destination. An ancient life-form has been released from its tomb. It has lurked there, waiting, for many years. It cannot be seen. It is made from pure evil. And its name is Spore.`,
    releaseDate: "March 9, 1998",
  },
  {
    id: "galaxy-of-fear-the-doomsday-ship",
    title: "Galaxy of Fear: The Doomsday Ship",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("goftds.jpg"),
    amazonLink: "https://amzn.to/3QqQzNl",
    description: `Bug swarms, space slugs, brains on legs, mad Imperial scientists—Zak has had enough! He's glad to be on board the luxury space yacht, Star of Empire, where at last, there's peace and quiet.

Until—"Abandon ship! Critical meltdown!" As a blaring siren sounds, panic-stricken passengers rush to get off the ship. Everyone evacuates…except Zak and Tash. But to their relief, nothing happens. There's no meltdown, no explosion. Everything is fine. Except that the ship's exits are sealed and all communications have been shut down. Zak and Tash are trapped. And they are not alone.`,
    releaseDate: "May 11, 1998",
  },
  {
    id: "galaxy-of-fear-clones",
    title: "Galaxy of Fear: Clones",
    author: "John Whitman",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofc.jpg"),
    amazonLink: "https://amzn.to/49GmNdZ",
    description: `In the Ruins of an abandoned Jedi Fortress on the remote planet Dantooine, Tash Arranda stands, all alone. At least, she thinks she's alone. She senses something in the ruins — Something Dark.

The darkness is stronger than Tash, and Against her will, she reaches out to it. It makes her feel powerful. And it frightens her. Tash doesn't know that this is only the beginning of a terrifying journey into an evil world, where she'll be forced to fight her own brother and uncle .... to the death!`,
    releaseDate: "August 1, 1998",
  },
  {
    id: "galaxy-of-fear-the-hunger",
    title: "Galaxy of Fear: The Hunger",
    author: "John Whitman",
    timelinePlacement: 1.0,
    timelineLabel: "1 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("gofth.jpg"),
    amazonLink: "https://amzn.to/4vx6Uii",
    description: `A survey team crash-lands on an unknown planet. The planet is dark, and its fetid swamps are filled with flesh-eating flowers, fearsome swamp slugs, and deadly dragonsnakes. No one hears the survey team's distress signals. They are stranded.

Thirty years later, Zak and Tash Arranda and their uncle Hoole, with Boba Fett in hot pursuit, land on the planet. Descendants of the survey team—half-starved and crazed with strange fevers—are still alive. They call themselves the Children, and how they have survived is a mystery. Does the strange creature named Yoda have the answer?`,
    releaseDate: "September 8, 1998",
  },
  {
    id: "honor-among-thieves",
    title: "Honor Among Thieves",
    author: "James S.A. Correy",
    timelinePlacement: 1.0,
    timelineLabel: "1 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/7177S5-zBTL._SY522_.jpg",
    amazonLink: "https://amzn.to/3RHHEXY",
    description: `When the Empire threatens the galaxy’s new hope, will Han, Luke, and Leia become its last chance?
 
When the mission is to extract a high-level rebel spy from the very heart of the Empire, Leia Organa knows the best man for the job is Han Solo—something the princess and the smuggler can finally agree on. After all, for a guy who broke into an Imperial cell block and helped destroy the Death Star, the assignment sounds simple enough.
 
But when Han locates the brash rebel agent, Scarlet Hark, she’s determined to stay behind enemy lines. A pirate plans to sell a cache of stolen secrets that the Empire would destroy entire worlds to protect—including the planet where Leia is currently meeting with rebel sympathizers. Scarlet wants to track down the thief and steal the bounty herself, and Han has no choice but to go along if he’s to keep everyone involved from getting themselves killed. From teeming city streets to a lethal jungle to a trap-filled alien temple, Han, Chewbacca, Leia, and their daring new comrade confront one ambush, double cross, and firestorm after another as they try to keep crucial intel out of Imperial hands.
 
But even with the crack support of Luke Skywalker’s x-wing squadron, the Alliance heroes may be hopelessly outgunned in their final battle for the highest of stakes: the power to liberate the galaxy from tyranny or ensure the Empire’s reign of darkness forever.`,
    releaseDate: "March 4, 2014",
  },
  {
    id: "the-paradise-snare",
    title: "The Paradise Snare",
    author: "A. C. Crispin",
    timelinePlacement: -10,
    timelineLabel: "10 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328348896i/11946306.jpg",
    amazonLink: "https://amzn.to/4tCkQ9k",
    description: `Here is the first book in the blockbuster trilogy that chronicles the never-before-told story of the young Han Solo. Set before the Star Wars movie adventures, these books chronicle the coming-of-age of the galaxy's most famous con man, smuggler, and thief.

The first book in this exciting Han Solo series begins with a recounting of Han's late teen years and shows us how he escaped an unhappy adopted home situation to carve out an adventurous new life for himself as a pilot. Han Solo, the handsome rogue, is every girl's dream man, and every boy's hero.`,
    releaseDate: "May 5, 1997",
  },
  {
    id: "the-hutt-gambit",
    title: "The Hutt Gambit",
    author: "A. C. Crispin",
    timelinePlacement: -5,
    
    timelineLabel: "5-4 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328301403i/12015221.jpg",
    amazonLink: "https://amzn.to/49EyYb5",
    description: `Here is the second novel in the blockbuster new trilogy that reveals the never-before-told story of the young Han Solo.  Set before the Star Wars(r) movie adventures, these books chronicle the coming-of-age of the galaxy's most famous con man, smuggler and thief.

Solo is now a fugitive from the Imperial Navy.  But he has made a valuable friend in a former Wookiee slave named Chewbacca, who has sworn Han a  life debt.  Han will need all the help he can get.  For the Ylesian Hutts have dispatched the dreaded bounty hunter Boba Fett to track down the man who already outsmarted them once.  But Han and Chewie find themselves in even bigger trouble when they agree to lend their services to the crime lords Jiliac and Jabba the Hutt.  Suddenly the two smugglers are thrust into the middle of a battle between the might of the Empire and the treachery of their outlaw allies...a battle where even victory means death!`,
    releaseDate: "September 1, 1997",
  },
  {
    id: "the-force-unleashed",
    title: "The Force Unleashed",
    author: "Sean Williams",
    timelinePlacement: -3.0,
    timelineLabel: "3-2 BBY",
    bookType: [
      "Adult",
      "Adaptations",
      "Legends",
    ],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696863694i/359855.jpg",
    amazonLink: "https://amzn.to/4dNgA28",
    description: `Darth Vader’s young Sith apprentice will forge an unlikely alliance with a ruined Jedi Master seeking redemption as he ventures to destroy Emperor Palpatine.

“The Sith always betray one another. . . . I’m sure you’ll learn that soon enough.”

The overthrow of the Republic is complete. Absolute power now rests in the iron fist of Darth Sidious–the cunning Sith Lord better known as Emperor Palpatine.But more remains to be done. Pockets of resistance in the galaxy must still be defeated and missing Jedi accounted for . . . and dealt with.

These crucial tasks fall to the Emperor’s ruthless enforcer, Darth Vader, who in turn has groomed a lethal, nameless Sith apprentice to secretly dispatch the last of his masters’ enemies. Since childhood, Vader's nameless agent has known only the cold, mercenary creed of the Sith. His past is a void; his present, the carrying out of his deadly orders. But his future beckons like a glistening black jewel with the ultimate promise: to stand beside the only father he has ever known, with the galaxy at their feet. But there is one, in control of his master, that stands in the way.

This acolyte’s journey will take him across the far reaches of the galaxy and test him with shattering revelations that strike at the very heart of all he believes, stirring within him long-forgotten hopes of reclaiming his name . . . and changing his destiny.`,
    releaseDate: "August 19, 2008",
  },
  {
    id: "lando-calrissian-and-the-mindharp-of-sharu",
    title: "Lando Calrissian and the Mindharp of Sharu",
    author: "L. Neil Smith",
    timelinePlacement: -3,
    timelineLabel: "3-2 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1280694509i/8694034.jpg",
    amazonLink: "https://amzn.to/4wyTPXe",
    description:
      "Lando Calrissian was born with a well-developed taste for the good life. So when he hears that ancient alien treasure is buried on the planets of the Rafa System, he hops aboard the Millennium Falcon and brushes up his rusty astrogation. He never stops to think that someone might be conning him, the connoisseur of cons.",
    releaseDate: "June 12, 1983",
  },
  {
    id: "lando-calrissian-and-the-flamewind-of-oseon",
    title: "Lando Calrissian and the Flamewind of Oseon",
    author: "L. Neil Smith",
    timelinePlacement: -3,
    timelineLabel: "3-2 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1610040626i/161548.jpg",
    amazonLink: "https://amzn.to/4wyTPXe",
    description: `A solar system with little more than luxury hotels catering to the underemployed filthy rich, the Oseon is every gambler’s dream come true. And so it is for Lando Calrissian, until he breaks the gambler’s cardinal rule: never beat an enforcer at a high-stakes game of chance.

Soon Lando and his feckless five-armed robot companion are being stalked by two enemies—one they know but cannot see and one they see but do not recognize . . . until it’s too late.`,
    releaseDate: "September 12, 1983",
  },
  {
    id: "lando-calrissian-and-the-starcave-of-thonboka",
    title: "Lando Calrissian and the Starcave of ThonBoka",
    author: "L. Neil Smith",
    timelinePlacement: -3,
    timelineLabel: "3-2 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1457320609i/775510.jpg",
    amazonLink: "https://amzn.to/4wyTPXe",
    description: `For a year, Lando Calrissian and his robot companion have roamed space in the Millennium Falcon, seeking or creating opportunities to turn an easy, but not too dishonest, credit.

But now their partnership seems doomed—for Lando’s uncharacteristic impulse to help a race of persecuted aliens has suddenly made them vulnerable to several sets of their own enemies . . . not least of whom is the evil Rokur Gepta, the Sorcerer of Tund!`,
    releaseDate: "November 12, 1983",
  },
  {
    id: "death-star",
    title: "Death Star",
    author: "Michael Reaves & Steve Perry",
    timelinePlacement: -3,
    timelineLabel: "3-0 BBY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320503718i/786729.jpg",
    amazonLink: "https://amzn.to/4dtCBSw",
    description: `“THAT’S NO MOON.”
–Obi-Wan Kenobi

The Death Star’s name says it all, with bone-chilling accuracy. It is a virtual world unto itself–equipped with uncanny power for a singularly brutal purpose: to obliterate entire planets in the blink of an eye. Its annihilation of the planet Alderaan, at the merciless command of Grand Moff Tarkin, lives in infamy. And its own ultimate destruction, at the hands of Luke Skywalker, is the stuff of legend. But what is the whole story, and who are the players, behind the creation of this world-killing satellite of doom?`,
    releaseDate: "October 16, 2007",
  },
  {
    id: "rebel-dawn",
    title: "Rebel Dawn",
    author: "A. C. Crispin",
    timelinePlacement: -2,
    timelineLabel: "2-0 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328111850i/111019.jpg",
    amazonLink: "https://amzn.to/3PtknZh",
    description: `Here is the explosive conclusion of the blockbuster trilogy that chronicles the never-before-told story of the young Han Solo.  Set before the Star Wars(r) movie adventures, these books chronicle the coming-of-age of the galaxy's most famous con man, smuggler, and thief.

The Millennium Falcon is "the fastest hunk of junk in the galaxy."  So when Han Solo wins it in a game of sabacc, he and Chewbacca become kings of the smugglers--uncatchable, unstoppable.  But with the Empire clamping down, Han knows his luck can't last.  Still, when an old girlfriend who is now the leader of an insurgent Rebel group offers him a shot at an incredible fortune, Han can't resist.  The plan seems a sure thing.  The resistance will be light and the take enormous.  Han and his friends will divide it equally with the Rebels.  Too bad for Han that the planet of Ylesia is far from a pushover, that the Rebels have an agenda of their own, and that smuggler friends can often turn into enemies...quicker than lightspeed.`,
    releaseDate: "March 9, 1998",
  },
  {
    id: "han-solo-s-at-stars-end",
    title: "Han Solo at Stars’ End",
    author: "Brian Daley",
    timelinePlacement: -2,
    timelineLabel: "2 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1618147909i/715311.jpg",
    amazonLink: "https://amzn.to/4wyTXpG",
    description:
      "Han Solo trusts no one, and does no favors. But when the best illegal ship rebuilder in the galaxy disappears, Han and Chewbacca agree to go after him—after all, the Millennium Falcon needs some very special repairs. Their search pits them against powerful and ruthless enemies out to destroy them, and finally leads them to an airless speck of desolate asteroid—the Authority prison planet known as Stars’ End.",
    releaseDate: "April 1, 1979",
  },
  {
    id: "han-solo-s-revenge",
    title: "Han Solo's Revenge",
    author: "Brian Daley",
    timelinePlacement: -2.0,
    timelineLabel: "2 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1280692532i/2119502.jpg",
    amazonLink: "https://amzn.to/4wyTXpG",
    description:
      "For a cool ten thousand credits, Han and Chewbacca will do just about anything—except transport slaves. For one thing, it means an instant death sentence. So when a high-paying cargo shipment turns out to be a consignment of slaves, Han and Chewie have to think fast. But Han forms a plan to turn the tables on the slavers and free the captives. Then, good deed accomplished, he scours the skies for the nasty joker who set him up—because revenge can be so sweet.",
    releaseDate: "October 12, 1979",
  },
  {
    id: "adventures-in-hyperspace-fire-ring-race",
    title: "Adventures in Hyperspace: Fire Ring Race",
    author: "Ryder Windham",
    timelinePlacement: -2.0,
    timelineLabel: "2–1 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("fireringrace.jpg"),
    amazonLink: "https://amzn.to/4uEeIyd",
    description: `Before they joined the Rebellion against the Empire, the pilot Han Solo and his co-pilot Chewbacca made their living by transporting cargo across the galaxy in the Millennium Falcon. But when Jabba the Hutt hires them to pick up a cargo container at Fornax Station, Han and Chewie pick up something else ... trouble!`,
    releaseDate: "June 1, 2010",
  },
  {
    id: "adventures-in-hyperspace-shinbone-showdown",
    title: "Adventures in Hyperspace: Shinbone Showdown",
    author: "Ryder Windham",
    timelinePlacement: -2.0,
    timelineLabel: "2–1 BBY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("shinbone.jpg"),
    amazonLink: "https://amzn.to/43WUaWo",
    description: `After transporting rude aliens and unusual plants for Jabba Desilijic Tiure the Hutt, Han and Chewbacca are in the mood for an easy job. But after Jabba sends them to the mining planet Shinbone for delivery and pick up, Han and Chewie learn that working for Jabba is never easy.`,
    releaseDate: "June 1, 2010",
  },
  {
    id: "han-solo-and-the-lost-legacy",
    title: "Han Solo and the Lost Legacy",
    author: "Brian Daley",
    timelinePlacement: -2.0,
    timelineLabel: "2 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1279469216i/8597188.jpg",
    amazonLink: "https://amzn.to/4wyTXpG",
    description:
      "There’s a fabled treasure at stake and a price on Han’s head. So he and Chewbacca head for a planet rumored to hide undreamed-of riches. But once they get there, Han’s beloved spacecraft, the Millennium Falcon, is hijacked by a band of assassins and killer robots. Their chances for survival are so slim, they might as well risk it all.",
    releaseDate: "August 12, 1980",
  },
  {
    id: "the-force-unleashed-ii",
    title: "The Force Unleashed II",
    author: "Sean Williams",
    timelinePlacement: -1.0,
    timelineLabel: "1 BBY",
    bookType: [
      "Adult",
      "Adaptations",
      "Legends",
    ],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388275527i/7694419.jpg",
    amazonLink: "https://amzn.to/4tzDGy9",
    description: `The dark side could not seduce him. The Empire could not control him. Death could not defeat him. And now, nothing can stop him from seizing his destiny.

As ruthless apprentice to Darth Vader, Starkiller was mercilessly schooled in the ways of the dark side, commanded to exterminate the last of the purged Jedi Order, and groomed for the ultimate Sith power play: assassination of the Emperor. He served without question, killed without remorse, and lost his heart without warning to beautiful Imperial fighter pilot Juno Eclipse, never suspecting that he was just a tool in the schemes of his masters—until it was too late to escape their lethal betrayal.

Juno mourned Starkiller as dead . . . but now he is back, purged of all memories and programmed to kill. And as fate brings Juno and Starkiller closer to reuniting, with Darth Vader determined not to lose his assassin a second time, they will both have to make a stand. The prize is freedom. The punishment for failing will be eternal enslavement to the dark side of the Force. . . .`,
    releaseDate: "October 5, 2010",
  },
  {
    id: "dark-forces-soldier-for-the-empire",
    title: "Dark Forces: Soldier for the Empire",
    author: "William C. Dietz",
    timelinePlacement: -1,
    timelineLabel: "1 BBY",
    bookType: ["Adult", "Legends"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1347575296i/1039101.jpg",
    amazonLink: "https://amzn.to/4uT6ylX",
    description:
      "Kyle Katarn, a freelance agent for the Rebel Alliance, reminisces about the events that destroyed his life when he was a young soldier training at the Emperor's Imperial Academy, in a graphic novel based on the Star Wars CD-ROM game, Dark Forces.",
    releaseDate: "February 1, 1997",
  },
  {
    id: "splinter-of-the-mind-s-eye",
    title: "Splinter of the Mind’s Eye",
    author: "Alan Dean Foster",
    timelinePlacement: 2,
    timelineLabel: "2 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327279149i/1146520.jpg",
    amazonLink: "https://amzn.to/4fpRQyd",
    description:
      "Luke Skywalker expected trouble when he volunteered to follow Princess Leia on her mission to the planet Circarpous. But he discovered that hidden on the planet was the Kaiburr crystal, a mysterious gem that would give the one who possessed it such powers over the Force that he would be all but invincible. In the wrong hands, the crystal could be deadly. So Luke had to find this treasure and find it fast....",
    releaseDate: "February 12, 1978",
  },
  {
    id: "razor-s-edge",
    title: "Razor's Edge",
    author: "Martha Wells",
    timelinePlacement: 2,
    timelineLabel: "2 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1366925150i/17345202.jpg",
    amazonLink: "https://amzn.to/49CgU1f",
    description: `When rebels clash with renegades, it’s the Empire that may claim the final victory.

Times are desperate for the Rebel Alliance. Harassment by the Empire and a shortage of vital supplies are hindering completion of a new secret base on the ice planet Hoth. So when Mid Rim merchants offer much-needed materials for sale, Princess Leia Organa and Han Solo lead an Alliance delegation to negotiate a deal.

But when treachery forces the rebel ship to flee into territory controlled by pirates, Leia makes a shocking discovery: the fierce marauders come from Leia’s homeworld of Alderaan, recently destroyed by the Death Star. These refugees have turned to pillaging and plundering to survive—and they are in debt to a pirate armada, which will gladly ransom the princess to the vengeful Empire . . . if they find out her true identity.

Struggling with intense feelings of guilt, loyalty, and betrayal, Leia is determined to help her wayward kinspeople, even as Imperial forces are closing in on her own crippled ship. Trapped between lethal cutthroats and brutal oppressors, Leia and Han, along with Luke, Chewbacca, and a battle-ready crew, must defy death—or embrace it—to keep the rebellion alive.`,
    releaseDate: "September 24, 2013",
  },
  {
    id: "star-wars-the-empire-strikes-back",
    title: "Star Wars: The Empire Strikes Back",
    author: "Donald F. Glut",
    timelinePlacement: 3.0,
    timelineLabel: "3 ABY",
    bookType: ["Adaptations", "Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81wJOuDWOYL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/42VcizP",
    description: `The war between the Empire and the Rebel Alliance reaches a major turning point, in the landmark story that made Star Wars a true saga.

It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.

Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker have established a new secret base on the remote ice world of Hoth.

The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space. . . .`,
    releaseDate: "May 1, 1980",
  },
  {
    id: "star-wars-episode-v-the-empire-strikes-back",
    title: "Star Wars Episode V: The Empire Strikes Back",
    author: "Ryder Windham",
    timelinePlacement: 3.0,
    timelineLabel: "3 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("esb.jpg"),
    amazonLink: "https://amzn.to/4xcKOTR",
    description: `A long time ago in a galaxy far, far away....

An Empire grows stronger. A rebellion is threatened. A young apprentice learns from a wise master. An identity is revealed. The journey takes a dark turn.`,
    releaseDate: "October 1, 2004",
  },
  {
    id: "shadows-of-the-empire",
    title: "Shadows of the Empire",
    author: "Steve Perry",
    timelinePlacement: 3.5,
    timelineLabel: "3-4 ABY",
    bookType: ["Adult", "Adaptations", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1361481442i/9549.jpg",
    amazonLink: "https://amzn.to/4tyR9pL",
    description:
      "Shadows of the Empire illuminates the shadowy outlines of a criminal conspiracy that exists in the background of the events in the movies, ruled by a character new to us. Prince Xizor is a mastermind of evil who dares to oppose one of the best-known fictional villains of all time: Darth Vader. The story involves all the featured Star Wars movie characters, plus Emperor Palpatine and, of course, Lord Vader himself.",
    releaseDate: "May 1, 1996",
  },
  {
    id: "shadows-of-the-empire-junior",
    title: "Shadows of the Empire Junior Novelization",
    author: "Christopher Golden",
    timelinePlacement: 3.5,
    timelineLabel: "3–4 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("sotejn.jpg"),
    amazonLink: "https://amzn.to/4v5YFKc",
    description: `A Star Wars Novelization by Christopher Golden

A Disturbance in the Force...

His name is Xizor. He's the evil underlord of a criminal organization called Black Sun, and he's out to destroy Darth Vader. The target of the two battling supervillains is Luke Skywalker. Vader wants Luke captured alive so that he can turn him to the dark side. But Xizor is already plotting Luke's death.

Now Luke's life, and his mission to rescue Han Solo, are in jeopardy. He and his friends must run for their lives from the galaxy's darkest forces.

Both new and old Star Wars fans will be eager to read this brand-new, never-before-told adventure, set between the Star Wars trilogy films ''The Empire Strikes Back and Return of the Jedi.`,
    releaseDate: "October 1, 1996",
  },
  {
    id: "the-mandalorian-armor",
    title: "The Mandalorian Armor",
    author: "K.W. Jeter",
    timelinePlacement: 4,
    timelineLabel: "4 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81Dpxe8K1iL._UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3PjXzLx",
    description: `He's the most feared and successful bounty hunter in the galaxy. He is Boba Fett, and even the most hardened criminals tremble at his name. Now he faces the deadliest challenge of his infamous career--an all-out war against his most dangerous enemies.

As the Rebellion gathers force, Prince Xizor proposes a cunning plan to the Emperor and Darth Vader: smash the power of the Bounty Hunters Guild by turning its members against each other. Only the strongest and most ruthless will survive, and they can be used against the Rebellion. It's a job for the fiercely independent Boba Fett, who jumps at the chance to destroy his rivals. But Fett soon realizes the game is rigged, as he finds himself the target of murderous factions, criminal conspiracies, and the evil at the Empire's dark heart. Boba Fett has always finished first. And in this game, anything less is death.`,
    releaseDate: "June 1, 1998",
  },
  {
    id: "slave-ship",
    title: "Slave Ship",
    author: "K.W. Jeter",
    timelinePlacement: 4,
    timelineLabel: "4 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328740749i/222019.jpg",
    amazonLink: "https://amzn.to/4fqFplH",
    description: `He's both feared and admired, respected and despised.  Boba Fett is the galaxy's most successful bounty hunter.  Now he finds himself the hunted in the oldest game of all: survival of the fittest.

The once powerful Bounty Hunter's Guild has been shattered into warring factions.  Now the posting of an enormous bounty on a renegade Imperial stormtrooper is about to start a frenzy of murderous greed.

Hoping to fuel rumors of his death, Boba Fett abandons his ship, Slave I, and sets out to claim the prize.  Yet his every move leads him closer to a trap set by the cunning Prince Xizor.  Fett will die before becoming Xizor's pawn in the Emperor's war against the Rebels.  And he may have to.  For in order to gain his freedom he must outwit a sentient weapon that feeds on human spirits.  Then he must escape a galaxy of deadly enemies who want to make the rumors of his death a reality.`,
    releaseDate: "October 6, 1998",
  },
  {
    id: "hard-merchandise",
    title: "Hard Merchandise",
    author: "K.W. Jeter",
    timelinePlacement: 4,
    timelineLabel: "4 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320521948i/420983.jpg",
    amazonLink: "https://amzn.to/49zEYSo",
    description: `Boba Fett fears only one enemy--the one he cannot see....

Feared and admired, respected and despised, Boba Fett enjoys a dubious reputation as the galaxy's most successful bounty hunter. Yet even a man like Boba Fett can have one too many enemies....

When Boba Fett stumbles across evidence implicating Prince Xizor in the murder of Luke Skywalker's aunt and uncle, Fett makes himself an enemy even he fears: the unknown mastermind behind a monstrous deception, who will kill to hide his tracks. Fett also finds himself in possession of an amnesiac young woman named Neelah, who may be the key to the mystery--or a decoy leading Fett into a murderous ambush. Fett's last hope is to run through the list of Xizor's hidden enemies. And since Xizor's hidden enemies are almost as legion as Fett's, the chance of survival is slim--even for someone as skilled and relentless as Boba Fett.`,
    releaseDate: "July 1, 1999",
  },
  {
    id: "the-truce-at-bakura",
    title: "The Truce at Bakura",
    author: "Kathy Tyers",
    timelinePlacement: 4,
    timelineLabel: "4 ABY",
    bookType: ["Adult", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81Q2SDeHibL._SY522_.jpg",
    amazonLink: "https://amzn.to/4uJ3ngo",
    description:
      "No sooner has Darth Vader's funeral pyre burned to ashes on Endor than the Alliance intercepts a call for help from a far-flung Imperial outpost. Bakura is on the edge of known space and the first to meet the Ssi-ruuk, cold-blooded reptilian invaders who, once allied with the now dead Emperor, are  approaching Imperial space with only one goal; total  domination. Princess Leia sees the mission as an  opportunity to achieve a diplomatic victory for the  Alliance. But it assumes even greater importance  when a vision of Obi-Wan Kenobi appears to Luke  Skywalker with the message that he must go to  Bakura-or risk losing everything the Rebels have fought  so desperately to achieve.",
    releaseDate: "November 1, 1993",
  },
  {
    id: "a-new-hope-the-life-of-luke-skywalker",
    title: "A New Hope: The Life of Luke Skywalker",
    author: "Ryder Windham",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("lifeofluke.jpg"),
    amazonLink: "https://amzn.to/4o9ojv2",
    description: `Hidden away at birth, he would believe himself an orphan. Watched over by a mysterious hermit, he would discover incredible abilities. And by finding hope where others found only evil, he would restore balance to the galaxy. 
    
    This is the incredible story of Luke Skywalker,as told by New York Times bestselling author Ryder Windham.`,
    releaseDate: "September 1, 2009",
  },
  {
    id: "tales-from-the-empire",
    title: "Tales from the Empire",
    author: "Various Authors",
    timelinePlacement: 4,
    timelineLabel: "4 ABY",
    bookType: ["Adult", "Anthology", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1389025059i/18916818.jpg",
    amazonLink: "https://amzn.to/4nxV4BX",
    description: `Culled from the pages of the Star Wars Adventure Journal, one of the most popular Star Wars magazines in the field today, comes this exciting new short-story collection.  Here are stories from such award-winning and New York Times bestselling authors as Timothy Zahn, Michael A. Stackpole and Kathy Tyers as well as exciting newcomers, including Erin Endom, Laurie Burns, and Patricia A. Jackson.  From the desperate flight of a civilian mail courier carrying vital Rebel intelligence through an Imperial blockade, to a suicidal commando raid on an impregnable Imperial prison, to a Corellian smuggler mysteriously hired by an actor turned Jedi Knight turned Imperial assassin for one final transformation, these tales capture all the high adventure, imaginative genius, and nonstop action that are the hallmarks of the Star Wars saga.

What's more, the centerpiece of this magnificent collection is the short novel Side Trip, the first-ever collaboration between Timothy Zahn and Michael A. Stackpole, in which a freighter smuggling arms for the Rebels is commandeered by an Imperial Star Destroyer led by a mysterious helmeted figure who claims to be the notorious bounty hunter Jodo Kast.  It is all part of a devious plan that includes Hal and Corran Horn, who are working undercover to nail the infamous Corellian warlord Zekka Thyne. But one slip-up can get them all killed.`,
    releaseDate: "November 3, 1997",
  },
  {
    id: "dark-forces-rebel-agent",
    title: "Dark Forces: Rebel Agent",
    author: "William C. Dietz",
    timelinePlacement: 5,
    timelineLabel: "5 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1424689830i/1039102.jpg",
    amazonLink: "https://amzn.to/3PKmGar",
    description:
      "Secret Rebel Agent Kyle Katarn will do anything to avenge his father's untimely death at the hands of the Empire. When Kyle is threatened by 8t88 in a Nar Shaddaa bar, he tracks down the droid and secures a mysterious disk that could put him on the path to learning why his father was killed. Kyle soon finds that the disk contains information about a map to the Valley of the Jedi, a place his father had stumbled upon and kept secret. Now it's a race between Kyle and the Empire to see who can get to the map—and the Valley—first.",
    releaseDate: "March 11, 1998",
  },
  {
    id: "dark-forces-jedi-knight",
    title: "Dark Forces: Jedi Knight",
    author: "William C. Dietz",
    timelinePlacement: 5,
    timelineLabel: "5 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1424689845i/953078.jpg",
    amazonLink: "https://amzn.to/4wwZqgv",
    description:
      "Following Dark Forces -- Rebel Agent, the conclusion of this graphic-story-album trilogy chronicles the adventures of Kyle Katarn as he arrives on Ruusan only to discover that Jerec and his band of Dark Jedi are looting the Valley of the Jedi, hoping to seize control of the almost unbelievable power that is trapped there. In order to stop them, Kyle must find the valley and fulfill his destiny as a Jedi!",
    releaseDate: "October 14, 1998",
  },
  {
    id: "x-wing-rogue-squadron",
    title: "Rogue Squadron",
    author: "Michael Stackpole",
    timelinePlacement: 6,
    timelineLabel: "6 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327860341i/513176.jpg",
    amazonLink: "https://amzn.to/3Plmhv2",
    description: `They are sleek, swift, and deadly. They are the X-wing fighters. And as the struggle rages across the vastness of space, the fearless men and women who pilot them risk both their lives and their machines. Their mission: to defend the Rebel Alliance against a still-powerful and battle-hardened Imperial foe in a last-ditch effort to control the stars!

Its very name strikes fear into enemy hearts. So when Rebel hero Wedge Antilles rebuilds the legendary Rogue Squadron, he seeks out only the best—the most skilled and most daring X-wing pilots. Through arduous training and dangerous missions, he weeds out the weak from the strong, assembling a group of hard-bitten warriors willing to fight, ready to die. Antilles knows the grim truth: Even with the best X-wing jockeys in the galaxy, many will not survive their near-suicidal missions. But when Rogue Squadron is ordered to assist in the assault on the heavily fortified Imperial stronghold of Blackmoon, even the bravest must wonder if any at all will survive. . .`,
    releaseDate: "January 1, 1996",
  },
  {
    id: "x-wing-wedge-s-gamble",
    title: "Wedge’s Gamble",
    author: "Michael Stackpole",
    timelinePlacement: 7,
    timelineLabel: "7 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1347013281i/13134965.jpg",
    amazonLink: "https://amzn.to/496aaIS",
    description: `Led by Wedge Antilles, the legendary pilots of Rogue Squadron prepare to risk everything in their battle against the Empire.

Sleek, swift, and deadly, they are the X-wing fighters. And as the battle against the Empire rages across the vastness of space, the pilots risk both their lives and their machines for the cause of the Rebel Alliance. Now they must embark on a dangerous espionage mission, braving betrayal and death on the Imperial homeworld to smash the power of a ruthless foe!

It is the evil heart of a battered and reeling Empire: Coruscant, the giant city-world from whose massive towers the Imperial High Command directs the war. The Rebels will invade this mighty citadel in a daring move to bring the Empire to its knees. But first Wedge Antilles and his X-wing pilots must infiltrate Coruscant to gain vital intelligence information. Capture means death, or worse—trapped in the clutches of the vicious leader known as “Iceheart,” Ysanne Isard, now Emperor in all but name.

And one of Rogue Squadron’s own is already her slave, a traitor hidden behind a mask of innocence, working to betray both colleagues and the Rebellion itself.`,
    releaseDate: "May 2, 1996",
  },
  {
    id: "x-wing-the-krytos-trap",
    title: "The Kryptos Trap",
    author: "Michael Stackpole",
    timelinePlacement: 7,
    timelineLabel: "7 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1628772170i/513200.jpg",
    amazonLink: "https://amzn.to/4deh4hB",
    description: `The brave pilots of Rogue Squadron face the impossible as the sinister Ysanne Isard wreaks havoc on a fragile Coruscant.

The Rebels have taken the Imperial headquarters world of Coruscant, but their problems are far from over.

A killer virus called Krytos is spreading among the population and fomenting a counterrevolution at the heart of the New Republic. At the same time, Rebel hero Tycho Celchu is on trial for treason, accused of murdering his comrade and fellow pilot Corran Horn.

Corran, however, is still alive, trapped in the secret, inescapable prison of Ysanne Isard, the imperial officer whose reputation for torture and cruelty have earned her the moniker Iceheart. As he fights for his freedom, the pilot discovers an extraordinary power in himself—the power of the Force!`,
    releaseDate: "October 2, 1996",
  },
  {
    id: "x-wing-the-bacta-war",
    title: "The Bacta War",
    author: "Michael Stackpole",
    timelinePlacement: 7,
    timelineLabel: "7 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327941683i/513201.jpg",
    amazonLink: "https://amzn.to/4dq8GKL",
    description: `After her attempt to strike at the heart of Coruscant with a deadly virus, the sinister Ysanne Isard sets her sights on destabilizing the New Republic by seizing its medicinal bacta production. Under the guise of a mere power struggle between corporations on the planet Thyferra, the imperial mastermind has taken control of one of the galaxy's most precious resources. 

The heroes of Rogue Squadron are desperate to liberate the planet, and free prisoners trapped by Isard, only to find their plans foiled by the politics of the New Republic, which is set on assigning the squadron elsewhere. With timing and resources running short, Wedge Antilles, Corran Horn, and the other rogues have no choice but to resign from the New Republic. 
 
The team must now go truly rogue to chip away at Isard's power, defeat her powerful complement of Star Destroyers, and free Thyferra from her iron rule. But when she discovers the Squadron's secret base, its pilots must scramble for survival in a winner-take-all battle against Isard's overwhelming and seemingly superior force.`,
    releaseDate: "February 6, 1997",
  },
  {
    id: "x-wing-wraith-squadron",
    title: "Wraith Squadron",
    author: "Aaron Allston",
    timelinePlacement: 7,
    timelineLabel: "7 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328348741i/11937923.jpg",
    amazonLink: "https://amzn.to/3Rq0iDG",
    description: `As the battle against the Empire rages, a new crew of X-wing fighters risk life and machine on a daring undercover mission and emerge as the Rebel Alliance’s elite strike force.

It is Wedge Antilles’s boldest creation: a covert-action unit of X-wing fighters, its pilots drawn from the dregs of other units, castoffs and rejects being given one last chance. But before the new pilots can complete their training, the squadron’s base is attacked by former Imperial admiral Trigit and Wraith Squadron is forced to swing into action—taking over an Imperial warship and impersonating its crew. 

The mission: to gain vital intelligence about Trigit’s secret weapons, to sabotage the admiral’s plans, and to lure him into an Alliance trap. However, the high-stakes gamble pits Wraith Squadron’s ragtag renegades against the Empire’s most brilliant master of guile and deception.

Are they up to the challenge?

If not, the penalty is instant death.`,
    releaseDate: "February 2, 1998",
  },
  {
    id: "x-wing-iron-fist",
    title: "Iron Fist",
    author: "Aaron Allston",
    timelinePlacement: 7,
    timelineLabel: "7 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328348743i/11937947.jpg",
    amazonLink: "https://amzn.to/4dq8IST",
    description: `The Rebel Alliance’s elite strike force must double-cross an infamous warlord in the second book of the Wraith Squadron series, the companion to the hit Rogue Squadron series.

Against all odds, the controversial Wraith Squadron has survived its first covert mission. But now they are called upon to cheat death twice. This time, Wedge Antilles sends them in to stop the warlord Zsinj and his Super Star Destroyer, Iron Fist. If Zsinj joins the Empire, it could turn the tide of war against the Rebels.

The Wraith Squadron’s mission: infiltrate the warlord’s fleet and uncover his carefully guarded plans. To do so, they must pose as ruthless pirates seeking to join Zsinj’s forces. And that means first becoming pirates in space lanes teeming with Imperial navy patrols. If that isn’t enough to get them killed, they’ll have to pass one last test—a suicide mission for Zsinj.

Can they survive the test and turn the tables on Zsinj? 

Or is this the end for Wraith Squadron?`,
    releaseDate: "July 6, 1998",
  },
  {
    id: "x-wing-solo-command",
    title: "Solo Command",
    author: "Aaron Allston",
    timelinePlacement: 7,
    timelineLabel: "7 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1697664052i/129705665.jpg",
    amazonLink: "https://amzn.to/3P5Lae7",
    description: `The Rebel Alliance’s elite strike force must join together with Han Solo to take down their old foe, the warlord Zsinj.

Wraith Squadron: they are the Rebel Alliance’s ultimate strike force. Sleek, swift, and deadly, they are the first in battle, the last line of defense. Now they must find and destroy a wily enemy more powerful than the Empire itself.

Their covert mission has been a success. The enemy has been vanquished. Or so they thought. The Super Star Destroyer Iron Fist somehow escaped destruction and with it the New Republic’s greatest threat, the infamous warlord Zsinj. To defeat him, Wraith Squadron must join a combat task force led by the only man crafty enough to beat Zsinj at his own game: Han Solo.

But Zsinj knows the X-wing fighters’ indomitable courage is both their greatest strength–and their greatest weakness. For even against the most overwhelming odds, the Rebels will fight to the death. And that will leave Zsinj the galaxy’s unchallenged master!`,
    releaseDate: "February 2, 1999",
  },
  {
    id: "the-courtship-of-princess-leia",
    title: "The Courtship of Princess Leia",
    author: "Dave Wolverton",
    timelinePlacement: 8,
    timelineLabel: "8 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1401659364i/821010.jpg",
    amazonLink: "https://amzn.to/3RJKNGL",
    description: `Before the marriage of Princess Leia Organa and Han Solo, another suitor threatened to derail their star-crossed romance. . . .

Seeking rich, powerful allies to bring into the Rebel Alliance and a new home planet for the refugees from her native Alderaan, Princess Leia considers a proposal that could tip the balance of power against the evil Empire. The Hapes Consortium of 63 worlds is ruled by the Queen Mother, who wants Leia to marry her son, the dashing and wealthy Prince Isolder. 

Han Solo has always dreamed of marrying Leia himself, and now he makes a desperate, final gamble to win her back. Tricking Leia into accompanying him, Han flees with her to the beautiful and untamed planet Dathomir, where he hopes to win her heart. 

Fearing the imperious queen’s reaction to Han’s rash move, Luke Skywalker forms an unlikely alliance with Prince Isolder to track down the runaways. Soon Isolder, Luke, and Artoo will be at the center of an adventure leading to an awesome treasure, a group of Force-trained “witches,” and a showdown with an invincible foe.`,
    releaseDate: "April 1, 1994",
  },
  {
    id: "tatooine-ghost",
    title: "Tatooine Ghost",
    author: "Troy Denning",
    timelinePlacement: 8,
    timelineLabel: "8 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328320806i/12925633.jpg",
    amazonLink: "https://amzn.to/4fvsXB8",
    description: `Han and Leia struggle to keep the Empire at bay as stunning revelations from the past threaten to eclipse the future of the New Republic. . . .

The deaths of Darth Vader and Emperor Palpatine by no means spelled the end of the Empire. In the aftermath, the New Republic has faced a constant struggle to survive. Now a new threat looms: a masterpiece of Alderaanian art—lost after the planet’s destruction—has resurfaced on the black market. It conceals a vital secret—the code used to communicate with New Republic agents undercover within the Empire. Discovery by Imperial forces would spell disaster. The only option is recovery—and Han, Leia, Chewbacca, and C-3PO have been dispatched to Tatooine to infiltrate the auction.

When a dispute at the auction erupts into violence, the painting vanishes in the chaos. Han and Leia are thrust into a desperate race to reclaim it. As they battle against marauding TIE fighters, encroaching stormtroopers, and Tatooine’s savage Tusken Raiders, Leia’s emotional struggle over the specter of her infamous father culminates in the discovery of an extraordinary link to the past. And as long-buried secrets at last emerge, she faces a moment of reckoning that will forever alter her destiny . . . and that of the New Republic.`,
    releaseDate: "March 4, 2003",
  },
  {
    id: "heir-to-the-empire",
    title: "Heir to the Empire",
    author: "Timothy Zahn",
    timelinePlacement: 9,
    timelineLabel: "9 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328348335i/11916111.jpg",
    amazonLink: "https://amzn.to/4wz3KMg",
    description: `In this essential Star Wars Legends novel—the first ever to take place after the events of the original trilogy—Grand Admiral Thrawn makes his debut on the galactic stage.

Five years ago, the Rebel Alliance destroyed the Death Star, defeated Darth Vader and the Emperor, and drove the remnants of the old Imperial Starfleet to a distant corner of the galaxy. Princess Leia and Han Solo are married and expecting twins. And Luke Skywalker has become the first in a long-awaited line of Jedi Knights.

But thousands of light-years away, the last of the Emperor’s warlords, Grand Admiral Thrawn, has taken command of the shattered Imperial fleet, readied it for war, and pointed it at the fragile heart of the New Republic. For this dark warrior has made a vital discovery that could destroy everything the courageous men and women of the Rebel Alliance fought so hard to build.`,
    releaseDate: "May 1, 1991",
  },
  {
    id: "dark-force-rising",
    title: "Dark Force Rising",
    author: "Timothy Zahn",
    timelinePlacement: 9,
    timelineLabel: "9 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1510280150i/216442.jpg",
    amazonLink: "https://amzn.to/4uluO0i",
    description: `In this essential Star Wars Legends novel, the sequel to Heir to the Empire, Grand Admiral Thrawn’s sinister plan threatens to spell doom for the fledgling New Republic and its most iconic heroes.

The dying Empire’s most cunning and ruthless warlord, Grand Admiral Thrawn, has taken command of the remnants of the Imperial Fleet and launched a massive campaign aimed at the New Republic’s destruction. Meanwhile, Han Solo and Lando Calrissian race against time to find proof of treason inside the highest Republic Council—only to discover instead a ghostly fleet of warships that could bring doom to their friends and victory to their enemies.

Yet most dangerous of all is a new Dark Jedi, risen from the ashes of a shrouded past, consumed by bitterness, and scheming to corrupt Luke Skywalker to the dark side.`,
    releaseDate: "May 1, 1992",
  },
  {
    id: "the-last-command",
    title: "The Last Command",
    author: "Timothy Zahn",
    timelinePlacement: 9,
    timelineLabel: "9 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659902188i/216422.jpg",
    amazonLink: "https://amzn.to/4uedlGR",
    description: `The epic story that began with Heir to the Empire reaches its dramatic conclusion in this essential Star Wars Legends novel.

The embattled Republic reels from the attacks of Grand Admiral Thrawn, who has marshaled the remnants of the Imperial forces and driven the Rebels back with an abominable technology recovered from the Emperor's secret fortress: clone soldiers. As Thrawn mounts his final siege, Han Solo and Chewbacca struggle to form a coalition of smugglers for a last-ditch attack, while Princess Leia holds the Alliance together and prepares for the birth of her Jedi twins.

The Republic has one last hope—sending a small force into the very stronghold that houses Thrawn’s terrible cloning machines. There a final danger awaits, as the Dark Jedi C’baoth directs the battle against the Rebels and builds his strength to finish what he already started: the destruction of Luke Skywalker.`,
    releaseDate: "April 1, 1993",
  },
  {
    id: "the-life-and-legend-of-obi-wan-kenobi",
    title: "The Life and Legend of Obi-Wan Kenobi",
    author: "Ryder Windham",
    timelinePlacement: 9.0,
    timelineLabel: "9 ABY",
    bookType: ["Legends", "Middle Grade"],
    coverUrl: getLegendsCover("legendobiwan.jpg"),
    amazonLink: "https://amzn.to/3S6BZek",
    description: `Overlooked as a Padawan, he was to become one of the most revered Masters of all.

Sworn to serve the Galactic Republic and the Jedi Order, his own apprentice would bring about their destruction.

Powerless to retrieve Darth Vader from the dark side, he would train the only one who could.

This is the legendary story of Obi-Wan Kenobi, from his first meeting with Anakin Skywalker to his final meeting with Darth Vader—and beyond....`,
    releaseDate: "August 27, 2008",
  },
  {
    id: "x-wing-isard-s-revenge",
    title: "Isard’s Revenge",
    author: "Michael Stackpole",
    timelinePlacement: 9,
    timelineLabel: "9 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327863344i/12150657.jpg",
    amazonLink: "https://amzn.to/43bkqMt",
    description: `When Rogue Squadron faces their greatest test yet, their only chance of success lies in working with the sinister Ysanne Isard.

Sleek, swift and deadly, the famed X-Wing fighters have earned their reputation as the Rebel Alliance’s ultimate strike force the hard way—first in battle, the last line of defense. Now they must make a deal with the devil herself—an enemy whose ultimate goal is their total annihilation.

It’s the kind of mission only Wedge Antilles and the Rogue Squadron would dare to undertake. Against impossible odds they will stage a daring raid into an enemy stronghold—only to be rescued from certain destruction by an unexpected ally.

Ysanne Isard, the ruthless Imperial commander, has appeared on the scene seemingly from out of nowhere. Now she proposes a most unusual alliance, offering to help Wedge rescue his captured comrades from Imperial Warlord Admiral Krennel’s sadistic prison camp.

But her offer is not without a price. Wedge must lead Rogue Squadron in Isard’s deadly struggle against an enemy made in her own image. It’s an offer Wedge would love to refuse, for Isard is certain to betray them. But how can they leave their comrades at Krennel’s mercy? The answer is: they can’t—even if it means being caught between Krennel’s ruthlessness and Isard’s treachery.`,
    releaseDate: "April 13, 1999",
  },
  {
    id: "jedi-search",
    title: "Jedi Search",
    author: "Kevin J. Anderson",
    timelinePlacement: 11,
    timelineLabel: "11 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1399799462i/11976915.jpg",
    amazonLink: "https://amzn.to/490oF0W",
    description: `As the war between the Republic and the scattered remnants of the Empire continues, two children - the Jedi twins - will come into their powers in a universe on the brink of vast changes and challenges. In this time of turmoil and discovery, an extraordinary new Star Wars saga begins….

While Luke Skywalker takes the first step toward setting up an academy to train a new order of Jedi Knights, Han Solo and Chewbacca are taken prisoner on the planet Kessel and forced to work in the fathomless depths of a spice mine. But when Han and Chewie break away, they flee desperately to a secret Imperial research laboratory surrounded by a cluster of black holes - and go from one danger to a far greater one….

On Kessel, Luke picks up the trail of his two friends, only to come face-to-face with a weapon so awesome, it can wipe out an entire solar system. It is a death ship called the Sun Crusher, invented by a reclusive genius and piloted by none other than Han himself….`,
    releaseDate: "March 1, 1994",
  },
  {
    id: "dark-apprentice",
    title: "Dark Apprentice",
    author: "Kevin J. Anderson",
    timelinePlacement: 11,
    timelineLabel: "11 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1326717545i/760111.jpg",
    amazonLink: "https://amzn.to/4drN5Sh",
    description: `As the New Republic takes devastating losses in the ongoing war with the scattered remnants of the Empire, the galaxy's future depends on three small children—among them the Jedi twins—born to incredible powers and perils, as an extraordinary new Star Wars saga unfolds….

While the New Republic struggles to decide what to do with the deadly Sun Crusher—a new doomsday weapon stolen from the Empire by Han Solo—the renegade Imperial Admiral Daala uses her fleet of Star Destroyers to conduct guerrilla warfare on peaceful planets. And now she threatens the watery homeworld of Admiral Ackbar.

But as the battle for a planet rages, an even greater danger emerges at Luke Skywalker's Jedi academy. A brilliant student delves dangerously into the dark side of the Force and unleashes the spirit of an ancient master of the evil order that warped Darth Vader himself. Working together, they may become an enemy greater than any the New Republic has ever fought… more powerful than even a Jedi Master can face.`,
    releaseDate: "July 1, 1994",
  },
  {
    id: "champion-s-of-the-force",
    title: "Champions of the Force",
    author: "Kevin J. Anderson",
    timelinePlacement: 11,
    timelineLabel: "11 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327008722i/513207.jpg",
    amazonLink: "https://amzn.to/43hzKah",
    description: `As the New Republic continues its struggle for survival, a scattered but powerful remnant of the shattered Empire seeks to destroy three precious children - among them Han and Leia's Jedi twins - who represent the next generation of Jedi Knights, in this third and final novel of the Jedi Academy Trilogy…

Suspended helplessly between life and death, Luke Skywalker lies in state at the Jedi academy. But on the spirit plane, Luke fights desperately for survival, reaching out physically to the Jedi twins. At the same time, Leia is on a life-and-death mission of her own, a race against Imperial agents hoping to destroy a third Jedi child - Leia and Han's baby Anakin - hidden on the planet Anoth.

Meanwhile, Luke's former protégé Kyp Durron has pirated the deadly Sun Crusher on an apocalyptic mission of mass destruction, convinced he is fighting for a just cause. Hunting down the rogue warrior, Han must persuade Kyp to renounce his dark crusade and regain his lost honor. To do it, Kyp must take the Sun Crusher on a suicide mission against the awesome Death Star prototype - a battle Han knows they may be unable to win… even with Luke Skywalker at their side!`,
    releaseDate: "September 1, 1994",
  },
  {
    id: "planet-of-twilight",
    title: "Planet of Twilight",
    author: "Barbara Hambly",
    timelinePlacement: 13,
    timelineLabel: "13 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91OKTuqItLL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/492llSR",
    description: `New York Times bestselling author Barbara Hambly returns to the Star Wars(r) universe to tell a breathtaking tale of a mysterious world where the battle between the New Republic and the Empire takes a shocking new twist....

Nam Chorios is a barren backwater world--once a dreaded prison colony, now home to a fanatic religious cult. It is here that Princess Leia has been taken captive by a ruthless and charismatic warlord bent on destroying the New Republic. Meanwhile, Luke lands on a mysterious planet in search of his lost love, Callista, only to discover the Force is his own worst enemy. But worst of all, as Han, Chewie, and Lando leave Coruscant on a desperate rescue mission, a strange life-form, unlike any the galaxy has ever seen, awakens...a life-form so malevolent it will destroy everything--both Empire and New Republic--on its path to domination.`,
    releaseDate: "January 1, 1997",
  },
  {
    id: "before-the-storm",
    title: "Before the Storm",
    author: "Michael P. Kube-McDowell",
    timelinePlacement: 16,
    timelineLabel: "16 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71+eGPdgHSL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4wzHAJX",
    description: `It is a time of tranquillity for the New Republic.  The remnants of the Empire now lie in complete disarray, and the reemergence of the Jedi Knights has brought power and prestige to the fledgling government on Coruscant.  

Yesterday's Rebels have become today's administrators and diplomats, and the factions that fought against imperial tyranny seem united in savoring the fruits of peace. But the peace is short-lived.  

A restless Luke must journey to his mother's homeworld in a desperate and dangerous quest to find her people.  An adventurous Lando must seize a mysterious spacecraft that has weapons of enormous destructive power and an unknown mission.  And Leia, a living symbol of the New Republic's triumph, must face down a ruthless leader of the Duskhan League, an arrogant Yevetha who seems bent on a genocidal war that could shatter the fragile unity of the New Republic... and threaten its very survival.`,
    releaseDate: "March 1, 1996",
  },
  {
    id: "shield-of-lies",
    title: "Shield of Lies",
    author: "Michael P. Kube-McDowell",
    timelinePlacement: 16,
    timelineLabel: "16 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/612OMtMGC+L._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4upEEhx",
    description:
      "As Leia must deal with a new threat to the fragile alliance that binds the New Republic, Lando becomes a prisoner aboard a runaway spacecraft of unknown origin. The ship is following an unstoppable path to its homeworld, destroyed by Imperial forces. Luke continues his quest to learn more about his mother among the Fallanassi, where his every belief about the use of the Force is about to be challenged. And while Leia ponders a diplomatic solution to the aggression of the fierce Yevetha race, Han pilots a spy ship into the heart of Yevethan space and finds himself a hostage on one of the vast fleet of warships under the command of a ruthless leader.",
    releaseDate: "August 1, 1996",
  },
  {
    id: "tyrant-s-test",
    title: "Tyrant's Test",
    author: "Michael P. Kube-McDowell",
    timelinePlacement: 16,
    timelineLabel: "16 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81ZE2UfHjAL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3R3MBKG",
    description: `In the wake of a shattered alliance, the New Republic fights a relentless new enemy in an all-new adventure in the bestselling Star Wars saga...

Faced with an alarming image of Han as a battered hostage of the Yevetha, Chewbacca takes on an urgent mission. Meanwhile, Leia calls upon the Senate to take a stand and eliminate the Yevetha threat--even at the cost of Han's life.  As a former Imperial governor takes his battle to the runaway Qella spaceship, Luke's continuing search for his mother brings him dangerously close to Nil Spaar's deadly forces. And as the Yevetha close in on the forces of the New Republic, Luke takes a desperate gamble with an invisible weapon...`,
    releaseDate: "December 1, 1996",
  },
  {
    id: "tales-from-the-new-republic",
    title: "Tales From the New Republic",
    author: "various authors",
    timelinePlacement: 18,
    timelineLabel: "0-18 ABY",
    bookType: ["Adult", "Anthology", "Legends", "Rebellion"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1419953780i/2345843.jpg",
    amazonLink: "https://amzn.to/4dorFVZ",
    description: `Written by some of today’s leading science fiction writers, these tales sweep us into a world where the only laws are cunning, force, and power—and only the bravest, craziest, and deadliest dare to tread. Here mercs and smugglers, gangsters and warriors fight toe to toe, side by side, and behind each other’s backs in the backwaters of a universe ripped apart by war.

On Zelos II a man and a woman are held prisoner in a dark cell, each fighting in their own way for survival at the hands of Imperial captors—and a chance for escape that could cost one of them their life. On the tortured landscape of Ryloth, Fenig Nabon awaits a ship of women warriors to complete a dangerous deal: the smuggling of a troupe of dancers to the homeworld of the Hutts—only to get more than she bargained for. And in a stunning novella written especially for this collection by Hugo Award–winning, New York Times bestselling author Timothy Zahn and Michael A. Stackpole, Senator Garm Bel Iblis, believed dead at the hands of an Imperial assassin, teams up with Hal Horn in a duel against the Empire’s most dangerous agent. At stake are the plans for a terrifying new weapon called the Death Star—and the fate of both the Empire and the New Republic.`,
    releaseDate: "December 1, 1999",
  },
  {
    id: "ambush-at-corellia",
    title: "Ambush at Corellia",
    author: "Roger McBride Allen",
    timelinePlacement: 18,
    timelineLabel: "18 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81+jKQ0PNmL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3PsJPhw",
    description:
      "A trade summit on Corellia brings Han Solo back  to the home world he left many years before.  Arriving on the distant planet with Leia, their children  and Chewbacca, Han finds Corellia overrun with  agents of the New Republic Intelligence and finds  himself part of a deceptive plan whose aim not even  he understands. One thing is clear: the five  inhabited worlds of the sector are on the brink of civil  war and the once peaceful coexistence of the three  leading races -- human, Selonian, and Drallan --  has come to an end.",
    releaseDate: "February 2, 1995",
  },
  {
    id: "assault-at-selonia",
    title: "Assault at Selonia",
    author: "Roger McBride Allen",
    timelinePlacement: 18,
    timelineLabel: "18 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327868684i/513158.jpg",
    amazonLink: "https://amzn.to/4wxubSx",
    description: `Imprisoned on the planet Corellia, Han Solo finds himself at the mercy of his evil cousin, Thracken Sal-Solo. Thracken plans to restore the Imperial  system and seize total power -- no matter what the cost. Han has one chance to stop him. But to do so he must turn his back on his human cousin and join forces with a female alien. Dracmus was arrested as a ringleader in a plot against the corrupt Human League. Now she and Han will attempt a daring  escape to Selonia in time to warn Leia, Luke Skywalker, and Lando of Thracken's plan. But can Han trust  the alien to keep her word?

Meanwhile, other questions threaten the New Republic -- and the lives of millions. Who is behind the deadly Starbuster plot? Why is someone attempting to take possession of Corellia's powerful planetary repulsors? And what is the secret behind the mysterious Centerpoint Station, and ancient, artificial world of unknown origin that has suddenly -- and inexplicably -- come alive?`,
    releaseDate: "June 1, 1995",
  },
  {
    id: "showdown-at-centerpoint",
    title: "Showdown at Centerpoint",
    author: "Roger McBride Allen",
    timelinePlacement: 18,
    timelineLabel: "18 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327869044i/424587.jpg",
    amazonLink: "https://amzn.to/4tBHhvi",
    description: `In this third and final volume of the Corellian  trilogy, Han and Luke lead the Alliance in a mad scramble against the Selonian rebels for control of the planetary technology.

When a loyalist ship approaching Selonia is blasted out of space, Han Solo quickly realizes that rebel forces are turning planetary repulsors into weapons of immense destruction. Meanwhile, Luke Skywalker and Lando Calrissian manage to discover the terrifying secret of Centerpoint Station. It is the infamous Starbuster itself, and its next programmed nova, hard-wired in, is set to annihilate a chosen star, its inhabited worlds, and millions of innocent lives. There's only one way to stop it: blow up the station. But as a massive rebel fleet closes in on Centerpoint, Han, Luke, and their friends will discover time is running out.

Then the true leaders of the rebellion reveal their identities and issue their final ultimatum: The New Republic must withdraw all claim to power over the entire Corellian sector. With the future of Corellian freedom at stake, Han and those loyal to the Republic must somehow resist. But how can they possibly stop the deadliest weapon the galaxy has ever known?`,
    releaseDate: "September 1, 1995",
  },
  {
    id: "specter-of-the-past",
    title: "Specter of the Past",
    author: "Timothy Zahn",
    timelinePlacement: 19,
    timelineLabel: "19 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1326718522i/77787.jpg",
    amazonLink: "https://amzn.to/42DifBe",
    description: `Hugo Award-winning author Timothy Zahn makes his triumphant return to the Star Wars(r) universe in this first of an epic new two-volume series in which the New Republic must face its most dangerous enemy yet--a dead Imperial warlord.

The Empire stands at the brink of total collapse. But they have saved their most heinous plan for last. First a plot is hatched that could destroy the New Republic in a bloodbath of genocide and civil war. Then comes the shocking news that Grand Admiral Thrawn--the most cunning and ruthless warlord in history--has apparently returned from the dead to lead the Empire to a long-prophesied victory. Facing incredible odds, Han and Leia begin a desperate race against time to prevent the New Republic from unraveling in the face of two inexplicable threats--one from within and one from without. Meanwhile, Luke teams up with Mara Jade, using the Force to track down a mysterious pirate ship with a crew of clones. Yet, perhaps most dangerous of all, are those who lurk in the shadows, orchestrating a dark plan that will turn the New Republic and the Empire into their playthings.`,
    releaseDate: "November 3, 1997",
  },
  {
    id: "vision-of-the-future",
    title: "Vision of the Future",
    author: "Timothy Zahn",
    timelinePlacement: 19,
    timelineLabel: "19 ABY",
    bookType: ["Adult", "Legends", "New Republic"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71c7GYD0gFL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/3RJM0xN",
    description: `Hugo Award-winning author Timothy Zahn brings his epic two-volume series The Hand of Thrawn to an explosive conclusion with a discovery that rocks the New Republic to its foundations--and threatens to resurrect the Empire.

The Empire's master plan is under way. The New Republic is on the verge of civil war and the rumor that the legendary Admiral Thrawn has returned from the dead is rallying the Imperial forces. Now Luke Skywalker, Han Solo, Princess Leia, and their allies face the challenge of their lives. They must infiltrate a hidden fortress filled with Imperial fanatics, rendezvous with a double-dealing Imperial commander, and journey into enemy territory to learn the identity of those responsible for an act of unthinkable genocide. But most important of all is the truth about Thrawn. In his hands--alive or dead--rests the fate of the New Republic.`,
    releaseDate: "September 1, 1998",
  },
  {
    id: "star-by-star",
    title: "Star by Star",
    author: "Troy Denning",
    timelinePlacement: 26.9,
    timelineLabel: "27 ABY",
    bookType: ["Adult", "Legends", "New Jedi Order"],
    coverUrl:
      "https://m.media-amazon.com/images/I/61r34+C6b9L._SY522_.jpg",
    amazonLink: "https://amzn.to/4nwkdgd",
    description: `The New York Times bestselling Star Wars series The New Jedi Order enthralls readers with its epic drama and thrilling adventure. Now readers will pierce the very heart of darkness. . . .

It is a solemn time for the New Republic, as the merciless Yuuzhan Vong continue their campaign of destruction. The brutal enemy has unleashed a savage creature capable of finding—and killing—Jedi Knights. And now Leia Organa Solo faces a terrible ultimatum. If the location of the secret Jedi base is not revealed within one week, the Yuuzhan Vong will blast millions of refugee ships into oblivion.

As the battered but still unbroken Jedi scramble to deal with the newest onslaught, Leia’s son Anakin lays out a daring plan. He will lead a Jedi strike force into the heart of enemy territory in order to sabotage the Yuuzhan Vong’s deadliest weapons. There, with his brother and sister at his side, he will come face-to-face with his destiny—as the New Republic, still fighting the good fight, will come face-to-face with theirs. . . .`,
    releaseDate: "October 30, 2001",
  },
];

export const canonNovels: Novel[] = [
  {
    id: "quest-for-the-hidden-city",
    title: "Quest for the Hidden City",
    author: "George Mann",
    timelinePlacement: -382.0,
    timelineLabel: "382 BBY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("hiddencity.jpg"),
    amazonLink: "https://amzn.to/4wtYIAJ",
    description: `Centuries before the Clone Wars or the Empire, in the early days of the High Republic, it was an age of exploration in a galaxy far, far away. . . .

Daring pilots chart new routes through hyperspace, while Pathfinder teams make contact with frontier worlds to invite them to join the Republic. When a Pathfinder team’s communications droid is found drifting in space, damaged and bearing a cryptic message, Jedi Knight Silandra Sho and her Padawan, Rooper Nitani, are sent to find the missing team members. Their investigation leads them to the planet Gloam, a ravaged world said to be haunted by mythical monsters.

Can the Jedi find the missing Pathfinders and unravel the mystery of the monsters? The answers lie in a hidden city beneath the planet’s surface. . . .`,
  releaseDate: "November 14, 2023",
  },
  {
    id: "convergence",
    title: "Convergence",
    author: "Zoraida Córdova",
    timelinePlacement: -382.0,
    timelineLabel: "382 BBY",
    bookType: ["Adult"],
    coverUrl: getCanonCover("convergence.jpg"),
    amazonLink: "https://amzn.to/4ubETwq",
    description: `It is an age of exploration. Jedi travel the galaxy, expanding their understanding of the Force and all the worlds and beings connected by it. Meanwhile, the Republic, led by its two chancellors, works to unite worlds in an ever-growing community among near and distant stars.

On the close-orbiting planets of Eiram and E'ronoh, the growing pains of a galaxy with limited resources but unlimited ambition are felt keenly. The two worlds' hatred for each other has fueled half a decade of escalating conflict and now threatens to consume surrounding systems. The last hope for peace emerges when heirs from the planets' royal families plan to marry.

Before lasting peace can be established, an assassination attempt targeting the couple tilts Eiram and E'ronoh back into all-out war. To save both worlds, Jedi Knight Gella Nattai volunteers to uncover the culprit, while Chancellor Kyong appoints her own son, Axel Greylark, to represent the Republic's interests in the investigation.

But Axel's deep distrust of the Jedi sparks against Gella's faith in the Force. She's never met such a puffed-up, privileged party boy, and he's never met a more self-serious, relentless do-gooder. The harder they work to untangle the shadowy web of the investigation, the more complicated the conspiracy appears to be. With accusations flying and potential enemies in every shadow, the pair will have to work together to have any hope of bringing the truth to light and saving both worlds.`,
    releaseDate: "November 22, 2022",
  },
  {
    id: "path-of-deceit",
    title: "Path of Deceit",
    author: "Tessa Gratton, Justina Ireland",
    timelinePlacement: -382.0,
    timelineLabel: "382 BBY",
    bookType: ["Young Adult"],
    coverUrl: getCanonCover("pathofdeceit.jpg"),
    amazonLink: "https://amzn.to/3RaNzom",
    description: `Set in the world of the High Republic, 150 years before the storytelling of Phase I, an era of change brings new hopes and possibilities . . . but also new dangers.

The Outer Rim planet Dalna has become the focus of a Jedi investigation into a stolen Force artifact, and Zallah Macri and her Padawan, Kevmo Zink, arrive on the pastoral world to follow up on a possible connection to a Dalnan missionary group called the Path of the Open Hand. Members of the Path believe that the Force must be free and should not be used by anyone, not even the Jedi. One such believer is Marda Ro, a young woman who dreams of leaving Dalna to spread word of the Path throughout the galaxy.

When Marda and Kevmo meet, their connection is instantaneous and electric—until Marda discovers Kevmo is a Jedi. But Kevmo is so kind and eager to learn more about the Path, that she hopes she can convince him of the rightness of her beliefs. What Marda doesn’t realize is that the leader of the Path, a charismatic woman known only as the Mother, has an agenda of her own, and it is one that can never coexist peacefully with the Jedi.

In order to follow her faith, Marda may have to choose to become her new friend’s worst enemy. . . .`,
    releaseDate: "October 4, 2022",
  },
  {
    id: "the-battle-of-jedha",
    title: "The Battle of Jedha",
    author: "George Mann",
    timelinePlacement: -382.0,
    timelineLabel: "382 BBY",
    bookType: ["Script Book"],
    coverUrl: getCanonCover("Battle-Jedha-script-Final.jpg"),
    amazonLink: "https://amzn.to/4dcqGtp",
    description: `After the events of The High Republic: Convergence, the Jedi travel to Jedha in this full script for the Star Wars audio original The Battle of Jedha.

Jedha. The worn streets of this ancient world serve as a confluence for the galaxy. Visited by all, yet owned by none. Here, the Jedi are but one creed among many worshipping and studying the Force. From the Guardians of the Whills to the Path of the Open Hand, countless beings come to learn, and to share, in peace.

As all of Jedha prepares for its Festival of Balance, the galaxy still reels from the violence on Eiram and E’ronoh. But after foiling a plot to escalate the war between the two planets, the Jedi believe that a lasting peace may be within reach. Master Creighton Sun and Jedi Knight Aida Forte arrive on Jedha with delegations from both planets to formally end the “Forever War.” The Jedi hope that the harmony of Jedha’s many factions, along with the signing of a peace treaty, will create a symbol to the rest of the galaxy of what can be accomplished through unity.

But not all are happy with the Jedi’s involvement or ready to concern themselves with peace. Rumors begin to swirl that the Jedi bring war in their wake. The distrust and anger that for so long fueled the Forever War now threaten to corrupt the communities of Jedha. When violence breaks out on the sacred moon, the war that was meant to end on Jedha may soon engulf the entire world.`,
    releaseDate: "February 14, 2023",
  },
  {
    id: "quest-for-planet-x",
    title: "Quest for Planet X",
    author: "Tessa Gratton",
    timelinePlacement: -382.0,
    timelineLabel: "382 BBY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("QuestForPlanetX.jpg"),
    amazonLink: "https://amzn.to/4uS3Sow",
    description: `A trio of adventure-seekers set off to find the legendary Planet X and save the galaxy as they know it!

Despite rumors of conflict between the Jedi and the Path of the Open Hand, two of the Republic’s most powerful prospecting families announce a contest to chart new hyperlanes.

Under the guise of joining the competition, Dass Leffbruk and Sky Graf recruit Jedi padawan Rooper Nitani, only to reveal their real plan: find the mysterious and legendary Planet X. The trio’s quest takes an unexpected turn when they meet members of the Path of the Open Hand, forcing the heroes to put their goals aside to help the Jedi—and the galaxy—before it’s too late.`,
    releaseDate: "April 4, 2023",
  },
  {
    id: "path-of-vengeance",
    title: "Path of Vengeance",
    author: "Cavan Scott",
    timelinePlacement: -382.0,
    timelineLabel: "382 BBY",
    bookType: ["Young Adult"],
    coverUrl: getCanonCover("pathofvengeance.jpg"),
    amazonLink: "https://amzn.to/4nv2KVi",
    description: `This enthralling follow up to Path of Deceit finds cousins Marda and Yana Ro bound by blood but driven apart by faith.

Marda and Yana belong to the Path of the Open Hand, a group led by a charismatic woman called the Mother, which believes the Force must not be used by anyone. While Marda joins a perilous expedition to Planet X in search of more mysterious creatures to use against the Jedi, Yana finds herself forming an unexpected alliance with the father of her dead lover in attempt to wrest the Path from the Mother’s control. These two young women will face a crossroads, forced to choose not only their own fates, but that of the galaxy itself.`,
    releaseDate: "May 2, 2023",
  },
  {
    id: "cataclysm",
    title: "Cataclysm",
    author: "Lydia Kang",
    timelinePlacement: -382.0,
    timelineLabel: "382 BBY",
    bookType: ["Adult"],
    coverUrl: getCanonCover("cataclysm.jpg"),
    amazonLink: "https://amzn.to/43aZN2W",
    description: `After the thrilling events of The High Republic: Convergence, the Jedi race to confront the Path of the Open Hand and end the Forever War.

After five years of conflict, the planets Eiram and E'ronoh are on the cusp of real peace. But when news breaks of a disaster at the treaty signing on Jedha, violence reignites on the beleaguered worlds. Together, the royal heirs of both planets—Phan-tu Zenn and Xiri A'lbaran—working alongside the Jedi, have uncovered evidence that the conflict is being orchestrated by outside forces, and all signs point to the mysterious Path of the Open Hand, whom the Jedi also suspect of causing the disaster on Jedha.

With time—and answers—in short supply, the Jedi must divide their focus between helping quell the renewed violence on Eiram and E'ronoh and investigating the Path. Among them is Gella Nattai, who turns to the one person she believes can unravel the mystery but the last person she wants to trust: Axel Greylark. The chancellor's son, imprisoned for his crimes, has always sought to unburden himself of the weight of his family name. Will he reconcile with the Jedi and aid in their quest for justice and peace, or embrace the Path's promise of true freedom?

As all roads lead to Dalna, Gella and her allies prepare to take on a foe unlike any they've ever faced. And it will take all of their trust in the Force, and in one another, to survive.`,
    releaseDate: "April 4, 2023",
  },
  {
    id: "myths-and-fables",
    title: "Myths & Fables",
    author: "George Mann",
    timelinePlacement: 50.0,
    timelineLabel: "30,000+ BBY-34 ABY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("Myths-Fables.jpg"),
    amazonLink: "https://amzn.to/3PzSSgv",
    description: `Travel to the far reaches of the Star Wars universe--including to the remote outer rim world of Batuu from Galaxy's Edge--with this unique treasury of in-world space tales.

Featuring lush illustrations, this beautiful collection includes nine original fairy tales, myths, and fables.

Passed down through generations, spanning millennia, carried from planet to planet, these are the legends that bind the galaxy together.`,
    releaseDate: "August 6, 2019",
  },
  {
    id: "dark-legends",
    title: "Dark Legends",
    author: "George Mann",
    timelinePlacement: 50.0,
    timelineLabel: "5,000 BBY-1,032 BBY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("DarkLegendsCoverArt.jpg"),
    amazonLink: "https://amzn.to/4nGvSch",
    description: `Read on if you dare! This unique in-world collection hallows the spooky tales and ghost stories that would have kept young Luke and Leia up at night. Created by George Mann and Grant Griffin--the same team behind the stunning Star Wars: Myths & Fables--these seven frightful fables have been carefully woven from the expansive fabric that is the Star Wars galaxy (including the thrilling landscape from Galaxy's Edge at Disneyland and Disney World), and beautifully painted in a lush illustrative style that feels intergalactic yet innately archetypal and timeless.`,
    releaseDate: "July 28, 2020",
  },
  {
    id: "tales-of-light-and-life",
    title: "Tales of Light and Life",
    author: "Various Authors",
    timelinePlacement: 50.0,
    timelineLabel: "396-229 BBY",
    bookType: ["Young Adult"],
    coverUrl: getCanonCover("TalesOfLightAndLife-Cover.jpg"),
    amazonLink: "https://amzn.to/4tBUhBq",
    description: `Thrilling short stories featuring fan favorite characters from the beloved High Republic series each written by a New York Times bestselling author.

Rejoin the adventures of the Jedi and Padawans, Pathfinders and Path members, and heroes and villains in these unmissable short stories that bridge storylines, resolve mysteries, and offer tantalizing hints of what is to come.

Zoraida Córdova, Tessa Gratton, Claudia Gray, Justina Ireland, Lydia Kang, George Mann, Daniel José Older, Cavan Scott, and Charles Soule`,
    releaseDate: "September 5, 2023",
  },
  {
    id: "tales-of-enlightenment",
    title: "Tales of Enlightenment",
    author: "George Mann",
    timelinePlacement: 50.0,
    timelineLabel: "382 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://prodimage.images-bn.com/pimages/9781787746657_p0_v2_s600x595.jpg",
    amazonLink: "https://amzn.to/4dvt90T",
    description:
      "A collection of tales set centuries before the birth of Anakin Skywalker featuring Jedi Knights during the era of the glorious High Republic. In addition to six original stories, this collection also includes behind-the-scenes interviews with authors as well as a guide to Phase II of The High Republic publishing initiative.",
    releaseDate: "April 2, 2024",
  },
  {
    id: "stories-of-jedi-and-sith",
    title: "Stories of Jedi and Sith",
    author: "Lydia Kang",
    timelinePlacement: 50.0,
    timelineLabel: "234 BBY-34 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81L+JaVPCrL._SY522_.jpg",
    amazonLink: "https://amzn.to/4wCsXp8",
    description: `THE ETERNAL FIGHT BETWEEN GOOD AND EVIL…

The brave Jedi vs the devious Sith! Just in time to celebrate the highly-anticipated re-match between Obi-Wan Kenobi and Darth Vader in the Disney+ event Obi-Wan Kenobi, here are ten original stories about the the valiant Jedi and the evil Sith. Larger-than-life characters clash in epic lightsaber battles that will appeal to young readers and to the young Star Wars fan in all of us! Ten acclaimed authors imagine new tales for some of the most iconic Star Wars characters ever, from Luke Skywalker to Darth Vader, from Obi-Wan Kenobi to Darth Maul, and beyond.`,
    releaseDate: "June 7, 2022",
  },
  {
    id: "starlight-stories",
    title: "Starlight Stories",
    author: "Charles Soule, Cavan Scott, Justina Ireland",
    timelinePlacement: 50.0,
    timelineLabel: "232-230 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1654054160i/60280550.jpg",
    amazonLink: "https://amzn.to/3PFrM7S",
    description: `Titan Comics, publisher of the official Star Wars Insider magazine, is proud to offer an amazing collection of exclusive short stories for Star Wars: The High Republic.

Written by The New York Times’ best-selling authors Cavan Scott, Charles Soule, and Justina Ireland, with supporting original illustrations by Louie De Martinis.

EXPERIENCE THE GALAXY CENTURIES BEFORE THE STRUGGLE OF THE REBEL ALLIANCE AGAINST THE GALACTIC EMPIRE—AT THE HEIGHT OF THE JEDI ORDER!

A compendium of tales from the High Republic era, told from aboard the incredible satellite station, the Starlight Beacon, collected for the first time from the pages of Star Wars Insider.

All stories are written by The New York Times’ best-selling authors Cavan Scott, Charles Soule, and Justina Ireland.

Also includes in-depth interviews with the story architects behind the best-selling publishing and multimedia initiative.

Stories included:

“Go Together” by Charles Soule

“First Duty” by Cavan Scott

“Hidden Danger” by Justina Ireland

“Past Mistakes” by Cavan Scott

“Shadows Remain” by Justina Ireland`,
    releaseDate: "December 13, 2022",
  },
  {
    id: "life-day-treasury",
    title: "Life Day Treasury",
    author: "George Mann & Cavan Scott",
    timelinePlacement: 50.0,
    timelineLabel: "232 BBY-32 ABY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("LifeDayTreasury-cover.jpg"),
    amazonLink: "https://amzn.to/4dAAmwK",
    description: `Cozy up with this collection of holiday-themed midwinter stories from throughout the galaxy far, far away!

From George Mann and Grant Griffin, the same team that brought us the stunning Star Wars: Myths & Fables and Star Wars: Dark Legends–with the addition of best-selling author Cavan Scott–this collection of eight myths and fables told around winter fires and high-tech heating pods across the galaxy will bring holiday joy to young and old Star Wars fans alike. From Jedi in the city to Ewoks in the forest, from Wookiees to droids, in this charming collection you will find holiday feasts, ghostly apparitions, snowy adventures, and much more. Ultimately these are stories of hope in the darkest of days. Of family, found and otherwise. Of kindness. And of love.`,
    releaseDate: "September 7, 2021",
  },
  {
    id: "aliens-volume-i",
    title: "Tales from a Galaxy Far, Far Away: Aliens: Volume I",
    author: "Landry Q. Walker",
    timelinePlacement: 50.0,
    timelineLabel: "146 BBY-34 ABY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("aliens.jpg"),
    amazonLink: "https://amzn.to/4uS4wlS",
    description: `The worlds of Star Wars are full of countless alien species, each stranger and more fascinating than the last. Here you'll find six stories for kids about just some of the amazing aliens who appear in the smash-hit movie Star Wars: The Force Awakens. Featuring a dashing tale of piracy and double crosses, the story of a wise Jakku constable and an unfortunate droid, and a mystery that can be solved only by the gruff cook at Maz Kanata's castle, this collection will bring thrills and chills as it takes you deep into the corners of your favorite galaxy far, far away. . . .

Constable Zuvio must get to the bottom of things when a faithful droid commits a bank robbery in "High Noon on Jakku."
The Frigosian cryptosurgeons of Takodana give a criminal on the run just what she asks for in "The Face of Evil."
The repugnant scrap trader Unkar Plutt may finally have met his match in the twisty tale "True Love."
Bobbajo the Crittermonger spins a tale of bravery against impossible odds in the fable "All Creatures Great and Small."
When his sous chef turns up dead, the cook at Maz Kanata's castle holds an unusual competition to find the culprit in "A Recipe for Death."
And pirates, gangs, and bounty hunters alike race to find precious cargo in "The Crimson Corsair and the Lost Treasure of Count Dooku."`,
    releaseDate: "September 7, 2021",
  },
  {
    id: "stories-of-light-and-dark",
    title: "The Clone Wars: Stories of Light and Dark",
    author: "Various Authors",
    timelinePlacement: 50.0,
    timelineLabel: "22-19 BBY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("clonewars.jpg"),
    amazonLink: "https://amzn.to/3RQzgWa",
    description: `From Anakin to Yoda, Count Dooku to Darth Maul, this exciting middle-grade anthology will recount different explosive events from The Clone Wars from the points of view everyone's favorite characters - with each character written by a different popular author.

An epic clash between the forces of light and dark, between the Galactic Republic and the Separatists, between brave heroes and brilliant villains…the fate of the galaxy is at stake in the Emmy Award-winning animated series, Star Wars: The Clone Wars.

In this exciting anthology, eleven authors who are also fans of the series bring stories from their favorite show to life. Gathered here are memorable moments and stunning adventures, from attempted assassinations to stolen bounties, from lessons learned to loves lost. All of your favorite characters from The Clone Wars are here: Anakin Skywalker, Yoda, Obi-Wan Kenobi, Ahsoka Tano, Captain Rex, Darth Maul, Count Dooku and more!

Contributors: Lou Anders, Tom Angleberger, Preeti Chhibber, E. Anne Convery, Zoraida Córdova, Sarah Beth Durst, Jason Fry, Yoon Ha Lee, Rebecca Roanhorse, Anne Ursu, Greg van Eekhout`,
    releaseDate: "June 7, 2022",
  },
  {
    id: "rise-of-the-empire",
    title: "The Rise of the Empire",
    author: "Various Authors",
    timelinePlacement: 50.0,
    timelineLabel: "14-4 BBY",
    bookType: ["Adult"],
    coverUrl: getCanonCover("riseofempire.jpg"),
    amazonLink: "https://amzn.to/4nETHS3",
    description: `Witness the rise of the Empire with these two thrilling Star Wars novels—plus exclusive short stories by Melissa Scott, John Jackson Miller, and Jason Fry!
 
TARKIN
 
“Compelling . . . The villains of Star Wars are as much fun as the good guys.”—New York Daily News
 
Under Governor Wilhuff Tarkin’s guidance, an ultimate weapon of unparalleled destruction—the so-called Death Star—moves ever closer to becoming a terrifying reality. Until then, insurgency remains a genuine threat. Guerrilla attacks by an elusive band of freedom fighters must be countered with swift and brutal action—a mission the Emperor entrusts to his most formidable agents: Darth Vader, the fearsome new Sith enforcer, and Tarkin, whose tactical cunning and cold-blooded efficiency will pave the way for the Empire’s supremacy—and its enemies’ extinction.
 
A NEW DAWN
Foreword by Dave Filoni
 
“A story with pacing and dialogue that feels like classic Star Wars.”—Nerdist
 
Ever since the Jedi were marked for death, Kanan Jarrus has devoted himself to staying alive rather than serving the Force. So when he discovers a conflict brewing between Imperial forces and desperate revolutionaries, he’s not about to get caught in the crossfire. Then the brutal death of a friend forces him to choose between bowing down to fear or standing up to fight. But Jarrus won’t be fighting alone. Soon he is joined by Hera Syndulla—a mysterious agent provocateur with motives of her own—in challenging the Empire for the sake of a world and its people.`,
    releaseDate: "October 6, 2015",
  },
  {
    id: "star-wars-from-a-certain-point-of-view",
    title: "Star Wars: From a Certain Point of View",
    author: "Various Authors",
    timelinePlacement: 50.0,
    timelineLabel: "0 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://covers.openlibrary.org/b/id/15201181-L.jpg",
    amazonLink: "https://amzn.to/4nAE8ea",
    description: `Forty years. Forty stories.

On May 25, 1977, the world was introduced to Han, Luke, Leia, a pair of droids, a Wookiee, an old wizard, a villain in black, and a galaxy full of possibilities. Forty years on, Star Wars remains an unparalleled cultural phenomenon, having inspired and influenced generations of fans and creators. Decades of rich storytelling were sparked by one film, in part because the Star Wars galaxy feels alive. Strange and wonderful characters fill the edges of the screen and make us wonder:

What are their stories?

This unique anthology celebrates that legacy, as more than forty contributors lend their vision to this retelling of the original Star Wars film. Each of the forty stories reimagines a moment from the film through the eyes of a supporting character. From A Certain Point of View features contributions by bestselling authors, trendsetting artists, and treasured voices from the literary history of Star Wars:

- Gary Whitta bridges the gap from Rogue One to A New Hope through the eyes of Captain Antilles.
- Aunt Beru finds her voice in an intimate character study by Meg Cabot.
- Nnedi Okorafor brings dignity and depth to a most unlikely character: the monster in the trash compactor.
- Pablo Hidalgo provides a chilling glimpse inside the mind of Grand Moff Tarkin.
- Wil Wheaton spins a poignant tale of the rebels left behind on Yavin.
- Plus thirty-five more hilarious, heartbreaking, and astonishing tales.

Experience the story of Star Wars from a whole new point of view.`,
    releaseDate: "October 3, 2017",
  },
  {
    id: "from-a-certain-point-of-view-the-empire-strikes-back",
    title:
      "From a Certain Point of View: The Empire Strikes Back",
    author: "Various Authors",
    timelinePlacement: 50.0,
    timelineLabel: "3 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1722459055i/55059716.jpg",
    amazonLink: "https://amzn.to/4dvafHn",
    description: `From a Certain Point of View strikes back! Celebrate the legacy of the groundbreaking Star Wars sequel with this exciting reimagining of the timeless film.

On May 21, 1980, Star Wars became a true saga with the release of The Empire Strikes Back. In honor of the fortieth anniversary, forty storytellers recreate an iconic scene from The Empire Strikes Back, through the eyes of a supporting character, from heroes and villains to droids and creatures. From a Certain Point of View features contributions by bestselling authors and trendsetting artists.`,
    releaseDate: "November 10, 2020",
  },
  {
    id: "from-a-certain-point-of-view-return-of-the-jedi",
    title: "From a Certain Point of View: Return of the Jedi",
    author: "Various Authors",
    timelinePlacement: 50.0,
    timelineLabel: "4 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715212976i/213082205.jpg",
    amazonLink: "https://amzn.to/3PKQKCN",
    description: `Celebrate the lasting impact of Return of the Jedi with this exciting reimagining of the timeless Star Wars film featuring new perspectives from forty contributors.

On May 25, 1983, Star Wars cemented its legacy as the greatest movie franchise of all time with the release of Return of the Jedi. In honor of the fortieth anniversary, forty storytellers re-create an iconic scene from Return of the Jedi through the eyes of a supporting character, from heroes and villains, to droids and creatures. From a Certain Point of View features contributions by bestselling authors and trendsetting artists:

• Olivie Blake provides a chilling glimpse into the mind of Emperor Palpatine.
• Saladin Ahmed recounts the tragic history of the rancor trainer.
• Charlie Jane Anders explores the life and times of the Sarlacc.
• Fran Wilde reveals Mon Mothma's secret mission to save the Rebel Alliance.
• Mary Kenney chronicles Wicket the Ewok's quest for one quiet day on the forest moon of Endor.
• Anakin Skywalker becomes one with the Force in a gripping tale by Mike Chen.

Plus more hilarious, heartbreaking, and astonishing tales from:
Tom Angleberger, Kristin Baver, Akemi Dawn Bowman, Emma Mieko Candon, Olivia Chadha, Gloria Chao, Adam Christopher, Paul Crilley, Amal El-Mohtar, M. K. England, Jason Fry, Adam Lance Garcia, Lamar Giles, Max Gladstone, Thea Guanzon, Ali Hazelwood, Patricia A. Jackson, Alex Jennings, Jarrett Krosoczka, Sarah Kuhn, Danny Lore, Sarah Glenn Marsh, Kwame Mbalia, Marieke Nijkamp, Danielle Paige, Laura Pohl, K. Arsenault Rivera, Dana Schwartz, Tara Sim, Phil Szostak, Suzanne Walker, Hannah Whitten, Sean Williams, Alyssa Wong`,
    releaseDate: "August 29, 2023",
  },
  {
    id: "canto-bight",
    title: "Canto Bight",
    author:
      "Saladin Ahmed, Rae Carson, Mira Grant, John Jackson Miller",
    timelinePlacement: 50.0,
    timelineLabel: "34 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1505354146i/35798468.jpg",
    amazonLink: "https://amzn.to/3R18nPf",
    description:
      "As seen in Star The Last Jedi, welcome to the casino city of Canto Bight. A place where exotic aliens, captivating creatures, and other would-be high rollers are willing to risk everything to make their fortunes. Set across one fateful evening, these four interconnected stories explore the deception and danger of the lavish casino city.• An honest salesman meets a career criminal as a dream vacation turns into the worst nightmare imaginable, in a story by Saladin Ahmed.• Dreams and schemes collide when a deal over a priceless bottle of wine becomes a struggle for survival, as told by Mira Grant.• Old habits die hard when a servant is forced into a mad struggle for power among Canto Bight’s elite, in a tale by Rae Carson• A deadbeat gambler has one last chance to turn his luck around; all he has to do is survive one wild night, as told by John Jackson Miller.   In Canto Bight, one is free to revel in excess, untouched from the problems of a galaxy once again descending into chaos and war. Dreams can become reality, but the stakes have never been higher—for there is a darkness obscured by all the glamour and luxury.",
    releaseDate: "December 5, 2017",
  },
  {
    id: "into-the-dark",
    title: "Into the Dark",
    author: "Claudia Gray",
    timelinePlacement: -232.0,
    timelineLabel: "232 BBY",
    bookType: ["Young Adult"],
    coverUrl: getCanonCover("intothedark.jpg"),
    amazonLink: "https://amzn.to/4nv2MMU",
    description: `Not everyone who hears the call to adventure wants to answer it....

Jedi Padawan Reath Silas loves adventure—reading about it, that is, not living it. Content to spend hours browsing the Jedi Archives on Coruscant, Reath dreams of being one of the great scholars of the Jedi Order. But Reath's master, the well-respected and virtuous Jora Malli, has other plans: she's taken a post at Starlight Beacon, the Republic's shining new outpost on the edge of known space. As her Padawan, Reath must join her, whether he likes the idea or not. (And he most definitely does not.)

So Reath reluctantly boards the ship that will take him and a few other Jedi to the dedication of Starlight Beacon, where Master Jora waits for him to start their new adventurous life on the frontier. But trouble in hyperspace leaves the ship and other nearby vessels stranded, with only an eerie abandoned space station reachable for shelter. And the secrets hidden there will not only bring Reath to a crossroads but, if left unchecked, could plunge the entire galaxy into darkness....`,
    releaseDate: "February 2, 2021",
  },
  {
    id: "light-of-the-jedi",
    title: "Light of the Jedi",
    author: "Charles Soule",
    timelinePlacement: -232.0,
    timelineLabel: "232 BBY",
    bookType: ["Adult"],
    coverUrl: getCanonCover("Light_of_the_Jedi_cover.jpg"),
    amazonLink: "https://amzn.to/4tG5m4v",
    description: `Long before the First Order, before the Empire, before the Clone Wars...Jedi lit the way for the galaxy in the High Republic.

It is a golden age. Intrepid hyperspace scouts expand the reach of the Republic to the farthest stars, worlds flourish under the benevolent leadership of the Senate, and peace reigns, enforced by the wisdom and strength of the renowned order of Force users known as the Jedi. With the Jedi at the height of their power, the free citizens of the galaxy are confident in their ability to weather any storm. But even the brightest light can cast a shadow, and some storms defy any preparation.

When a shocking catastrophe in hyperspace tears a ship to pieces, the flurry of shrapnel emerging from the disaster threatens an entire system. No sooner does the call for help go out than the Jedi race to the scene. The scope of the emergence, however, is enough to push even Jedi to their limit. As the sky breaks open and destruction rains down upon the peaceful alliance they helped to build, the Jedi must trust in the Force to see them through a day in which a single mistake could cost billions of lives.

Even as the Jedi battle valiantly against calamity, something truly deadly grows beyond the boundary of the Republic. The hyperspace disaster is far more sinister than the Jedi could ever suspect. A threat hides in the darkness, far from the light of the age, and harbors a secret that could strike fear into even a Jedi's heart.`,
    releaseDate: "January 5, 2021",
  },
  {
    id: "a-test-of-courage",
    title: "A Test of Courage",
    author: "Justina Ireland",
    timelinePlacement: -232.0,
    timelineLabel: "232 BBY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("testofcourage.jpg"),
    amazonLink: "https://amzn.to/4tGGKsb",
    description: `Long before the Clone Wars, the Empire, or the First Order, the Jedi lit the way for the galaxy in a golden age known as the High Republic!

Vernestra Rwoh is a new Jedi Knight at age sixteen, but her first real assignment feels an awful lot like babysitting. She’s been charged with supervising twelve-year old aspiring inventor Avon Starros on a cruiser headed to the dedication of a wondrous new space station called Starlight Beacon.

But soon into their journey, bombs go off aboard the cruiser. While the adult Jedi try to save the ship, Vernestra, Avon, Avon’s droid J-6, a Jedi Padawan, and an ambassador’s son make it to an escape shuttle, but communications are out and supplies are low. They decide to land on a nearby moon, which offers shelter but not much more. And unbeknownst to them, danger lurks in the forest….`,
    releaseDate: "January 5, 2021",
  },
  {
    id: "the-rising-storm",
    title: "The Rising Storm",
    author: "Cavan Scott",
    timelinePlacement: -231.0,
    timelineLabel: "231 BBY",
    bookType: ["Adult"],
    coverUrl: getCanonCover("risingstorm.jpg"),
    amazonLink: "https://amzn.to/3Pu5hT8",
    description: `The heroes of the High Republic era return to face a shattered peace and a fearsome foe, following the dramatic events of Light of the Jedi.

In the wake of the hyperspace disaster and the heroism of the Jedi, the Republic continues to grow, bringing more worlds together under a single unified banner. Under the leadership of Chancellor Lina Soh, the spirit of unity extends throughout the galaxy, with the Jedi and the newly established Starlight Beacon station at the vanguard.

In celebration, the chancellor plans the Republic Fair, a showcase of the possibilities and the peace of the expanding Republic—a peace the Jedi hope to foster. Stellan Gios, Bell Zettifar, Elzar Mann, and others join the event as ambassadors of harmony. But as the eyes of the galaxy turn toward the fair, so too does the fury of the Nihil. Their leader, Marchion Ro, is intent on destroying this unity. His storm descends on the pageantry and celebration, sowing chaos and exacting revenge.

As the Jedi struggle to curb the carnage of the rampaging Nihil, they come face-to-face with the true fear their enemy plans to unleash across the galaxy—the kind of fear from which even the Force cannot shield them.`,
    releaseDate: "June 29, 2021",
  },
  {
    id: "race-to-crashpoint-tower",
    title: "Race to Crashpoint Tower",
    author: "Daniel José Older",
    timelinePlacement: -231.0,
    timelineLabel: "231 BBY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("crashpointtower.jpg"),
    amazonLink: "https://amzn.to/4ug85Cy",
    description: `The Republic Fair is coming! Visitors from all over the galaxy are traveling to the planet Valo for a massive, awe-inspiring festival celebrating the Republic. While his fellow Valons prepare for the fair, Jedi Padawan Ram Jomaram is hiding out in his favorite place: a dingy garage filled with mechanical parts and tools. But when a security alarm goes off on the nearby hilltop nicknamed Crashpoint Peak, he ventures out with his trusty droid V-18 to investigate. There he discovers that someone has knocked out Valo’s communications tower—a frightening sign that Valo, and the Republic Fair, are in danger. Sure enough, as Ram races to warn the Jedi, the dreaded Nihil unleash a surprise attack! It’s up to Ram to face down the enemy at Crashpoint Tower and send a call for help to the Republic. Luckily, he’s about to get some assistance from unexpected new friends…`,
    releaseDate: "June 29, 2021",
  },
  {
    id: "out-of-the-shadows",
    title: "Out of the Shadows",
    author: "Justina Ireland",
    timelinePlacement: -231.0,
    timelineLabel: "231 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1623669656i/55660422.jpg",
    amazonLink: "https://amzn.to/4ds2VMA",
    description: `The darkest secrets are the hardest to bring to light....

Sylvestri Yarrow is on a streak of bad luck with no end of sight. She's been doing her best to keep the family cargo business going after her mom's death, but between mounting debt and increasing attacks by the Nihil on unsuspecting ships, Syl is in danger of losing all she has left of her mother. She heads to the galactic capital of Coruscant for help, but gets sidetracked when she's drawn into a squabble between two of the Republic's most powerful families over a patch of space on the frontier. Tangled up in familial politics is the last place Syl wants to be, but the promise of a big payoff is enough to keep her interested...

Meanwhile, Jedi Knight Vernestra Rwoh has been summoned to Coruscant, but with no idea of why or by whom. She and her Padawan Imri Cantaros arrive at the capital along with Jedi Master Cohmac Vitus and his Padawan, Reath Silas--and are asked to assist with the property dispute on the frontier. But why? What is so important about an empty patch of space? The answer will lead Vernestra to a new understanding of her abilities, and take Syl back to the past...and to truths that will finally come out of the shadows.`,
    releaseDate: "July 27, 2021",
  },
  {
    id: "escape-from-valo",
    title: "Escape from Valo",
    author: "Daniel José Older and Alyssa Wong",
    timelinePlacement: -229.0,
    timelineLabel: "229-228 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1707042064i/207222509.jpg",
    amazonLink: "https://amzn.to/43b7Mgr",
    description: `Centuries before the Clone Wars or the Empire, it is a dangerous time for the galaxy, and the Jedi of the High Republic must face their greatest trials yet. . . .

The villainous Nihil control an area of space known as the Occlusion Zone, where no one is safe, least of all Jedi. One of the Jedi stuck behind enemy lines is Padawan Ram Jomaram, doing his best to help the people of his home planet, Valo, survive Nihil occupation while keeping his Jedi identity hidden. When Ram discovers a trio of young Jedi living in the ruins of the city zoo, he finds himself in a position he never could have imagined: leader.

Ram and the others will have to band together to face their fears and protect the people of Valo as only the Jedi can!`,
    releaseDate: "January 30, 2024",
  },
  {
    id: "the-eye-of-darkness",
    title: "The Eye of Darkness",
    author: "George Mann",
    timelinePlacement: -229.0,
    timelineLabel: "229 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1688639575i/124025517.jpg",
    amazonLink: "https://amzn.to/4nv2Oo0",
    description: `One year after the tragic events of The Fallen Star, the Jedi fight to break the Nihil’s control over the galaxy.

The galaxy is divided. Following the shocking destruction of Starlight Beacon, the Nihil have established an impenetrable barrier called the Stormwall around part of the Outer Rim, where Marchion Ro rules and his followers wreak havoc at his every whim. Jedi trapped behind enemy lines, including Avar Kriss, must fight to help the worlds being pillaged by the Nihil while staying one step ahead of the marauders and their Nameless terrors.

Outside of the Nihil’s so-called Occlusion Zone, Elzar Mann, Bell Zettifar, and the other Jedi work alongside the Republic to reach the worlds that have been cut off from the rest of the galaxy. But every attempt to breach the Stormwall has failed, and even communication across the barrier is impossible. The failures and losses weigh heavily upon both Elzar and Bell as they search desperately for a solution.

But even if the Republic and Jedi forces manage to breach the Stormwall, how can the Jedi fight back against the Nameless creatures that prey on the Jedi’s connection to the Force? And what other horrors does Marchion Ro have in store? As desperation for both the Jedi and the Republic grows, any hope of reuniting the galaxy could be all but extinguished. . . .`,
    releaseDate: "November 14, 2023",
  },
  {
    id: "tempest-runner",
    title: "Tempest Runner",
    author: "Cavan Scott",
    timelinePlacement: -231.0,
    timelineLabel: "231 BBY",
    bookType: ["Script Book"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677852376i/60764294.jpg",
    amazonLink: "https://amzn.to/42BC0ch",
    description: `Delve into the cutthroat world of one of the High Republic’s greatest foes, the merciless Lourna Dee, in this full script for the Star Wars audio original Tempest Runner.
 
The Nihil storm has raged through the galaxy, leaving chaos and grief in its wake. Few of its raiders are as vicious as the Tempest Runner Lourna Dee. She stays one step ahead of the Jedi Order at the helm of a vessel named after one of the deadliest monsters in the galaxy: herself. But no one can outrun the defenders of the High Republic forever.
 
After the defeat of her crew, Lourna falls into the hands of the Jedi—but not before she hides her identity, becoming just another Nihil convict. Her captors fail to understand the beast they have cornered. Just like every fool she’s ever buried, their first mistake was keeping her alive.
 
Lourna is determined to make underestimating her their last.
 
Locked up on a Republic correctional ship, she’s dragged across the galaxy to repair the very damage she and her fellow Tempest Runners inflicted. But as Lourna plans her glorious escape, she makes alliances that grow dangerously close to friendships. Outside the Nihil—separated from her infamous ship, her terrifying arsenal, and her feared name—Lourna must carve her own path. But will it lead to redemption? Or will she emerge as a deadlier threat than ever before?`,
    releaseDate: "August 31, 2021",
  },
  {
    id: "mission-to-disaster",
    title: "Mission to Disaster",
    author: "Justina Ireland",
    timelinePlacement: -230.0,
    timelineLabel: "230 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1646194514i/60534261.jpg",
    amazonLink: "https://amzn.to/3Pk93i5",
    description: `The Jedi think the dreaded Nihil marauders have been all but defeated. Their leader is on the run and their numbers have dwindled. Jedi Knight Vernestra Rwoh hopes this means she will finally have time to really train her Padawan, Imri Cantaros—but reports of a Nihil attack on Port Haileap soon dash those hopes. For not only have the Nihil attacked the peaceful outpost, they have abducted Vernestra and Imri’s friend, Avon Starros. The two Jedi set off for Port Haileap, determined to figure out where the Nihil have taken their friend. Meanwhile, Avon must put her smarts and skills to the ultimate test as she fights for survival among the Nihil—and uncovers a sinister plan. Can Vernestra and Imri find their friend before disaster strikes?`,
    releaseDate: "January 4, 2022",
  },
  {
    id: "midnight-horizon",
    title: "Midnight Horizon",
    author: "Daniel José Older",
    timelinePlacement: -230.0,
    timelineLabel: "230 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1633476423i/58640333.jpg",
    amazonLink: "https://amzn.to/4tLOJEA",
    description: `Centuries before the events of Star Wars: The Phantom Menace, in the era of the glorious High Republic, the Jedi are the guardians of peace and justice in the galaxy!

After a series of staggering losses, the Republic seems to finally have the villainous Nihil marauders on the run, and it looks like there’s light at the end of the tunnel. Until word comes of a suspected Nihil attack on the industrial cosmopolitan world of Corellia, right in the Galactic Core.

Sent to investigate are Jedi Masters Cohmac Vitus and Kantam Sy, along with Padawans Reath Silas and Ram Jomaram, all fighting their own private battles after months of unrelenting danger. On Corellia, Reath and Ram encounter a brazen young security specialist named Crash, whose friend was one of the victims of the Nihil attack, and they team up with her to infiltrate Corellia’s elite while the Masters pursue more diplomatic avenues. But going undercover with Crash is more dangerous than anyone expected, even as Ram pulls in his friend Zeen to help with an elaborate ruse involving a galactic pop star.

But what they uncover on Corellia turns out to be just one part of a greater plan, one that could lead the Jedi to their most stunning defeat yet….

The New York Times best-selling series continues.... For light and life!`,
    releaseDate: "February 1, 2022",
  },
  {
    id: "the-fallen-star",
    title: "The Fallen Star",
    author: "Claudia Gray",
    timelinePlacement: -230.0,
    timelineLabel: "230 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632343524i/58640884.jpg",
    amazonLink: "https://amzn.to/491ip92",
    description: `In this gripping sequel to Star Wars: The Rising Storm, the light of the Jedi faces its darkest hour.

Time and again, the vicious raiders known as the Nihil have sought to bring the golden age of the High Republic to a fiery end. Time and again, the High Republic has emerged battered and weary but victorious thanks to its Jedi protectors—and there is no monument to their cause grander than the Starlight Beacon.

Hanging like a jewel in the Outer Rim, the Beacon embodies the High Republic at the apex of its aspirations: a hub of culture and knowledge, a bright torch against the darkness of the unknown, and an extended hand of welcome to the farthest reaches of the galaxy. As survivors and refugees flee the Nihil’s attacks, the Beacon and its crew stand ready to shelter and heal.

The grateful Knights and Padawans of the Jedi Order stationed there finally have a chance to recover—from the pain of their injuries and the grief of their losses. But the storm they thought had passed still rages; they are simply caught in its eye. Marchion Ro, the true mastermind of the Nihil, is preparing his most daring attack yet—one designed to snuff out the light of the Jedi.`,
    releaseDate: "January 4, 2022",
  },
  {
    id: "defy-the-storm",
    title: "Defy the Storm",
    author: "Tessa Gratton, Justina Ireland",
    timelinePlacement: -228.0,
    timelineLabel: "228 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1690032038i/173476208.jpg",
    amazonLink: "https://amzn.to/494UxRT",
    description: `Star The High Republic , the New York Times best-selling series, continues. . . . For light and life!

One year after the fall of Starlight Beacon, the galaxy is in chaos. An anarchistic group known as the Nihil has taken over a section of space now known as the Occlusion Zone. Jedi Knight Vernestra Rwoh and scientist Avon Starros team up in an attempt to find a way through the Nihil Stormwall to save those on the other side.

But what are the Nihil's real plans? And what of the nameless creatures that can destroy the Jedi Order? The battle has just begun. . . .`,
    releaseDate: "March 5, 2024",
  },
  {
    id: "temptation-of-the-force",
    title: "Temptation of the Force",
    author: "Tessa Gratton",
    timelinePlacement: -228.0,
    timelineLabel: "228 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1707924968i/201102251.jpg",
    amazonLink: "https://amzn.to/4uPFJ23",
    description: `The reunited Jedi prepare to strike back against the ruthless Nihil in this thrilling sequel to Star Wars: The High Republic: The Eye of Darkness.

For over a year, Jedi Masters Avar Kriss and Elzar Mann were kept apart by the Nihil’s Stormwall. After Avar makes a daring escape from inside the Occlusion Zone, the star-crossed Jedi are reunited. But while the physical distance between them has evaporated, their shared grief over their failure to protect the galaxy from the Nihil threat still remains. To rally the Jedi Order, and the Republic, Avar and Elzar cling to their belief in serving Light and Life. Working together they lead a daring mission into Nihil space to liberate the planet of Naboo, and show those trapped behind the Stormwall that the Jedi will never abandon them. Now back within close orbit of one another, the two Jedi Masters can no longer deny the bond that has always drawn them back together and made them stronger. After finally embracing their true desires and imbued with renewed purpose, Avar and Elzar devise a plan to turn the tide of the conflict with the Nihil once and for all. Accompanied by Jedi Knights Bell Zettifar, Burryaga, and Vernestra Rwoh, the Jedi begin their hunt for Marchion Ro. But to seek out the Nihil’s dangerous leader the Jedi will have to survive the Nameless terrors that they have thus far been powerless to stop.`,
    releaseDate: "June 11, 2024",
  },
  {
    id: "tears-of-the-nameless",
    title: "Tears of the Nameless",
    author: "George Mann",
    timelinePlacement: -228.0,
    timelineLabel: "228 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1713277740i/203166799.jpg",
    amazonLink: "https://amzn.to/4tEokIK",
    description: `The New York Times best-selling series continues in this heart-wrenching sequel to Defy the Storm where fans will reunite with fan-favorite Jedi Knight Reath Silas.

Written by the author of The High Eye of Darkness, The High Quest for the Hidden City, Dark Legends, and Myths & Fables, this next High Republic installment is perfect for fans of investigative mysteries, mythology, monster-hunting, and apocalyptic sci-fi.

It’s been over a year since the fall of the Starlight Beacon space station, and both heroes and villains alike must face the consequences of their decisions. When Jedi Knight Reath and Padawan Amadeo Azzazzo are sent on a mission to test their theories about the Nameless, they’ll come face-to-face with the terrifying creatures once thought to be myth—and learn the true meaning of fear . . . fear that fallen Jedi Azlin Rell advised them to embrace if they have any hope of defeating the monsters . . .`,
    releaseDate: "September 24, 2024",
  },
  {
    id: "beware-the-nameless",
    title: "Beware the Nameless",
    author: "Zoraida Córdova",
    timelinePlacement: -228.0,
    timelineLabel: "228 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1718957905i/211547254.jpg",
    amazonLink: "https://amzn.to/49MZYFh",
    description: `The High Republic continues in this fast-paced adventure that picks up from Escape from Valo, perfect for fans of sci-fi action. Think Sailor Moon meets Babysitter’s Guide to Monster Hunting by way of Star Wars . . . with a dash of Last Kids on Earth!

The fearsome Nihil continue to spread chaos inside the Occlusion Zone, aided by the mysterious creatures called the Nameless that feed on the Force itself. When the people of an embattled world plead for help with the Nihil threat, a team of both Republic Defense Coalition members and Jedi—including Ram Jomaram—is sent to their aid.

The team soon discovers that their ship contains four stowaways—Jedi younglings Kildo, TepTep, and Jamil, and Zenny Greylark, a senator’s daughter determined to find her sister. When a distress call comes in from a nearby planet, Jedi Master Adi-Li Carro agrees to take the stowaways to investigate. There, they will encounter a young Hutt on a mission, a stranger with mysterious motives, and the creatures they fear the most. . . .`,
    releaseDate: "September 24, 2024",
  },
  {
    id: "tempest-breaker",
    title: "Tempest Breaker",
    author: "Cavan Scott",
    timelinePlacement: -228.0,
    timelineLabel: "228 BBY",
    bookType: ["Script Book"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1723603180i/217453593.jpg",
    amazonLink: "https://amzn.to/490KcGC",
    description: `The Jedi reluctantly team up with the nefarious Lourna Dee in this full script for the Star Wars the High Republic audiobook original, Tempest Breaker.

A High Republic adventure featuring former Nihil turned mercenary for hire, Lourna Dee, teaming up with the Jedi.`,
    releaseDate: "December 3, 2024",
  },
  {
    id: "into-the-light",
    title: "Into the Light",
    author: "Claudia Gray",
    timelinePlacement: -228.0,
    timelineLabel: "228 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1731549555i/215808125.jpg",
    amazonLink: "https://amzn.to/48ZYXtj",
    description: `The New York Times best-selling series is coming to an epic conclusion—witness the beginning of the end!

Written by one of the original High Republic story architects and the #1 New York Times best-selling author of Star Wars: The High Republic: Into the Dark, Star Wars: Lost Stars, and the upcoming original X-Files novel, Perihelion. This sci-fi mystery is, at its heart, about the importance of found families and overcoming great odds.

As several crises all hurtle toward their thrilling and shocking conclusions, fan-favorite Jedi Knights and Padawans must band together to save the galaxy from the Nihil, the Nameless, and perhaps worst of all, a mysterious blight that turns everything in its path to dust and is seemingly impossible to stop.`,
    releaseDate: "April 1, 2025",
  },
  {
    id: "trials-of-the-jedi",
    title: "Trials of the Jedi",
    author: "Charles Soule",
    timelinePlacement: -228.0,
    timelineLabel: "228 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1738122448i/219301739.jpg",
    amazonLink: "https://amzn.to/3PJzLke",
    description: `In this epic conclusion to Star Wars: The High Republic, the Jedi face a final confrontation against the Nihil and Marchion Ro.

The Force is everything. A single life connected to all life. All things connected to all other things. This is what the Jedi believe, and this is why they fight. For life…and the light.

For too long, the light has been threatened by Marchion Ro, a sinister despot who will stop at nothing in his quest for power. The conflict with Ro and his marauding Nihil forces has left scars across the galaxy and held the Republic hostage. Countless lives have been lost, beacons of hope have fallen, and the collective courage and resolve of the Republic have been tested like never before. Through it all the Jedi Order has endured, an unwavering candle against the encroaching darkness.

But the Jedi have yet to solve the mystery of the Nameless creatures who feed on the Force. Ro has loosed them upon the galaxy, striking fear into the heart of even the most stalwart Jedi. And yet with every life saved and world freed from Nihil control, the all-consuming blight, which devours everything wherever it appears, threatens to wipe it all away.

Everything now depends on nine brave Jedi, led by Avar Kriss and Elzar Mann, who embark on a treacherous journey to the Nameless homeworld. Their quest: to finally solve the mystery of the Nameless and their connection to the Force, and to stop the blight before its damage becomes irreversible.

But a final confrontation with Marchion Ro awaits. Ro, who is willing to sacrifice everything he's achieved to secure a final victory against the Jedi and carve his name into the very stars for all time.

Nothing less than the fate of everything, perhaps even the Force itself, is at stake.`,
    releaseDate: "June 17, 2025",
  },
  {
    id: "a-valiant-vow",
    title: "A Valiant Vow",
    author: "Justina Ireland",
    timelinePlacement: -228.0,
    timelineLabel: "228 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1738457172i/224076497.jpg",
    amazonLink: "https://amzn.to/3RJhWCq",
    description: `The New York Times best-selling series comes to an epic conclusion in this final installment of this wave of High Republic storytelling.

Written by Justina Ireland, one of the original High Republic story architects, the author of several Star Wars novels including Star Wars: The High Republic: A Test of Courage and Star Wars: The High Republic: Mission to Disaster, and a staff writer on the Netflix TV mini-series The Fall of the House of Usher. This eerie, high-stakes adventure features six full-color pages of art!

It’s all been leading to this! Fan-favorite Padawans and younglings must team-up to stop the seemingly unstoppable blight all while dealing with technological terrors in the form of crab-like scav droids that destroy everything in their path!`,
    releaseDate: "May 6, 2025",
  },
  {
    id: "the-acolyte-wayseeker",
    title: "The Acolyte: Wayseeker",
    author: "Justina Ireland",
    timelinePlacement: -160.0,
    timelineLabel: "160 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1725968977i/216351858.jpg",
    amazonLink: "https://amzn.to/4ujgSUy",
    description: `Decades before Star Wars: The Acolyte, Vernestra Rwoh must rediscover her place within the Jedi Order.

Jedi Master Vernestra Rwoh has spent years exploring the Outer Rim as a Wayseeker, answering to no authority but the Force itself. When the Jedi Council orders her to return to Coruscant, Vernestra ignores the summons, feeling that her priority is the beings she’s already serving.

So the Council dispatches Jedi Knight Indara to track down Vernestra to deliver the urgent message that a Republic senator has formally requested Jedi assistance, asking for Vernestra’s aid by name. Intrigued, Vernestra quickly finds herself pulled back into Coruscant’s complicated world of Republic politics and underworld crime.

The two could not be more different: Vernestra, a Jedi Master who has known conflict and loss during her decades in the Order, and Indara, a young Knight just coming into her own as a Jedi in a galaxy at peace. Trust is slow to develop as they clash over their views on serving the Jedi Order, the galaxy, and the Force.

But they must work together to decipher the connection between the senator and a trail of dangerous weapons threatening to wreak havoc on the Republic. As the two delve further into their investigation, the lines between Jedi and Republic business blur, and Vernestra must rediscover what it means to serve for Light and Life.`,
    releaseDate: "May 6, 2025",
  },
  {
    id: "the-acolyte-the-crystal-crown",
    title: "The Acolyte: The Crystal Crown",
    author: "Tessa Gratton",
    timelinePlacement: -134.0,
    timelineLabel: "134 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1734405185i/220999749.jpg",
    amazonLink: "https://amzn.to/4uIxx3s",
    description: `An exciting adventure starring fan-favorite Jedi Padawans Jecki and Yord from the Disney+ live-action series, The Acolyte.

While their Jedi Masters clean up a political mess left behind by one of their own, Jedi Padawan Jecki and her least favorite fellow Padawan Yord are drawn into a planet-wide coming-of-age ritual as featured guests. The first ritual goes well, but when things unexpectedly turn deadly, Jecki and Yord will have to use all of their abilities and work together to keep each other—and their new friends—safe.

This young adult novel is Star Wars meets The Hunger Games and offers fans of The Acolyte a chance to spend more time with two of their favorite characters from the show.`,
    releaseDate: "July 29, 2025",
  },
  {
    id: "padawan",
    title: "Padawan",
    author: "Kiersten White",
    timelinePlacement: -41.0,
    timelineLabel: "41 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646880570i/59235877.jpg",
    amazonLink: "https://amzn.to/4uOyEi2",
    description: `Obi-Wan Kenobi struggles with his place in the Force as a young Padawan in this coming-of-age adventure!

Obi-Wan Kenobi really wants to be a good Padawan. The best Padawan, even. But that’s feeling more and more impossible with his new master, Qui-Gon Jinn. All of Obi-Wan’s friends are off training to be real Jedi, getting mission experience, while he’s still on Coruscant, practicing his forms and sitting in silent contemplation. Ever since Qui-Gon’s former master, Dooku, left the Order, it feels like Qui-Gon has been too busy trying to connect with the Force or arguing with the Jedi Council to properly train his Padawan.

When Obi-Wan finally convinces Qui-Gon to take him on a mission to a remote planet once explored by an ancient Jedi, his master doesn’t show up the morning they are to leave—so Obi-Wan impulsively takes off by himself. Upon arriving on the mysterious, lush planet, he encounters a group of teenagers with no adult supervision—and who all seem to have some connection to the Force. Free from the constraints of the Order, Obi-Wan joins them in their daring adventures, but the Padawan side of him keeps questioning the teens’ strange relationship to the Force, and to the verdant planet around them, and what all of it might mean to his future. Obi-Wan will test the limits of his relationship to the Jedi and to the Force in this exciting, yet soulful exploration of one of Star Wars’ most enduring heroes.`,
    releaseDate: "July 26, 2022",
  },
  {
    id: "master-apprentice",
    title: "Master & Apprentice",
    author: "Claudia Gray",
    timelinePlacement: -40.0,
    timelineLabel: "40 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541691242i/40917496.jpg",
    amazonLink: "https://amzn.to/48WS6AY",
    description: `An unexpected offer threatens the bond between Qui-Gon Jinn and Obi-Wan Kenobi as the two Jedi navigate a dangerous new planet and an uncertain future.

A Jedi must be a fearless warrior, a guardian of justice, and a scholar in the ways of the Force. But perhaps a Jedi’s most essential duty is to pass on what they have learned. Master Yoda trained Dooku; Dooku trained Qui-Gon Jinn; and now Qui-Gon has a Padawan of his own. But while Qui-Gon has faced all manner of threats and danger as a Jedi, nothing has ever scared him like the thought of failing his apprentice.

Obi-Wan Kenobi has deep respect for his Master, but struggles to understand him. Why must Qui-Gon so often disregard the laws that bind the Jedi? Why is Qui-Gon drawn to ancient Jedi prophecies instead of more practical concerns? And why wasn’t Obi-Wan told that Qui-Gon is considering an invitation to join the Jedi Council—knowing it would mean the end of their partnership? The simple answer scares him: Obi-Wan has failed his Master.

When Jedi Rael Averross, another former student of Dooku, requests their assistance with a political dispute, Jinn and Kenobi travel to the royal court of Pijal for what may be their final mission together. What should be a simple assignment quickly becomes clouded by deceit, and by visions of violent disaster that take hold in Qui-Gon’s mind. As Qui-Gon’s faith in prophecy grows, Obi-Wan’s faith in him is tested—just as a threat surfaces that will demand that Master and apprentice come together as never before, or be divided forever.`,
    releaseDate: "April 16, 2019",
  },
  {
    id: "the-living-force",
    title: "The Living Force",
    author: "John Jackson Miller",
    timelinePlacement: -33.0,
    timelineLabel: "33 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1694106668i/195267496.jpg",
    amazonLink: "https://amzn.to/4db8NuT",
    description: `In the year before The Phantom Menace, Yoda, Mace Windu, and the entire Jedi Council confront a galaxy on the brink of change.

The Jedi have always traveled the stars, defending peace and justice across the galaxy. But, the galaxy is changing, and along with it, the Jedi Order. More and more, the Order finds itself focused on the future of the Republic, secluded on Coruscant, where the twelve members of the Jedi Council weigh crises on a galactic scale.

As yet another Jedi Outpost leftover from the Republic’s golden age is set to be decommissioned on the planet Kwenn, Qui-Gon Jinn challenges the Council about the increasing isolation of the Order. Mace Windu suggests a bold response: all twelve Jedi Masters will embark on a goodwill mission to help the planet, and remind the people of the galaxy that the Jedi remain as stalwart and present as they have been across the ages.

But the arrival of the Jedi leadership is not seen by all as a cause for celebration. Warring pirate factions have infested the sector in the increasing absence of the Jedi. To maintain their dominance, the pirates unite, intent on assassinating the Council. And they are willing to destroy countless innocent lives to secure their power.

Cut off from Coruscant, the Jedi Masters must reckon with an unwelcome truth: that while no one thinks more about the future than the Jedi Council, nobody needs their help more than those living in the present.`,
    releaseDate: "April 9, 2024",
  },
  {
    id: "queen-s-peril",
    title: "Queen's Peril",
    author: "E.K. Johnston",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1574910208i/49000155.jpg",
    amazonLink: "https://amzn.to/4tGqQy7",
    description:
      "When fourteen-year-old Padmé Naberrie wins the election for Queen of Naboo, she adopts the name Amidala and leaves her family to the rule from the royal palace. To keep her safe and secure, she’ll need a group of skilled handmaidens who can be her assistants, confidantes, defenders, and decoys. Each girl is selected for her particular talents, but it will be up to Padmé to unite them as a group. When Naboo is invaded by forces of the Trade Federation, Queen Amidala and her handmaidens will face the greatest test—of themselves, and of each other.",
    releaseDate: "June 2, 2020",
  },
  {
    id: "mace-windu-the-glass-abyss",
    title: "Mace Windu: The Glass Abyss",
    author: "Steven Barnes",
    timelinePlacement: -32.0,
    timelineLabel: "32 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1702156732i/203141166.jpg",
    amazonLink: "https://amzn.to/4tV9BJD",
    description: `Jedi Master Mace Windu travels to a dangerous, remote planet on a mission that challenges even his deadly prowess—all to fulfill Qui-Gon’s last request.

The Jedi are reeling from Qui-Gon Jinn’s sudden death at the hands of a Sith. Jedi Master Mace Windu’s feelings about Qui-Gon have always been complicated, and have not been made any simpler in death. While they often disagreed, Mace valued Qui-Gon's unique perspective, and their shared dedication to the Force made them allies. Without Qui-Gon and his unorthodox views, Mace feels out of balance.

While considering his fallen friend’s legacy, Mace is surprised to receive a final message from Qui-Gon, marked to be delivered to Mace on the event of Qui-Gon’s death. The message contains a last request: a plea to help the Outer Rim planet of Metagos.

Many years ago, a violent solar flare transformed the surface of the desert planet into a landscape of irradiated glass—as beautiful as it is dangerous. Now most of the surviving inhabitants live underground, where rival clans fight to control the planet’s limited resources. As a young Jedi, Qui-Gon protected the Sa’ad farming clan from the planet’s less scrupulous factions. The Sa’ad practice the art of dream-weaving, retaining their waking minds upon sleep in order to communicate and coexist with the wild creatures around them. Qui-Gon vowed to return if they ever required his aid, but now it falls to Mace to fulfill that promise. The Sa’ad’s leader, KinShan Nightbird, has begged for the Jedi’s help in freeing Megatos from the crime lords who threaten to eradicate her people’s way of life.

Intent on fulfilling Qui-Gon’s final wishes, Mace travels to Megatos and infiltrates the enemies of the Sa’ad. But as the Jedi Master investigates the intricate web of adversaries and allies, Mace finds himself pushed to the boundaries of the Jedi code, challenging his beliefs and his relationship to the Force itself.`,
    releaseDate: "October 15, 2024",
  },
  {
    id: "queen-s-shadow",
    title: "Queen's Shadow",
    author: "E.K. Johnston",
    timelinePlacement: -28.0,
    timelineLabel: "28 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1532125038i/40886114.jpg",
    amazonLink: "https://amzn.to/3R9hwFo",
    description: `Written by the number-one New York Times best-selling author of Star Wars Ahsoka!

When Padmé Naberrie, "Queegn Amidala" of Naboo, steps down from her position, she is asked by the newly-elected queen to become Naboo's representative in the Galactic Senate. Padmé is unsure about taking on the new role, but cannot turn down the request to serve her people. Together with her most loyal handmaidens, Padmé must figure out how to navigate the treacherous waters of politics and forge a new identity beyond the queen's shadow.`,
    releaseDate: "March 5, 2019",
  },
  {
    id: "dooku-jedi-lost",
    title: "Dooku: Jedi Lost",
    author: "Cavan Scott",
    timelinePlacement: -23.0,
    timelineLabel: "23 BBY",
    bookType: ["Script Book", "Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1564541379l/52487201.jpg",
    amazonLink: "https://amzn.to/49PnBwZ",
    description: `Delve into the history of the sinister Count Dooku in the original script to the thrilling Star Wars audio production!

Darth Tyranus. Count of Serenno. Leader of the Separatists. A red saber, unsheathed in the dark. But who was he before he became the right hand of the Sith? As Dooku courts a new apprentice, the hidden truth of the Sith Lord's past begins to come to light.

Dooku's life began as one of privilege--born within the stony walls of his family's estate, orbited by the Funeral Moon where the bones of his ancestors lie interred. But soon, his Jedi abilities are recognized, and he is taken from his home to be trained in the ways of the Force by the legendary Master Yoda.

As he hones his power, Dooku rises through the ranks, befriending fellow Jedi Sifo-Dyas and taking a Padawan of his own, the promising Qui-Gon Jinn--and tries to forget the life that he once led. But he finds himself drawn by a strange fascination with the Jedi Master Lene Kostana, and the mission she undertakes for the Order: finding and studying ancient relics of the Sith, in preparation for the eventual return of the deadliest enemies the Jedi have ever faced.

Caught between the world of the Jedi, the ancient responsibilities of his lost home, and the alluring power of the relics, Dooku struggles to stay in the light--even as the darkness begins to fall.`,
    releaseDate: "April 30, 2019",
  },
  {
    id: "inquisitor-rise-of-the-red-blade",
    title: "Inquisitor: Rise of the Red Blade",
    author: "Delilah S. Dawson",
    timelinePlacement: -22.0,
    timelineLabel: "22-19 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1665328069i/62802781.jpg",
    amazonLink: "https://amzn.to/48YbfT8",
    description: `When the Jedi Order falls, an Inquisitor rises.

Padawan Iskat Akaris has dedicated her life to traveling the galaxy alongside her master, learning the ways of the Force to become a good Jedi. Despite Iskat’s dedication, peace and control have remained elusive, and with each setback, she feels her fellow Jedi grow more distrustful of her. Already uncertain about her future in the Jedi Order, Iskat faces tragedy when her master is killed and the Clone Wars engulf the galaxy in chaos.

Now a general on the front lines contributing to that chaos, she is often reminded: Trust in your training. Trust in the wisdom of the Council. Trust in the Force. Yet as the shadows of doubt take hold, Iskat begins to ask questions that no Jedi is supposed to ask: Questions about her own unknown past. Questions the Jedi Masters would consider dangerous.

As the years pass and the war endures, Iskat’s faith in the Jedi wanes. If they would grant her more freedom, she is certain she could do more to protect the galaxy. If they would trust her with more knowledge, she could finally cast aside the shadows that have begun to consume her. When the Jedi Order finally falls, Iskat seizes the chance to forge a path of her own. She embraces the salvation of Order 66.

As an Inquisitor, Iskat finds the freedom she has always craved: to question, to want. And with each strike of her red blade, Iskat moves closer to claiming her new destiny in the Force—whatever the cost.`,
    releaseDate: "July 18, 2023",
  },
  {
    id: "queen-s-hope",
    title: "Queen's Hope",
    author: "E.K. Johnston",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1624897125i/57190928.jpg",
    amazonLink: "https://amzn.to/42BCoHL",
    description: `Searching for hope in a galaxy at war . . .

Padmé Amidala is a former queen, a current senator—and a new wife. But her marriage to Anakin Skywalker must remain a secret, since Jedi are not allowed to marry. And unfortunately for the newlyweds, they are rarely together, with Anakin on the front lines of the Clone War and Padmé fighting her own battle for peace in the Galactic Senate.

Former handmaiden Sabé has returned to Tatooine to once again try to free the people enslaved there, but Padmé summons her to Coruscant with an urgent request. Padmé has to leave on a mission of utmost importance, and no one can know she's gone. Sabé is the only one who can convincingly take her place in the Senate for a long period of time.

Sabé agrees, and her decision sets both women on a course that will force her to examine who they are, who they are not, and who they cannot be—and will forever change their futures.`,
    releaseDate: "April 5, 2022",
  },
  {
    id: "brotherhood",
    title: "Brotherhood",
    author: "Mike Chen",
    timelinePlacement: -22.0,
    timelineLabel: "22 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1637267088i/58890947.jpg",
    amazonLink: "https://amzn.to/4f6TBAv",
    description: `Obi-Wan Kenobi and Anakin Skywalker must stem the tide of the raging Clone Wars and forge a new bond as Jedi Knights.

The Clone Wars have begun. Battle lines are being drawn throughout the galaxy. With every world that joins the Separatists, the peace guarded by the Jedi Order is slipping through their fingers.

After an explosion devastates Cato Neimoidia, the jewel of the Trade Federation, the Republic is blamed and the fragile neutrality of the planet is threatened. The Jedi dispatch Obi-Wan Kenobi, one of the Order’s most gifted diplomatic minds, to investigate the crime and maintain the balance that has begun to dangerously shift. As Obi-Wan investigates with the help of a heroic Neimoidian guard, he finds himself working against the Separatists who hope to draw the planet into their conspiracy—and he senses the sinister hand of Asajj Ventress in the mists that cloak the planet.

Amid the brewing chaos, Anakin Skywalker rises to the rank of Jedi Knight. Despite the mandate that Obi-Wan travel alone—and his former Master’s insistence that he listen this time—Anakin’s headstrong determination means nothing can stop him from crashing the party and bringing along a promising but conflicted youngling.

Once a Padawan to Obi-Wan, Anakin now finds himself on equal—but uncertain—footing with the man who raised him. The lingering friction between them increases the danger for everyone around them. The two knights must learn a new way to work together—and they must learn quickly, to save Cato Neimoidia and its people from the fires of war. To overcome the threat they face, they must grow beyond Master and apprentice. They must stand together as brothers.`,
    releaseDate: "May 10, 2022",
  },
  {
    id: "thrawn-ascendancy-chaos-rising",
    title: "Thrawn Ascendancy: Chaos Rising",
    author: "Timothy Zahn",
    timelinePlacement: -19.0,
    timelineLabel: "19 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1574793053l/53112442.jpg",
    amazonLink: "https://amzn.to/4uTaBPe",
    description: `Discover Thrawn’s origins within the Chiss Ascendancy in the first book in an epic new Star Wars trilogy from bestselling author Timothy Zahn.

Beyond the edge of the galaxy lies the Unknown Regions: chaotic, uncharted, and near impassable, with hidden secrets and dangers in equal measure. And nestled within its swirling chaos is the Ascendancy, home to the enigmatic Chiss and the Nine Ruling Families that lead them.

The peace of the Ascendancy, a beacon of calm and stability, is shattered after a daring attack on the Chiss capital that leaves no trace of the enemy. Baffled, the Ascendancy dispatches one of its brightest young military officers to root out the unseen assailants. A recruit born of no title, but adopted into the powerful family of the Mitth and given the name Thrawn.

With the might of the Expansionary Fleet at his back, and the aid of his comrade Admiral Ar’alani, answers begin to fall into place. But as Thrawn’s first command probes deeper into the vast stretch of space his people call the Chaos, he realizes that the mission he has been given is not what it seems.

And the threat to the Ascendancy is only just beginning.`,
    releaseDate: "September 1, 2020",
  },
  {
    id: "lords-of-the-sith",
    title: "Lords of the Sith",
    author: "Paul S. Kemp",
    timelinePlacement: -14.0,
    timelineLabel: "14 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398457143i/22012290.jpg",
    amazonLink: "https://amzn.to/42FjBvc",
    description:
      "\"It appears things are as you suspected, Lord Vader. We are indeed hunted.\" Anakin Skywalker, Jedi Knight, is just a memory. Darth Vader, newly anointed Sith Lord, is ascendant. The Emperor's chosen apprentice has swiftly proven his loyalty to the dark side. Still, the history of the Sith Order is one of duplicity, betrayal, and acolytes violently usurping their Masters—and the truest measure of Vader's allegiance has yet to be taken. Until now. On Ryloth, a planet crucial to the growing Empire as a source of slave labor and the narcotic known as \"spice,\" an aggressive resistance movement has arisen, led by Cham Syndulla, an idealistic freedom fighter, and Isval, a vengeful former slave. But Emperor Palpatine means to control the embattled world and its precious resources—by political power or firepower—and he will be neither intimidated nor denied. Accompanied by his merciless disciple, Darth Vader, he sets out on a rare personal mission to ensure that his will is done. For Syndulla and Isval, it's the opportunity to strike at the very heart of the ruthless dictatorship sweeping the galaxy. For the Emperor and Darth Vader, Ryloth becomes more than just a matter of putting down an insurrection: When an ambush sends them crashing to the planet's surface, where inhospitable terrain and an army of resistance fighters await them, they will find their relationship tested as never before. With only their lightsabers, the dark side of the Force, and each other to depend on, the two Sith must decide if the brutal bond they share will make them victorious allies or lethal adversaries.",
    releaseDate: "April 28, 2015",
  },
  {
    id: "dark-disciple",
    title: "Dark Disciple",
    author: "Christie Golden",
    timelinePlacement: -19.0,
    timelineLabel: "19 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1419965425i/23277298.jpg",
    amazonLink: "https://amzn.to/4uTebc8",
    description: `Based on unproduced scripts from the blockbuster TV show Star Wars: The Clone Wars!

The only way to bring down the dark side's most dangerous warrior may be for Jedi and Sith to join forces.

In the war for control of the galaxy between the armies of the dark side and the Republic, former Jedi Master turned ruthless Sith Lord Count Dooku has grown ever more brutal in his tactics. Despite the powers of the Jedi and the military prowess of their clone army, the sheer number of fatalities is taking a terrible toll. And when Dooku orders the massacre of a flotilla of helpless refugees, the Jedi Council feels it has no choice but to take drastic action: targeting the man responsible for so many war atrocities, Count Dooku himself.

But the ever-elusive Dooku is dangerous prey for even the most skilled hunter. So the Council makes the bold decision to bring both sides of the Force's power to bear—pairing brash Jedi Knight Quinlan Vos with infamous one-time Sith acolyte Asajj Ventress. Though Jedi distrust for the cunning killer who once served at Dooku's side still runs deep, Ventress's hatred for her former master runs deeper. She's more than willing to lend her copious talents as a bounty hunter—and assassin—to Vos's quest.

Together, Ventress and Vos are the best hope for eliminating Dooku—as long as the emerging feelings between them don't compromise their mission. But Ventress is determined to have her retribution and at last let go of her dark Sith past. Balancing the complicated emotions she feels for Vos with the fury of her warrior's spirit, she resolves to claim victory on all fronts—a vow that will be mercilessly tested by her deadly enemy . . . and her own doubt.`,
    releaseDate: "July 7, 2015",
  },
  {
    id: "low-red-moon",
    title: "Low Red Moon",
    author: "Mike Chen",
    timelinePlacement: -19.0,
    timelineLabel: "19-10 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768946799i/239271951.jpg",
    amazonLink: "https://amzn.to/4uTeMdS",
    description: `ND-5 and Jaylen Vrax embark on their descent into the galaxy's underworld in search of answers and opportunity, in this essential prequel to Star Wars Outlaws.

Jaylen Barsha, heir to his family's immense power and wealth, had his life charted out for him neatly and meticulously by his parents, even though he suspected his neglected half-brother Sliro would be a better fit for the bright corporate future his parents envisioned. Then the Empire stripped it all away on trumped-up charges of conspiracy against his family. Before he can reach Sliro for help redeeming the Barsha name, a battle droid arrives at the family compound with a mission: to kill every single last member of the Barsha clan. Jaylen manages to fend off the attack as the sole survivor, but realizes the droid, who he reprograms, is his only chance to stay alive. But he can no longer be Jaylen Barsha--he'll have to live now as Jaylen Vrax.

Former Separatist battle droid ND-5 knows he should be scrap metal, all things considered. He was a proficient contributor to the Separatist cause, but what is a soldier without a war? A trigger without aim? Loyalty is in his programming, and Jaylen, who treats him as more than just a weapon, has earned it. Perhaps, the droid thinks, with a partner he can be more. ND-5 just has to earn Jaylen's trust.

With the threat against the Barsha clan still shrouded in mystery, the pair has no choice but to leverage the chaos and disappear. They find sanctuary in the anonymity of the underworld, building their reputation among scoundrels, bounty hunters, and crime syndicates. But when their latest score gives the first real clue in years to who sent ND-5 after Jaylen's family, their biggest opportunity presents a new kind of risk. Do they give up this chance at the wealth and power Jaylen was denied to pursue answers? Or will ambition and the weight of the past shatter their unlikely partnership?`,
    releaseDate: "February 3, 2026",
  },
  {
    id: "reign-of-the-empire-the-mask-of-fear",
    title: "Reign of the Empire: The Mask of Fear",
    author: "Alexander Freed",
    timelinePlacement: -18.0,
    timelineLabel: "19-18 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1722273614i/210213729.jpg",
    amazonLink: "https://amzn.to/4uPFeFa",
    description: `Before the Rebellion, the Empire reigns, in book one of a trilogy told through the eyes of Mon Mothma, Bail Organa, and Saw Gerrera—for fans of Andor.

“The Mask of Fear is a perfect prequel for Andor.”—ScreenRant

“In order to ensure the security and continuing stability, the Republic will be reorganized into the first Galactic Empire! For a safe and secure society!”

With one speech and thunderous applause, Chancellor Palpatine brought the era of the Republic crashing down. In its place rose the Galactic Empire. Across the galaxy, people rejoiced and celebrated the end of war—and the promises of tomorrow. But that tomorrow was a lie. Instead, the galaxy became twisted by the cruelty and fear of the Emperor’s rule.

During that terrifying first year of tyranny, Mon Mothma, Saw Gerrera, and Bail Organa face the encroaching darkness. One day, they will be three architects of the Rebel Alliance. But first, each must find purpose and direction in a changing galaxy, while harboring their own secrets, fears, and hopes for a future that may never come unless they act.`,
    releaseDate: "February 25, 2025",
  },
  {
    id: "master-of-evil",
    title: "Master of Evil",
    author: "Adam Christopher",
    timelinePlacement: -18,
    timelineLabel: "19 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1744355839i/230287407.jpg",
    amazonLink: "https://amzn.to/4ftdu4y",
    description: `After Revenge of the Sith, a newly forged Darth Vader hunts for the secrets of life and death under the watchful eye of Emperor Palpatine.

In the wake of Emperor Palpatine’s rise to power, the true nature of his most sinister enforcer remains a mystery. Darth Vader is a dominant yet illusive figure: the shadow cast by a malignant Imperial regime, unknowable to even its top officials. But even as his humanity gives way to myth, Vader remains haunted by the promises of the dark side, seeking the ultimate power that his master has hinted at but withheld—the power to conquer death itself.

On the volcanic world of Mustafar, Vader undertakes a dark ritual, bleeding a kyber crystal to forge his lightsaber. This act unleashes a power far greater than he anticipated, giving him a glimpse into the limitless potential of the Force.

Vader is determined to follow this vision, even if it means defying his master’s orders. Yet he finds the Emperor is suspiciously supportive of his mission, even sending Vader to the Diso system to investigate rumors of a Force-wielding shaman able to raise the dead. At his side are a cadre of the Emperor’s scarlet-robed Royal Guard, led by Colonel Halland Goth—a decorated soldier with a very personal interest in Vader’s mission.

Even as the Emperor’s true motivations reveals themselves, Vader falls deeper into obsession. His journey takes him far across the galaxy, chasing rumors and phantoms. But no matter how far he travels, he cannot escape the shadows within his own soul. Haunted by the echoes of his past, Vader circles the true resolution to his quest: only once all weakness is purged can he become a master of evil.`,
    releaseDate: "November 11, 2025",
  },
  {
    id: "thrawn-ascendancy-greater-good",
    title: "Thrawn Ascendancy: Greater Good",
    author: "Timothy Zahn",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603988845i/55213748.jpg",
    amazonLink: "https://amzn.to/49QSnWi",
    description: `Thrawn and his allies race to save the Chiss Ascendancy from an unseen enemy in the second book in the epic Star Wars: Thrawn Ascendancy trilogy from best-selling author Timothy Zahn.

Thrawn's latest triumph still rests newly on his shoulders. Despite leading the Chiss to victory and bringing glory to the House of Mitth, the true threat to the Ascendancy has not yet been extinguished. Their foes do not send threats or ultimatums, or mass ships on the edge of the Chaos. Their weapons come cloaked in smiles and generosity: gifts offered freely. Services granted unconditionally.

Across the Ascendancy, seemingly inconsequential events could herald the doom of the Chiss. As Thrawn and the Expansionary Defense Fleet rally to uncover the enemy plot, they discover a chilling truth: rather than invade Chiss capitals or pillage their resources, they strike at the very foundation of the Ascendancy, seeking to widen the rifts between the Nine Ruling Families and the Forty Great Houses below. As rivalry and suspicion sow discord among allies, each warrior must decide what matters most to them: the security of their family, or the survival of the Ascendancy itself.`,
    releaseDate: "April 27, 2021",
  },
  {
    id: "thrawn-ascendancy-lesser-evil",
    title: "Thrawn Ascendancy: Lesser Evil",
    author: "Timothy Zahn",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617449776i/55213763.jpg",
    amazonLink: "https://amzn.to/4u81MRz",
    description: `The fate of the Chiss Ascendancy hangs in the balance in the epic finale of the Star Wars: Thrawn Ascendancy trilogy from bestselling author Timothy Zahn.

For thousands of years The Chiss Ascendancy has been an island of calm, a center of power, and a beacon of integrity. Led by the Nine Ruling Families, their leadership stands as a bulwark of stability against the Chaos of the Unknown Regions.

But that stability has been eroded by a cunning foe that winnows away trust and loyalty in equal measure. Bonds of fidelity have given way to lines of division among the families. Despite the efforts of the Expansionary Defense Fleet, the Ascendancy slips closer and closer toward civil war.

The Chiss are no strangers to war. Their mythic status in the Chaos was earned through conflict and terrible deeds, some long buried. Until now. To ensure the Ascendancy’s future, Thrawn will delve deep into its past, uncovering the dark secrets surrounding the ascension of the First Ruling Family. But the truth of a family’s legacy is only as strong as the legend that supports it. Even if that legend turns out to be a lie.

To secure the salvation of the Ascendancy, is Thrawn willing to sacrifice everything? Including the only home he has ever known?`,
    releaseDate: "November 16, 2021",
  },
  {
    id: "sanctuary-a-bad-batch-novel",
    title: "Sanctuary: A Bad Batch Novel",
    author: "Lamar Giles",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1738840246i/221805845.jpg",
    amazonLink: "https://amzn.to/4nAJp5u",
    description: `Hunter, Wrecker, Tech, and Omega gamble on a mission to help rebuild Pabu in this thrilling adventure for The Bad Batch.

A good soldier knows that life is all about change—whether it’s on or off the battlefield. Surviving, living, means adaptation. Hunter is well acquainted with this lesson. He’s on the run from the Empire, Echo’s off on a mission with Captain Rex, and Crosshair is . . . still Crosshair, but amidst all the change, Hunter still has Tech, Wrecker, and Omega.

And it seems that his small family might have finally found a safe place to land, far from the increasingly vigilant eyes of the Pabu. But their potential new island home is in desperate need of resources if there is any hope for the fledgling community to recover from a devastating sea wave. That’s where Phee Goena, self-proclaimed liberator of treasures, comes in, with a couple of jobs she swears will get them the funds they need. Despite Hunter’s concern with Phee’s precarious plans, the rest of the crew is fine following her lead.

Things go wrong almost immediately, as Phee’s droid blows the crew’s cover at a high-stakes auction, and they barely make it out with the relic they’d been paid to acquire. Hunter insists they finish their first mission and deliver the relic before taking on more work, but Phee and the others push forward with a second ferrying a couple on the run, one of whom is due to give birth at any moment. Hunter worries that they’re risking too much, especially when their mysterious new passengers cling to lies and secrets that trace back to an Imperial Security Bureau officer hot on their trail.

As Hunter tries to get the crew back on a stable, safe path far, far away from anything to do with the Empire’s watchdogs, their overlapping missions only invite more danger and chaos. On the verge of failing both their desperate passengers and their community on Pabu, the Batch must remember that the only way they succeed, the only way they survive to fight another day, is by trusting each other.`,
    releaseDate: "August 5, 2025",
  },
  {
    id: "ahsoka",
    title: "Ahsoka",
    author: "E.K. Johnston",
    timelinePlacement: -18.0,
    timelineLabel: "18 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1468595529i/29749107.jpg",
    amazonLink: "https://amzn.to/4dKqotL",
    description:
      "Fans have long wondered what happened to Ahsoka after she left the Jedi Order near the end of the Clone Wars, and before she re-appeared as the mysterious Rebel operative Fulcrum in Rebels. Finally, her story will begin to be told. Following her experiences with the Jedi and the devastation of Order 66, Ahsoka is unsure she can be part of a larger whole ever again. But her desire to fight the evils of the Empire and protect those who need it will lead her right to Bail Organa, and the Rebel Alliance….",
    releaseDate: "October 11, 2016",
  },
  {
    id: "catalyst-a-rogue-one-novel",
    title: "Catalyst: A Rogue One Novel",
    author: "James Luceno",
    timelinePlacement: -21.0,
    timelineLabel: "21-17 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1509729394i/29662066.jpg",
    amazonLink: "https://amzn.to/4tG67dR",
    description: `War is tearing the galaxy apart. For years the Republic and the Separatists have battled across the stars, each building more and more deadly technology in an attempt to win the war. As a member of Chancellor Palpatine’s top secret Death Star project, Orson Krennic is determined to develop a superweapon before their enemies can. And an old friend of Krennic’s, the brilliant scientist Galen Erso, could be the key.

Galen’s energy-focused research has captured the attention of both Krennic and his foes, making the scientist a crucial pawn in the galactic conflict. But after Krennic rescues Galen, his wife, Lyra, and their young daughter, Jyn, from Separatist kidnappers, the Erso family is deeply in Krennic’s debt. Krennic then offers Galen an extraordinary opportunity: to continue his scientific studies with every resource put utterly at his disposal. While Galen and Lyra believe that his energy research will be used purely in altruistic ways, Krennic has other plans that will finally make the Death Star a reality. Trapped in their benefactor’s tightening grasp, the Ersos must untangle Krennic’s web of deception to save themselves and the galaxy itself.`,
    releaseDate: "November 15, 2016",
  },
  {
    id: "tarkin",
    title: "Tarkin",
    author: "James Luceno",
    timelinePlacement: -14.0,
    timelineLabel: "14 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398456370i/22012250.jpg",
    amazonLink: "https://amzn.to/3R5ZZOp",
    description: `A long time ago in a galaxy far, far away. . . .

Bestselling Star Wars veteran James Luceno gives Grand Moff Tarkin the Star Wars: Darth Plagueis treatment, bringing the legendary character from A New Hope to full, fascinating life.

He’s the scion of an honorable and revered family. A dedicated soldier and distinguished legislator. Loyal proponent of the Republic and trusted ally of the Jedi Order. Groomed by the ruthless politician and Sith Lord who would be Emperor, Governor Wilhuff Tarkin rises through the Imperial ranks, enforcing his authority ever more mercilessly . . . and zealously pursuing his destiny as the architect of absolute dominion.

Rule through the fear of force rather than force itself, he advises his Emperor. Under Tarkin’s guidance, an ultimate weapon of unparalleled destruction moves ever closer to becoming a terrifying reality. When the so-called Death Star is completed, Tarkin is confident that the galaxy’s lingering pockets of Separatist rebellion will be brought to heel—by intimidation . . . or annihilation.

Until then, however, insurgency remains a genuine threat. Escalating guerrilla attacks by resistance forces and newfound evidence of a growing Separatist conspiracy are an immediate danger the Empire must meet with swift and brutal action. And to bring down a band of elusive freedom fighters, the Emperor turns to his most formidable agents: Darth Vader, the fearsome new Sith enforcer as remorseless as he is mysterious; and Tarkin—whose tactical cunning and cold-blooded efficiency will pave the way for the Empire’s supremacy . . . and its enemies’ extinction.`,
    releaseDate: "November 4, 2014",
  },
  {
    id: "most-wanted",
    title: "Most Wanted",
    author: "Rae Carson",
    timelinePlacement: -13.0,
    timelineLabel: "13 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1518809651i/38600062.jpg",
    amazonLink: "https://amzn.to/4eO6XBk",
    description:
      "Set before the events of Solo: A Star Wars Story! Han and Qi'ra don't have a lot in common other than not having a lot. They're street kids on the industrial planet Corellia, doing whatever it takes to get by, dreaming of something more. They each jump at a chance to prove themselves in the perilous world of Corellia's criminal underbelly, only to discover they are on the same mission for the same unscrupulous boss. When the job goes disastrously wrong, Han and Qi'ra are on the run--from pirates, a droid crime syndicate, the Empire, and their boss--and will have to learn to trust each other if they are going to survive.",
    releaseDate: "May 25, 2018",
  },
  {
    id: "lando-s-luck",
    title: "Lando's Luck",
    author: "Justina Ireland",
    timelinePlacement: -13,
    timelineLabel: "13 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91YDCXrtA4L._SL1500_.jpg",
    amazonLink: "https://amzn.to/4nBoJKq",
    description:
      "An all-new adventure starring Lando Calrissian and L3-37 onboard the Millennium Falcon! When Lando Calrissian gets caught smuggling on the planet Hynestia, the queen agrees to let him go if he delivers something called the Solstice Globe to the Empire on her behalf. Lando is relieved that his punishment is a simple delivery mission—but he soon discovers things are not as simple as they seem. The queen's daughter, Princess Rinetta, has stowed away on the Millennium Falcon and demands Lando and L3-37 take the globe back to its home planet, which needs the globe to survive. Now Lando has to choose: Do what's right, or do what's best for Lando. But if he's lucky enough, he just might be able to do both....",
    releaseDate: "October 2, 2018",
  },
  {
    id: "a-new-dawn",
    title: "A New Dawn",
    author: "John Jackson Miller",
    timelinePlacement: -11.0,
    timelineLabel: "11 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1697810880i/167130741.jpg",
    amazonLink: "https://amzn.to/4twDz6h",
    description: `Ever since the Jedi were marked for death and forced to flee Coruscant, Kanan Jarrus has devoted himself to staying alive rather than serving the Force. Wandering the galaxy alone, from one anonymous job to another, he avoids trouble--especially with the Empire--at all costs. So when he discovers a deadly conflict brewing between ruthless Imperial forces and desperate revolutionaries, he's not about to get caught in the crossfire. Then the brutal death of a friend at the Empire's hands forces the ex-Jedi to make a choice: bow down to fear, or stand up and fight.

But Jarrus won't be fighting alone. Unlikely allies, including a bomb-throwing radical, a former Imperial surveillance agent, a vengeful security officer, and the mysterious Hera Syndulla--an agent provocateur with motives of her own--team up with Jarrus to challenge the Empire. As a crisis of apocalyptic proportions unfolds on the planet Gorse, they must stand together against one of the Emperor's most fearsome enforcers--for the sake of a world and its people.`,
    releaseDate: "September 2, 2014",
  },
  {
    id: "jedi-battle-scars",
    title: "Jedi: Battle Scars",
    author: "Sam Maggs",
    timelinePlacement: -11.0,
    timelineLabel: "~11 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1669927668i/61327519.jpg",
    amazonLink: "https://amzn.to/4nu2czh",
    description: `Cal Kestis leads the Mantis crew on an adventure set between Star Wars Jedi: Fallen Order and the highly anticipated Star Wars Jedi: Survivor.

Cal Kestis has built a new life for himself with the crew of the Stinger Mantis. Together, Cal’s crew has brought down bounty hunters, defeated Inquisitors, and even evaded Darth Vader himself. More importantly, Merrin, Cere, Greez, and faithful droid BD-1 are the closest thing Cal has had to a family since the fall of the Jedi Order. Even as the galaxy’s future grows more uncertain by the day, with each blow struck against the Empire, the Mantis crew grows more daring.

On what should be a routine mission, they meet a stormtrooper determined to chart her own course with the help of Cal and the crew. In exchange for help starting a new life, the Imperial deserter brings word of a powerful, potentially invaluable tool for their fight against the Empire. And even better, she can help them get to it. The only catch — pursuing it will bring them into the path of one of the Empire’s most dangerous servants, the Inquisitor known as the Fifth Brother.

Can the Imperial deserter truly be trusted? And while Cal and his friends have survived run-ins with the Inquisitors before, how many times can they evade the Empire before their luck runs out?`,
    releaseDate: "March 7, 2023",
  },
  {
    id: "solo-a-star-wars-story",
    title: "Solo: A Star Wars Story",
    author: "Mur Lafferty",
    timelinePlacement: -13.0,
    timelineLabel: "13-10 BBY",
    bookType: ["Adaptations", "Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1532138289i/40219589.jpg",
    amazonLink: "https://amzn.to/491je1C",
    description:
      "This thrilling adaptation of A Star Wars Story expands on the film to include scenes from alternate versions of the script and other additional content, giving deeper insights into Han Solo’s years in the Imperial Navy, Qi’ra’s past, and the beginnings of the rebellion. Though Han Solo has thrilled Star Wars fans for decades, the notorious wisecracking scoundrel was chasing adventure and dodging trouble long before he walked into the cantina at Mos Eisley spaceport. Young Han dreams of someday soaring into space at the helm of his own starship and leaving his home, the gritty industrial planet Corellia, far behind. But as long as he’s trapped in a life of poverty and crime—and under the thumb of the sinister Lady Proxima and her brutal street gang—reaching the distant stars seems impossible. When Han tries to escape with his girlfriend and partner-in-crime, Qi’ra, he makes it out—but she doesn’t. Desperate for a way to find his own offworld vessel and free her, Han enlists in the Imperial Navy—the last place for a rebellious loner who doesn’t play well with others. When the Empire clips his wings, Han goes rogue and plunges into the shady world of smugglers, gamblers, and con artists. There he meets the charming and cunning high roller Lando Calrissian, makes an unlikely friend in a cantankerous Wookiee called Chewbacca, and first lays eyes on the Millennium Falcon. To snag his piece of the outlaw pie, Han joins a crew of pirates to pull off a risky heist. The stakes are high, the danger is great, and the odds are slim. But never tell Han Solo the odds.",
    releaseDate: "September 4, 2018",
  },
  {
    id: "solo-junior-novel",
    title: "Solo: A Star Wars Story: A Junior Novel",
    author: "Joe Schreiber",
    timelinePlacement: -13.0,
    timelineLabel: "13-10 BBY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81hLBhFGNgL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4wAWrnz",
    description:
      "Board the Millennium Falcon for a galactic adventure that explores the story of one of Star Wars' greatest heroes! Han Solo leaves his homeworld Corellia behind and dreams of becoming the greatest pilot in the galaxy. But before he can find the perfect ship he'll have to survive a dangerous job in the criminal underworld! Read along as Han encounters Chewbacca the Wookiee, smuggler Lando Calrissian and other heroes and villains. Author Joe Schreiber captures all the excitement and adventure of the hit film!",
    releaseDate: "September 11, 2018",
  },
  {
    id: "leia-princess-of-alderaan",
    title: "Leia: Princess of Alderaan",
    author: "Claudia Gray",
    timelinePlacement: -3.0,
    timelineLabel: "3 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1509816682i/34860402.jpg",
    amazonLink: "https://amzn.to/4wqgXqJ",
    description: `A long time ago in a galaxy far, far away....there was a princess who became a legend.

Sixteen-year-old Princess Leia Organa faces the most challenging task of her life so far: proving herself in the areas of body, mind, and heart to be formally named heir to the throne of Alderaan. She's taking rigorous survival courses, practicing politics, and spearheading relief missions to worlds under Imperial control. But Leia has worries beyond her claim to the crown. Her parents, Breha and Bail, aren't acting like themselves lately; they are distant and preoccupied, seemingly more concerned with throwing dinner parties for their allies in the Senate than they are with their own daughter. Determined to uncover her parents' secrets, Leia starts down an increasingly dangerous path that puts her right under the watchful eye of the Empire. And when Leia discovers what her parents and their allies are planning behind closed doors, she finds herself facing what seems like an impossible choice; dedicate herself to the people of Alderaan—including the man she loves—or the galaxy at large, which is in desperate need of a rebel hero....`,
    releaseDate: "September 1, 2017",
  },
  {
    id: "thrawn",
    title: "Thrawn",
    author: "Timothy Zahn",
    timelinePlacement: -15.0,
    timelineLabel: "15-2 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1468787895i/31140332.jpg",
    amazonLink: "https://amzn.to/4uklidS",
    description: `One of the most cunning and ruthless warriors in the history of the Galactic Empire, Grand Admiral Thrawn is also one of the most captivating characters in the Star Wars universe, from his introduction in bestselling author Timothy Zahn’s classic Heir to the Empire through his continuing adventures in Dark Force Rising, The Last Command, and beyond. But Thrawn’s origins and the story of his rise in the Imperial ranks have remained mysterious. Now, in Star Wars: Thrawn, Timothy Zahn chronicles the fateful events that launched the blue-skinned, red-eyed master of military strategy and lethal warfare into the highest realms of power—and infamy.

After Thrawn is rescued from exile by Imperial soldiers, his deadly ingenuity and keen tactical abilities swiftly capture the attention of Emperor Palpatine. And just as quickly, Thrawn proves to be as indispensable to the Empire as he is ambitious; as devoted as its most loyal servant, Darth Vader; and a brilliant warrior never to be underestimated. On missions to rout smugglers, snare spies, and defeat pirates, he triumphs time and again—even as his renegade methods infuriate superiors while inspiring ever greater admiration from the Empire. As one promotion follows another in his rapid ascension to greater power, he schools his trusted aide, Ensign Eli Vanto, in the arts of combat and leadership, and the secrets of claiming victory. But even though Thrawn dominates the battlefield, he has much to learn in the arena of politics, where ruthless administrator Arihnda Pryce holds the power to be a potent ally or a brutal enemy.

All these lessons will be put to the ultimate test when Thrawn rises to admiral and must pit all the knowledge, instincts, and battle forces at his command against an insurgent uprising that threatens not only innocent lives but also the Empire’s grip on the galaxy—and his own carefully laid plans for future ascendancy.`,
    releaseDate: "April 11, 2017",
  },
  {
    id: "thrawn-alliances",
    title: "Thrawn: Alliances",
    author: "Timothy Zahn",
    timelinePlacement: -2.0,
    timelineLabel: "2 BBY",
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511385584i/36385830.jpg",
    amazonLink: "https://amzn.to/3Rc6mj9",
    description: `"I have sensed a disturbance in the Force."

Ominous words under any circumstances, but all the more so when uttered by Emperor Palpatine. On Batuu, at the edges of the Unknown Regions, a threat to the Empire is taking root—its existence little more than a glimmer, its consequences as yet unknowable. But it is troubling enough to the Imperial leader to warrant investigation by his most powerful agents: ruthless enforcer Lord Darth Vader and brilliant strategist Grand Admiral Thrawn. Fierce rivals for the emperor's favor, and outspoken adversaries on Imperial affairs—including the Death Star project—the formidable pair seem unlikely partners for such a crucial mission. But the Emperor knows it's not the first time Vader and Thrawn have joined forces. And there's more behind his royal command than either man suspects.

In what seems like a lifetime ago, General Anakin Skywalker of the Galactic Republic, and Commander Mitth'raw'nuruodo, officer of the Chiss Ascendancy, crossed paths for the first time. One on a desperate personal quest, the other with motives unknown . . . and undisclosed. But facing a gauntlet of dangers on a far-flung world, they forged an uneasy alliance—neither remotely aware of what their futures held in store.

Now, thrust together once more, they find themselves bound again for the planet where they once fought side by side. There they will be doubly challenged—by a test of their allegiance to the Empire . . . and an enemy that threatens even their combined might.`,
    releaseDate: "July 24, 2018",
  },
  {
    id: "thrawn-treason",
    title: "Thrawn: Treason",
    author: "Timothy Zahn",
    timelinePlacement: -1.0,
    timelineLabel: "1 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81CIiYjmsAL._AC_UF1000,1000_QL80_.jpg",
    amazonLink: "https://amzn.to/4nvDWwE",
    description: `Grand Admiral Thrawn faces the ultimate test of his loyalty to the Empire in this epic Star Wars novel from bestselling author Timothy Zahn.

“If I were to serve the Empire, you would command my allegiance.”

Such was the promise Grand Admiral Thrawn made to Emperor Palpatine at their first meeting. Since then, Thrawn has been one of the Empire’s most effective instruments, pursuing its enemies to the very edges of the known galaxy. But as keen a weapon as Thrawn has become, the Emperor dreams of something far more destructive.

Now, as Thrawn’s TIE-defender program is halted in favor of Director Krennic’s secret Death Star project, he realizes that the balance of power in the Empire is measured by more than just military acumen or tactical efficiency. Even the greatest intellect can hardly compete with the power to annihilate entire planets.

As Thrawn works to secure his place in the Imperial hierarchy, his former protégé, Eli Vanto, returns with a dire warning about Thrawn's homeworld. Thrawn's mastery of strategy must guide him through an impossible choice: duty to the Chiss Ascendancy or fealty to the Empire he has sworn to serve. Even if the right choice means committing treason.`,
    releaseDate: "July 23, 2019",
  },
  {
    id: "rebel-rising",
    title: "Rebel Rising",
    author: "Beth Revis",
    timelinePlacement: -13.0,
    timelineLabel: "13-0 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1485379708i/32617148.jpg",
    amazonLink: "https://amzn.to/4dc7HyX",
    description: `When Jyn Erso is eight years old, her mother is murdered and her father taken from her to serve the Empire. But despite the loss of her parents, she is not completely alone. Saw Gerrera, a man willing to go to any extremes necessary to resist Imperial tyranny, takes her in as his own daughter and gives her not only a home but all the abilities and resources she needs to become a rebel.

Jyn dedicates herself to the cause—and the man. But fighting alongside Saw and his people brings with it danger and the question of just how far Jyn is willing to go as one of Saw’s soldiers. When she faces an unthinkable betrayal that shatters her world, Jyn will have to pull the pieces of herself back together and figure out what she truly believes in . . . and whom she can really trust.`,
    releaseDate: "May 2, 2017",
  },
  {
    id: "crimson-climb",
    title: "Crimson Climb",
    author: "E.K. Johnston",
    timelinePlacement: -13.0,
    timelineLabel: "13-11 BBY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684776489i/115895668.jpg",
    amazonLink: "https://amzn.to/4uOfyIU",
    description: `New York Times bestselling author E. K. Johnston, author of the Queens series starring Padmé Amidala, brings fans an untold story about Qi'ra, portrayed by Emilia Clarke in Star Wars: A Solo Story.

Not everyone gets to be the hero.

Qi’ra listened to the dreams and promises of a boy with a reckless smile, only to be torn away from him and returned to the White Worms gang while Han made his way to freedom. Now freedom seems like a luxury she can’t afford while she concentrates on survival and despairs of ever leaving Corellia. But her fortunes seem to turn when a representative of the crime syndicate Crimson Dawn plucks Qi’ra from captivity and brings her to the syndicate’s leader, the mysterious and mercurial Dryden Vos. Vos offers Qi’ra an opportunity she’s never had before: the chance to build something resembling a comfortable life if she can prove her worth to his organization. With failure meaning certain death, Qi’ra knows she must immerse herself in the merciless, murderous world of Crimson Dawn. What she doesn’t know is just who she will be if she survives. . . .`,
    releaseDate: "October 10, 2023",
  },
  {
    id: "the-mighty-chewbacca-in-the-forest-of-fear",
    title: "The Mighty Chewbacca in the Forest of Fear!",
    author: "Tom Angleberger",
    timelinePlacement: -1.0,
    timelineLabel: "1 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71exYUz3-EL._SL1200_.jpg",
    amazonLink: "https://amzn.to/4dTlKcX",
    description:`From New York Times best-selling author, Tom Angleberger.

Chewbacca the Wookiee thought he was on a boring cat-sitting job -- but his true mission is much more dangerous.

With the help of a young bounty hunter/librarian and a cargo droid - who is actually undercover Rebel spy K-s2O - Chewie must make his way through a bizarre forest with fear causing mist, fight off deadly creatures, recover a sacred book...and rescue his friend, Han Solo. If anyone can do it, it's the mighty Chewbacca!

Perfect for adventure young for Star Wars fans!`,
    releaseDate: "May 25, 2018",
  },
  {
    id: "guardians-of-the-whills",
    title: "Guardians of the Whills",
    author: "Greg Rucka",
    timelinePlacement: -1.0,
    timelineLabel: "1 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91LAnT4kuJL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4dXqqO7",
    description:`An exciting adventure about two of the brave heroes from the smash hit movie Rogue One: AStar Wars Story 

On the desert world of Jedha, in the Holy City, friends Baze and Chirrut used to be Guardians of the hills, who looked after the Kyber Temple and the devoted pilgrims who worshiped there. Then the Empire came and took over the planet. The temple was destroyed and the people scattered. Now Baze and Chirrut do what they can to resist the Empire and protect the people of Jedha, but it never seems to be enough. Then a man named Saw Gerrera arrives, with a militia of his own and grand plans to take down the Empire. It seems like the perfect way for Baze and Chirrut to make a real difference and help the people of Jedha live better lives. But will it come at too great a cost?`,
    releaseDate: "May 2, 2017",
  },
  {
    id: "rogue-one-a-star-wars-story",
    title: "Rogue One: A Star Wars Story",
    author: "Alexander Freed",
    timelinePlacement: -1,
    timelineLabel: "1 BBY",
    bookType: ["Adaptations", "Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1480095701i/30008713.jpg",
    amazonLink: "https://amzn.to/4ds37f1",
    description: `NEW YORK TIMES BESTSELLER - Go beyond the film with a novelization featuring new scenes and expanded material.

As the shadows of the Empire loom ever larger across the galaxy, so do deeply troubling rumors. The Rebellion has learned of a sinister Imperial plot to bring entire worlds to their knees. Deep in Empire-dominated space, a machine of unimaginable destructive power is nearing completion. A weapon too terrifying to contemplate . . . and a threat that may be too great to overcome.

If the worlds at the Empire's mercy stand any chance, it lies with an unlikely band of allies: Jyn Erso, a resourceful young woman seeking vengeance; Cassian Andor, a war-weary rebel commander; Bodhi Rook, a defector from the Empire's military; Chirrut Imwe, a blind holy man and his crack-shot companion, Baze Malbus; and K-2SO, a deadly Imperial droid turned against its former masters. In their hands rests the new hope that could turn the tide toward a crucial Rebellion victory--if only they can capture the plans to the Empire's new weapon.

But even as they race toward their dangerous goal, the specter of their ultimate enemy--a monstrous world unto itself--darkens the skies. Waiting to herald the Empire's brutal reign with a burst of annihilation worthy of its dreaded name: Death Star.`,
    releaseDate: "December 16, 2016",
  },
  {
    id: "rogue-one-junior",
    title: "Star Wars: Rogue One: A Junior Novel",
    author: "Matt Forbeck",
    timelinePlacement: -1,
    timelineLabel: "1 BBY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91tOaBTYgqL._SY522_.jpg",
    amazonLink: "https://amzn.to/4eWuYX5",
    description: `Relive the excitement of of Rogue One: A Star Wars Story with this action-packed retelling! Follow along as a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.

This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things, and in doing so, become part of something greater than themselves.`,
    releaseDate: "December 16, 2016",
  },
  {
    id: "hiding-from-the-dark",
    title: "Hiding from the Dark",
    author: "Kiersten White",
    timelinePlacement: 0.0,
    timelineLabel: "19 BBY-4 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81lIE2cWf+L._SL1500_.jpg",
    amazonLink: "https://amzn.to/4dPjMud",
    description:`Explore the darkest corners of the Star Wars galaxy in this chilling horror-themed middle grade novel by New York Times bestselling author Kiersten White.

Pursued by Imperial forces, a young girl named Bia must flee her home planet of Coruscant and find her mother. All the time, she is hunted by a figure in black, a presence more horrifying than she has ever encountered before. Can Bia escape—and what does she have that the Empire wants so badly? Horror readers and Star Wars fans of all ages will thrill to this fright-filled middle grade novel.`,
    releaseDate: "September 1, 2026",
  },
  {
    id: "the-princess-the-scoundrel-and-the-farm-boy",
    title: "A New Hope: The Princess, the Scoundrel, and the Farm Boy",
    author: "Alexandra Bracken",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl: getCanonCover("A_New_Hope_Farm_Boy_Cover.jpg"),
    amazonLink: "https://amzn.to/4uQBNOy",
    description: `The galaxy is at war.

Although the Rebel Alliance has won a few battles against the Empire, hope is fading. The Empire is about to finish building the greatest weapon the galaxy has ever seen—the Death Star. The rebels’ only chance to defeat it now lies in the unlikely hands of a princess, a scoundrel, and a farm boy. . . .

Acclaimed, New York Times bestselling author Alexandra Bracken delivers a captivating retelling of Star Wars: A New Hope like you’ve never experienced before. Since the premier of the original film, Princess Leia, Han Solo, and Luke Skywalker have become iconic, larger-than-life characters. The Princess, the Scoundrel, and the Farm Boy takes a deeper look at these three heroes as they join forces to defeat the evil that threatens their entire galaxy.`,
    releaseDate: "September 22, 2015",
  },
  {
    id: "star-wars-a-new-hope",
    title: "Star Wars: A New Hope",
    author: "Ryder Windham",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl: getCanonCover("ANHPaperbackNovel.jpg"),
    amazonLink: "https://amzn.to/4tJIZuI",
    description: `2017 sees the 40th anniversary of the release of Star Wars: A New Hope, the film that launched the greatest space fantasy epic in history. To celebrate this, Egmont are publishing a set of junior novel adaptations of the original trilogy.

Follow the adventures of Luke Skywalker, Princess Leia, Han Solo, Chewbacca and the Rebel Alliance as they fight against the evil Emperor Palpatine, and his sinister agent Darth Vader! Book 1 in a series of three.`,
    releaseDate: "May 4, 2017",
  },
  {
    id: "battlefront-ii-inferno-squad",
    title: "Battlefront II: Inferno Squad",
    author: "Christie Golden",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1498864408i/34181938.jpg",
    amazonLink: "https://amzn.to/4wlZGiq",
    description: `NEW YORK TIMES BESTSELLER • Set in the aftermath of Rogue One: A Star Wars Story, this action-packed prequel to the hotly anticipated videogame Battlefront II introduces the Empire’s elite force: Inferno Squad.

After the humiliating theft of the Death Star plans and the destruction of the battle station, the Empire is on the defensive. But not for long. In retaliation, the elite Imperial soldiers of Inferno Squad have been called in for the crucial mission of infiltrating and eliminating the Partisans—the rebel faction once led by notorious Republic freedom fighter Saw Gerrera.

Following the death of their leader, the Partisans have carried on his extremist legacy, determined to thwart the Empire—no matter the cost. Now Inferno Squad must prove its status as the best of the best and take down the Partisans from within. But the growing threat of being discovered in their enemy’s midst turns an already dangerous operation into a do-or-die acid test they dare not fail. To protect and preserve the Empire, to what lengths will Inferno Squad go . . . and how far beyond them?

The Rebellion may have heroes like Jyn Erso and Luke Skywalker. But the Empire has Inferno Squad.`,
    releaseDate: "July 25, 2017",
  },
  {
    id: "smuggler-s-run",
    title: "Smuggler's Run: A Han Solo & Chewbacca Adventure",
    author: "Greg Rucka",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71EO36DaNZL._SL1000_.jpg",
    amazonLink: "https://amzn.to/4wJZx8Q",
    description: `Han Solo and Chewbacca the Wookiee team-up for an all-new adventure in this thrilling upper middle grade novel.

Set between Star Wars: A New Hope and Star Wars: The Empire Strikes Back, the story follows everyone's favorite pair of smugglers as they fly the Millennium Falcon on a top-secret mission for the Rebellion. Hidden in the story are also hints and clues about Star Wars: The Force Awakens, making this a must-read for fans old and new!`,
    releaseDate: "September 4, 2015",
  },
  {
    id: "heir-to-the-jedi",
    title: "Heir to the Jedi",
    author: "Kevin Hearne",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1514857027i/22059478.jpg",
    amazonLink: "https://amzn.to/4v9LnML",
    description: `A long time ago in a galaxy far, far away. . . .
 
A thrilling new adventure set between A New Hope and The Empire Strikes Back, and—for the first time ever—written entirely from Luke Skywalker’s first-person point of view.`,
    releaseDate: "March 3, 2015",
  },
  {
    id: "the-weapon-of-a-jedi",
    title: "The Weapon of a Jedi: A Luke Skywalker Adventure",
    author: "Jason Fry",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/81ZQM1dJOeL._SL1500_.jpg",
    amazonLink: "https://amzn.to/49aR3gM",
    description: `Luke Skywalker returns for an all-new adventure in this thrilling upper middle grade novel. Set between Star Wars: A New Hope and Star Wars: The Empire Strikes Back, the story finds Luke Skywalker, C-3PO, and R2-D2 stranded on a mysterious planet, and explores a dangerous duel between Luke and a strange new villain. Hidden in the story are also clues and hints about the upcoming film Star Wars: The Force Awakens, making this a must-read for fans old and new!`,
    releaseDate: "September 4, 2015",
  },
  {
    id: "doctor-aphra",
    title: "Doctor Aphra",
    author: "Sarah Kuhn",
    timelinePlacement: 0.0,
    timelineLabel: "0 ABY",
    bookType: ["Adaptations", "Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1606705708i/54878478.jpg",
    amazonLink: "https://amzn.to/3PqySNs",
    description: `Dr. Aphra teams up with Darth Vader himself in the original script to the audiobook production—an expanded adaptation of the critically acclaimed Marvel comics series.

Dr. Chelli Lona Aphra, rogue archaeologist, is in trouble again.

A pioneer in the field of criminal xenoarchaeology, Aphra recognizes no law, has no fear, and possesses no impulse control. To her, the true worth of the galactic relics she discovers isn’t found in a museum but in an arsenal. This viewpoint has led to a lot of misunderstandings. After her latest plan goes horribly wrong, her roguish ways are on the verge of catching up to her. That’s when suddenly Darth Vader, terror of the galaxy, swoops in with his lightsaber and . . . saves her life?

Don’t get her wrong—it’s not like she’s ungrateful. Sure, her new boss is a lord of the Sith. And okay, she may have just become a pawn in a deadly game being played by him and his boss, who happens to be the Galactic Emperor. And yes, the life expectancy of anyone who disappoints Vader can be measured in seconds.

But she’s back doing what she does best. She’s got a ship to fly, a heist to pull, and two unorthodox but effective metal buddies: Triple-Zero, a protocol droid specializing in etiquette, customs, translation, and torture, and BT-1, an astromech loaded with enough firepower to take down a battlecruiser. Together, they might just find a way to get the job done and avoid the deadly performance review that waits at its conclusion.

Just kidding. She’s doomed.`,
    releaseDate: "July 21, 2020",
  },
  {
    id: "battlefront-twilight-company",
    title: "Battlefront: Twilight Company",
    author: "Alexander Freed",
    timelinePlacement: 3.0,
    timelineLabel: "3 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1440781979i/25455901.jpg",
    amazonLink: "https://amzn.to/48Yox1R",
    description: `A companion novel inspired by the hotly anticipated videogame Star Wars: Battlefront, this action-packed adventure follows a squad of soldiers caught in the trenches of the ultimate galactic war between good and evil.

The bravest soldiers. The toughest warriors. The ultimate survivors.

Among the stars and across the vast expanses of space, the Galactic Civil War rages. On the battlefields of multiple worlds in the Mid Rim, legions of ruthless stormtroopers—bent on crushing resistance to the Empire wherever it arises—are waging close and brutal combat against an armada of freedom fighters. In the streets and alleys of ravaged cities, the front-line forces of the Rebel Alliance are taking the fight to the enemy, pushing deeper into Imperial territory and grappling with the savage flesh-and-blood realities of war on the ground.

Leading the charge are the soldiers—men and women, human and nonhuman—of the sixty-first mobile infantry, better known as Twilight Company. Hard-bitten, war-weary, and ferociously loyal to one another, the members of this renegade outfit doggedly survive where others perish, and defiance is their most powerful weapon against the deadliest odds. When orders come down for the Rebels to fall back in the face of superior opposition numbers and firepower, Twilight reluctantly complies. Then an unlikely ally radically changes the strategic equation—and gives the Alliance’s hardest-fighting warriors a crucial chance to turn retreat into resurgence.

Orders or not, alone and outgunned but unbowed, Twilight Company locks, loads, and prepares to make its boldest maneuver—trading down-and-dirty battle in the trenches for a game-changing strike at the ultimate target: the very heart of the Empire’s military machine.`,
    releaseDate: "November 3, 2015",
  },
  {
    id: "so-you-want-to-be-a-jedi",
    title: "The Empire Strikes Back: So You Want to Be a Jedi?",
    author: "Adam Gidwitz",
    timelinePlacement: 3.0,
    timelineLabel: "3 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl: getCanonCover("Want_to_be_a_Jedi_Cover.jpg"),
    amazonLink: "https://amzn.to/4tE68Pb",
    description: `Acclaimed, New York Times best-selling author Adam Gidwitz delivers a captivating retelling of Star Wars: The Empire Strikes Back like you’ve never experienced before...

So you want to be a Jedi? It seems cool. You can move things with you mind. Control people with your thoughts. Oh, and the lightsabers. Yeah, those are awesome. But it's not all mind control and weaponized flashlights. Being a Jedi is hard work. Also, there are bad guys. Lots of bad guys. Who want to kill you.

Do you still want to be a Jedi? If so, this book is for you!`,
    releaseDate: "September 22, 2015",
  },
  {
    id: "star-wars-the-empire-strikes-back",
    title: "Star Wars: The Empire Strikes Back",
    author: "Ryder Windham",
    timelinePlacement: 3.0,
    timelineLabel: "3 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl: getCanonCover("ESBPaperbackNovel.jpg"),
    amazonLink: "https://amzn.to/3ROKASG",
    description: `2017 sees the 40th anniversary of the release of Star Wars: A New Hope, the film that launched the greatest space fantasy epic in history. To celebrate this, Egmont are publishing a set of junior novel adaptations of the original trilogy.

Follow the adventures of Luke Skywalker, Princess Leia, Han Solo, Chewbacca and the Rebel Alliance as they fight against the evil Emperor Palpatine, and his sinister agent Darth Vader! Book 2 in a series of three.`,
    releaseDate: "May 4, 2017",
  },
  {
    id: "moving-target-a-princess-leia-adventure",
    title: "Moving Target: A Princess Leia Adventure",
    author: " Cecil Castellucci and Jason Fry",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("Moving_Target.jpg"),
    amazonLink: "https://amzn.to/49Gvvsw",
    description: `Princess Leia returns for an all-new adventure in this thrilling upper middle grade novel. Set between Star Wars: The Empire Strikes Back and Star Wars: The Return of the Jedi, the story follows the warrior princess as she leads a ragtag group of rebels on a dangerous mission against the evil Galactic Empire. Hidden in the story are also hints and clues about the upcoming film Star Wars: The Force Awakens, making this a must-read for fans old and new!`,
    releaseDate: "September 4, 2015",
  },
  {
    id: "beware-the-power-of-the-dark-side",
    title: "Return of the Jedi: Beware the Power of the Dark Side!",
    author: "Tom Angleberger",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl: getCanonCover("Return_of_the_Jedi_Dark_Side_Cover.jpg"),
    amazonLink: "https://amzn.to/43nmAsk",
    description: `Acclaimed, New York Times best-selling author Tom Angleberger delivers a captivating retelling of Star Wars: Return of the Jedi like you’ve never experienced before, infusing the iconic, classic tale of good versus evil with a unique perspective and narrative style that will speak directly to today’s young readers while enhancing the Star Wars experience for core fans of the saga.`,
    releaseDate: "September 22, 2015",
  },
  {
    id: "star-wars-return-of-the-jedi",
    title: "Star Wars: Return of the Jedi",
    author: "Ryder Windham",
    timelinePlacement: 4.0,
    timelineLabel: "4 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl: getCanonCover("ROTJPaperbackNovel.jpg"),
    amazonLink: "https://amzn.to/4dyMz4Z",
    description: `2017 sees the 40th anniversary of the release of Star Wars: A New Hope, the film that launched the greatest space fantasy epic in history. To celebrate this, Egmont are publishing a set of junior novel adaptations of the original trilogy.

Follow the adventures of Luke Skywalker, Princess Leia, Han Solo, Chewbacca and the Rebel Alliance as they fight against the evil Emperor Palpatine, and his sinister agent Darth Vader! Book 3 in a series of three.`,
    releaseDate: "May 4, 2017",
  },
  {
    id: "the-princess-and-the-scoundrel",
    title: "The Princess and the Scoundrel",
    author: "Beth Revis",
    timelinePlacement: 4.1,
    timelineLabel: "4 ABY",
    bookType: ["Adult"],
    coverUrl: getCanonCover("PrincessandtheScoundrel-cover.jpg"),
    amazonLink: "https://amzn.to/4dcs0fR",
    description: `The Death Star is destroyed. Darth Vader is dead. The Empire is desolated. But on the forest moon of Endor, amongst the chaos of a changing galaxy, time stands still for a princess and her scoundrel.

After being frozen in carbonite, then risking everything for the Rebellion, Han is eager to stop living his life for other people. He and Leia have earned their future together, a thousand times over. And when he proposes to Leia, it’s the first time in a long time he’s had a good feeling about this. For Leia, a lifetime of fighting doesn’t truly seem over. There is work still to do, penance to pay for the dark secret she now knows runs through her veins. Her brother, Luke, is offering her that chance—one that comes with family and the promise of the Force. But when Han asks her to marry him, Leia finds her answer immediately on her lips . . . Yes.

But happily ever after doesn’t come easily. As soon as Han and Leia depart their idyllic ceremony on Endor for their honeymoon, they find themselves on the grandest and most glamorous stage of all: the Halcyon, a luxury vessel on a very public journey to the most wondrous worlds in the galaxy. Their marriage, and the peace and prosperity it represents, is a lightning rod for everyone in the galaxy—including Imperial remnants still clinging to power.

Facing their most desperate hour, the soldiers of the Empire have dispersed across the galaxy, retrenching on isolated worlds vulnerable to their influence. As the Halcyon travels from world to world, one thing becomes abundantly clear: The war is not over. But as danger draws closer, Han and Leia find that they fight their best battles not alone but as husband and wife.`,
    releaseDate: "August 16, 2022",
  },
  {
    id: "alphabet-squadron",
    title: "Alphabet Squadron",
    author: "Alexander Freed",
    timelinePlacement: 4.1,
    timelineLabel: "4 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1547840032i/42207529.jpg",
    amazonLink: "https://amzn.to/4dGp1wd",
    description: `The first novel in a new trilogy starring veteran New Republic pilots!

On the brink of victory in a brutal war, five New Republic pilots transform from hunted to hunters in this epic Star Wars adventure. Set after Return of the Jedi, Alphabet Squadron follows a unique team, each flying a different class of starfighter as they struggle to end their war once and for all.

The Emperor is dead. His final weapon has been destroyed. The Imperial Army is in disarray. In the aftermath, Yrica Quell is just one of thousands of defectors from her former cause living in a deserters’ shantytown—until she is selected to join Alphabet Squadron.

Cobbled together from an eclectic assortment of pilots and starfighters, the five members of Alphabet are tasked by New Republic general Hera Syndulla herself. Like Yrica, each is a talented pilot struggling to find their place in a changing galaxy. Their mission: to track down and destroy the mysterious Shadow Wing, a lethal force of TIE fighters exacting bloody, reckless vengeance in the twilight of their reign.

The newly formed unit embodies the heart and soul of the Rebellion: ragtag, resourceful, scrappy, and emboldened by their most audacious victory in decades. But going from underdog rebels to celebrated heroes isn’t as easy as it seems, and their inner demons threaten them as much as their enemies among the stars. The wayward warriors of Alphabet Squadron will have to learn to fly together if they want to protect the new era of peace they’ve fought so hard to achieve.

Part of a Marvel and Del Rey crossover event, Alphabet Squadron is the counterpart to Marvel’s TIE Fighter miniseries, which follows the exploits of Shadow Wing as they scheme to thwart the New Republic.`,
    releaseDate: "June 11, 2019",
  },
  {
    id: "aftermath",
    title: "Aftermath",
    author: "Chuck Wendig",
    timelinePlacement: 4.1,
    timelineLabel: "4 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1513829801i/25214265.jpg",
    amazonLink: "https://amzn.to/3RpK2T7",
    description: `As the Empire reels from its critical defeats at the Battle of Endor, the Rebel Alliance—now a fledgling New Republic—presses its advantage by hunting down the enemy’s scattered forces before they can regroup and retaliate. But above the remote planet Akiva, an ominous show of the enemy’s strength is unfolding. Out on a lone reconnaissance mission, pilot Wedge Antilles watches Imperial Star Destroyers gather like birds of prey circling for a kill, but he’s taken captive before he can report back to the New Republic leaders.
 
Meanwhile, on the planet’s surface, former rebel fighter Norra Wexley has returned to her native world—war weary, ready to reunite with her estranged son, and eager to build a new life in some distant place. But when Norra intercepts Wedge Antilles’s urgent distress call, she realizes her time as a freedom fighter is not yet over. What she doesn’t know is just how close the enemy is—or how decisive and dangerous her new mission will be.
 
Determined to preserve the Empire’s power, the surviving Imperial elite are converging on Akiva for a top-secret emergency summit—to consolidate their forces and rally for a counterstrike. But they haven’t reckoned on Norra and her newfound allies—her technical-genius son, a Zabrak bounty hunter, and a reprobate Imperial defector—who are prepared to do whatever they must to end the Empire’s oppressive reign once and for all.`,
    releaseDate: "September 4, 2015",
  },
  {
    id: "shadow-fall",
    title: "Shadow Fall",
    author: "Alexander Freed",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1580897173l/52590032.jpg",
    amazonLink: "https://amzn.to/4ucpXhE",
    description:
      "After their narrow victory over Shadow Wing, Alphabet Squadron is on the attack, hunting their adversaries within the Imperial Remnant. Shadow Wing is desperate for direction and leadership--and they find both in the iron will of Major Keize, their former commander and Yrica Quell's one-time mentor. As battle lines blur, Alphabet Squadron finds itself not only fighting their resurgent foes, but their leader's own deadly shadow.",
    releaseDate: "June 23, 2020",
  },
  {
    id: "aftermath-life-debt",
    title: "Aftermath: Life Debt",
    author: "Chuck Wendig",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1449268300i/26895161.jpg",
    amazonLink: "https://amzn.to/4nv44re",
    description: `Set between the events of Return of the Jedi and The Force Awakens, the never-before-told story that began with Star Wars: Aftermath continues in this thrilling novel, the second book of Chuck Wendig s New York Times bestselling trilogy.

"It is a dark time for the Empire. . . ."

The Emperor is dead, and the remnants of his former Empire are in retreat. As the New Republic fights to restore a lasting peace to the galaxy, some dare to imagine new beginnings and new destinies. For Han Solo, that means settling his last outstanding debt, by helping Chewbacca liberate the Wookiee's homeworld of Kashyyyk.

Meanwhile, Norra Wexley and her band of Imperial hunters pursue Grand Admiral Rae Sloane and the Empire's remaining leadership across the galaxy. Even as more and more officers are brought to justice, Sloane continues to elude the New Republic, and Norra fears Sloane may be searching for a means to save the crumbling Empire from oblivion. But the hunt for Sloane is cut short when Norra receives an urgent request from Princess Leia Organa. The attempt to liberate Kashyyyk has carried Han Solo, Chewbacca, and a band of smugglers into an ambush resulting in Chewie's capture and Han's disappearance.

Breaking away from their official mission and racing toward the Millennium Falcon's last known location, Norra and her crew prepare for any challenge that stands between them and their missing comrades. But they can't anticipate the true depth of the danger that awaits them or the ruthlessness of the enemy drawing them into his crosshairs.`,
    releaseDate: "July 12, 2016",
  },
  {
    id: "victory-s-price",
    title: "Victory's Price",
    author: "Alexander Freed",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1597429406i/54910946.jpg",
    amazonLink: "https://amzn.to/4u8Ui0z",
    description: `In the wake of Yrica Quell’s shocking decision—and one of the fiercest battles of their lives—the remnants of Alphabet Squadron seek answers and closure across a galaxy whose old war scars are threatening to reopen.

Soran Keize has returned to the tip of Shadow Wing’s spear. Operation Cinder, the terrifying protocol of planetary extermination which began in the twilight of the Imperial era, burns throughout the galaxy. Shadow Wing is no longer wounded prey fleeing the hunters of the New Republic. With its leader, its strength has returned, and its Star Destroyers and TIE squadrons lurk in the darkness between stars, carrying out the fallen Emperor’s final edict of destruction—as well as another, stranger mission, one Keize has championed not for the dying Empire, but for its loyal soldiers.

Alphabet Squadron’s ships are as ramshackle and damaged as their spirits, but they’ve always had each other. Now, as they face the might of Keize's reborn juggernaut, they aren't even sure they have that. How do you catch a shadow? How do you kill it? And when you're finally victorious, who pays the price?`,
    releaseDate: "March 2, 2021",
  },
  {
    id: "aftermath-empire-s-end",
    title: "Aftermath: Empire's End",
    author: "Chuck Wendig",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1480476297i/33154235.jpg",
    amazonLink: "https://amzn.to/4nrMzIs",
    description: `As the final showdown between the New Republic and the Empire draws near, all eyes turn to a once-isolated planet: Jakku.

The Battle of Endor shattered the Empire, scattering its remaining forces across the galaxy. But the months following the Rebellion’s victory have not been easy. The fledgling New Republic has suffered a devastating attack from the Imperial remnant, forcing the new democracy to escalate its hunt for the hidden enemy.

For her role in the deadly ambush, Grand Admiral Rae Sloane is the most wanted Imperial war criminal—and one-time rebel pilot Norra Wexley, back in service at Leia’s urgent request, is leading the hunt. But more than just loyalty to the New Republic drives Norra forward: Her husband was turned into a murderous pawn in Sloane’s assassination plot, and now she wants vengeance as much as justice.

Sloane, too, is on a furious quest: pursuing the treacherous Gallius Rax to the barren planet Jakku. As the true mastermind behind the Empire’s devastating attack, Rax has led the Empire to its defining moment. The cunning strategist has gathered the powerful remnants of the Empire’s war machine, preparing to execute the late Emperor Palpatine’s final plan. As the Imperial fleet orbits Jakku, an armada of Republic fighters closes in to finish what began at Endor. Norra and her crew soar into the heart of an apocalyptic clash that will leave land and sky alike scorched. And the future of the galaxy will finally be decided.`,
    releaseDate: "February 21, 2017",
  },
  {
    id: "hunters-battle-for-the-arena",
    title: "Hunters: Battle for the Arena",
    author: "Mark Oshiro",
    timelinePlacement: 5.0,
    timelineLabel: "5 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71mJCNxUd6L._SL1050_.jpg",
    amazonLink: "https://amzn.to/4eS5Ald",
    description:`An exciting book based on the game Star Wars: Hunters! On the planet Vespaara lies the Arena—a series of battlefields where fighters known as Hunters face off in teams to compete in front of roaring crowds. Newest to their ranks is Rieve, a Force-sensitive orphan from Corellia with abilities she can barely control, and a past she desperately wants to leave behind. But Rieve gets off to a rocky start, strugging with her lack of confidence both inside the Arena and with her fellow Hunters. And when a mysterious stranger begins stalking the Arena, Rieve fears her troubled past has finally caught up with her…. Includes original illustrations based on the game characters!`,
    releaseDate: "March 7, 2023",
  },
    {
    id: "reign-of-the-empire-edge-of-the-abyss",
    title: "Reign of the Empire: Edge of the Abyss",
    author: "Rebecca Roanhorse",
    timelinePlacement: -6.0,
    timelineLabel: "6 BBY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1773198536i/245319534.jpg",
    amazonLink: "https://amzn.to/49xhWvs",
    description: `Set in the year before the first season of Andor, the sequel to The Mask of Fear.

The second installment in the Reign of the Empire series follows Bail Organa, Mon Mothma, and Saw Gerrera (along with their allies and enemies) thirteen years after the events of The Mask of Fear as they navigate the Empire's nigh-unbreakable chokehold over the galaxy.`,
    releaseDate: "September 15, 2026",
  },
  {
    id: "reign-of-the-empire-from-the-ashes",
    title: "Reign of the Empire: From the Ashes",
    author: "Fran Wilde",
    timelinePlacement: -6.0,
    timelineLabel: "Unknown",
    bookType: ["Adult"],
    coverUrl:
      "https://static.wikia.nocookie.net/starwars/images/8/80/Reign-of-the-Empire-Book-Three-temporary-cover.jpg",
    releaseDate: "2027",
  },
    {
    id: "lost-stars",
    title: "Lost Stars",
    author: "Claudia Gray",
    timelinePlacement: -6.0,
    timelineLabel: "6 BBY-5 ABY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539015804i/25067046.jpg",
    amazonLink: "https://amzn.to/4nxjMCo",
    description: `The reign of the Galactic Empire has reached the Outer Rim planet of Jelucan, where aristocratic Thane Kyrell and rural villager Ciena Ree bond over their love of flying. Enrolling at the Imperial Academy together to become fighter pilots for the glorious Empire is nothing less than a dream come true for the both of them. But Thane sours on the dream when he sees firsthand the horrific tactics the Empire uses to maintain its ironclad rule.

Bitter and disillusioned, Thane joins the fledgling Rebellion—putting Ciena in an unbearable position to choose between her loyalty to the Empire and her love for the man she's known since childhood.

Now on opposite sides of the war, will these friends turned foes find a way to be together, or will duty tear them—and the galaxy—apart.`,
    releaseDate: "September 4, 2015",
  },
  {
    id: "ezra-s-gamble",
    title: "Ezra's Gamble",
    author: "Ryder Windham",
    timelinePlacement: -5.0,
    timelineLabel: "5 BBY",
    bookType: ["Middle Grade"],
    coverUrl: getCanonCover("ezrasgamble.jpg"),
    amazonLink: "https://amzn.to/4tNQLnt",
    description: `Fourteen year-old Ezra Bridger lives alone on the Outer Rim planet of Lothal. He fends for himself by picking up odd jobs and hustling the unsuspecting Stormtrooper. But when Arena Day arrives - an underground tournament where mighty beasts battle to the finish and all the swindlers, gamblers and no-gooders come from all corners of the planet to make a profit - Ezra is whisked into an unlikely partnership with the fearsome bounty hunter Bossk and enmeshed in a high-stakes chase against an endless fleet of troopers. Ezra isn't willing to trust anyone, but he soon learns that surviving doesn't always mean just fending for himself.`,
    releaseDate: "August 5, 2014",
  },
  {
    id: "edge-of-the-galaxy",
    title: "Servants of the Empire: Edge of the Galaxy",
    author: "Jason Fry",
    timelinePlacement: -6.0,
    timelineLabel: "6-5 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91nSFulukqL._SL1500_.jpg",
    amazonLink: "https://amzn.to/43fv7O6",
    description: `Zare Leonis seems destined to become a poster boy for the Empire. His sister Dhara has been accepted into the esteemed Imperial Academy on Lothal and Zare is confident he'll join her in a year's time. But a year can bring plenty of unwelcome changes. Not only does he begin to uncover the Empire's destructive plans for Lothal and the livelihood of its people, but his unease hits home when Dhara goes mysteriously missing. Zare is forced to question everything and rethink what it means to be a good servant of the Empire.`,
    releaseDate: "October 21, 2014",
  },
  {
    id: "rebel-in-the-ranks",
    title: "Servants of the Empire: Rebel in the Ranks",
    author: "Jason Fry",
    timelinePlacement: -5.0,
    timelineLabel: "5 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/814w2Z8d6vL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4wAyFrT",
    description: `As a new student at Lothal's Imperial Academy, Zare Leonis does everything it takes to pass as a model cadet. But secretly, he is a hidden enemy among Imperial loyalists, determined to discover the truth about his missing sister and to bring down the Empire. Luckily, he has his tech-savvy girlfriend Merei by his side, willing to help him however she can—even if it means dealing with criminals in the shadiest parts of Capital City. In the meantime Zare must face down a dangerous foe of his own: Lieutenant Curahee, who seems bent on pushing Zare to his breaking point. Join these rebellious cadets as they risk it all to take on the fearsome Empire.`,
    releaseDate: "March 3, 2015",
  },
  {
    id: "imperial-justice",
    title: "Servants of the Empire: Imperial Justice",
    author: "Jason Fry",
    timelinePlacement: -4.0,
    timelineLabel: "4 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/61RYR5IT4SL._SL1500_.jpg",
    amazonLink: "https://amzn.to/42LqDyw",
    description: `What if you uncovered a conspiracy that reached to every corner of the Galactic Empire--and you were the only one who knew about it? This action-packed junior novel tells an original story of intrigue, espionage, and coming of age, all set in the world of Star Wars Rebels.[1]

As a new student at Lothal's Imperial Academy, Zare Leonis does everything it takes to pass a model cadet. But he is a hidden enemy among Imperial loyalists, determined to discover the truth about his missing sister and to bring down the Empire. Luckily, he has his tech-savvy girlfriend, Merei, by his side, willing to help him however she can—even if means dealing with criminals in the shadiest parts of Capital City. In the meantime, Zare must face down a dangerous foe of his own: Captain Roddance, who seems bent on pushing Zare to his breaking point. Join these rebellious cadets as they risk everything to take on the fearsome Empire.`,
    releaseDate: "July 7, 2015",
  },
  {
    id: "the-secret-academy",
    title: "Servants of the Empire: The Secret Academy",
    author: "Jason Fry",
    timelinePlacement: -4.0,
    timelineLabel: "4 BBY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51nyJ4nVnPL.jpg",
    amazonLink: "https://amzn.to/4nzSoUc",
    description: `What if you uncovered a conspiracy that reached to every corner of the Galactic Empire—and you were the only one who knew about it? This action-packed conclusion to the Servants of the Empire tells an original story of intrigue, espionage, and coming of age, all set in the world of Star Wars Rebels.`,
    releaseDate: "October 6, 2015",
  },
  {
    id: "the-mandalorian-junior-novel",
    title: "Star Wars: The Mandalorian Junior Novel",
    author: "Joe Schreiber",
    timelinePlacement: 9.0,
    timelineLabel: "9 ABY",
    bookType: ["Middle Grade"],
    amazonLink: "https://amzn.to/4tKFog6",
    coverUrl:
      "https://m.media-amazon.com/images/I/81POs6kkJYL._SL1500_.jpg",
    description: `Relive the excitement of the first season of Star Wars: The Mandalorian!

After the fall of the Empire but before the emergence of the First Order, a lone bounty hunter known as The Mandalorian travels the outer reaches of the galaxy. When his newest bounty hunting target turns out to be a small Child, the Mandalorian decides the Child must be protected at all costs. Relive all the excitement of the first season of the smash-hit streaming series in this action-packed junior novel by Joe Schreiber! Includes an insert of color photos from the show!`,
    releaseDate: "January 5, 2021",
  },
  {
    id: "the-mandalorian-season-2-junior-novel",
    title: "Star Wars: The Mandalorian Season 2 Junior Novel",
    author: "Joe Schreiber",
    timelinePlacement: 9.0,
    timelineLabel: "9 ABY",
    bookType: ["Middle Grade"],
    amazonLink: "https://amzn.to/3RPlKlG",
    coverUrl:
      "https://m.media-amazon.com/images/I/81UPkfcZaHL._SL1500_.jpg",
    description: `Relive the excitement of the second season of Star Wars: The Mandalorian!

The Mandalorian and Grogu continue their journey to find more of Grogu's kind as they make their way through a dangerous galaxy in the tumultuous era following the fall of the Empire. They will encounter strange creatures, mysterious Jedi, old friends, and the sinister Moff Gideon, who wants the Child for his own purposes....

This is the way!`,
    releaseDate: "January 4, 2022",
  },
  {
    id: "last-shot",
    title: "Last Shot",
    author: "Daniel José Older",
    timelinePlacement: 7.0,
    timelineLabel: "7 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1523305092i/38616169.jpg",
    amazonLink: "https://amzn.to/42FkwMa",
    description:
      "The author of Half-Resurrection Blues and Shadowshaper has penned this novel that connects three eras in the lives of Han Solo and Lando Calrissian. Part of it takes place before the events of Solo and focuses on Lando and L3-37, Lando’s droid sidekick. Part of it takes place between Solo and A New Hope, and that focuses on Han and Chewie, where we meet Sana Starros for the first time. Part of it takes place post-Return of the Jedi, and that’s where we see Han, Leia, a very young Ben Solo, and Lando come into the story.",
    releaseDate: "April 17, 2018",
  },
  {
    id: "poe-dameron-free-fall",
    title: "Poe Dameron: Free Fall",
    author: "Alex Segura",
    timelinePlacement: 19.0,
    timelineLabel: "18-19 ABY",
    bookType: ["Young Adult"],
    amazonLink: "https://amzn.to/4tJZib2",
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1591020513i/50929287.jpg",
    description: `Poe Dameron has spent his life wanting to fly starships, and his mother, a former A-wing pilot for the Rebellion, was more than happy to show her son everything she knew. But when she dies an untimely death, Poe is left with his father, Kes Dameron, who struggles with his own grief and does his best to keep Poe close, and safe. But Poe wants more. He wants to leave the sleepy moon Yavin IV and find adventure in the wider galaxy.

When a group of smugglers offers him a job piloting them off-world, it seems like an opportunity Poe can't possibly refuse. And by the time he finds out the smugglers are actually part of the fearsome criminal enterprise called the Spice Runners of Kjimii, Poe is already in deep. His burgeoning friendship--and perhaps more--with one young Spice Runner, Zorii, is more incentive for Poe to stick around.

But is this the life he's meant to have? Is it even the life he really wants? Poe will have to find those answers for himself to discover the man he is and wants to be.`,
    releaseDate: "August 4, 2020",
  },
  {
    id: "book-of-boba-fett",
    title: "The Book of Boba Fett Junior Novel",
    author: "Joe Schreiber",
    timelinePlacement: 9.0,
    timelineLabel: "9 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91we7bTtr9L._SL1500_.jpg",
    amazonLink: "https://amzn.to/4uVO9Vo",
    description: `Relive the excitement of the hit series Star Wars: The Book of Boba Fett!

Former bounty hunter Boba Fett has survived the Sarlacc pit, nursed back to health and taken in by a tribe of Tuskens on Tatooine. When the tribe is slaughtered, Boba seeks revenge, and sets himself up in Jabba the Hutt's old palace along with his new right hand, assassin Fennec Shand. But the fight for power on Tatooine goes deeper than expected, and Boba will need help from new and old allies in order to secure his position and avenge his tribe.

It's just business. Or is it?`,
    releaseDate: "January 3, 2023",
  },
  {
    id: "shadow-of-the-sith",
    title: "Shadow of the Sith",
    author: "Adam Christopher",
    timelinePlacement: 21.0,
    timelineLabel: "21 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1648149155i/59149048.jpg",
    amazonLink: "https://amzn.to/4nuxTbD",
    description: `Luke Skywalker and Lando Calrissian return in this essential novel set between Return of the Jedi and The Force Awakens.

The Empire is dead. Nearly two decades on from the Battle of Endor, the tattered remnants of Palpatine’s forces have fled to the farthest reaches of the galaxy. But for the heroes of the New Republic, danger and loss are ever-present companions, even in this newly forged era of peace.

Jedi Master Luke Skywalker is haunted by visions of the dark side, foretelling an ominous secret growing somewhere in the depths of space, on a dead world called Exegol. The disturbance in the Force is undeniable…and Luke’s worst fears are confirmed when his old friend, Lando Calrissian, comes to him with reports of a new Sith menace.

After his daughter was stolen from his arms, Lando searched the stars for any trace of his lost child. But every new rumor only led to dead ends and fading hopes–until he crossed paths with Ochi of Bestoon, a Sith assassin tasked with kidnapping a young girl.

Ochi’s true motives remain shrouded to Luke and Lando. For on a junkyard moon, a mysterious envoy of the Sith Eternal has bequeathed a sacred blade to the assassin, promising that it will give him answers to the questions that have haunted him since the Empire fell. In exchange, he must complete a final mission: return to Exegol with the key to the Sith’s glorious rebirth—the granddaughter of Darth Sidious himself, Rey.

As Ochi hunts Rey and her parents to the edge of the galaxy, Luke and Lando race into the mystery of the Sith’s lingering shadow and aid a young family running for their lives.`,
    releaseDate: "June 28, 2022",
  },
  {
    id: "bloodline",
    title: "Bloodline",
    author: "Claudia Gray",
    timelinePlacement: 28.0,
    timelineLabel: "28 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1480061169i/33123801.jpg",
    amazonLink: "https://amzn.to/4dKrgi1",
    description: `Witness the birth of the Resistance

When the Rebellion defeated the Empire in the skies above Endor, Leia Organa believed it was the beginning to a lasting peace. But after decades of vicious infighting and partisan gridlock in the New Republic Senate, that hope seems like a distant memory.

Now a respected senator, Leia must grapple with the dangers that threaten to cripple the fledgling democracy—from both within and without. Underworld kingpins, treacherous politicians, and Imperial loyalists are sowing chaos in the galaxy. Desperate to take action, senators are calling for the election of a First Senator. It is their hope that this influential post will bring strong leadership to a divided galaxy.

As the daughter of Darth Vader, Leia faces with distrust the prospect of any one person holding such a powerful position—even when supporters suggest Leia herself for the job. But a new enemy may make this path Leia’s only option. For at the edges of the galaxy, a mysterious threat is growing...`,
    releaseDate: "May 3, 2016",
  },
  {
    id: "legends-of-luke-skywalker",
    title: "The Legends of Luke Skywalker",
    author: "Ken Liu",
    timelinePlacement: 28.0,
    timelineLabel: "28 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71pVDc92JlL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4tK6bco",
    description: `As a cargo ship rockets across the galaxy to Canto Bight, the deckhands on board trade stories about legendary Jedi Knight Luke Skywalker. But are the stories of iconic and mysterious Luke Skywalker true, or merely tall tales passed from one corner of the galaxy to another? Is Skywalker really a famous Jedi hero, an elaborate charlatan,or even part droid? The deckhands will have to decide for themselves when they hear The Legends of Luke Skywalker.`,
    releaseDate: "October 31, 2017",
  },
  {
    id: "before-the-awakening",
    title: "Before the Awakening",
    author: "Greg Rucka",
    timelinePlacement: 31.0,
    timelineLabel: "31-34 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/818ZYXvDWHL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4wJyGK4",
    description: `Before they banded together to battle the evil First Order, Rey, Poe, and Finn led very different lives. These are their stories . . . before the awakening. Celebrate the 10th anniversary of Episode VII: The Force Awakens with this first-ever paperback edition of the New York Times best seller!

A shadow has been cast across the galaxy. Where once there were hope and peace, now there are fear and the looming clouds of war. The First Order is rising, its power growing, and the new Republic may well be powerless to stop it.

Three individuals will find themselves drawn into the heart of this conflict: FN-2187 is a stormtrooper trained by the First Order and plagued by doubt. On Jakku, a young woman who calls herself Rey struggles to live in an isolation necessary for her own survival. And among the stars, Poe Dameron strives to serve a Republic he has always believed in as sinister powers threaten to break his resolve.

These are their stories in the days, weeks, and months before The Force Awakens.`,
    releaseDate: "December 18, 2015",
  },
  {
    id: "force-collector",
    title: "Force Collector",
    author: "Kevin Shinick",
    timelinePlacement: 32.0,
    timelineLabel: "32 ABY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1556987579i/45452547.jpg",
    amazonLink: "https://amzn.to/4uQV0zD",
    description: `Karr is a teenage boy like many others in the galaxy. He goes to school, helps his parents with the family business, likes speeders and droids. But Karr also has a secret: When he touches certain objects, he gets searing headaches and blacks out. And along with the pain sometimes come visions of people he doesn't know and places he's never been.

Karr's parents worry that he's sick; his grandmother is convinced the visions come from the Force. But it's been years since anyone has heard from the last of the Jedi - Luke Skywalker. Are there any Jedi left to guide Karr in the use of his abilities? Is anyone even willing to talk about the Jedi and what happened to them, as their memory continues to fade and the First Order rises? Stuck on his isolated home planet, Karr becomes a collector of historical artifacts, hoping to one day find an object that will give him a vision about the secrets of the Jedi.

When his grandmother dies and his parents announce they're sending him away to a school on the other side of the planet, Karr reaches his breaking point. He needs to know what his destiny holds, and whether the Jedi are involved. Accompanied by Maize, the blunt, unpredictable new girl at school with ties to the First Order, and RZ-7, Karr's solicitous droid companion, he sets off into the larger galaxy to find the truth. His adventures will take him from Utapau to Jakku to Takodana and beyond as he learns more about the Jedi than he could have expected...and about his own place in the Force.`,
    releaseDate: "November 18, 2019",
  },
  {
    id: "eyes-like-stars",
    title: "Eyes Like Stars",
    author: "Ashley Poston",
    timelinePlacement: 33.0,
    timelineLabel: "33 ABY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91RpZn0-p6L._SL1500_.jpg",
    amazonLink: "https://amzn.to/4nCUtPj",
    description: `A charming young adult romance featuring all-new characters (plus cameos!), a magnetic attraction, a mysterious artifact, and the fearsome First Order from New York Times bestseller, Ashley Poston.

When eighteen-year-old Ardent Quay saves the life of a fast-talking Wild Spacer on Coruscant, she doesn’t expect a thank you—and she certainly doesn’t expect him to stowaway on her father’s star tour ship. Yet here he is, taking up residence in the ship’s pantry and eating all her favorite snacks. He’s mysterious and coy and strange, with silver hair and eyes speckled with stars, and no matter how much she tries to pull away, she can’t. She should report him to her father, but the stowaway soon convinces her that there’s a nefarious plot at play on this ship, one that has the lives of everyone onboard at stake. With the galaxy on the brink of war and the First Order breathing down their necks, Ardent and her stowaway must ferry a precious artifact to its homeworld without getting caught—or worse, killed.

This is, actually, a terrible time to take a tour of the galaxy. And an even worse time to fall in love.`,
    releaseDate: "July 21, 2026",
  },
  {
    id: "join-the-resistance",
    title: "Join the Resistance",
    author: "Ben Acker",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91rcwUAC0aL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4dtZq9X",
    description:`MATTIS BANZ knows that he's meant to be a hero of the galaxy like the legendary Luke Skywalker, and when General Leia Organa's Resistance recruits him to join its efforts against the evil First Order, he finally has a chance to fulfill his destiny. But the rest of his squadron doesn't seem very promising. Sure, there's the Zeltron girl Lorica, famous for her exploits foiling evil smugglers, but there's also the swamp boy named Dec, who seems to enjoy causing trouble; Dec's "brother," a droid who thinks he's a pilot; Sari, whose imposing size contradicts her sweet nature; and Jo , the stuffy group leader with secrets. How is Mattis supposed to be the next Poe Dameron when he and his squad mates spend more time in trouble than flying X-wings? The team will have to learn how to work together when the going gets tough, or they won't be going anywhere. . . .`,
    releaseDate: "March 7, 2017",
  },
  {
    id: "join-the-resistance-escape-from-vodran",
    title: "Join the Resistance: Escape from Vodran",
    author: "Ben Acker",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91dW0jmfGqL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4eSSyE5",
    description:`Mattis, Lorica, AG-90 and Jo have been captured by the First Order! And things only go from bad to worse when Jo turns traitor on them as soon as they’re in custody, and AG is taken away to be reprogrammed as a villainous First Order droid! Can the squabbling Mattis and Lorica work together to figure out a way to escape before they are interrogated...or worse? Meanwhile, Dec and Sari seek out the help of the intimidating gangster Harra the Hutt to save their friends, but bargaining with a Hutt brings its own set of problems. The members of J Squadron will need quick planning and even quicker moves if any of them are going to survive!`,
    releaseDate: "October 3, 2017",
  },
  {
    id: "phasma",
    title: "Phasma",
    author: "Delilah S. Dawson",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1492211485i/34859132.jpg",
    amazonLink: "https://amzn.to/4uHpF2i",
    description: `Discover Captain Phasma’s mysterious history in this “Journey to Star Wars: The Last Jedi” novel.

One of the most cunning and merciless officers of the First Order, Captain Phasma commands the favor of her superiors, the respect of her peers, and the terror of her enemies. But for all her renown, Phasma remains as virtually unknown as the impassive expression on her gleaming chrome helmet. Now, an adversary is bent on unearthing her mysterious origins—and exposing a secret she guards as zealously and ruthlessly as she serves her masters.`,
    releaseDate: "September 1, 2017",
  },
  {
    id: "star-wars-the-force-awakens",
    title: "Star Wars: The Force Awakens",
    author: "Alan Dean Foster",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adaptations", "Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1450520344i/25387202.jpg",
    amazonLink: "https://amzn.to/3Rdt2PY",
    description: `More than thirty years ago, Star Wars burst onto the big screen and became a cultural phenomenon. Now the next adventures in this blockbuster saga are poised to captivate old and new fans alike – beginning with the highly anticipated Star Wars: The Force Awakens. And alongside the cinematic debut comes the thrilling novel adaptation by New York Times bestselling science fiction master Alan Dean Foster.

Set years after Return of the Jedi, this stunning new action-packed adventure rockets us back into the world of Princess Leia, Han Solo, Chewbacca, C-3PO, R2-D2, and Luke Skywalker, while introducing a host of exciting new characters. Darth Vader may have been redeemed and the Emperor vanquished, but peace can be fleeting, and evil does not easily relent. Yet the simple belief in good can still empower ordinary individuals to rise and meet the greatest challenges.

So return to that galaxy far, far away, and prepare yourself for what happens when the Force awakens…`,
    releaseDate: "January 5, 2016",
  },
  {
    id: "force-awakens-junior",
    title: "Star Wars: The Force Awakens: A Junior Novel",
    author: "Michael Kogge",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/51up3vZhE2L.jpg",
    amazonLink: "https://amzn.to/3RlwCHV",
    description: `Relive the excitement of one of the most anticipated movies of all time with this action-packed retelling of Star Wars: The Force Awakens!

Many years have passed since the Jedi Knight Luke Skywalker and the Rebel Alliance were victorious over the evil Empire, and the galaxy has been at peace. But now a new darkness is rising. The brave men and women of the Resistance must stand against Kylo Ren and the villainous First Order.`,
    releaseDate: "February 16, 2016",
  },
  {
    id: "join-the-resistance-attack-on-starkiller-base",
    title: "Join the Resistance: Attack on Starkiller Base",
    author: "Ben Acker",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91LVHVfmPlL._SL1500_.jpg",
    amazonLink: "https://amzn.to/3RQcL3D",
    description:`The members of J Squadron are back at it again, fighting the First Order, and trying desperately to be as cool as Poe Dameron. Having escaped the First Order, this ragtag group is on the run--trying to get back to the Resistance before it's too late--in the third book of this hilarious Star Wars-meets- The Goonies original fiction series.`,
    releaseDate: "July 31, 2018",
  },
  {
    id: "the-last-jedi-cobalt-squadron",
    title: "The Last Jedi: Cobalt Squadron",
    author: "Elizabeth Wein",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71WQQGQsWnL._SL1200_.jpg",
    amazonLink: "https://amzn.to/3PD0YF8",
    description: `New York Times bestselling author Elizabeth Wein (Code Name Verity, Rose Under Fire) journeys to a galaxy far, far away to bring readers the harrowing story of the courageous bomber pilots and technicians of Cobalt Squadron!`,
    releaseDate: "December 15, 2017",
  },
  {
    id: "galaxys-edge-black-spire",
    title: "Galaxy's Edge: Black Spire",
    author: "Delilah S. Dawson",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1553282628i/43837995.jpg",
    amazonLink: "https://amzn.to/49RIkAj",
    description:
      "After devastating losses at the hands of the First Order, General Leia Organa has dispatched her agents across the galaxy in search of allies, sanctuary, and firepower--and her top spy, Vi Moradi, may have just found all three, on a secluded world at the galaxy's edge. A planet of lush forests, precarious mountains, and towering, petrified trees, Batuu is on the farthest possible frontier of the galactic map, the last settled world before the mysterious expanse of Wild Space. The rogues, smugglers, and adventurers who eke out a living on the largest settlement on the planet, Black Spire Outpost, are here to avoid prying eyes and unnecessary complications. Vi, a Resistance spy on the run from the First Order, is hardly a welcome guest. And when a shuttle full of stormtroopers lands in her wake, determined to root her out, she has no idea where to find help. To survive, Vi will have to seek out the good-hearted heroes hiding in a world that redefines scum and villainy. With the help of a traitorous trooper and her acerbic droid, she begins to gather a colorful band of outcasts and misfits, and embarks on a mission to spark the fire of resistance on Batuu--before the First Order snuffs it out entirely.",
    releaseDate: "August 27, 2019",
  },
  {
    id: "star-wars-the-last-jedi",
    title: "Star Wars: The Last Jedi: Expanded Edition",
    author: "Jason Fry",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adaptations", "Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1513867296i/36389764.jpg",
    amazonLink: "https://amzn.to/3R9iIZo",
    description: `NEW YORK TIMES BESTSELLER • Written with input from director Rian Johnson, this official adaptation of Star Wars: The Last Jedi expands on the film to include scenes from alternate versions of the script and other additional content.
 
From the ashes of the Empire has arisen another threat to the galaxy’s freedom: the ruthless First Order. Fortunately, new heroes have emerged to take up arms—and perhaps lay down their lives—for the cause. Rey, the orphan strong in the Force; Finn, the ex-stormtrooper who stands against his former masters; and Poe Dameron, the fearless X-wing pilot, have been drawn together to fight side-by-side with General Leia Organa and the Resistance. But the First Order’s Supreme Leader Snoke and his merciless enforcer Kylo Ren are adversaries with superior numbers and devastating firepower at their command. Against this enemy, the champions of light may finally be facing their extinction. Their only hope rests with a lost legend: Jedi Master Luke Skywalker.
 
Where the action of Star Wars: The Force Awakens ended, Star Wars: The Last Jedi begins, as the battle between light and dark climbs to astonishing new heights.`,
    releaseDate: "March 6, 2018",
  },
  {
    id: "last-jedi-a-junior-novel",
    title: "Star Wars: The Last Jedi: A Junior Novel",
    author: "Michael Kogge",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91fYa810sIL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4u4sWYV",
    description: `The First Order has the Resistance on the run. Things grow ever more desperate for General Leia Organa, pilot Poe Dameron, and former stormtrooper Finn as they desperately try to evade the First Order fleet. Rey has journeyed to the remote planet Ahch-To to ask legendary Jedi Luke Skywalker to lend his aid to the Resistance, but Luke has closed himself off to the Force and the rest of the galaxy. Rey knows she must convince the Jedi to help bring down the First Order, or all might be lost.`,
    releaseDate: "March 6, 2018",
  },
  {
    id: "resistance-reborn",
    title: "Resistance Reborn",
    author: "Rebecca Roanhorse",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572828304i/45452530.jpg",
    amazonLink: "https://amzn.to/43fiOkJ",
    description: `In this pivotal prequel to Star Wars: The Rise of Skywalker, the heroes of the Resistance—Poe Dameron, General Leia Organa, Rey, and Finn—must fight back from the edge of oblivion.

The Resistance is in ruins. In the wake of their harrowing escape from Crait, what was once an army has been reduced to a handful of wounded heroes. Finn, Poe, Rey, Rose, Chewbacca, Leia Organa—their names are famous among the oppressed worlds they fight to liberate. But names can only get you so far, and Leia’s last desperate call for aid has gone unanswered.

From the jungles of Ryloth to the shipyards of Corellia, the shadow of the First Order looms large, and those with the bravery to face the darkness are scattered and isolated. If hope is to survive, the Resistance must journey throughout the galaxy, seeking out more leaders—including those who, in days gone by, helped a nascent rebellion topple an empire. Battles will be fought, alliances will be forged, and the Resistance will be reborn.`,
    releaseDate: "November 5, 2019",
  },
    {
    id: "legacy",
    title: "Legacy",
    author: "Madeleine Roux",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/I/818IFzhLWPL._SY466_.jpg",
    amazonLink: "https://amzn.to/4eXzmoD",
    description: `Set between Episodes VIII and IX, Rey and Leia embark on a quest to repair Rey’s lightsaber and rekindle the legacy of the Jedi.

After barely escaping the First Order on Crait, Rey and the Resistance are struggling to rebuild. Her friends need the last Jedi more than ever, but Rey feels alone and overwhelmed. Jedi tradition is built on masters and apprentices, and Rey’s teacher is gone. Leia Organa tries her best to train Rey in the ways of the Force as Luke did for her so many years ago, but Leia’s knowledge is limited, Rey’s lightsaber is broken, and the specter of Kylo Ren and regrets from the past haunt them both. How can Leia pass the torch when she herself is unsure of the way?

But then, the ancient Jedi texts offer a glimmer of hope: a long-forgotten Jedi temple on Tython that might hold the key to repairing Rey’s saber. Rey leaps at the chance to journey there—and to her surprise, so does Leia.

Rey and Leia’s nascent mentorship is put to the test when they discover the temple on Tython is filled with obscure clues to decipher and arcane trials to complete. As they work to unravel the temple’s mysteries, they encounter a group of refugees living in its shadow, hiding from a First Order officer hot on the trail of two freedom fighters in their midst. With the threat of the First Order looming and the secrets of the temple yet to be unlocked, the newly forged master and apprentice must confront their pasts, reach each other in the present, and decide what it means to carry the legacy of the Jedi into the future.`,
    releaseDate: "July 28, 2026",
  },
    {
    id: "spark-of-the-resistance",
    title: "Spark of the Resistance",
    author: "Justina Ireland",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/71rJMzT1WWL._SL1200_.jpg",
    amazonLink: "https://amzn.to/49doTBT",
    description: `Rey, Poe Dameron, Rose Tico, and BB-8 are finishing up a simple assignment to retrieve much-needed supplies for the struggling Resistance when they receive a distress call from the planet Minfar. Although they have orders to return to the Resistance immediately, Rey and the others decide they can't ignore someone in need -- especially someone who needs help against the First Order.
When they arrive on Minfar, they are greeted by the Zixon, a peaceful, warm-hearted species who suffered under the Empire and are now at risk of falling to the First Order. Despite being vastly outnumbered by First Order forces, Rey and her friends vow that they will fight to protect the Zixon -- or what else does the Resistance stand for? Rey, Poe, Rose and BB-8 will have to face stormtroopers, deadly flying creatures, and even a Star Destroyer to keep Minfar safe and strike a blow against the First Order!`,
    releaseDate: "October 4, 2019",
  },
  {
    id: "pirate-s-price",
    title: "Pirate's Price",
    author: "Lou Anders",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/919uym8mm6L._SL1500_.jpg",
    amazonLink: "https://amzn.to/42GeR8H",
    description: `All-new exciting tales about Han Solo and Chewbacca and their adventures in the Millennium Falcon—along with the pirate Hondo Ohnaka!`,
    releaseDate: "January 8, 2019",
  },
  {
    id: "galaxys-edge-a-crash-of-fate",
    title: "Galaxy's Edge: A Crash of Fate",
    author: "Zoraida Córdova",
    timelinePlacement: 34.0,
    timelineLabel: "34 ABY",
    bookType: ["Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677887029i/70947866.jpg",
    amazonLink: "https://amzn.to/4wNUqEL",
    description: `Izzy and Jules were childhood friends, climbing the spires of Batuu, inventing silly games, and dreaming of adventures they would share one day. Then, Izzy's family left abruptly, without even a chance to say goodbye. Izzy's life became one of constant motion, traveling from one world to the next, until her parents were killed and she became a low-level smuggler to make ends meet. Jules remained on Batuu, eventually becoming a farmer like his father, but always yearning for something more.

Now, thirteen years after she left, Izzy is returning to Batuu. She's been hired to deliver a mysterious parcel, and she just wants to finish the job and get gone. But upon arrival at Black Spire Outpost she runs smack into the one person who still means something to her after all this time: Jules.

The attraction between them is immediate, yet despite Jules seeming to be everything she's ever needed, Izzy hesitates. How can she drag this good-hearted man into the perilous life she's chosen?

Jules has been trying to figure out his future, but now all he knows for certain is that he wants to be with Izzy. How can he convince her to take a chance on someone who's never left the safety of his homeworld?`,
    releaseDate: "August 6, 2019",
  },
  {
    id: "star-wars-the-rise-of-skywalker",
    title: "Star Wars: The Rise of Skywalker: Expanded Edition",
    author: "Rae Carson",
    timelinePlacement: 35.0,
    timelineLabel: "35 ABY",
    bookType: ["Adaptations", "Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1575410253l/52306589.jpg",
    amazonLink: "https://amzn.to/4dJmT6O",
    description: `Witness the epic final chapter of the Skywalker saga with the official novelization of Star Wars: The Rise of Skywalker, including expanded scenes and additional content not seen in theaters!

The Resistance has been reborn. But although Rey and her fellow heroes are back in the fight, the war against the First Order, now led by Supreme Leader Kylo Ren, is far from over. Just as the spark of rebellion is rekindling, a mysterious signal broadcasts throughout the galaxy, with a chilling message: Emperor Palpatine, long thought defeated and destroyed, is back from the dead.

Has the ancient Lord of the Sith truly returned? Kylo Ren cuts a swath of destruction across the stars, determined to discover any challenge to his control over the First Order and his destiny to rule over the galaxy—and crush it completely. Meanwhile, to discover the truth, Rey, Finn, Poe, and the Resistance must embark on the most perilous adventure they have ever faced.

Featuring all-new scenes adapted from never-before-seen material, deleted scenes, and input from the filmmakers, the story that began in Star Wars: The Force Awakens and continued in Star Wars: The Last Jedi reaches an astounding conclusion.`,
    releaseDate: "March 17, 2020",
  },
  {
    id: "rise-of-skywalker-junior",
    title: "Star Wars: The Rise of Skywalker: A Junior Novel",
    author: "Michael Kogge",
    timelinePlacement: 35.0,
    timelineLabel: "35 ABY",
    bookType: ["Adaptations", "Middle Grade"],
    coverUrl:
      "https://m.media-amazon.com/images/I/91vUSJUExHL._SL1500_.jpg",
    amazonLink: "https://amzn.to/4eX0zrI",
    description: `Something has awakened.

Every generation has a legend.

Nobody's ever really gone.

The conclusion of the Skywalker Saga is finally here. This junior novel retelling of Star Wars: The Rise of Skywalker, contains deleted and extended scenes, including exclusive scenes you won't find anywhere else!`,
    releaseDate: "April 16, 2020",
  },
  {
    id: "the-last-order",
    title: "The Last Order",
    author: "Kwame Mbalia",
    timelinePlacement: 35.0,
    timelineLabel: "35 ABY",
    bookType: ["Young Adult"],
    coverUrl:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1752371982i/232574658.jpg",
    amazonLink: "https://amzn.to/4wx4gdE",
    description: `New York Times best-selling author Kwame Mbalia makes his Star Wars debut with this exciting YA novel!

Following the end of Star Wars: The Rise of Skywalker, the Resistance rescues a ship full of young passengers who had been kidnapped by the First Order. As Finn and Jannah set out to find the First Order officer responsible before he can endanger any more children, the two former stormtroopers must wrestle with their own complicated pasts as soldiers of the oppressive regime.

Take a deep dive into the pasts of popular characters Finn and Jannah in this richly-drawn, action-packed story that fans have been asking for.`,
    releaseDate: "October 21, 2025",
  },
];