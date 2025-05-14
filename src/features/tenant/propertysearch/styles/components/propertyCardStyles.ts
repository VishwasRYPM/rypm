import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';

const CardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
}));

const MediaContainer = styled(Box)(({ theme }) => ({
  position: 'relative', 
  width: '100%', 
  height: '393px',
  overflow: 'hidden',
}));

const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute', 
  top: 10, 
  right: 10, 
  display: 'flex', 
  gap: theme.spacing(1)
}));

const ShareButton = styled(IconButton)(({ theme }) => ({
  width: 30,
  height: 30,
}));

const FavoriteButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(237, 242, 250, 0.5)', 
  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
  width: 27,
  height: 27,
}));

const VideoControlsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute', 
  bottom: 10, 
  left: 10, 
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
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

const VideoOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.2)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  zIndex: 15,
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  },
  '&.visible': {
    opacity: 1,
  }
}));



const PlayPauseButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    background: 'rgba(0, 0, 0, 0.7)',
  }
}));

const CountText = styled(Typography)(({ theme }) => ({
  color: '#FFF',
  fontSize: '12px',
  fontWeight: 700
}));

const MainInfoContainer=styled(Box)(({ theme }) => ({
  backdropFilter: 'blur(3.55px)',
    background: 'rgba(32, 54, 77, 0.30)',
}));

const InfoBox1 = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  height: '30px',
  padding: '0 16px',
  width: '100%'
}));


const InfoBox2 = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'flex-start', 
  height: '30px', 
  padding: '0 16px',
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
    VideoOverlay,
    PlayPauseButton,
    MainInfoContainer,
};