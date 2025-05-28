// import React from 'react';
// import { GooglePlace } from '../hooks/useGooglePlaces';

// interface PlaceMarkerProps {
//   place: GooglePlace;
//   onClick: (place: GooglePlace) => void;
//   isSelected?: boolean;
// }

// // Category to icon mapping
// const categoryIcons: Record<string, string> = {
//   grocery: '🛒',
//   supermarket: '🛒',
//   convenience: '🏪',
//   school: '🏫',
//   university: '🎓',
//   library: '📚',
//   restaurant: '🍽️',
//   cafe: '☕',
//   fast_food: '🍔',
//   hospital: '🏥',
//   pharmacy: '💊',
//   doctor: '👨‍⚕️',
//   gym: '💪',
//   spa: '🧘',
//   fitness: '🏃',
//   shopping_mall: '🏬',
//   electronics: '📱',
//   clothing: '👕',
//   bank: '🏦',
//   atm: '💳',
//   office: '🏢',
//   lodging: '🏨',
//   gas_station: '⛽',
//   travel: '✈️',
//   laundry: '👔',
//   hair_care: '💇',
//   car_repair: '🔧',
//   park: '🌳',
//   default: '📍'
// };

// const PlaceMarker: React.FC<PlaceMarkerProps> = ({ 
//   place, 
//   onClick, 
//   isSelected = false 
// }) => {
//   const icon = categoryIcons[place.category] || categoryIcons.default;

//   return (
//     <div
//       className={`
//         cursor-pointer transform transition-all duration-200 hover:scale-110
//         ${isSelected ? 'z-50' : 'z-10'}
//       `}
//       onClick={() => onClick(place)}
//     >
//       {/* Place Icon */}
//       <div
//         className={`
//           w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white
//           ${isSelected 
//             ? 'bg-[#20364D] scale-110' 
//             : 'bg-[#4A90E2] hover:bg-[#357ABD]'
//           }
//         `}
//       >
//         <span className="text-sm">{icon}</span>
//       </div>
      
//       {/* Place Name (appears on hover) */}
//       <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
//         <div className="bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
//           {place.name}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceMarker;





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
//   ServicesIcon
// } from "@/ui/icons";
// import { LocalInfoCategory } from '../features/LocalInfo/CategoryTabs';

// interface GooglePlace {
//   place_id: string;
//   name: string;
//   geometry: {
//     location: {
//       lat: number;
//       lng: number;
//     };
//   };
//   rating?: number;
//   price_level?: number;
//   types: string[];
//   category: string;
//   vicinity?: string;
// }

// interface PlaceMarkerProps {
//   place: GooglePlace;
//   onClick: () => void;
//   isSelected?: boolean;
//   searchCategory: LocalInfoCategory; // Add this prop
// }

// // Map search categories to single icons
// const getCategoryIcon = (searchCategory: LocalInfoCategory): React.ReactNode => {
//   const categoryIconMap: Record<LocalInfoCategory, React.ReactNode> = {
//     all: <AllIcons />,
//     restaurants: <RestaurantsIcon />,
//     grocery: <GroceryIcon/>,
//     education: <EducationIcon />,
//     healthcare: <HealthcareIcon/>,
//     fitness: <FitnessIcon />,
//     shopping: <ShoppingIcon />,
//     business: <BuisnessesIcon/>,
//     travel: <TravelIcon/>,
//     services: <ServicesIcon/>
//   };

//   return categoryIconMap[searchCategory] || <AllIcons/>;
// };

// const PlaceMarker: React.FC<PlaceMarkerProps> = ({ 
//   place, 
//   onClick, 
//   isSelected = false,
//   searchCategory 
// }) => {
//   const icon = getCategoryIcon(searchCategory);

//   return (
//     <div
//       className={`
//         cursor-pointer transform transition-all duration-200 hover:scale-110
//         ${isSelected ? 'z-50' : 'z-10'}
//       `}
//       onClick={onClick}
//     >
//       {/* Icon Container */}
//       <div
//         className={`
//           flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-all duration-200
//           ${isSelected 
//             ? 'bg-[#20364D] border-2 border-white scale-110' 
//             : 'bg-white border border-gray-300 hover:bg-gray-50'
//           }
//         `}
//       >
//         <div className={`
//           transition-colors duration-200
//           ${isSelected ? 'text-white' : 'text-[#20364D]'}
//         `}>
//           {icon}
//         </div>
//       </div>
      
//       {/* Place Name Label (optional - shows on hover) */}
//       <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-black/75 text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
//         {place.name}
//       </div>
//     </div>
//   );
// };

// export default PlaceMarker;




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
//   ServicesIcon
// } from "@/ui/icons";
// import { LocalInfoCategory } from '../features/LocalInfo/CategoryTabs';

// // Use the same GooglePlace interface that you have in useGooglePlaces
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
//   onClick: (place: GooglePlace) => void; // Fix the function signature
//   isSelected?: boolean;
//   searchCategory: LocalInfoCategory;
// }

// // Map search categories to single icons
// const getCategoryIcon = (searchCategory: LocalInfoCategory): React.ReactNode => {
//   const categoryIconMap: Record<LocalInfoCategory, React.ReactNode> = {
//     all: <AllIcons color={"#001D3D"} />,
//     restaurants: <RestaurantsIcon color={"#001D3D"} />,
//     grocery: <GroceryIcon color={"#001D3D"}/>,
//     education: <EducationIcon color={"#001D3D"} />,
//     healthcare: <HealthcareIcon color={"#001D3D"}/>,
//     fitness: <FitnessIcon color={"#001D3D"} />,
//     shopping: <ShoppingIcon color={"#001D3D"} />,
//     business: <BuisnessesIcon color={"#001D3D"}/>,
//     travel: <TravelIcon color={"#001D3D"}/>,
//     services: <ServicesIcon color={"#001D3D"}/>
//   };

