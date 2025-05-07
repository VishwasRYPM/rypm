import React from 'react';

interface ChatsIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const ChatsIcon= ({ width = 21, height = 21, className = '' }: ChatsIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      className={className}
    >
      <path
        d="M1 11.5C1 8.71523 2.10625 6.04451 4.07538 4.07538C6.04451 2.10625 8.71523 1 11.5 1C14.2848 1 16.9555 2.10625 18.9246 4.07538C20.8938 6.04451 22 8.71523 22 11.5V18.1806C22 19.2936 22 19.8475 21.8346 20.2924C21.7031 20.645 21.4974 20.9652 21.2313 21.2313C20.9652 21.4974 20.645 21.7031 20.2924 21.8346C19.8475 22 19.2923 22 18.1806 22H11.5C8.71523 22 6.04451 20.8938 4.07538 18.9246C2.10625 16.9555 1 14.2848 1 11.5Z"
        stroke="#20364D"
        strokeWidth="1.8"
      />
      <path
        d="M7.5625 10.1875H15.4375M11.5 15.4375H15.4375"
        stroke="#20364D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatsIcon;
