import React from 'react';

interface DishWasherIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const DishWasherIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: DishWasherIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
</svg>
)};

export default DishWasherIcon;