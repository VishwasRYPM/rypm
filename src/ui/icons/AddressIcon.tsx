import React from 'react';

interface AddressIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const AddressIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: AddressIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<path d="M7 9.42383C7 16.6553 12.4998 20 12.4998 20C12.4998 20 17.9995 16.6553 17.9995 9.42383" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.7901 8.05859V11.6679H10.2104V8.05859" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5004 6.65552L9.21826 8.61262" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 6.65527L15.7821 8.61237" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 11.6676V9.63525" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.03076 20H17.9703" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9.4237C18 12.412 15.5304 14.8215 12.5002 14.8215C9.47008 14.8215 7.00049 12.412 7.00049 9.4237C7.00049 6.43544 9.47008 4 12.5002 4C15.5304 4 18 6.43541 18 9.4237Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)};

export default AddressIcon;