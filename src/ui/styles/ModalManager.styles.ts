import { SxProps, Theme } from '@mui/material/styles';

// Base modal paper styles
export const modalPaperSx = {
  borderRadius: '24px',
  border: '5px solid #EDF2FA',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
  width: '94%',
  maxWidth: '500px',
  height: '448px', 
  overflowY: 'auto',
  position: 'absolute',
  top: '14%',
  m: 0,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none', 
};

// Modal-specific styles
export const getModalPaperStyles = (modalType: string): SxProps<Theme> => {
  const baseStyles = { ...modalPaperSx };
  
  // Apply specific styles based on modal type
  switch (modalType) {
    case 'filterSettings':
      return {
        ...baseStyles,
        height: '600px', // Increased height for filter settings modal
        maxHeight: '80vh', // Ensure it doesn't go off-screen on smaller devices
      };
    case 'searchCity':
      return {
        ...baseStyles,
        // You can customize searchCity modal height here if needed
      };
    // Add more cases for other modal types as needed
    default:
      return baseStyles;
  }
};

export const modalContainerSx: SxProps<Theme> = {
  '& .MuiDialog-container': {
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
};
