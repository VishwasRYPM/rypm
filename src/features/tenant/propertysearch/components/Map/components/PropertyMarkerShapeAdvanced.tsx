import React, { useMemo } from 'react';

interface PropertyMarkerShapeAdvancedProps {
  text: string;
  isSelected?: boolean;
  className?: string;
  minWidth?: number;
}

const PropertyMarkerShapeAdvanced: React.FC<PropertyMarkerShapeAdvancedProps> = ({ 
  text, 
  isSelected = false, 
  className = "",
  minWidth = 75
}) => {
  const fillColor = isSelected ? '#001D3D' : 'white';
  const strokeColor = isSelected ? '#001D3D' : '#D1D5DC';
  const textColor = isSelected ? 'white' : '#001D3D';

  // Calculate width based on text length
  const svgWidth = useMemo(() => {
    const baseWidth = minWidth;
    const textLength = text.length;
    const extraWidth = Math.max(0, (textLength - 6) * 4); // Add 4px per extra character
    return Math.min(baseWidth + extraWidth, 120); // Max width of 120px
  }, [text, minWidth]);

  // Scale the path based on the new width
  const scaledPath = useMemo(() => {
    if (svgWidth === 75) {
      return "M15 0.75H60C67.8701 0.75 74.25 7.12994 74.25 15C74.25 22.8701 67.8701 29.25 60 29.25H44.25C42.6833 29.25 41.4622 30.042 40.5293 31.0771C39.7207 31.9744 39.0889 33.0958 38.584 34.166L38.375 34.6201C38.121 35.188 37.9021 35.5519 37.7217 35.7627C37.6347 35.8643 37.5766 35.9072 37.5469 35.9248C37.5127 35.9078 37.4365 35.8609 37.3174 35.7324C37.1644 35.5673 36.9875 35.3197 36.7852 34.9736L36.5742 34.5947C35.9432 33.4052 35.1371 32.1039 34.1973 31.0898C33.2752 30.0951 32.1063 29.25 30.75 29.25H15C7.12994 29.25 0.75 22.8701 0.75 15C0.75 7.12994 7.12994 0.75 15 0.75Z";
    }
    
    // For different widths, adjust the path coordinates
    const scale = svgWidth / 75;
    const adjustedWidth = svgWidth - 15; // Account for border radius
    const centerX = svgWidth / 2;
    
    return `M15 0.75H${adjustedWidth}C${adjustedWidth + 7.87} 0.75 ${svgWidth - 0.75} 7.12994 ${svgWidth - 0.75} 15C${svgWidth - 0.75} 22.8701 ${adjustedWidth + 7.87} 29.25 ${adjustedWidth} 29.25H${centerX + 6.75}C${centerX + 5.18} 29.25 ${centerX + 3.96} 30.042 ${centerX + 3.03} 31.0771C${centerX + 2.22} 31.9744 ${centerX + 1.59} 33.0958 ${centerX + 1.08} 34.166L${centerX + 0.875} 34.6201C${centerX + 0.621} 35.188 ${centerX + 0.402} 35.5519 ${centerX + 0.222} 35.7627C${centerX + 0.135} 35.8643 ${centerX + 0.077} 35.9072 ${centerX + 0.047} 35.9248C${centerX + 0.013} 35.9078 ${centerX - 0.063} 35.8609 ${centerX - 0.183} 35.7324C${centerX - 0.336} 35.5673 ${centerX - 0.513} 35.3197 ${centerX - 0.715} 34.9736L${centerX - 0.926} 34.5947C${centerX - 1.557} 33.4052 ${centerX - 2.363} 32.1039 ${centerX - 3.303} 31.0898C${centerX - 4.225} 30.0951 ${centerX - 5.394} 29.25 ${centerX - 6.75} 29.25H15C7.12994 29.25 0.75 22.8701 0.75 15C0.75 7.12994 7.12994 0.75 15 0.75Z`;
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
      
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          top: '0px', 
          paddingBottom: '8px'
        }}
      >
        <span 
          className="text-sm font-bold text-center px-2 leading-tight"
          style={{ 
            color: textColor,
            fontSize: 'clamp(14px, 3vw, 20px)',
            maxWidth: `${svgWidth - 10}px`,
            wordBreak: 'break-word'
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default PropertyMarkerShapeAdvanced;