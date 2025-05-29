// import React from 'react';
// import {
//   AllIcons,
//   RestaurantsIcon,
//   GroceryIcon,
//   EducationIcon,
//   HealthcareIcon,
//   FitnessIcon,
//   ShoppingIcon,
//   BuisnessesIcon,
//   TravelIcon,
//   ServicesIcon,
//   RestaurantPopupIcon,
//   GroceryPopupIcon,
//   EducationPopupIcon,
//   HealthcarePopupIcon,
//   FitnessPopupIcon,
//   ShoppingPopupIcon,
//   BusinessesPopupIcon,
//   TravelPopupIcon,
//   ServicesPopupIcon
// } from "@/ui/icons";
// import { LocalInfoCategory } from '../features/LocalInfo/CategoryTabs';

// interface GooglePlace {
//   id: string;
//   name: string;
//   lat: number;
//   lng: number;
//   rating?: number;
//   price_level?: number;
//   types: string[];
//   category: string;
//   vicinity?: string;
// }

// interface PlaceMarkerProps {
//   place: GooglePlace;
//   onClick: (place: GooglePlace) => void;
//   isSelected?: boolean;
//   searchCategory: LocalInfoCategory;
// }

// // Map place categories to their specific icons (for "All" tab)
// const getSpecificCategoryIcon = (placeCategory: string, isSelected: boolean): React.ReactNode => {
//   const iconColor = isSelected ? "white" : "#20364D";

//   // Map Google place types to your icons
//   const specificIconMap: Record<string, React.ReactNode> = {
//     // Restaurant types
//     restaurant: <RestaurantsIcon color={"#001D3D"} />,
//     meal_takeaway: <RestaurantsIcon  color={"#001D3D"} />,
//     cafe: <RestaurantsIcon  color={"#001D3D"} />,

//     // Grocery types
//     grocery_or_supermarket: <GroceryIcon  color={"#001D3D"} />,
//     supermarket: <GroceryIcon  color={"#001D3D"} />,

//     // Education types
//     school: <EducationIcon  color={"#001D3D"}/>,
//     university: <EducationIcon  color={"#001D3D"} />,

//     // Healthcare types
//     hospital: <HealthcareIcon  color={"#001D3D"} />,
//     pharmacy: <HealthcareIcon  color={"#001D3D"} />,
//     doctor: <HealthcareIcon  color={"#001D3D"} />,

//     // Fitness types
//     gym: <FitnessIcon color={"#001D3D"} />,
//     spa: <FitnessIcon  color={"#001D3D"} />,

//     // Shopping types
//     shopping_mall: <ShoppingIcon color={"#001D3D"} />,
//     clothing_store: <ShoppingIcon color={"#001D3D"} />,

//     // Business types
//     bank: <BuisnessesIcon color={"#001D3D"} />,
//     real_estate_agency: <BuisnessesIcon color={"#001D3D"}/>,

//     // Travel types
//     lodging: <TravelIcon  color={"#001D3D"} />,
//     travel_agency: <TravelIcon color={"#001D3D"} />,

//     // Services types
//     car_repair: <ServicesIcon color={"#001D3D"} />,
//     laundry: <ServicesIcon color={"#001D3D"} />,
//   };

//   return specificIconMap[placeCategory] || <AllIcons color={"#001D3D"}/>;
// };

// // Map search categories to single icons (for specific category tabs)
// const getCategoryIcon = (searchCategory: LocalInfoCategory, isSelected: boolean): React.ReactNode => {
//   const iconColor = isSelected ? "white" : "#20364D";

//   const categoryIconMap: Record<LocalInfoCategory, React.ReactNode> = {
//     all: <AllIcons color={iconColor} />,
//     restaurants: <RestaurantPopupIcon />,
//     grocery: <GroceryPopupIcon/>,
//     education: <EducationPopupIcon />,
//     healthcare: <HealthcarePopupIcon />,
//     fitness: <FitnessPopupIcon />,
//     shopping: <ShoppingPopupIcon/>,
//     business: <BusinessesPopupIcon/>,
//     travel: <TravelPopupIcon/>,
//     services: <ServicesPopupIcon/>
//   };

//   return categoryIconMap[searchCategory] || <AllIcons color={"#001D3D"} />;
// };

// const PlaceMarker: React.FC<PlaceMarkerProps> = ({
//   place,
//   onClick,
//   isSelected = false,
//   searchCategory
// }) => {
//   // If "All" is selected, show specific icons based on place category
//   // Otherwise, show the category icon for all places in that category
//   const icon = searchCategory === 'all'
//     ? getSpecificCategoryIcon(place.category, isSelected)
//     : getCategoryIcon(searchCategory, isSelected);

//   const handleClick = () => {
//     onClick(place);
//   };

//   return (
//     <div
//       className={`
//         cursor-pointer transform transition-all duration-200 hover:scale-110
//         ${isSelected ? 'z-50' : 'z-10'}
//       `}
//       onClick={handleClick}
//     >
//       <div
//         className={`
//           flex items-center justify-center transition-all duration-200
//           ${isSelected
//             ? 'bg-[#20364D] border-2 border-white scale-110'
//             : 'border border-gray-300 hover:bg-gray-50'
//           }
//         `}
//       >
//         {icon}
//       </div>

