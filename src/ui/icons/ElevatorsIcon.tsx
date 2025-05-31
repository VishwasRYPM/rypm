import React from 'react';

interface ElevatorsIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const ElevatorsIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: ElevatorsIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<path d="M20 4H4V20H20V4Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinejoin="round"/>
<path d="M9.71484 6.0083H14.2853" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9959 8H12V19.9997H17.9959V8Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinejoin="round"/>
<path d="M11.9978 8H6.00195V19.9997H11.9978V8Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinejoin="round"/>
<path d="M19.9956 14.0044H18.0039V15.9961H19.9956V14.0044Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinejoin="round"/>
<path d="M19.9956 12.0042H18.0039V13.9959H19.9956V12.0042Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinejoin="round"/>
<path d="M7.99609 14.0002L9.00041 12.9958L10.0047 14.0002" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0023 12.9958L14.998 14.0002L13.9937 12.9958" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
   
)};export default ElevatorsIcon;