import { useState } from 'react';
import { POICategory } from '../features/LocalInfo/CategoryTabs';

export function useLocalInfo() {
  const [isLocalInfoActive, setIsLocalInfoActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<POICategory>("restaurants");

  const toggleLocalInfo = () => {
    setIsLocalInfoActive(!isLocalInfoActive);
  };

  const handleCategoryChange = (category: POICategory) => {
    setSelectedCategory(category);
  };

  return {
    isLocalInfoActive,
    selectedCategory,
    toggleLocalInfo,
    handleCategoryChange
  };
}