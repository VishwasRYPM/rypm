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
  // ✅ Use same styling as individual categories
  const backgroundFill = isSelected ? "#20364D" : "white";
  const iconFill = isSelected ? "white" : "#20364D";

  const specificIconMap: Record<string, React.ReactNode> = {
    // Restaurant types - ✅ Use popup-style icon
    restaurant: (
      <RestaurantPopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),
    meal_takeaway: (
      <RestaurantPopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),
    cafe: (
      <RestaurantPopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),

    // Grocery types - ✅ Use popup-style icon
    grocery_or_supermarket: (
      <GroceryPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    supermarket: (
      <GroceryPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),

    // Education types - ✅ Use popup-style icon
    school: (
      <EducationPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    university: (
      <EducationPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),

    // Healthcare types - ✅ Use popup-style icon
    hospital: (
      <HealthcarePopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),
    pharmacy: (
      <HealthcarePopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),
    doctor: (
      <HealthcarePopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),

    // Fitness types - ✅ Use popup-style icon
    gym: (
      <FitnessPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    spa: (
      <FitnessPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),

    // Shopping types - ✅ Use popup-style icon
    shopping_mall: (
      <ShoppingPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    clothing_store: (
      <ShoppingPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),

    // Business types - ✅ Use popup-style icon
    bank: (
      <BusinessesPopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),
    real_estate_agency: (
      <BusinessesPopupIcon
        backgroundFill={backgroundFill}
        iconFill={iconFill}
      />
    ),

    // Travel types - ✅ Use popup-style icon
    lodging: (
      <TravelPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    travel_agency: (
      <TravelPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),

    // Services types - ✅ Use popup-style icon
    car_repair: (
      <ServicesPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
    laundry: (
      <ServicesPopupIcon backgroundFill={backgroundFill} iconFill={iconFill} />
    ),
  };

  return (
    specificIconMap[placeCategory] || (
      <AllIcons color={isSelected ? "white" : "#20364D"} />
    )
  );
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
