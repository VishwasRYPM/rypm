import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

const OnlineIcon = ({ width = 31, height = 34, className = '' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_ddi_541_39777)">
        <rect x="12" y="13.9883" width="10" height="10" rx="5" fill="#EDF2FA" />
      </g>
      <rect
        width="7.5"
        height="7.5"
        rx="3.75"
        transform="matrix(1 0 0 -1 13.25 22.7383)"
        fill="#3A9A76"
      />
      <defs>
        <filter
          id="filter0_ddi_541_39777"
          x="0"
          y="0.988281"
          width="31"
          height="33"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="-3" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.192157 0 0 0 0 0.364706 0 0 0 0 0.501961 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_541_39777" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_541_39777" />
          <feOffset dx="5" dy="6" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.192157 0 0 0 0 0.364706 0 0 0 0 0.501961 0 0 0 0.08 0"
          />
          <feBlend mode="normal" in2="effect1_dropShadow_541_39777" result="effect2_dropShadow_541_39777" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_541_39777" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.221667 0 0 0 0 0.487936 0 0 0 0 0.933333 0 0 0 0.12 0"
          />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_541_39777" />
        </filter>
      </defs>
    </svg>
  );
};

export default OnlineIcon;
