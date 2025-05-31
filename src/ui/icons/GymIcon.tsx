import React from 'react';

interface GymIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const GymIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: GymIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_11135" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_11135)">
    <path d="M4.4668 19.5312H19.521" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5211 10.3508H4.47607V7.55849H19.5211V10.3508Z" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.6835 19.5312H5.33887V10.3509H18.6835V19.5312Z" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.7983 10.3509V19.5312" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33936 17.5615H12.798" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33936 12.2627H12.798" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M7.73389 12.2639V17.5615" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.4038 12.2639V17.5615" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <mask id="mask1_2491_11135" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask1_2491_11135)">
    <path d="M15.1117 15.4097C15.1117 15.6678 14.9019 15.877 14.643 15.877C14.3842 15.877 14.1743 15.6678 14.1743 15.4097C14.1743 15.1516 14.3842 14.9425 14.643 14.9425C14.9019 14.9425 15.1117 15.1516 15.1117 15.4097Z" fill="#001D3D"/>
    <path d="M10.856 4.46831L12.0355 5.91431L13.1691 4.46831" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0356 5.91344V7.552" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.7759 7.56006V4.46662L16.0849 5.84128L17.3939 4.46662V7.56006" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.86983 4.68794C8.64583 4.55075 8.38395 4.47197 8.10417 4.47197C7.27752 4.47197 6.60742 5.15991 6.60742 6.00853C6.60742 6.85716 7.27752 7.55981 8.10417 7.55981C8.93083 7.55981 9.60095 6.87188 9.60095 6.02322H8.15973" stroke="#001D3D" strokeWidth="0.948148" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
    export default GymIcon;