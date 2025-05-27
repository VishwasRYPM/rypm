import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

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

const categories: { label: string; value: LocalInfoCategory; icon: string }[] = [
  { label: "All", value: "all", icon: "🌟" },
  { label: "Grocery", value: "grocery", icon: "🛒" },
  { label: "Education", value: "education", icon: "🎓" },
  { label: "Restaurants", value: "restaurants", icon: "🍽️" },
  { label: "Healthcare", value: "healthcare", icon: "🏥" },
  { label: "Fitness", value: "fitness", icon: "💪" },
  { label: "Shopping", value: "shopping", icon: "🛍️" },
  { label: "Business", value: "business", icon: "🏢" },
  { label: "Travel", value: "travel", icon: "✈️" },
  { label: "Services", value: "services", icon: "🔧" }
];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ selectedCategory, onCategoryChange }) => {
  const currentIndex = categories.findIndex(cat => cat.value === selectedCategory);
  const [value, setValue] = useState(currentIndex >= 0 ? currentIndex : 0);

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
