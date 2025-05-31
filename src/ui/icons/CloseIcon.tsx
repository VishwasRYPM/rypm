import React from "react";

interface CloseIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const CloseIcon = ({
  width = 12,
  height = 12,
  className = "",
  color = "#FFF",
}: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M1 11L10.95 1M11 11L1.05 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
