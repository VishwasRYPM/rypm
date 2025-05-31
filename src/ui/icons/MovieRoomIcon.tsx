import React from 'react';

interface MovieRoomIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const MovieRoomIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: MovieRoomIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <path d="M15.9995 12.501H12.9995" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <mask id="mask0_2491_11288" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_11288)">
    <path d="M7 11.5V5.40625C7 4.8885 7.41975 4.46875 7.9375 4.46875H16.0625C16.5803 4.46875 17 4.8885 17 5.40625V11.5" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 12.5H8" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12.5C8 13.0523 7.55228 13.5 7 13.5C6.44772 13.5 6 13.0523 6 12.5C6 11.9477 6.44772 11.5 7 11.5C7.55228 11.5 8 11.9477 8 12.5Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.75 16.5V14.5C5.75 13.95 6.3125 13.5 7 13.5C7.34375 13.5 7.65625 13.6125 7.88281 13.7937C8.10938 13.975 8.25 14.225 8.25 14.5V16.5H5.75Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 12.5C13 13.0523 12.5523 13.5 12 13.5C11.4477 13.5 11 13.0523 11 12.5C11 11.9477 11.4477 11.5 12 11.5C12.5523 11.5 13 11.9477 13 12.5Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.75 16.5V14.5C10.75 13.95 11.3125 13.5 12 13.5C12.3438 13.5 12.6562 13.6125 12.8828 13.7937C13.1094 13.975 13.25 14.225 13.25 14.5V16.5H10.75Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 12.5C18 13.0523 17.5523 13.5 17 13.5C16.4477 13.5 16 13.0523 16 12.5C16 11.9477 16.4477 11.5 17 11.5C17.5523 11.5 18 11.9477 18 12.5Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.75 16.5V14.5C15.75 13.95 16.3125 13.5 17 13.5C17.3438 13.5 17.6562 13.6125 17.8828 13.7937C18.1094 13.975 18.25 14.225 18.25 14.5V16.5H15.75Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.4375 19.531H18.5625C19.0803 19.531 19.5 19.1113 19.5 18.5935V17.4373C19.5 16.9195 19.0803 16.4998 18.5625 16.4998H5.4375C4.91975 16.4998 4.5 16.9195 4.5 17.4373V18.5935C4.5 19.1113 4.91975 19.531 5.4375 19.531Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3689 7.93037L11.6175 6.71884C11.4161 6.57956 11.1411 6.72371 11.1411 6.96859V9.37674C11.1411 9.62084 11.4145 9.76515 11.6161 9.62746L13.3675 8.43078C13.5433 8.31062 13.544 8.05149 13.3689 7.93037Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default MovieRoomIcon;