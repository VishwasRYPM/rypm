import React from 'react';

interface ACIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const ACIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: ACIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2414_9157" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2414_9157)">
    <path d="M19.5312 10.4062H4.46875V11.9688C4.46875 12.4865 4.8885 12.9062 5.40625 12.9062H18.5938C19.1115 12.9062 19.5312 12.4865 19.5312 11.9688V10.4062Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5938 4.78125H5.40625C4.8885 4.78125 4.46875 5.201 4.46875 5.71875V10.4062H19.5312V5.71875C19.5312 5.201 19.1115 4.78125 18.5938 4.78125Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.84375 6.65625H6.34375V8.53125H8.84375V6.65625Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.125 8.53125C18.125 8.79012 17.9151 9 17.6563 9C17.3974 9 17.1875 8.79012 17.1875 8.53125C17.1875 8.27237 17.3974 8.0625 17.6563 8.0625C17.9151 8.0625 18.125 8.27237 18.125 8.53125Z" fill="#001D3D"/>
    <path d="M16.25 8.53125C16.25 8.79012 16.0401 9 15.7813 9C15.5224 9 15.3125 8.79012 15.3125 8.53125C15.3125 8.27237 15.5224 8.0625 15.7813 8.0625C16.0401 8.0625 16.25 8.27237 16.25 8.53125Z" fill="#001D3D"/>
    <path d="M14.375 8.53125C14.375 8.79012 14.1651 9 13.9063 9C13.6474 9 13.4375 8.79012 13.4375 8.53125C13.4375 8.27237 13.6474 8.0625 13.9063 8.0625C14.1651 8.0625 14.375 8.27237 14.375 8.53125Z" fill="#001D3D"/>
    <path d="M12 17.3437V19.2188" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14.8438V15.4688" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 14.8438V15.0903C14.5 16.5597 14.9349 17.9962 15.75 19.2188" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 14.8438C17 16.4445 17.6359 17.9796 18.7678 19.1115L18.875 19.2188" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 14.8438V15.0903C9.5 16.5597 9.06506 17.9962 8.25 19.2188" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 14.8438C7 16.4445 6.36413 17.9796 5.23225 19.1115L5.125 19.2188" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)};

export default ACIcon;