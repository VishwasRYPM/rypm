// 'use client';

import { ReactNode } from 'react';
//import Header from '@/ui/Header';
import BottomNavigation from '@/ui/BottomNavigation';

interface PropertySearchLayoutProps {
  children: ReactNode;
}

const PropertySearchLayout = ({ children }: PropertySearchLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen max-w-[480px] mx-auto bg-[#FFF]">
      {/* <Header /> */}
      <main className="flex-grow">
        {children}
      </main>
      {/* <BottomNavigation /> */}
    </div>
  );
};

export default PropertySearchLayout;