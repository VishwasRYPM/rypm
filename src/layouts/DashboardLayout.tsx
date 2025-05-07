
import { ReactNode } from 'react';
import Header from '@/ui/Header';
import BottomNavigation from '@/ui/BottomNavigation';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen max-w-[480px] mx-auto bg-[#FFF]">
      <Header />
      <main className="flex-grow pb-16">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default DashboardLayout;