export interface ComicDrop {
  id: string;
  title: string;
  series: string;
  episode: string;
  studio: string;
  genre: string;
  coverImage: string;
  badge?: string;
  reads: string;
  rating: number;
  description: string;
}

export interface StudioInfo {
  id: string;
  name: string;
  role: string;
  focus: string[];
  logo: string;
  description: string;
  activeProjects: string;
}

export interface CharacterLore {
  name: string;
  series: string;
  role: string;
  image: string;
  studio: string;
}

export interface PodcastEpisode {
  code: string;
  title: string;
  show: string;
  guest: string;
  duration: string;
  description: string;
}

export const HERO_FEATURED = [
  {
    id: "rank-1",
    title: "Rank 1",
    tagline: "The Pinnacle of Competitive Superhuman Combat",
    studio: "Studio N2K",
    genre: "Action · Sci-Fi",
    image: "/hero/rank-1.jpg",
    reads: "148K",
    rating: 4.9,
    description: "In an arena where augmentations redefine humanity, one contender fights for more than the title.",
  },
  {
    id: "khanya",
    title: "Khanya",
    tagline: "The Ancient Light Awakens in Neo-Azania",
    studio: "Krash Nation",
    genre: "Fantasy · Cyberpunk",
    image: "/hero/khanya-e1.jpg",
    reads: "210K",
    rating: 4.95,
    description: "Centuries of dormant ancestral energy ignite within an unsuspecting courier in the neon metropolis.",
  },
  {
    id: "rrba",
    title: "RRBA",
    tagline: "Rebel Rogue Botanical Alliance",
    studio: "Studio Leviathan",
    genre: "Dystopian · Adventure",
    image: "/hero/rrba.jpg",
    reads: "185K",
    rating: 4.88,
    description: "In a world starved of organic life, an outlaw botanical syndicate holds the cure to extinction.",
  },
  {
    id: "flow-lee",
    title: "Flow Lee",
    tagline: "Rhythm, Kinetic Flow & Street Legends",
    studio: "Kamo Vision Comics",
    genre: "Martial Arts · Urban",
    image: "/hero/nhlanhla-kumalo-flow-lee-concept-02.jpg",
    reads: "92K",
    rating: 4.82,
    description: "Every movement is rhythm. Every strike is percussion. A street prodigy dances through dangerous syndicates.",
  },
  {
    id: "zipho",
    title: "Zipho",
    tagline: "A Gift of Shadows and Memory",
    studio: "Dream Shards",
    genre: "Mystery · Supernatural",
    image: "/covers/zipho-1.jpg",
    reads: "116K",
    rating: 4.86,
    description: "Memories can be bought, stolen, and weaponized. Zipho has inherited recollections that do not belong to him.",
  },
];

