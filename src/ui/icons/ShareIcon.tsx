import React from 'react';

interface ShareIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const ShareIcon = ({ 
  width = 30, 
  height = 30, 
  className = '' 
}: ShareIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 30 30" 
      fill="none"
      className={className}
    >
      <foreignObject x="-0.1" y="-0.1" width="30.2" height="30.2">
        <div 
          style={{backdropFilter: 'blur(0.05px)', clipPath: 'url(#bgblur_0_2089_44606_clip_path)', height: '100%', width: '100%'}}
        ></div>
      </foreignObject>
      <rect data-figma-bg-blur-radius="0.1" width="30" height="30" rx="15" fill="#001D3D" fillOpacity="0.3"/>
      <path d="M13.4666 15.5334L21.9999 7.00004" stroke="white" strokeWidth="1.36929" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.4667 15.5333C13.4667 15.5333 8.67343 14.1639 6.76783 13.6194C6.31333 13.4895 6 13.0742 6 12.6014V12.6012C6 12.1256 6.3119 11.7064 6.7674 11.5698C9.95688 10.6129 22 7 22 7C22 7 18.3871 19.0431 17.4302 22.2326C17.2936 22.6881 16.8744 23 16.3988 23H16.3986C15.9258 23 15.5105 22.6867 15.3806 22.2322C14.8361 20.3266 13.4667 15.5333 13.4667 15.5333Z" stroke="white" strokeWidth="1.36929" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <clipPath id="bgblur_0_2089_44606_clip_path" transform="translate(0.1 0.1)">
          <rect width="30" height="30" rx="15"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShareIcon;
