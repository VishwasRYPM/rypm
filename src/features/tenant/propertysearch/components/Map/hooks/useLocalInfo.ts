import { useState } from 'react';
import { LocalInfoCategory } from '../features/LocalInfo/CategoryTabs';

export function useLocalInfo() {
  const [isLocalInfoActive, setIsLocalInfoActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<LocalInfoCategory>("all");

  const toggleLocalInfo = () => {
    setIsLocalInfoActive(!isLocalInfoActive);
  };

  const handleCategoryChange = (category: LocalInfoCategory) => {
    setSelectedCategory(category);
  };

  return {
    isLocalInfoActive,
    selectedCategory,
    toggleLocalInfo,
    handleCategoryChange
  };
}
