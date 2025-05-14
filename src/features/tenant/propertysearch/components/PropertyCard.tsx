// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { Box, Typography} from '@mui/material';
// import {GalleryIcon, VideoIcon, ShowerIcon, LocationIcon, BedIcon,ShareIcon,HeartUnFillIcon} from '@/ui/icons';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import {
//   CardContainer,
//     MediaContainer,
//     ActionButtonsContainer,
//     ShareButton,
//     FavoriteButton,
//     VideoControlsContainer,
//     CarouselIndicatorsContainer,
//     MediaCountContainer,
//     PhotoCountBox,
//     VideoCountBox,
//     CountText,
//     InfoBox1,
//     InfoBox2,
//     AmenitiesContainer,
//     AmenityItem,
//     LocationContainer,
//     PropertyTypeContainer,
//     Divider,
//     DaysAgoContainer,
// } from '../styles/components/propertyCardStyles';

// interface PropertyCardProps {
//   id: string;
//   videoUrl: string;
//   images: string[];
//   price: string;
//   bedCount: number;
//   bathCount: number;
//   photoCount: number;
//   videoCount: number;
//   country: string;
//   city: string;
//   propertyType: string;
//   daysAgo: number;
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({
//   id,
//   videoUrl,
//   images,
//   price,
//   bedCount,
//   bathCount,
//   photoCount,
//   videoCount,
//   country,
//   city,
//   propertyType,
//   daysAgo,
// }) => {
//   const [showVideo, setShowVideo] = useState(true);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isImageTransitioning, setIsImageTransitioning] = useState(false);
//   const [isVideoPaused, setIsVideoPaused] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//    const [isTransitioningFromVideo, setIsTransitioningFromVideo] = useState(false);
//   const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
//   const containerRef = useRef<HTMLDivElement>(null);
//   // Handle video playback and transition to images
//   useEffect(() => {
//     if (showVideo && videoRef.current) {
//       // Set up video to autoplay muted
//       videoRef.current.muted = true;
//       videoRef.current.playsInline = true;
      
//       const playPromise = videoRef.current.play();
      
//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => {
//             setIsVideoPaused(false);
//           })
//           .catch(error => {
//             console.error("Video autoplay was prevented:", error);
//             setIsVideoPaused(true);
//             setShowVideo(false);
//           });
//       }
      
//       videoRef.current.onended = () => {
//         setShowVideo(false);
//       };
//     }
//   }, [showVideo]);

//   // Handle image carousel auto-scrolling
//   useEffect(() => {
//     if (!showVideo) {
//       const imageInterval = setInterval(() => {
//         setIsImageTransitioning(true);
        
//         setTimeout(() => {
//           setCurrentImageIndex(prevIndex => 
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//           );
          
//           setTimeout(() => {
//             setIsImageTransitioning(false);
//           }, 300);
//         }, 300);
//       }, 3000);
      
//       return () => clearInterval(imageInterval);
//     }
//   }, [showVideo, images.length]);

//   const toggleVideoPlayback = () => {
//     if (!videoRef.current) return;
    
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsVideoPaused(false);
//     } else {
//       videoRef.current.pause();
//       setIsVideoPaused(true);
//     }
//   };

//     return (
//       <CardContainer>
//         <MediaContainer>
//           {showVideo ? (
//             <video
//               ref={videoRef}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//               }}
//               src={videoUrl}
//               muted
//               playsInline
//               onError={() => {
//                 console.error("Video failed to load");
//                 setShowVideo(false); // Switch to images if video fails
//               }}
//             />
//           ) : (
//             // Image carousel
//             <Image
//               src={images[currentImageIndex] || '/images/property-placeholder.jpg'}
//               alt={`${city} property image ${currentImageIndex + 1}`}
//               fill
//               style={{ 
//                 objectFit: 'cover',
//                 opacity: isImageTransitioning ? 0.7 : 1,
//                 transition: 'opacity 0.3s ease-in-out',
//               }}
//               priority
//             />
//           )}
          
//           {/* Position both InfoBoxes at the bottom of the media container */}
//           <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col text-[#FFF]">
//             <InfoBox1>
//               <Typography variant="subtitle1" fontWeight="bold" >
//                 {price}
//               </Typography>
//             </InfoBox1>
            
//             <InfoBox2>
//               <LocationContainer>
//                 <LocationIcon width={11} height={16} className=" mr-1 flex-shrink-0" />
//                 <Typography variant="body2" color="white">
//                   {city}, {country}
//                 </Typography>
//               </LocationContainer>
//               <AmenitiesContainer>
//                 <AmenityItem>
//                   <BedIcon className='mr-1' />
//                   <Typography variant="body2">{bedCount}</Typography>
//                 </AmenityItem>
//                 <AmenityItem>
//                   <ShowerIcon  className=" mr-1"/>
//                   <Typography variant="body2">{bathCount}</Typography>
//                 </AmenityItem>
//               </AmenitiesContainer>
//             </InfoBox2>
//           </div>
          
//           <ActionButtonsContainer>
//               <ShareIcon height={30} width={30}/>
           
//               <HeartUnFillIcon />
//           </ActionButtonsContainer>
          
//           {/* Other controls remain the same */}
//           {showVideo && (
//             <VideoControlsContainer onClick={toggleVideoPlayback}>
//               {isVideoPaused ? (
//                 <PlayArrowIcon sx={{ color: 'white' }} />
//               ) : (
//                 <PauseIcon sx={{ color: 'white' }} />
//               )}
//             </VideoControlsContainer>
//           )}
          
//           {!showVideo && (
//             <CarouselIndicatorsContainer>
//               {images.map((_, index) => (
//                 <Box key={index} />
//               ))}
//             </CarouselIndicatorsContainer>
//           )}
          
//           <MediaCountContainer>
//             <PhotoCountBox>
//               <GalleryIcon width={14} height={14} className="mr-0.5 text-white"/>
//               <CountText variant="body2">
//                 {photoCount}
//               </CountText>
//             </PhotoCountBox>
//             <VideoCountBox>
//               <VideoIcon width={14} height={14} className="mr-0.5 text-white" />
//               <CountText variant="body2">
//                 {videoCount}
//               </CountText>
//             </VideoCountBox>
//           </MediaCountContainer>
//         </MediaContainer>
//       </CardContainer>
//     );
// };

// export default PropertyCard;










// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { Box, Typography } from '@mui/material';
// import {GalleryIcon, VideoIcon, ShowerIcon, LocationIcon, BedIcon, ShareIcon, HeartUnFillIcon} from '@/ui/icons';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import {
//   CardContainer,
//   MediaContainer,
//   ActionButtonsContainer,
//   VideoControlsContainer,
//   CarouselIndicatorsContainer,
//   MediaCountContainer,
//   PhotoCountBox,
//   VideoCountBox,
//   CountText,
//   InfoBox1,
//   InfoBox2,
//   AmenitiesContainer,
//   AmenityItem,
//   LocationContainer,
//   MainInfoContainer,
//   // Import the new components
//   VideoOverlay,
//   PlayPauseButton,
// } from '../styles/components/propertyCardStyles';

// interface PropertyCardProps {
//   id: string;
//   videoUrl: string;
//   images: string[];
//   price: string;
//   bedCount: number;
//   bathCount: number;
//   photoCount: number;
//   videoCount: number;
//   country: string;
//   city: string;
//   propertyType: string;
//   daysAgo: number;
// }

// const PropertyCard: React.FC<PropertyCardProps> = ({
//   videoUrl,
//   images,
//   price,
//   bedCount,
//   bathCount,
//   photoCount,
//   videoCount,
//   country,
//   city,
// }) => {
//   const [showVideo, setShowVideo] = useState(true);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isVideoPaused, setIsVideoPaused] = useState(false);
//   // Add new state for controlling overlay visibility
//   const [showControls, setShowControls] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   // Add ref for timeout
//   const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   // Handle video playback
//   useEffect(() => {
//     if (showVideo && videoRef.current) {
//       videoRef.current.muted = true;
//       videoRef.current.playsInline = true;
      
//       const playPromise = videoRef.current.play();
      
//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => {
//             setIsVideoPaused(false);
//           })
//           .catch(error => {
//             console.error("Video autoplay was prevented:", error);
//             setIsVideoPaused(true);
//             handleVideoEnd();
//           });
//       }
      
//       videoRef.current.onended = handleVideoEnd;
//     }
//   }, [showVideo]);

//   // Clean up timeout on unmount
//   useEffect(() => {
//     return () => {
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current);
//       }
//     };
//   }, []);

//   const handleVideoEnd = () => {
//     // Prepare for transition to images
//     if (sliderRef.current) {
//       sliderRef.current.style.transition = 'transform 500ms ease';
//       sliderRef.current.style.transform = 'translateX(-100%)';
//     }
    
//     setTimeout(() => {
//       setShowVideo(false);
//       if (sliderRef.current) {
//         sliderRef.current.style.transition = 'none';
//         sliderRef.current.style.transform = 'translateX(0)';
//       }
//     }, 500);
//   };

//   // Handle image carousel auto-scrolling
//   useEffect(() => {
//     if (!showVideo) {
//       const imageInterval = setInterval(() => {
//         goToNextImage();
//       }, 3000);
      
//       return () => clearInterval(imageInterval);
//     }
//   }, [showVideo, currentImageIndex, images.length]);

//   const toggleVideoPlayback = () => {
//     if (!videoRef.current) return;
    
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsVideoPaused(false);
//     } else {
//       videoRef.current.pause();
//       setIsVideoPaused(true);
//     }
//   };

//   // Add function to show controls
//   const showVideoControls = () => {
//     setShowControls(true);
    
//     // Clear any existing timeout
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current);
//     }
    
