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
          ? "bg-[#001D3D]" 
          : "bg-[rgba(32,54,77,0.30)]"
      }`}
      onClick={onClick}
    >
     <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
  <path d="M1.24841 12.5439C2.48279 10.5744 6.22365 4.97825 10.5998 1.83099C13.8909 -0.535285 16.9996 2.58863 14.5891 5.7341C12.232 8.81134 9.06978 13.0466 7.72062 15.1489C6.32114 17.3285 8.71598 19.9641 11.1124 17.456C12.7147 15.7791 14.3831 13.8509 16.0782 12.4254C18.3677 10.5026 20.3317 12.201 19.3332 14.368C18.6098 15.9353 18.0862 16.6265 17.4824 17.9443C16.8801 19.2639 17.5186 20.8438 18.4322 20.9803C19.5643 21.149 20.2814 20.2208 21.2484 18.7756" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      <span className="text-white text-[10px] font-bold">Draw</span>
    </button>
  );
};

export default DrawButton;