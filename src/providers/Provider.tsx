'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/rootReducer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import ModalManager from '@/ui/ModalManager';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <ModalManager /> 
      </ThemeProvider>
    </Provider>
  );
}