"use client";
import React, { useState} from "react";
import { BackIcon } from "@/ui/icons";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { MainInfoContainer } from "../styles/components/propertyCardStyles";
import FooterImageSlider from "../components/FooterImageSlider";
import { PhotoVideoData } from "../hooks/usePhotoVideoData";
import {VideoPlayIcon} from "@/ui/icons";
import ExteriorImageSection from "../components/ExteriorImageSection";
import BathroomImageSection from "../components/BathroomImageSection";
import KitchenImageSection from "../components/KitchenImageSection";
import LivingImageSection from "../components/LivingImageSection";
import {kitchenImageData,exteriorImageData,livingImageData,bathroomImageData} from "../hooks/useImagesData";

interface PhotoVideosProps {
  id: string;
}

const PhotosAndVideos: React.FC<PhotoVideosProps> = ({ id }) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>('mainImage');

  const handleBackClick = () => {
    router.push(`/tenant/properties/${id}`);
  };

  const handleNavigateVideo = () => {
    router.push(`/tenant/properties/${id}/video`);
  }
  const handleNavigatePhoto = () => {
    router.push(`/tenant/properties/${id}/photo`);
  }
 
  return (
    <>
      <div className="py-5.5 px-4">
        {/* Header */}
        <header className="flex flex-row items-center gap-[93px] mb-6.5 mt-4">
          <div onClick={handleBackClick}>
            <BackIcon />
          </div>
          <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px] capitalize">
            Photos & Videos
          </h1>
        </header>

        {/* Main Content */}
        <div id="mainImage" className="mt-7.5 relative w-[91.86vw] h-[26.41vh]" onClick={handleNavigateVideo} >
          <Image src="/images/exterior.png" alt="Exterior" width={1000} height={1000} className="w-full h-full " />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><VideoPlayIcon width={40} height={40}/></span>
        </div>    

        <div className="mt-6">
          <section id="exterior" className="mt-6" onClick={handleNavigatePhoto}>
            <h1 className="text-[#001D3D] text-[16px] font-bold capitalize mb-5">Exterior</h1>
            <ExteriorImageSection images={exteriorImageData}/>
          </section>       
          <section id="livingroom" className="mt-6">
            <h1 className="text-[#001D3D] text-[16px] font-bold capitalize mb-5">Living Room</h1>
            <LivingImageSection images={livingImageData}/>
          </section> 
          <section id="kitchen" className="mt-6">
          <h1  className="text-[#001D3D] text-[16px] font-bold capitalize mb-5">Kitchen</h1>
            <KitchenImageSection images={kitchenImageData}/>
          </section> 
          <section id="bathroom" className="mt-6 mb-28">
          <h1  className="text-[#001D3D] text-[16px] font-bold capitalize mb-5">Bathroom</h1>
            <BathroomImageSection images={bathroomImageData} />
          </section> 
        </div>

       
  
        {/* Footer */}
            <footer className="h-[14.08vh]  fixed bottom-0 left-0 right-0 bg-[rgba(32,54,77,0.5)] backdrop-blur-[5px] ">
          
          <a href='#mainImage'>
            <div className="h-[14.08vh] bg-[rgba(32,54,77,0.5)] backdrop-blur-[7.5px] w-[32.06vw] fixed left-0  bottom-0 py-2.5 pl-4 pr-2.5 float-left">
            <div className={`w-[25.45vw] h-[11.74vh]  relative`}>
              <Image src="/images/exterior.png" alt="" width={100} height={100} className="rounded-[8px]" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><VideoPlayIcon/></span>
            <MainInfoContainer className="w-[25.45vw] h-[1.72vh] absolute  bottom-0 rounded-b-[8px] flex items-center justify-center text-[#FFF] font-bold text-[10px] capitalize">Video</MainInfoContainer>
            </div>
          </div>
        </a>

          <div className="h-[14.08vh] w-[67.94vw] flex flex-row   gap-2.5 py-2.5  overflow-auto float-right pr-3 pl-1">
                   {PhotoVideoData.map((item) => (
                     <a href={item.id} onClick={() => setActiveSection(item.id)}
    className={`${
      activeSection === item.id ? 'border-[1px] border-[#FFF] rounded-[8px]' : ''
    }`}><FooterImageSlider  image={item.image} text={item.text} /></a>
                  ))}
              </div>
        </footer>
        </div>
    </>
  );
};

export default PhotosAndVideos;
