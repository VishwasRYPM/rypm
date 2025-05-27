import React from 'react';
import { MapProperty } from '../hooks/useMapProperties';

interface PropertyPopupProps {
  property: MapProperty;
  onClose: () => void;
  onViewDetails: (propertyId: string) => void;
}

const PropertyPopup: React.FC<PropertyPopupProps> = ({ 
  property, 
  onClose, 
  onViewDetails 
}) => {
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

      {/* Property Image */}
      <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 overflow-hidden">
        <img
          src={property.images[0]}
          alt={`Property in ${property.city}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Property Info */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-[#20364D]">{property.price}</h3>
          <span className="text-sm text-gray-500">{property.propertyType}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mr-1">
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
          {property.city}, {property.country}
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mr-1">
              <path
                d="M2 3H10V9H2V3Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 3L6 6L2 3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {property.bedCount} bed{property.bedCount !== 1 ? 's' : ''}
          </div>
          <div className="flex items-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mr-1">
              <path
                d="M8 2V1H4V2H1V11H11V2H8Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {property.bathCount} bath{property.bathCount !== 1 ? 's' : ''}
          </div>
        </div>

        <p className="text-xs text-gray-500">{property.address}</p>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(property.id)}
          className="w-full mt-3 py-2 bg-[#20364D] text-white rounded-lg text-sm font-medium hover:bg-[#2a4a63] transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyPopup;