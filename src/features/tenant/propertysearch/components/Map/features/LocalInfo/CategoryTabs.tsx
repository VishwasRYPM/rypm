import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

export type POICategory = 
  | "restaurants" 
  | "cafes" 
  | "hotels" 
  | "shopping" 
  | "attractions" 
  | "parks" 
  | "hospitals" 
  | "schools" 
  | "atms" 
  | "gas_stations";

interface CategoryTabsProps {
  onCategoryChange: (category: POICategory) => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`category-tabpanel-${index}`}
      aria-labelledby={`category-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `category-tab-${index}`,
    'aria-controls': `category-tabpanel-${index}`,
  };
};

const categories: { label: string; value: POICategory; icon: string }[] = [
  { label: "Restaurants", value: "restaurants", icon: "🍽️" },
  { label: "Cafes", value: "cafes", icon: "☕" },
  { label: "Hotels", value: "hotels", icon: "🏨" },
  { label: "Shopping", value: "shopping", icon: "🛍️" },
  { label: "Attractions", value: "attractions", icon: "🎭" },
  { label: "Parks", value: "parks", icon: "🌳" },
  { label: "Hospitals", value: "hospitals", icon: "🏥" },
  { label: "Schools", value: "schools", icon: "🏫" },
  { label: "ATMs", value: "atms", icon: "💰" },
  { label: "Gas Stations", value: "gas_stations", icon: "⛽" }
];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ onCategoryChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onCategoryChange(categories[newValue].value);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          variant="scrollable"
          scrollButtons="auto"
          aria-label="POI category tabs"
        >
          {categories.map((category, index) => (
            <Tab 
              key={category.value}
              label={
                <div className="flex items-center">
                  <span className="mr-1">{category.icon}</span>
                  <span>{category.label}</span>
                </div>
              } 
              {...a11yProps(index)} 
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default CategoryTabs;