//     // Set a timeout to hide controls after 3 seconds
//     controlsTimeoutRef.current = setTimeout(() => {
//       setShowControls(false);
//     }, 3000);
//   };

//   const goToNextImage = () => {
//     if (isTransitioning) return;
    
//     // If we're at the last image, don't advance further
//     if (currentImageIndex >= images.length - 1) return;
    
//     setIsTransitioning(true);
    
//     if (sliderRef.current) {
//       sliderRef.current.style.transition = 'transform 500ms ease';
//       sliderRef.current.style.transform = 'translateX(-100%)';
//     }
    
//     setTimeout(() => {
//       setCurrentImageIndex((prev) => prev + 1);
      
//       if (sliderRef.current) {
//         sliderRef.current.style.transition = 'none';
//         sliderRef.current.style.transform = 'translateX(0)';
//       }
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 50);
//     }, 500);
//   };

//   const goToPrevImage = () => {
//     if (isTransitioning || currentImageIndex <= 0) return;
    
//     setIsTransitioning(true);
    
//     if (sliderRef.current) {
//       sliderRef.current.style.transition = 'none';
//       sliderRef.current.style.transform = 'translateX(-100%)';
      
//       // Force reflow
//       sliderRef.current.offsetHeight;
      
//       sliderRef.current.style.transition = 'transform 500ms ease';
//       sliderRef.current.style.transform = 'translateX(0)';
//     }
    
