import { styled } from '@mui/material/styles';
import { Box, Typography, Divider } from '@mui/material';

export const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '4px 16px',
  backgroundColor: 'white',
});

export const TabsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const TabItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  cursor: 'pointer',
  padding: '1px 0',
  position: 'relative',
  '&::after': isActive
    ? {
        content: '""',
        position: 'absolute',
        bottom: '-4px',
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: '#001D3D',
      }
    : {},
}));

export const TabText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive }) => ({
  color: isActive ? '#001D3D' : '#A7BBCE',
  fontWeight: isActive ? 600 : 400,
  fontSize: '12px',
}));

export const TabDivider = styled(Divider)({
  height: '14px',
  width: '1px',
  backgroundColor: '#A7BBCE',
  margin: 'auto 0',
});
