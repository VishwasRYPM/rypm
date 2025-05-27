import React from 'react';
import { GooglePlace } from '../hooks/useGooglePlaces';

interface PlaceMarkerProps {
  place: GooglePlace;
  onClick: (place: GooglePlace) => void;
  isSelected?: boolean;
}

// Category to icon mapping
const categoryIcons: Record<string, string> = {
  grocery: '🛒',
  supermarket: '🛒',
  convenience: '🏪',
  school: '🏫',
  university: '🎓',
  library: '📚',
  restaurant: '🍽️',
  cafe: '☕',
  fast_food: '🍔',
  hospital: '🏥',
  pharmacy: '💊',
  doctor: '👨‍⚕️',
  gym: '💪',
  spa: '🧘',
  fitness: '🏃',
  shopping_mall: '🏬',
  electronics: '📱',
  clothing: '👕',
  bank: '🏦',
  atm: '💳',
  office: '🏢',
  lodging: '🏨',
  gas_station: '⛽',
  travel: '✈️',
  laundry: '👔',
  hair_care: '💇',
  car_repair: '🔧',
  park: '🌳',
  default: '📍'
};

const PlaceMarker: React.FC<PlaceMarkerProps> = ({ 
  place, 
  onClick, 
  isSelected = false 
}) => {
  const icon = categoryIcons[place.category] || categoryIcons.default;

  return (
    <div
      className={`
        cursor-pointer transform transition-all duration-200 hover:scale-110
        ${isSelected ? 'z-50' : 'z-10'}
      `}
      onClick={() => onClick(place)}
    >
      {/* Place Icon */}
      <div
        className={`
          w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white
          ${isSelected 
            ? 'bg-[#20364D] scale-110' 
            : 'bg-[#4A90E2] hover:bg-[#357ABD]'
          }
        `}
      >
        <span className="text-sm">{icon}</span>
      </div>
      
      {/* Place Name (appears on hover) */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          {place.name}
        </div>
      </div>
    </div>
  );
};

export default PlaceMarker;