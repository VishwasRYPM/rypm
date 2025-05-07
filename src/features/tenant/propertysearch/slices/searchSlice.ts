import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PropertySearchState {
  activeTab: string | null;
  selectedCity: string | null;
  selectedCountry: string | null;
  searchTerm: string;
  resultsCount: number; 
}

const initialState: PropertySearchState = {
  activeTab: null,
  selectedCity: null,
  selectedCountry: null,
  searchTerm: '',
  resultsCount: 2740,
};

const propertySearchSlice = createSlice({
  name: 'propertySearch',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    clearActiveTab: (state) => {
      state.activeTab = null;
    },
    setSelectedLocation: (state, action: PayloadAction<{ city: string; country: string }>) => {
      state.selectedCity = action.payload.city;
      state.selectedCountry = action.payload.country;
    },
    clearSelectedLocation: (state) => {
      state.selectedCity = null;
      state.selectedCountry = null;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
    setResultsCount: (state, action: PayloadAction<number>) => {
      state.resultsCount = action.payload;
    },
  },
});

export const { 
  setActiveTab, 
  clearActiveTab,
  setSelectedLocation, 
  clearSelectedLocation,
  setSearchTerm,
  clearSearchTerm,
  setResultsCount
} = propertySearchSlice.actions;

export default propertySearchSlice.reducer;
