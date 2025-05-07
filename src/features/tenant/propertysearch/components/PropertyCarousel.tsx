'use client';
import React, { useRef, useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import PropertyCard from './PropertyCard';
import {
  CarouselContainer,
  LoadingContainer,
  CarouselContent
} from '../styles/components/propertyCarouselStyles';


interface PropertyData {
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

interface PropertyCarouselProps {
  city: string;
  country: string | null;
}
const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ city, country }) =>  {
  const properties: PropertyData[] = [
    {
      id: '1',
      videoUrl: '/videos/reel1.mp4',
      images: [
        '/images/toronto.png',
        '/images/Panama.png',
        '/images/new york, USA.png',
      ],
      price: '$1,638',
      bedCount: 3,
      bathCount: 2,
      photoCount: 12,
      videoCount: 2,
      country: 'USA',
      city: 'New York',
      propertyType: 'Apartment',
      daysAgo: 3,
    },
    {
      id: '2',
      videoUrl: '/videos/reel2.mp4',
      images: [
        '/images/toronto.png',
        '/images/Panama.png',
        '/images/new york, USA.png',
      ],
      price: '$980,000',
      bedCount: 2,
      bathCount: 2,
      photoCount: 8,
      videoCount: 1,
      country: 'USA',
      city: 'Los Angeles',
      propertyType: 'Condo',
      daysAgo: 5,
    },
    {
      id: '3',
      videoUrl: '/videos/reel1.mp4',
      images: [
        '/images/toronto.png',
        '/images/Panama.png',
        '/images/new york, USA.png',
      ],
      price: '$1,450,000',
      bedCount: 4,
      bathCount: 3,
      photoCount: 15,
      videoCount: 3,
      country: 'Canada',
      city: 'Toronto',
      propertyType: 'House',
      daysAgo: 2,
    },
    {
      id: '4',
      videoUrl: '/videos/reel2.mp4',
      images: [
        '/images/toronto.png',
        '/images/Panama.png',
        '/images/new york, USA.png',
      ],
      price: '$850,000',
      bedCount: 2,
      bathCount: 1,
      photoCount: 10,
      videoCount: 1,
      country: 'USA',
      city: 'Chicago',
      propertyType: 'Apartment',
      daysAgo: 7,
    },
    {
      id: '5',
      videoUrl: '/videos/reel1.mp4',
      images: [
        '/images/toronto.png',
        '/images/Panama.png',
        '/images/new york, USA.png',
      ],
      price: '$2,100,000',
      bedCount: 5,
      bathCount: 4,
      photoCount: 20,
      videoCount: 4,
      country: 'USA',
      city: 'Miami',
      propertyType: 'Villa',
      daysAgo: 1,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-scroll functionality (vertical)
  useEffect(() => {
    if (!isPaused && containerRef.current) {
      const interval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop += 1;
          
          // Reset to beginning when reaching the end
          if (containerRef.current.scrollTop >= 
              (containerRef.current.scrollHeight - containerRef.current.clientHeight)) {
            containerRef.current.scrollTop = 0;
          }
        }
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  const handleScroll = () => {
    setIsPaused(true);
    
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    scrollTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000); 
  };
  
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Clean up the timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);
  
  return (
    <CarouselContainer>
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
        <CarouselContent
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onScroll={handleScroll}
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              videoUrl={property.videoUrl}
              images={property.images}
              price={property.price}
              bedCount={property.bedCount}
              bathCount={property.bathCount}
              photoCount={property.photoCount}
              videoCount={property.videoCount}
              country={property.country}
              city={property.city}
              propertyType={property.propertyType}
              daysAgo={property.daysAgo}
            />
          ))}
        </CarouselContent>
      )}
    </CarouselContainer>
  );
};

export default PropertyCarousel;
