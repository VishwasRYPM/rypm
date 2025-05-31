import React from 'react';

interface ProvinceIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const ProvinceIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: ProvinceIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<mask id="mask0_2484_9903" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
<path d="M4 4H20V20H4V4Z" fill="white"/>
</mask>
<g mask="url(#mask0_2484_9903)">
<path d="M7.31253 7.28125H11.0625L10.125 5.875L11.0625 4.46875H7.3125L7.31253 11.0312" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.46875 9.15625H11.0625L12.9375 11.0312H16.7188L18.5938 10.0937H19.5312V11.9687L18.5938 12.9375V13.875L17.6562 14.8125V15.75L18.5938 16.6875V17.625L17.6562 18.5625L15.7812 16.6875H12.9375L12 17.625L12.9375 18.5937L12 19.5312H11.0625L8.25 16.6875H6.34375L4.46875 14.8125V9.15625Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.46875 13.875H18.5938" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path d="M12.9375 11.1631V14.0068" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.25 14.0068V16.8193" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8125 14.0068V16.8193" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)};

export default ProvinceIcon;