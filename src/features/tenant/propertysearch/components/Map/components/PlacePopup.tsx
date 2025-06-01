import React from "react";
import { GooglePlace } from "../hooks/useGooglePlaces";
import { LocationIcon, CloseIcon, RatingIcon } from "@/ui/icons";
interface PlacePopupProps {
  place: GooglePlace;
  onClose: () => void;
}

const PlacePopup: React.FC<PlacePopupProps> = ({ place, onClose }) => {
  const formatRating = (rating?: number) => {
    if (!rating) return "No rating";
    return `${rating} ⭐`;
  };

  const formatPriceLevel = (priceLevel?: number) => {
    if (!priceLevel) return "";
    return "$".repeat(priceLevel);
  };

  const getStatusColor = (isOpen?: boolean) => {
    if (isOpen === undefined) return "text-gray-500";
    return isOpen ? "text-green-600" : "text-red-600";
  };

  const getStatusText = (isOpen?: boolean) => {
    if (isOpen === undefined) return "Hours unknown";
    return isOpen ? "Open now" : "Closed";
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
      {/* Background Image */}
      {place.photoUrl ? (
        <img
          src={place.photoUrl}
          alt={place.name}
          className="absolute w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center text-4xl">
          📍
        </div>
      )}

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full [background:rgba(0,29,61,0.3)] backdrop-blur-[3.55px]"
      >
        <CloseIcon />
      </button>

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-2.5 [background:rgba(0,29,61,0.3)] backdrop-blur-[3.55px]">
        {/* Name + Rating in one line */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold truncate">{place.name}</h3>
          <div className="flex items-center text-sm ml-3 flex-shrink-0">
            <span className="mr-1">
              <RatingIcon />
            </span>
            <span className="text-[12px]">
              {place.rating?.toFixed(1) || "No rating"}
            </span>
          </div>
        </div>

        {/* Vicinity */}
        <div className="flex items-center text-sm mt-0.5">
          <LocationIcon className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{place.vicinity}</span>
        </div>
      </div>
    </div>
  );
};

export default PlacePopup;
