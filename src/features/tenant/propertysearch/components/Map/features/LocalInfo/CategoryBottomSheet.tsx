import React, { useState, useRef, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import CloseIcon from '@/ui/icons/CloseIcon';

interface CategoryItem {
  id: string;
  title: string;
  address: string;
  rating: number;
  thumbnail: string;
  distance?: string;
}

interface CategoryBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  items: CategoryItem[];
}

const CategoryBottomSheet: React.FC<CategoryBottomSheetProps> = ({
  isOpen,
  onClose,
  category,
  items
}) => {
  const [dragY, setDragY] = useState(0);
  const constraintsRef = useRef(null);
  const sheetHeight = window.innerHeight * 0.7; // 70% of screen height
  const snapThreshold = sheetHeight * 0.3; // 30% threshold for closing

  const handleDragEnd = (event: any, info: PanInfo) => {
    const shouldClose = info.offset.y > snapThreshold;
    
    if (shouldClose) {
      onClose();
    } else {
      setDragY(0);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
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
        drag="y"
        dragConstraints={{ top: -sheetHeight * 0.3, bottom: sheetHeight }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50"
        style={{ 
          height: `${sheetHeight}px`,
          maxHeight: '70vh'
        }}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-bold text-[#001D3D] capitalize">
            {category}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <CloseIcon width={20} height={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {items.length > 0 ? (
            <div className="space-y-3">
              {items.map((item) => (
                <CategoryItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">No {category.toLowerCase()} found nearby</p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

// Category Item Card Component
const CategoryItemCard: React.FC<{ item: CategoryItem }> = ({ item }) => {
  return (
    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      {/* Thumbnail */}
      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback image if thumbnail fails to load
            e.currentTarget.src = '/images/placeholder.png';
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 ml-3 min-w-0">
        <h3 className="text-sm font-semibold text-[#001D3D] truncate">
          {item.title}
        </h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
          {item.address}
        </p>
        {item.distance && (
          <p className="text-xs text-[#20364D] mt-1">
            {item.distance}
          </p>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center ml-2 flex-shrink-0">
        <span className="text-yellow-400 mr-1">⭐</span>
        <span className="text-sm font-medium text-[#001D3D]">
          {item.rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default CategoryBottomSheet;