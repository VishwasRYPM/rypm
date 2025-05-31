import React from 'react';

interface ParkingUpgradedIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const ParkingUpgradedIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: ParkingUpgradedIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10837" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10837)">
    <path d="M16.982 13.75H7.03125L7.85372 10.4601C7.95803 10.0428 8.33303 9.75 8.76322 9.75H15.25C15.6802 9.75 16.0552 10.0428 16.1595 10.4601L16.982 13.75Z" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.75 9.75H10.25L10.75 8H13.25L13.75 9.75Z" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 17.75V19.5312H6.25V16.25" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.75 16.25V19.5312H16V17.75" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.75 16.25L16 17.75H8L6.25 16.25V14.6875C6.25 14.1697 6.66975 13.75 7.1875 13.75H16.8257C17.3435 13.75 17.75 14.2322 17.75 14.75V16.25Z" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.75 12H16.5444" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.46875 12H6.25" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 13.5C9 12.6716 9.67156 12 10.5 12C11.3284 12 12 12.6716 12 13.5V13.75H9V13.5Z" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.25 15.75H8.75" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.75 15.75H15.25" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.75 17.75L13.25 15.75H10.75L10.25 17.75H13.75Z" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5312 6.25H4.46875L5.5 4.46875H18.5L19.5312 6.25Z" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46875 19.5312H19.5312V6.25H4.46875V19.5312Z" stroke="#001D3D" strokeWidth="0.924855" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default ParkingUpgradedIcon;