import React from 'react';

interface ParkingBathroomIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const ParkingBathroomIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: ParkingBathroomIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10767" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10767)">
    <path d="M4.46875 19.5312V8.28125H19.5312V19.5312" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5312 10.1562H4.46875" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.625 17.6562H6.375V15.1562C6.375 14.4659 6.93463 13.9062 7.625 13.9062H16.375C17.0654 13.9062 17.625 14.4659 17.625 15.1562V17.6562Z" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.25 19.5312H7.625C7.27981 19.5312 7 19.2514 7 18.9062V17.6562H8.875V18.9062C8.875 19.2514 8.59519 19.5312 8.25 19.5312Z" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.375 19.5312H15.75C15.4048 19.5312 15.125 19.2514 15.125 18.9062V17.6562H17V18.9062C17 19.2514 16.7202 19.5312 16.375 19.5312Z" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.09375 12.0312L7.625 13.9062H16.375L15.9062 12.0312H8.09375Z" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.0625 15.7812H12.9375" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.9063 15.7812C15.9063 16.0401 15.6964 16.25 15.4375 16.25C15.1786 16.25 14.9688 16.0401 14.9688 15.7812C14.9688 15.5224 15.1786 15.3125 15.4375 15.3125C15.6964 15.3125 15.9063 15.5224 15.9063 15.7812Z" fill="#001D3D"/>
    <path d="M8.09375 15.7812C8.09375 16.0401 8.30363 16.25 8.5625 16.25C8.82138 16.25 9.03125 16.0401 9.03125 15.7812C9.03125 15.5224 8.82138 15.3125 8.5625 15.3125C8.30363 15.3125 8.09375 15.5224 8.09375 15.7812Z" fill="#001D3D"/>
    <path d="M19.5312 12.0312H4.46875" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.1167 6.70947C11.6049 6.22132 12.3963 6.22132 12.8844 6.70947" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.78955 5.38428C11.01 4.16387 12.9886 4.16387 14.209 5.38428" stroke="#001D3D" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default ParkingBathroomIcon;