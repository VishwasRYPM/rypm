import React from 'react';
import SearchCity from './SearchCity';
import { IconButton } from '@mui/material';
import { FilterIcon,HeartFilledIcon,CalendarFilledIcon } from '@/ui/icons';

interface PropertySearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const PropertySearchBar: React.FC<PropertySearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex items-center justify-between p-4 py-3 bg-white">
      <SearchCity value={searchTerm} onChange={onSearchChange} />
      <div className="flex ">
        <IconButton aria-label="Filter/Settings" sx={{ padding: '4px' }}>
        <FilterIcon width={31} height={31} />
        </IconButton>
        <IconButton aria-label="Favorites" sx={{padding:'4px'}}  >
          <HeartFilledIcon />
         </IconButton>
        <IconButton aria-label="Calendar" sx={{padding:'4px'}} >
          <CalendarFilledIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default PropertySearchBar;