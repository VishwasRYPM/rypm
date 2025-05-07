import { styled } from '@mui/material/styles';
import { TextField, InputAdornment, IconButton, Typography } from '@mui/material';

export const StyledTextField = styled(TextField)(({ width }: { width?: string }) => ({
  width: width || '70vw',
  height: '38px',
  '& .MuiOutlinedInput-root': {
    height: '40px',
    borderRadius: '9999px',
    backgroundColor: '#EDF2FA',
    paddingLeft: '8px',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
      marginRight: '-8px',
    },
  },
}));

export const SearchIconWrapper = styled(InputAdornment)({
  '& .MuiSvgIcon-root': {
    color: '#a7bbce',
  },
});

export const SearchButtonAdornment = styled(InputAdornment)({
  backgroundColor: 'white',
  borderRadius: '24px',
  display: 'flex',
  justifyContent: 'end',
  padding: '2px',
  width: 'auto',
  marginLeft: 'auto',
});

export const MapButtonAdornment = styled(InputAdornment)({
  backgroundColor: 'white',
  borderRadius: '24px',
  display: 'flex',
  justifyContent: 'end',
  paddingRight: '6px',
  width: 'auto',
  marginLeft: 'auto',
});

export const SearchActionButton = styled(IconButton)({
  color: '#20364D',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  paddingRight: '4px',
});

export const MapActionButton = styled(IconButton)({
  color: '#a7bbce',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  paddingRight: '4px',
});

export const SearchButtonText = styled(Typography)({
  color: '#20364D',
  whiteSpace: 'nowrap',
  fontSize: '12px',
  fontWeight: 700,
});

export const MapButtonText = styled(Typography)({
  color: '#a7bbce',
  whiteSpace: 'nowrap',
});
