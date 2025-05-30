// "use client";
// import React from "react";
// import { ACIcon, ApplianceFinishesUpgradedIcon, AvailableDateIcon, BackIcon, BackSplashIcon, BasementDetailsIcon, BasementIncludedIcon, BedroomLayoutIcon, BedroomsIcon, CeilingHeightIcon, CentralHVACIcon, ClosetsIcon, CookTopIcon, CounterTopIcon, DenIcon, DishWasherIcon, EnSuitBathroomIcon, FlooringIcon, FloorsInUnitIcon, FurnaceIcon, HeatedFloorsIcon, IceMakerIcon, KitchenCounterTopIcon, MiceIcon, MicrowaveIcon, PropertyConditionIcon, RangeStoveIcon, RefrigeratorIcon, ShowerTypeIcon, SquareFeetIcon,UnitVentilationHoodIcon,UpGradedIcon,WasherDryerIcon,WaterHeaterIcon,WindowCoverinIcon } from "@/ui/icons"; // Ensure this import is correct
// import { useRouter } from "next/navigation";
// import InfoBlock from "./InfoBlock";
// import InfoBlockGridLayout from "./InfoBlockGridLayout";
// import Heading from "./Heading";
// import FirePalceIcon from "@/ui/icons/FirePlaceIcon";

// interface PropertyDetailsProps {
//   id: string;
// }

// const PropertyUnitFeatures: React.FC<PropertyDetailsProps> = ({ id }) => {
//   const router = useRouter();
//       const handleBackClick = () => {
//      router.push(`/tenant/properties/${id}`);
//     };
//   return (
//     <>
//       <div className="py-5.5 px-4 bg-[#FFF]">
//         {/* Header */}
//         <header className="flex flex-row items-center gap-[93px] mb-6.5 mt-4">
//           <div onClick={handleBackClick}>
//             <BackIcon />
//           </div>
//           <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px] capitalize">
//             Unit Feature
//           </h1>
//         </header>

//         {/* main content unit features */}

//         <div>
//           {/* general Information */}

//           <section>
//             <div>
//               <Heading text="General Information" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<AvailableDateIcon />}
//                       text1="Available Date"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<BasementDetailsIcon />}
//                       text1="Basement Details"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<SquareFeetIcon />}
//                       text1="Square Feet"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<PropertyConditionIcon />}
//                       text1="Property Condition"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<BasementIncludedIcon />}
//                       text1="Basement Included"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<FloorsInUnitIcon />}
//                       text1="Floors In Unit"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>

//             <div>
//               <Heading text="Common Area" className="text-[12px]" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<FirePalceIcon />}
//                       text1="Fireplace"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<FlooringIcon />}
//                       text1="Flooring"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<WindowCoverinIcon />}
//                       text1="Window Coverin"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<CeilingHeightIcon />}
//                       text1="Ceiling Height"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>

//           <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>

//           {/* Bedrooms */}
//           <section>
//             <div>
//               <Heading text="Bedrooms" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<BedroomsIcon />}
//                       text1="Bedrooms"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<ClosetsIcon />}
//                       text1="Closets"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<FirePalceIcon />}
//                       text1="Fireplace"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<BedroomLayoutIcon />}
//                       text1="Bedroom Layout"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<EnSuitBathroomIcon />}
//                       text1="En-Suite Bathrooms"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<DenIcon />}
//                       text1="Den (as bedroom)"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>
//           <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>

//           {/* Bathroom */}
//           <section>
//             <div>
//               <Heading text="Bathroom" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<EnSuitBathroomIcon />}
//                       text1="Bathroom"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<UpGradedIcon />}
//                       text1="Upgraded"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<ShowerTypeIcon />}
//                       text1="Shower Type"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<CounterTopIcon />}
//                       text1="Countertops"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>

//           {/* Laundary and havc */}
//           <section>
//             <div>
//               <Heading text="Laundery & HVAC" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<CentralHVACIcon />}
//                       text1="Central HVAC"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<HeatedFloorsIcon/>}
//                       text1="Heated Floors"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<ACIcon />}
//                       text1="Heating & A/C Unit"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<WasherDryerIcon/>}
//                       text1="Washer & Dryer"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>

