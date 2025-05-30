'use client';
import React from 'react';

interface InfoBlockProps {
  Icon: React.ReactNode;
  text1: string;
  text2: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ Icon, text1, text2 }) => {
  return (
    <div className='flex felx-row items-center gap-3'>
      {Icon}
      <div>
        <p className='text-[#001D3D] text-[12px] font-normal mb-0.2'>{text1}</p>
        <p className='text-[#63829E] text-[10px] font-normal mb-1.5'>{text2}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
