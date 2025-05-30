import React from 'react';

interface RemoveBoundaryButtonProps {
  onRemove: () => void;
  propertiesCount: number;
}

const RemoveBoundaryButton: React.FC<RemoveBoundaryButtonProps> = ({ 
  onRemove, 
  propertiesCount 
}) => {
  return (
    <div className="absolute bottom-28 left-0 right-0 z-20 flex justify-center">
  <button
    onClick={onRemove}
    className="inline-flex px-[10px] py-[5px] items-center gap-2 rounded-[16px] bg-[rgba(32,54,77,0.30)] transition-colors"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 11L10.95 1M11 11L1.05 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-white text-[10px] font-bold">
      Remove Boundary
    </span>
  </button>
</div>

  );
};

export default RemoveBoundaryButton;
