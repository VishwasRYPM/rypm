import React from 'react';

interface RangeStoveIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const RangeStoveIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: RangeStoveIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<path d="M9.68092 15.253C9.68092 15.253 10.1564 14.6246 9.68092 13.9656C9.20544 13.3067 9.78658 12.7302 9.78658 12.7302" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9715 15.253C11.9715 15.253 12.4469 14.6246 11.9715 13.9656C11.496 13.3067 12.0771 12.7302 12.0771 12.7302" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.2952 15.253C14.2952 15.253 14.7707 14.6246 14.2952 13.9656C13.8197 13.3067 14.4008 12.7302 14.4008 12.7302" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 5.9917H4V9.9751H20V5.9917Z" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 9.9751V20H20V9.9751" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7145 9.9751H6.28589V18.0083H17.7145V9.9751Z" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.98779 5.9751V4" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9751 5.9751V4H9.97705" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.99585 5.9751V4H5.99392" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0164 5.9751V4" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0039 5.9751V4H18.0059" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0242 5.9751V4H14.0222" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="6.32361" cy="7.98352" r="0.497925" fill="black"/></svg>
)};

export default RangeStoveIcon;