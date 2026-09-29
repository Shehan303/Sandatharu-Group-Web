export type BusinessKey = 'coco' | 'travels' | 'it';

export interface Business {
  key: BusinessKey;
  name: string;
  short: string;
  kicker: string;
  tagline: string;
  headline: string;
  desc: string;
  bullets: string[];
  route: string;
  accent: string;
  accentDark: string;
  soft: string;
  logo: string;
  logoWhite: boolean;
  hero: string;
  card: string;
  gallery: [string, string];
}

export const BUSINESSES: Business[] = [
  {
    key: 'coco',
    name: 'Sandatharu Coco Products',
    short: 'Coco',
    kicker: 'Sustainable Resources',
    tagline: 'From Sri Lankan Coconut Resources to Global Opportunities.',
    headline: 'COCONUT. NATURALLY VALUABLE.',
    desc: 'We focus on the collection, processing and supply of coconut-based resources and products — creating value from one of Sri Lanka\'s most important natural resources.',
    bullets: ['Coconut Shell Collection', 'Coconut Husk', 'Coconut Shell Products', 'Coconut Charcoal', 'Charcoal Briquettes', 'Bulk Supply', 'B2B Supply', 'Sustainable Utilization'],
    route: '/coco',
    accent: '#33A852',
    accentDark: '#1F7A39',
    soft: '#E7F6EC',
    logo: '/public/logos/coco-logo.png',
    logoWhite: true,
    hero: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=2000&q=85&auto=format&fit=crop',
    card: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=85&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=1200&q=80&auto=format&fit=crop'
    ]
  },
  {
    key: 'travels',
    name: 'Sandatharu Travels & Tours',
    short: 'Travels',
    kicker: 'Sri Lanka Awaits',
    tagline: 'Your Journey. Our Roads. Sri Lanka.',
    headline: 'DISCOVER. TRAVEL. EXPERIENCE.',
    desc: 'We help travellers discover Sri Lanka through comfortable transportation, personalised journeys and memorable travel experiences across the island.',
    bullets: ['Airport Transfers', 'Private Transportation', 'Day Tours', 'Multi-Day Tours', 'Custom Tours', 'Family Travel', 'Group Travel', 'Corporate Transport'],
    route: '/travels',
    accent: '#0077CB',
    accentDark: '#005A9E',
    soft: '#E6F3FB',
    logo: '/public/logos/travels-logo.png',
    logoWhite: true,
    hero: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=2000&q=85&auto=format&fit=crop',
    card: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80&auto=format&fit=crop'
    ]
  },
  {
    key: 'it',
    name: 'Sandatharu IT Solutions',
    short: 'IT',
    kicker: 'Digital Futures',
    tagline: 'Ideas Into Digital Solutions.',
    headline: 'BUILDING THE DIGITAL LAYER.',
    desc: 'We create modern digital solutions that help businesses improve their operations, customer experiences and digital presence — from websites to full systems.',
    bullets: ['Software Development', 'Web Development', 'Mobile Applications', 'UI/UX Design', 'Business Systems', 'API & Integrations', 'Cloud Solutions', 'Automation'],
    route: '/it',
    accent: '#0077CB',
    accentDark: '#0A3F7A',
    soft: '#E7ECF6',
    logo: '/public/logos/it-logo.png',
    logoWhite: true,
    hero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&q=85&auto=format&fit=crop',
    card: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop'
    ]
  }
];