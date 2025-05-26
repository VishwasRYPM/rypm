// 'use client';

// import { Provider } from 'react-redux';
// import { store } from '@/store/rootReducer';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '@/theme';
// import ModalManager from '@/ui/ModalManager';


// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//         <ModalManager /> 
//       </ThemeProvider>
//     </Provider>
//   );
// }


'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/rootReducer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import ModalManager from '@/ui/ModalManager';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  // Create a client
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
      },
    },
  }));

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <ModalManager />
          {/* Add React Query Devtools - will only show in development */}
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
