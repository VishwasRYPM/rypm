import React from 'react';

interface SecurityOnsiteIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const SecurityOnsiteIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: SecurityOnsiteIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10440"style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99927H20V19.9993H4V3.99927Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10440)">
    <path d="M9.15674 19.5303H6.03174" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.09424 12.6553H10.0942C10.4394 12.6553 10.7192 12.9351 10.7192 13.2803V17.0303C10.7192 17.3755 10.4394 17.6553 10.0942 17.6553H5.09424C4.74905 17.6553 4.46924 17.3755 4.46924 17.0303V13.2803C4.46924 12.9351 4.74905 12.6553 5.09424 12.6553Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.65674 19.5303V17.6553" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.53174 17.6553V19.5303" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.3442 19.5303V17.6553" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.4692 17.6553V19.5303" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8442 19.5303H17.9692" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.9067 12.6553H13.9067C13.5616 12.6553 13.2817 12.9351 13.2817 13.2803V17.0303C13.2817 17.3755 13.5616 17.6553 13.9067 17.6553H18.9067C19.2519 17.6553 19.5317 17.3755 19.5317 17.0303V13.2803C19.5317 12.9351 19.2519 12.6553 18.9067 12.6553Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.75049 10.4053V8.53027H7.62549" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.2505 10.4053V8.53027H16.3755" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.2817 16.0928H19.5317" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46924 16.0928H10.7192" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.18799 5.09277C11.063 4.25943 12.938 4.25943 14.813 5.09277V7.01502C14.813 8.88659 13.7108 10.5826 12.0005 11.3428C10.2902 10.5826 9.18799 8.88659 9.18799 7.01502V5.09277Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.0059 7.90521L11.6688 8.56812L12.9946 7.2423" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default SecurityOnsiteIcon;