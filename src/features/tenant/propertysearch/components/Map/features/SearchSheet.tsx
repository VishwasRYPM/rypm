'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { MiceIcon, LocationIcon, BackIcon } from '@/ui/icons';

interface SearchSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
  onNearbyClick: () => void;
  onLocalInfoClick: () => void;
  searchValue?: string;
}

const SearchSheet: React.FC<SearchSheetProps> = ({
  isOpen,
  onClose,
  onSearch,
  onNearbyClick,
  onLocalInfoClick,
  searchValue = ''
}) => {
  const [searchTerm, setSearchTerm] = useState(searchValue);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when sheet opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleNearbyClick = () => {
    onNearbyClick();
    onClose();
  };

  const handleLocalInfoClick = () => {
    onLocalInfoClick();
    onClose();
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

      {/* Search Overlay - No drag, responsive height */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed top-0 left-0 right-0 rounded-b-3xl shadow-2xl z-999 overflow-hidden flex flex-col bg-[rgba(23,61,59,0.5)] backdrop-blur-[5px]"
        style={{ 
          height: 'auto',
          minHeight: '37vh',
          maxHeight: '80vh'
        }}
      >
        {/* Content - No drag handle */}
        <div className="flex-1 px-2 py-2 space-y-6">
          {/* Top Section: Search Bar */}
          <div className="w-full flex justify-center">
            <div className="relative w-[95.5vw]">
              <div className="flex items-center bg-white rounded-[36px] px-3 py-3 shadow-sm">
                {/* Back Icon */}
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-6 h-6 mr-2"
                  style={{ touchAction: 'manipulation' }}
                >
                  <BackIcon className="w-8 h-8" opacity={0} color={"#001D3D"} />
                </button>

                {/* Search Input */}
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Search here"
                  className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm"
                  style={{ touchAction: 'manipulation' }}
                />

                {/* Mic Icon */}
                <button
                  className="flex items-center justify-center w-6 h-6 ml-3"
                  style={{ touchAction: 'manipulation' }}
                >
                  <MiceIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Middle Section: Suggested Destination */}
          <div className="text-center">
            <h2 className="text-sm  text-[#FFF]">
              Suggested Destination
            </h2>
          </div>

          {/* Option Cards */}
          <div className="space-y-3 px-2">
            {/* Nearby Option */}
            <div 
              className="flex items-start p-1 hover:shadow-md hover:border-[#20364D]/20 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              onClick={handleNearbyClick}
              style={{ touchAction: 'manipulation' }}
            >
              {/* Nearby Icon */}
              <div className="w-13 h-13 rounded-xl overflow-hidden flex-shrink-0 bg-[#001D3D]/50 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M29.8645 19.6536H21.8578C21.4173 18.3573 20.1891 17.4215 18.7457 17.4215C17.3022 17.4215 16.0741 18.3573 15.6335 19.6536H9.78209C8.49923 19.6536 7.45559 18.61 7.45559 17.3271C7.45559 16.0454 8.49839 15.0026 9.78012 15.0026H29.6148C30.2676 15.0026 30.8971 14.7281 31.3417 14.2497C33.4668 11.963 36 8.74216 36 6.38367C36 2.86369 33.1355 0 29.6148 0C26.094 0 23.2295 2.86369 23.2295 6.38367C23.2295 8.3051 24.9107 10.7986 26.6828 12.8933H9.78012C7.33528 12.8933 5.34621 14.8823 5.34621 17.3272C5.34621 19.7731 7.33613 21.763 9.78209 21.763H15.6335C16.0741 23.0593 17.3022 23.9951 18.7457 23.9951C20.1891 23.9951 21.4173 23.0593 21.8578 21.763H29.8645C32.0844 21.763 33.8906 23.5692 33.8906 25.7892C33.8906 28.0093 32.0844 29.8154 29.8645 29.8154H26.3689C25.9283 28.519 24.7001 27.5833 23.2567 27.5833C21.8133 27.5833 20.5851 28.519 20.1445 29.8154H10.1526C9.66481 27.491 7.59881 25.7401 5.13105 25.7401C2.30182 25.7401 0 28.0414 0 30.8701C0 33.6987 2.30182 36 5.13112 36C7.59888 36 9.6648 34.2491 10.1527 31.9248H20.1445C20.5851 33.2211 21.8133 34.1568 23.2567 34.1568C24.7001 34.1568 25.9283 33.2211 26.3689 31.9248H29.8645C33.2476 31.9248 36 29.1724 36 25.7892C36 22.4061 33.2476 19.6536 29.8645 19.6536ZM29.6148 2.10938C31.9724 2.10938 33.8906 4.02687 33.8906 6.38367C33.8906 7.63256 32.3219 10.0964 29.7965 12.8138C29.7355 12.8795 29.664 12.8933 29.6148 12.8933C29.5656 12.8933 29.4941 12.8795 29.433 12.8138C26.9077 10.0965 25.3389 7.63263 25.3389 6.38374C25.3389 4.02687 27.2571 2.10938 29.6148 2.10938ZM18.7457 21.8857C18.0965 21.8857 17.5683 21.3575 17.5683 20.7083C17.5683 20.0591 18.0965 19.5309 18.7457 19.5309C19.3949 19.5309 19.923 20.0591 19.923 20.7083C19.923 21.3575 19.3949 21.8857 18.7457 21.8857ZM5.13112 33.8906C3.46493 33.8906 2.10938 32.5356 2.10938 30.8701C2.10938 29.2045 3.46493 27.8495 5.13112 27.8495C6.79732 27.8495 8.15287 29.2045 8.15287 30.8701C8.15287 32.5356 6.79732 33.8906 5.13112 33.8906ZM23.2567 32.0475C22.6075 32.0475 22.0793 31.5193 22.0793 30.8701C22.0793 30.2209 22.6075 29.6927 23.2567 29.6927C23.9059 29.6927 24.4341 30.2209 24.4341 30.8701C24.4341 31.5193 23.906 32.0475 23.2567 32.0475Z" fill="white"/>
  <path d="M30.6695 6.44678C30.6439 5.87535 30.206 5.39209 29.6148 5.39209C29.0631 5.39209 28.5346 5.87718 28.5601 6.44678C28.5857 7.01821 29.0235 7.50146 29.6148 7.50146C30.1665 7.50146 30.695 7.01638 30.6695 6.44678Z" fill="white"/>
</svg>            </div>

              {/* Text Content */}
              <div className="flex-1 ml-3 min-w-0">
                <h3 className="text-sm font-semibold text-[#FFF] truncate mb-1">
                  Nearby
                </h3>
                <p className="text-xs text-[#E5E7EB] line-clamp-2 mb-1">
                  Find what's nearby you
                </p>
              </div>
            </div>

            {/* Local Information Option */}
            <div 
              className="flex items-start p-1 hover:shadow-md hover:border-[#20364D]/20 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              onClick={handleLocalInfoClick}
              style={{ touchAction: 'manipulation' }}
            >
              {/* Local Information Icon */}
              <div className="w-13 h-13 rounded-xl overflow-hidden flex-shrink-0 bg-[#001D3D]/50 flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
  <path d="M14.0594 9.4375C15.6295 9.4375 16.907 8.16006 16.907 6.58981C16.907 5.01956 15.6295 3.74219 14.0594 3.74219C12.4892 3.74219 11.2117 5.01963 11.2117 6.58988C11.2117 8.16013 12.4892 9.4375 14.0594 9.4375ZM14.0594 5.61719C14.5957 5.61719 15.032 6.0535 15.032 6.58988C15.032 7.12625 14.5957 7.5625 14.0594 7.5625C13.523 7.5625 13.0867 7.12619 13.0867 6.58981C13.0867 6.05344 13.523 5.61719 14.0594 5.61719Z" fill="white"/>
  <path d="M26.2438 13.9037V8.5C26.2438 7.98225 25.824 7.5625 25.3063 7.5625H20.5892C21.1623 3.50656 18.0259 0 14.0594 0C10.0972 0 6.95531 3.50187 7.52962 7.5625H2.80625C2.2885 7.5625 1.86875 7.98225 1.86875 8.5V13.9043C0.0684376 17.5219 0 17.5753 0 17.875V21.625C0 22.1427 0.41975 22.5625 0.9375 22.5625H1.86875V31.0625C1.86875 31.5802 2.2885 32 2.80625 32H25.3063C25.824 32 26.2438 31.5802 26.2438 31.0625V22.5625H27.1813C27.699 22.5625 28.1188 22.1427 28.1188 21.625V17.875C28.1188 17.5617 28.0423 17.5168 26.2438 13.9037ZM3.3865 15.0625C3.84263 15.0628 11.7841 15.0735 24.7268 15.0625L25.6643 16.9375C16.5994 16.9375 11.517 16.9375 2.45212 16.9375L3.3865 15.0625ZM24.3688 9.4375V13.1875H17.12C18.2073 12.2686 19.3683 11.0084 20.0525 9.4375H24.3688ZM14.0594 1.875C18.6655 1.875 21.8368 8.47562 14.0584 13.0612C6.29712 8.50469 9.43594 1.875 14.0594 1.875ZM3.74375 9.4375H8.06675C8.75131 11.0081 9.91263 12.2684 11 13.1875H3.74375V9.4375ZM20.625 22.5625V30.125H17.8125V22.5625H20.625ZM15.9375 26.3125H3.74375V22.5625H15.9375V26.3125ZM3.74375 28.1875H15.9375V30.125H3.74375V28.1875ZM24.3688 30.125H22.5V22.5625H24.3688V30.125ZM1.875 20.6875V18.8125H26.2438V20.6875C25.4332 20.6875 3.03487 20.6875 1.875 20.6875Z" fill="white"/>
</svg>
              </div>

              {/* Text Content */}
              <div className="flex-1 ml-3 min-w-0">
                <h3 className="text-sm font-semibold text-[#FFF] truncate mb-1">
                  Local Information
                </h3>
                <p className="text-xs text-[#E5E7EB] line-clamp-2 mb-1">
                  Looking for grocery stores or schools?
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SearchSheet;
