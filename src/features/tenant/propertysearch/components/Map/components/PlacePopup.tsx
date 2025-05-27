import React from 'react';
import { GooglePlace } from '../hooks/useGooglePlaces';

interface PlacePopupProps {
  place: GooglePlace;
  onClose: () => void;
}

const PlacePopup: React.FC<PlacePopupProps> = ({ 
  place, 
  onClose
}) => {
  const formatRating = (rating?: number) => {
    if (!rating) return 'No rating';
    return `${rating} ⭐`;
  };

  const formatPriceLevel = (priceLevel?: number) => {
    if (!priceLevel) return '';
    return '$'.repeat(priceLevel);
  };

  const getStatusColor = (isOpen?: boolean) => {
    if (isOpen === undefined) return 'text-gray-500';
    return isOpen ? 'text-green-600' : 'text-red-600';
  };

  const getStatusText = (isOpen?: boolean) => {
    if (isOpen === undefined) return 'Hours unknown';
    return isOpen ? 'Open now' : 'Closed';
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 min-w-[280px] max-w-[320px]">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M9 3L3 9M3 3L9 9"
            stroke="#666"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Place Image Placeholder */}
{/* Place Image */}
<div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 overflow-hidden">
  {place.photoUrl ? (
    <img
      src={place.photoUrl}
      alt={place.name}
      className="w-full h-full object-cover"
      onError={(e) => {
        // Fallback to icon if image fails to load
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
    />
  ) : null}
  <div className={`w-full h-full flex items-center justify-center ${place.photoUrl ? 'hidden' : ''}`}>
    <span className="text-4xl">
      {place.category === 'restaurant' ? '🍽️' :
       place.category === 'cafe' ? '☕' :
       place.category === 'hospital' ? '🏥' :
       place.category === 'school' ? '🏫' :
       place.category === 'gym' ? '💪' :
       place.category === 'shopping_mall' ? '🏬' :
       place.category === 'bank' ? '🏦' :
       place.category === 'gas_station' ? '⛽' :
       '📍'}
    </span>
  </div>
</div>


      {/* Place Info */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-[#20364D] pr-2">{place.name}</h3>
          {place.priceLevel && (
            <span className="text-sm text-green-600 font-medium">
              {formatPriceLevel(place.priceLevel)}
            </span>
          )}
        </div>

        {/* Rating and Status */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{formatRating(place.rating)}</span>
          <span className={`font-medium ${getStatusColor(place.isOpen)}`}>
            {getStatusText(place.isOpen)}
          </span>
        </div>

        {/* Address */}
        <div className="flex items-center text-sm text-gray-600">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mr-1 flex-shrink-0">
            <path
              d="M6 1C4.67392 1 3.40215 1.52678 2.46447 2.46447C1.52678 3.40215 1 4.67392 1 6C1 8.5 6 11 6 11C6 11 11 8.5 11 6C11 4.67392 10.4732 3.40215 9.53553 2.46447C8.59785 1.52678 7.32608 1 6 1Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="truncate">{place.vicinity}</span>
        </div>

        {/* Category */}
        <div className="flex items-center text-sm text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded-full text-xs capitalize">
            {place.category.replace('_', ' ')}
          </span>
        </div>

        {/* View on Maps Button */}
        <button
          onClick={() => {
            const url = `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
            window.open(url, '_blank');
          }}
          className="w-full mt-4 py-2 bg-[#20364D] text-white rounded-lg text-sm font-medium hover:bg-[#2a4a63] transition-colors flex items-center justify-center space-x-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15,3 21,3 21,9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <span>View on Maps</span>
        </button>
      </div>
    </div>
  );
};

export default PlacePopup;
