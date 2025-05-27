import { useState, useCallback } from 'react';
import { LocalInfoCategory } from '../features/LocalInfo/CategoryTabs';

export interface GooglePlace {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: string;
  rating?: number;
  priceLevel?: number;
  vicinity: string;
  types: string[];
  photoUrl?: string;
  isOpen?: boolean;
  userRatingsTotal?: number;
  businessStatus?: string;
}

// Map our categories to Google Places types
const categoryToPlaceTypes: Record<LocalInfoCategory, string[]> = {
  all: [], // We'll handle "all" by searching multiple types
  grocery: ['grocery_or_supermarket', 'supermarket'],
  education: ['school', 'university'],
  restaurants: ['restaurant', 'meal_takeaway', 'cafe'],
  healthcare: ['hospital', 'pharmacy', 'doctor'],
  fitness: ['gym', 'spa'],
  shopping: ['shopping_mall', 'clothing_store', 'electronics_store'],
  business: ['bank', 'atm', 'accounting'],
  travel: ['lodging', 'gas_station', 'travel_agency'],
  services: ['laundry', 'hair_care', 'car_repair']
};

export function useGooglePlaces() {
  const [places, setPlaces] = useState<GooglePlace[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPlaces = useCallback(async (
    category: LocalInfoCategory,
    center: { lat: number; lng: number },
    radius: number = 2000 // 2km radius
  ) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    
    if (!apiKey) {
      console.error('Google Places API key not found');
      setError('API key not configured');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let allPlaces: GooglePlace[] = [];
      
      if (category === 'all') {
        // For "all", search multiple popular types
        const popularTypes = ['restaurant', 'hospital', 'school', 'bank', 'gas_station'];
        
        for (const type of popularTypes) {
          const places = await searchByType(type, center, radius, apiKey);
          allPlaces = [...allPlaces, ...places];
        }
        
        // Remove duplicates and limit results
        allPlaces = removeDuplicates(allPlaces).slice(0, 20);
      } else {
        // Search for specific category
        const types = categoryToPlaceTypes[category];
        
        for (const type of types) {
          const places = await searchByType(type, center, radius, apiKey);
          allPlaces = [...allPlaces, ...places];
        }
        
        allPlaces = removeDuplicates(allPlaces);
      }
      
      setPlaces(allPlaces);
    } catch (err) {
      setError('Failed to fetch places');
      console.error('Error fetching places:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearPlaces = useCallback(() => {
    setPlaces([]);
    setError(null);
  }, []);

  return {
    places,
    loading,
    error,
    searchPlaces,
    clearPlaces
  };
}

// Helper function to search by specific type
async function searchByType(
  type: string, 
  center: { lat: number; lng: number }, 
  radius: number, 
  apiKey: string
): Promise<GooglePlace[]> {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.lat},${center.lng}&radius=${radius}&type=${type}&key=${apiKey}`;
  
  // Note: This will cause CORS issues in browser. We need to use a proxy or server-side API
  // For now, let's create a Next.js API route
  const response = await fetch(`/api/places/nearby?lat=${center.lat}&lng=${center.lng}&radius=${radius}&type=${type}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }
  
  const data = await response.json();
  
  return data.results.map((place: any) => ({
    id: place.place_id,
    name: place.name,
    lat: place.geometry.location.lat,
    lng: place.geometry.location.lng,
    category: type,
    rating: place.rating,
    priceLevel: place.price_level,
    vicinity: place.vicinity,
    types: place.types,
    photoUrl: place.photos?.[0] ? getPhotoUrl(place.photos[0].photo_reference, apiKey) : undefined,
    isOpen: place.opening_hours?.open_now,
    userRatingsTotal: place.user_ratings_total,
    businessStatus: place.business_status
  }));
}

// Helper function to get photo URL
function getPhotoUrl(photoReference: string, apiKey: string, maxWidth: number = 400): string {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}`;
}

// Helper function to remove duplicates
function removeDuplicates(places: GooglePlace[]): GooglePlace[] {
  const seen = new Set();
  return places.filter(place => {
    if (seen.has(place.id)) {
      return false;
    }
    seen.add(place.id);
    return true;
  });
}
