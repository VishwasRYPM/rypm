import React, { useState, useRef, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import CloseIcon from "@/ui/icons/CloseIcon";
import { RatingIcon } from "@/ui/icons";
import { FallbackImage, getCategoryFallback } from "../../utils/imageFallbacks";

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
  onItemClick?: (item: CategoryItem) => void;
  onPlaceDetailRequest?: (placeId: string) => Promise<void>;
  initialHeight?: number;
}

const CategoryBottomSheet: React.FC<CategoryBottomSheetProps> = ({
  isOpen,
  onClose,
  category,
  items,
  onItemClick,
  onPlaceDetailRequest,
  initialHeight = 0.25,
}) => {
  const [dragY, setDragY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const constraintsRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const minHeight = screenHeight * initialHeight;
  const maxHeight = screenHeight * 0.8;
  const currentHeight = isExpanded ? maxHeight : minHeight;

  const snapThreshold = minHeight * 0.5;

  const handleDragEnd = (event: any, info: PanInfo) => {
    const shouldClose = info.offset.y > snapThreshold;
    const shouldExpand = info.offset.y < -snapThreshold && !isExpanded;
    const shouldCollapse = info.offset.y > snapThreshold && isExpanded;

    if (shouldClose && !isExpanded) {
      onClose();
    } else if (shouldExpand) {
      setIsExpanded(true);
      setDragY(0);
    } else if (shouldCollapse) {
      setIsExpanded(false);
      setDragY(0);
    } else {
      setDragY(0);
    }
  };

  // Prevent drag when scrolling content
  const handleDragStart = (event: any, info: any) => {
    // Check if the drag started from the content area
    if (contentRef.current && contentRef.current.contains(event.target)) {
      // If content is scrollable, prevent sheet drag
      const isScrollable =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      if (isScrollable) {
        return false; // Prevent drag
      }
    }
    return true; // Allow drag
  };

  useEffect(() => {
    if (!isOpen) {
      setIsExpanded(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 0.3 }}
      // exit={{ opacity: 0 }}
      // className="fixed inset-0 bg-black z-40"
      // onClick={onClose}
      />

      {/* Bottom Sheet */}
      <motion.div
        ref={constraintsRef}
        initial={{ y: "100%" }}
        animate={{ y: `${100 - (currentHeight / screenHeight) * 100}%` }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        drag="y"
        dragConstraints={{
          top: isExpanded ? -maxHeight * 0.2 : -minHeight * 0.2,
          bottom: screenHeight,
        }}
        dragElastic={0.1}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="fixed bottom-0 left-0 right-0 rounded-t-3xl shadow-2xl z-50 overflow-hidden flex flex-col bg-[rgba(23,61,59,0.5)] backdrop-blur-[5px]"
        style={{
          height: `${currentHeight}px`,
        }}
      >
        {/* Drag Handle - Only this area should trigger sheet drag */}
        <div
          className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing flex-shrink-0"
          style={{ touchAction: "none" }}
        >
          <div className="w-12 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header - Also draggable */}
        <div
          className="grid grid-cols-[1fr_auto_1fr] items-center px-4 flex-shrink-0"
          style={{ touchAction: "none" }}
        >
          {/* Empty left column */}
          <div></div>

          {/* Centered category title */}
          <h2 className="text-md font-bold text-[#FFF] capitalize whitespace-nowrap">
            {category}
          </h2>

          {/* Close Button in right column */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              style={{ touchAction: "manipulation" }}
            >
              <CloseIcon width={16} height={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Content - This should NOT trigger sheet drag */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto px-2 py-2"
          style={{
            touchAction: "pan-y", // Allow vertical scrolling only
            overscrollBehavior: "contain", // Prevent scroll chaining
          }}
        >
          {items.length > 0 ? (
            <div className="space-y-3 pb-4">
              {items.map((item) => (
                <CategoryItemCard
                  key={item.id}
                  item={item}
                  category={category}
                  onItemClick={onItemClick}
                  onPlaceDetailRequest={onPlaceDetailRequest}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-32">
              <div className="text-center">
                <div className="text-4xl mb-2">🔍</div>
                <p className="text-gray-500">
                  No {category.toLowerCase()} found nearby
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Try zooming out or changing location
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

// Enhanced CategoryItemCard Component
const CategoryItemCard: React.FC<{
  item: CategoryItem;
  category: string;
  onItemClick?: (item: CategoryItem) => void;
  onPlaceDetailRequest?: (placeId: string) => Promise<void>;
}> = ({ item, category, onItemClick, onPlaceDetailRequest }) => {
  const handleCardClick = async () => {
    if (onItemClick) {
      onItemClick(item);
    }
    if (onPlaceDetailRequest) {
      await onPlaceDetailRequest(item.id);
    }
  };

  return (
    <div
      className="flex items-start p-1 hover:shadow-md hover:border-[#20364D]/20 transition-all duration-200 cursor-pointer active:scale-[0.98]"
      onClick={handleCardClick}
      style={{ touchAction: "manipulation" }} // Prevent drag on cards
    >
      {/* Thumbnail */}
      <div className="w-13 h-13 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
        <FallbackImage
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover"
          category={category}
        />
      </div>

      {/* Content */}
      <div className="flex-1 ml-3 min-w-0">
        <h3 className="text-sm font-semibold text-[#FFF] truncate mb-1">
          {item.title}
        </h3>
        <p className="text-xs text-[#E5E7EB] line-clamp-2 mb-1">
          {item.address}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center ml-2 flex-shrink-0">
        <span className="mr-1">
          <RatingIcon />
        </span>
        <span className="text-sm font-medium text-[#FFF]">
          {item.rating > 0 ? item.rating.toFixed(1) : "4.2"}
        </span>
      </div>
    </div>
  );
};

export default CategoryBottomSheet;
