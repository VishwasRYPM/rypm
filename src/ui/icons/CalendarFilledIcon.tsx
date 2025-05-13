import React from 'react';

interface CalendarFilledIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string; 
}

const CalendarFilledIcon = ({ width = 30, height = 30, className = '',color = '#A7BBCE' }: CalendarFilledIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="30" height="30" rx="15" fill="#EDF2FA"/>
      <path
        d="M10.5556 14.65H12.3333V16.35H10.5556V14.65ZM23 10.4V22.3C23 23.235 22.2 24 21.2222 24H8.77778C8.30628 24 7.8541 23.8209 7.5207 23.5021C7.1873 23.1833 7 22.7509 7 22.3L7.00889 10.4C7.00889 9.465 7.79111 8.7 8.77778 8.7H9.66667V7H11.4444V8.7H18.5556V7H20.3333V8.7H21.2222C22.2 8.7 23 9.465 23 10.4ZM8.77778 12.1H21.2222V10.4H8.77778V12.1ZM21.2222 22.3V13.8H8.77778V22.3H21.2222ZM17.6667 16.35H19.4444V14.65H17.6667V16.35ZM14.1111 16.35H15.8889V14.65H14.1111V16.35Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarFilledIcon;
