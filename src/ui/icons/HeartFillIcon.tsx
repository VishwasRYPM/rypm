import React from "react";

interface HeartFillIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const HeartFillIcon = ({
  width = 30,
  height = 30,
  className = "",
}: HeartFillIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
    >
      <foreignObject x="-4" y="-4" width="38" height="38">
        <div
          style={{
            backdropFilter: "blur(0.05px)",
            clipPath: "url(#bgblur_filled_heart_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <rect
        data-figma-bg-blur-radius="4"
        width="30"
        height="30"
        rx="15"
        fill="#001D3D"
        fillOpacity="0.3"
      />
      <path
        d="M15.3896 10.0898C16.623 8.55571 18.8319 7.93363 20.6553 9.125L20.8311 9.24609L20.832 9.24707C21.7623 9.92031 22.374 11.0492 22.4824 12.2617L22.4971 12.5049V12.5059C22.5475 13.995 21.9579 15.3685 20.7959 16.9004C19.6262 18.4423 17.9222 20.0866 15.8135 22.123L15.7334 22.2002L15.7324 22.2012C15.3448 22.5753 14.7697 22.5987 14.3584 22.2666L14.2783 22.1953L14.2754 22.1934L14.1875 22.1084L14.1865 22.1074L12.6836 20.6543C11.2601 19.2649 10.0827 18.0534 9.20605 16.8984C8.04533 15.369 7.45612 13.9947 7.50293 12.5049C7.54359 11.2831 8.09858 10.12 8.98535 9.3877L9.16699 9.24707H9.16797C11.0247 7.90162 13.3383 8.50738 14.6104 10.0898L15 10.5752L15.3896 10.0898Z"
        fill="#E7000B"
        stroke="white"
      />
      <defs>
        <clipPath id="bgblur_0_3467_3334_clip_path" transform="translate(4 4)">
          <rect width="30" height="30" rx="15" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeartFillIcon;