export const LATEST_DROPS: ComicDrop[] = [
  {
    id: "rrba-1",
    title: "RRBA #001",
    series: "RRBA",
    episode: "Issue #001",
    studio: "Studio Leviathan",
    genre: "Sci-Fi",
    coverImage: "/covers/rrba-1.jpg",
    badge: "Popular",
    reads: "42.8K",
    rating: 4.9,
    description: "The underground syndicate initiates their first strike against the biodome monopolists.",
  },
  {
    id: "zipho-1",
    title: "Zipho #001",
    series: "Zipho",
    episode: "Issue #001",
    studio: "Dream Shards",
    genre: "Mystery",
    coverImage: "/covers/zipho-1.jpg",
    badge: "New Release",
    reads: "28.4K",
    rating: 4.8,
    description: "Zipho awakens with fractured memories that place him at the scene of the corporate heist.",
  },
  {
    id: "khanya-e1",
    title: "Khanya S1 E1",
    series: "Khanya",
    episode: "S1 Episode 1",
    studio: "Krash Nation",
    genre: "Action/Fantasy",
    coverImage: "/covers/khanya-e1.jpg",
    badge: "Trending",
    reads: "89.2K",
    rating: 5.0,
    description: "The neon skyline fractures as ancient solar light ignites across the high-rises.",
  },
  {
    id: "rrba-infamous",
    title: "RRBA: The Infamous",
    series: "RRBA",
    episode: "Special Edition",
    studio: "Studio Leviathan",
    genre: "Dystopian",
    coverImage: "/covers/rrba-infamous.jpg",
    badge: "Drop",
    reads: "36.1K",
    rating: 4.9,
    description: "A classified dossiers drop shedding light on the bounty hunter coalition tracking the botanists.",
  },
  {
    id: "zipho-2",
    title: "Zipho #002",
    series: "Zipho",
    episode: "Issue #002",
    studio: "Dream Shards",
    genre: "Mystery",
    coverImage: "/covers/zipho-2.jpg",
    reads: "31.9K",
    rating: 4.85,
    description: "Deciphering the encrypted dossier leads Zipho deeper into the sunken catacombs.",
  },
  {
    id: "khanya-e2",
    title: "Khanya S1 E2",
    series: "Khanya",
    episode: "S1 Episode 2",
    studio: "Krash Nation",
    genre: "Action/Fantasy",
    coverImage: "/covers/khanya-e2.jpg",
    badge: "Featured",
    reads: "74.5K",
    rating: 4.95,
    description: "Pursued by syndicate trackers, Khanya must learn to modulate his dormant radiance.",
  },
  {
    id: "rrba-3",
    title: "RRBA #003",
    series: "RRBA",
    episode: "Issue #003",
    studio: "Studio Leviathan",
    genre: "Sci-Fi",
    coverImage: "/covers/rrba-3.jpg",
    reads: "29.7K",
    rating: 4.88,
    description: "Infiltration of Sector 7 reveals that the soil restoration initiative was an engineered lie.",
  },
  {
    id: "khanya-e3",
    title: "Khanya S1 E3",
    series: "Khanya",
    episode: "S1 Episode 3",
    studio: "Krash Nation",
    genre: "Action/Fantasy",
    coverImage: "/covers/khanya-e3.jpg",
    reads: "68.3K",
    rating: 4.92,
    description: "An unexpected ally emerges from the forgotten temples buried beneath the magnetic rail line.",
  },
  {
    id: "rrba-infamous-b",
    title: "RRBA: The Infamous (Alt)",
    series: "RRBA",
    episode: "Variant B",
    studio: "Studio Leviathan",
    genre: "Sci-Fi",
    coverImage: "/covers/rrba-infamous-b.jpg",
    reads: "24.1K",
    rating: 4.87,
    description: "Collector variant cover showcasing the botanical rogue operatives in full combat gear.",
  },
  {
    id: "khanya-e5",
    title: "Khanya S1 E5",
    series: "Khanya",
    episode: "Season Finale",
    studio: "Krash Nation",
    genre: "Action/Fantasy",
    coverImage: "/covers/khanya-e5.jpg",
    badge: "Season Finale",
    reads: "104K",
    rating: 4.98,
    description: "The season climax confrontation that reshapes Neo-Azania forever.",
  },
  {
    id: "rrba-27",
    title: "RRBA #027",
    series: "RRBA",
    episode: "Issue #027",
    studio: "Studio Leviathan",
    genre: "Sci-Fi",
    coverImage: "/covers/rrba-27.jpg",
    reads: "41.0K",
    rating: 4.91,
    description: "The alliance establishes their first free botanical outpost in the badlands.",
  },
  {
    id: "flow-lee",
    title: "Flow Lee: Concept",
    series: "Flow Lee",
    episode: "Pilot Issue",
    studio: "Kamo Vision Comics",
    genre: "Martial Arts",
    coverImage: "/covers/flow-lee.jpg",
    badge: "Spotlight",
    reads: "33.2K",
    rating: 4.89,
    description: "The visual origin story of martial prodigy Flow Lee and his street percussion fight style.",
  },
  {
    id: "david",
    title: "David",
    series: "David",
    episode: "Origin Story",
    studio: "Converge",
    genre: "Cyberpunk",
    coverImage: "/covers/david.png",
    reads: "22.6K",
    rating: 4.79,
    description: "An architectural designer finds his urban blueprints manipulated by a shadow syndicate.",
  },
  {
    id: "kabelo",
    title: "Kabelo",
    series: "Kabelo",
    episode: "Original Drop",
    studio: "Krash Nation",
    genre: "Afro-Futurism",
    coverImage: "/covers/kabelo.png",
    badge: "New IP",
    reads: "39.5K",
    rating: 4.93,
    description: "Kabelo commands elemental energy through rhythmic beatmaking in a future Johannesburg.",
  },
  {
    id: "kiko",
    title: "Kiko",
    series: "Kiko",
    episode: "Issue #001",
    studio: "Studio N2K",
    genre: "Animation / Adventure",
    coverImage: "/covers/kiko.png",
    reads: "27.8K",
    rating: 4.84,
    description: "A brave young explorer and a rogue star pilot navigate uncharted stellar anomalies.",
  },
];

