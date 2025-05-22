import React from "react";
import { useDispatch } from "react-redux";
import SearchCity from "./SearchCity";
import { IconButton } from "@mui/material";
import { FilterIcon, HeartFilledIcon, CalendarFilledIcon } from "@/ui/icons";
import { openModal } from "../slices/modalSlice";

interface PropertySearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  isMapView?: boolean;
  onMapToggle?: () => void;
}

const PropertySearchBar: React.FC<PropertySearchBarProps> = ({
  searchTerm,
  onSearchChange,
  isMapView = false,
  onMapToggle,
}) => {
  const dispatch = useDispatch();
  return (
 <div className={`flex items-center justify-between ${
      isMapView 
        ? 'p-2 gap-2' 
        : 'bg-white shadow-md p-4 gap-2'
    }`}>
          {/* <div className="flex items-center p-4 bg-white gap-2"> */}

        <SearchCity
        value={searchTerm}
        onChange={onSearchChange}
        onMapToggle={onMapToggle}
        isMapView={isMapView}
      />
      <div className="flex gap-2 ">
        <IconButton
          aria-label="Filter/Settings"
          sx={{ padding: "1px" }}
          onClick={() => dispatch(openModal({ modalType: "filterSettings" }))}
        >
          <FilterIcon width={31} height={31} color="#20364D" />
        </IconButton>
        <IconButton aria-label="Favorites" sx={{ padding: "1px" }}>
          <HeartFilledIcon color="#20364D" />
        </IconButton>
        <IconButton aria-label="Calendar" sx={{ padding: "1px" }}>
          <CalendarFilledIcon color="#20364D" />
        </IconButton>
      </div>
    </div>
  );
};

export default PropertySearchBar;
