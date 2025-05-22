import React from "react";

interface MapButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const MapButton: React.FC<MapButtonProps> = ({
  isActive,
  onClick
}) => {
  return (
    <button
      className={`flex px-[10px] py-[5px] items-center gap-1 rounded-[16px] ${
        isActive 
          ? "bg-[#20364D]" 
          : "bg-[rgba(32,54,77,0.30)]"
      }`}
      onClick={onClick}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M3 6l6-3l6 3l6-3v15l-6 3l-6-3l-6 3V6z"></path>
        <path d="M9 3v15"></path>
        <path d="M15 6v15"></path>
      </svg>
      <span className="text-white text-[10px] font-bold">Map</span>
    </button>
  );
};

export default MapButton;