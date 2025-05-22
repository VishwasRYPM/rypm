'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { VideoOverlay, PlayPauseButton } from '../../styles/components/propertyCardStyles';

interface PropertyMediaProps {
  videoUrl: string;
  images: string[];
  onMediaChange?: (isVideo: boolean, currentIndex: number) => void;
}

const PropertyMedia: React.FC<PropertyMediaProps> = ({
  videoUrl,
  images,
  onMediaChange,
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
          .then(() => {
            setIsVideoPaused(false);
          })
          .catch(error => {
            console.error("Video autoplay was prevented:", error);
            setIsVideoPaused(true);
            handleVideoEnd();
          });
      }
      
      videoRef.current.onended = handleVideoEnd;
    }
    
    // Notify parent component about media changes
    if (onMediaChange) {
      onMediaChange(showVideo, currentImageIndex);
    }
  }, [showVideo, currentImageIndex, onMediaChange]);

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

  const toggleVideoPlayback = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const goToNextImage = () => {
    if (isTransitioning) return;
    
    if (currentImageIndex >= images.length - 1) return;
    
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
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
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

  // Touch and mouse event handlers
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    if (isTransitioning) return;
    
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNextImage();
      } else {
        goToPrevImage();
      }
    }
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      touchEndX.current = e.clientX;
    }
  };
  
  const handleMouseUp = () => {
    if (isTransitioning) return;
    
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNextImage();
      } else {
        goToPrevImage();
      }
    }
  };

  return (
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
              className={`${showControls ? 'visible' : ''}`}
            >
              <PlayPauseButton
              onClick={
                toggleVideoPlayback
              }
              >
                {isVideoPaused ? (
                  <PlayArrowIcon sx={{ fontSize: 40 }} />
                ) : (
                  <PauseIcon sx={{ fontSize: 40 }} />
                )}
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
      
      {!showVideo && (
        <div className="absolute inset-0 translate-x-[100%]">
          <Image
            src={
              currentImageIndex < images.length - 1
                ? images[currentImageIndex + 1]
                : images[currentImageIndex]
            }
            alt={`Property image ${currentImageIndex + 2}`}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default PropertyMedia;