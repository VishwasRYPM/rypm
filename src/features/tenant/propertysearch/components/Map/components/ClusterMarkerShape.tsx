import React, { useMemo } from 'react';
import { Business } from '@mui/icons-material';

interface ClusterMarkerShapeProps {
  count: number;
  isSelected?: boolean;
  className?: string;
  minWidth?: number;
}

const ClusterMarkerShape: React.FC<ClusterMarkerShapeProps> = ({ 
  count, 
  isSelected = false, 
  className = "",
  minWidth = 85
}) => {
  const fillColor = isSelected ? '#001D3D' : 'white';
  const strokeColor = isSelected ? '#001D3D' : '#D1D5DC';
  const textColor = isSelected ? 'white' : '#001D3D';
  const iconColor = isSelected ? '#FFFFFF' : '#001D3D';

  const text = `${count} units`;

  // Calculate width based on text length
  const svgWidth = useMemo(() => {
    const baseWidth = minWidth;
    const textLength = text.length;
    const extraWidth = Math.max(0, (textLength - 8) * 4); // Add 4px per extra character after 8 chars
    return Math.min(baseWidth + extraWidth, 140); // Max width of 140px for clusters
  }, [text, minWidth]);

  // Scale the path based on the new width
  const scaledPath = useMemo(() => {
    if (svgWidth === 85) {
      // Scaled version of the original path for width 85
      const scale = 85 / 75;
      return "M15 0.75H70C77.8701 0.75 84.25 7.12994 84.25 15C84.25 22.8701 77.8701 29.25 70 29.25H51.5C49.9333 29.25 48.7122 30.042 47.7793 31.0771C46.9707 31.9744 46.3389 33.0958 45.834 34.166L45.625 34.6201C45.371 35.188 45.1521 35.5519 44.9717 35.7627C44.8847 35.8643 44.8266 35.9072 44.7969 35.9248C44.7627 35.9078 44.6865 35.8609 44.5674 35.7324C44.4144 35.5673 44.2375 35.3197 44.0352 34.9736L43.8242 34.5947C43.1932 33.4052 42.3871 32.1039 41.4473 31.0898C40.5252 30.0951 39.3563 29.25 38 29.25H15C7.12994 29.25 0.75 22.8701 0.75 15C0.75 7.12994 7.12994 0.75 15 0.75Z";
    }
    
    // For different widths, adjust the path coordinates
    const adjustedWidth = svgWidth - 15;
    const centerX = svgWidth / 2;
    
    return `M15 0.75H${adjustedWidth}C${adjustedWidth + 7.87} 0.75 ${svgWidth - 0.75} 7.12994 ${svgWidth - 0.75} 15C${svgWidth - 0.75} 22.8701 ${adjustedWidth + 7.87} 29.25 ${adjustedWidth} 29.25H${centerX + 8.75}C${centerX + 7.18} 29.25 ${centerX + 5.96} 30.042 ${centerX + 5.03} 31.0771C${centerX + 4.22} 31.9744 ${centerX + 3.59} 33.0958 ${centerX + 3.08} 34.166L${centerX + 2.875} 34.6201C${centerX + 2.621} 35.188 ${centerX + 2.402} 35.5519 ${centerX + 2.222} 35.7627C${centerX + 2.135} 35.8643 ${centerX + 2.077} 35.9072 ${centerX + 2.047} 35.9248C${centerX + 2.013} 35.9078 ${centerX + 1.937} 35.8609 ${centerX + 1.817} 35.7324C${centerX + 1.664} 35.5673 ${centerX + 1.487} 35.3197 ${centerX + 1.285} 34.9736L${centerX + 1.074} 34.5947C${centerX + 0.443} 33.4052 ${centerX - 0.363} 32.1039 ${centerX - 1.303} 31.0898C${centerX - 2.225} 30.0951 ${centerX - 3.394} 29.25 ${centerX - 4.75} 29.25H15C7.12994 29.25 0.75 22.8701 0.75 15C0.75 7.12994 7.12994 0.75 15 0.75Z`;
  }, [svgWidth]);

  return (
    <div className={`relative ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={svgWidth} 
        height="37" 
        viewBox={`0 0 ${svgWidth} 37`} 
        fill="none"
        className="drop-shadow-md"
      >
        <path 
          d={scaledPath}
          fill={fillColor} 
          stroke={strokeColor} 
          strokeWidth="1.5"
        />
      </svg>
      
      {/* Content overlay with icon and text */}
      <div 
        className="absolute inset-0 flex items-center justify-center gap-1"
        style={{ 
          top: '0px', 
          paddingBottom: '8px'
        }}
      >
        <Business 
          sx={{ 
            fontSize: 14, 
            color: iconColor 
          }} 
        />
        <span 
          className="text-sm font-bold leading-tight"
          style={{ 
            color: textColor,
            fontSize: 'clamp(14px, 3vw, 20px)',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default ClusterMarkerShape;