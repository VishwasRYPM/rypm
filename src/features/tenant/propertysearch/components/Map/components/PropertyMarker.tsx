import React from 'react';
import { MapProperty } from '../hooks/useMapProperties';

interface PropertyMarkerProps {
  property: MapProperty;
  onClick: (property: MapProperty) => void;
  isSelected?: boolean;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ 
  property, 
  onClick, 
  isSelected = false 
}) => {
  return (
    <div
      className={`
        cursor-pointer transform transition-all duration-200 hover:scale-110
        ${isSelected ? 'z-50' : 'z-10'}
      `}
      onClick={() => onClick(property)}
    >
      {/* Price Badge */}
      <div
        className={`
          px-2 py-1 rounded-lg text-xs font-bold text-white shadow-lg
          ${isSelected 
            ? 'bg-[#20364D] border-2 border-white' 
            : 'bg-[#20364D] hover:bg-[#2a4a63]'
          }
        `}
      >
        {property.price}
      </div>
      
      {/* Property Type Indicator */}
      <div className="flex justify-center mt-1">
        <div
          className={`
            w-3 h-3 rounded-full border-2 border-white shadow-md
            ${isSelected ? 'bg-[#20364D]' : 'bg-[#20364D]'}
          `}
        />
      </div>
    </div>
  );
};

export default PropertyMarker;