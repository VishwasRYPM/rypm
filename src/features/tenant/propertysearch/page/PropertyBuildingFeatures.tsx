// "use client";
// import { AddressIcon, AllTimeConciergeIcon, BackIcon, BarbequeAreaIcon, BasketballIcon, BicycleStorageIcon, BiliordsRoomIcon, BowlingAlleyIcon, BuzzerSystemIcon, CabansIcon, CategoryIcon, ChildPlayAreaIcon, CityIcon, CondoCoporationIcon, CountryIcon, DateOfConstructionIcon, ElevatorsIcon, GamesRoomIcon, GolfRangeIcon, GuestSuitsIcon, GymIcon, IndoorpoolIcon, KeylessEntryIcon, LaundaryIcon, LibraryIcon, MeetingRoomIcon, MiceIcon, MovieRoomIcon, NumberFloorsIcon, OnsiteStaffIcon, OutDoorPoolIcon, ParkingAcIcon, ParkingBathroomIcon, ParkingCentralHVACIcon, ParkingCounterTopIcon, ParkingHeatedFloorIcon, ParkingShowertypeIcon, ParkingUpgradedIcon, PartyRoomIcon, PatioIcon, PetSpaIcon, PianoLaungeIcon, PostalCodeIcon, ProvinceIcon, RecreationalOutdoorpoolIcon, RecRoomIcon, RoofTopPatioIcon, SaunaIcon, SecurityOnsiteIcon, SteamRoomIcon, TennisCourtIcon, VentilationHoodOneIcon, VentilationHoodTwoIcon, WheelChairIcon, WhirlpoolIcon, YogaRoomIcon} from "@/ui/icons";
// import React from "react";
// import InfoBlock from "./InfoBlock";
// import InfoBlockGridLayout from "./InfoBlockGridLayout";
// import Heading from "./Heading";
// import { useRouter } from 'next/navigation';
// import LawnSnowIcon from "@/ui/icons/LawnSnowIcon";

// interface PropertyDetailsProps {
//   id: string;
// }

// const PropertyBuildingFeatures: React.FC<PropertyDetailsProps> = ({ id }) => {
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
//             Building Feature
//           </h1>
//         </header>
//         {/* main content unit features */}
//         <div>
//           {/* Property information */}
//           <section>
//             <div>
//               <Heading text="Property Information" className="" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<AddressIcon />}
//                       text1="Address"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<ProvinceIcon />}
//                       text1="Province"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<PostalCodeIcon />}
//                       text1="Postal Code/Zip Code"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<DateOfConstructionIcon />}
//                       text1="Date of Construction"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<NumberFloorsIcon />}
//                       text1="Number of Floors"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<CityIcon />}
//                       text1="City"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<CountryIcon />}
//                       text1="Country"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<CategoryIcon />}
//                       text1="Category"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<CondoCoporationIcon />}
//                       text1="Condo Corporation"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<NumberFloorsIcon />}
//                       text1="Building Managment"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>

//           <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>

//           {/* Common area aminities */}
//           <section>
//             <div>
//               <Heading text="Common Area  Amenities" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<KeylessEntryIcon/>}
//                       text1="Keyless entry"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<OnsiteStaffIcon/>}
//                       text1="Onsite Staff"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<SecurityOnsiteIcon/>}
//                       text1="Security Onsite"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<BicycleStorageIcon />}
//                       text1="Bicycle Storage"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<GuestSuitsIcon />}
//                       text1="Guest Suites"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<LawnSnowIcon />}
//                       text1="Lawn & snow"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<BuzzerSystemIcon />}
//                       text1="Buzzer System"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<ElevatorsIcon />}
//                       text1="Elevator"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<AllTimeConciergeIcon />}
//                       text1="24/7 Concierge Service"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<WheelChairIcon />}
//                       text1="Wheelchair Access"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<LaundaryIcon />}
//                       text1="Laundry Facilities"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<PetSpaIcon/>}
//                       text1="Pet Spa"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>

//           <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>