//             <div>
//               <Heading text="Appliance Brands" className="text-[12px]" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<FurnaceIcon />}
//                       text1="Furnance/Boiler"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<WasherDryerIcon />}
//                       text1="Washer & Dryer"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<WaterHeaterIcon />}
//                       text1="Water Heater Tank"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<ACIcon />}
//                       text1="Air Conditioning"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>

//           <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>
//           {/* Kitchen */}
//           <section>
//             <div>
//               <Heading text="Kitchen" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<KitchenCounterTopIcon />}
//                       text1="Countertop"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<ApplianceFinishesUpgradedIcon />}
//                       text1="Upgraded"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<IceMakerIcon />}
//                       text1="Ice Maker"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<DishWasherIcon />}
//                       text1="Dishwasher-Included"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<ApplianceFinishesUpgradedIcon />}
//                       text1="Appliance Finishes"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<BackSplashIcon/>}
//                       text1="Backsplash"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>

//             <div>
//               <Heading text="Appliance Brands" className="text-[12px]" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<RefrigeratorIcon />}
//                       text1="Refrigerator"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<DishWasherIcon/>}
//                       text1="Dishwasher"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<CookTopIcon/>}
//                       text1="Cooktop"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<RangeStoveIcon />}
//                       text1="Range/Stove"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<MicrowaveIcon />}
//                       text1="Microwave"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<UnitVentilationHoodIcon />}
//                       text1="Ventilation Hood"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PropertyUnitFeatures;

//-------------------------------------------------------------------------------------------------------------------------------------------------

"use client";
import React from "react";
import { BackIcon } from "@/ui/icons";
import { useRouter } from "next/navigation";
import InfoBlock from "../components/InfoBlock";
import InfoBlockGridLayout from "../components/InfoBlockGridLayout";
import Heading from "../components/Heading";
import { unitFeaturesData } from "../hooks/useUnitFeatureData";

interface PropertyDetailsProps {
  id: string;
}

const PropertyUnitFeatures: React.FC<PropertyDetailsProps> = ({ id }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(`/tenant/properties/${id}`);
  };

  return (
    <>
      <div className="py-5.5 px-4">
        {/* Header */}
        <header className="flex flex-row items-center gap-[93px] mb-6.5 mt-4">
          <div onClick={handleBackClick}>
            <BackIcon />
          </div>
          <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px] capitalize">
            Unit Feature
          </h1>
        </header>

        {/* main content unit features */}
        <div>
          {unitFeaturesData.map((section, sectionIndex) => (
            <section key={`section-${sectionIndex}`}>
              <div>
                <Heading text={section.title} />
                <InfoBlockGridLayout
                  leftSection={
                    <>
                      {section.leftItems.map((item, index) => (
                        <InfoBlock
                          key={`left-${index}`}
                          Icon={item.Icon}
                          text1={item.text1}
                          text2={item.text2}
                        />
                      ))}
                    </>
                  }
                  rightSection={
                    <>
                      {section.rightItems.map((item, index) => (
                        <InfoBlock
                          key={`right-${index}`}
                          Icon={item.Icon}
                          text1={item.text1}
                          text2={item.text2}
                        />
                      ))}
                    </>
                  }
                />
              </div>

              {/* Render subsections if they exist */}
              {section.subsections?.map((subsection, subIndex) => (
                <div key={`subsection-${sectionIndex}-${subIndex}`}>
                  <Heading text={subsection.title} className="text-[12px]" />
                  <InfoBlockGridLayout
                    leftSection={
                      <>
                        {subsection.leftItems.map((item, index) => (
                          <InfoBlock
                            key={`sub-left-${index}`}
                            Icon={item.Icon}
                            text1={item.text1}
                            text2={item.text2}
                          />
                        ))}
                      </>
                    }
                    rightSection={
                      <>
                        {subsection.rightItems.map((item, index) => (
                          <InfoBlock
                            key={`sub-right-${index}`}
                            Icon={item.Icon}
                            text1={item.text1}
                            text2={item.text2}
                          />
                        ))}
                      </>
                    }
                  />
                </div>
              ))}

              {/* Add divider between sections (except after the last section) */}
              {sectionIndex < unitFeaturesData.length - 1 && (
                <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyUnitFeatures;
