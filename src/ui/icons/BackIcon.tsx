import { Opacity } from '@mui/icons-material';
import React from 'react';

interface BackIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  opacity?: number;
}

const BackIcon = ({ 
  width = 30, 
  height = 30, 
  className = '',
  color="white",
  opacity = 0.3
}: BackIconProps) => {
  return (
    <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width={width} 
  height={height} 
  viewBox="0 0 30 30" 
  fill="none" 
  className={className}
>
  <foreignObject x="-4" y="-4" width="38" height="38">
    <div 
      style={{ 
        backdropFilter: 'blur(2px)', 
        clipPath: 'url(#bgblur_0_2599_3433_clip_path)', 
        height: '100%', 
        width: '100%' 
      }} 
    />
  </foreignObject>
  <rect 
    data-figma-bg-blur-radius="4" 
    width="30" 
    height="30" 
    rx="15" 
    fill="#001D3D" 
    fillOpacity={opacity} 
  />
  <path 
    d="M17.1669 8.96913C16.7227 8.52494 16.0051 8.52494 15.5609 8.96913L10.3331 14.1969C9.88895 14.6411 9.88895 15.3587 10.3331 15.8028L15.5609 21.0306C16.0051 21.4748 16.7227 21.4748 17.1669 21.0306C17.611 20.5864 17.611 19.8689 17.1669 19.4247L12.7477 14.9942L17.1669 10.5751C17.611 10.1309 17.5997 9.40193 17.1669 8.96913Z" 
    fill={color} 
  />
  <defs>
    <clipPath id="bgblur_0_2599_3433_clip_path" transform="translate(4 4)">
      <rect width="30" height="30" rx="15" />
    </clipPath>
  </defs>
</svg>
      
  );
};

export default BackIcon;
