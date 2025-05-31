import React from 'react';

interface WheelChairIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const WheelChairIcon = ({ 
  width = 24, 
  height = 24, 
  //className = '',
  //color = '#001D3D' 
}: WheelChairIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<path d="M15.9996 17.0125V14.0249C15.9996 13.4749 15.5519 13.0291 14.9996 13.0291H11.6455" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.99997 20C11.2091 20 12.9999 18.2166 12.9999 16.0166C12.9999 13.8166 11.2091 12.0332 8.99997 12.0332C6.79085 12.0332 5 13.8166 5 16.0166C5 18.2166 6.79085 20 8.99997 20Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.9995 12.1587V4.99585C7.9995 4.44584 7.5518 4 6.9995 4H5.99951" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99951 10.0415H15.9994C16.5517 10.0415 16.9994 10.4873 16.9994 11.0374" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.99998 18.0083C10.1045 18.0083 11 17.1166 11 16.0166C11 14.9166 10.1045 14.0249 8.99998 14.0249C7.89542 14.0249 7 14.9166 7 16.0166C7 17.1166 7.89542 18.0083 8.99998 18.0083Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.9995 8.0498C8.44721 8.0498 7.99951 7.60396 7.99951 7.05395V4.99585C7.99951 4.44584 8.44721 4 8.9995 4C9.5518 4 9.9995 4.44584 9.9995 4.99585V7.05395C9.9995 7.60396 9.5518 8.0498 8.9995 8.0498Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.874 15.0208H16" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10.0415V13.0291" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20C16.8284 20 17.5 19.3312 17.5 18.5062C17.5 17.6812 16.8284 17.0125 16 17.0125C15.1716 17.0125 14.5 17.6812 14.5 18.5062C14.5 19.3312 15.1716 20 16 20Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18.5063H17.5" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)
};
export default WheelChairIcon;