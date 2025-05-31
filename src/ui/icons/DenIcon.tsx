import React from 'react';

interface DenIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const DenIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: DenIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<mask id="mask0_2414_8902" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
<path d="M4 4H20V20H4V4Z" fill="white"/>
</mask>
<g mask="url(#mask0_2414_8902)">
<path d="M17.5312 6H6.46875C5.36419 6 4.46875 6.89544 4.46875 8V17C4.46875 17.5523 4.91647 18 5.46875 18H18.5312C19.0835 18 19.5312 17.5523 19.5312 17V8C19.5312 6.89544 18.6358 6 17.5312 6Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5312 12.25H17.1499C16.7547 12.25 16.3966 12.4827 16.2361 12.8438L15.7639 13.9062C15.6034 14.2673 15.2453 14.5 14.8501 14.5H9.14987C8.75469 14.5 8.39656 14.2673 8.23606 13.9062L7.76394 12.8438C7.60344 12.4827 7.24531 12.25 6.85013 12.25H4.46875" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12.25V12C6 11.1716 6.67156 10.5 7.5 10.5H16.5C17.3284 10.5 18 11.1716 18 12V12.25" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.46875 16.25H19.5312" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
)};

export default DenIcon;