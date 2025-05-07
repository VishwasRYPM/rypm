import React from 'react';

interface HomeIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const HomeIcon = ({ width = 20, height = 20, className = '' }: HomeIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M3.82958 22.9997C2.38985 22.9997 1.22266 21.802 1.22266 20.3231V9.56543C1.22266 8.75268 1.5832 7.9827 2.20041 7.47549L9.37098 1.58699C9.82913 1.2076 10.4053 1 11.0002 1C11.595 1 12.1712 1.2076 12.6293 1.58699L19.7987 7.47549C20.4171 7.9827 20.7777 8.75268 20.7777 9.56543V20.3231C20.7777 21.802 19.6105 22.9997 18.1707 22.9997H3.82958Z"
          stroke="#20364D"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M7.94531 22.9984V16.2764C7.94531 15.6281 8.20284 15.0064 8.66125 14.548C9.11966 14.0896 9.7414 13.832 10.3897 13.832H11.6119C12.2602 13.832 12.8819 14.0896 13.3403 14.548C13.7987 15.0064 14.0563 15.6281 14.0563 16.2764V22.9984"
          stroke="#20364D"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
