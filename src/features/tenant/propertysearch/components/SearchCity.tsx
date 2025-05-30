// 'use client';

// import React from 'react';
// import {MiceIcon} from '@/ui/icons';
// import SearchIcon from '@mui/icons-material/Search';
// import ListIcon from '@mui/icons-material/List';
// import MapIcon from '@mui/icons-material/Map';
// import { IconButton } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { openModal } from '../slices/modalSlice';
// import {
//   StyledTextField,
//   SearchIconWrapper,
//   SearchButtonAdornment,
//   MapButtonAdornment,
//   SearchActionButton,
//   MapActionButton,
//   SearchButtonText,
//   MapButtonText,
//   StyledPlaceIcon,
// } from '../styles/components/searchCityStyles';

// interface SearchCityProps {
//   onChange?: (value: string) => void;
//   onMapToggle?: () => void;
//   onSearch?: () => void;
//   placeholder?: string;
//   value?: string;
//   width?: string;
//   insideModal?: boolean;
//     isMapView?: boolean;

// }

// const SearchCity: React.FC<SearchCityProps> = ({
//   onChange,
//   onMapToggle,
//   onSearch,
//   placeholder = "Search",
//   value = "",
//   width = "61vw",
//   insideModal = false,
//   isMapView = false,
// }) => {
//   const dispatch = useDispatch();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (onChange) {
//       onChange(event.target.value);
//     }
//   };

//     const handleMapToggle = () => {
//     if (onMapToggle) {
//       onMapToggle();
//     }
//   };

//   const handleClick = () => {
//     // Only open the modal if not already inside it
//     if (!insideModal) {
//       dispatch(openModal({ modalType: 'searchCity' }));
//     }
//   };

//   const handleSearchClick = () => {
//     if (onSearch) {
//       onSearch();
//     }
//   };

//   const handleKeyDown = (event: React.KeyboardEvent) => {
//     if (event.key === 'Enter' && onSearch) {
//       onSearch();
//     }
//   };

//   const showSearchButton = value.length > 0;

//   return (
//     <StyledTextField
//       variant="outlined"
//       placeholder={placeholder}
//       value={value}
//       onChange={handleChange}
//       onClick={!insideModal ? handleClick : undefined}
//       onKeyDown={handleKeyDown}
//       fullWidth
//       size="small"
//       width={width}
//       InputProps={{
//         startAdornment: (
//           <SearchIconWrapper position="start">
//             <SearchIcon  />
//           </SearchIconWrapper>
//         ),
//         endAdornment: (
//           <>
//             {!showSearchButton && (
//               <MiceIcon className="w-[21px] h-[15px] mr-2 cursor-pointer" />
//             )}
//             {/* {!showSearchButton && (
//               <>
//                 <MiceIcon className="w-[21px] h-[15px] mr-2 cursor-pointer" />
//                 {onMapToggle && (
//                   <IconButton 
//                     onClick={handleMapToggle} 
//                     size="small" 
//                     sx={{ padding: '4px', marginRight: '4px' }}
//                   >
//                     {isMapView ? (
//                       <ListIcon className="w-5 h-5" />
//                     ) : (
//                       <MapIcon className="w-5 h-5" />
//                     )}
//                   </IconButton>
//                 )}
//               </>
//             )} */}
//             {showSearchButton ? (
//               <SearchButtonAdornment position="end">
//                 <SearchActionButton
//                   onClick={handleSearchClick}
//                   aria-label="Search"
//                   edge="end"
//                   size="small"
//                 >
//                   <SearchButtonText variant="body2">
//                     Search
//                   </SearchButtonText>
//                 </SearchActionButton>
//               </SearchButtonAdornment>
//             ) : (
//               <MapButtonAdornment position="end">
//                 <MapActionButton
//                  // onClick={handleClick}
//                   onClick={handleMapToggle}
//                   aria-label="Map"
//                   edge="end"
//                   size="small"
//                 >
//                   <StyledPlaceIcon />
//                   <MapButtonText variant="body2">Map</MapButtonText>
//                 </MapActionButton>
//               </MapButtonAdornment>
//             )}
//           </>
//         ),
        
//       }}
//     />
//   );
// };

// export default SearchCity;

'use client';

import React, { useState } from 'react';
import {MiceIcon} from '@/ui/icons';
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openModal } from '../slices/modalSlice';
import { useVoiceSearch } from '../hooks/useVoiceSearch';
import VoiceSearchFeedback from './VoiceSearchFeedback';
import {
  StyledTextField,
  SearchIconWrapper,
  SearchButtonAdornment,
  MapButtonAdornment,
  SearchActionButton,
  MapActionButton,
  SearchButtonText,
  MapButtonText,
  StyledPlaceIcon,
  MicIconWrapper,
  RippleEffect,
  MicIconContainer,
} from '../styles/components/searchCityStyles';
import { ListIcon } from 'lucide-react';

interface SearchCityProps {
  onChange?: (value: string) => void;
  onMapToggle?: () => void;
  onSearch?: () => void;
  placeholder?: string;
  value?: string;
  width?: string;
  insideModal?: boolean;
  isMapView?: boolean;
}

