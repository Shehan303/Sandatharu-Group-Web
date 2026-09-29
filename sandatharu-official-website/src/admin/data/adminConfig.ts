export interface AdminTool {
  key: 'group' | 'coco' | 'travels' | 'it';
  name: string;
  short: string;
  tag: string;
  color: string;
  colorDark: string;
  logo: string;
  heroImage: string;
}

export const ADMIN_TOOLS: AdminTool[] = [
  {
    key: 'group',
    name: 'Sandatharu Group of Companies',
    short: 'Group',
    tag: 'Main Corporate Site',
    color: '#FFC107',
    colorDark: '#B78600',
    logo: '/public/logos/sandatharu-logo-white.png',
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80&auto=format&fit=crop'
  },
  {
    key: 'coco',
    name: 'Sandatharu Coco Products',
    short: 'Coco',
    tag: 'Coconut Products',
    color: '#33A852',
    colorDark: '#1F7A39',
    logo: '/public/logos/coco-logo.png',
    heroImage: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=1600&q=80&auto=format&fit=crop'
  },
  {
    key: 'travels',
    name: 'Sandatharu Travels & Tours',
    short: 'Travels',
    tag: 'Travel & Tours',
    color: '#0077CB',
    colorDark: '#005A9E',
    logo: '/public/logos/travels-logo.png',
    heroImage: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1600&q=80&auto=format&fit=crop'
  },
  {
    key: 'it',
    name: 'Sandatharu IT Solutions',
    short: 'IT',
    tag: 'Digital Solutions',
    color: '#0A5FB4',
    colorDark: '#0A3F7A',
    logo: '/public/logos/it-logo.png',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop'
  }
];

export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'sandatharu2026'
};