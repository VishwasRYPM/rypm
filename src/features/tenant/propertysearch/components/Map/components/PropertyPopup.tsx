import React, { useState } from "react";
import { MapProperty } from "../hooks/useMapProperties";
import { BedIcon, ShowerIcon, LocationIcon, CloseIcon } from "@/ui/icons";
import HeartUnFillIcon from "@/ui/icons/HeartUnFillIcon";
import HeartFillIcon from "@/ui/icons/HeartFillIcon";

interface PropertyPopupProps {
  property: MapProperty;
  onClose: () => void;
  onViewDetails: (propertyId: string) => void;
}

const PropertyPopup: React.FC<PropertyPopupProps> = ({
  property,
  onClose,
  onViewDetails,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  // Handle popup click to view details
  const handlePopupClick = () => {
    onViewDetails(property.id);
  };

  // Handle heart icon click
  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent popup click when clicking heart
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 px-4">
      <div
        className="relative rounded-xl overflow-hidden shadow-xl w-[92vw] max-w-[361px] h-[70vh] max-h-[282px] cursor-pointer"
        onClick={handlePopupClick}
      >
        {/* Top Action Buttons */}
        <div className="absolute top-2 right-2 z-10 flex items-center gap-2.5">
          {/* Heart Icon */}
          <div onClick={handleHeartClick} className="cursor-pointer">
            {isFavorited ? (
              <HeartFillIcon 
                width={30} 
                height={30} 
                className="transition-transform hover:scale-110" 
              />
            ) : (
              <HeartUnFillIcon 
                width={30} 
                height={30} 
                className="transition-transform hover:scale-110" 
              />
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent popup click when closing
              onClose();
            }}
            className="w-7 h-7 flex top-2 items-center justify-center rounded-full [background:rgba(0,29,61,0.3)] backdrop-blur-[3.55px]"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Property Image */}
        <div className="relative w-full h-full">
          <img
            src={property.images[0]}
            alt={`Property in ${property.city}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay at full width of image bottom */}
          <div className="absolute bottom-0 inset-x-0 text-white flex justify-between items-center px-3 h-[69px] bg-[#001D3D4D] backdrop-blur-[3.55px]">
            <div>
              <h3 className="text-lg font-semibold">{property.price}</h3>
              <div className="flex items-center text-sm">
                <LocationIcon className="mr-1" />
                <span>{property.city}, {property.country}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm px-2 py-1 rounded-lg">
              <div className="flex items-center">
                <BedIcon className="mr-1" />
                {property.bedCount}
              </div>
              <div className="flex items-center">
                <ShowerIcon className="mr-1" />
                {property.bathCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPopup;
