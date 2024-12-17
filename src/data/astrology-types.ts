export interface AstrologyType {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const astrologyTypes: AstrologyType[] = [
  {
    id: 'vedic',
    name: 'Vedic Astrology',
    description: 'Traditional Indian astrology based on ancient Vedic texts',
    icon: 'M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4'
  },
  {
    id: 'numerology',
    name: 'Numerology',
    description: 'Study of numbers and their influence on life events',
    icon: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
  },
  {
    id: 'vastu',
    name: 'Vastu Shastra',
    description: 'Ancient science of architecture and design harmony',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    id: 'palmistry',
    name: 'Palmistry',
    description: 'Art of characterization and fortune-telling through palm study',
    icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'
  },
  {
    id: 'marriage',
    name: 'Marriage Astrology',
    description: 'Specialized guidance for marriage timing and compatibility',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    id: 'career',
    name: 'Career Astrology',
    description: 'Professional life guidance through astrological insights',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
];
