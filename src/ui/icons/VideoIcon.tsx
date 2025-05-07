import React from 'react';

interface VideoIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const VideoIcon = ({ width = 14, height = 14, className = '' }: VideoIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 14 14" 
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_1559_417)">
        <path 
          d="M13.4167 4.08339L9.33333 7.00006L13.4167 9.91672V4.08339Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M8.16666 2.91673H1.74999C1.10566 2.91673 0.583328 3.43906 0.583328 4.08339V9.91672C0.583328 10.5611 1.10566 11.0834 1.74999 11.0834H8.16666C8.81099 11.0834 9.33333 10.5611 9.33333 9.91672V4.08339C9.33333 3.43906 8.81099 2.91673 8.16666 2.91673Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1559_417">
          <rect width="14" height="14" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default VideoIcon;
