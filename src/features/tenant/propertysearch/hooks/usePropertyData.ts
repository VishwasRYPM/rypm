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
export const mockProperties: PropertyData[] = [
  {
    id: '1',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,850',
    bedCount: 3,
    bathCount: 2,
    photoCount: 12,
    videoCount: 2,
    country: 'Canada',
    city: 'Toronto',
    propertyType: 'Apartment',
    daysAgo: 3,
    description: 'Luxurious apartment in the heart of Toronto with stunning views.',
    amenities: ['Pool', 'Gym', 'Parking', 'Doorman'],
    squareFootage: 1200,
    yearBuilt: 2015,
    address: '704-75 Portland St., Toronto, ON, M5V 2M9, Canada',
  },
  {
    id: '2',
    videoUrl: '/videos/showings-2.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,750',
    bedCount: 2,
    bathCount: 2,
    photoCount: 8,
    videoCount: 1,
    country: 'USA',
    city: 'New York',
    propertyType: 'Condo',
    daysAgo: 5,
    description: 'Modern condo in downtown Manhattan with city views.',
    amenities: ['Pool', 'Gym', 'Security'],
    squareFootage: 950,
    yearBuilt: 2018,
    address: '506-25 Broadway, New York, NY, 10013, USA',
  },
  {
    id: '3',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$3,200',
    bedCount: 4,
    bathCount: 3,
    photoCount: 15,
    videoCount: 3,
    country: 'Canada',
    city: 'Vancouver',
    propertyType: 'House',
    daysAgo: 2,
    description: 'Spacious family home in a quiet Vancouver neighborhood.',
    amenities: ['Backyard', 'Garage', 'Fireplace'],
    squareFootage: 2200,
    yearBuilt: 2010,
    address: '215-33 Robson St., Vancouver, BC, V6B 2Z3, Canada',
  },
  {
    id: '4',
    videoUrl: '/videos/showings-2.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,950',
    bedCount: 2,
    bathCount: 1,
    photoCount: 10,
    videoCount: 1,
    country: 'USA',
    city: 'Chicago',
    propertyType: 'Apartment',
    daysAgo: 7,
    description: 'Cozy apartment in Chicago with great amenities.',
    amenities: ['Gym', 'Rooftop Deck'],
    squareFootage: 850,
    yearBuilt: 2015,
    address: '215-33 Michigan Ave., Chicago, IL, 60601, USA',
  },
  {
    id: '5',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$3,450',
    bedCount: 5,
    bathCount: 4,
    photoCount: 20,
    videoCount: 4,
    country: 'Canada',
    city: 'Montreal',
    propertyType: 'Villa',
    daysAgo: 1,
    description: 'Luxury villa in Montreal with modern amenities.',
    amenities: ['Pool', 'Garden', 'Home Theater', 'Wine Cellar'],
    squareFootage: 3500,
    yearBuilt: 2019,
    address: '1201-88 Sherbrooke St, Montreal, QC, H3A 1M5, Canada',
  },
  {
    id: '6',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,100',
    bedCount: 3,
    bathCount: 2,
    photoCount: 14,
    videoCount: 2,
    country: 'UK',
    city: 'London',
    propertyType: 'Apartment',
    daysAgo: 4,
    description: 'Elegant apartment in central London.',
    amenities: ['Concierge', 'Gym', 'Parking'],
    squareFootage: 1100,
    yearBuilt: 2017,
    address: '45 Baker Street, London, W1U 8EW, UK',
  },
  {
    id: '7',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,650',
    bedCount: 3,
    bathCount: 2,
    photoCount: 16,
    videoCount: 3,
    country: 'Australia',
    city: 'Sydney',
    propertyType: 'Condo',
    daysAgo: 6,
    description: 'Modern condo with harbor views in Sydney.',
    amenities: ['Pool', 'Gym', 'Balcony'],
    squareFootage: 1300,
    yearBuilt: 2020,
    address: '123 Circular Quay, Sydney, NSW 2000, Australia',
  },
  {
    id: '8',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,800',
    bedCount: 2,
    bathCount: 1,
    photoCount: 12,
    videoCount: 1,
    country: 'Canada',
    city: 'Calgary',
    propertyType: 'Apartment',
    daysAgo: 8,
    description: 'Affordable apartment in Calgary downtown.',
    amenities: ['Parking', 'Storage'],
    squareFootage: 900,
    yearBuilt: 2016,
    address: '789 Centre St., Calgary, AB, T2E 2Z3, Canada',
  },
  {
    id: '9',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,950',
    bedCount: 4,
    bathCount: 3,
    photoCount: 18,
    videoCount: 3,
    country: 'USA',
    city: 'Los Angeles',
    propertyType: 'House',
    daysAgo: 2,
    description: 'Beautiful house in LA with pool and garden.',
    amenities: ['Pool', 'Garden', 'Garage', 'Security'],
    squareFootage: 2500,
    yearBuilt: 2018,
    address: '456 Sunset Blvd, Los Angeles, CA, 90028, USA',
  },
  {
    id: '10',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$3,100',
    bedCount: 4,
    bathCount: 3,
    photoCount: 20,
    videoCount: 4,
    country: 'Canada',
    city: 'Ottawa',
    propertyType: 'Townhouse',
    daysAgo: 3,
    description: 'Spacious townhouse in Ottawa with modern finishes.',
    amenities: ['Garage', 'Patio', 'Storage'],
    squareFootage: 2200,
    yearBuilt: 2019,
    address: '321 Rideau St., Ottawa, ON, K1N 5Y3, Canada',
  },
  {
    id: '11',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,650',
    bedCount: 1,
    bathCount: 1,
    photoCount: 8,
    videoCount: 1,
    country: 'Germany',
    city: 'Berlin',
    propertyType: 'Studio',
    daysAgo: 5,
    description: 'Modern studio in trendy Berlin neighborhood.',
    amenities: ['Bike Storage', 'Rooftop Terrace'],
    squareFootage: 600,
    yearBuilt: 2021,
    address: '67 Unter den Linden, Berlin, 10117, Germany',
  },
  {
    id: '12',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,400',
    bedCount: 3,
    bathCount: 2,
    photoCount: 15,
    videoCount: 2,
    country: 'Canada',
    city: 'Edmonton',
    propertyType: 'Condo',
    daysAgo: 4,
    description: 'Contemporary condo in Edmonton with city views.',
    amenities: ['Gym', 'Pool', 'Concierge'],
    squareFootage: 1400,
    yearBuilt: 2017,
    address: '890 Jasper Ave., Edmonton, AB, T5J 1P8, Canada',
  },
  {
    id: '13',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,750',
    bedCount: 3,
    bathCount: 2,
    photoCount: 17,
    videoCount: 3,
    country: 'France',
    city: 'Paris',
    propertyType: 'Apartment',
    daysAgo: 6,
    description: 'Charming apartment in the heart of Paris.',
    amenities: ['Balcony', 'Historic Building'],
    squareFootage: 1200,
    yearBuilt: 1920,
    address: '12 Champs-Élysées, Paris, 75008, France',
  },
  {
    id: '14',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,550',
    bedCount: 2,
    bathCount: 1,
    photoCount: 10,
    videoCount: 1,
    country: 'USA',
    city: 'Austin',
    propertyType: 'Apartment',
    daysAgo: 9,
    description: 'Hip apartment in Austin with modern amenities.',
    amenities: ['Pool', 'Fitness Center'],
    squareFootage: 950,
    yearBuilt: 2019,
    address: '234 South Lamar, Austin, TX, 78704, USA',
  },
  {
    id: '15',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$3,350',
    bedCount: 4,
    bathCount: 3,
    photoCount: 22,
    videoCount: 4,
    country: 'Canada',
    city: 'Winnipeg',
    propertyType: 'House',
    daysAgo: 2,
    description: 'Family home in Winnipeg with large yard.',
    amenities: ['Garage', 'Garden', 'Basement'],
    squareFootage: 2800,
    yearBuilt: 2015,
    address: '567 Portage Ave., Winnipeg, MB, R3B 2E9, Canada',
  },
  {
    id: '16',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,200',
    bedCount: 2,
    bathCount: 2,
    photoCount: 13,
    videoCount: 2,
    country: 'Netherlands',
    city: 'Amsterdam',
    propertyType: 'Apartment',
    daysAgo: 7,
    description: 'Canal-side apartment in Amsterdam.',
    amenities: ['Bike Storage', 'Canal View'],
    squareFootage: 1000,
    yearBuilt: 2018,
    address: '89 Prinsengracht, Amsterdam, 1015 NK, Netherlands',
  },
  {
    id: '17',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,900',
    bedCount: 2,
    bathCount: 1,
    photoCount: 11,
    videoCount: 1,
    country: 'Canada',
    city: 'Halifax',
    propertyType: 'Condo',
    daysAgo: 5,
    description: 'Waterfront condo in Halifax with ocean views.',
    amenities: ['Ocean View', 'Parking'],
    squareFootage: 1100,
    yearBuilt: 2020,
    address: '123 Harbour Dr., Halifax, NS, B3H 2Y8, Canada',
  },
  {
    id: '18',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,600',
    bedCount: 3,
    bathCount: 2,
    photoCount: 16,
    videoCount: 3,
    country: 'USA',
        city: 'Seattle',
    propertyType: 'Townhouse',
    daysAgo: 3,
    description: 'Modern townhouse in Seattle with mountain views.',
    amenities: ['Garage', 'Patio', 'Storage'],
    squareFootage: 1600,
    yearBuilt: 2019,
    address: '456 Pine St., Seattle, WA, 98101, USA',
  },
  {
    id: '19',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$3,250',
    bedCount: 4,
    bathCount: 3,
    photoCount: 19,
    videoCount: 4,
    country: 'Canada',
    city: 'Quebec City',
    propertyType: 'House',
    daysAgo: 1,
    description: 'Historic house in Old Quebec with modern updates.',
    amenities: ['Fireplace', 'Garden', 'Parking'],
    squareFootage: 2400,
    yearBuilt: 2016,
    address: '78 Grande Allée, Quebec City, QC, G1R 2H8, Canada',
  },
  {
    id: '20',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,750',
    bedCount: 2,
    bathCount: 1,
    photoCount: 12,
    videoCount: 2,
    country: 'Spain',
    city: 'Barcelona',
    propertyType: 'Apartment',
    daysAgo: 8,
    description: 'Sunny apartment near Barcelona beach.',
    amenities: ['Balcony', 'Near Beach'],
    squareFootage: 900,
    yearBuilt: 2017,
    address: '34 Las Ramblas, Barcelona, 08002, Spain',
  },
  {
    id: '21',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,850',
    bedCount: 3,
    bathCount: 2,
    photoCount: 15,
    videoCount: 3,
    country: 'USA',
    city: 'Miami',
    propertyType: 'Condo',
    daysAgo: 4,
    description: 'Luxury condo in Miami with ocean views.',
    amenities: ['Pool', 'Beach Access', 'Valet'],
    squareFootage: 1500,
    yearBuilt: 2020,
    address: '789 Ocean Dr., Miami, FL, 33139, USA',
  },
  {
    id: '22',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,050',
    bedCount: 2,
    bathCount: 2,
    photoCount: 13,
    videoCount: 2,
    country: 'Canada',
    city: 'Victoria',
    propertyType: 'Apartment',
    daysAgo: 6,
    description: 'Garden apartment in beautiful Victoria.',
    amenities: ['Garden View', 'Parking', 'Storage'],
    squareFootage: 1200,
    yearBuilt: 2018,
    address: '456 Government St., Victoria, BC, V8W 1Y2, Canada',
  },
  {
    id: '23',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$1,650',
    bedCount: 1,
    bathCount: 1,
    photoCount: 9,
    videoCount: 1,
    country: 'Italy',
    city: 'Rome',
    propertyType: 'Studio',
    daysAgo: 10,
    description: 'Charming studio near the Colosseum.',
    amenities: ['Historic Location', 'Balcony'],
    squareFootage: 650,
    yearBuilt: 2019,
    address: '12 Via del Corso, Rome, 00186, Italy',
  },
  {
    id: '24',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$3,400',
    bedCount: 5,
    bathCount: 4,
    photoCount: 25,
    videoCount: 5,
    country: 'USA',
    city: 'San Francisco',
    propertyType: 'House',
    daysAgo: 1,
    description: 'Victorian house in San Francisco with bay views.',
    amenities: ['Bay View', 'Garage', 'Garden', 'Historic'],
    squareFootage: 3200,
    yearBuilt: 2017,
    address: '123 Lombard St., San Francisco, CA, 94133, USA',
  },
  {
    id: '25',
    videoUrl: '/videos/showings-1.mp4',
    images: [
      '/images/toronto.png',
      '/images/Panama.png',
      '/images/new york, USA.png',
    ],
    price: '$2,300',
    bedCount: 3,
    bathCount: 2,
    photoCount: 14,
    videoCount: 2,
    country: 'Canada',
    city: 'Saskatoon',
    propertyType: 'Townhouse',
    daysAgo: 7,
    description: 'Modern townhouse in Saskatoon with river views.',
    amenities: ['River View', 'Garage', 'Patio'],
    squareFootage: 1800,
    yearBuilt: 2021,
    address: '234 Spadina Crescent, Saskatoon, SK, S7K 3G9, Canada',
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



