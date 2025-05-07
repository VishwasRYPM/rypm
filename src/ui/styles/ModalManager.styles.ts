import { SxProps, Theme } from '@mui/material/styles';

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

export const modalContainerSx: SxProps<Theme> = {
  '& .MuiDialog-container': {
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
};
