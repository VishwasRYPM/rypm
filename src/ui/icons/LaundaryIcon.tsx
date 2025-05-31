import React from 'react';

interface LaundaryIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const LaundaryIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: LaundaryIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10504" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10504)">
    <path d="M8.25 19.5305H19.25V4.46802H8.25V12.7493" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.2856 12.7493C10.5278 11.053 11.9866 9.74927 13.7497 9.74927C15.6828 9.74927 17.2497 11.3161 17.2497 13.2493C17.2497 15.1824 15.6828 16.7493 13.7497 16.7493C13.006 16.7493 12.3166 16.5174 11.7497 16.1218" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.25 7.24927H8.25" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.25 17.7493H17.25V19.5305" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.25 4.49927V5.49927" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.25 4.49927V5.49927" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 5.49927V4.49927" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.3569 15.5842C15.4172 15.2252 14.75 14.3149 14.75 13.2489C14.75 12.183 15.4172 11.2727 16.3569 10.9136" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.71 11.5135C11.5271 11.4298 12.3737 11.701 13 12.3273C13.4893 12.8163 14.1131 13.0888 14.7521 13.1448" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.3594 7.24927H8.25V4.46802H10.3594C11.1274 4.46802 11.75 5.09061 11.75 5.85864C11.75 6.62452 11.1295 7.24927 10.3594 7.24927Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 12.7493H6L4.75 13.9576V16.1243L6 15.4993V19.5305H10.5V15.4993L11.75 16.1243V13.9576L10.5 12.7493Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default LaundaryIcon;