import React from 'react';

interface CentralHVACIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const CentralHVACIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: CentralHVACIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <path d="M11.9873 20.0001V12.0127" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.9873 4V12.0126" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.78899 7.81402L5.83911 7.80371" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.77856 5.86328L7.78888 7.81413" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.1665 9.67122L9.66457 9.68972L9.64607 6.19165" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.33936 6.36475L11.9873 12.0126" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.6287 17.8335L9.6472 14.3354L6.14917 14.3539" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.04991 12.0127L4.66382 13.3842" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.66309 10.6406L6.04984 12.0128" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 12.0127H11.9874" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.78888 16.2109L7.77856 18.1608" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.83813 16.2212L7.78898 16.2109" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.33936 17.6606L11.9873 12.0127" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.3595 19.3369L11.9873 17.9502" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.6152 19.3369L11.9874 17.9502" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.9873 6.07506L13.3588 4.68896" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.9874 6.07506L10.616 4.68896" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.0787 16.3855C14.2934 16.7304 14.6757 16.96 15.1115 16.96C15.7839 16.96 16.329 16.4142 16.329 15.741C16.329 15.0677 15.7839 14.522 15.1115 14.522H12.0054" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.795 14.3742C18.0055 14.7123 18.3802 14.9373 18.8074 14.9373C19.4665 14.9373 20.0008 14.4024 20.0008 13.7425C20.0008 13.0826 19.4665 12.5476 18.8074 12.5476H11.9873" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.6116 7.89346C14.9211 7.39628 15.4721 7.06543 16.1003 7.06543C17.0696 7.06543 17.8553 7.85209 17.8553 8.82249C17.8553 9.79289 17.0696 10.5795 16.1003 10.5795H11.9873" stroke="#001D3D" strokeWidth="0.994635" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)};

export default CentralHVACIcon;