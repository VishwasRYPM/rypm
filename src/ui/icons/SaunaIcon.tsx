import React from 'react';

interface SaunaIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const SaunaIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: SaunaIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_11385" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M20 3.99951H4V19.9995H20V3.99951Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_11385)">
    <mask id="mask1_2491_11385" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="17" height="17">
      <path d="M4.00146 4.00049H20.0015V20.0005H4.00146V4.00049Z" fill="white"/>
    </mask>
    <g mask="url(#mask1_2491_11385)">
      <path d="M10.4118 8.74731H10.3804C9.16698 8.74731 8.40857 7.71541 9.01529 6.88988L10.191 5.2901C10.9955 4.1956 13.0065 4.1956 13.811 5.2901L14.9867 6.88988C15.5934 7.71541 14.835 8.74731 13.6216 8.74731H13.5903" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.1914 7.56307C12.8174 7.56307 12.4836 7.39085 12.265 7.12138C12.1292 6.95395 11.8718 6.95395 11.736 7.12138C11.5174 7.39085 11.1836 7.56307 10.8095 7.56307H10.376V8.40892C10.376 9.3061 11.1033 10.0334 12.0005 10.0334C12.8977 10.0334 13.625 9.3061 13.625 8.40892V7.56307H13.1914Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.104 12.2754C9.13122 11.5996 9.61982 11.0427 10.2633 10.911C10.617 10.8386 10.9297 10.6265 11.1021 10.3093C11.1848 10.1571 11.2369 10.0023 11.2693 9.86089" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.7314 9.86071C12.7638 10.0021 12.8158 10.1569 12.8986 10.3091C13.071 10.6263 13.3836 10.8384 13.7374 10.9108C14.3809 11.0425 14.8694 11.5994 14.8967 12.2751" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.29834 10.4019C5.29834 9.66026 5.54834 9.66026 5.54834 8.91867C5.54834 8.17714 5.29834 8.17714 5.29834 7.43554C5.29834 6.69389 5.54834 6.69389 5.54834 5.9522" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.17334 10.4019C7.17334 9.66026 7.42334 9.66026 7.42334 8.91867C7.42334 8.17714 7.17334 8.17714 7.17334 7.43554C7.17334 6.69389 7.42334 6.69389 7.42334 5.9522" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5791 10.4019C16.5791 9.66026 16.8291 9.66026 16.8291 8.91867C16.8291 8.17714 16.5791 8.17714 16.5791 7.43554C16.5791 6.69389 16.8291 6.69389 16.8291 5.9522" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.4541 10.4019C18.4541 9.66026 18.7041 9.66026 18.7041 8.91867C18.7041 8.17714 18.4541 8.17714 18.4541 7.43554C18.4541 6.69389 18.7041 6.69389 18.7041 5.9522" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.18799 17.657V14.1494" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.063 14.1494V17.657" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.31299 17.657V14.1494" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.43799 17.657V14.1494" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.563 14.1494V17.657" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.688 14.1494V17.657" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.813 14.1494V17.657" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.938 14.1494V17.657" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.5103 19.5317H4.49121V17.6571H19.5103V19.5317Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.5103 14.1497H4.49121V12.275H19.5103V14.1497Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </g>
</svg>
)
};
export default SaunaIcon;