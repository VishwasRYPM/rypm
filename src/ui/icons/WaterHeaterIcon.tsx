import React from 'react';

interface WaterHeaterIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const WaterHeaterIcon = ({ 
  width = 24, 
  height = 24, 
  //className = '',
  //color = '#001D3D' 
}: WaterHeaterIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<mask id="mask0_2414_9115" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
<path d="M4 4H20V20H4V4Z" fill="white"/>
</mask>
<g mask="url(#mask0_2414_9115)">
<path d="M17.3125 13.8438H6.6875V5.71875C6.6875 5.02837 7.24716 4.46875 7.9375 4.46875H16.0625C16.7529 4.46875 17.3125 5.02837 17.3125 5.71875V13.8438Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0625 17.5938H7.9375C7.24716 17.5938 6.6875 17.0341 6.6875 16.3437V13.8437H17.3125V16.3437C17.3125 17.0341 16.7529 17.5938 16.0625 17.5938Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5938 19.5312H13.7188V17.5938H15.5938V19.5312Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.2813 19.5312H8.40625V17.5938H10.2813V19.5312Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.1875 8.53125C14.1875 9.73937 13.2081 10.7188 12 10.7188C10.7919 10.7188 9.8125 9.73937 9.8125 8.53125C9.8125 7.32313 10.7919 6.34375 12 6.34375C13.2081 6.34375 14.1875 7.32313 14.1875 8.53125Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6.34375V7.90625" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.03125 15.7187C9.03125 15.9776 8.82138 16.1875 8.5625 16.1875C8.30363 16.1875 8.09375 15.9776 8.09375 15.7187C8.09375 15.4599 8.30363 15.25 8.5625 15.25C8.82138 15.25 9.03125 15.4599 9.03125 15.7187Z" fill="#001D3D"/>
<path d="M10.9063 15.7187C10.9063 15.9776 10.6964 16.1875 10.4375 16.1875C10.1786 16.1875 9.96875 15.9776 9.96875 15.7187C9.96875 15.4599 10.1786 15.25 10.4375 15.25C10.6964 15.25 10.9063 15.4599 10.9063 15.7187Z" fill="#001D3D"/>
</g></svg>
)};

export default WaterHeaterIcon;