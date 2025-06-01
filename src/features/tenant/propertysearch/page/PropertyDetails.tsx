"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ShareIcon,
  HeartUnFillIcon,
  BackIcon,
  GalleryIcon,
  VideoIcon,
  VerifiedTickIcon,
  BedroomsDenIcon,
  BathroomFillIcon,
  ParkingIcon,
  MiceIcon,
  HousesColorDistributionIcon,
  BasementCorolDistributionIcon,
  CondosColorDistributionIcon,
  ApartmentsColorDistributionIcon,
  LocationPropertyDetailsIcon,
  AvailableDateIcon,
  PropertyConditionIcon,
  BasementDetailsIcon,
  BasementIncludedIcon,
  SquareFeetIcon,
  FloorsInUnitIcon,
  WindowCoverinIcon,
  FlooringIcon,
  CeilingHeightIcon,
  AddressIcon,
  ProvinceIcon,
  PostalCodeIcon,
  DateOfConstructionIcon,
  NumberFloorsIcon,
  CityIcon,
  CountryIcon,
  CategoryIcon,
  CondoCoporationIcon,
} from "@/ui/icons";
import { usePropertyData } from "../hooks/usePropertyData";
import {
  ActionButtonsContainer,
  AmenitiesContainer,
  AmenityItem,
  BackButton,
  CountText,
  MediaContainer,
  MediaCountContainer,
  PhotoCountBox,
  VideoCountBox,
} from "../styles/components/propertyCardStyles";
import Heading from "../components/Heading";
import InfoBlockGridLayout from "../components/InfoBlockGridLayout";
import InfoBlock from "../components/InfoBlock";
import FirePalceIcon from "@/ui/icons/FirePlaceIcon";

import SliderImage from "../components/SliderImage";
import WhatsNearByButtonContainer from "../components/WhatsNearByButtonContainer";
import SplitAddress from "../components/SplitAddress";


