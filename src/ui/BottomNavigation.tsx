'use client';

import { useDispatch } from 'react-redux';
import { setActiveMainTab } from '@/features/tenant/tenantprofile/slices/tenantSlice';
import Image from 'next/image';
import { HomeIcon, BenefitsIcon, ChatsIcon, PlayIcon } from './icons';

const BottomNavigation = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto   flex justify-between items-center px-4 py-2 "
    style={{
      backgroundImage: 'url(/images/bottom-nav-bg.png)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
      <button 
        className="flex flex-col items-center text-gray-600 flex-1"
        onClick={() => dispatch(setActiveMainTab('Properties'))}
        aria-label="Properties"
      >
        <HomeIcon />
        <span className="text-[10px] mt-1 text-[#20364D] text-center font-bold leading-[160%] capitalize">Properties</span>
      </button>
      
      <button 
        className="flex flex-col items-center text-gray-600 flex-1"
        onClick={() => dispatch(setActiveMainTab('Benefits'))}
        aria-label="Benefits"
      >
        <BenefitsIcon/>
        <span className="text-[10px] mt-1 text-[#20364D] text-center font-bold leading-[160%] capitalize">Benefits</span>
      </button>
      
      <div className="flex-1 flex justify-center">
        <button 
          className="flex flex-col items-center relative -mt-9"
          onClick={() => dispatch(setActiveMainTab('Play'))}
          aria-label="Play"
        >
          <div className=" p-1 rounded-full ">
            <PlayIcon />
          </div>
        </button>
      </div>
      
      <button 
        className="flex flex-col items-center text-gray-600 flex-1"
        onClick={() => dispatch(setActiveMainTab('Chats'))}
        aria-label="Chats"
      >
        <ChatsIcon />
        <span className="text-[10px] mt-1 text-[#20364D] text-center font-bold leading-[160%] capitalize">Chats</span>
      </button>
      
      <button 
        className="flex flex-col items-center flex-1"
        onClick={() => dispatch(setActiveMainTab('Profile'))}
        aria-label="Profile"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-gray-300">
          <Image 
            src="/images/testimonial-client-01 1.png" 
            alt="Profile" 
            width={24} 
            height={24} 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-[10px] mt-1 text-[#20364D] text-center font-bold leading-[160%] capitalize">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
