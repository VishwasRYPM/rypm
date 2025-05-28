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
  ServicesIcon
} from "@/ui/icons";

export type LocalInfoCategory =
  | "all"
  | "grocery"
  | "education"
  | "restaurants"
  | "healthcare"
  | "fitness"
  | "shopping"
  | "business"
  | "travel"
  | "services";

interface CategoryTabsProps {
  selectedCategory: LocalInfoCategory;
  onCategoryChange: (category: LocalInfoCategory) => void;
}

const categories: { label: string; value: LocalInfoCategory; icon: React.ReactNode }[] =
  [
    { label: "All", value: "all", icon: <AllIcons/> },
    { label: "Grocery", value: "grocery", icon: <GroceryIcon/> },
    { label: "Education", value: "education", icon: <EducationIcon/> },
    { label: "Restaurants", value: "restaurants", icon: <RestaurantsIcon/> },
    { label: "Healthcare", value: "healthcare", icon: <HealthcareIcon/> },
    { label: "Fitness", value: "fitness", icon: <FitnessIcon/> },
    { label: "Shopping", value: "shopping", icon: <ShoppingIcon/> },
    { label: "Business", value: "business", icon: <BuisnessesIcon/> },
    { label: "Travel", value: "travel", icon: <TravelIcon/> },
    { label: "Services", value: "services", icon: <ServicesIcon/> },
  ];

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-full px-4 py-5">
      {/* Scrollable container with Tailwind classes */}
      <div className="w-full inline-flex items-center overflow-x-auto scrollbar-hide">
        <div className="flex gap-1.5 min-w-max">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`
  flex items-center gap-1.5 px-3 rounded-full font-medium h-[25px]
  transition-all duration-200 ease-in-out whitespace-nowrap backdrop-blur-[2px]
  ${
    selectedCategory === category.value
      ? "bg-[#20364D] text-white shadow-md border-none"
      : "bg-[rgba(0,29,61,0.30)] text-white"
  }
`}
            >
              <span>{category.icon}</span>
              <span className="text-[12px] font-semibold">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
