import React from "react";
import {
  ACIcon,
  ApplianceFinishesUpgradedIcon,
  AvailableDateIcon,
  BackSplashIcon,
  BasementDetailsIcon,
  BasementIncludedIcon,
  BedroomLayoutIcon,
  BedroomsIcon,
  CeilingHeightIcon,
  CentralHVACIcon,
  ClosetsIcon,
  CookTopIcon,
  CounterTopIcon,
  DenIcon,
  DishWasherIcon,
  EnSuitBathroomIcon,
  FlooringIcon,
  FloorsInUnitIcon,
  FurnaceIcon,
  HeatedFloorsIcon,
  IceMakerIcon,
  KitchenCounterTopIcon,
  MicrowaveIcon,
  PropertyConditionIcon,
  RangeStoveIcon,
  RefrigeratorIcon,
  ShowerTypeIcon,
  SquareFeetIcon,
  UnitVentilationHoodIcon,
  UpGradedIcon,
  WasherDryerIcon,
  WaterHeaterIcon,
  WindowCoverinIcon,
} from "@/ui/icons";
import FirePlaceIcon from "@/ui/icons/FirePlaceIcon";

// Define a type for each info block item
export interface InfoBlockItem {
  Icon: React.ReactNode;
  text1: string;
  text2: string;
}

// Define a type for each section
export interface SectionData {
  title: string;
  subsections?: {
    title: string;
    leftItems: InfoBlockItem[];
    rightItems: InfoBlockItem[];
  }[];
  leftItems: InfoBlockItem[];
  rightItems: InfoBlockItem[];
}

// Export the data structure
export const unitFeaturesData: SectionData[] = [
  {
    title: "General Information",
    leftItems: [
      {
        Icon: <AvailableDateIcon />,
        text1: "Available Date",
        text2: "Sep,01,2025",
      },
      {
        Icon: <BasementDetailsIcon />,
        text1: "Basement Details",
        text2: "$1200",
      },
      {
        Icon: <SquareFeetIcon />,
        text1: "Square Feet",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <PropertyConditionIcon />,
        text1: "Property Condition",
        text2: "12 months",
      },
      {
        Icon: <BasementIncludedIcon />,
        text1: "Basement Included",
        text2: "Yes",
      },
      {
        Icon: <FloorsInUnitIcon />,
        text1: "Floors In Unit",
        text2: "Yes",
      },
    ],
    subsections: [
      {
        title: "Common Area",
        leftItems: [
          {
            Icon: <FirePlaceIcon />,
            text1: "Fireplace",
            text2: "Sep,01,2025",
          },
          {
            Icon: <FlooringIcon />,
            text1: "Flooring",
            text2: "$1200",
          },
        ],
        rightItems: [
          {
            Icon: <WindowCoverinIcon />,
            text1: "Window Coverin",
            text2: "12 months",
          },
          {
            Icon: <CeilingHeightIcon />,
            text1: "Ceiling Height",
            text2: "Yes",
          },
        ],
      },
    ],
  },
  {
    title: "Bedrooms",
    leftItems: [
      {
        Icon: <BedroomsIcon />,
        text1: "Bedrooms",
        text2: "Sep,01,2025",
      },
      {
        Icon: <ClosetsIcon />,
        text1: "Closets",
        text2: "$1200",
      },
      {
        Icon: <FirePlaceIcon />,
        text1: "Fireplace",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <BedroomLayoutIcon />,
        text1: "Bedroom Layout",
        text2: "12 months",
      },
      {
        Icon: <EnSuitBathroomIcon />,
        text1: "En-Suite Bathrooms",
        text2: "Yes",
      },
      {
        Icon: <DenIcon />,
        text1: "Den (as bedroom)",
        text2: "Yes",
      },
    ],
  },
  {
    title: "Bathroom",
    leftItems: [
      {
        Icon: <EnSuitBathroomIcon />,
        text1: "Bathroom",
        text2: "Sep,01,2025",
      },
      {
        Icon: <UpGradedIcon />,
        text1: "Upgraded",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <ShowerTypeIcon />,
        text1: "Shower Type",
        text2: "12 months",
      },
      {
        Icon: <CounterTopIcon />,
        text1: "Countertops",
        text2: "Yes",
      },
    ],
  },
  {
    title: "Laundery & HVAC",
    leftItems: [
      {
        Icon: <CentralHVACIcon />,
        text1: "Central HVAC",
        text2: "Sep,01,2025",
      },
      {
        Icon: <HeatedFloorsIcon />,
        text1: "Heated Floors",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <ACIcon />,
        text1: "Heating & A/C Unit",
        text2: "12 months",
      },
      {
        Icon: <WasherDryerIcon />,
        text1: "Washer & Dryer",
        text2: "Yes",
      },
    ],
    subsections: [
      {
        title: "Appliance Brands",
        leftItems: [
          {
            Icon: <FurnaceIcon />,
            text1: "Furnance/Boiler",
            text2: "Sep,01,2025",
          },
          {
            Icon: <WasherDryerIcon />,
            text1: "Washer & Dryer",
            text2: "$1200",
          },
        ],
        rightItems: [
          {
            Icon: <WaterHeaterIcon />,
            text1: "Water Heater Tank",
            text2: "12 months",
          },
          {
            Icon: <ACIcon />,
            text1: "Air Conditioning",
            text2: "Yes",
          },
        ],
      },
    ],
  },
  {
    title: "Kitchen",
    leftItems: [
      {
        Icon: <KitchenCounterTopIcon />,
        text1: "Countertop",
        text2: "Sep,01,2025",
      },
      {
        Icon: <ApplianceFinishesUpgradedIcon />,
        text1: "Upgraded",
        text2: "$1200",
      },
      {
        Icon: <IceMakerIcon />,
        text1: "Ice Maker",
        text2: "$1200",
      },
    ],
    rightItems: [
      {
        Icon: <DishWasherIcon />,
        text1: "Dishwasher-Included",
        text2: "12 months",
      },
      {
        Icon: <ApplianceFinishesUpgradedIcon />,
        text1: "Appliance Finishes",
        text2: "Yes",
      },
      {
        Icon: <BackSplashIcon />,
        text1: "Backsplash",
        text2: "Yes",
      },
    ],
    subsections: [
      {
        title: "Appliance Brands",
        leftItems: [
          {
            Icon: <RefrigeratorIcon />,
            text1: "Refrigerator",
            text2: "Sep,01,2025",
          },
          {
            Icon: <DishWasherIcon />,
            text1: "Dishwasher",
            text2: "$1200",
          },
          {
            Icon: <CookTopIcon />,
            text1: "Cooktop",
            text2: "$1200",
          },
        ],
        rightItems: [
          {
            Icon: <RangeStoveIcon />,
            text1: "Range/Stove",
            text2: "12 months",
          },
          {
            Icon: <MicrowaveIcon />,
            text1: "Microwave",
            text2: "Yes",
          },
          {
            Icon: <UnitVentilationHoodIcon />,
            text1: "Ventilation Hood",
            text2: "Yes",
          },
        ],
      },
    ],
  },
];
