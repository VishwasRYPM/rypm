import React from 'react';

interface RefigeratorIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const RefigeratorIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: RefigeratorIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<mask id="mask0_2414_9404" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
<path d="M4 4H20V20H4V4Z" fill="white"/>
</mask>
<g mask="url(#mask0_2414_9404)">
<path d="M17.0625 19.5312H6.9375C6.41975 19.5312 6 19.1115 6 18.5938V5.40625C6 4.8885 6.41975 4.46875 6.9375 4.46875H17.0625C17.5803 4.46875 18 4.8885 18 5.40625V18.5938C18 19.1115 17.5803 19.5312 17.0625 19.5312Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 14H18" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.25 16H12.75" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.25 12H12.75" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10H14V6.5H16V10Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19.5312V4.46875" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6.5H10" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
)};

export default RefigeratorIcon;