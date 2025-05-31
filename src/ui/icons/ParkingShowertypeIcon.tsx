import React from 'react';

interface ParkingShowertypeIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const ParkingShowertypeIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: ParkingShowertypeIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10800" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10800)">
    <path d="M16.375 14.5315H7.625C7.10725 14.5315 6.6875 14.9512 6.6875 15.469V17.6565H17.3125V15.469C17.3125 14.9512 16.8928 14.5315 16.375 14.5315Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 17.6565H7.625V18.9065C7.625 19.2517 7.90481 19.5315 8.25 19.5315H8.875C9.22019 19.5315 9.5 19.2517 9.5 18.9065V17.6565Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.375 17.6565H14.5V18.9065C14.5 19.2517 14.7798 19.5315 15.125 19.5315H15.75C16.0952 19.5315 16.375 19.2517 16.375 18.9065V17.6565Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5075 11.4065H9.49253C8.94053 11.4065 8.45387 11.7686 8.29525 12.2973L7.625 14.5315H16.375L15.7048 12.2973C15.5461 11.7686 15.0595 11.4065 14.5075 11.4065Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.4375 16.093H13.5625" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.9063 16.093C15.9063 16.3519 15.6964 16.5618 15.4375 16.5618C15.1786 16.5618 14.9688 16.3519 14.9688 16.093C14.9688 15.8341 15.1786 15.6243 15.4375 15.6243C15.6964 15.6243 15.9063 15.8341 15.9063 16.093Z" fill="#001D3D"/>
    <path d="M9.03125 16.093C9.03125 16.3519 8.82138 16.5618 8.5625 16.5618C8.30363 16.5618 8.09375 16.3519 8.09375 16.093C8.09375 15.8341 8.30363 15.6243 8.5625 15.6243C8.82138 15.6243 9.03125 15.8341 9.03125 16.093Z" fill="#001D3D"/>
    <path d="M13.25 9.84302H10.75L10.4375 11.4055H13.5625L13.25 9.84302Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5938 5.71899C18.5938 6.40937 18.0341 6.96899 17.3438 6.96899C16.6534 6.96899 16.0938 6.40937 16.0938 5.71899C16.0938 5.02862 16.6534 4.46899 17.3438 4.46899C18.0341 4.46899 18.5938 5.02862 18.5938 5.71899Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.3438 6.96899C16.1356 6.96899 15.1562 7.94837 15.1562 9.15649V9.46899H19.5312V9.15649C19.5312 7.94837 18.5519 6.96899 17.3438 6.96899Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.3438 9.46899L16.7188 10.719" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.40625 5.71899C5.40625 6.40937 5.96591 6.96899 6.65625 6.96899C7.34659 6.96899 7.90625 6.40937 7.90625 5.71899C7.90625 5.02862 7.34659 4.46899 6.65625 4.46899C5.96591 4.46899 5.40625 5.02862 5.40625 5.71899Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.65625 6.96899C7.86437 6.96899 8.84375 7.94837 8.84375 9.15649V9.46899H4.46875V9.15649C4.46875 7.94837 5.44813 6.96899 6.65625 6.96899Z" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.65625 9.46899L7.28125 10.719" stroke="#001D3D" strokeWidth="0.963542" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default ParkingShowertypeIcon;