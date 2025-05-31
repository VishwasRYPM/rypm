import React from 'react';

interface CounterTopIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const CounterTopIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: CounterTopIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
<path d="M10.3005 11.2919C9.01757 11.2919 7.97754 10.2519 7.97754 8.96895V7.95166H15.9909V8.96895C15.9909 10.2519 14.9509 11.2919 13.6679 11.2919" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.9766 7.95138V6.97461" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.9917 7.95138V6.97461" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.9759 4.99932C13.9759 4.44741 13.5285 4 12.9766 4C12.4247 4 11.9773 4.44741 11.9773 4.99932V7.95149" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 13.2842H19.9023" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0019 11.2917H4V17.6816H20.0019V11.2917Z" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17.6816V19.01" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.002 17.6816V18.9887" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0483 15.2607H13.9536" stroke="#001D3D" strokeWidth="0.996233" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)};

export default CounterTopIcon;