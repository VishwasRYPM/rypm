import React from 'react';

interface ParkingCentralHVACIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const ParkingCentralHVACIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: ParkingCentralHVACIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10876" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99927H20V19.9993H4V3.99927Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10876)">
    <path d="M5.40674 7.65576H12.2817C12.7995 7.65576 13.2192 8.07551 13.2192 8.59326V17.6558H4.46924V8.59326C4.46924 8.07551 4.88899 7.65576 5.40674 7.65576Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46875 9.53052H13.2187V13.9055H4.46875V9.53052Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.87549 15.7808C5.87549 16.0396 6.08536 16.2495 6.34424 16.2495C6.60311 16.2495 6.81299 16.0396 6.81299 15.7808C6.81299 15.5219 6.60311 15.312 6.34424 15.312C6.08536 15.312 5.87549 15.5219 5.87549 15.7808Z" fill="#001D3D"/>
    <path d="M11.8102 15.7343C11.7845 15.4767 11.5548 15.2888 11.2972 15.3145C11.0396 15.3403 10.8516 15.57 10.8774 15.8276C10.9031 16.0852 11.1328 16.2731 11.3904 16.2474C11.648 16.2216 11.836 15.9919 11.8102 15.7343Z" fill="#001D3D"/>
    <path d="M9.46924 15.7808H8.21924" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.4067 12.6558C17.0971 12.6558 17.6567 13.2154 17.6567 13.9058V17.6558H15.1567V13.9058C15.1567 13.2154 15.7164 12.6558 16.4067 12.6558Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.1567 17.6558H19.5317V19.5308H14.5317V18.2808C14.5317 17.9356 14.8116 17.6558 15.1567 17.6558Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.4692 11.7183C15.4692 12.236 15.889 12.6558 16.4067 12.6558C16.9245 12.6558 17.3442 12.236 17.3442 11.7183C17.3442 11.2005 16.9245 10.7808 16.4067 10.7808C15.889 10.7808 15.4692 11.2005 15.4692 11.7183Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.4692 4.46826H19.5317V6.34326H15.4692C14.9515 6.34326 14.5317 5.92351 14.5317 5.40576C14.5317 4.88801 14.9515 4.46826 15.4692 4.46826Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5317 17.6558V6.34326" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.71924 19.5308H6.96924C7.1418 19.5308 7.28174 19.3908 7.28174 19.2183V17.6558H5.40674V19.2183C5.40674 19.3908 5.54668 19.5308 5.71924 19.5308Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.7192 19.5308H11.9692C12.1418 19.5308 12.2817 19.3908 12.2817 19.2183V17.6558H10.4067V19.2183C10.4067 19.3908 10.5467 19.5308 10.7192 19.5308Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default ParkingCentralHVACIcon;