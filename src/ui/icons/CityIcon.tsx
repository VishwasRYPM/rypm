import React from 'react';

interface CityIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const CityIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: CityIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2484_9761" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="17">
    <path d="M4 4.09538H20V20.1055H4V4.09538Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2484_9761)">
    <path d="M8.23438 15.865H4.46875V19.6365H8.23438V15.865Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5312 13.0399L17.6484 11.1564L15.7656 13.0399V19.6365H19.5312V13.0399Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.7656 16.8067L13.8828 15.865L12 16.8067V19.6365H15.7656V16.8067Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M15.7656 13.9844L13.8828 13.0433L12 13.9844" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <mask id="mask1_2484_9761" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="17">
    <path d="M4 4.09538H20V20.1055H4V4.09538Z" fill="white"/>
  </mask>
  <g mask="url(#mask1_2484_9761)">
    <path d="M8.23438 7.40332L10.1172 6.44788L12 7.40332V19.6365H8.23438V7.40332Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.1172 6.44849V4.56505" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M8.23438 9.27344H9.17578" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.23438 11.1565H9.17578" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.23438 13.0396H9.17578" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.23438 14.9236H9.17578" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.23438 16.8066H9.17578" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.0586 9.27344H12" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.0586 11.1565H12" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.0586 13.0396H12" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.0586 14.9236H12" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.0586 16.8066H12" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <mask id="mask2_2484_9761" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="17">
    <path d="M4 4.09538H20V20.1055H4V4.09538Z" fill="white"/>
  </mask>
  <g mask="url(#mask2_2484_9761)">
    <path d="M4.46875 17.7507H8.23438" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinejoin="round"/>
    <path d="M13.8828 19.5906V18.6911" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.6484 19.5906V18.6911" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.7656 13.0396H19.5312" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinejoin="round"/>
  </g>
  <path d="M17.6484 11.1565V9.27306" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <mask id="mask3_2484_9761" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask3_2484_9761)">
    <path d="M17.6488 17.1716C17.894 17.1716 18.1289 16.956 18.1176 16.7029C18.1062 16.4489 17.9116 16.2341 17.6488 16.2341C17.4036 16.2341 17.1687 16.4497 17.1801 16.7029C17.1915 16.9568 17.3861 17.1716 17.6488 17.1716Z" fill="#001D3D"/>
    <path d="M17.6488 15.2898C17.894 15.2898 18.1289 15.0742 18.1176 14.821C18.1062 14.5671 17.9116 14.3523 17.6488 14.3523C17.4036 14.3523 17.1687 14.5679 17.1801 14.821C17.1915 15.075 17.3861 15.2898 17.6488 15.2898Z" fill="#001D3D"/>
  </g>
</svg>
)};

export default CityIcon;