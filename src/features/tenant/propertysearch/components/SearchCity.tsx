"use client";

import React, { useState, useEffect, useId } from "react";
import { MiceIcon } from "@/ui/icons";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { openModal } from "../slices/modalSlice";
import { useVoiceSearch } from "../hooks/useVoiceSearch";
import VoiceSearchFeedback from "./VoiceSearchFeedback";
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
} from "../styles/components/searchCityStyles";
import { ListIcon } from "lucide-react";

interface SearchCityProps {
  onChange?: (value: string) => void;
  onMapToggle?: () => void;
  onSearch?: () => void;
  placeholder?: string;
  value?: string;
  width?: string;
  insideModal?: boolean;
  isMapView?: boolean;
  onSearchSheetOpen?: () => void;
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
  onSearchSheetOpen,
}) => {
  const dispatch = useDispatch();
  const [showVoiceError, setShowVoiceError] = useState(false);
  const inputId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-wg-notranslate", "true");
      document.documentElement.setAttribute("translate", "no");
    }
  }, []);

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

      setTimeout(() => {
        if (onSearch) {
          onSearch();
        }
      }, 500);
    },
    onError: (errorMessage) => {
      console.error("Voice search error:", errorMessage);
      setShowVoiceError(true);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleMapToggle = (event: React.MouseEvent) => {
  event.stopPropagation();
  event.preventDefault(); 
    if (onMapToggle) {
      onMapToggle();
    }
  };

  const handleClick = () => {
    if (!insideModal) {
      dispatch(openModal({ modalType: "searchCity" }));
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  const handleMicClick = (event: React.MouseEvent) => {
    if (!mounted) return;

    event.stopPropagation();

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
    if (!mounted) return "#9CA3AF";

    if (!isSupported || permissionDenied) {
      return "#9CA3AF";
    }
    if (error) {
      return "#EF4444";
    }
    if (isListening) {
      return "#10B981";
    }

    return "#001D3D";
  };

  const getMicTooltip = () => {
    if (!mounted) return "Voice search";

    if (!isSupported) {
      return "Voice search not supported in your browser";
    }
    if (permissionDenied) {
      return "Microphone permission denied. Please enable in browser settings.";
    }
    if (error) {
      return `Voice search error: ${error}`;
    }
    if (isListening) {
      return "Listening... Click to stop";
    }
    return "Click to start voice search";
  };

  const showSearchButton = value.length > 0;

  const handleInputClick = (event: React.MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target.closest('[data-map-toggle]') || target.closest('.map-toggle-btn')) {
    return; 
  }
    if (isMapView && onSearchSheetOpen) {
      onSearchSheetOpen();
      return;
    }
  };

  if (!mounted) {
    return (
      <StyledTextField
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={handleInputClick}
        fullWidth
        size="small"
        width={width}
        id={inputId}
        suppressHydrationWarning
        InputProps={{
          startAdornment: (
            <SearchIconWrapper position="start">
              <SearchIcon />
            </SearchIconWrapper>
          ),
          endAdornment: (
            <>
              {!showSearchButton && (
                <MicIconWrapper>
                  <MiceIcon className="w-[21px] h-[15px]" />
                </MicIconWrapper>
              )}

              {showSearchButton ? (
                <SearchButtonAdornment position="end">
                  <SearchActionButton
                    onClick={handleSearchClick}
                    aria-label="Search"
                    edge="end"
                    size="small"
                  >
                    <SearchButtonText variant="body2">Search</SearchButtonText>
                  </SearchActionButton>
                </SearchButtonAdornment>
              ) : (
                <MapButtonAdornment position="end">
                  <MapActionButton
                    onClick={handleMapToggle}
                    edge="end"
                    size="small"
                    data-map-toggle="true"
                    className="map-toggle-btn"
                  >
                    {!isMapView ? <StyledPlaceIcon /> : <ListIcon />}
                    <MapButtonText variant="body2">
                      {!isMapView ? "Map" : "List"}
                    </MapButtonText>
                  </MapActionButton>
                </MapButtonAdornment>
              )}
            </>
          ),
        }}
      />
    );
  }

  return (
    <>
      <StyledTextField
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={handleInputClick}
        fullWidth
        size="small"
        width={width}
        id={inputId}
        InputProps={{
          startAdornment: (
            <SearchIconWrapper position="start">
              <SearchIcon />
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
                        bgcolor: error && mounted ? "#EF4444" : "#001D3D",
                        color: "white",
                        fontSize: "12px",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        maxWidth: "200px",
                        textAlign: "center",
                      },
                    },
                    arrow: {
                      sx: {
                        color: error && mounted ? "#EF4444" : "#001D3D",
                      },
                    },
                  }}
                >
                  <MicIconWrapper onClick={handleMicClick}>
                    <RippleEffect
                      isActive={mounted ? isListening : false}
                      color={getMicIconColor()}
                    />
                    <MicIconContainer
                      isListening={mounted ? isListening : false}
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
                    <SearchButtonText variant="body2">Search</SearchButtonText>
                  </SearchActionButton>
                </SearchButtonAdornment>
              ) : (
                <MapButtonAdornment position="end">
                  <MapActionButton
                    onClick={handleMapToggle}
                    edge="end"
                    size="small"
                  >
                    {!isMapView ? <StyledPlaceIcon /> : <ListIcon />}

                    <MapButtonText variant="body2">
                      {!isMapView ? "Map" : "List"}
                    </MapButtonText>
                  </MapActionButton>
                </MapButtonAdornment>
              )}
            </>
          ),
        }}
      />

      {mounted && (
        <VoiceSearchFeedback
          isListening={isListening}
          transcript={transcript}
          interimTranscript={interimTranscript}
          error={
            error ||
            (showVoiceError && !isSupported
              ? "Voice search not supported"
              : null)
          }
          onErrorClose={() => setShowVoiceError(false)}
        />
      )}
    </>
  );
};

export default SearchCity;
