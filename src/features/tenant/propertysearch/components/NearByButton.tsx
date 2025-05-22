'use client';
import React, { ReactNode } from 'react';

interface nearByButtonProps {
  text: string;
}

const NearByButton: React.FC<nearByButtonProps>=({text}) => {
  return (
      <div className='flex-shrink-0 text-[12px] font-bold text-[#20364D] capitalize px-2.5 py-2 rounded-[8px] active:bg-[#20364B] active:text-[#FFF]'>
        {text}
    </div>
   
    
  );
};

export default NearByButton;