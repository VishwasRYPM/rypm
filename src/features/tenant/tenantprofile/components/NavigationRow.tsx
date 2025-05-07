'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveMainTab } from '@/features/tenant/tenantprofile/slices/tenantSlice';
import { RootState } from '@/store/rootReducer';
import { HomeIcon, HeartIcon, CalendarIcon, SettingIcon, HistoryIcon } from '@/ui/icons';

const NavigationRow = () => {
  const dispatch = useDispatch();
  const activeMainTab = useSelector((state: RootState) => state.tenant.activeMainTab);

  const navItems = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Likes', icon: <HeartIcon /> },
    { name: 'Calendar', icon: <CalendarIcon /> },
    { name: 'History', icon: <HistoryIcon /> },
    { name: 'Settings', icon: <SettingIcon /> },
  ];

  return (
    <div className="flex justify-between px-16 py-2 bg-white">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`flex flex-col items-center relative ${
            activeMainTab === item.name ? 'text-[#1a2c42]' : 'text-gray-400'
          }`}
          onClick={() => dispatch(setActiveMainTab(item.name))}
          aria-label={item.name}
        >
          {item.icon}
          {activeMainTab === item.name && (
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#1a2c42] rounded-t-md"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default NavigationRow;
