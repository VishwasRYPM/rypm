import React from 'react';

interface ParkingAcIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const ParkingAcIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: ParkingAcIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10908" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10908)">
    <path d="M17.7992 12.5C17.6279 12.1746 17.4565 11.8491 17.2853 11.5234C17.0439 11.0642 16.8021 10.6041 16.5601 10.1439C16.2421 9.53934 15.6665 9.1875 14.9953 9.1875H11.9978H9.0037C8.33295 9.1875 7.75764 9.53891 7.43948 10.1429C7.19714 10.603 6.95495 11.0631 6.71292 11.5234C6.55286 11.8279 6.39267 12.1326 6.23242 12.4375" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.43462 17.625V18.6469C8.43462 19.1333 8.03669 19.5312 7.55025 19.5312H5.77891C5.29247 19.5312 4.89453 19.1333 4.89453 18.6469V15.9687" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.1041 15.9065V18.6471C19.1041 19.1335 18.7061 19.5315 18.2197 19.5315H16.4483C15.9619 19.5315 15.564 19.1335 15.564 18.6471V17.6877" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0014 11.9C9.54074 11.9 7.32477 12.2353 6.0098 12.7594C5.32343 13.033 4.89658 13.6636 4.89602 14.4024L4.89502 15.8455C4.8943 16.8201 5.68911 17.6155 6.66374 17.6155H17.3352C18.3089 17.6155 19.1032 16.8218 19.1039 15.848L19.105 14.3692C19.1055 13.6025 18.6413 12.9503 17.9172 12.6985C16.1021 12.0674 12.7842 11.9 12.0014 11.9Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.96631 17.4973V14.9624C9.96631 14.4753 10.3636 14.078 10.8507 14.078H13.1501C13.6372 14.078 14.0344 14.4753 14.0344 14.9624V17.4089" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.22178 15.75H8.19784C8.18994 14.8527 7.51925 13.9813 6.42912 13.9813H4.92578" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.7793 15.7502H15.8032C15.8111 14.8529 16.4818 13.9815 17.5719 13.9815H19.0753" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46875 4.46875H19.5312" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.34375 7.09375V7.3125" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0938 7.09375V7.3125" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.8438 7.09375V7.3125" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5938 7.09375V7.3125" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46875 6.34375V6.5625" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.21875 6.34375V6.5625" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9688 6.34375V6.5625" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.7188 6.34375V6.5625" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5312 6.34375V6.5625" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.15625 8.96875V9.1875" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.4062 8.96875V9.1875" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default ParkingAcIcon;
