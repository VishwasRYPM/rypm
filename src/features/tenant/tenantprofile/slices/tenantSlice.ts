import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TenantState {
  activeMainTab: string;
  activeSubTab: string | null;
  activeForm: string | null;
  notifications: number;
}

const initialState: TenantState = {
  activeMainTab: 'Properties',
  activeSubTab: null,
  activeForm: null,
  notifications: 1,
};

const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    setActiveMainTab: (state, action: PayloadAction<string>) => {
      state.activeMainTab = action.payload;
      state.activeSubTab = null; 
      state.activeForm = null; 
    },
    setActiveSubTab: (state, action: PayloadAction<string>) => {
      state.activeSubTab = action.payload;
    },
    setActiveForm: (state, action: PayloadAction<string | null>) => {
      state.activeForm = action.payload;
    },
    clearNotifications: (state) => {
     state.notifications = 0;
   },
  },
});

export const { setActiveMainTab, setActiveSubTab, setActiveForm } = tenantSlice.actions;
export default tenantSlice.reducer;