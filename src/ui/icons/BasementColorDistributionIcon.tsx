import React from 'react';

interface BasementCorolDistributionIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const BasementCorolDistributionIcon = ({ width = 15, height = 15, className = '' }: BasementCorolDistributionIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill="#5285B7"/>
    </svg>
  );
};

export default BasementCorolDistributionIcon;