import React from 'react';

interface AvailableDateIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  style?: React.CSSProperties; // Changed from string to React.CSSProperties
}

const AvailableDateIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D',
  style = {} // Default to empty object
}: AvailableDateIconProps) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2414_8689" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2414_8689)">
    <path d="M18.5284 18.875H5.47159C4.91772 18.875 4.46875 18.426 4.46875 17.8722V7.3845C4.46875 6.83066 4.91772 6.38169 5.47159 6.38169H18.5284C19.0823 6.38169 19.5312 6.83066 19.5312 7.3845V17.8722C19.5312 18.426 19.0823 18.875 18.5284 18.875Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10"/>
    <path d="M4.46875 9.18335H19.5312" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10"/>
    <path d="M12.0059 7.4939V5.13671" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round"/>
    <path d="M6.59912 7.48218V5.12499" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round"/>
    <path d="M9.30249 7.48218V5.12499" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round"/>
    <path d="M17.5198 7.48218V5.12499" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round"/>
    <path d="M14.7627 7.4939V5.13671" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round"/>
    <path d="M12.8649 13.1562H11.1468C11.0425 13.1562 10.958 13.0717 10.958 12.9674V11.2493C10.958 11.1451 11.0425 11.0605 11.1468 11.0605H12.8649C12.9692 11.0605 13.0537 11.1451 13.0537 11.2493V12.9674C13.0537 13.0717 12.9692 13.1562 12.8649 13.1562Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10"/>
    <path d="M12.8649 17.125H11.1468C11.0425 17.125 10.958 17.0405 10.958 16.9362V15.2181C10.958 15.1138 11.0425 15.0293 11.1468 15.0293H12.8649C12.9692 15.0293 13.0537 15.1138 13.0537 15.2181V16.9362C13.0537 17.0405 12.9692 17.125 12.8649 17.125Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10"/>
    <path d="M8.50603 13.1562H6.78793C6.68365 13.1562 6.59912 13.0717 6.59912 12.9674V11.2493C6.59912 11.1451 6.68365 11.0605 6.78793 11.0605H8.50603C8.61031 11.0605 8.69484 11.1451 8.69484 11.2493V12.9674C8.69484 13.0717 8.61031 13.1562 8.50603 13.1562Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10"/>
    <path d="M8.50603 17.125H6.78793C6.68365 17.125 6.59912 17.0405 6.59912 16.9362V15.2181C6.59912 15.1138 6.68365 15.0293 6.78793 15.0293H8.50603C8.61031 15.0293 8.69484 15.1138 8.69484 15.2181V16.9362C8.69484 17.0405 8.61031 17.125 8.50603 17.125Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10"/>
    <path d="M17.3307 13.1562H15.6126C15.5084 13.1562 15.4238 13.0717 15.4238 12.9674V11.2493C15.4238 11.1451 15.5084 11.0605 15.6126 11.0605H17.3307C17.435 11.0605 17.5196 11.1451 17.5196 11.2493V12.9674C17.5196 13.0717 17.435 13.1562 17.3307 13.1562Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10"/>
    <path d="M15.5596 16.135L15.9703 16.5457C16.0793 16.6547 16.256 16.6547 16.365 16.5457L17.3839 15.5269" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round"/>
  </g>
</svg>
  );
};

export default AvailableDateIcon;
