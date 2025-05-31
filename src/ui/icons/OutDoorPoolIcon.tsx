import React from 'react';

interface OutDoorPoolIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const OutDoorPoolIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: OutDoorPoolIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <path d="M8.21826 12.9697V17.6572" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <mask id="mask0_2491_10679" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10679)">
    <path d="M18.5938 6.96851C18.5938 7.83144 17.8942 8.53101 17.0312 8.53101C16.1683 8.53101 15.4688 7.83144 15.4688 6.96851C15.4688 6.10557 16.1683 5.40601 17.0312 5.40601C17.8942 5.40601 18.5938 6.10557 18.5938 6.96851Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.0312 5.40601V4.46851" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.0312 9.46851V8.53101" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.9266 5.86401L15.2637 5.20111" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.7991 8.7373L18.1362 8.0744" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.4688 6.96851H14.5312" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5313 6.96851H18.5938" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.9266 8.07415L15.2637 8.73706" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.7991 5.20135L18.1362 5.86426" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46875 12.9685C4.46875 10.8974 6.14769 9.21851 8.21875 9.21851C10.2898 9.21851 11.9688 10.8974 11.9688 12.9685H4.46875Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.96875 12.9685C6.96875 10.8974 7.52838 9.21851 8.21875 9.21851C8.90912 9.21851 9.46875 10.8974 9.46875 12.9685H6.96875Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46875 19.5312H19.5312V17.6562H4.46875V19.5312Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.25 17.656L13.875 15.781H18.25L18.875 17.656" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.875 15.781L12.625 14.531" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default OutDoorPoolIcon;