import React from "react";

interface MiceIconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const MiceIcon = ({
  width = 12,
  height = 15,
  className = "",
  color = "#001D3D",
}: MiceIconProps) => {
  // Calculate the scale factor based on the original viewBox dimensions
  const originalWidth = 12;
  const originalHeight = 15;
  
  // Calculate scaling factors for width and height
  const scaleX = width / originalWidth;
  const scaleY = height / originalHeight;
  
  // Use the smaller scale to maintain aspect ratio
  const scale = Math.min(scaleX, scaleY);
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 15"
      fill="none"
      className={className}
    >
      <g transform={`scale(${scale})`}>
        <path
          d="M5.62414 9.47368C6.9731 9.47368 8.06203 8.41579 8.06203 7.10526V2.36842C8.06203 1.05789 6.9731 0 5.62414 0C4.27517 0 3.18624 1.05789 3.18624 2.36842V7.10526C3.18624 8.41579 4.27517 9.47368 5.62414 9.47368ZM10.4268 7.10526C10.0286 7.10526 9.69542 7.38947 9.63041 7.77632C9.29723 9.63158 7.63134 11.0526 5.62414 11.0526C3.61693 11.0526 1.95104 9.63158 1.61786 7.77632C1.55285 7.38947 1.21967 7.10526 0.821478 7.10526C0.325772 7.10526 -0.0642915 7.53158 0.00884546 8.00526C0.407035 10.3737 2.35735 12.2289 4.8115 12.5684V14.2105C4.8115 14.6447 5.17719 15 5.62414 15C6.07108 15 6.43677 14.6447 6.43677 14.2105V12.5684C8.89092 12.2289 10.8412 10.3737 11.2394 8.00526C11.3207 7.53158 10.9225 7.10526 10.4268 7.10526Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default MiceIcon;
