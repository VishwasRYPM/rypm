import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

const EditIcon = ({ width = 19, height = 19, className = '' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Your SVG content below */}
      <foreignObject x="-3.28684" y="-3.28684" width="25.5737" height="26.3954">
        <div
          style={{
            backdropFilter: 'blur(1.64px)',
            clipPath: 'url(#bgblur_0_541_39795_clip_path)',
            height: '100%',
            width: '100%',
          }}
        />
      </foreignObject>
      <g filter="url(#filter0_i_541_39795)" data-figma-bg-blur-radius="3.28684">
        <rect width="19" height="19" rx="9.5" fill="#EDF2FA" fillOpacity="0.5" />
      </g>
      <path
        d="M11.2968 5.13869C11.3856 5.04989 11.506 5 11.6317 5C11.7573 5 11.8777 5.04989 11.9666 5.13869L13.8613 7.03345C13.9501 7.12228 14 7.24274 14 7.36835C14 7.49395 13.9501 7.61441 13.8613 7.70324L7.70335 13.8612C7.61453 13.95 7.49407 14 7.36845 14H5.47369C5.34806 14 5.22757 13.9501 5.13874 13.8613C5.04991 13.7724 5 13.6519 5 13.5263V11.6316C5.00003 11.5059 5.04995 11.3855 5.13879 11.2967L9.87569 6.55976L11.2968 5.13869ZM10.2106 7.56445L5.94738 11.8277V13.0526H7.17234L11.4355 8.78942L10.2106 7.56445ZM12.1053 8.11962L12.8566 7.36835L11.6317 6.14339L10.8804 6.89466L12.1053 8.11962Z"
        fill="#A7BBCE"
      />
      <defs>
        <filter
          id="filter0_i_541_39795"
          x="-3.28684"
          y="-3.28684"
          width="25.5737"
          height="26.3954"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3.28684" dy="4.10855" />
          <feGaussianBlur stdDeviation="2.05427" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.221667 0 0 0 0 0.487936 0 0 0 0 0.933333 0 0 0 0.12 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_541_39795" />
        </filter>
        <clipPath id="bgblur_0_541_39795_clip_path">
          <rect width="19" height="19" rx="9.5" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EditIcon;
