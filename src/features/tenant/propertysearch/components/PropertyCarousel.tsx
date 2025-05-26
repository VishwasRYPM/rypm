// // 'use client';
// // import React, { useRef, useState, useEffect } from 'react';
// // import { CircularProgress } from '@mui/material';
// // import PropertyCard from './PropertyCard';
// // import {
// //   CarouselContainer,
// //   LoadingContainer,
// //   CarouselContent
// // } from '../styles/components/propertyCarouselStyles';


// // interface PropertyData {
// //   id: string;
// //   videoUrl: string;
// //   images: string[];
// //   price: string;
// //   bedCount: number;
// //   bathCount: number;
// //   photoCount: number;
// //   videoCount: number;
// //   country: string;
// //   city: string;
// //   propertyType: string;
// //   daysAgo: number;
// // }

// // // interface PropertyCarouselProps {
// // //   city: string;
// // //   country: string | null;
// // // }
// // const PropertyCarousel: React.FC = () =>  {
// //   const properties: PropertyData[] = [
// //     {
// //       id: '1',
// //       videoUrl: '/videos/reel1.mp4',
// //       images: [
// //         '/images/toronto.png',
// //         '/images/Panama.png',
// //         '/images/new york, USA.png',
// //       ],
// //       price: '$1,638',
// //       bedCount: 3,
// //       bathCount: 2,
// //       photoCount: 12,
// //       videoCount: 2,
// //       country: 'USA',
// //       city: 'New York',
// //       propertyType: 'Apartment',
// //       daysAgo: 3,
// //     },
// //     {
// //       id: '2',
// //       videoUrl: '/videos/reel2.mp4',
// //       images: [
// //         '/images/toronto.png',
// //         '/images/Panama.png',
// //         '/images/new york, USA.png',
// //       ],
// //       price: '$980,000',
// //       bedCount: 2,
// //       bathCount: 2,
// //       photoCount: 8,
// //       videoCount: 1,
// //       country: 'USA',
// //       city: 'Los Angeles',
// //       propertyType: 'Condo',
// //       daysAgo: 5,
// //     },
// //     {
// //       id: '3',
// //       videoUrl: '/videos/reel1.mp4',
// //       images: [
// //         '/images/toronto.png',
// //         '/images/Panama.png',
// //         '/images/new york, USA.png',
// //       ],
// //       price: '$1,450,000',
// //       bedCount: 4,
// //       bathCount: 3,
// //       photoCount: 15,
// //       videoCount: 3,
// //       country: 'Canada',
// //       city: 'Toronto',
// //       propertyType: 'House',
// //       daysAgo: 2,
// //     },
// //     {
// //       id: '4',
// //       videoUrl: '/videos/reel2.mp4',
// //       images: [
// //         '/images/toronto.png',
// //         '/images/Panama.png',
// //         '/images/new york, USA.png',
// //       ],
// //       price: '$850,000',
// //       bedCount: 2,
// //       bathCount: 1,
// //       photoCount: 10,
// //       videoCount: 1,
// //       country: 'USA',
// //       city: 'Chicago',
// //       propertyType: 'Apartment',
// //       daysAgo: 7,
// //     },
// //     {
// //       id: '5',
// //       videoUrl: '/videos/reel1.mp4',
// //       images: [
// //         '/images/toronto.png',
// //         '/images/Panama.png',
// //         '/images/new york, USA.png',
// //       ],
// //       price: '$2,100,000',
// //       bedCount: 5,
// //       bathCount: 4,
// //       photoCount: 20,
// //       videoCount: 4,
// //       country: 'USA',
// //       city: 'Miami',
// //       propertyType: 'Villa',
// //       daysAgo: 1,
// //     },
// //   ];

// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);

// //   // Auto-scroll functionality (vertical)
// //   useEffect(() => {
// //     if (!isPaused && containerRef.current) {
// //       const interval = setInterval(() => {
// //         if (containerRef.current) {
// //           containerRef.current.scrollTop += 1;
          
// //           // Reset to beginning when reaching the end
// //           if (containerRef.current.scrollTop >= 
// //               (containerRef.current.scrollHeight - containerRef.current.clientHeight)) {
// //             containerRef.current.scrollTop = 0;
// //           }
// //         }
// //       }, 30);
      