const SearchCity: React.FC<SearchCityProps> = ({
  onChange,
  onMapToggle,
  onSearch,
  placeholder = "Search",
  value = "",
  width = "61vw",
  insideModal = false,
  isMapView = false,
}) => {
  const dispatch = useDispatch();
  const [showVoiceError, setShowVoiceError] = useState(false);

  // Voice search functionality
  const {
    isListening,
    isSupported,
    transcript,
    interimTranscript,
    error,
    permissionDenied,
    startListening,
    stopListening,
  } = useVoiceSearch({
    onResult: (voiceTranscript) => {
      if (onChange) {
        onChange(voiceTranscript);
      }
      // Auto-trigger search after voice input
      setTimeout(() => {
        if (onSearch) {
          onSearch();
        }
      }, 500);
    },
    onError: (errorMessage) => {
      console.error('Voice search error:', errorMessage);
      setShowVoiceError(true);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleMapToggle = () => {
    if (onMapToggle) {
      onMapToggle();
    }
  };

  const handleClick = () => {
    // Only open the modal if not already inside it
    if (!insideModal) {
      dispatch(openModal({ modalType: 'searchCity' }));
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  // Handle mic click
  const handleMicClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent opening modal
    
    if (!isSupported) {
      setShowVoiceError(true);
      return;
    }

    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const getMicIconColor = () => {
    if (!isSupported || permissionDenied) {
      return '#9CA3AF'; // Gray for disabled/unsupported
    }
    if (error) {
      return '#EF4444'; // Red for error
    }
    if (isListening) {
      return '#10B981'; // Green for listening
    }
    return '#001D3D'; // Default app color
  };

  const getMicTooltip = () => {
    if (!isSupported) {
      return 'Voice search not supported in your browser';
    }
    if (permissionDenied) {
      return 'Please allow microphone access for voice search';
    }
    if (error) {
      return 'Voice search error - click to retry';
    }
    if (isListening) {
      return 'Listening... Click to stop';
    }
    return 'Click to start voice search';
  };

  const showSearchButton = value.length > 0;

  return (
    <>
      <StyledTextField
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        // onClick={!insideModal ? handleClick : undefined}
        onKeyDown={handleKeyDown}
        fullWidth
        size="small"
        width={width}
        InputProps={{
          startAdornment: (
            <SearchIconWrapper position="start">
              <SearchIcon  />
            </SearchIconWrapper>
          ),
          endAdornment: (
            <>
              {!showSearchButton && (
                <Tooltip
                  title={getMicTooltip()}
                  placement="top"
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: error ? '#EF4444' : '#001D3D',
                        color: 'white',
                        fontSize: '12px',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        maxWidth: '200px',
                        textAlign: 'center',
                      },
                    },
                    arrow: {
                      sx: {
                        color: error ? '#EF4444' : '#001D3D',
                      },
                    },
                  }}
                >
                  <MicIconWrapper onClick={handleMicClick}>
                    {/* Ripple effect for listening state */}
                    <RippleEffect 
                      isActive={isListening} 
                      color={getMicIconColor()} 
                    />
                    
                    {/* Mic Icon with proper positioning */}
                    <MicIconContainer 
                      isListening={isListening} 
                      color={getMicIconColor()}
                    >
                      <MiceIcon className="w-[21px] h-[15px]" />
                    </MicIconContainer>
                  </MicIconWrapper>
                </Tooltip>
              )}
              
              {showSearchButton ? (
                <SearchButtonAdornment position="end">
                  <SearchActionButton
                    onClick={handleSearchClick}
                    aria-label="Search"
                    edge="end"
                    size="small"
                  >
                    <SearchButtonText variant="body2">
                      Search
                    </SearchButtonText>
                  </SearchActionButton>
                </SearchButtonAdornment>
              ) : (
                <MapButtonAdornment position="end">
                  <MapActionButton
                      onClick={handleMapToggle}
                      //------------------------------------
                      // onClick={() => {
                      //                   if (!insideModal) {
                      //                       dispatch(openModal({ modalType: 'searchCity' }));
                      //                    } else if (onMapToggle) {
                      //                      onMapToggle();
                      //                     }
                      //                   }}
                      //-----------------------------------
                    // aria-label={isMapView ? 'Map View' : 'List View'}
                    edge="end"
                    size="small"
                  >
                    {!isMapView ? <StyledPlaceIcon /> : <ListIcon/>}
                    <MapButtonText variant="body2">{!isMapView ? 'Map' : 'List'}</MapButtonText>
                  </MapActionButton>
                </MapButtonAdornment>
              )}
            </>
          ),
        }}
      />

      {/* Voice search feedback */}
      <VoiceSearchFeedback
        isListening={isListening}
        transcript={transcript}
        interimTranscript={interimTranscript}
        error={error || (showVoiceError && !isSupported ? 'Voice search not supported' : null)}
        onErrorClose={() => setShowVoiceError(false)}
      />
    </>
  );
};

export default SearchCity;
