import React, { useState, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { GooglePlace, PlaceReview } from '../../hooks/useGooglePlaces';
import { ArrowLeft, ExternalLink, Phone, Globe, Clock, Star, MapPin } from 'lucide-react';

interface PlaceDetailBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  place: GooglePlace | null;
  loading: boolean;
}

const PlaceDetailBottomSheet: React.FC<PlaceDetailBottomSheetProps> = ({
  isOpen,
  onClose,
  onBack,
  place,
  loading
}) => {
  const [dragY, setDragY] = useState(0);
  const constraintsRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
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
      const isScrollable = contentRef.current.scrollHeight > contentRef.current.clientHeight;
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
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        drag="y"
        dragConstraints={{ top: -sheetHeight * 0.2, bottom: sheetHeight }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
        style={{ height: `${sheetHeight}px` }}
      >
        {/* Drag Handle */}
        <div 
          className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing flex-shrink-0"
          style={{ touchAction: 'none' }}
        >
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div 
          className="flex items-center justify-between px-4 py-3 border-b border-gray-200 flex-shrink-0"
          style={{ touchAction: 'none' }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              style={{ touchAction: 'manipulation' }}
            >
              <ArrowLeft width={20} height={20} className="text-[#001D3D]" />
            </button>
            <h2 className="text-lg font-bold text-[#001D3D]">
              Place Details
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            style={{ touchAction: 'manipulation' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div 
          ref={contentRef}
          className="flex-1 overflow-y-auto"
          style={{ 
            touchAction: 'pan-y',
            overscrollBehavior: 'contain'
          }}
        >
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <svg
                  className="animate-spin h-8 w-8 text-[#20364D] mx-auto mb-4"
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
                <p className="text-gray-500">Loading place details...</p>
              </div>
            </div>
          ) : place ? (
            <div className="p-4 space-y-6">
              {/* Hero Image */}
              {place.photoUrl && (
                <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={place.photoUrl}
                    alt={place.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Basic Info */}
              <div className="space-y-3">
                <div>
                  <h1 className="text-2xl font-bold text-[#001D3D] mb-2">{place.name}</h1>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <p className="text-gray-600 text-sm">{place.address}</p>
                  </div>
                  
                  {/* Rating */}
                  {place.rating && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="font-semibold text-[#001D3D]">{place.rating.toFixed(1)}</span>
                      </div>
                      {place.userRatingsTotal && (
                        <span className="text-sm text-gray-500">
                          ({place.userRatingsTotal} reviews)
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Status */}
                {place.isOpen !== undefined && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className={`text-sm font-medium ${place.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                      {place.isOpen ? 'Open now' : 'Closed'}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              {place.description && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#001D3D]">About</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{place.description}</p>
                </div>
              )}

              {/* Contact Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[#001D3D]">Contact</h3>
                
                {place.phoneNumber && (
                  <a 
                    href={`tel:${place.phoneNumber}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#20364D]" />
                    <span className="text-[#001D3D] font-medium">{place.phoneNumber}</span>
                  </a>
                )}

                {place.website && (
                  <a 
                    href={place.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Globe className="w-5 h-5 text-[#20364D]" />
                    <span className="text-[#001D3D] font-medium">Visit Website</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                  </a>
                )}
              </div>

              {/* Opening Hours */}
              {place.openingHours && place.openingHours.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#001D3D]">Opening Hours</h3>
                  <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                    {place.openingHours.map((hours, index) => (
                      <p key={index} className="text-sm text-gray-600">{hours}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              {place.reviews && place.reviews.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#001D3D]">Recent Reviews</h3>
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
                <p className="text-gray-500">Place details not available</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

// Review Card Component
const ReviewCard: React.FC<{ review: PlaceReview }> = ({ review }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
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
            <span className="font-medium text-[#001D3D] text-sm">{review.author_name}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-gray-500">{review.relative_time_description}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
    </div>
  );
};

export default PlaceDetailBottomSheet;