import React from 'react';

interface CategoryIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const CategoryIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: CategoryIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<mask id="mask0_2490_10082" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
<path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
</mask>
<g mask="url(#mask0_2490_10082)">
<path d="M10.9958 5.47197C10.9958 5.20569 10.8902 4.95022 10.7016 4.7619C10.5133 4.57359 10.258 4.46781 9.99169 4.46781C6.9415 4.46781 4.46875 6.94053 4.46875 9.99072C4.46875 10.5453 4.91838 10.9949 5.47294 10.9949H9.99169C10.258 10.9949 10.5133 10.8891 10.7016 10.7007C10.8902 10.5125 10.9958 10.2571 10.9958 9.99072V5.47197Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9958 18.5259C10.9958 18.7922 10.8902 19.0476 10.7016 19.2359C10.5133 19.4242 10.258 19.53 9.99169 19.53C6.9415 19.53 4.46875 17.0573 4.46875 14.0071C4.46875 13.4525 4.91838 13.003 5.47294 13.003H9.99169C10.258 13.003 10.5133 13.1087 10.7016 13.2971C10.8902 13.4854 10.9958 13.7408 10.9958 14.0071V18.5259Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0034 5.47197C13.0034 5.20569 13.1091 4.95022 13.2976 4.7619C13.4859 4.57359 13.7412 4.46781 14.0076 4.46781C17.0578 4.46781 19.5305 6.94053 19.5305 9.99072C19.5305 10.5453 19.0809 10.9949 18.5263 10.9949H14.0076C13.7412 10.9949 13.4859 10.8891 13.2976 10.7007C13.1091 10.5125 13.0034 10.2571 13.0034 9.99072V5.47197Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0034 18.5259C13.0034 18.7922 13.1091 19.0476 13.2976 19.2359C13.4859 19.4242 13.7412 19.53 14.0076 19.53C17.0578 19.53 19.5305 17.0573 19.5305 14.0071C19.5305 13.4525 19.0809 13.003 18.5263 13.003H14.0076C13.7412 13.003 13.4859 13.1087 13.2976 13.2971C13.1091 13.4854 13.0034 13.7408 13.0034 14.0071V18.5259Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
)};

export default CategoryIcon;