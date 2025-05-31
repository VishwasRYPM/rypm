import React, { useState, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { GooglePlace, PlaceReview } from "../../hooks/useGooglePlaces";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { RatingIcon } from "@/ui/icons";
import { FallbackImage } from "../../utils/imageFallbacks";
import CloseIcon from "@/ui/icons/CloseIcon";

interface PlaceDetailBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  place: GooglePlace | null;
  loading: boolean;
  category?: string;
}

const PlaceDetailBottomSheet: React.FC<PlaceDetailBottomSheetProps> = ({
  isOpen,
  onClose,
  onBack,
  place,
  loading,
  category = "place",
}) => {
  const [dragY, setDragY] = useState(0);
  const constraintsRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const sheetHeight = screenHeight * 0.85;
  const snapThreshold = sheetHeight * 0.3;

  const handleDragEnd = (event: any, info: PanInfo) => {
    const shouldClose = info.offset.y > snapThreshold;

    if (shouldClose) {
      onClose();
    } else {
      setDragY(0);
    }
  };

  const handleDragStart = (event: any, info: any) => {
    if (contentRef.current && contentRef.current.contains(event.target)) {
      const isScrollable =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      if (isScrollable) {
        return false;
      }
    }
    return true;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <motion.div
        ref={constraintsRef}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        drag="y"
        dragConstraints={{ top: -sheetHeight * 0.2, bottom: sheetHeight }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="fixed bottom-0 left-0 right-0 rounded-t-3xl shadow-2xl z-50 overflow-hidden flex flex-col bg-[rgba(23,61,59,0.5)] backdrop-blur-[5px]"
        style={{ height: `${sheetHeight}px` }}
      >
        {/* Drag Handle */}
        <div
          className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing flex-shrink-0"
          style={{ touchAction: "none" }}
        >
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header - Updated layout without back button */}
        <div
          className="flex items-center justify-between px-4 flex-shrink-0"
          style={{ touchAction: "none" }}
        >
          {/* Centered category title */}
          <h2 className="text-md font-bold text-[#FFF] capitalize flex-1 text-center">
            {category}
          </h2>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            style={{ touchAction: "manipulation" }}
          >
            <CloseIcon width={16} height={16} />
          </button>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto px-2 py-2"
          style={{
            touchAction: "pan-y",
            overscrollBehavior: "contain",
          }}
        >
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <svg
                  className="animate-spin h-8 w-8 text-[#FFF] mx-auto mb-4"
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
                <p className="text-[#E5E7EB]">Loading place details...</p>
              </div>
            </div>
          ) : place ? (
            <div className="space-y-2">
              {" "}
              {/* ✅ Reduced spacing from space-y-4 to space-y-2 */}
              {/* Upper Section - Same design as category item card */}
              <div className="flex items-start p-1">
                {/* Thumbnail */}
                <div className="w-14 h-15 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <FallbackImage
                    src={place.photoUrl}
                    alt={place.name}
                    className="w-full h-full object-cover"
                    category={category}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 ml-3 min-w-0">
                  <h3 className="text-sm font-semibold text-[#FFF] truncate mb-1">
                    {place.name}
                  </h3>
                  <p className="text-xs text-[#E5E7EB] line-clamp-2 mb-1">
                    {place.address}
                  </p>
                  {/* Contact Number */}
                  {place.phoneNumber && (
                    <p className="text-xs text-[#E5E7EB] mb-1">
                      {place.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center ml-2 flex-shrink-0">
                  <span className="mr-1">
                    <RatingIcon />
                  </span>
                  <span className="text-sm font-medium text-[#FFF]">
                    {place.rating ? place.rating.toFixed(1) : "4.2"}
                  </span>
                </div>
              </div>
              {/* Description */}
              {place.description && (
                <div className="px-1">
                  <p className="text-[#E5E7EB] text-sm leading-relaxed">
                    {place.description}
                  </p>
                </div>
              )}
              {place.website && (
                <div className="px-1">
                  <a
                    href={place.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFF] font-medium"
                  >
                    www.
                    {
                      place.website
                        .replace(/^https?:\/\//, "")
                        .replace(/^www\./, "")
                        .split("/")[0]
                    }
                  </a>
                </div>
              )}
              {/* Divider */}
              <div className="px-10 py-2">
                <hr className="border-white border-t-1 my-2" />
              </div>
              {/* Reviews */}
              {place.reviews && place.reviews.length > 0 && (
                <div className="px-1">
                  {" "}
                  {/* ✅ Reduced spacing by removing space-y-3 wrapper */}
                  <h3 className="text-md font-semibold text-[#FFF] text-center mb-3">
                    {" "}
                    {/* ✅ Added mb-3 for spacing */}
                    Reviews
                  </h3>
                  <div className="space-y-3">
                    {place.reviews.slice(0, 3).map((review, index) => (
                      <ReviewCard key={index} review={review} />
                    ))}
                  </div>
                </div>
              )}
              {/* Bottom padding for better scrolling */}
              <div className="h-4" />
            </div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="text-4xl mb-2">😕</div>
                <p className="text-[#E5E7EB]">Place details not available</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

// Review Card Component - Updated colors
const ReviewCard: React.FC<{ review: PlaceReview }> = ({ review }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-lg p-4 space-y-2">
      <div className="flex items-center gap-3">
        {review.profile_photo_url && (
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            className="w-8 h-8 rounded-full"
          />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#FFF] text-sm">
              {review.author_name}
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-[#E5E7EB] leading-relaxed">{review.text}</p>
    </div>
  );
};

export default PlaceDetailBottomSheet;
