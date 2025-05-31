import React from 'react';

interface OnsiteStaffIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const OnsiteStaffIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: OnsiteStaffIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10388" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99927H20V19.9993H4V3.99927Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10388)">
    <path d="M11.9985 7.72656C12.8959 7.72656 13.6279 6.99462 13.6279 6.09722C13.6279 5.19978 12.8959 4.46784 11.9985 4.46784C11.1011 4.46784 10.3691 5.19978 10.3691 6.09722C10.3691 6.99462 11.1011 7.72656 11.9985 7.72656Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.8002 15.3115L13.3423 19.5303H10.6548L10.1934 15.2803" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9989 8.21802C13.5458 8.21802 14.8114 9.48367 14.8114 11.0304V15.1243H9.18652V11.0304C9.18652 9.48361 10.4521 8.21802 11.9989 8.21802Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.999 8.28052L12.8428 10.4372L11.999 11.5305L11.1553 10.4372L11.999 8.28052Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.6699 9.65527C17.5832 9.65527 18.3281 8.9104 18.3281 7.99712C18.3281 7.08384 17.5832 6.33896 16.6699 6.33896C15.7566 6.33896 15.0117 7.08384 15.0117 7.99712C15.0117 8.9104 15.7566 9.65527 16.6699 9.65527Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8535 15.4053L15.3013 19.5303H18.0363L18.4943 15.3115" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.4692 15.0993C14.6451 15.2324 14.8646 15.3115 15.1022 15.3115H18.2369C18.8123 15.3115 19.2817 14.8471 19.2817 14.2776V10.8656C19.2817 10.2961 18.8123 9.83165 18.2369 9.83165H15.1022C15.0891 9.83165 15.076 9.83187 15.063 9.83237" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.33153 9.65527C8.24481 9.65527 8.98968 8.9104 8.98968 7.99712C8.98968 7.08384 8.24481 6.33896 7.33153 6.33896C6.41821 6.33896 5.67334 7.08384 5.67334 7.99712C5.67334 8.9104 6.41821 9.65527 7.33153 9.65527Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.15727 15.3115L8.69927 19.5303H5.96427L5.50293 15.2803" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.53174 15.0993C9.35589 15.2324 9.13636 15.3115 8.89874 15.3115H5.76411C5.18861 15.3115 4.71924 14.8471 4.71924 14.2776V10.8656C4.71924 10.2961 5.18861 9.83165 5.76411 9.83165H8.89874" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)};export default OnsiteStaffIcon;