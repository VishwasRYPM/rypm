import React from 'react';

interface BasementDetailsIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const BasementDetailsIcon = ({ 
    width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: BasementDetailsIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<path d="M19.9998 9.1686L11.9983 4L4.00195 9.15429" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.7593 8.37744V19.9999" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.21143 8.37744V19.9999" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 20H4" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.7592 11.0049H5.21143" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.7592 15.2217H5.21143" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0037 11.0049V15.2216" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.89811 15.2217V13.2793H7.3335V16.9594H8.63242V18.2272H9.89811V20.0001" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.4546 20L16.7578 20L16.7578 17.974L13.4546 17.974L13.4546 20Z" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.60908 11.0049L14.3982 11.0049L14.3982 8.10364L9.60908 8.10364L9.60908 11.0049Z" stroke="black" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)};

export default BasementDetailsIcon;