//       <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-black/75 text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
//         {place.name}
//       </div>
//     </div>
//   );
// };

// export default PlaceMarker;

import React from "react";
import {
  AllIcons,
  RestaurantsIcon,
  GroceryIcon,
  EducationIcon,
  HealthcareIcon,
  FitnessIcon,
  ShoppingIcon,
  BuisnessesIcon,
  TravelIcon,
  ServicesIcon,
  RestaurantPopupIcon,
  GroceryPopupIcon,
  EducationPopupIcon,
  HealthcarePopupIcon,
  FitnessPopupIcon,
  ShoppingPopupIcon,
  BusinessesPopupIcon,
  TravelPopupIcon,
  ServicesPopupIcon,
} from "@/ui/icons";
import { LocalInfoCategory } from "../features/LocalInfo/CategoryTabs";

interface GooglePlace {
  id: string;
  name: string;
  lat: number;
  lng: number;
  rating?: number;
  price_level?: number;
  types: string[];
  category: string;
  vicinity?: string;
}

interface PlaceMarkerProps {
  place: GooglePlace;
  onClick: (place: GooglePlace) => void;
  isSelected?: boolean;
  searchCategory: LocalInfoCategory;
}

// Map place categories to their specific icons (for "All" tab)
const getSpecificCategoryIcon = (
  placeCategory: string,
  isSelected: boolean
): React.ReactNode => {
  const iconColor = isSelected ? "white" : "#20364D";

  const specificIconMap: Record<string, React.ReactNode> = {
    // Restaurant types
    restaurant: <RestaurantsIcon color={iconColor} />,
    meal_takeaway: <RestaurantsIcon color={iconColor} />,
    cafe: <RestaurantsIcon color={iconColor} />,

    // Grocery types
    grocery_or_supermarket: <GroceryIcon color={iconColor} />,
    supermarket: <GroceryIcon color={iconColor} />,

    // Education types
    school: <EducationIcon color={iconColor} />,
    university: <EducationIcon color={iconColor} />,

    // Healthcare types
    hospital: <HealthcareIcon color={iconColor} />,
    pharmacy: <HealthcareIcon color={iconColor} />,
    doctor: <HealthcareIcon color={iconColor} />,

    // Fitness types
    gym: <FitnessIcon color={iconColor} />,
    spa: <FitnessIcon color={iconColor} />,

    // Shopping types
    shopping_mall: <ShoppingIcon color={iconColor} />,
    clothing_store: <ShoppingIcon color={iconColor} />,

    // Business types
    bank: <BuisnessesIcon color={iconColor} />,
    real_estate_agency: <BuisnessesIcon color={iconColor} />,

    // Travel types
    lodging: <TravelIcon color={iconColor} />,
    travel_agency: <TravelIcon color={iconColor} />,

    // Services types
    car_repair: <ServicesIcon color={iconColor} />,
    laundry: <ServicesIcon color={iconColor} />,
  };

  return specificIconMap[placeCategory] || <AllIcons color={iconColor} />;
};

// Map search categories to single icons (for specific category tabs)
const getCategoryIcon = (
  searchCategory: LocalInfoCategory,
  isSelected: boolean
): React.ReactNode => {
  const backgroundFill = isSelected ? "#20364D" : "white";
  const iconFill = isSelected ? "white" : "#20364D";

  const categoryIconMap: Record<LocalInfoCategory, React.ReactNode> = {
    all: <AllIcons color={isSelected ? "white" : "#20364D"} />,
    restaurants: (
      <RestaurantPopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),
    grocery: (
      <GroceryPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    education: (
      <EducationPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    healthcare: (
      <HealthcarePopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),
    fitness: (
      <FitnessPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    shopping: (
      <ShoppingPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    business: (
      <BusinessesPopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),
    travel: (
      <TravelPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    services: (
      <ServicesPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
  };

  return (
    categoryIconMap[searchCategory] || (
      <AllIcons color={isSelected ? "white" : "#20364D"} />
    )
  );
};

const PlaceMarker: React.FC<PlaceMarkerProps> = ({
  place,
  onClick,
  isSelected = false,
  searchCategory,
}) => {
  // If "All" is selected, show specific icons based on place category
  // Otherwise, show the category icon for all places in that category
  const icon =
    searchCategory === "all"
      ? getSpecificCategoryIcon(place.category, isSelected)
      : getCategoryIcon(searchCategory, isSelected);

  const handleClick = () => {
    onClick(place);
  };

  return (
    <div
      className={`
        cursor-pointer transform transition-all duration-200 hover:scale-110
        ${isSelected ? "z-50" : "z-10"}
      `}
      onClick={handleClick}
    >
      {icon}

      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-black/75 text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {place.name}
      </div>
    </div>
  );
};

export default PlaceMarker;