//   return categoryIconMap[searchCategory] || <AllIcons/>;
// };

// const PlaceMarker: React.FC<PlaceMarkerProps> = ({ 
//   place, 
//   onClick, 
//   isSelected = false,
//   searchCategory 
// }) => {
//   const icon = getCategoryIcon(searchCategory);

//   const handleClick = () => {
//     onClick(place); // Pass the place object to onClick
//   };

//   return (
//     <div
//       className={`
//         cursor-pointer transform transition-all duration-200 hover:scale-110
//         ${isSelected ? 'z-50' : 'z-10'}
//       `}
//       onClick={handleClick}
//     >
//       {/* Icon Container */}
//       <div
//         className={`
//           flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-all duration-200
//           ${isSelected 
//             ? 'bg-[#20364D] border-2 border-white scale-110' 
//             : 'bg-white border border-gray-300 hover:bg-gray-50'
//           }
//         `}
//       >
//         <div className={`
//           transition-colors duration-200
//           ${isSelected ? 'text-white' : 'text-[#20364D]'}
//         `}>
//           {icon}
//         </div>
//       </div>
      
//       {/* Place Name Label */}
//       <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-black/75 text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
//         {place.name}
//       </div>
//     </div>
//   );
// };

// export default PlaceMarker;


import React from 'react';
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
  ServicesPopupIcon
} from "@/ui/icons";
import { LocalInfoCategory } from '../features/LocalInfo/CategoryTabs';

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
const getSpecificCategoryIcon = (placeCategory: string, isSelected: boolean): React.ReactNode => {
  const iconColor = isSelected ? "white" : "#20364D";
  
  // Map Google place types to your icons
  const specificIconMap: Record<string, React.ReactNode> = {
    // Restaurant types
    restaurant: <RestaurantsIcon color={"#001D3D"} />,
    meal_takeaway: <RestaurantsIcon  color={"#001D3D"} />,
    cafe: <RestaurantsIcon  color={"#001D3D"} />,
    
    // Grocery types
    grocery_or_supermarket: <GroceryIcon  color={"#001D3D"} />,
    supermarket: <GroceryIcon  color={"#001D3D"} />,
    
    // Education types
    school: <EducationIcon  color={"#001D3D"}/>,
    university: <EducationIcon  color={"#001D3D"} />,
    
    // Healthcare types
    hospital: <HealthcareIcon  color={"#001D3D"} />,
    pharmacy: <HealthcareIcon  color={"#001D3D"} />,
    doctor: <HealthcareIcon  color={"#001D3D"} />,
    
    // Fitness types
    gym: <FitnessIcon color={"#001D3D"} />,
    spa: <FitnessIcon  color={"#001D3D"} />,
    
    // Shopping types
    shopping_mall: <ShoppingIcon color={"#001D3D"} />,
    clothing_store: <ShoppingIcon color={"#001D3D"} />,
    
    // Business types
    bank: <BuisnessesIcon color={"#001D3D"} />,
    real_estate_agency: <BuisnessesIcon color={"#001D3D"}/>,
    
    // Travel types
    lodging: <TravelIcon  color={"#001D3D"} />,
    travel_agency: <TravelIcon color={"#001D3D"} />,
    
    // Services types
    car_repair: <ServicesIcon color={"#001D3D"} />,
    laundry: <ServicesIcon color={"#001D3D"} />,
  };

  return specificIconMap[placeCategory] || <AllIcons color={"#001D3D"}/>;
};

// Map search categories to single icons (for specific category tabs)
const getCategoryIcon = (searchCategory: LocalInfoCategory, isSelected: boolean): React.ReactNode => {
  const iconColor = isSelected ? "white" : "#20364D";
  
  const categoryIconMap: Record<LocalInfoCategory, React.ReactNode> = {
    all: <AllIcons color={iconColor} />,
    restaurants: <RestaurantPopupIcon />,
    grocery: <GroceryPopupIcon/>,
    education: <EducationPopupIcon />,
    healthcare: <HealthcarePopupIcon />,
    fitness: <FitnessPopupIcon />,
    shopping: <ShoppingPopupIcon/>,
    business: <BusinessesPopupIcon/>,
    travel: <TravelPopupIcon/>,
    services: <ServicesPopupIcon/>
  };

  return categoryIconMap[searchCategory] || <AllIcons color={"#001D3D"} />;
};

const PlaceMarker: React.FC<PlaceMarkerProps> = ({ 
  place, 
  onClick, 
  isSelected = false,
  searchCategory 
}) => {
  // If "All" is selected, show specific icons based on place category
  // Otherwise, show the category icon for all places in that category
  const icon = searchCategory === 'all' 
    ? getSpecificCategoryIcon(place.category, isSelected)
    : getCategoryIcon(searchCategory, isSelected);

  const handleClick = () => {
    onClick(place);
  };

  return (
    <div
      className={`
        cursor-pointer transform transition-all duration-200 hover:scale-110
        ${isSelected ? 'z-50' : 'z-10'}
      `}
      onClick={handleClick}
    >
      <div
        className={`
          flex items-center justify-center transition-all duration-200
          ${isSelected 
            ? 'bg-[#20364D] border-2 border-white scale-110' 
            : 'bg-white border border-gray-300 hover:bg-gray-50'
          }
        `}
      >
        {icon}
      </div>
      
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-black/75 text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {place.name}
      </div>
    </div>
  );
};

export default PlaceMarker;
