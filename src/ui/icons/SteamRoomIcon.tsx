import React from 'react';

interface SteamRoomIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const SteamRoomIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: SteamRoomIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_11365" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
    <path d="M4 4H20V20H4V4Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_11365)">
    <path d="M4.46875 19.5312H14.5104L19.5312 14.5104C19.5312 14.5104 19.5313 14.5103 19.531 14.5102C19.1316 14.1107 18.5898 13.8864 18.025 13.8864C17.4602 13.8864 16.9184 14.1107 16.519 14.5102C15.379 15.6502 14.0083 17.0208 14.0083 17.0208H10.9958H12.8786C13.5025 17.0208 14.0083 16.5151 14.0083 15.8912C14.0083 15.5915 13.8893 15.3042 13.6775 15.0923C13.4656 14.8805 13.1781 14.7615 12.8786 14.7615H10.2422C9.64322 14.7615 9.06859 14.9994 8.64484 15.4231C8.22131 15.8467 7.98334 16.4212 7.98334 17.0203V17.0208H4.46875" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.9923 12.502V12.5019C9.85899 12.3687 9.78418 12.1881 9.78418 11.9999C9.78418 11.8115 9.85899 11.631 9.9923 11.4979V11.4977C10.1256 11.3645 10.2004 11.184 10.2004 10.9957C10.2004 10.8074 10.1256 10.6268 9.9923 10.4937V10.4936" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.502 12.502V12.5019C12.3687 12.3687 12.2939 12.1881 12.2939 11.9999C12.2939 11.8115 12.3687 11.631 12.502 11.4979V11.4977C12.6354 11.3645 12.7102 11.184 12.7102 10.9957C12.7102 10.8074 12.6354 10.6268 12.502 10.4937V10.4936" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.0128 12.5017V12.5016C14.8795 12.3685 14.8047 12.1879 14.8047 11.9996C14.8047 11.8113 14.8795 11.6307 15.0128 11.4976V11.4975C15.1461 11.3643 15.2209 11.1837 15.2209 10.9955C15.2209 10.8071 15.1461 10.6266 15.0128 10.4934V10.4934" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.0258 6.47701H8.98828V8.48535H16.0174V8.48482C16.0174 7.95232 16.2291 7.4416 16.6057 7.06507C16.982 6.68854 17.4928 6.47701 18.0253 6.47701H18.0258Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.98828 6.47656H19.532V4.46822H8.98828V6.47656Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default SteamRoomIcon;