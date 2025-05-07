'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography} from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import {GalleryIcon, VideoIcon, ShowerIcon, LocationIcon, ApartmentIcon} from '@/ui/icons';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
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
} from '../styles/components/propertyCardStyles';

interface PropertyCardProps {
  id: string;
  videoUrl: string;
  images: string[];
  price: string;
  bedCount: number;
  bathCount: number;
  photoCount: number;
  videoCount: number;
  country: string;
  city: string;
  propertyType: string;
  daysAgo: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  videoUrl,
  images,
  price,
  bedCount,
  bathCount,
  photoCount,
  videoCount,
  country,
  city,
  propertyType,
  daysAgo,
}) => {
  const [showVideo, setShowVideo] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video playback and transition to images
  useEffect(() => {
    if (showVideo && videoRef.current) {
      // Set up video to autoplay muted
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPaused(false);
          })
          .catch(error => {
            console.error("Video autoplay was prevented:", error);
            setIsVideoPaused(true);
            setShowVideo(false);
          });
      }
      
      videoRef.current.onended = () => {
        setShowVideo(false);
      };
    }
  }, [showVideo]);

  // Handle image carousel auto-scrolling
  useEffect(() => {
    if (!showVideo) {
      const imageInterval = setInterval(() => {
        setIsImageTransitioning(true);
        
        setTimeout(() => {
          setCurrentImageIndex(prevIndex => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          
          setTimeout(() => {
            setIsImageTransitioning(false);
          }, 300);
        }, 300);
      }, 3000);
      
      return () => clearInterval(imageInterval);
    }
  }, [showVideo, images.length]);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPaused(false);
    } else {
      videoRef.current.pause();
      setIsVideoPaused(true);
    }
  };

  return (
    <CardContainer>
      <MediaContainer>
        {showVideo ? (
          <video
            ref={videoRef}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            src={videoUrl}
            muted
            playsInline
            onError={() => {
              console.error("Video failed to load");
              setShowVideo(false); // Switch to images if video fails
            }}
          />
        ) : (
          // Image carousel
          <Image
            src={images[currentImageIndex] || '/images/property-placeholder.jpg'}
            alt={`${city} property image ${currentImageIndex + 1}`}
            fill
            style={{ 
              objectFit: 'cover',
              opacity: isImageTransitioning ? 0.7 : 1,
              transition: 'opacity 0.3s ease-in-out',
            }}
            priority
          />
        )}
        
        <ActionButtonsContainer>
          <ShareButton size="small">
            <IosShareIcon sx={{ fontSize: 20 }} />
          </ShareButton>
          <FavoriteButton size="small">
            <FavoriteIcon sx={{ fontSize: 20 }} />
          </FavoriteButton>
        </ActionButtonsContainer>
        
        {showVideo && (
          <VideoControlsContainer onClick={toggleVideoPlayback}>
            {isVideoPaused ? (
              <PlayArrowIcon sx={{ color: 'white' }} />
            ) : (
              <PauseIcon sx={{ color: 'white' }} />
            )}
          </VideoControlsContainer>
        )}
        
        {!showVideo && (
          <CarouselIndicatorsContainer>
            {images.map((_, index) => (
              <Box key={index} />
            ))}
          </CarouselIndicatorsContainer>
        )}
        
        <MediaCountContainer>
          <PhotoCountBox>
            <GalleryIcon width={14} height={14} className="mr-0.5 text-white"/>
            <CountText variant="body2">
              {photoCount}
            </CountText>
          </PhotoCountBox>
          <VideoCountBox>
            <VideoIcon width={14} height={14} className="mr-0.5 text-white" />
            <CountText variant="body2">
              {videoCount}
            </CountText>
          </VideoCountBox>
        </MediaCountContainer>
      </MediaContainer>
      
      <InfoBox1>
        <Typography variant="subtitle1" fontWeight="bold" color="#20364D">
          {price}
        </Typography>
        <AmenitiesContainer>
          <AmenityItem>
            <BedIcon sx={{ fontSize: 18, marginRight: 0.5, color: '#A7BBCE' }} />
            <Typography variant="body2" color="#20364D">{bedCount}</Typography>
          </AmenityItem>
          <AmenityItem>
            <ShowerIcon width={13} height={12} className="text-[#A7BBCE] mr-1"/>
            <Typography variant="body2" color="#20364D">{bathCount}</Typography>
          </AmenityItem>
        </AmenitiesContainer>
      </InfoBox1>
      
      <InfoBox2>
        <LocationContainer>
          <LocationIcon width={11} height={16} className="text-[#A7BBCE] mr-1 flex-shrink-0" />
          <Typography variant="body2" color="white">
            {city}, {country}
          </Typography>
        </LocationContainer>
        <PropertyTypeContainer>
          <ApartmentIcon width={14} height={14} className="text-[#A7BBCE] mr-2" />
          <Typography variant="body2" color="white" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            {propertyType}
            <Divider />
            <DaysAgoContainer>
              <AccessTimeIcon sx={{ fontSize: 16, marginRight: 0.5, color: '#A7BBCE' }} />
              {daysAgo} Days Ago
            </DaysAgoContainer>
          </Typography>
        </PropertyTypeContainer>
      </InfoBox2>
    </CardContainer>
  );
};

export default PropertyCard;
