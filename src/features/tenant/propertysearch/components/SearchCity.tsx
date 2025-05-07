'use client';

import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
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
  MapButtonText
} from '../styles/components/searchCityStyles';

interface SearchCityProps {
  onChange?: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  value?: string;
  width?: string;
  insideModal?: boolean;
}

const SearchCity: React.FC<SearchCityProps> = ({
  onChange,
  onSearch,
  placeholder = "Search",
  value = "",
  width = "70vw",
  insideModal = false,
}) => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
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
            <SearchIcon fontSize="small" />
          </SearchIconWrapper>
        ),
        endAdornment: showSearchButton ? (
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
              onClick={handleClick}
              aria-label="Map"
              edge="end"
              size="small"
            >
              <PlaceIcon fontSize="small" />
              <MapButtonText variant="body2">
                Map
              </MapButtonText>
            </MapActionButton>
          </MapButtonAdornment>
        ),
      }}
    />
  );
};

export default SearchCity;
