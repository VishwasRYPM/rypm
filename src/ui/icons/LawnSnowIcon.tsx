import React from 'react';

interface LawnSnowIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const LawnSnowIcon = ({ 
  width = 24, 
  height = 24, 
  className = '',
  color = '#001D3D' 
}: LawnSnowIconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#F8F9FB"/>
  <mask id="mask0_2491_10536" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
    <path d="M4 3.99902H20V19.999H4V3.99902Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2491_10536)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0249 8.95337C17.7662 8.95337 17.5562 8.74337 17.5562 8.48462C17.5562 8.22587 17.7662 8.01587 18.0249 8.01587C18.2837 8.01587 18.4937 8.22587 18.4937 8.48462C18.4937 8.74337 18.2837 8.95337 18.0249 8.95337Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0249 4.93652C17.7662 4.93652 17.5562 4.72652 17.5562 4.46777C17.5562 4.20902 17.7662 3.99902 18.0249 3.99902C18.2837 3.99902 18.4937 4.20902 18.4937 4.46777C18.4937 4.72652 18.2837 4.93652 18.0249 4.93652Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.94507C11.7413 6.94507 11.5312 6.73507 11.5312 6.47632C11.5312 6.21757 11.7413 6.00757 12 6.00757C12.2587 6.00757 12.4688 6.21757 12.4688 6.47632C12.4688 6.73507 12.2587 6.94507 12 6.94507Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99121 8.95337C9.73246 8.95337 9.52246 8.74337 9.52246 8.48462C9.52246 8.22587 9.73246 8.01587 9.99121 8.01587C10.25 8.01587 10.46 8.22587 10.46 8.48462C10.46 8.74337 10.25 8.95337 9.99121 8.95337Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97461 8.95337C5.71586 8.95337 5.50586 8.74337 5.50586 8.48462C5.50586 8.22587 5.71586 8.01587 5.97461 8.01587C6.23336 8.01587 6.44336 8.22587 6.44336 8.48462C6.44336 8.74337 6.23336 8.95337 5.97461 8.95337Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99121 4.93652C9.73246 4.93652 9.52246 4.72652 9.52246 4.46777C9.52246 4.20902 9.73246 3.99902 9.99121 3.99902C10.25 3.99902 10.46 4.20902 10.46 4.46777C10.46 4.72652 10.25 4.93652 9.99121 4.93652Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97461 4.93628C5.71586 4.93628 5.50586 4.72628 5.50586 4.46753C5.50586 4.20878 5.71586 3.99878 5.97461 3.99878C6.23336 3.99878 6.44336 4.20878 6.44336 4.46753C6.44336 4.72628 6.23336 4.93628 5.97461 4.93628Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0166 6.94507C15.7579 6.94507 15.5479 6.73507 15.5479 6.47632C15.5479 6.21757 15.7579 6.00757 16.0166 6.00757C16.2754 6.00757 16.4854 6.21757 16.4854 6.47632C16.4854 6.73507 16.2754 6.94507 16.0166 6.94507Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0078 8.95337C13.7491 8.95337 13.5391 8.74337 13.5391 8.48462C13.5391 8.22587 13.7491 8.01587 14.0078 8.01587C14.2666 8.01587 14.4766 8.22587 14.4766 8.48462C14.4766 8.74337 14.2666 8.95337 14.0078 8.95337Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0078 4.93652C13.7491 4.93652 13.5391 4.72652 13.5391 4.46777C13.5391 4.20902 13.7491 3.99902 14.0078 3.99902C14.2666 3.99902 14.4766 4.20902 14.4766 4.46777C14.4766 4.72652 14.2666 4.93652 14.0078 4.93652Z" fill="#001D3D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9834 6.94507C7.72465 6.94507 7.51465 6.73507 7.51465 6.47632C7.51465 6.21757 7.72465 6.00757 7.9834 6.00757C8.24215 6.00757 8.45215 6.21757 8.45215 6.47632C8.45215 6.73507 8.24215 6.94507 7.9834 6.94507Z" fill="#001D3D"/>
    <path d="M6.979 19.5303V17.5219" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.02 19.53V17.5217" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19.53V17.5217" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.48959 17.5217L6.97919 10.9946L4.46875 17.5217" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5311 17.522L17.0207 10.9949L14.5103 17.522" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.48959 17.5217C9.48959 17.5217 9.32844 17.103 9.08794 16.4774C8.75228 15.605 7.91406 15.0291 6.97919 15.0291C6.04428 15.0291 5.20606 15.605 4.87044 16.4774C4.62994 17.103 4.46875 17.5217 4.46875 17.5217H9.48959Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5311 17.522C19.5311 17.522 19.3699 17.1032 19.1294 16.4776C18.7938 15.6053 17.9556 15.0294 17.0207 15.0294C16.0858 15.0294 15.2476 15.6053 14.9119 16.4776C14.6714 17.1032 14.5103 17.522 14.5103 17.522H19.5311Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5096 17.5217L11.9992 9.48838L9.48877 17.5217H14.5096Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5096 17.5217C14.5096 17.5217 14.2591 16.7196 13.9162 15.6226C13.6541 14.7841 12.8776 14.2133 11.9992 14.2133C11.1208 14.2133 10.3443 14.7841 10.0823 15.6226C9.73933 16.7196 9.48877 17.5217 9.48877 17.5217H14.5096Z" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.46875 19.53H19.5312" stroke="#001D3D" strokeWidth="0.9375" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
)
};
export default LawnSnowIcon;