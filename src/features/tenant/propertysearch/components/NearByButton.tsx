'use client';
import React from 'react';

interface NearByButtonProps {
  text: string;
  isActive: boolean;  // New prop to handle active state
  onClick: () => void;  // New prop for handling the button click
}

const NearByButton: React.FC<NearByButtonProps> = ({ text, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 text-[12px] font-bold text-[#001D3D] capitalize px-2.5 py-2 rounded-[8px]
        ${isActive ? 'bg-[#20364B] text-[#FFF]' : 'active:bg-[#20364B] active:text-[#FFF]'}
        transition-all duration-300 ease-in-out`} 
    >
      {text}
    </div>
  );
};

export default NearByButton;