//     setTimeout(() => {
//       setCurrentImageIndex((prev) => prev - 1);
//       setIsTransitioning(false);
//     }, 500);
//   };

//   // Handle touch and mouse events for manual scrolling
//   const touchStartX = useRef<number>(0);
//   const touchEndX = useRef<number>(0);
  
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//   };
  
//   const handleTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.touches[0].clientX;
//   };
  
//   const handleTouchEnd = () => {
//     if (isTransitioning) return;
    
//     const diff = touchStartX.current - touchEndX.current;
    
//     // Threshold for swipe detection (adjust as needed)
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         // Swipe left - go to next image
//         goToNextImage();
//       } else {
//         // Swipe right - go to previous image
//         goToPrevImage();
//       }
//     }
//   };
  
//   const handleMouseDown = (e: React.MouseEvent) => {
//     touchStartX.current = e.clientX;
//   };
  
//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (e.buttons === 1) { // Left mouse button is pressed
//       touchEndX.current = e.clientX;
//     }
//   };
  
//   const handleMouseUp = () => {
//     if (isTransitioning) return;
    
//     const diff = touchStartX.current - touchEndX.current;
    
//     // Threshold for swipe detection
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         // Swipe left - go to next image
//         goToNextImage();
//       } else {
//         // Swipe right - go to previous image
//         goToPrevImage();
//       }
//     }
//   };

//   return (
//     <CardContainer>
//       <MediaContainer>

//         {/* Slider container */}
       