export const STUDIOS_LIST: StudioInfo[] = [
  {
    id: "studio-n2k",
    name: "Studio N2K",
    role: "Game Development & Animation Studio",
    focus: ["Games", "Animation", "Interactive Media"],
    logo: "/studios/studio-n2k.png",
    description: "Pioneering real-time 3D animation, action game mechanics, and cross-media franchise worlds.",
    activeProjects: "Rank 1 Game · Kiko Animated Short",
  },
  {
    id: "krash-nation",
    name: "Krash Nation",
    role: "Comic Book & Animation Studio",
    focus: ["Comics", "Animation", "IP Development"],
    logo: "/studios/krash-nation.png",
    description: "Home of high-octane African fantasy storytelling, world-class illustration, and serialized mythologies.",
    activeProjects: "Khanya Series · Kabelo IP",
  },
  {
    id: "studio-leviathan",
    name: "Studio Leviathan",
    role: "Comic Book & Animation Studio",
    focus: ["Comics", "Sci-Fi", "Publishing"],
    logo: "/studios/studio-leviathan.png",
    description: "Masterminds of intricate dystopian lore, sprawling rogue alliances, and hard sci-fi narratives.",
    activeProjects: "RRBA Franchise · Sector 7 Anthology",
  },
  {
    id: "dream-shards",
    name: "Dream Shards",
    role: "Game Development Studio",
    focus: ["Games", "Narrative Design", "Prototypes"],
    logo: "/studios/dream-shards.png",
    description: "Crafting immersive narrative games and interactive storytelling prototypes for console and mobile.",
    activeProjects: "Zipho Playable Prototype · Project Echo",
  },
  {
    id: "kamo-vision",
    name: "Kamo Vision Comics",
    role: "Comic Book Studio",
    focus: ["Comics", "Print", "Digital"],
    logo: "/studios/kamo-vision-comics.png",
    description: "Championing independent visual storytelling, kinetic art styles, and street-level hero narratives.",
    activeProjects: "Flow Lee · Underground Chronicles",
  },
  {
    id: "converge",
    name: "Converge",
    role: "Design House & Transmedia",
    focus: ["Brand Identity", "Design", "Transmedia"],
    logo: "/studios/converge.png",
    description: "The design powerhouse architecting visual languages, collector aesthetics, and cross-media systems.",
    activeProjects: "David Graphic Novel · Sixzmic Collectibles",
  },
];

