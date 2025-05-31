import React from 'react';

interface BedroomsIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const BedroomsIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: BedroomsIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<mask id="mask0_2414_8817" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
<path d="M4 4H20V20H4V4Z" fill="white"/>
</mask>
<g mask="url(#mask0_2414_8817)">
<path d="M19.5311 17.2391V19.5312H17.6326V17.8139" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.36701 17.814V19.5312H4.46851V17.2391" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.16406 11.6074V6.78445C5.16406 5.50545 6.20091 4.46864 7.47991 4.46864H16.52C17.799 4.46864 18.8358 5.50545 18.8358 6.78445V11.6074" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9998 11.1577V9.67146C11.9998 9.00171 12.5427 8.45878 13.2125 8.45878H15.6252C16.295 8.45878 16.8379 9.00171 16.8379 9.67146V11.1577" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.16162 11.1577V9.67146C7.16162 9.00171 7.70459 8.45878 8.37434 8.45878H10.7871C11.4569 8.45878 11.9998 9.00171 11.9998 9.67146" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5338 15.3569H4.46606V13.0977C4.46606 12.0262 5.33472 11.1575 6.40625 11.1575H17.5936C18.6651 11.1575 19.5338 12.0262 19.5338 13.0977V15.3569Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.46606 15.357L4.46866 17.364C5.72385 17.364 5.72385 17.864 6.979 17.864C8.23419 17.864 8.23419 17.364 9.48938 17.364C10.7445 17.364 10.7445 17.864 11.9997 17.864C13.2549 17.864 13.2549 17.364 14.5101 17.364C15.7654 17.364 15.7654 17.864 17.0206 17.864C18.2759 17.864 18.2759 17.364 19.5312 17.364V15.357" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
)};

export default BedroomsIcon;