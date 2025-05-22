'use client';

import React from 'react';
import {MiceIcon} from '@/ui/icons';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import MapIcon from '@mui/icons-material/Map';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openModal } from '../slices/modalSlice';
import {
  StyledTextField,
  SearchIconWrapper,
  SearchButtonAdornment,
  MapButtonAdornment,
  SearchActionButton,
  MapActionButton,
  SearchButtonText,
  MapButtonText,
  StyledPlaceIcon,
} from '../styles/components/searchCityStyles';

interface SearchCityProps {
  onChange?: (value: string) => void;
  onMapToggle?: () => void;
  onSearch?: () => void;
  placeholder?: string;
  value?: string;
  width?: string;
  insideModal?: boolean;
    isMapView?: boolean;

}

const SearchCity: React.FC<SearchCityProps> = ({
  onChange,
  onMapToggle,
  onSearch,
  placeholder = "Search",
  value = "",
  width = "61vw",
  insideModal = false,
  isMapView = false,
}) => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

    const handleMapToggle = () => {
    if (onMapToggle) {
      onMapToggle();
    }
  };

  const handleClick = () => {
    // Only open the modal if not already inside it
    if (!insideModal) {
      dispatch(openModal({ modalType: 'searchCity' }));
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  const showSearchButton = value.length > 0;

  return (
    <StyledTextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onClick={!insideModal ? handleClick : undefined}
      onKeyDown={handleKeyDown}
      fullWidth
      size="small"
      width={width}
      InputProps={{
        startAdornment: (
          <SearchIconWrapper position="start">
            <SearchIcon  />
          </SearchIconWrapper>
        ),
        endAdornment: (
          <>
            {!showSearchButton && (
              <MiceIcon className="w-[21px] h-[15px] mr-2 cursor-pointer" />
            )}
            {/* {!showSearchButton && (
              <>
                <MiceIcon className="w-[21px] h-[15px] mr-2 cursor-pointer" />
                {onMapToggle && (
                  <IconButton 
                    onClick={handleMapToggle} 
                    size="small" 
                    sx={{ padding: '4px', marginRight: '4px' }}
                  >
                    {isMapView ? (
                      <ListIcon className="w-5 h-5" />
                    ) : (
                      <MapIcon className="w-5 h-5" />
                    )}
                  </IconButton>
                )}
              </>
            )} */}
            {showSearchButton ? (
              <SearchButtonAdornment position="end">
                <SearchActionButton
                  onClick={handleSearchClick}
                  aria-label="Search"
                  edge="end"
                  size="small"
                >
                  <SearchButtonText variant="body2">
                    Search
                  </SearchButtonText>
                </SearchActionButton>
              </SearchButtonAdornment>
            ) : (
              <MapButtonAdornment position="end">
                <MapActionButton
                 // onClick={handleClick}
                  onClick={handleMapToggle}
                  aria-label="Map"
                  edge="end"
                  size="small"
                >
                  <StyledPlaceIcon />
                  <MapButtonText variant="body2">Map</MapButtonText>
                </MapActionButton>
              </MapButtonAdornment>
            )}
          </>
        ),
        
      }}
    />
  );
};

export default SearchCity;