//         <div 
//           ref={sliderRef}
//           className="relative w-full h-full overflow-hidden"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp}
//         >
//           {/* Current content (video or image) */}
//           <div className="absolute inset-0 w-full h-full"> {/*w-full h-full change*/ }
//             {showVideo ? (
//               <div 
//                 className="relative w-full h-full"
//                 onMouseEnter={showVideoControls}
//                 onMouseMove={showVideoControls}
//                 onTouchStart={showVideoControls}
//               >
//                 <video
//                   ref={videoRef}
//                   src={videoUrl}
//                   muted
//                   playsInline
//                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
                
//                 {/* YouTube-style play/pause overlay */}
//                 <VideoOverlay 
//                   className={showControls ? 'visible' : ''}
//                   onClick={toggleVideoPlayback}
//                 >
//                   <PlayPauseButton>
//                     {isVideoPaused ? (
//                       <PlayArrowIcon sx={{ fontSize: 40 }} />
//                     ) : (
//                       <PauseIcon sx={{ fontSize: 40 }} />
//                     )}
//                   </PlayPauseButton>
//                 </VideoOverlay>
//               </div>
//             ) : (
//               <Image
//                 src={images[currentImageIndex] || '/images/property-placeholder.jpg'}
//                 alt={`Property image ${currentImageIndex + 1}`}
//                 fill
//                   style={{
//                     objectFit: 'cover'
//                  }}
//                 priority
//               />
//             )}
//           </div>
          
//           {/* Next image (only visible during transition) */}
//           {!showVideo && (
//             <div className="absolute inset-0 translate-x-[100%] w-full h-full"> {/*w-full h-full change*/}
//               <Image
//                 src={
//                   currentImageIndex < images.length - 1
//                     ? images[currentImageIndex + 1]
//                     : images[currentImageIndex]
//                 }
//                 alt={`Property image ${currentImageIndex + 2}`}
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 priority
//               />
//             </div>
//           )}
//         </div>

//         {/* ------------------------------------------------------------------------------------------------------------------ */}

        

//         {/* Position both InfoBoxes at the bottom of the media container */}
//         <MainInfoContainer className={`absolute bottom-0 left-0 right-0 flex flex-col text-[#FFF]`} >
//           <InfoBox1>
//             <Typography variant="subtitle1" fontWeight="bold">
//               {price}
//             </Typography>
//           </InfoBox1>
          
//           <InfoBox2>

//             <LocationContainer>
//               <LocationIcon width={11} height={16} className="mr-1 flex-shrink-0" />
//               <Typography variant="body2" color="white">
//                 {city}, {country}
//               </Typography>
//             </LocationContainer>

//             <AmenitiesContainer>
               
//               <AmenityItem>
//                 <BedIcon className='mr-1' />
//                 <Typography variant="body2">{bedCount}</Typography>
//               </AmenityItem>

//               <AmenityItem>
//                 <ShowerIcon className="mr-1"/>
//                 <Typography variant="body2">{bathCount}</Typography>
//               </AmenityItem>

//             </AmenitiesContainer>
//           </InfoBox2>

//         </MainInfoContainer>
       

//         <ActionButtonsContainer>
//           <ShareIcon height={30} width={30}/>
//           <HeartUnFillIcon />
//         </ActionButtonsContainer>
        
//         {/* Keep the small video controls in the corner for consistency left bottom */}
//         {/* {showVideo && (
//           <VideoControlsContainer onClick={toggleVideoPlayback}>
//             {isVideoPaused ? (
//               <PlayArrowIcon sx={{ color: 'white' }} />
//             ) : (
//               <PauseIcon sx={{ color: 'white' }} />
//             )}
//           </VideoControlsContainer>
//         )} */}

        
//         {/* Image carousel indicators */}
        
//         {/* {!showVideo && (
//           <CarouselIndicatorsContainer>
//             {images.map((_, index) => (
//               <Box 
//               key={index} 
//               sx={{ 
//                 backgroundColor: currentImageIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
//                 width: currentImageIndex === index ? '12px' : '8px',
//               }}
//             />
//           ))}
//         </CarouselIndicatorsContainer>
//       )}
//      */}
//     </MediaContainer>
//   </CardContainer>
// );
// };

// export default PropertyCard;



