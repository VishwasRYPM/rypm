// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import { VideoOverlay, PlayPauseButton } from '../../styles/components/propertyCardStyles';

// interface PropertyMediaProps {
//   videoUrl: string;
//   images: string[];
//   onMediaChange?: (isVideo: boolean, currentIndex: number) => void;
// }

// const PropertyMedia: React.FC<PropertyMediaProps> = ({
//   videoUrl,
//   images,
//   onMediaChange,
// }) => {
//   const [showVideo, setShowVideo] = useState(true);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isVideoPaused, setIsVideoPaused] = useState(false);
//   const [showControls, setShowControls] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    
//     // Notify parent component about media changes
//     if (onMediaChange) {
//       onMediaChange(showVideo, currentImageIndex);
//     }
//   }, [showVideo, currentImageIndex, onMediaChange]);

//   useEffect(() => {
//     return () => {
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current);
//       }
//     };
//   }, []);

//   const handleVideoEnd = () => {
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

//   useEffect(() => {
//     if (!showVideo) {
//       const imageInterval = setInterval(() => {
//         goToNextImage();
//       }, 3000);
      
//       return () => clearInterval(imageInterval);
//     }
//   }, [showVideo, currentImageIndex, images.length]);

//   const toggleVideoPlayback = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (!videoRef.current) return;
    
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsVideoPaused(false);
//     } else {
//       videoRef.current.pause();
//       setIsVideoPaused(true);
//     }
//   };

//   const showVideoControls = () => {
//     setShowControls(true);
    
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current);
//     }
    
//     controlsTimeoutRef.current = setTimeout(() => {
//       setShowControls(false);
//     }, 3000);
//   };

//   const goToNextImage = () => {
//     if (isTransitioning) return;
    
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
      
//       sliderRef.current.offsetHeight;
      
//       sliderRef.current.style.transition = 'transform 500ms ease';
//       sliderRef.current.style.transform = 'translateX(0)';
//     }
    
//     setTimeout(() => {
//       setCurrentImageIndex((prev) => prev - 1);
//       setIsTransitioning(false);
//     }, 500);
//   };

//   // Touch and mouse event handlers
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
    
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         goToNextImage();
//       } else {
//         goToPrevImage();
//       }
//     }
//   };
  
//   const handleMouseDown = (e: React.MouseEvent) => {
//     touchStartX.current = e.clientX;
//   };
  
//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (e.buttons === 1) {
//       touchEndX.current = e.clientX;
//     }
//   };
  
//   const handleMouseUp = () => {
//     if (isTransitioning) return;
    
//     const diff = touchStartX.current - touchEndX.current;
    
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         goToNextImage();
//       } else {
//         goToPrevImage();
//       }
//     }
//   };

//   return (
//     <div 
//       ref={sliderRef}
//       className="relative w-full h-full overflow-hidden"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//     >
//       <div className="absolute inset-0">
//         {showVideo ? (
//           <div 
//             className="relative w-full h-full"
           
//             onMouseEnter={showVideoControls}
//             onMouseMove={showVideoControls}
//             onTouchStart={showVideoControls}
//           >
//             <video
//               ref={videoRef}
//               src={videoUrl}
//               muted
//               playsInline
//               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//             />
            
//             <VideoOverlay 
//               className={`${showControls ? 'visible' : ''}`}
//             >
//               <PlayPauseButton
//               onClick={
//                 toggleVideoPlayback
//               }
//               >
//                 {isVideoPaused ? (
//                   <PlayArrowIcon sx={{ fontSize: 40 }} />
//                 ) : (
//                   <PauseIcon sx={{ fontSize: 40 }} />
//                 )}
//               </PlayPauseButton>
//             </VideoOverlay>
//           </div>
//         ) : (
//           <Image
//             src={images[currentImageIndex] || '/images/property-placeholder.jpg'}
//             alt={`Property image ${currentImageIndex + 1}`}
//             fill
//             style={{ objectFit: 'cover' }}
//             priority
//           />
//         )}
//       </div>
      
//       {!showVideo && (
//         <div className="absolute inset-0 translate-x-[100%]">
//           <Image
//             src={
//               currentImageIndex < images.length - 1
//                 ? images[currentImageIndex + 1]
//                 : images[currentImageIndex]
//             }
//             alt={`Property image ${currentImageIndex + 2}`}
//             fill
//             style={{ objectFit: 'cover' }}
//             priority
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyMedia;



'use client';
import React, { useRef, useEffect, useState } from 'react';

interface PropertyMediaProps {
  videoUrl: string;
  onMediaChange?: (isVideo: boolean) => void;
}

const PropertyMedia: React.FC<PropertyMediaProps> = ({
  videoUrl,
  onMediaChange,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Set up IntersectionObserver to detect when video is visible
  useEffect(() => {
    if (!containerRef.current) return;

    // Observer for loading the video (more lenient)
    const loadObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !videoLoaded) {
        // Start loading the video when it's about to be visible
        if (videoRef.current && !videoRef.current.src) {
          videoRef.current.src = videoUrl;
          setVideoLoaded(true);
        }
      }
    }, {
      root: null,
      rootMargin: '200px', // Preload when within 200px of viewport
      threshold: 0.1 // Start loading when 10% visible
    });

    // Observer for playing the video (stricter - 70% visibility required)
    const playObserver = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    }, { 
      threshold: 0.7 // Play only when 50% visible as per requirement
    });

    loadObserver.observe(containerRef.current);
    playObserver.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        loadObserver.unobserve(containerRef.current);
        playObserver.unobserve(containerRef.current);
      }
    };
  }, [videoUrl, videoLoaded]);

  // Play/pause video based on visibility
  useEffect(() => {
    if (!videoRef.current || !videoLoaded) return;

    videoRef.current.muted = true;
    videoRef.current.playsInline = true;
    videoRef.current.loop = true;
    
    if (isVisible) {
      // Video is visible (70% threshold met), play it
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (onMediaChange) onMediaChange(true);
          })
          .catch(error => {
            console.error("Video autoplay was prevented:", error);
            setIsPlaying(false);
          });
      }
    } else if (isPlaying) {
      // Video is not visible but was playing, pause it
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVisible, videoLoaded, onMediaChange, isPlaying]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Placeholder/skeleton while video is loading */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          opacity: videoLoaded ? 1 : 0, // Hide video until loaded
          transition: 'opacity 0.3s ease'
        }}
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
      />
    </div>
  );
};

export default PropertyMedia;
