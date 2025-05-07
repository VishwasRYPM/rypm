import React from 'react';

interface ApartmentIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const ApartmentIcon = ({ width = 12, height = 10, className = '' }: ApartmentIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 12 10" 
      fill="none"
      className={className}
    >
      <path 
        d="M10.9091 8.88889H12V10H0V8.88889H1.09091V0.555556C1.09091 0.408213 1.14838 0.266905 1.25067 0.162718C1.35296 0.0585315 1.4917 0 1.63636 0H7.09091C7.23557 0 7.37431 0.0585315 7.4766 0.162718C7.5789 0.266905 7.63636 0.408213 7.63636 0.555556V8.88889H9.81818V4.44444H8.72727V3.33333H10.3636C10.5083 3.33333 10.647 3.39187 10.7493 3.49605C10.8516 3.60024 10.9091 3.74155 10.9091 3.88889V8.88889ZM2.18182 1.11111V8.88889H6.54545V1.11111H2.18182ZM3.27273 4.44444H5.45455V5.55556H3.27273V4.44444ZM3.27273 2.22222H5.45455V3.33333H3.27273V2.22222Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default ApartmentIcon;
