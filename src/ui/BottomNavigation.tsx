// 'use client';

// import { useDispatch } from 'react-redux';
// import { setActiveMainTab } from '@/features/tenant/tenantprofile/slices/tenantSlice';
// import Image from 'next/image';
// import { HomeIcon, BenefitsIcon, ChatsIcon, PlayIcon } from './icons';

// const BottomNavigation = () => {
//   const dispatch = useDispatch();

//   return (
//     <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto   flex justify-between items-center px-4 py-2 "
//     style={{
//       backgroundImage: 'url(/images/bottom-nav-bg.png)', 
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat'
//     }}
//   >
//       <button 
//         className="flex flex-col items-center text-gray-600 flex-1"
//         onClick={() => dispatch(setActiveMainTab('Properties'))}
//         aria-label="Properties"
//       >
//         <HomeIcon />
//         <span className="text-[10px] mt-1 text-[#20364D] text-center font-bold leading-[160%] capitalize">Properties</span>
//       </button>
      
//       <button 
//         className="flex flex-col items-center text-gray-600 flex-1"
//         onClick={() => dispatch(setActiveMainTab('Benefits'))}
//         aria-label="Benefits"
//       >
//         <BenefitsIcon/>
//         <span className="text-[10px] mt-1 text-[#20364D] text-center font-bold leading-[160%] capitalize">Benefits</span>
//       </button>
      
//       <div className="flex-1 flex justify-center">
//         <button 
//           className="flex flex-col items-center relative -mt-9"
//           onClick={() => dispatch(setActiveMainTab('Play'))}
//           aria-label="Play"
//         >
//           <div className=" p-1 rounded-full ">
//             <PlayIcon />
//           </div>
//         </button>
//       </div>
      
//       <button 
//         className="flex flex-col items-center text-gray-600 flex-1"
//         onClick={() => dispatch(setActiveMainTab('Chats'))}
//         aria-label="Chats"
//       >
//         <ChatsIcon />
//         <span className="text-[10px] mt-1 text-[#20364D] text-center font-bold leading-[160%] capitalize">Chats</span>
//       </button>
      
//       <button 
//         className="flex flex-col items-center flex-1"
//         onClick={() => dispatch(setActiveMainTab('Profile'))}
//         aria-label="Profile"
//       >
//         <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-gray-300">
//           <Image 
//             src="/images/testimonial-client-01 1.png" 
//             alt="Profile" 
//             width={24} 
//             height={24} 
//             className="w-full h-full object-cover rounded-full"
//           />
//         </div>
//         <span className="text-[10px] mt-1 text-[#20364D] text-center font-bold leading-[160%] capitalize">Profile</span>
//       </button>
//     </div>
//   );
// };

// export default BottomNavigation;



'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveMainTab } from '@/features/tenant/tenantprofile/slices/tenantSlice';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HomeIcon, ChatsIcon, PlayIcon,PercentageIcon } from './icons';
import { RootState } from '@/store/rootReducer';
import LogoIcon from './icons/Logo';

