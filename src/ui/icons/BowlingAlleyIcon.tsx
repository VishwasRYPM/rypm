import React from 'react';

interface BowlingAlleyIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const BowlingAlleyIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: BowlingAlleyIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <path d="M12.9795 18.5007C12.1434 19.4205 10.9231 20.0001 9.56405 20.0001C7.04341 20.0001 5 18.0062 5 15.5464C5 13.0867 7.04338 11.0928 9.56405 11.0928C10.6017 11.0928 11.5585 11.4307 12.3251 11.9999" stroke="#001D3D" strokeWidth="0.967508" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="9.55616" cy="14.9843" rx="0.510266" ry="0.497926" fill="#001D3D"/>
  <ellipse cx="9.55616" cy="13.4091" rx="0.510266" ry="0.497926" fill="#001D3D"/>
  <ellipse cx="7.94093" cy="14.1971" rx="0.510266" ry="0.497926" fill="#001D3D"/>
  <path d="M17.6008 11.0925H13.5015" stroke="#001D3D" strokeWidth="0.967508" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.1602 8.3252H16.9417" stroke="#001D3D" strokeWidth="0.967508" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.0318 10.0792C16.4834 9.17679 17.4415 8.97579 17.4415 6.81015C17.4415 5.0635 16.7945 4 15.5509 4C14.3072 4 13.6603 5.06347 13.6603 6.81012C13.6603 8.97579 14.6186 9.17669 14.0702 10.079C13.3504 11.2633 12.1016 12.5243 12.1016 14.4554C12.1016 16.4838 12.9892 19.2781 14.2486 19.9999H16.8532C18.1126 19.2782 19.0001 16.4838 19.0001 14.4554C19.0002 12.5244 17.7515 11.2634 17.0318 10.0792Z" stroke="#001D3D" strokeWidth="0.967508" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)
};
export default BowlingAlleyIcon;