'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import {
  GalleryIcon,
  VideoIcon,
  ShowerIcon,
  LocationIcon,
  BedIcon,
  ShareIcon,
  HeartUnFillIcon,
} from '@/ui/icons';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {
  CardContainer,
  MediaContainer,
  ActionButtonsContainer,
  VideoOverlay,
  PlayPauseButton,
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
  MainInfoContainer,
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
  videoUrl,
  images,
  price,
  bedCount,
  bathCount,
  photoCount,
  videoCount,
  country,
  city,
}) => {
  const [showVideo, setShowVideo] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsVideoPaused(false))
          .catch((error) => {
            console.error('Video autoplay was prevented:', error);
            setIsVideoPaused(true);
            handleVideoEnd();
          });
      }

      videoRef.current.onended = handleVideoEnd;
    }
  }, [showVideo]);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 500ms ease';
      sliderRef.current.style.transform = 'translateX(-100%)';
    }

    setTimeout(() => {
      setShowVideo(false);
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = 'translateX(0)';
      }
    }, 500);
  };

  useEffect(() => {
    if (!showVideo) {
      const imageInterval = setInterval(() => {
        goToNextImage();
      }, 3000);

      return () => clearInterval(imageInterval);
    }
  }, [showVideo, currentImageIndex, images.length]);

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

  const showVideoControls = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 1000);
  };

  const goToNextImage = () => {
    if (isTransitioning || currentImageIndex >= images.length - 1) return;

    setIsTransitioning(true);
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 500ms ease';
      sliderRef.current.style.transform = 'translateX(-100%)';
    }

    setTimeout(() => {
      setCurrentImageIndex((prev) => prev + 1);
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = 'translateX(0)';
      }
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevImage = () => {
    if (isTransitioning || currentImageIndex <= 0) return;
    setIsTransitioning(true);

    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = 'translateX(-100%)';
      sliderRef.current.offsetHeight;
      sliderRef.current.style.transition = 'transform 500ms ease';
      sliderRef.current.style.transform = 'translateX(0)';
    }

    setTimeout(() => {
      setCurrentImageIndex((prev) => prev - 1);
      setIsTransitioning(false);
    }, 500);
  };

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (isTransitioning) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) diff > 0 ? goToNextImage() : goToPrevImage();
  };

  const handleMouseDown = (e: React.MouseEvent) => (touchStartX.current = e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) touchEndX.current = e.clientX;
  };
  const handleMouseUp = () => {
    if (isTransitioning) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) diff > 0 ? goToNextImage() : goToPrevImage();
  };

  return (
    <CardContainer>
      <MediaContainer>
        <div
          ref={sliderRef}
          className="relative w-full h-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="absolute inset-0">
            {showVideo ? (
              <div
                className="relative w-full h-full"
                onMouseEnter={showVideoControls}
                onMouseMove={showVideoControls}
                onTouchStart={showVideoControls}
              >
                <video
                  ref={videoRef}
                  src={videoUrl}
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <VideoOverlay
                  className={showControls ? 'visible' : ''}
                >
                  <PlayPauseButton onClick={toggleVideoPlayback}>
                    {isVideoPaused ? <PlayArrowIcon sx={{ fontSize: 40 }} /> : <PauseIcon sx={{ fontSize: 40 }} />}
                  </PlayPauseButton>
                </VideoOverlay>
              </div>
            ) : (
              <Image
                src={images[currentImageIndex] || '/images/property-placeholder.jpg'}
                alt={`Property image ${currentImageIndex + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            )}
          </div>
        </div>

        <MainInfoContainer className={`absolute bottom-0 left-0 right-0 flex flex-col text-[#FFF]`} >
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

        <ActionButtonsContainer>
          <ShareIcon height={30} width={30} />
          <HeartUnFillIcon />
        </ActionButtonsContainer>

        {!showVideo && (
          <CarouselIndicatorsContainer>
            {images.map((_, index) => (
              <Box key={index} />
            ))}
          </CarouselIndicatorsContainer>
        )}

        {/* <MediaCountContainer>
          <PhotoCountBox>
            <GalleryIcon width={14} height={14} className="mr-0.5 text-white" />
            <CountText variant="body2">{photoCount}</CountText>
          </PhotoCountBox>
          <VideoCountBox>
            <VideoIcon width={14} height={14} className="mr-0.5 text-white" />
            <CountText variant="body2">{videoCount}</CountText>
          </VideoCountBox>
        </MediaCountContainer> */}
              
      </MediaContainer>
    </CardContainer>
  );
};

export default PropertyCard;


