import React from 'react';

interface PetSpaIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const PetSpaIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: PetSpaIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10588" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10588)">
    <path d="M10.3707 7.18141C10.1696 6.87669 9.87676 6.62888 9.50738 6.49444C8.59213 6.16132 7.58019 6.63322 7.24707 7.54844L6.79472 8.79129C6.48526 9.64157 6.87126 10.5745 7.66141 10.9698L8.34451 11.2185" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.6299 7.18141C13.831 6.87669 14.1239 6.62888 14.4932 6.49444C15.4085 6.16132 16.4204 6.63322 16.7535 7.54844L17.2059 8.79129C17.5154 9.64157 17.1294 10.5745 16.3392 10.9698L15.6561 11.2185" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.2505 12.2981C13.2505 12.8158 12.6908 13.5481 12.0005 13.5481C11.3101 13.5481 10.7505 12.8158 10.7505 12.2981C10.7505 11.7803 11.3101 11.6731 12.0005 11.6731C12.6908 11.6731 13.2505 11.7803 13.2505 12.2981Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0005 13.5481V14.7981" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.7817 10.0701L13.2505 9.75757L13.7192 10.0701" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.2192 10.0701L10.7505 9.75757L10.2817 10.0701" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9375 18.6211H11.0625V16.7461H12.9375V18.6211Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.938 18.6211L14.5335 19.4188C14.9491 19.6266 15.438 19.3244 15.438 18.8598V16.5073C15.438 16.0427 14.9491 15.7405 14.5335 15.9483L12.938 16.7461V18.6211Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.063 18.6211L9.46749 19.4188C9.05193 19.6266 8.56299 19.3244 8.56299 18.8598V16.5073C8.56299 16.0427 9.05193 15.7405 9.46749 15.9483L11.063 16.7461V18.6211Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46924 16.3738H6.34424" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.40674 17.3113V15.4363" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5317 18.5925H17.6567" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5942 17.655V19.53" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5317 5.40503H17.6567" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5942 4.46753V6.34253" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.0693 15.9373C15.7725 15.3434 16.2192 14.4555 16.2192 13.463C16.2192 13.1233 16.1657 12.7856 16.0607 12.4624L14.8641 8.78057C14.461 7.54004 13.3049 6.70019 12.0005 6.70019C10.6961 6.70019 9.54005 7.54004 9.13686 8.78057L7.94027 12.4624C7.83524 12.7856 7.78174 13.1233 7.78174 13.463C7.78174 14.4555 8.22852 15.3434 8.93174 15.9373" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.71924 4.46753C5.71924 4.7264 5.50936 4.93628 5.25049 4.93628C4.99161 4.93628 4.78174 4.7264 4.78174 4.46753C4.78174 4.20865 4.99161 3.99878 5.25049 3.99878C5.50936 3.99878 5.71924 4.20865 5.71924 4.46753Z" fill="#001D3D"/>
    <path d="M19.2505 13.405C19.2505 13.6639 19.0406 13.8738 18.7817 13.8738C18.5229 13.8738 18.313 13.6639 18.313 13.405C18.313 13.1462 18.5229 12.9363 18.7817 12.9363C19.0406 12.9363 19.2505 13.1462 19.2505 13.405Z" fill="#001D3D"/>
  </g>
</svg>
)
};
export default PetSpaIcon;