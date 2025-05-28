"use client";
import React from "react";
import { BackIcon } from "@/ui/icons";
import Image from 'next/image';
import { useRouter } from "next/navigation";


interface PhotoOfPropertyProps {
  id: string;
}

const PhotoOfProperty: React.FC<PhotoOfPropertyProps> = ({ id }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(`/tenant/properties/${id}/photos-videos`);
  };

  return (
      <div className="bg-black h-[100vh]"> 
        <div className="py-5.5 px-4"> 
          <header className="flex flex-row items-center gap-29  mt-4 mb-30">
                    <div onClick={handleBackClick}>
                      <BackIcon />
                    </div>
                    <h1 className="text-[#FFF] text-[18px] font-bold leading-[18px] capitalize">
                      Photos
                    </h1>
                  </header>
      </div>
      <div className="w-[100vw] h-[43.66vh] bg-amber-300 relative">
        <span className="absolute bg-[rgba(0,29,61,0.50)] rounded-[16px] backdrop-blur-[7.5px] py-1.5 px-3 text-[#FFF] text-[12px] font-bold bottom-4 left-34">Pantry & Storage</span>
      </div>
      </div>
  );
};

export default PhotoOfProperty;
