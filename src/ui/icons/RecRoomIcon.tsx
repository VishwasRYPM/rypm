import React from 'react';

interface RecRoomIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const RecRoomIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: RecRoomIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <path d="M12.3309 6.34229H10.751V10.0917H12.3309" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.2143 8.2168H10.751" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.1642 6.64783C16.8623 6.44384 16.4982 6.32471 16.1064 6.32471C15.0615 6.32471 14.2144 7.17177 14.2144 8.21671C14.2144 9.26165 15.0614 10.1087 16.1064 10.1087C16.5308 10.1087 16.8798 9.96897 17.1447 9.73302C17.1996 9.68419 17.2508 9.63127 17.2983 9.57458" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.15771 8.30273L8.74722 10.1087" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.70117 6.32471V10.1087" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.74676 7.3081C8.74676 7.85124 8.27055 8.29153 7.70769 8.29153C7.42856 8.29153 6.70915 8.29588 6.70915 8.29588C6.70915 8.29588 6.70467 7.58189 6.70467 7.30814C6.70467 7.08327 6.70215 6.32471 6.70215 6.32471C6.70215 6.32471 7.37787 6.32471 7.70769 6.32471C8.27055 6.32467 8.74676 6.76497 8.74676 7.3081Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 4V5.99169" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 4H5.9917" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.0005 4V5.99169" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.0005 4H18.0088" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 12.4319V10.4402" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 12.4316H5.9917" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.0005 12.4319V10.4402" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.0005 12.4316H18.0088" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.7843 12.4314H8.21582V19.9998H15.7843V12.4314Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.0001 18.0081C12.99 18.0081 13.7926 17.2056 13.7926 16.2156C13.7926 15.2256 12.99 14.4231 12.0001 14.4231C11.0101 14.4231 10.2075 15.2256 10.2075 16.2156C10.2075 17.2056 11.0101 18.0081 12.0001 18.0081Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)
};
export default RecRoomIcon;