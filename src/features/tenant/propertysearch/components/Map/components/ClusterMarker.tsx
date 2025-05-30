import React from 'react';
import ClusterMarkerShape from './ClusterMarkerShape';

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
      <ClusterMarkerShape 
        count={count}
        isSelected={isSelected}
        className="select-none"
      />
    </div>
  );
};

export default ClusterMarker;