const BottomNavigation = () => {
  const dispatch = useDispatch();
  const activeMainTab = useSelector((state: RootState) => state.tenant.activeMainTab || 'Properties');
  const [prevTab, setPrevTab] = useState<string | null>(null);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  // Define the order of tabs for determining animation direction
  const tabOrder = ['Properties', 'Benefits', 'Play', 'Chats', 'Profile'];

  const handleTabChange = (tab: string) => {
    if (activeMainTab !== tab) {
      setPrevTab(activeMainTab);
      
      // Determine animation direction
      const currentIndex = tabOrder.indexOf(activeMainTab);
      const newIndex = tabOrder.indexOf(tab);
      
      if (currentIndex < newIndex) {
        setDirection('right');
      } else {
        setDirection('left');
      }
      
      dispatch(setActiveMainTab(tab));
    }
  };

  // Reset direction after animation completes
  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => {
        setDirection(null);
      }, 500); // Match this to your transition duration
      
      return () => clearTimeout(timer);
    }
  }, [direction]);

  // Get the appropriate background image based on active tab
  const getBackgroundImage = () => {
    switch (activeMainTab) {
      case 'Properties':
        return '/images/properties-bg.png';
      case 'Benefits':
        return '/images/benefits-bg.png';
      case 'Play':
        return '/images/play-bg.png';
      case 'Chats':
        return '/images/chats-bg.png';
      case 'Profile':
        return '/images/profile-bg.png';
      default:
        return '/images/bottom-nav-bg.png';
    }
  };

  return (
    <div 
      className="py-2 h-[60px] fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto flex justify-between items-center transition-all duration-300"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <button 
        className={` flex flex-col items-center text-gray-600 flex-1 relative transition-transform duration-600 ${
          activeMainTab === 'Properties' ? 'transform -translate-y-8' : ''
        }`}
        onClick={() => handleTabChange('Properties')}
        aria-label="Properties"
      >
        {activeMainTab === 'Properties' && (
          <div className={`absolute -z-10 w-12 h-12 bg-[#1a2c42] rounded-full opacity-90 transition-all duration-600 ${
            direction === 'left' ? 'animate-slide-from-right' : direction === 'right' ? 'animate-slide-from-left' : ''
          }`}></div>
        )}
        <HomeIcon className={activeMainTab === 'Properties' ? 'text-white' : ''} />
        <span className={`text-[10px] mt-1 text-center font-bold leading-[160%] capitalize ${
          activeMainTab === 'Properties' ? 'text-white' : 'text-[#20364D]'
        }`}>Properties</span>
      </button>
      
      <button 
        className={` flex flex-col items-center text-gray-600 flex-1 relative transition-transform duration-600 ${
          activeMainTab === 'Benefits' ? 'transform -translate-y-8' : ''
        }`}
        onClick={() => handleTabChange('Benefits')}
        aria-label="Benefits"
      >
        {activeMainTab === 'Benefits' && (
          <div className={`absolute -z-10 w-12 h-12 bg-[#1a2c42] rounded-full opacity-90 transition-all duration-600 ${
            direction === 'left' ? 'animate-slide-from-right' : direction === 'right' ? 'animate-slide-from-left' : ''
          }`}></div>
        )}
        <PercentageIcon height={30} width={30} className={activeMainTab === 'Benefits' ? 'text-white' : ''} />
        <span className={`text-[10px] mt-1 text-center font-bold leading-[160%] capitalize ${
          activeMainTab === 'Benefits' ? 'text-white' : 'text-[#20364D]'
        }`}>Benefits</span>
      </button>
      


      <button 
        className={` flex flex-col items-center text-gray-600 flex-1 relative transition-transform duration-600 ${
          activeMainTab === 'Play'  ? 'transform -translate-y-8' : ''
        }`}
        onClick={() => handleTabChange('Play')}
        aria-label="Chats"
      >
        {activeMainTab === 'Play' && (
          <div className={`absolute -z-10 w-12 h-12 bg-[#1a2c42] rounded-full opacity-90 transition-all duration-600 ${
            direction === 'left' ? 'animate-slide-from-right' : direction === 'right' ? 'animate-slide-from-left' : ''
          }`}></div>
        )}
        <LogoIcon height={25} width={30} className={activeMainTab === 'Play' ? 'text-white' : ''} />
        <span className={`text-[10px] mt-1 text-center font-bold leading-[160%] capitalize ${
          activeMainTab === 'Play' ? 'text-white' : 'text-[#20364D]'
        }`}>Reels</span>
      </button>
      
      <button 
        className={` flex flex-col items-center text-gray-600 flex-1 relative transition-transform duration-600 ${
          activeMainTab === 'Chats' ? 'transform -translate-y-8' : ''
        }`}
        onClick={() => handleTabChange('Chats')}
        aria-label="Chats"
      >
        {activeMainTab === 'Chats' && (
          <div className={`absolute -z-10 w-12 h-12 bg-[#1a2c42] rounded-full opacity-90 transition-all duration-600 ${
            direction === 'left' ? 'animate-slide-from-right' : direction === 'right' ? 'animate-slide-from-left' : ''
          }`}></div>
        )}
        <ChatsIcon className={activeMainTab === 'Chats' ? 'text-white' : ''} />
        <span className={`text-[10px] mt-1 text-center font-bold leading-[160%] capitalize ${
          activeMainTab === 'Chats' ? 'text-white' : 'text-[#20364D]'
        }`}>Chats</span>
      </button>
      
      <button 
        className={`flex flex-col items-center flex-1 relative transition-transform duration-600 ${
          activeMainTab === 'Profile' ? 'transform -translate-y-8' : ''
        }`}
        onClick={() => handleTabChange('Profile')}
        aria-label="Profile"
      >
        {activeMainTab === 'Profile' && (
          <div className={`absolute -z-10 w-12 h-12 bg-[#1a2c42] rounded-full opacity-90 transition-all duration-600 ${
            direction === 'left' ? 'animate-slide-from-right' : direction === 'right' ? 'animate-slide-from-left' : ''
          }`}></div>
        )}
        <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
          activeMainTab === 'Profile' ? 'border-white' : 'border-gray-300'
        }`}>
          <Image 
            src="/images/testimonial-client-01 1.png" 
            alt="Profile" 
            width={38} 
            height={38} 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className={`text-[10px] mt-1 text-center font-bold leading-[160%] capitalize ${
          activeMainTab === 'Profile' ? 'text-white' : 'text-[#20364D]'
        }`}>Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
