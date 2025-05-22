'use client';
import React, { ReactNode } from 'react';

interface InfoBlockGridLayoutProps {
  leftSection: ReactNode;
  rightSection: ReactNode;
}

const InfoBlockGridLayout: React.FC<InfoBlockGridLayoutProps> = ({
  leftSection,
  rightSection,
}) => {
  return (
    <div className='flex felx-row  justify-between'>
      <section className='w-[50%] flex flex-col gap-1 items-start'>{leftSection}</section>
      <section className=' w-[50%] flex flex-col gap-1 items-start'>{rightSection}</section>
    </div>
  );
};

export default InfoBlockGridLayout;