// //       return () => clearInterval(interval);
// //     }
// //   }, [isPaused]);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setIsLoading(false);
// //     }, 1000);
    
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const handleTouchStart = () => {
// //     setIsPaused(true);
// //   };

// //   const handleTouchEnd = () => {
// //     setIsPaused(false);
// //   };

// //   const handleMouseDown = () => {
// //     setIsPaused(true);
// //   };

// //   const handleMouseUp = () => {
// //     setIsPaused(false);
// //   };

// //   const handleScroll = () => {
// //     setIsPaused(true);
    
// //     if (scrollTimeout.current) {
// //       clearTimeout(scrollTimeout.current);
// //     }
    
// //     scrollTimeout.current = setTimeout(() => {
// //       setIsPaused(false);
// //     }, 5000); 
// //   };
  
// //   const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  
// //   // Clean up the timeout on unmount
// //   useEffect(() => {
// //     return () => {
// //       if (scrollTimeout.current) {
// //         clearTimeout(scrollTimeout.current);
// //       }
// //     };
// //   }, []);
  
// //   return (
// //     <CarouselContainer>
// //       {isLoading ? (
// //         <LoadingContainer>
// //           <CircularProgress />
// //         </LoadingContainer>
// //       ) : (
// //         <CarouselContent
// //           ref={containerRef}
// //           onTouchStart={handleTouchStart}
// //           onTouchEnd={handleTouchEnd}
// //           onMouseDown={handleMouseDown}
// //           onMouseUp={handleMouseUp}
// //           onMouseLeave={handleMouseUp}
// //           onScroll={handleScroll}
// //         >
// //           {properties.map((property) => (
// //             <PropertyCard
// //               key={property.id}
// //               id={property.id}
// //               videoUrl={property.videoUrl}
// //               images={property.images}
// //               price={property.price}
// //               bedCount={property.bedCount}
// //               bathCount={property.bathCount}
// //               photoCount={property.photoCount}
// //               videoCount={property.videoCount}
// //               country={property.country}
// //               city={property.city}
// //               propertyType={property.propertyType}
// //               daysAgo={property.daysAgo}
// //             />
// //           ))}
// //         </CarouselContent>
// //       )}
// //     </CarouselContainer>
// //   );
// // };

// // export default PropertyCarousel;


// 'use client';
// import React, { useRef, useState, useEffect } from 'react';
// import { CircularProgress } from '@mui/material';
// import PropertyCard from './PropertyCard';
// import {
//   CarouselContainer,
//   LoadingContainer,
//   CarouselContent
// } from '../styles/components/propertyCarouselStyles';
// import { usePropertyData } from '../hooks/usePropertyData';

// const PropertyCarousel: React.FC = () => {
//   const { properties, isLoading, error } = usePropertyData();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

//   // Auto-scroll functionality (vertical)
//   useEffect(() => {
//     if (!isPaused && containerRef.current) {
//       const interval = setInterval(() => {
//         if (containerRef.current) {
//           containerRef.current.scrollTop += 1;
          
//           // Reset to beginning when reaching the end
//           if (containerRef.current.scrollTop >= 
//               (containerRef.current.scrollHeight - containerRef.current.clientHeight)) {
//             containerRef.current.scrollTop = 0;
//           }
//         }
//       }, 30);
      
//       return () => clearInterval(interval);
//     }
//   }, [isPaused]);

//   // Clean up the timeout on unmount
//   useEffect(() => {
//     return () => {
//       if (scrollTimeout.current) {
//         clearTimeout(scrollTimeout.current);
//       }
//     };
//   }, []);

//   const handleTouchStart = () => {
//     setIsPaused(true);
//   };

//   const handleTouchEnd = () => {
//     setIsPaused(false);
//   };

//   const handleMouseDown = () => {
//     setIsPaused(true);
//   };

//   const handleMouseUp = () => {
//     setIsPaused(false);
//   };

//   const handleScroll = () => {
//     setIsPaused(true);
    
//     if (scrollTimeout.current) {
//       clearTimeout(scrollTimeout.current);
//     }
    
//     scrollTimeout.current = setTimeout(() => {
//       setIsPaused(false);
//     }, 5000); 
//   };

//   if (error) {
//     return (
//       <CarouselContainer>
//         <div className="p-4 text-center text-red-500">
//           Error loading properties: {error}
//         </div>
//       </CarouselContainer>
//     );
//   }
  
//   return (
//     <CarouselContainer>
//       {isLoading ? (
//         <LoadingContainer>
//           <CircularProgress />
//         </LoadingContainer>
//       ) : (
//         <CarouselContent
//           ref={containerRef}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//           onScroll={handleScroll}
//         >
//           {properties.map((property) => (
//             <PropertyCard
//               key={property.id}
//               {...property}
//             />
//           ))}
//         </CarouselContent>
//       )}
//     </CarouselContainer>
//   );
// };

// export default PropertyCarousel;

// 'use client';
// import React, { useRef, useState, useEffect } from 'react';
// import { CircularProgress } from '@mui/material';
// import PropertyCard from './PropertyCard';
// import {
//   CarouselContainer,
//   LoadingContainer,
//   CarouselContent
// } from '../styles/components/propertyCarouselStyles';
// import { usePropertyData } from '../hooks/usePropertyData';

// const PropertyCarousel: React.FC = () => {
//   const { properties, isLoading, error } = usePropertyData();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const [visibleRange, setVisibleRange] = useState({ start: 0, end: 5 }); // Initial visible range

//   // Auto-scroll functionality (vertical)
//   useEffect(() => {
//     if (!isPaused && containerRef.current) {
//       const interval = setInterval(() => {
//         if (containerRef.current) {
//           containerRef.current.scrollTop += 1;
          
//           // Reset to beginning when reaching the end
//           if (containerRef.current.scrollTop >= 
//               (containerRef.current.scrollHeight - containerRef.current.clientHeight)) {
//             containerRef.current.scrollTop = 0;
//           }
//         }
//       }, 30);
      
//       return () => clearInterval(interval);
//     }
//   }, [isPaused]);

//   // Update visible range based on scroll position
//   useEffect(() => {
//     if (!containerRef.current) return;

//     const updateVisibleRange = () => {
//       if (!containerRef.current) return;
      
//       const containerHeight = containerRef.current.clientHeight;
//       const scrollTop = containerRef.current.scrollTop;
      
//       // Estimate which items are visible based on scroll position
//       // Assuming each card is roughly 300px tall (adjust as needed)
//       const cardHeight = 393;
//       const buffer = 2; // Buffer items above and below viewport
      
//       const startIndex = Math.max(0, Math.floor(scrollTop / cardHeight) - buffer);
//       const endIndex = Math.min(
//         properties.length - 1,
//         Math.ceil((scrollTop + containerHeight) / cardHeight) + buffer
//       );
      
//       setVisibleRange({ start: startIndex, end: endIndex });
//     };

//     const container = containerRef.current;
//     container.addEventListener('scroll', updateVisibleRange);
    
//     // Initial update
//     updateVisibleRange();
    
//     return () => {
//       container.removeEventListener('scroll', updateVisibleRange);
//     };
//   }, [properties.length]);

//   // Clean up the timeout on unmount
//   useEffect(() => {
//     return () => {
//       if (scrollTimeout.current) {
//         clearTimeout(scrollTimeout.current);
//       }
//     };
//   }, []);

//   const handleTouchStart = () => {
//     setIsPaused(true);
//   };

//   const handleTouchEnd = () => {
//     setIsPaused(false);
//   };

//   const handleMouseDown = () => {
//     setIsPaused(true);
//   };

//   const handleMouseUp = () => {
//     setIsPaused(false);
//   };

//   const handleScroll = () => {
//     setIsPaused(true);
    
//     if (scrollTimeout.current) {
//       clearTimeout(scrollTimeout.current);
//     }
    
//     scrollTimeout.current = setTimeout(() => {
//       setIsPaused(false);
//     }, 5000); 
//   };

//   if (error) {
//     return (
//       <CarouselContainer>
//         <div className="p-4 text-center text-red-500">
//           Error loading properties: {error}
//         </div>
//       </CarouselContainer>
//     );
//   }
  
//   return (
//     <CarouselContainer>
//       {isLoading ? (
//         <LoadingContainer>
//           <CircularProgress />
//         </LoadingContainer>
//       ) : (
//         <CarouselContent
//           ref={containerRef}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//           onScroll={handleScroll}
//         >
//           {/* Render all items but with placeholders for non-visible ones */}
//           {properties.map((property, index) => {
//             const isInVisibleRange = index >= visibleRange.start && index <= visibleRange.end;
            
//             if (!isInVisibleRange) {
//               // Render a placeholder with the same height
//               return (
//                 <div 
//                   key={property.id}
//                   style={{ 
//                     height: '55.63vh', // Same height as PropertyCard
//                     width: '100%',
//                     visibility: 'hidden'
//                   }}
//                 />
//               );
//             }
            
//             return (
//               <PropertyCard
//                 key={property.id}
//                 {...property}
//               />
//             );
//           })}
//         </CarouselContent>
//       )}
//     </CarouselContainer>
//   );
// };

// export default PropertyCarousel;






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
//import { ErrorIcon } from '@/ui/icons'; // Assuming you have this icon

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
