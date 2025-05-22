import { useState, useEffect } from 'react';

export interface PropertyData {
  id: string;
  videoUrl: string;
  images: string[];
  price: string;
  bedCount: number;
  bathCount: number;
  photoCount: number;
  videoCount: number;
  country: string;
  city: string;
  propertyType: string;
  daysAgo: number;
  // Additional fields for detailed view
  description?: string;
  amenities?: string[];
  squareFootage?: number;
  yearBuilt?: number;
  address?: string;
}

// Mock data - will be replaced with API calls later
const mockProperties: PropertyData[] = [
   {
    id: '1',
    videoUrl: '/videos/reel1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,638',
    bedCount: 3,
    bathCount: 2,
    photoCount: 12,
    videoCount: 2,
    country: 'Canada',
    city: 'Mississauga',
    propertyType: 'Apartment',
    daysAgo: 3,
    description: 'Luxurious apartment in the heart of New York with stunning views.',
    amenities: ['Pool', 'Gym', 'Parking', 'Doorman'],
    squareFootage: 1200,
    yearBuilt: 2015,
    address: '704-75 Portland St., Mississauga, ON,M5V 2M9, Canada',
  },
  {
    id: '2',
    videoUrl: '/videos/reel2.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$980,000',
    bedCount: 2,
    bathCount: 2,
    photoCount: 8,
    videoCount: 1,
    country: 'Canada',
    city: 'Mississauga',
    propertyType: 'Condo',
    daysAgo: 5,
    description: 'Modern condo in downtown Los Angeles with city views.',
    amenities: ['Pool', 'Gym', 'Security'],
    squareFootage: 950,
    yearBuilt: 2018,
    address: '506-25 Kingsbridge Garden Circle, Mississauga, ON, L5R 4B1, Canada',
  },
  {
    id: '3',
    videoUrl: '/videos/reel1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,450,000',
    bedCount: 4,
    bathCount: 3,
    photoCount: 15,
    videoCount: 3,
    country: 'Canada',
    city: 'Toronto',
    propertyType: 'House',
    daysAgo: 2,
    description: 'Spacious family home in a quiet Toronto neighborhood.',
    amenities: ['Backyard', 'Garage', 'Fireplace'],
    squareFootage: 2200,
    yearBuilt: 2010,
    address: '215-33 Bay St., Toronto, ON, M5J 2Z3, Canada',
  },
  {
    id: '4',
    videoUrl: '/videos/reel2.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$850,000',
    bedCount: 2,
    bathCount: 1,
    photoCount: 10,
    videoCount: 1,
    country: 'Canada',
    city: 'Toronto',
    propertyType: 'Apartment',
    daysAgo: 7,
    description: 'Cozy apartment in Chicago with great amenities.',
    amenities: ['Gym', 'Rooftop Deck'],
    squareFootage: 850,
    yearBuilt: 2015,
    address: '215-33 Bay St., Toronto, ON, M5J 2Z3, Canada',
  },
  {
    id: '5',
    videoUrl: '/videos/reel1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,100,000',
    bedCount: 5,
    bathCount: 4,
    photoCount: 20,
    videoCount: 4,
    country: 'Canada',
    city: 'Toronto',
    propertyType: 'Villa',
    daysAgo: 1,
    description: 'Luxury villa in Miami with ocean views and private pool.',
    amenities: ['Pool', 'Beach Access', 'Home Theater', 'Wine Cellar'],
    squareFootage: 3500,
    yearBuilt: 2019,
    address: '1201-88 Bloor St, W. Toronto, ON, M5S 1M5, Canada',
  },
];

export function usePropertyData(propertyId?: string) {
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with a delay
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (propertyId) {
          // Find specific property
          const foundProperty = mockProperties.find(p => p.id === propertyId);
          if (foundProperty) {
            setProperty(foundProperty);
          } else {
            setError('Property not found');
          }
        } else {
          // Return all properties
          setProperties(mockProperties);
        }
      } catch (err) {
        setError('Failed to fetch property data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [propertyId]);

  return {property, properties, isLoading, error };
}


//------------------------------------------------------------------------------------------------