interface PropertyDetailsProps {
  id: string;
  onClick?: () => void;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ id, onClick }) => {
  const router = useRouter();
  const { property } = usePropertyData(id);
  // const {property,isLoading,error} = usePropertyData(id);
  const { properties } = usePropertyData();


  const handleNavigateUnitFeature = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/tenant/properties/${id}/unit-features`);
    }
  };

  const handleNavigateKnowThePlace = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/tenant/properties/${id}/know-the-place`);
    }
  };

  const handleNaviagteBuildingFeature = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/tenant/properties/${id}/building-features`);
    }
  };

  const handleNaviagtePropertyMapLocalInfo = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/tenant/properties/${id}/map-local-info`);
    }
  };

  const handleNavigatePhotosAndVideos = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/tenant/properties/${id}/photos-videos`);
    }
  };

  const handleBackClick = () => {
    router.push(`/tenant/PropertySearch`);
  };

  const handleShareClick = () => {
  };

  const handleFavoriteClick = () => {
  };

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col w-full h-screen bg-white">
  //       <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
  //         <button
  //           onClick={handleBackClick}
  //           className="p-2 rounded-full hover:bg-gray-100"
  //         >
  //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  //           </svg>
  //         </button>
  //         <h2 className="text-lg font-semibold">Loading...</h2>
  //         <div className="w-6"></div> {/* Spacer */}
  //       </div>
  //       <div className="flex justify-center items-center flex-1">
  //         <p>Loading property details...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error || !property) {
  //   return (
  //     <div className="flex flex-col w-full h-screen bg-white">
  //       <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
  //         <button
  //           onClick={handleBackClick}
  //           className="p-2 rounded-full hover:bg-gray-100"
  //         >
  //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  //           </svg>
  //         </button>
  //         <h2 className="text-lg font-semibold">Error</h2>
  //         <div className="w-6"></div> {/* Spacer */}
  //       </div>
  //       <div className="flex justify-center items-center flex-1">
  //         <p className="text-red-500">
  //           {error || 'Property not found'}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className=" w-fit  hide-scrollbar">
        <MediaContainer height="46.13vh">
          <Image
            src="/images/modern house.png"
            alt="Profile"
            width={393}
            height={14}
            className="w-full h-full object-cover"
            onClick={handleNavigatePhotosAndVideos}
          />

          <BackButton>
            <div onClick={handleBackClick}>
              <BackIcon height={30} width={30} />
            </div>
          </BackButton>
          <ActionButtonsContainer>
            <div onClick={handleShareClick}>
              <ShareIcon height={30} width={30} />
            </div>
            <div onClick={handleFavoriteClick}>
              <HeartUnFillIcon />
            </div>
          </ActionButtonsContainer>

          <MediaCountContainer>
            <PhotoCountBox>
              <GalleryIcon
                height={14}
                width={14}
                className="mr-0.5 text-white"
              />
              <CountText variant="body2">{property?.photoCount}</CountText>
            </PhotoCountBox>
            <VideoCountBox>
              <VideoIcon width={14} height={14} className="mr-1 text-white" />
              <CountText variant="body2">{property?.videoCount }</CountText>
            </VideoCountBox>
          </MediaCountContainer>
        </MediaContainer>
      
        <div></div>
        {/* First Details Content */}
        <div className="mt-6 px-4">
          {/* Price */}
          <h1 className="text-[#001D3D] text-[20px] font-bold capitalize">{property?.price}/<span className="text-[14px]">Month</span></h1>
          {/* Address */}
          <div className=" mt-4 flex flex-row gap-1.5 items-start">
            <span className="mt-[7px]">
              <LocationPropertyDetailsIcon />
            </span>
            <div className="text-[#001D3D] text-[18px] font-bold leading-[25px] capitalize w-[344.867px]">
              <SplitAddress fullAddress={property?.address} />
            </div>
          </div>

          {/* Three Feature */}
          <div className="flex flex-row mt-4 justify-start">
            <span className="flex flex-row">
              <BedroomsDenIcon />
              <p className="text-[12px] capitalize text-[#001D3D] font-normal ml-1 mr-2">
                3 Bedrooms + Den
              </p>
            </span>
            <span className="flex flex-row">
              <BathroomFillIcon />
              <p className="text-[12px] capitalize text-[#001D3D] font-normal ml-1 mr-2">
                {" "}
                2.5 Bathrooms
              </p>
            </span>
            <span className="flex flex-row">
              <ParkingIcon />
              <p className="text-[12px] capitalize text-[#001D3D] font-normal ml-1 mr-2">
                {" "}
                2 Parking
              </p>
            </span>
          </div>

          {/* Unit Features */}
          <div className="mt-6">
            <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px]">
              Unit Features
            </h1>
            <div className="mt-5 rounded-[16px] border-[1.5px]  border-[#F8F9FB]">
              <div className="pl-5 relative">
                <div>
                  <InfoBlockGridLayout
                    leftSection={
                      <>
                        <InfoBlock
                          Icon={<AvailableDateIcon />}
                          text1="Available Date"
                          text2="Sep,01,2025"
                        />
                        <InfoBlock
                          Icon={<BasementDetailsIcon />}
                          text1="Basement Details"
                          text2="$1200"
                        />
                        <InfoBlock
                          Icon={<SquareFeetIcon />}
                          text1="Square Feet"
                          text2="$1200"
                        />
                      </>
                    }
                    rightSection={
                      <>
                        <InfoBlock
                          Icon={<PropertyConditionIcon />}
                          text1="Property Condition"
                          text2="12 months"
                        />
                        <InfoBlock
                          Icon={<BasementIncludedIcon />}
                          text1="Basement Included"
                          text2="Yes"
                        />
                        <InfoBlock
                          Icon={<FloorsInUnitIcon />}
                          text1="Floors In Unit"
                          text2="Yes"
                        />
                      </>
                    }
                  />
                </div>

                <div className="relative">
                  <Heading text="Common Area" className="text-[12px]" />
                  <InfoBlockGridLayout
                    leftSection={
                      <>
                        <InfoBlock
                          Icon={<FirePalceIcon />}
                          text1="Fireplace"
                          text2="Sep,01,2025"
                        />
                        <InfoBlock
                          Icon={<FlooringIcon />}
                          text1="Flooring"
                          text2="$1200"
                        />
                      </>
                    }
                    rightSection={
                      <>
                        <InfoBlock
                          Icon={<WindowCoverinIcon />}
                          text1="Window Coverin"
                          text2="12 months"
                        />
                        <InfoBlock
                          Icon={<CeilingHeightIcon />}
                          text1="Ceiling Height"
                          text2="Yes"
                        />
                      </>
                    }
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_-41.89%,_#fff_100%)] h-16"></div>
                </div>
              </div>

              <div className="text-[#001D3D] text-[14px] font-bold capitalize w-[100%] py-3.5 flex justify-center">
                <button onClick={handleNavigateUnitFeature}>Show More</button>
              </div>
            </div>
          </div>

          {/* Building Features */}
          <div className="mt-6">
            <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px]">
              Building Feature
            </h1>
            <div className="mt-5 rounded-[16px] border-[1.5px] border-[#F8F9FB]">
              <div className="pl-5 relative">
                <InfoBlockGridLayout
                  leftSection={
                    <>
                      <InfoBlock
                        Icon={<AddressIcon />}
                        text1="Address"
                        text2="Sep,01,2025"
                      />
                      <InfoBlock
                        Icon={<ProvinceIcon />}
                        text1="Province"
                        text2="$1200"
                      />
                      <InfoBlock
                        Icon={<PostalCodeIcon />}
                        text1="Postal Code/Zip Code"
                        text2="$1200"
                      />
                      <InfoBlock
                        Icon={<DateOfConstructionIcon />}
                        text1="Date of Construction"
                        text2="$1200"
                      />
                      <InfoBlock
                        Icon={<NumberFloorsIcon />}
                        text1="Number of Floors"
                        text2="$1200"
                      />
                    </>
                  }
                  rightSection={
                    <>
                      <InfoBlock
                        Icon={<CityIcon />}
                        text1="City"
                        text2="12 months"
                      />
                      <InfoBlock
                        Icon={<CountryIcon />}
                        text1="Country"
                        text2="12 months"
                      />
                      <InfoBlock
                        Icon={<CategoryIcon />}
                        text1="Category"
                        text2="Yes"
                      />
                      <InfoBlock
                        Icon={<CondoCoporationIcon />}
                        text1="Condo Corporation"
                        text2="Yes"
                      />
                      <InfoBlock
                        Icon={<NumberFloorsIcon />}
                        text1="Building Managment"
                        text2="Yes"
                      />
                    </>
                  }
                />{" "}
                <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_-41.89%,_#fff_100%)] h-16"></div>
              </div>
              <div className="text-[#001D3D] text-[14px] font-bold capitalize w-[100%] flex justify-center py-3.5">
                <button onClick={handleNaviagteBuildingFeature}>
                  Show More
                </button>
              </div>
            </div>
          </div>

          {/* Whats Near by */}
          <div className="mt-6">
            <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px]">
              What's Nearby
            </h1>
              <WhatsNearByButtonContainer/>
            {/* map */}
            <div>
              <div>Map</div>
              <div className="text-[#001D3D] text-[14px] font-bold capitalize w-[100%] py-3.5 flex justify-center">
                <button onClick={handleNaviagtePropertyMapLocalInfo}>
                  View on map
                </button>
              </div>
            </div>
          </div>

          {/* Know the place */}
          <div className="mt-6">
            <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px]">
              Know The Place
            </h1>
            <div className="mt-5">
              <div className="relative">
                <p className="text-[14px]">
                  Welcome to this expansive 2-bedroom, 2-bath residence in a
                  stunning bay-fronted limestone townhouse, ideally situated on
                  the border of Clinton Hill and Bedford-Stuyvesant.
                </p>
                <p className="text-[14px]">
                  Step into a beautifully designed, south-facing kitchen, bathed
                  in natural sunlight and equipped with top-of-the-line
                  stainless steel appliances, ample counter space, and generous
                  storage—perfect for everyday living and entertaining.
                </p>
                <p className="text-[14px]">
                  At the front of the unit, you'll find two spacious,
                  light-filled bedrooms. The primary suite features a luxurious
                  en-suite bathroom complete with a double vanity. Additional
                  conveniences include an in-unit washer and dryer, with options
                  for a private roof terrace—ideal for relaxing or hosting
                  guests.
                </p>
                <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_-41.89%,_#fff_100%)] h-16"></div>
              </div>
              <button
                className="text-[#001D3D] text-[14px] font-bold capitalize w-[100%] py-3.5 flex justify-center"
                onClick={handleNavigateKnowThePlace}
              >
                Show More
              </button>
            </div>
            <h1 className="text-[#001D3D] mt-6 text-[18px] font-bold leading-[18px]">
              Similar units
            </h1>
          </div>
        </div>

        {/*Second Image slider */}
        <div className="mt-5 px-4 flex flex-row  gap-2.5 w-[95.93vw] overflow-auto scroll-smooth scrollbar-hide">
          {properties.map((properties) => (
            <SliderImage
              key={properties.id}
              image={properties.images[0]}
              price={properties.price}
              city={properties.city}
              country={properties.country}
              beds={properties.bedCount}
              baths={properties.bathCount}
              onShare={handleShareClick}
              onFavorite={handleFavoriteClick}
            />
          ))}
        </div>

        {/* Third Detials content */}
        <div className="mb-24  px-4 mt-6  ">
          {/* Median leased Price and average Days on */}
          <div className="mt-5">
            <div className="text-[#001D3D] text-[18px] font-bold leading-[25px] capitalize">
              Median Leased Price & Average Days On Market
            </div>

            <div className="mt-5 mb-5 text-[#001D3D] text-[14px] capitalize">
              Pickering / Village East / Condo Townhouse
            </div>
            <div>
              <Image
                src="/images/graph.png"
                alt="Graph"
                width={400}
                height={400}
                className=""
              />
            </div>
            <div className="flex flex-col p-2.5 items-start gap-2 w-[361px] rounded-[16px] bg-[#F8F9FB]">
              <h2 className="text-[#3A9A76] text-[14px] font-bold capitalize">
                Day's <span className="lowercase">on Market</span>
              </h2>
              <p className="text-[#001D3D] text-[12px] leading-[16px] capitalize">
                about the day's on market. Lorem ipsum dolor sit amet
                consectetur. Neque nullam risus lectus{" "}
              </p>
            </div>

            <div className=" flex flex-col p-2.5 mt-2.5 items-start gap-2 w-[361px] rounded-[16px] bg-[#F8F9FB]">
              <h2 className="text-[#001D3D] text-[14px] font-bold capitalize">
                Median <span className="lowercase">Price</span>
              </h2>
              <p className="text-[#001D3D] text-[12px] leading-[16px] capitalize">
                about median price. Lorem ipsum dolor sit amet consectetur.
                Neque nullam risus lectus{" "}
              </p>
            </div>
          </div>

          {/* Property Type Distributon */}
          <div className="mt-6">
            <h1 className="text-[#001D3D] text-[18px] font-bold leading-[18px]">
              Property Type Distribution
            </h1>
            <div className="mt-5 text-[#001D3D] text-[14px] capitalize mb-4">
              Pickering / Village East / Condo Townhouse
            </div>
            <div>
              <Image
                src="/images/colors.png"
                alt="Graph"
                width={400}
                height={400}
                className=""
              />
            </div>
            <div className="mt-7 flex flex-row justify-between ">
              <div className="flex flex-row items-center gap-1">
                <HousesColorDistributionIcon />
                <p className="text-[#001D3D] text-[14px] capitalize leading-[14px]">
                  Houses
                </p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <BasementCorolDistributionIcon />
                <p className="text-[#001D3D] text-[14px] capitalize leading-[14px]">
                  Basements
                </p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <CondosColorDistributionIcon />
                <p className="text-[#001D3D] text-[14px] capitalize leading-[14px]">
                  Condos
                </p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <ApartmentsColorDistributionIcon />
                <p className="text-[#001D3D] text-[14px] capitalize leading-[14px]">
                  Apartments
                </p>
              </div>
            </div>

            <div className="flex flex-col p-2.5 mt-4  items-start gap-2 w-[361px] rounded-[16px] bg-[#F8F9FB]">
              <h2 className="text-[#3A9A76] text-[14px] font-bold capitalize">
                Condo Apt
              </h2>
              <p className="text-[#001D3D] text-[12px] leading-[16px] capitalize">
                about the Condo apt. Lorem ipsum dolor sit amet consectetur.
                Neque nullam risus lectus{" "}
              </p>
            </div>
          </div>
        </div>

        <footer className="h-20  fixed bottom-0 left-0 right-0 rounded-t-[8px] bg-[rgba(32,54,77,0.5)] backdrop-blur-[5px] flex flex-row justify-evenly items-center font-[Helvetica] capitalize">
          <div className=" flex flex-row gap-2 items-center">
            <div className="relative h-[40px] w-[40px] rounded-[50px] border-[1.5px] border-[#FFF]">
              <Image
                src="/images/image 81.png"
                alt="Profile"
                width={14}
                height={14}
                className="w-full h-full object-cover rounded-full"
              />
              <VerifiedTickIcon className="absolute bottom-0 right-[-3]" />
            </div>
            <div>
              <p className="font-bold text-[#FFF] text-[14px] ">Mark A.</p>
              <p className="font-normal text-[#EDF2FA] text-[10px]">
                Property Owner
              </p>
            </div>
          </div>
          <div className="rounded-[16px] text-white p-3.5 border-[1.5px] border-white font-bold text-[16px]">
            Reserve
          </div>
          <div className="rounded-[16px] bg-[#001D3D] text-white  p-3.5 font-bold text-[16px]">
            Schedule Tour
          </div>
        </footer>
      </div>
    </>
  );
};

export default PropertyDetails;
