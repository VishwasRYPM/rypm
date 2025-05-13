import React from 'react';

interface HeartFilledIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string; // Add color prop
}

const HeartFilledIcon = ({ width = 30, height = 30, className = '' ,color = '#A7BBCE'}: HeartFilledIconProps) => {
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
        d="M20.9205 10.0795C20.5784 9.73729 20.1722 9.4658 19.7252 9.28057C19.2782 9.09534 18.799 9 18.3151 9C17.8312 9 17.3521 9.09534 16.905 9.28057C16.458 9.4658 16.0518 9.73729 15.7098 10.0795L14.9998 10.7895L14.2899 10.0795C13.5989 9.38855 12.6617 9.00036 11.6845 9.00036C10.7073 9.00036 9.77016 9.38855 9.07917 10.0795C8.38819 10.7705 8 11.7077 8 12.6849C8 13.6621 8.38819 14.5993 9.07917 15.2902L9.78911 16.0002L14.9998 21.2109L20.2105 16.0002L20.9205 15.2902C21.2627 14.9482 21.5342 14.542 21.7194 14.095C21.9047 13.6479 22 13.1688 22 12.6849C22 12.201 21.9047 11.7218 21.7194 11.2748C21.5342 10.8278 21.2627 10.4216 20.9205 10.0795Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartFilledIcon;
