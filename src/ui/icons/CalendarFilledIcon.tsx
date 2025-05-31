import React from "react";

interface CalendarFilledIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const CalendarFilledIcon = ({
  width = 30,
  height = 30,
  className = "",
  color = "#001D3D",
}: CalendarFilledIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0.75"
        y="0.75"
        width="28.5"
        height="28.5"
        rx="14.25"
        fill="#F9FAFB"
        stroke="#F9FAFB"
        strokeWidth="1.5"
      />
      <path
        d="M10.3333 14.2H12V15.8H10.3333V14.2ZM22 10.2V21.4C22 22.28 21.25 23 20.3333 23H8.66667C8.22464 23 7.80072 22.8314 7.48816 22.5314C7.17559 22.2313 7 21.8243 7 21.4L7.00833 10.2C7.00833 9.32 7.74167 8.6 8.66667 8.6H9.5V7H11.1667V8.6H17.8333V7H19.5V8.6H20.3333C21.25 8.6 22 9.32 22 10.2ZM8.66667 11.8H20.3333V10.2H8.66667V11.8ZM20.3333 21.4V13.4H8.66667V21.4H20.3333ZM17 15.8H18.6667V14.2H17V15.8ZM13.6667 15.8H15.3333V14.2H13.6667V15.8Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarFilledIcon;
