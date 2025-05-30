"use client";
import React from "react";
import { BackIcon } from "@/ui/icons";
import Image from 'next/image';
import { useRouter } from "next/navigation";


interface VideoOfPropertyProps {
  id: string;
}

const VideoOfProperty: React.FC<VideoOfPropertyProps> = ({ id }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(`/tenant/properties/${id}/photos-videos`);
  };

  return (

      <div className="bg-black h-[100vh]">
        <div className="py-5.5 px-4"> 
                    <header className="flex flex-row items-center gap-[115px]  mt-4 mb-30">
                              <div onClick={handleBackClick}>
                                <BackIcon />
                              </div>
                              <h1 className="text-[#FFF] text-[18px] font-bold leading-[18px] capitalize">
                                Video
                              </h1>
                            </header>
                </div>
                <div className="w-[100vw] h-[46vh] bg-amber-300"></div>
          </div>

  );
};

export default VideoOfProperty;