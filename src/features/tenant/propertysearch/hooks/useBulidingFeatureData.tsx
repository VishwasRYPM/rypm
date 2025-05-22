import React from "react";
import {
  AddressIcon,
  AllTimeConciergeIcon,
  BarbequeAreaIcon,
  BasketballIcon,
  BicycleStorageIcon,
  BiliordsRoomIcon,
  BowlingAlleyIcon,
  BuzzerSystemIcon,
  CabansIcon,
  CategoryIcon,
  ChildPlayAreaIcon,
  CityIcon,
  CondoCoporationIcon,
  CountryIcon,
  DateOfConstructionIcon,
  ElevatorsIcon,
  GamesRoomIcon,
  GolfRangeIcon,
  GuestSuitsIcon,
  GymIcon,
  IndoorpoolIcon,
  KeylessEntryIcon,
  LaundaryIcon,
  LibraryIcon,
  MeetingRoomIcon,
  MovieRoomIcon,
  NumberFloorsIcon,
  OnsiteStaffIcon,
  OutDoorPoolIcon,
  ParkingAcIcon,
  ParkingBathroomIcon,
  ParkingCentralHVACIcon,
  ParkingCounterTopIcon,
  ParkingHeatedFloorIcon,
  ParkingShowertypeIcon,
  ParkingUpgradedIcon,
  PartyRoomIcon,
  PatioIcon,
  PetSpaIcon,
  PianoLaungeIcon,
  PostalCodeIcon,
  ProvinceIcon,
  RecreationalOutdoorpoolIcon,
  RecRoomIcon,
  RoofTopPatioIcon,
  SaunaIcon,
  SecurityOnsiteIcon,
  SteamRoomIcon,
  TennisCourtIcon,
  VentilationHoodOneIcon,
  VentilationHoodTwoIcon,
  WheelChairIcon,
  WhirlpoolIcon,
  YogaRoomIcon,
} from "@/ui/icons";
import LawnSnowIcon from "@/ui/icons/LawnSnowIcon";

// Define a type for each info block item
export interface InfoBlockItem {
  Icon: React.ReactNode;
  text1: string;
  text2: string;
}

// Define a type for each section
export interface SectionData {
  title: string;
  leftItems: InfoBlockItem[];
  rightItems: InfoBlockItem[];
}

