import React from 'react';

interface numberFloorsIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const numberFloorsIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: numberFloorsIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10212" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10212)">
    <path d="M18.562 19.5303H5.43701V6.40527H18.562V19.5303Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.312 4.46777H6.68701V6.40527H17.312V4.46777Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.1875 10.155H7.3125V9.21753C7.3125 8.69978 7.73225 8.28003 8.25 8.28003C8.76775 8.28003 9.1875 8.69978 9.1875 9.21753V10.155Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.6875 10.155H14.8125V9.21753C14.8125 8.69978 15.2322 8.28003 15.75 8.28003C16.2678 8.28003 16.6875 8.69978 16.6875 9.21753V10.155Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9375 10.155H11.0625V9.21753C11.0625 8.69978 11.4822 8.28003 12 8.28003C12.5178 8.28003 12.9375 8.69978 12.9375 9.21753V10.155Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.1875 13.905H7.3125V12.9675C7.3125 12.4498 7.73225 12.03 8.25 12.03C8.76775 12.03 9.1875 12.4498 9.1875 12.9675V13.905Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.6875 13.905H14.8125V12.9675C14.8125 12.4498 15.2322 12.03 15.75 12.03C16.2678 12.03 16.6875 12.4498 16.6875 12.9675V13.905Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9375 13.905H11.0625V12.9675C11.0625 12.4498 11.4822 12.03 12 12.03C12.5178 12.03 12.9375 12.4498 12.9375 12.9675V13.905Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.1875 17.655H7.3125V16.7175C7.3125 16.1998 7.73225 15.78 8.25 15.78C8.76775 15.78 9.1875 16.1998 9.1875 16.7175V17.655Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.6875 17.655H14.8125V16.7175C14.8125 16.1998 15.2322 15.78 15.75 15.78C16.2678 15.78 16.6875 16.1998 16.6875 16.7175V17.655Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9375 19.53H11.0625V16.7175C11.0625 16.1998 11.4822 15.78 12 15.78C12.5178 15.78 12.9375 16.1998 12.9375 16.7175V19.53Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46875 19.53H19.5312" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)};

export default numberFloorsIcon;