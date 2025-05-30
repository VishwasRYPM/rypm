import React from 'react';
import { MapProperty } from '../hooks/useMapProperties';
import PropertyMarkerShapeAdvanced from './PropertyMarkerShapeAdvanced';

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
      <PropertyMarkerShapeAdvanced 
        text={property.price} 
        isSelected={isSelected}
        className="select-none" // Prevent text selection
      />
    </div>
  );
};

export default PropertyMarker;
