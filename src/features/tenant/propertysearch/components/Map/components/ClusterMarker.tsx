import React from 'react';
import { Business } from '@mui/icons-material';

interface ClusterMarkerProps {
  count: number;
  onClick: () => void;
  isSelected?: boolean;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = ({
  count,
  onClick,
  isSelected = false
}) => {
  return (
    <div
      className={`
        cursor-pointer transform transition-all duration-200 hover:scale-110
        ${isSelected ? 'z-50' : 'z-10'}
      `}
      onClick={onClick}
    >
      <div
        className={`
          relative px-4 py-1 text-sm font-bold shadow-md flex items-center gap-1
          ${isSelected 
            ? 'bg-[#20364D] text-white after:border-t-[#20364D]' 
            : 'bg-white text-[#20364D] after:border-t-white'
          }
          rounded-full
          after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2
          after:border-[6px] after:border-x-transparent after:border-b-0 after:border-solid
        `}
      >
        <Business 
          sx={{ 
            fontSize: 16, 
            color: isSelected ? '#FFFFFF' : '#20364D' 
          }} 
        />
        
        <span>{count} units</span>
      </div>
    </div>
  );
};

export default ClusterMarker;
