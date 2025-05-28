// components/PropertyCard.tsx
import React from 'react';
import Image from 'next/image';
import { MainInfoContainer } from '../styles/components/propertyCardStyles';

interface ImageSliderProps {
    image: string;
    text?: string;
    
}

const FooterImageSlider: React.FC<ImageSliderProps> = ({image,text}) => {
  return (
      <div className="w-[25.45vw] h-[11.74vh]  relative flex-shrink-0 scrollbar-hide">
          <Image src={image} alt='' width={100} height={100} className="w-full h-full object-cover rounded-[8px]" />
          <MainInfoContainer className="w-[25.45vw] h-[1.72vh] absolute  bottom-0 rounded-b-[8px] flex items-center justify-center text-[#FFF] font-bold text-[10px] capitalize">{text}</MainInfoContainer>
            </div>
  );
};

export default FooterImageSlider;