//           {/*Outdor Aminities  */}
//           <section>
//             <div>
//               <Heading text="Outdoor Amenities" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<BarbequeAreaIcon/>}
//                       text1="Barbecue Area"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<RoofTopPatioIcon />}
//                       text1="Rooftop Patio"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<OutDoorPoolIcon />}
//                       text1="Outdoor Pool"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<TennisCourtIcon />}
//                       text1="Tennis Court"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<PatioIcon/>}
//                       text1="Patio"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<ChildPlayAreaIcon/>}
//                       text1="Child Play Area"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<CabansIcon/>}
//                       text1="Cabanas"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>
//           <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>
//           {/* Parking & Transport */}
//           <section>
//             <div>
//               <Heading text="Parking & Transport" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<ParkingBathroomIcon/>}
//                       text1="Bathrooms"
//                       text2="Sep,01,2025"
//                     />
//                     <InfoBlock
//                       Icon={<ParkingUpgradedIcon/>}
//                       text1="Upgraded"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<ParkingCentralHVACIcon />}
//                       text1="Central HAVC"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<ParkingHeatedFloorIcon/>}
//                       text1="Heated Floors"
//                       text2="$1200"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<ParkingShowertypeIcon />}
//                       text1="Shower Type"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<ParkingCounterTopIcon />}
//                       text1="Countertops"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<ParkingAcIcon/>}
//                       text1="Heating & A/C Unit"
//                       text2="Yes"
//                     />
//                   </>
//                 }
//               />
//             </div>
//           </section>

//           <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>
//           {/* Recreattional Amenities */}
//           <section>
//             <div>
//               <Heading text="Recreational Amenities" />
//               <InfoBlockGridLayout
//                 leftSection={
//                   <>
//                     <InfoBlock
//                       Icon={<MeetingRoomIcon/>}
//                       text1="Meeting Room"
//                       text2="$1200"
//                     />
//                     <InfoBlock Icon={<GymIcon/>} text1="Gym" text2="$1200" />
//                     <InfoBlock
//                       Icon={<GamesRoomIcon />}
//                       text1="Games Room"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<LibraryIcon />}
//                       text1="Library"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<BiliordsRoomIcon/>}
//                       text1="Biliards room"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<SteamRoomIcon/>}
//                       text1="Steam Room"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<BasketballIcon />}
//                       text1="Basketball"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<IndoorpoolIcon />}
//                       text1="Indoor Pool"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<PianoLaungeIcon />}
//                       text1="Piano Lounge"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<ChildPlayAreaIcon />}
//                       text1="Cild Play Area"
//                       text2="$1200"
//                     />
//                     <InfoBlock
//                       Icon={<GolfRangeIcon />}
//                       text1="Golf Range"
//                       text2="Sep,01,2025"
//                     />
//                   </>
//                 }
//                 rightSection={
//                   <>
//                     <InfoBlock
//                       Icon={<YogaRoomIcon />}
//                       text1="Yoga/Pilates Room"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<RecRoomIcon />}
//                       text1="Rec Room"
//                       text2="12 months"
//                     />
//                     <InfoBlock
//                       Icon={<PartyRoomIcon/>}
//                       text1="Party Room"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<MovieRoomIcon/>}
//                       text1="Movie Room"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<WhirlpoolIcon/>}
//                       text1="Whirlpool"
//                       text2="Yes"
//                     />
//                     <InfoBlock Icon={<SaunaIcon/>} text1="Sauna" text2="Yes" />
//                     <InfoBlock
//                       Icon={<RecreationalOutdoorpoolIcon/>}
//                       text1="Outdoor Pool"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<VentilationHoodOneIcon/>}
//                       text1="ventilation Hood"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<BowlingAlleyIcon />}
//                       text1="Bowling Alley"
//                       text2="Yes"
//                     />
//                     <InfoBlock
//                       Icon={<VentilationHoodTwoIcon/>}
//                       text1="Ventilation hood"
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

// export default PropertyBuildingFeatures;

//----------------------------------------------------------------------------------------------------------------------------

"use client";
import React from "react";
import { BackIcon } from "@/ui/icons";
import { useRouter } from "next/navigation";
import InfoBlock from "../components/InfoBlock";
import InfoBlockGridLayout from "../components/InfoBlockGridLayout";
import Heading from "../components/Heading";
import { buildingFeaturesData } from "../hooks/useBulidingFeatureData";

interface PropertyDetailsProps {
  id: string;
}

const PropertyBuildingFeatures: React.FC<PropertyDetailsProps> = ({ id }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(`/tenant/properties/${id}`);
  };

  return (
    <>
      <div className="py-5.5 px-4 bg-[#FFF]">
        {/* Header */}
        <header className="flex flex-row items-center gap-[93px] mb-6.5 mt-4">
          <div onClick={handleBackClick}>
            <BackIcon />
          </div>
          <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px] capitalize">
            Building Feature
          </h1>
        </header>

        {/* main content building features */}
        <div>
          {buildingFeaturesData.map((section, sectionIndex) => (
            <React.Fragment key={`section-${sectionIndex}`}>
              <section>
                <div>
                  <Heading text={section.title} className="" />
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
              </section>

              {/* Add divider between sections (except after the last section) */}
              {sectionIndex < buildingFeaturesData.length - 1 && (
                <div className="w-[361px] h-[1.03px] bg-[#F8F9FB]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default PropertyBuildingFeatures;
