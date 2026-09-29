export interface Vehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV' | 'Van' | 'Bus' | 'Luxury';
  tagline: string;
  img: string;              // PNG with transparent bg
  color: string;            // accent per vehicle
  specs: {
    passengers: string;
    luggage: string;
    transmission: string;
    fuel: string;
    ac: string;
    driver: string;
  };
  bestFor: string[];
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Comfort Sedan',
    category: 'Sedan',
    tagline: 'Travel your way.',
    img: '/public/suv.png',
    color: '#4DA3FF',
    specs: { passengers: '2–4', luggage: '2 Bags', transmission: 'Automatic', fuel: 'Hybrid', ac: 'Yes', driver: 'Optional' },
    bestFor: ['Airport Transfer', 'Couples', 'Business Travel', 'City Trips']
  },
  {
    id: 'suv',
    name: 'Adventure SUV',
    category: 'SUV',
    tagline: 'Comfortable. Capable. Ready.',
    img: '/public/suv.png',
    color: '#0066CC',
    specs: { passengers: '4–6', luggage: '4 Bags', transmission: 'Automatic', fuel: 'Diesel / Petrol', ac: 'Yes', driver: 'Optional' },
    bestFor: ['Families', 'Hill Country', 'Long Trips', 'Adventure']
  },
  {
    id: 'van',
    name: 'Family Van',
    category: 'Van',
    tagline: 'Room to travel together.',
    img: '/public/suv.png',
    color: '#00B8D4',
    specs: { passengers: '8–12', luggage: '8+ Bags', transmission: 'Manual / Auto', fuel: 'Diesel', ac: 'Yes', driver: 'Available' },
    bestFor: ['Families', 'Groups', 'Tours', 'Airport']
  },
  {
    id: 'luxury',
    name: 'Premium Class',
    category: 'Luxury',
    tagline: 'Arrive in style.',
    img: '/travels/cars/car-luxury.png',
    color: '#FF6B35',
    specs: { passengers: '2–4', luggage: '3 Bags', transmission: 'Automatic', fuel: 'Petrol', ac: 'Yes', driver: 'Available' },
    bestFor: ['VIP Guests', 'Events', 'Corporate', 'Weddings']
  },
  {
    id: 'bus',
    name: 'Group Bus',
    category: 'Bus',
    tagline: 'Travel together. Comfortably.',
    img: '/travels/cars/car-bus.png',
    color: '#8B5CF6',
    specs: { passengers: '20–45', luggage: 'Large', transmission: 'Manual', fuel: 'Diesel', ac: 'Yes', driver: 'Included' },
    bestFor: ['Corporate', 'Events', 'Group Tours', 'Excursions']
  }
];

export const DESTINATIONS = [
  { id: 'beaches',  title: 'Beaches',       img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85&auto=format&fit=crop', d: 'Relax beside tropical beaches and coastal towns along the south and east coasts.' },
  { id: 'mountains',title: 'Mountains',     img: 'https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=1200&q=85&auto=format&fit=crop', d: 'Misty highlands, tea country and scenic mountain roads through the hill country.' },
  { id: 'wildlife', title: 'Wildlife',      img: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1200&q=85&auto=format&fit=crop', d: 'National parks and natural landscapes — Sri Lanka\'s wild side.' },
  { id: 'culture',  title: 'Culture',       img: 'https://images.unsplash.com/photo-1588598098709-24d2ec7b6e75?w=1200&q=85&auto=format&fit=crop', d: 'Ancient cities, temples and centuries of Sri Lankan heritage.' },
  { id: 'tea',      title: 'Tea Country',   img: 'https://images.unsplash.com/photo-1583664145045-1a3a1e0c3d5e?w=1200&q=85&auto=format&fit=crop', d: 'Green plantations and cool-climate highland destinations.' },
  { id: 'east',     title: 'East Coast',    img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85&auto=format&fit=crop', d: 'Trincomalee, Pasikuda, Arugam Bay — unique eastern coastline.' }
];

export const EXPERIENCES = [
  { t: 'Beach Escape',       d: 'Sun, sea and relaxed coastal journeys.' },
  { t: 'Wildlife Adventure', d: 'Explore Sri Lanka\'s natural world.' },
  { t: 'Cultural Journey',   d: 'Ancient cities, temples and heritage.' },
  { t: 'Hill Country Escape',d: 'Mountains, tea plantations and cool weather.' },
  { t: 'Food & Local Life',  d: 'Sri Lankan flavours and everyday culture.' },
  { t: 'Photography Journey',d: 'Scenic destinations and memorable landscapes.' },
  { t: 'Family Holiday',     d: 'Comfortable journeys designed for families.' },
  { t: 'Romantic Escape',    d: 'Private and relaxing journeys for couples.' }
];

export const FAQS = [
  { q: 'What types of vehicles are available?', a: 'We offer vehicle options based on availability and your travel requirements — including cars, vans and group transportation.' },
  { q: 'Can I hire a vehicle with a driver?', a: 'Driver-assisted transportation can be requested based on availability and service requirements.' },
  { q: 'Do you provide airport transfers?', a: 'Yes. Airport transfer requests can be arranged based on your destination, group size and vehicle requirements.' },
  { q: 'Can I request a custom tour?', a: 'Yes. Send your preferred destinations, dates, number of travellers and requirements — we\'ll help plan the journey.' },
  { q: 'Do you provide group transportation?', a: 'Yes. Group transportation can be arranged depending on group size and vehicle availability.' },
  { q: 'Can I hire a vehicle for several days?', a: 'Multi-day vehicle hire can be requested based on availability.' },
  { q: 'Can you arrange corporate transportation?', a: 'Yes. Corporate transportation requirements can be discussed with the team.' }
];