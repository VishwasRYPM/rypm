// import { styled } from '@mui/material/styles';
// import { Box } from '@mui/material';

// export const CarouselContainer = styled(Box)(({ theme }) => ({
// }));

// export const LoadingContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100%',
// }));

// export const CarouselContent = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(2),
//   overflowY: 'auto',
//   height: '100%',
//   scrollBehavior: 'smooth',
//   '&::-webkit-scrollbar': {
//     display: 'none',
//   },
//   msOverflowStyle: 'none',
//   scrollbarWidth: 'none',
// }));

import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CarouselContainer = styled(Box)(({ theme }) => ({
  // You can adjust height as needed
  // height: 'calc(100vh - 200px)',
}));

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));

export const CarouselContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  overflowY: 'auto',
  height: '100%',
  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
}));
