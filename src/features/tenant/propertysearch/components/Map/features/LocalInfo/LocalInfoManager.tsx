import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import CategoryBottomSheet from './CategoryBottomSheet';
import PlaceDetailBottomSheet from './PlaceDetailBottomSheet';
import { LocalInfoCategory } from './CategoryTabs';
import { GooglePlace } from '../../hooks/useGooglePlaces';

interface CategoryItem {
  id: string;
  title: string;
  address: string;
  rating: number;
  thumbnail: string;
  distance?: string;
}

interface LocalInfoManagerProps {
  isLocalInfoActive: boolean;
  selectedCategory: LocalInfoCategory;
  onCategoryChange: (category: LocalInfoCategory) => void;
  places: GooglePlace[];
  placesLoading: boolean;
  placesError: string | null;
  map: mapboxgl.Map | null;
  getPlaceDetails: (placeId: string) => Promise<GooglePlace | null>;
}

const LocalInfoManager: React.FC<LocalInfoManagerProps> = ({
  isLocalInfoActive,
  selectedCategory,
  onCategoryChange,
  places,
  placesLoading,
  placesError,
  map,
  getPlaceDetails
}) => {
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const [showPlaceDetailSheet, setShowPlaceDetailSheet] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<GooglePlace | null>(null);
  const [loadingPlaceDetails, setLoadingPlaceDetails] = useState(false);

  // Convert places to CategoryItem format
  const convertPlacesToCategoryItems = (places: GooglePlace[]): CategoryItem[] => {
    return places.map((place) => {
      // Calculate distance if map is available
      let distance = place.distance;
      if (!distance && map) {
        const center = map.getCenter();
        const distanceInKm = calculateDistance(
          center.lat,
          center.lng,
          place.lat,
          place.lng
        );
        distance = distanceInKm < 1 
          ? `${Math.round(distanceInKm * 1000)}m` 
          : `${distanceInKm.toFixed(1)}km`;
      }

      return {
        id: place.id,
        title: place.name,
        address: place.vicinity || place.address || "Address not available",
        rating: place.rating || 0,
        thumbnail: place.photoUrl || "/images/placeholder.png",
        distance: distance,
      };
    });
  };

  // Calculate distance between two coordinates
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  const handleCategoryTabClick = (category: LocalInfoCategory) => {
    onCategoryChange(category);
    
    // Show category sheet for specific categories, hide for "all"
    if (category !== "all") {
      setShowCategorySheet(true);
    } else {
      setShowCategorySheet(false);
    }
  };

  const handlePlaceClick = async (item: CategoryItem) => {
    setLoadingPlaceDetails(true);
    
    try {
      // Get detailed place information
      const detailedPlace = await getPlaceDetails(item.id);
      
      if (detailedPlace) {
        // Add calculated distance to detailed place
        if (!detailedPlace.distance && map) {
          const center = map.getCenter();
          const distanceInKm = calculateDistance(
            center.lat,
            center.lng,
            detailedPlace.lat,
            detailedPlace.lng
          );
          detailedPlace.distance = distanceInKm < 1 
            ? `${Math.round(distanceInKm * 1000)}m` 
            : `${distanceInKm.toFixed(1)}km`;
        }
        
        setSelectedPlace(detailedPlace);
        setShowPlaceDetailSheet(true);
        setShowCategorySheet(false); // Hide category sheet when showing place details
      } else {
        // Fallback to basic place data
        const basicPlace = places.find(place => place.id === item.id);
        if (basicPlace) {
          setSelectedPlace(basicPlace);
          setShowPlaceDetailSheet(true);
          setShowCategorySheet(false);
        }
      }
    } catch (error) {
      console.error('Error loading place details:', error);
      // Fallback to basic place data
      const basicPlace = places.find(place => place.id === item.id);
      if (basicPlace) {
        setSelectedPlace(basicPlace);
        setShowPlaceDetailSheet(true);
        setShowCategorySheet(false);
      }
    } finally {
      setLoadingPlaceDetails(false);
    }
  };

  const handleClosePlaceDetail = () => {
    setShowPlaceDetailSheet(false);
    setSelectedPlace(null);
  };

  const handleCloseCategorySheet = () => {
    setShowCategorySheet(false);
  };

  const handleBackToCategoryList = () => {
    setShowPlaceDetailSheet(false);
    setSelectedPlace(null);
    setShowCategorySheet(true); // Show category sheet again when going back
  };

  // Focus map on place when place detail is opened
  React.useEffect(() => {
    if (selectedPlace && map && showPlaceDetailSheet) {
      map.flyTo({
        center: [selectedPlace.lng, selectedPlace.lat],
        zoom: Math.max(map.getZoom(), 15),
        duration: 1000
      });
    }
  }, [selectedPlace, map, showPlaceDetailSheet]);

  return (
    <>
      {/* Category Tabs */}
      <div
        className={`absolute top-13 left-0 right-0 z-20 inline-flex items-center gap-1.5 transition-transform duration-300 ease-in-out ${
          isLocalInfoActive ? "transform-none" : "-translate-y-full"
        }`}
      >
        {isLocalInfoActive && (
          <CategoryTabs
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryTabClick}
          />
        )}
      </div>

      {/* Category Bottom Sheet */}
      <CategoryBottomSheet
        isOpen={showCategorySheet && !showPlaceDetailSheet}
        onClose={handleCloseCategorySheet}
        category={selectedCategory}
        items={convertPlacesToCategoryItems(places)}
        onItemClick={handlePlaceClick}
        initialHeight={0.35}
      />

      {/* Place Detail Bottom Sheet */}
      <PlaceDetailBottomSheet
        isOpen={showPlaceDetailSheet}
        onClose={handleClosePlaceDetail}
        onBack={handleBackToCategoryList}
        place={selectedPlace}
        loading={loadingPlaceDetails}
      />

      {/* Loading Indicator */}
      {((isLocalInfoActive && placesLoading) || loadingPlaceDetails) && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2">
            <svg
              className="animate-spin h-4 w-4 text-[#20364D]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="text-sm text-gray-700">
              {loadingPlaceDetails ? "Loading place details..." : "Loading places..."}
            </span>
          </div>
        </div>
      )}

      {/* Error Indicator */}
      {isLocalInfoActive && placesError && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg px-4 py-2 text-sm max-w-xs text-center">
            <div className="flex items-center justify-center mb-1">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Error
            </div>
            {placesError}
          </div>
        </div>
      )}

      {/* Places Count Indicator */}
      {/* {isLocalInfoActive && !placesLoading && !placesError && places.length > 0 && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-[rgba(32,54,77,0.9)] text-white rounded-lg px-3 py-1 text-xs font-medium">
            {places.length} {selectedCategory === 'all' ? 'places' : selectedCategory} found
          </div>
        </div>
      )} */}

      {/* No Results Indicator */}
      {isLocalInfoActive && !placesLoading && !placesError && places.length === 0 && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-gray-100 border border-gray-300 text-gray-700 rounded-lg px-4 py-2 text-sm text-center">
            <div className="flex items-center justify-center mb-1">
              <span className="text-lg mr-1">🔍</span>
              No Results
            </div>
            No {selectedCategory === 'all' ? 'places' : selectedCategory} found in this area
          </div>
        </div>
      )}
    </>
  );
};

export default LocalInfoManager;