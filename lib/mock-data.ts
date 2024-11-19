import { Martyr } from './types';

export const martyrs: Martyr[] = [
  {
    id: '1',
    name: 'Ahmad Ibrahim',
    arabicName: 'أحمد إبراهيم',
    date: '2023-10-07',
    age: 24,
    region: 'Gaza Strip',
    city: 'Gaza City',
    event: 'Al-Aqsa Flood',
    description: 'Medical student who was providing emergency care to the wounded when targeted.',
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?auto=format&fit=crop&w=300',
    source: 'Palestinian Ministry of Health',
  },
  {
    id: '2',
    name: 'Layla Hassan',
    arabicName: 'ليلى حسن',
    date: '2023-10-09',
    age: 19,
    region: 'Gaza Strip',
    city: 'Khan Yunis',
    event: 'Al-Aqsa Flood',
    description: 'University student killed during an airstrike on residential buildings.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=300',
  },
  // Add more mock data as needed
];

export const events = [
  'Al-Aqsa Flood',
  'Operation Guardian of the Walls',
  'Great March of Return',
] as const;

export const regions = [
  'Gaza Strip',
  'West Bank',
  'East Jerusalem',
  'Historic Palestine',
] as const;