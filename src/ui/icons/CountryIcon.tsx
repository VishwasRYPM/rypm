import React from 'react';

interface CountryIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const CountryIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: CountryIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<path d="M12 19.9998C15.3137 19.9998 18 17.3326 18 14.0424C18 10.7522 15.3137 8.08496 12 8.08496C8.68629 8.08496 6 10.7522 6 14.0424C6 17.3326 8.68629 19.9998 12 19.9998Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9995 8.08518V4" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.3427 6.16312H11.9995V4H15.3427L14.3398 5.08156L15.3427 6.16312Z" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.7749 9.81299L8.54953 10.7136C8.98081 11.2151 9.70696 11.3483 10.2904 11.0322L10.8343 10.7375C11.4882 10.3833 12.307 10.5977 12.7002 11.2261C12.9653 11.65 13.4236 11.8854 13.8944 11.8854C14.1247 11.8854 14.3577 11.8293 14.5727 11.7111L16.811 10.4829" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.56445 18.9274C8.87838 18.456 9.35112 18.2807 9.35112 18.2807L10.333 17.8515C10.879 17.6132 11.2313 17.0767 11.2313 16.4845V16.2588C11.2313 15.3981 11.9341 14.7003 12.8013 14.7003H13.2172C13.6338 14.7003 14.033 14.536 14.3275 14.2435L14.8925 13.6825C15.3619 13.2165 16.076 13.094 16.6758 13.3768L17.9884 13.9959" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.23926 12.3701H6.23959C7.07039 12.5474 8.09408 12.7704 8.09408 12.7704L8.58086 14.395C8.66645 14.6815 8.68383 14.9836 8.63101 15.278L8.57484 15.5904C8.46652 16.1935 8.07469 16.7087 7.52038 16.9769L6.94602 17.2551" stroke="#001D3D" strokeWidth="0.995851" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)};

export default CountryIcon;