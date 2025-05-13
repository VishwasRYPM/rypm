import { styled } from '@mui/material/styles';
import { TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import { Margarine } from 'next/font/google';
import PlaceIcon from '@mui/icons-material/Place';

export const StyledTextField = styled(TextField)(({ width }: { width?: string }) => ({
  width: width || '70vw',
  height: '40px',
  '& .MuiOutlinedInput-root': {
    height: '40px',
    borderRadius: '9999px',
    backgroundColor: '#EDF2FA',
    padding: '9px 10px',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
      marginRight: '-8px',
    },
  },
  '& input::placeholder': {
    color: '#A7BBCE',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '12px',
  },
}));

export const SearchIconWrapper = styled(InputAdornment)({
  '& .MuiSvgIcon-root': {
    color: '#a7bbce',
    fontSize: '15px',
    marginRight: '2px',
    
  },
  '&.MuiInputAdornment-root': {
    marginRight: '0px',
    padding:'0px',
  }
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
  marginRight: '2px',
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
  width: '60px',
  height: '32px',
  padding: '2px 8px',
  display: 'flex',
  alignItems: 'center',
});

export const SearchButtonText = styled(Typography)({
  color: '#20364D',
  whiteSpace: 'nowrap',
  fontSize: '12px',
  fontWeight: 700,
});

export const StyledPlaceIcon = styled(PlaceIcon)({
  width: '19px',
  height: '17px',
  fill: '#20364D',
  display: 'block', 

});

export const MapButtonText = styled(Typography)({
  color: '#20364D',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  display: 'flex',
  width: '28px',
  height: '18px',
  flexDirection: 'column',
  justifyContent: 'center',
});