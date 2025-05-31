import React from 'react';

interface DateOfConstructionIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const DateOfConstructionIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: DateOfConstructionIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2484_9972" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2484_9972)">
    <path d="M18.5005 8.99878H17.0005" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.0005 8.99878H5.50049" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M15.9995 10.0308V11.7808" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.2495 14.2808L15.9995 11.7808L17.7495 14.2808" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <mask id="mask1_2484_9972"style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
  </mask>
  <g mask="url(#mask1_2484_9972)">
    <path d="M18.5 16.7803H13.5V14.2803H18.5V16.7803Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0005 19.53H6.00049L6.75049 17.4988H11.2505L12.0005 19.53Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M10.4995 6.99951H7.49951" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.4995 8.99951V17.4995H7.49951V8.99951" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.49951 15.4995L10.4995 13.7495" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.49951 12.7495L10.4995 10.9995" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <mask id="mask2_2484_9972" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
  </mask>
  <g mask="url(#mask2_2484_9972)">
    <path d="M10.563 6.99878H6.56299V4.46753H9.03174L10.563 6.99878Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.0005 6.99878H19.5317V8.99878H17.0005" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.0005 8.99878H4.46924V6.99878H15.0005" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M16.999 10.031H14.999V5.99976H16.999V10.031Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)};

export default DateOfConstructionIcon;