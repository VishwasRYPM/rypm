import React from "react";

interface HeartUnFillIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const HeartUnFillIcon = ({
  width = 30,
  height = 30,
  className = "",
}: HeartUnFillIconProps) => {
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
          style={{
            backdropFilter: "blur(0.05px)",
            clipPath: "url(#bgblur_0_2089_44603_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <rect
        data-figma-bg-blur-radius="0.1"
        width="30"
        height="30"
        rx="15"
        fill="#001D3D"
        fillOpacity="0.3"
      />
      <path
        d="M21.1259 8.84206C19.0147 7.31205 16.4077 8.02606 15.0002 9.77707C13.5928 8.02606 10.9858 7.30355 8.87457 8.84206C7.75501 9.65807 7.05128 11.0351 7.00329 12.4886C6.89134 15.7866 9.64228 18.4301 13.8407 22.4847L13.9206 22.5612C14.5284 23.1477 15.464 23.1477 16.0718 22.5527L16.1598 22.4677C20.3582 18.4216 23.1011 15.7781 22.9971 12.4801C22.9492 11.0351 22.2454 9.65807 21.1259 8.84206ZM15.0802 21.2182L15.0002 21.3032L14.9203 21.2182C11.1137 17.5546 8.60268 15.1321 8.60268 12.6756C8.60268 10.9756 9.80222 9.70057 11.4016 9.70057C12.6331 9.70057 13.8327 10.5421 14.2565 11.7066H15.7519C16.1678 10.5421 17.3673 9.70057 18.5988 9.70057C20.1982 9.70057 21.3978 10.9756 21.3978 12.6756C21.3978 15.1321 18.8867 17.5546 15.0802 21.2182Z"
        fill="white"
      />
      <defs>
        <clipPath
          id="bgblur_0_2089_44603_clip_path"
          transform="translate(0.1 0.1)"
        >
          <rect width="30" height="30" rx="15" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeartUnFillIcon;
