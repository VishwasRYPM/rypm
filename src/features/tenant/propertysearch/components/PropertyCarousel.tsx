'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import PropertyCard from './PropertyCard';
import PropertyCardSkeleton from './PropertyCardSkeleton';
import { usePropertyInfiniteQuery } from '../hooks/usePropertyInfiniteQuery';
import {
  CarouselContainer,
  LoadingContainer,
  CarouselContent
} from '../styles/components/propertyCarouselStyles';

const PropertyCarousel: React.FC = () => {
  const { 
    properties, 
    isLoading, 
    isFetchingNextPage, 
    error, 
    hasNextPage, 
    lastElementRef,
    refetch
  } = usePropertyInfiniteQuery(10); // Load 10 items initially and per batch

  // Handle initial loading state
  if (isLoading && properties.length === 0) {
    return (
      <CarouselContainer>
        <LoadingContainer>
          {/* Show multiple skeleton loaders during initial load */}
          {[...Array(3)].map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </LoadingContainer>
      </CarouselContainer>
    );
  }

  // Handle error state
  if (error && properties.length === 0) {
    return (
      <CarouselContainer>
        <Box className="p-4 flex flex-col items-center justify-center h-full">
          {/* <ErrorIcon className="mb-2 text-red-500" /> */}
          <Typography variant="body1" className="text-center mb-4">
            Something went wrong while loading properties.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => refetch()}
          >
            Try Again
          </Button>
        </Box>
      </CarouselContainer>
    );
  }
  
  return (
    <CarouselContainer>
      <CarouselContent>
        {/* Render property cards */}
        {properties.map((property, index) => (
          <PropertyCard
            key={property.id}
            {...property}
          />
        ))}
        
        {/* Loading indicators for next page */}
        {isFetchingNextPage && (
          <>
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
          </>
        )}
        
        {/* Error state for subsequent fetches */}
        {error && properties.length > 0 && !isFetchingNextPage && (
          <Box className="p-4 flex flex-col items-center">
            <Typography variant="body2" className="text-center mb-2 text-red-500">
              Failed to load more properties
            </Typography>
            <Button 
              variant="outlined" 
              size="small" 
              onClick={() => refetch()}
            >
              Retry
            </Button>
          </Box>
        )}
        
        {/* Last element to observe for infinite scrolling */}
        {hasNextPage && (
          <div 
            ref={lastElementRef}
            style={{ height: '20px', width: '100%' }}
          />
        )}
        
        {/* End of list message */}
        {!hasNextPage && properties.length > 0 && !isFetchingNextPage && (
          <Box sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
            You've reached the end of the list
          </Box>
        )}
      </CarouselContent>
    </CarouselContainer>
  );
};

export default PropertyCarousel;
