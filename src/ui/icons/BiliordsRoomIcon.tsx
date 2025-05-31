import React from 'react';

interface BiliordsRoomIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const BiliordsRoomIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: BiliordsRoomIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_11319" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_11319)">
    <path d="M16.6875 19.5303H5.4375V4.46777H16.6875V19.5303Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0005 11.9995C12.0005 12.5173 11.5807 12.937 11.063 12.937C10.5452 12.937 10.1255 12.5173 10.1255 11.9995C10.1255 11.4817 10.5452 11.062 11.063 11.062C11.5807 11.062 12.0005 11.4817 12.0005 11.9995Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0005 16.718C12.0005 17.2358 11.5807 17.6555 11.063 17.6555C10.5452 17.6555 10.1255 17.2358 10.1255 16.718C10.1255 16.2003 10.5452 15.7805 11.063 15.7805C11.5807 15.7805 12.0005 16.2003 12.0005 16.718Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.063 10.1243C11.063 10.642 10.6432 11.0618 10.1255 11.0618C9.60774 11.0618 9.18799 10.642 9.18799 10.1243C9.18799 9.60649 9.60774 9.18677 10.1255 9.18677C10.6432 9.18677 11.063 9.60649 11.063 10.1243Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.938 10.1243C12.938 10.642 12.5182 11.0618 12.0005 11.0618C11.4827 11.0618 11.063 10.642 11.063 10.1243C11.063 9.60649 11.4827 9.18677 12.0005 9.18677C12.5182 9.18677 12.938 9.60649 12.938 10.1243Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.1255 8.24951C10.1255 8.76729 9.70574 9.18701 9.18799 9.18701C8.67024 9.18701 8.25049 8.76729 8.25049 8.24951C8.25049 7.73173 8.67024 7.31201 9.18799 7.31201C9.70574 7.31201 10.1255 7.73173 10.1255 8.24951Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0005 8.24951C12.0005 8.76729 11.5807 9.18701 11.063 9.18701C10.5452 9.18701 10.1255 8.76729 10.1255 8.24951C10.1255 7.73173 10.5452 7.31201 11.063 7.31201C11.5807 7.31201 12.0005 7.73173 12.0005 8.24951Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.8755 8.24951C13.8755 8.76729 13.4557 9.18701 12.938 9.18701C12.4202 9.18701 12.0005 8.76729 12.0005 8.24951C12.0005 7.73173 12.4202 7.31201 12.938 7.31201C13.4557 7.31201 13.8755 7.73173 13.8755 8.24951Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.813 4.46802C14.813 5.50355 15.6525 6.34302 16.688 6.34302" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.43799 6.34302C6.47352 6.34302 7.31299 5.50355 7.31299 4.46802" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.688 17.6555C15.6525 17.6555 14.813 18.495 14.813 19.5305" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.31299 19.5305C7.31299 18.495 6.47352 17.6555 5.43799 17.6555" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.563 4.46802V19.5305" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.43799 11.062H6.37549C6.89324 11.062 7.31299 11.4817 7.31299 11.9995C7.31299 12.5173 6.89324 12.937 6.37549 12.937H5.43799" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.688 12.937H15.7505C15.2327 12.937 14.813 12.5173 14.813 11.9995C14.813 11.4817 15.2327 11.062 15.7505 11.062H16.688" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
    export default BiliordsRoomIcon;