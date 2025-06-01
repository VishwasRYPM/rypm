'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typography } from '@mui/material';
import { ShowerIcon, LocationIcon, BedIcon, ShareIcon, HeartUnFillIcon } from '@/ui/icons';
import HeartFillIcon from '@/ui/icons/HeartFillIcon';
import PropertyMedia from './shared/PropertyMedia';
import {
  CardContainer,
  MediaContainer,
  ActionButtonsContainer,
  InfoBox1,
  InfoBox2,
  AmenitiesContainer,
  AmenityItem,
  LocationContainer,
  MainInfoContainer,
  MediaCountContainer,
  CountText
} from '../styles/components/propertyCardStyles';
import { PropertyData } from '../hooks/usePropertyData';

interface PropertyCardProps extends PropertyData {
  onClick?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  videoUrl,
  price,
  bedCount,
  bathCount,
  country,
  city,
  onClick,
  photoCount = 0,
  videoCount = 0
}) => {
  const router = useRouter();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Navigate to property details page
      router.push(`/tenant/properties/${id}`);
    }
  };
  
  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    // Implement share functionality
  };
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    setIsFavorited(!isFavorited);
  };

  const handleMediaChange = (isVideo: boolean) => {
    setIsVideoPlaying(isVideo);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <MediaContainer isDetailView={false} elevation={1}>
        {/* Use the optimized PropertyMedia component */}
        <PropertyMedia 
          videoUrl={videoUrl} 
          onMediaChange={handleMediaChange}
        />
        
        {/* Media count indicator */}
        {/* {(photoCount > 0 || videoCount > 0) && (
          <MediaCountContainer>
            {photoCount > 0 && (
              <div className="flex items-center">
                <img src="/icons/photo.svg" alt="Photos" className="w-4 h-4 mr-1" />
                <CountText>{photoCount}</CountText>
              </div>
            )}
            {videoCount > 0 && (
              <div className="flex items-center ml-2">
                <img src="/icons/video.svg" alt="Videos" className="w-4 h-4 mr-1" />
                <CountText>{videoCount}</CountText>
              </div>
            )}
          </MediaCountContainer>
        )} */}
        
        {/* Property info overlay */}
        <MainInfoContainer className="absolute bottom-0 left-0 right-0 flex flex-col text-[#FFF]">
          <InfoBox1>
            <Typography variant="subtitle1" fontWeight="bold" fontSize="18px">
              {price}
            </Typography>
          </InfoBox1>
          
          <InfoBox2>
            <LocationContainer>
              <LocationIcon width={11} height={16} className="mr-1 flex-shrink-0" />
              <Typography variant="body2" color="white">
                {city}, {country}
              </Typography>
            </LocationContainer>

            <AmenitiesContainer>
              <AmenityItem>
                <BedIcon className='mr-1' />
                <Typography variant="body2">{bedCount}</Typography>
              </AmenityItem>

              <AmenityItem>
                <ShowerIcon className="mr-1"/>
                <Typography variant="body2">{bathCount}</Typography>
              </AmenityItem>
            </AmenitiesContainer>
          </InfoBox2>
        </MainInfoContainer>

        {/* Action buttons */}
        <ActionButtonsContainer>
          <div onClick={handleShareClick}>
            <ShareIcon height={30} width={30} />
          </div>
          <div onClick={handleFavoriteClick} className="cursor-pointer">
            {isFavorited ? (
              <HeartFillIcon className="transition-transform hover:scale-110" />
            ) : (
              <HeartUnFillIcon className="transition-transform hover:scale-110" />
            )}
          </div>
        </ActionButtonsContainer>
      </MediaContainer>
    </CardContainer>
  );
};

export default PropertyCard;
