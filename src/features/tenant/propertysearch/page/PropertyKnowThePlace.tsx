"use client";
import { BackIcon} from "@/ui/icons";
import React from "react";
import { useRouter } from 'next/navigation';

interface PropertyKnowThePlaceProps {
  id: string;
}

const PropertyKnowThePlace: React.FC<PropertyKnowThePlaceProps> = ({ id }) => {
   const router = useRouter();
    const handleBackClick = () => {
   router.push(`/tenant/properties/${id}`);
//    router.back();
  };
    return (
    <>
      <div className="pt-5.5 px-4 bg-[#FFF] h-[100vh]">
        {/* Header */}
        <header className="flex flex-row items-center gap-[70px] ml-[-2px] mb-6.5 mt-4">
          <div onClick={handleBackClick}>
            <BackIcon />
          </div>
          <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px] capitalize">
            Know The Place
          </h1>
        </header>
              {/* main content Property know the place */}
              <div className="text-[14px] leading-[20px] text=[#000]">
                  <p className="first-letter:capitalize lowercase">
  welcome to this expansive 2-bedroom, 2-bath residence in a stunning bay-fronted limestone townhouse Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum architecto quisquam accusamus assumenda eaque alias adipisci beatae! Impedit, laudantium..

</p>
                  <p className="first-letter:capitalize lowercase">
  welcome to this expansive 2-bedroom, 2-bath residence in a stunning bay-fronted limestone townhouse Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum architecto quisquam accusamus assumenda eaque alias adipisci beatae! Impedit, laudantium..

</p>
                  <p className="first-letter:capitalize lowercase">
  welcome to this expansive 2-bedroom, 2-bath residence in a stunning bay-fronted limestone townhouse Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum architecto quisquam accusamus assumenda eaque alias adipisci beatae! Impedit, laudantium..

</p>

              </div>
      </div>
    </>
  );
};

export default PropertyKnowThePlace;
