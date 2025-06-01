import { useState, useCallback } from "react";
import { LocalInfoCategory } from "../features/LocalInfo/CategoryTabs";

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
  distance?: string;
  address: string;
  website?: string;
  phoneNumber?: string;
  openingHours?: string[];
  reviews?: PlaceReview[];
  description?: string;
}

export interface PlaceReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

// Map our categories to Google Places types
const categoryToPlaceTypes: Record<LocalInfoCategory, string[]> = {
  all: [],
  grocery: ["grocery_or_supermarket", "supermarket"],
  education: ["school", "university"],
  restaurants: ["restaurant", "meal_takeaway", "cafe"],
  healthcare: ["hospital", "pharmacy", "doctor"],
  fitness: ["gym", "spa"],
  shopping: ["shopping_mall", "clothing_store", "electronics_store"],
  business: ["bank", "atm", "accounting"],
  travel: ["lodging", "gas_station", "travel_agency"],
  services: ["laundry", "hair_care", "car_repair"],
};

export function useGooglePlaces() {
  const [places, setPlaces] = useState<GooglePlace[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPlaces = useCallback(
    async (
      category: LocalInfoCategory,
      center: { lat: number; lng: number },
      radius: number = 2000
    ) => {
      const apiKey =
        process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ||
        "AIzaSyCHl2q8AVSHkjv9RfHbzUKxyK4UP8mAv_4";

      if (!apiKey) {
        console.error("Google Places API key not found");
        setError("API key not configured");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        let allPlaces: GooglePlace[] = [];

        if (category === "all") {
          const popularTypes = [
            "restaurant",
            "hospital",
            "school",
            "bank",
            "gas_station",
          ];

          // ✅ Make all calls in parallel (FAST)
          const placePromises = popularTypes.map((type) =>
            searchByType(type, center, radius, apiKey)
          );

          const placeArrays = await Promise.all(placePromises); // All at once!

          placeArrays.forEach((places) => {
            allPlaces = [...allPlaces, ...places.slice(0, 4)];
          });

          allPlaces = removeDuplicates(allPlaces);
        } else {
          const types = categoryToPlaceTypes[category];

          for (const type of types) {
            const places = await searchByType(type, center, radius, apiKey);
            allPlaces = [...allPlaces, ...places];
          }

          allPlaces = removeDuplicates(allPlaces);
        }

        setPlaces(allPlaces);
      } catch (err) {
        setError("Failed to fetch places");
        console.error("Error fetching places:", err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // New function to get detailed place information
  const getPlaceDetails = useCallback(
    async (placeId: string): Promise<GooglePlace | null> => {
      const apiKey =
        process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ||
        "AIzaSyCHl2q8AVSHkjv9RfHbzUKxyK4UP8mAv_4";

      if (!apiKey) {
        console.error("Google Places API key not found");
        return null;
      }

      try {
        const response = await fetch(`/api/places/details?place_id=${placeId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch place details");
        }

        const data = await response.json();

        if (data.result) {
          const place = data.result;
          return {
            id: place.place_id,
            name: place.name,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
            category: place.types[0],
            rating: place.rating,
            priceLevel: place.price_level,
            vicinity: place.vicinity || place.formatted_address,
            types: place.types,
            photoUrl: place.photos?.[0]
              ? getPhotoUrl(place.photos[0].photo_reference, apiKey)
              : undefined,
            isOpen: place.opening_hours?.open_now,
            userRatingsTotal: place.user_ratings_total,
            businessStatus: place.business_status,
            address: place.formatted_address,
            // Additional details
            website: place.website,
            phoneNumber: place.formatted_phone_number,
            openingHours: place.opening_hours?.weekday_text,
            reviews: place.reviews || [],
            description:
              place.editorial_summary?.overview || generateDescription(place),
          };
        }

        return null;
      } catch (err) {
        console.error("Error fetching place details:", err);
        return null;
      }
    },
    []
  );

  const clearPlaces = useCallback(() => {
    setPlaces([]);
    setError(null);
  }, []);

  return {
    places,
    loading,
    error,
    searchPlaces,
    getPlaceDetails,
    clearPlaces,
  };
}

// Helper function to search by specific type
async function searchByType(
  type: string,
  center: { lat: number; lng: number },
  radius: number,
  apiKey: string
): Promise<GooglePlace[]> {
  const response = await fetch(
    `/api/places/nearby?lat=${center.lat}&lng=${center.lng}&radius=${radius}&type=${type}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch places");
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
    photoUrl: place.photos?.[0]
      ? getPhotoUrl(place.photos[0].photo_reference, apiKey)
      : undefined,
    isOpen: place.opening_hours?.open_now,
    userRatingsTotal: place.user_ratings_total,
    businessStatus: place.business_status,
    address: place.formatted_address || place.vicinity,
  }));
}

// Helper function to get photo URL
function getPhotoUrl(
  photoReference: string,
  apiKey: string,
  maxWidth: number = 400
): string {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}`;
}

// Helper function to remove duplicates
function removeDuplicates(places: GooglePlace[]): GooglePlace[] {
  const seen = new Set();
  return places.filter((place) => {
    if (seen.has(place.id)) {
      return false;
    }
    seen.add(place.id);
    return true;
  });
}

// Helper function to generate description from place data
function generateDescription(place: any): string {
  const type = place.types[0]?.replace(/_/g, " ") || "establishment";
  const rating = place.rating ? ` with a ${place.rating}-star rating` : "";
  const reviews = place.user_ratings_total
    ? ` based on ${place.user_ratings_total} reviews`
    : "";

  return `This ${type} is located in ${
    place.vicinity || "the area"
  }${rating}${reviews}. ${
    place.business_status === "OPERATIONAL"
      ? "Currently operational and serving customers."
      : ""
  }`;
}
