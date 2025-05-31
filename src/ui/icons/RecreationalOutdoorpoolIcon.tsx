import React from 'react';

interface RecreationalOutdoorpoolIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const RecreationalOutdoorpoolIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: RecreationalOutdoorpoolIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_11438" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99951H20V19.9995H4V3.99951Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_11438)">
    <path d="M4.46924 18.7484C5.50477 19.7839 7.21496 19.7839 8.25049 18.7484C9.28602 19.7839 10.965 19.7839 12.0005 18.7484C13.036 19.7839 14.715 19.7839 15.7505 18.7484C16.786 19.7839 18.4962 19.7839 19.5317 18.7484" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46924 16.8735C5.50477 17.909 7.21496 17.909 8.25049 16.8735C9.28602 17.909 10.965 17.909 12.0005 16.8735C13.036 17.909 14.715 17.909 15.7505 16.8735C16.786 17.909 18.4962 17.909 19.5317 16.8735V11.9985H4.46924V16.8735Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.8755 11.999V11.0615C13.8755 10.5438 13.4557 10.124 12.938 10.124C12.4202 10.124 12.0005 10.5438 12.0005 11.0615V16.6865" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.6255 11.999V11.0615C17.6255 10.5438 17.2057 10.124 16.688 10.124C16.1702 10.124 15.7505 10.5438 15.7505 11.0615V16.6865" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0005 13.874H15.7505" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0005 15.749H15.7505" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46924 8.21777V7.74902C4.46924 5.93684 5.9383 4.46777 7.75049 4.46777C9.56264 4.46777 11.0317 5.93684 11.0317 7.74902V8.21777" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46924 8.21777H11.0317" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.07671 8.21777C9.12852 7.92455 9.15674 7.60899 9.15674 7.28027C9.15674 5.72696 8.52711 4.46777 7.75049 4.46777C6.97383 4.46777 6.34424 5.72696 6.34424 7.28027C6.34424 7.60899 6.37243 7.92455 6.42424 8.21777" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.75049 8.21777V11.999" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default RecreationalOutdoorpoolIcon;