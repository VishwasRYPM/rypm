import React from 'react';

interface VentilationHoodOneIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const VentilationHoodOneIcon = ({ 
  width = 24, 
  height = 24, 
 // className = '',
  //color = '#001D3D' 
}: VentilationHoodOneIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_11475" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_11475)">
    <path d="M5.40102 5.39857C6.86545 3.9341 9.53664 4.23088 11.3672 6.06148C13.1978 7.89207 13.4946 10.5632 12.0301 12.0277C10.5657 13.4922 7.89452 13.1954 6.06392 11.3648C4.23333 9.5342 3.93655 6.86304 5.40102 5.39857Z" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8838 14.8817C15.2484 14.5171 15.845 14.5171 16.2096 14.8817L19.256 17.9281C19.6206 18.2927 19.6206 18.8893 19.256 19.2539C18.8914 19.6185 18.2948 19.6185 17.9302 19.2539L14.8838 16.2075C14.5192 15.8429 14.5192 15.2463 14.8838 14.8817Z" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.3838 14.623C14.0335 13.2728 13.4284 11.1776 12.9307 9.19892" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.6113 15.3945C13.2972 14.0804 11.2314 13.4261 9.30176 12.9373" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.49121 5.48876L11.8706 11.8682" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.57812 7.23769L10.1842 12.8438" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.22949 4.5873L12.8356 10.1934" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.4951 5.55371L5.59668 10.4521" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.72124 4.6645L4.72168 8.66406" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.7003 6.98819L6.98047 11.708" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.7935 8.52486L8.51562 12.8027" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.8433 19.5312C8.15008 19.5312 9.21589 18.4654 9.21589 17.1587C9.21589 15.8519 8.15008 14.7861 6.8433 14.7861C5.53655 14.7861 4.4707 15.8519 4.4707 17.1587C4.4707 18.4654 5.53655 19.5312 6.8433 19.5312Z" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.75195 16.2217H6.47073C6.98636 16.2217 7.4082 16.6436 7.4082 17.1592C7.4082 17.6748 6.9863 18.0967 6.47073 18.0967H4.75195" stroke="#001D3D" strokeWidth="0.675818" stroke-miterlimit="22.926" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default VentilationHoodOneIcon;