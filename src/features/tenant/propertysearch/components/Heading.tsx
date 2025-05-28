'use client';
import React from 'react';

interface HeadingProps {
    text: string;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text,className="text-[16px]" }) => {
  return (
      <div>
          <h1 className={`${className} text-[#001D3D] font-bold capitalize my-3`}>{text}</h1>
      </div>
  );
};

export default Heading;