// Export the data structure
export const buildingFeaturesData: SectionData[] = [
  {
    title: "Property Information",
    leftItems: [
      {
        Icon: <AddressIcon />,
        text1: "Address",
        text2: "Sep,01,2025",
      },
      {
        Icon: <ProvinceIcon />,
        text1: "Province",
        text2: "$1200",
      },
      {
        Icon: <PostalCodeIcon />,
        text1: "Postal Code/Zip Code",
        text2: "$1200",
      },
      {
        Icon: <DateOfConstructionIcon />,
        text1: "Date of Construction",
        text2: "$1200",
      },
      {
        Icon: <NumberFloorsIcon />,
        text1: "Number of Floors",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <CityIcon />,
        text1: "City",
        text2: "12 months",
      },
      {
        Icon: <CountryIcon />,
        text1: "Country",
        text2: "12 months",
      },
      {
        Icon: <CategoryIcon />,
        text1: "Category",
        text2: "Yes",
      },
      {
        Icon: <CondoCoporationIcon />,
        text1: "Condo Corporation",
        text2: "Yes",
      },
      {
        Icon: <NumberFloorsIcon />,
        text1: "Building Managment",
        text2: "Yes",
      },
    ],
  },
  {
    title: "Common Area Amenities",
    leftItems: [
      {
        Icon: <KeylessEntryIcon />,
        text1: "Keyless entry",
        text2: "Sep,01,2025",
      },
      {
        Icon: <OnsiteStaffIcon />,
        text1: "Onsite Staff",
        text2: "$1200",
      },
      {
        Icon: <SecurityOnsiteIcon />,
        text1: "Security Onsite",
        text2: "$1200",
      },
      {
        Icon: <BicycleStorageIcon />,
        text1: "Bicycle Storage",
        text2: "$1200",
      },
      {
        Icon: <GuestSuitsIcon />,
        text1: "Guest Suites",
        text2: "$1200",
      },
      {
        Icon: <LawnSnowIcon />,
        text1: "Lawn & snow",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <BuzzerSystemIcon />,
        text1: "Buzzer System",
        text2: "12 months",
      },
      {
        Icon: <ElevatorsIcon />,
        text1: "Elevator",
        text2: "12 months",
      },
      {
        Icon: <AllTimeConciergeIcon />,
        text1: "24/7 Concierge Service",
        text2: "Yes",
      },
      {
        Icon: <WheelChairIcon />,
        text1: "Wheelchair Access",
        text2: "Yes",
      },
      {
        Icon: <LaundaryIcon />,
        text1: "Laundry Facilities",
        text2: "Yes",
      },
      {
        Icon: <PetSpaIcon />,
        text1: "Pet Spa",
        text2: "Yes",
      },
    ],
  },
  {
    title: "Outdoor Amenities",
    leftItems: [
      {
        Icon: <BarbequeAreaIcon />,
        text1: "Barbecue Area",
        text2: "Sep,01,2025",
      },
      {
        Icon: <RoofTopPatioIcon />,
        text1: "Rooftop Patio",
        text2: "$1200",
      },
      {
        Icon: <OutDoorPoolIcon />,
        text1: "Outdoor Pool",
        text2: "$1200",
      },
      {
        Icon: <TennisCourtIcon />,
        text1: "Tennis Court",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <PatioIcon />,
        text1: "Patio",
        text2: "12 months",
      },
      {
        Icon: <ChildPlayAreaIcon />,
        text1: "Child Play Area",
        text2: "12 months",
      },
      {
        Icon: <CabansIcon />,
        text1: "Cabanas",
        text2: "Yes",
      },
    ],
  },
  {
    title: "Parking & Transport",
    leftItems: [
      {
        Icon: <ParkingBathroomIcon />,
        text1: "Bathrooms",
        text2: "Sep,01,2025",
      },
      {
        Icon: <ParkingUpgradedIcon />,
        text1: "Upgraded",
        text2: "$1200",
      },
      {
        Icon: <ParkingCentralHVACIcon />,
        text1: "Central HAVC",
        text2: "$1200",
      },
      {
        Icon: <ParkingHeatedFloorIcon />,
        text1: "Heated Floors",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <ParkingShowertypeIcon />,
        text1: "Shower Type",
        text2: "12 months",
      },
      {
        Icon: <ParkingCounterTopIcon />,
        text1: "Countertops",
        text2: "12 months",
      },
      {
        Icon: <ParkingAcIcon />,
        text1: "Heating & A/C Unit",
        text2: "Yes",
      },
    ],
  },
  {
    title: "Recreational Amenities",
    leftItems: [
      {
        Icon: <MeetingRoomIcon />,
        text1: "Meeting Room",
        text2: "$1200",
      },
      {
        Icon: <GymIcon />,
        text1: "Gym",
        text2: "$1200",
      },
      {
        Icon: <GamesRoomIcon />,
        text1: "Games Room",
        text2: "$1200",
      },
      {
        Icon: <LibraryIcon />,
        text1: "Library",
        text2: "$1200",
      },
      {
        Icon: <BiliordsRoomIcon />,
        text1: "Biliards room",
        text2: "$1200",
      },
      {
        Icon: <SteamRoomIcon />,
        text1: "Steam Room",
        text2: "$1200",
      },
      {
        Icon: <BasketballIcon />,
        text1: "Basketball",
        text2: "$1200",
      },
      {
        Icon: <IndoorpoolIcon />,
        text1: "Indoor Pool",
        text2: "$1200",
      },
      {
        Icon: <PianoLaungeIcon />,
        text1: "Piano Lounge",
        text2: "$1200",
      },
      {
        Icon: <ChildPlayAreaIcon />,
        text1: "Cild Play Area",
        text2: "$1200",
      },
      {
        Icon: <GolfRangeIcon />,
        text1: "Golf Range",
        text2: "Sep,01,2025",
      },
    ],
    rightItems: [
      {
        Icon: <YogaRoomIcon />,
        text1: "Yoga/Pilates Room",
        text2: "12 months",
      },
      {
        Icon: <RecRoomIcon />,
        text1: "Rec Room",
        text2: "12 months",
      },
      {
        Icon: <PartyRoomIcon />,
        text1: "Party Room",
        text2: "Yes",
      },
      {
        Icon: <MovieRoomIcon />,
        text1: "Movie Room",
        text2: "Yes",
      },
      {
        Icon: <WhirlpoolIcon />,
        text1: "Whirlpool",
        text2: "Yes",
      },
      {
        Icon: <SaunaIcon />,
        text1: "Sauna",
        text2: "Yes",
      },
      {
        Icon: <RecreationalOutdoorpoolIcon />,
        text1: "Outdoor Pool",
        text2: "Yes",
      },
      {
        Icon: <VentilationHoodOneIcon />,
        text1: "ventilation Hood",
        text2: "Yes",
      },
      {
        Icon: <BowlingAlleyIcon />,
        text1: "Bowling Alley",
        text2: "Yes",
      },
      {
        Icon: <VentilationHoodTwoIcon />,
        text1: "Ventilation hood",
        text2: "Yes",
      },
    ],
  },
];
