export type BusinessKey = 'coco' | 'travels' | 'it';

export interface Business {
  key: BusinessKey;
  name: string;
  short: string;
  tagline: string;
  desc: string;
  bullets: string[];
  route: string;
  accent: string;
  soft: string;
  emoji: string;
  hero: string;
  card: string;
}

export const BUSINESSES: Business[] = [
  {
    key: 'coco',
    name: 'Sandatharu Coco Products',
    short: 'Coco',
    tagline: 'Natural Resources. Sustainable Products.',
    desc: 'Coconut shell collection, processing and supply — turning coconut waste into valuable, sustainable products for local and export markets.',
    bullets: ['Shell Collection', 'Coconut Charcoal', 'Charcoal Briquettes', 'Bulk Supply'],
    route: '/coco',
    accent: '#2E7D32',
    soft: '#E8F3E9',
    emoji: '🌴',
    hero: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=1800&q=80&auto=format&fit=crop',
    card: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80&auto=format&fit=crop'
  },
  {
    key: 'travels',
    name: 'Sandatharu Travels & Tours',
    short: 'Travels',
    tagline: 'Travel Made Simple.',
    desc: 'Tours, private transportation and airport transfers across Sri Lanka — comfortable, reliable, and affordable for tourists and businesses alike.',
    bullets: ['Sri Lanka Tours', 'Airport Transfers', 'Private Hire', 'Corporate Transport'],
    route: '/travels',
    accent: '#1565C0',
    soft: '#E7F0FA',
    emoji: '🚐',
    hero: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1800&q=80&auto=format&fit=crop',
    card: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop'
  },
  {
    key: 'it',
    name: 'Sandatharu IT Solutions',
    short: 'IT',
    tagline: 'Ideas Into Digital Solutions.',
    desc: 'Web development, custom software and UI/UX — building the digital systems that power modern businesses across Sri Lanka.',
    bullets: ['Web Development', 'Custom Software', 'UI/UX Design', 'Business Systems'],
    route: '/it',
    accent: '#0D47A1',
    soft: '#E7ECF6',
    emoji: '💻',
    hero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800&q=80&auto=format&fit=crop',
    card: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop'
  }
];