import React from 'react';
import { useDispatch } from 'react-redux';
import SearchCity from './SearchCity';
import { IconButton } from '@mui/material';
import { FilterIcon,HeartFilledIcon,CalendarFilledIcon } from '@/ui/icons';
import { openModal } from '../slices/modalSlice'; 

interface PropertySearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const PropertySearchBar: React.FC<PropertySearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center p-4 bg-white gap-2">
      <SearchCity value={searchTerm} onChange={onSearchChange} />
      <div className="flex gap-2 ">
        <IconButton aria-label="Filter/Settings" sx={{ padding: '1px' }} onClick={() => dispatch(openModal({ modalType: 'filterSettings' }))}>
        <FilterIcon width={31} height={31} color="#20364D" />
        </IconButton>
        <IconButton aria-label="Favorites" sx={{padding:'1px'}}  >
          <HeartFilledIcon color="#20364D" />
         </IconButton>
        <IconButton aria-label="Calendar" sx={{padding:'1px'}} >
          <CalendarFilledIcon color="#20364D"/>
        </IconButton>
      </div>
    </div>
  );
};

export default PropertySearchBar;