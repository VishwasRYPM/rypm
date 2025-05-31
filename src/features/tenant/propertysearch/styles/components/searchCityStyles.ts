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
    backgroundColor: '#FFF',
    padding: '9px 10px',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: '1.5px solid #F3F4F6', // override hover border
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: "1.5px solid #F3F4F6",
    },
    '& .MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
      marginRight: '-5px',
    },
  },
  '& input::placeholder': {
    color: '#A7BBCE',
    fontSize: 'clamp(12px, 3.5vw, 14px)',
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

// New styled component for mic icon wrapper
export const MicIconWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '21px',
  height: '15px',
  marginRight: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  // Ensure it doesn't affect the input width
  flexShrink: 0,
});

// Styled component for the ripple effect
export const RippleEffect = styled('div')<{ isActive: boolean; color: string }>(({ isActive, color }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: color,
  transform: 'translate(-50%, -50%)',
  opacity: isActive ? 0.3 : 0,
  zIndex: 0,
  animation: isActive ? 'ripple 1.5s infinite' : 'none',
  '@keyframes ripple': {
    '0%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: 1 },
    '100%': { transform: 'translate(-50%, -50%) scale(2)', opacity: 0 },
  },
}));

// Styled component for the mic icon itself
export const MicIconContainer = styled('div')<{ isListening: boolean; color: string }>(({ isListening, color }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: color,
  filter: isListening ? 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.5))' : 'none',
  animation: isListening ? 'pulse 1s infinite' : 'none',
  '@keyframes pulse': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  },
}));

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
  backgroundColor: '#F9FAFB',
  borderRadius: '24px',
  display: 'flex',
  justifyContent: 'end',
  paddingRight: '6px',
  width: 'auto',
  marginLeft: 'auto',
  marginRight: '2px',
});

export const SearchActionButton = styled(IconButton)({
  color: '#001D3D',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  paddingRight: '4px',
});

export const MapActionButton = styled(IconButton)({
  color: '#001D3D',
  width: '60px',
  height: '32px',
  padding: '2px 8px',
  display: 'flex',
  alignItems: 'center',
  gap:'4px',
});

export const SearchButtonText = styled(Typography)({
  color: '#001D3D',
  whiteSpace: 'nowrap',
  fontSize: '12px',
  fontWeight: 700,
});

export const StyledPlaceIcon = styled(PlaceIcon)({
  width: '19px',
  height: '17px',
  fill: '#001D3D',
  display: 'block', 
});

export const MapButtonText = styled(Typography)({
  color: '#001D3D',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  display: 'flex',
  width: '28px',
  height: '18px',
  flexDirection: 'column',
  justifyContent: 'center',
});