export const CHARACTERS_LIST: CharacterLore[] = [
  { name: "Khanya", series: "Khanya", role: "Solar Conduit & Protagonist", image: "/hero/khanya-e1.jpg", studio: "Krash Nation" },
  { name: "Rook", series: "RRBA", role: "Tactical Rogue Commander", image: "/hero/rrba.jpg", studio: "Studio Leviathan" },
  { name: "Flow Lee", series: "Flow Lee", role: "Rhythm Martial Artist", image: "/hero/nhlanhla-kumalo-flow-lee-concept-02.jpg", studio: "Kamo Vision" },
  { name: "Zipho", series: "Zipho", role: "Bearer of Forgotten Truths", image: "/covers/zipho-1.jpg", studio: "Dream Shards" },
  { name: "Kabelo", series: "Kabelo", role: "Kinetic Beat Catalyst", image: "/covers/kabelo.png", studio: "Krash Nation" },
  { name: "David", series: "David", role: "Visionary Rebel Architect", image: "/covers/david.png", studio: "Converge" },
  { name: "Kiko", series: "Kiko", role: "Scout Navigator & Pilot Companion", image: "/covers/kiko.png", studio: "Studio N2K" },
  { name: "Switch", series: "Switch", role: "Master Cyber Infiltrator", image: "/covers/switch.jpg", studio: "Studio Leviathan" },
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    code: "SXZ001",
    title: "What Does a Modern Entertainment Publisher Actually Do?",
    show: "Sixzmic IP Brief",
    guest: "Sixzmic Publishing Team",
    duration: "48 min",
    description: "We break down the publisher model — from IP acquisition and rights management to distribution partnerships across every medium.",
  },
  {
    code: "PB001",
    title: "The Indie Comics Landscape in 2026",
    show: "Panel Break",
    guest: "Kamo Vision Editorial",
    duration: "42 min",
    description: "Where independent comics are heading — digital-first releases, crowdfunding, and the rise of direct-to-reader platforms.",
  },
  {
    code: "DL001",
    title: "From Idea to First Playable Prototype",
    show: "Dev Log",
    guest: "Dream Shards Studio",
    duration: "55 min",
    description: "Building narrative game mechanics from scratch, game loop iterations, and balancing story with interactivity.",
  },
  {
    code: "FBF001",
    title: "The Modern Animation Pipeline Explained",
    show: "Frame by Frame",
    guest: "Studio N2K Animation",
    duration: "50 min",
    description: "Deep dive into stylized real-time 3D pipelines, 2D/3D hybrid workflows, and production bottlenecks.",
  },
  {
    code: "SXZ002",
    title: "Protecting Creator IP in a Cross-Media World",
    show: "Sixzmic IP Brief",
    guest: "Sixzmic Legal & Publishing",
    duration: "46 min",
    description: "International standard identifiers (ISNI, IPI, ISWC), rights retention, and licensing best practices for creators.",
  },
];

export const MEMBERSHIP_TIERS = [
  {
    id: "free",
    name: "Reader",
    price: "R0",
    frequency: "forever free",
    description: "Explore the Sixzmic universe",
    features: [
      "Access to standard comic chapters",
      "Character lore & preview artwork",
      "Sixzmic Podcast Network streams",
      "Public community forums",
    ],
    ctaText: "Start Reading",
    popular: false,
  },
  {
    id: "fan",
    name: "Fan Pass",
    price: "R120",
    frequency: "/ month",
    description: "Unlock drops 24h early & HD panel art",
    features: [
      "24-Hour early drop access for all series",
      "Ultra HD panels, splash pages & art packs",
      "Behind-the-scenes sketches & director notes",
      "Ad-free reading experience across devices",
      "Exclusive Discord member badge",
    ],
    ctaText: "Choose Fan Pass",
    popular: true,
  },
  {
    id: "collector",
    name: "Collector",
    price: "R250",
    frequency: "/ month",
    description: "Own limited drops & creator access",
    features: [
      "Everything included in Fan Pass",
      "Limited digital collectibles & variant covers",
      "Direct Creator & Studio Discord live Q&As",
      "Physical print discount codes & merch drops",
      "Voting rights on future studio pilot concepts",
    ],
    ctaText: "Choose Collector",
    popular: false,
  },
];

export const INSTITUTIONAL_PLANS = [
  {
    id: "campus",
    name: "Campus & University",
    audience: "Higher education creative & animation departments",
    highlights: ["Unlimited student digital comic library access", "Studio pipeline case studies & masterclasses", "API access for creative tech students"],
  },
  {
    id: "library",
    name: "Public Libraries",
    audience: "Municipal & community library systems",
    highlights: ["Concurrent reading licenses", "Curated graphic novel collections", "Youth reading initiatives & engagement metrics"],
  },
  {
    id: "studio-partner",
    name: "Studio Incubation",
    audience: "Independent creator collectives & schools",
    highlights: ["Sixzmic Learn curriculum integration", "Direct pipeline to publisher IP review", "Mentorship from N2K, Krash & Leviathan directors"],
  },
];
