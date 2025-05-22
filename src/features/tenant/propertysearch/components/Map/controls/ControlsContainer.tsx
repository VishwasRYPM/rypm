import React from 'react';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface ControlsContainerProps {
  children: React.ReactNode;
  position: Position;
}

const positionStyles: Record<Position, string> = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
};

const ControlsContainer: React.FC<ControlsContainerProps> = ({ 
  children, 
  position 
}) => {
  return (
    <div className={`absolute ${positionStyles[position]} z-10 flex flex-col gap-2`}>
      {children}
    </div>
  );
};

export default ControlsContainer;
