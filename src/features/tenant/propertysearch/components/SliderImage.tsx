// components/PropertyCard.tsx
import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import {
  MediaContainer,
  MainInfoContainer,
  InfoBox1,
  InfoBox2,
  LocationContainer,
  AmenitiesContainer,
  AmenityItem,
  ActionButtonsContainer
} from '../styles/components/propertyCardStyles'; // import your styled components here
import { BedIcon, HeartUnFillIcon, LocationIcon, ShareIcon, ShowerIcon } from '@/ui/icons';

interface PropertyCardProps {
  image: string;
  price: string;
    city: string;
    country: string;
  beds: number;
  baths: number;
  onShare?: () => void;
  onFavorite?: () => void;
  height?: string;
  width?: string;
}

const SliderImage: React.FC<PropertyCardProps> = ({
  image,
  price,
    city,
  country,
  beds,
  baths,
  onShare,
  onFavorite,
}) => {
  return (
    <MediaContainer height='39.76vh' width='86.01vw' className="rounded-[16px] flex-shrink-0 scrollbar-hide">
      <Image src={image} alt="Property" width={1000} height={1000} className="w-full h-full" />

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
              <BedIcon className="mr-1" />
              <Typography variant="body2">{beds}</Typography>
            </AmenityItem>
            <AmenityItem>
              <ShowerIcon className="mr-1" />
              <Typography variant="body2">{baths}</Typography>
            </AmenityItem>
          </AmenitiesContainer>
        </InfoBox2>
      </MainInfoContainer>

      <ActionButtonsContainer>
        <div onClick={onShare}>
          <ShareIcon height={30} width={30} />
        </div>
        <div onClick={onFavorite}>
          <HeartUnFillIcon />
        </div>
      </ActionButtonsContainer>
    </MediaContainer>
  );
};

export default SliderImage;
