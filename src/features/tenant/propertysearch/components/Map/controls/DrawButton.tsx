import React from "react";

interface DrawButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const DrawButton: React.FC<DrawButtonProps> = ({
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
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <path d="M11 11l5 5"></path>
      </svg>
      <span className="text-white text-[10px] font-bold">Draw</span>
    </button>
  );
};

export default DrawButton;