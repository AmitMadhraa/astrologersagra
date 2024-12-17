export interface Astrologer {
  id: string;
  name: string;
  experience: number;
  area: string;
  practices: string[];
  languages: string[];
  fees: number;
  phone: string;
  availability: string;
  image?: string;
  rating: number;
  totalConsultations: number;
  specialities: string[];
  education?: string;
  isAvailableOnline: boolean;
}

export const astrologers: Astrologer[] = [
  {
    id: "1",
    name: "Pandit Ramesh Kumar",
    experience: 25,
    area: "Tajganj Area",
    practices: ["Vedic Astrology", "Horoscope Reading"],
    languages: ["Hindi", "English"],
    fees: 1100,
    phone: "+91-9876543210",
    availability: "10 AM - 7 PM",
    rating: 4.8,
    totalConsultations: 5000,
    specialities: ["Kundali Matching", "Marriage Timing"],
    education: "Jyotish Acharya",
    isAvailableOnline: true
  },
  {
    id: "2",
    name: "Acharya Suresh Sharma",
    experience: 20,
    area: "Civil Lines Area",
    practices: ["Vedic Astrology", "Numerology"],
    languages: ["Hindi", "English"],
    fees: 1500,
    phone: "+91-9876543211",
    availability: "11 AM - 8 PM",
    rating: 4.9,
    totalConsultations: 3800,
    specialities: ["Career Guidance", "Business Astrology"],
    education: "PhD in Astrology",
    isAvailableOnline: true
  },
  {
    id: "3",
    name: "Dr. Priya Verma",
    experience: 15,
    area: "Kamla Nagar Area",
    practices: ["Numerology", "Palmistry"],
    languages: ["Hindi", "English"],
    fees: 1000,
    phone: "+91-9876543212",
    availability: "9 AM - 6 PM",
    rating: 4.7,
    totalConsultations: 2500,
    specialities: ["Life Path Numbers", "Hand Analysis"],
    education: "Certified Numerologist",
    isAvailableOnline: true
  },
  {
    id: "4",
    name: "Guru Deepak Shastri",
    experience: 30,
    area: "Sanjay Place Area",
    practices: ["Vedic Astrology", "Vastu Shastra"],
    languages: ["Hindi", "English", "Sanskrit"],
    fees: 2000,
    phone: "+91-9876543213",
    availability: "8 AM - 2 PM",
    rating: 4.9,
    totalConsultations: 7500,
    specialities: ["Vastu Consultation", "Planetary Remedies"],
    education: "Traditional Gurukul",
    isAvailableOnline: false
  },
  {
    id: "5",
    name: "Pandit Vijay Sharma",
    experience: 22,
    area: "MG Road Area",
    practices: ["Vedic Astrology", "Horoscope Reading"],
    languages: ["Hindi", "English"],
    fees: 1200,
    phone: "+91-9876543214",
    availability: "9 AM - 7 PM",
    rating: 4.6,
    totalConsultations: 4200,
    specialities: ["Horoscope Analysis", "Gem Recommendations"],
    education: "Vedic Studies",
    isAvailableOnline: true
  },
  {
    id: "6",
    name: "Acharya Mohan Das",
    experience: 28,
    area: "Shahganj Area",
    practices: ["Vedic Astrology", "Palmistry"],
    languages: ["Hindi", "Sanskrit"],
    fees: 1800,
    phone: "+91-9876543215",
    availability: "7 AM - 2 PM",
    rating: 4.8,
    totalConsultations: 6000,
    specialities: ["Medical Astrology", "Palm Reading"],
    education: "Traditional Palmistry",
    isAvailableOnline: true
  },
  {
    id: "7",
    name: "Dr. Kavita Singh",
    experience: 18,
    area: "Khandari Area",
    practices: ["Numerology", "Face Reading"],
    languages: ["Hindi", "English"],
    fees: 1300,
    phone: "+91-9876543216",
    availability: "10 AM - 6 PM",
    rating: 4.7,
    totalConsultations: 3000,
    specialities: ["Career Numerology", "Name Analysis"],
    education: "PhD in Psychology",
    isAvailableOnline: true
  },
  {
    id: "8",
    name: "Pandit Rajesh Mishra",
    experience: 25,
    area: "Dayal Bagh Area",
    practices: ["Vedic Astrology", "Gemology"],
    languages: ["Hindi", "English", "Sanskrit"],
    fees: 1600,
    phone: "+91-9876543217",
    availability: "9 AM - 8 PM",
    rating: 4.9,
    totalConsultations: 5500,
    specialities: ["Muhurat", "Dosh Analysis"],
    education: "Jyotish Visharad",
    isAvailableOnline: true
  },
  {
    id: "9",
    name: "Acharya Krishna Gopal",
    experience: 35,
    area: "Fatehabad Road Area",
    practices: ["Vedic Astrology", "Vastu Shastra"],
    languages: ["Hindi", "Sanskrit"],
    fees: 2500,
    phone: "+91-9876543218",
    availability: "6 AM - 12 PM",
    rating: 5.0,
    totalConsultations: 9000,
    specialities: ["Temple Vastu", "Commercial Vastu"],
    education: "Vastu Shastra Expert",
    isAvailableOnline: false
  },
  {
    id: "10",
    name: "Dr. Amit Kapoor",
    experience: 12,
    area: "Mahatma Gandhi Road Area",
    practices: ["Numerology", "Palmistry", "Face Reading"],
    languages: ["Hindi", "English"],
    fees: 900,
    phone: "+91-9876543219",
    availability: "11 AM - 9 PM",
    rating: 4.5,
    totalConsultations: 1800,
    specialities: ["Modern Palmistry", "Career Numbers"],
    education: "Modern Occult Sciences",
    isAvailableOnline: true
  },
  {
    id: "11",
    name: "Dr. S Nihar",
    experience: 30,
    area: "Sikandra",
    practices: ["Numerology", "Palmistry", "Spiritual Healing"],
    languages: ["Hindi", "English", "Punjabi", "Telugu"],
    fees: 5900,
    phone: "+91-9876543219",
    availability: "10 AM - 9 PM",
    rating: 5,
    totalConsultations: 2800,
    specialities: ["Modern Palmistry", "Career Numbers"],
    education: "Modern Occult Sciences",
    isAvailableOnline: true
  }
];
