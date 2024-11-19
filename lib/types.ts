export interface Martyr {
  id: string;
  name: string;
  arabicName?: string;
  date: string;
  age?: number;
  region: Region;
  city?: string;
  event?: string;
  description?: string;
  image?: string;
  source?: string;
}

export type Region =
  | 'Gaza Strip'
  | 'West Bank'
  | 'East Jerusalem'
  | 'Historic Palestine';

export interface SearchFilters {
  query: string;
  region?: Region;
  startDate?: string;
  endDate?: string;
  event?: string;
}