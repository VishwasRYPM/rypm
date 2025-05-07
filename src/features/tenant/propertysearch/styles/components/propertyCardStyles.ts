import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';

const CardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '16px',
  margin: '0 auto',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
}));

const MediaContainer = styled(Box)(({ theme }) => ({
  position: 'relative', 
  width: '100%', 
  height: '330px',
  borderRadius: '16px 16px 0 0',
  overflow: 'hidden'
}));

const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute', 
  top: 10, 
  right: 10, 
  display: 'flex', 
  gap: theme.spacing(1)
}));

const ShareButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(237, 242, 250, 0.5)', 
  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
  width: 27,
  height: 27,
  color: '#20364D'
}));

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(237, 242, 250, 0.5)', 
  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
  width: 27,
  height: 27,
  color: '#EF6D7F'
}));

const VideoControlsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute', 
  bottom: 10, 
  left: 10, 
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  borderRadius: '50%', 
  width: 36, 
  height: 36, 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  cursor: 'pointer'
}));

const CarouselIndicatorsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute', 
  bottom: 10, 
  left: 0, 
  right: 0, 
  display: 'flex', 
  justifyContent: 'center', 
  gap: theme.spacing(1)
}));

const MediaCountContainer = styled(Box)(({ theme }) => ({
  position: 'absolute', 
  bottom: 10, 
  right: 10, 
  display: 'flex',
  gap: theme.spacing(1),
  width: '83px',
  height: '19px',
  backgroundColor: 'rgba(248, 248, 248, 0.20)',
  backdropFilter: 'blur(2.5px)',
  borderRadius: '20px',
  justifyContent: 'center',
  alignItems: 'center'
}));

const PhotoCountBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center',
  padding: '0 4px'
}));

const VideoCountBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center',
  backgroundColor: 'rgba(201, 215, 229, 0.20)',
  backdropFilter: 'blur(2.5px)',
  borderRadius: '13.97px',
  padding: '0 8px',
  height: '19px'
}));

const CountText = styled(Typography)(({ theme }) => ({
  color: '#FFF',
  fontSize: '12px',
  fontWeight: 700
}));

const InfoBox1 = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  backgroundColor: '#EDF2FA', 
  height: '38px',
  padding: '0 8px',
  width: '100%'
}));

const InfoBox2 = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  backgroundColor: '#20364D', 
  height: '38px', 
  padding: '0 8px',
  borderRadius: '0 0 16px 16px',
  width: '100%'
}));

const AmenitiesContainer = styled(Box)(({ theme }) => ({
  display: 'flex', 
  gap: theme.spacing(2)
}));

const AmenityItem = styled(Box)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center'
}));

const LocationContainer = styled(Box)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center'
}));

const PropertyTypeContainer = styled(Box)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center'
}));

const Divider = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  height: '24px', 
  width: '2px', 
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  color: '#365B81'
}));

const DaysAgoContainer = styled(Box)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center'
}));

export  {
  CardContainer,
    MediaContainer,
    ActionButtonsContainer,
    ShareButton,
    FavoriteButton,
    VideoControlsContainer,
    CarouselIndicatorsContainer,
    MediaCountContainer,
    PhotoCountBox,
    VideoCountBox,
    CountText,
    InfoBox1,
    InfoBox2,
    AmenitiesContainer,
    AmenityItem,
    LocationContainer,
    PropertyTypeContainer,
    Divider,
    DaysAgoContainer,
};