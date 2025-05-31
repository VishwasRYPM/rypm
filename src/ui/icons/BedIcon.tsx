import React from 'react';

interface BedIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const BedIcon = ({ 
  width = 20, 
  height = 20, 
  className = '',
  color = '#EDF2FA' 
}: BedIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none"
      className={className}
    >
      <circle cx="10" cy="10" r="9.49324" stroke="white" strokeWidth="1.01351"/>
      <path d="M14.5959 11.7607V11.8593H14.5217V11.7607H14.5959ZM6.09399 8.16693H13.9055C14.2667 8.16693 14.5958 8.48594 14.5959 8.92084V10.5488H5.40454V8.92084C5.40465 8.48611 5.73298 8.16718 6.09399 8.16693Z" fill="#EDF2FA" stroke="white" strokeWidth="0.675676"/>
      <path d="M6.73511 5.03241H13.2644C13.5107 5.03241 13.7189 5.09659 13.8542 5.18182C13.9935 5.26963 14.0152 5.34788 14.0154 5.37909V6.82343H12.8933C12.8853 6.79301 12.8779 6.76229 12.866 6.7326L12.6492 6.18475C12.5475 5.92966 12.332 5.74689 12.0984 5.63202C11.8607 5.51521 11.5749 5.45233 11.2791 5.45233H8.72046C8.42453 5.45238 8.1387 5.51521 7.90112 5.63202C7.69668 5.73258 7.50666 5.88542 7.39429 6.09296L7.35132 6.18475H7.35034L7.13354 6.7326C7.12174 6.76218 7.1152 6.79312 7.10718 6.82343H5.98511V5.38007C5.98511 5.34886 6.00641 5.26996 6.14624 5.18182C6.28153 5.09662 6.48899 5.03247 6.73511 5.03241Z" fill="#EDF2FA" stroke="white" strokeWidth="0.675676"/>

    </svg>
  );
};

export default BedIcon;
