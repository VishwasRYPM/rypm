import { useState, useEffect } from 'react';

export interface MapProperty {
  id: string;
  lat: number;
  lng: number;
  price: string;
  bedCount: number;
  bathCount: number;
  propertyType: string;
  city: string;
  country: string;
  address: string;
  images: string[];
}

// Dummy data - replace with API call later
const dummyMapProperties: MapProperty[] = [
  {
    id: '1',
    lat: 43.6532,
    lng: -79.3832,
    price: '$2,500',
    bedCount: 2,
    bathCount: 1,
    propertyType: 'Apartment',
    city: 'Toronto',
    country: 'Canada',
    address: '123 King St W, Toronto, ON',
    images: ['/images/toronto.png']
  },
  {
    id: '2',
    lat: 43.6426,
    lng: -79.3871,
    price: '$3,200',
    bedCount: 3,
    bathCount: 2,
    propertyType: 'Condo',
    city: 'Toronto',
    country: 'Canada',
    address: '456 Queen St W, Toronto, ON',
    images: ['/images/toronto.png']
  },
  {
    id: '3',
    lat: 43.6629,
    lng: -79.3957,
    price: '$1,800',
    bedCount: 1,
    bathCount: 1,
    propertyType: 'Studio',
    city: 'Toronto',
    country: 'Canada',
    address: '789 Dundas St W, Toronto, ON',
    images: ['/images/toronto.png']
  },
  {
    id: '4',
    lat: 43.6481,
    lng: -79.3708,
    price: '$4,500',
    bedCount: 4,
    bathCount: 3,
    propertyType: 'House',
    city: 'Toronto',
    country: 'Canada',
    address: '321 Bay St, Toronto, ON',
    images: ['/images/toronto.png']
  },
  {
    id: '5',
    lat: 43.6369,
    lng: -79.4107,
    price: '$2,100',
    bedCount: 2,
    bathCount: 2,
    propertyType: 'Apartment',
    city: 'Toronto',
    country: 'Canada',
    address: '654 College St, Toronto, ON',
    images: ['/images/toronto.png']
  }
];

export function useMapProperties() {
  const [properties, setProperties] = useState<MapProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchProperties = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In future, replace this with actual API call:
        // const response = await fetch('/api/properties/map');
        // const data = await response.json();
        // setProperties(data);
        
        setProperties(dummyMapProperties);
        setError(null);
      } catch (err) {
        setError('Failed to load properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Function to refresh properties (for future API integration)
  const refreshProperties = async () => {
    setLoading(true);
    // Add API call logic here
    setLoading(false);
  };

  return {
    properties,
    loading,
    error,
    refreshProperties
  };
}