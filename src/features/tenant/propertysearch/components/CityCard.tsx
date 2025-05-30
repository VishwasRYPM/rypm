'use client'
import React from 'react';
import Image from 'next/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { setSelectedLocation, setActiveTab } from '../slices/searchSlice';

interface CityCardProps {
  city: string;
  country: string;
  propertiesCount: number;
  imageUrl: string;
  onClick?: () => void;
}

const CityCard: React.FC<CityCardProps> = ({ 
  city, 
  country, 
  propertiesCount, 
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const handleCityCardClick = () => {
    dispatch(setSelectedLocation({ city, country }));
    dispatch(setActiveTab('newProperties'));
  };

  return (
    <div 
      className="overflow-hidden relative w-full h-[100vw]"
      onClick={handleCityCardClick}
    >
      {/* Background Image */}
      <Image
        src={imageUrl || "/images/toronto.png"}
        alt={`${city}, ${country}`}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute bottom-0 w-full bg-[#EDF2FA] p-2 flex justify-between items-center">
        <div className="flex items-center text-[#001D3D] text-[16px] font-bold leading-[100%]">
          <LocationOnIcon sx={{ color: 'black', width: 23, height: 25, marginRight: 0.5 }} />
          <span>{city}, {country}</span>
        </div>
        <div className="text-gray-500 text-[12px] font-semibold">
          {propertiesCount} Properties
        </div>
      </div>
    </div>
  );
};

export default CityCard;
