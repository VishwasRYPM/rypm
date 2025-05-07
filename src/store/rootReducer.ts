import { configureStore } from '@reduxjs/toolkit';
import tenantReducer from '@/features/tenant/tenantprofile/slices/tenantSlice';
import modalReducer from '@/features/tenant/propertysearch/slices/modalSlice';
import propertySearchReducer from '@/features/tenant/propertysearch/slices/searchSlice';

export const store = configureStore({
  reducer: {
    tenant: tenantReducer,
    modal: modalReducer,
    propertySearch: propertySearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
