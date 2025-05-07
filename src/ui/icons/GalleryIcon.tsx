import React from 'react';

interface GalleryIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const GalleryIcon = ({ width = 14, height = 14, className = '' }: GalleryIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 14 14" 
      fill="none"
      className={className}
    >
      <path 
        d="M2.91667 12.2501H11.0833C11.7277 12.2501 12.25 11.7277 12.25 11.0834V2.91673C12.25 2.2724 11.7277 1.75006 11.0833 1.75006H2.91667C2.27233 1.75006 1.75 2.2724 1.75 2.91673V11.0834C1.75 11.7277 2.27233 12.2501 2.91667 12.2501ZM2.91667 12.2501L9.33333 5.83339L12.25 8.75006M5.83333 4.95839C5.83333 5.44164 5.44158 5.83339 4.95833 5.83339C4.47508 5.83339 4.08333 5.44164 4.08333 4.95839C4.08333 4.47515 4.47508 4.08339 4.95833 4.08339C5.44158 4.08339 5.83333 4.47515 5.83333 4.95839Z" 
        stroke="currentColor" 
        strokeWidth="1.27273" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GalleryIcon;
