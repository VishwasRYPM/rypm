import React from 'react';

interface TennisCourtIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const TennisCourtIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: TennisCourtIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10745" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10745)">
    <path d="M17.625 19.5312H6.375V4.46875H17.625V19.5312Z" stroke="#001D3D" strokeWidth="0.845443" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.875 12C13.875 13.0355 13.0355 13.875 12 13.875C10.9645 13.875 10.125 13.0355 10.125 12C10.125 10.9645 10.9645 10.125 12 10.125C13.0355 10.125 13.875 10.9645 13.875 12Z" stroke="#001D3D" strokeWidth="0.845443" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.375 12H17.625" stroke="#001D3D" strokeWidth="0.845443" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9375 4.46875V5.40625C12.9375 5.92403 12.5178 6.34375 12 6.34375C11.4823 6.34375 11.0625 5.92403 11.0625 5.40625V4.46875" stroke="#001D3D" strokeWidth="0.845443" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9375 19.5312V18.5937C12.9375 18.076 12.5178 17.6562 12 17.6562C11.4823 17.6562 11.0625 18.076 11.0625 18.5937V19.5312" stroke="#001D3D" strokeWidth="0.845443" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8125 4.46875V5.40625C14.8125 6.95956 13.5533 8.21875 12 8.21875C10.4467 8.21875 9.1875 6.95956 9.1875 5.40625V4.46875" stroke="#001D3D" strokeWidth="0.845443" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.1875 19.5312V18.5937C9.1875 17.0404 10.4467 15.7812 12 15.7812C13.5533 15.7812 14.8125 17.0404 14.8125 18.5937V19.5312" stroke="#001D3D" strokeWidth="0.845443" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default TennisCourtIcon;