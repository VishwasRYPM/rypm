// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
//       <h1 className="text-3xl font-bold mb-4">Property Management App</h1>
//       <p className="mb-6">Welcome to our property management platform</p>
      
//       <Link 
//         href="/tenant/dashboard" 
//         className="px-6 py-3 bg-[#1a2c42] text-white rounded-lg font-medium"
//       >
//         Go to Dashboard
//       </Link>

//       <Link 
//         href="/tenant/PropertySearch" 
//         className="px-6 py-3 bg-[#1a2c42] text-white rounded-lg font-medium"
//       >
//         Go to Property Search
//       </Link>
//     </div>
//   );
// }



"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LogoIcon from '@/ui/icons/Logo';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // ✅ Small delay for branding visibility, then redirect
    const timer = setTimeout(() => {
      router.push('/tenant/PropertySearch');
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#001D3D] animate-fade-in">
      {/* ✅ Logo Icon */}
      <LogoIcon 
        width={155} 
        height={186} 
        className="mb-6"
      />
      
      {/* ✅ RYPM Text */}
      <h1 className="text-white text-[32px] font-bold">
        RYPM
      </h1>
    </div>
  );
}

