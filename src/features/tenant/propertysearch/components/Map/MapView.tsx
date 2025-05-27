"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import LocationButton from "./controls/LocationButton";
import LocalInfoButton from "./controls/LocalInfoButton";
import MapButton, { mapStyles } from "./controls/MapButton";
import DrawButton from "./controls/DrawButton";
import RemoveBoundaryButton from "./controls/RemoveBoundaryButton";
import ControlsContainer from "./controls/ControlsContainer";
import { useLocalInfo } from "./hooks/useLocalInfo";
import { useMapProperties, MapProperty } from "./hooks/useMapProperties";
import { useMapDraw } from "./hooks/useMapDraw";
import PropertyMarker from "./components/PropertyMarker";
import PropertyPopup from "./components/PropertyPopup";

// Replace with your actual Mapbox access token
const MAPBOX_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "YOUR_MAPBOX_ACCESS_TOKEN";

// Set the access token for Mapbox
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

interface MapViewProps {
  initialLocation?: { lat: number; lng: number };
  zoom?: number;
}

const MapView: React.FC<MapViewProps> = ({
  initialLocation = { lat: 43.6532, lng: -79.3832 },
  zoom = 8,
}) => {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<MapProperty | null>(
    null
  );

  // Active mode state
  const [activeMode, setActiveMode] = useState<"map" | "localInfo" | "draw">(
    "map"
  );

  // Map style state
  const [showStyleOptions, setShowStyleOptions] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("streets");

  // Use hooks
  const {
    isLocalInfoActive,
    selectedCategory,
    toggleLocalInfo,
    handleCategoryChange,
  } = useLocalInfo();
  const { properties, loading, error } = useMapProperties();
  const {
    drawState,
    toggleDrawMode,
    startDrawing,
    addPoint,
    finishDrawing,
    cancelDrawing,
    removeBoundary,
    filterPropertiesInArea,
    getCurrentPoints,
  } = useMapDraw();

  // Reference for click outside detection
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get filtered properties based on draw state
  const displayProperties = filterPropertiesInArea(properties);
  const shouldShowMarkers = !drawState.isDrawMode && !drawState.isDrawing;


  // Add this function before your useEffects:
const initializeDrawingLayers = useCallback(() => {
  if (!map.current) return;

  // Check if sources already exist, if not add them
  if (!map.current.getSource("drawing-line-source")) {
    map.current.addSource("drawing-line-source", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [],
        },
      },
    });
  }

  if (!map.current.getSource("drawing-polygon-source")) {
    map.current.addSource("drawing-polygon-source", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [[]],
        },
      },
    });
  }

  if (!map.current.getSource("overlay-source")) {
    map.current.addSource("overlay-source", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: []
      },
    });
  }

  // Check if layers already exist, if not add them
  if (!map.current.getLayer("drawing-line")) {
    map.current.addLayer({
      id: "drawing-line",
      type: "line",
      source: "drawing-line-source",
      paint: {
        "line-color": "#001D3D",
        "line-width": 5,
      },
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
    });
  }

  if (!map.current.getLayer("drawing-fill")) {
    map.current.addLayer({
      id: "drawing-fill",
      type: "fill",
      source: "drawing-polygon-source",
      paint: {
        "fill-color": "#20364D",
        "fill-opacity": 0.3,
      },
    });
  }

  if (!map.current.getLayer("drawing-outline")) {
    map.current.addLayer({
      id: "drawing-outline",
      type: "line",
      source: "drawing-polygon-source",
      paint: {
        "line-color": "#001D3D",
        "line-width": 5,
      },
    });
  }

  if (!map.current.getLayer("map-overlay")) {
    map.current.addLayer({
      id: "map-overlay",
      type: "fill",
      source: "overlay-source",
      paint: {
        "fill-color": "rgba(32, 54, 77, 0.30)",
        "fill-opacity": 1,
      },
    });

    // Make sure overlay is below drawing layers
    if (map.current.getLayer("drawing-fill")) {
      map.current.moveLayer("map-overlay", "drawing-fill");
    }
  }
}, []);


  // Map initialization (once only)
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialLocation.lng, initialLocation.lat],
      zoom: zoom,
      doubleClickZoom: false, // Disable to prevent conflicts with drawing
    });

    map.current.on("load", () => {
      setMapLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [initialLocation.lat, initialLocation.lng, zoom]);

  // Setup drawing layers and controls when map loads
// Replace your existing drawing layers setup useEffect with this:
useEffect(() => {
  if (!map.current || !mapLoaded) return;
  
  initializeDrawingLayers();
}, [mapLoaded, initializeDrawingLayers]);


// Add this new useEffect to handle style changes:
// Keep updatePolygon where it is, but modify the style.load useEffect:
useEffect(() => {
  if (!map.current || !mapLoaded) return;

  const handleStyleLoad = () => {
    // Reinitialize drawing layers after style change
    setTimeout(() => {
      initializeDrawingLayers();
      
      // Restore any existing drawn polygon directly
      if (drawState.hasDrawnArea && drawState.points.length >= 4) {
        const source = map.current?.getSource("drawing-polygon-source");
        if (source && "setData" in source) {
          source.setData({
            type: "Feature",
            properties: {},
            geometry: {
              type: "Polygon",
              coordinates: [drawState.points],
            },
          });
        }
      }
    }, 100);
  };

  map.current.on('style.load', handleStyleLoad);

  return () => {
    if (map.current) {
      map.current.off('style.load', handleStyleLoad);
    }
  };
}, [mapLoaded, initializeDrawingLayers, drawState.hasDrawnArea, drawState.points]);



  // Setup drawing event listeners
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const mapInstance = map.current;

    // Mouse events for desktop
    const handleMouseDown = (e: mapboxgl.MapMouseEvent) => {
      if (drawState.isDrawMode && !drawState.isDrawing) {
        e.preventDefault();
        startDrawing([e.lngLat.lng, e.lngLat.lat]);
        mapInstance.dragPan.disable();
        mapInstance.getCanvas().style.cursor = "crosshair";
      }
    };

    const handleMouseMove = (e: mapboxgl.MapMouseEvent) => {
      if (drawState.isDrawMode && drawState.isDrawing) {
        if (addPoint([e.lngLat.lng, e.lngLat.lat])) {
          updateDrawingLine();
        }
      }
    };

    const handleMouseUp = () => {
      if (drawState.isDrawMode && drawState.isDrawing) {
        finishDrawing();
        mapInstance.dragPan.enable();
        mapInstance.getCanvas().style.cursor = "";
      }
    };

    // Touch events for mobile
    const handleTouchStart = (e: mapboxgl.MapTouchEvent) => {
      if (drawState.isDrawMode && !drawState.isDrawing) {
        e.preventDefault();
        const touch = e.originalEvent.touches[0];
        const point = mapInstance.unproject([touch.clientX, touch.clientY]);
        startDrawing([point.lng, point.lat]);
        mapInstance.dragPan.disable();
        mapInstance.getCanvas().style.cursor = "crosshair";
      }
    };

    const handleTouchMove = (e: mapboxgl.MapTouchEvent) => {
      if (drawState.isDrawMode && drawState.isDrawing) {
        e.preventDefault();
        const touch = e.originalEvent.touches[0];
        const point = mapInstance.unproject([touch.clientX, touch.clientY]);
        if (addPoint([point.lng, point.lat])) {
          updateDrawingLine();
        }
      }
    };

    const handleTouchEnd = (e: mapboxgl.MapTouchEvent) => {
      if (drawState.isDrawMode && drawState.isDrawing) {
        e.preventDefault();
        finishDrawing();
        mapInstance.dragPan.enable();
        mapInstance.getCanvas().style.cursor = "";
      }
    };

    // Add event listeners
    mapInstance.on("mousedown", handleMouseDown);
    mapInstance.on("mousemove", handleMouseMove);
    mapInstance.on("mouseup", handleMouseUp);
    mapInstance.on("touchstart", handleTouchStart);
    mapInstance.on("touchmove", handleTouchMove);
    mapInstance.on("touchend", handleTouchEnd);

    // Cleanup
    return () => {
      mapInstance.off("mousedown", handleMouseDown);
      mapInstance.off("mousemove", handleMouseMove);
      mapInstance.off("mouseup", handleMouseUp);
      mapInstance.off("touchstart", handleTouchStart);
      mapInstance.off("touchmove", handleTouchMove);
      mapInstance.off("touchend", handleTouchEnd);
    };
  }, [
    mapLoaded,
    drawState.isDrawMode,
    drawState.isDrawing,
    startDrawing,
    addPoint,
    finishDrawing,
  ]);

  // Update drawing line during drawing
  const updateDrawingLine = useCallback(() => {
    if (!map.current) return;

    const source = map.current.getSource("drawing-line-source");
    if (source && "setData" in source) {
      source.setData({
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: getCurrentPoints(),
        },
      });
    }
  }, [getCurrentPoints]);

  // Update polygon after drawing is complete
  const updatePolygon = useCallback(() => {
    if (!map.current) return;

    const source = map.current.getSource("drawing-polygon-source");
    if (source && "setData" in source) {
      source.setData({
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates:
            drawState.hasDrawnArea && drawState.points.length >= 4
              ? [drawState.points]
              : [[]],
        },
      });
    }
  }, [drawState.hasDrawnArea, drawState.points]);

  // Clear drawing line when drawing finishes
  useEffect(() => {
    if (!drawState.isDrawing && map.current) {
      const source = map.current.getSource("drawing-line-source");
      if (source && "setData" in source) {
        source.setData({
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [],
          },
        });
      }
    }
  }, [drawState.isDrawing]);

  // Update polygon when draw state changes
  useEffect(() => {
    updatePolygon();
  }, [updatePolygon]);

  // Handle ESC key to cancel drawing
 useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && drawState.isDrawMode) {
      cancelDrawing();
      setActiveMode("map");
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [drawState.isDrawMode, cancelDrawing]);
  // Add property markers to map
  useEffect(() => {
    if (!map.current || !mapLoaded || loading) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    // Only show markers if not in draw mode and should show markers
    if (!shouldShowMarkers) return;

    // Add new markers for filtered properties
    displayProperties.forEach((property) => {
      const markerElement = document.createElement("div");
      const root = ReactDOM.createRoot(markerElement);

      root.render(
        <PropertyMarker
          property={property}
          onClick={handlePropertyClick}
          isSelected={selectedProperty?.id === property.id}
        />
      );

      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([property.lng, property.lat])
        .addTo(map.current!);

      markersRef.current[property.id] = marker;
    });

    // Cleanup function
    return () => {
      Object.values(markersRef.current).forEach((marker) => marker.remove());
      markersRef.current = {};
    };
  }, [
    map.current,
    mapLoaded,
    displayProperties,
    loading,
    selectedProperty,
    shouldShowMarkers,
  ]);

  // Handle property marker click
  const handlePropertyClick = (property: MapProperty) => {
    if (!map.current || drawState.isDrawMode) return;

    setSelectedProperty(property);

    // Close existing popup
    if (popupRef.current) {
      popupRef.current.remove();
    }

    // Create popup element
    const popupElement = document.createElement("div");
    const root = ReactDOM.createRoot(popupElement);

    root.render(
      <PropertyPopup
        property={property}
        onClose={handleClosePopup}
        onViewDetails={handleViewPropertyDetails}
      />
    );

    // Create and show popup
    popupRef.current = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: [0, -10],
    })
      .setLngLat([property.lng, property.lat])
      .setDOMContent(popupElement)
      .addTo(map.current);

    // Center map on property
    map.current.flyTo({
      center: [property.lng, property.lat],
      zoom: Math.max(map.current.getZoom(), 14),
      duration: 1000,
    });
  };

  // Handle close popup
  const handleClosePopup = () => {
    if (popupRef.current) {
      popupRef.current.remove();
      popupRef.current = null;
    }
    setSelectedProperty(null);
  };

  // Handle view property details
  const handleViewPropertyDetails = (propertyId: string) => {
    router.push(`/tenant/properties/${propertyId}`);
  };

  // Handle remove boundary
  const handleRemoveBoundary = () => {
    removeBoundary();
    setActiveMode("map");
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowStyleOptions(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Handle mode changes
  const handleLocalInfoClick = () => {
  setActiveMode("localInfo");
  setShowStyleOptions(false);
  // Cancel any active drawing
  if (drawState.isDrawMode || drawState.isDrawing) {
    cancelDrawing();
  }
};

 const handleMapClick = () => {
  setActiveMode("map");
  // Cancel any active drawing
  if (drawState.isDrawMode || drawState.isDrawing) {
    cancelDrawing();
  }
};

const handleDrawClick = () => {
  setActiveMode("draw");
  setShowStyleOptions(false);
  toggleDrawMode();
};

  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      {/* Map Container */}
      <div ref={mapContainer} style={{ height: "100%", width: "100%" }} />

      {/* Loading Overlay */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-white/70 z-[5]">
          <p>Loading map...</p>
        </div>
      )}

      {/* Properties Loading Indicator */}
      {mapLoaded && loading && (
        <div className="absolute top-4 left-4 z-20 bg-white/90 rounded-lg px-3 py-2 shadow-md">
          <div className="flex items-center">
            <svg
              className="animate-spin h-4 w-4 mr-2 text-[#20364D]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="text-sm text-[#20364D]">
              Loading properties...
            </span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="absolute top-4 left-4 z-20 bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-lg">
          <span className="text-sm">{error}</span>
        </div>
      )}

      {/* Properties Count */}
      {mapLoaded && !loading && drawState.hasDrawnArea && (
        <div className="absolute top-18 left-0 right-0 z-20 flex justify-center">
          <div className="flex px-[10px] py-[5px] items-center gap-1 rounded-[16px] bg-[rgba(32,54,77,0.30)]">
            <span className="text-white text-[10px] font-bold">
              {displayProperties.length > 0
                ? `${displayProperties.length} properties found`
                : "No Properties found"}
            </span>
          </div>
        </div>
      )}

      {/* Draw Mode Instructions */}
      {drawState.isDrawMode && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-[#20364D] text-white rounded-lg px-4 py-2 shadow-lg">
          <div className="flex items-center space-x-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            </svg>
            <span className="text-sm font-medium">
              {drawState.isDrawing
                ? "Drawing..."
                : "Tap and drag to draw an area"}
            </span>
          </div>
        </div>
      )}

      {/* Remove Boundary Button */}
      {drawState.hasDrawnArea && (
        <RemoveBoundaryButton
          onRemove={handleRemoveBoundary}
          propertiesCount={displayProperties.length}
        />
      )}

      {/* Category Tabs - Slide in from top when local info is active */}
      <div
        className={`absolute top-0 left-0 right-0 z-20 bg-white shadow-md transition-transform duration-300 ease-in-out ${
          activeMode === "localInfo" ? "transform-none" : "-translate-y-full"
        }`}
      >
        {/* We'll implement this later */}
      </div>

      {/* Map Controls */}
      {mapLoaded && (
        <>
          {/* Location Button - Bottom Right */}
          <div className="absolute bottom-13 right-4 z-10">
            <LocationButton map={map.current} />
          </div>

          {/* Bottom Center Controls - Local Info, Map, Draw */}
          <div className="absolute bottom-13 left-0 right-0 z-9 flex justify-center">
            <div className="flex items-center gap-4" ref={dropdownRef}>
              <LocalInfoButton
                isActive={activeMode === "localInfo"}
                onClick={handleLocalInfoClick}
              />
              <MapButton
                isActive={activeMode === "map"}
                onClick={handleMapClick}
                map={map.current}
                showStyleOptions={showStyleOptions}
                setShowStyleOptions={setShowStyleOptions}
                currentStyle={currentStyle}
                setCurrentStyle={setCurrentStyle}
              />
              <DrawButton
                isActive={activeMode === "draw"}
                onClick={handleDrawClick}
              />
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0%); }
        }
        
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0%); }
        }
        
        /* Add some custom styles for the Mapbox geolocate button */
        .mapboxgl-ctrl-geolocate {
          width: 28px !important;
          height: 28px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 50% !important;
          box-sizing: border-box;
        }

        .mapboxgl-user-location-accuracy-circle.mapboxgl-marker.mapboxgl-marker-anchor-center {
          width: 0 !important;
          height: 0 !important;
          display: none !important;
        }
        
        .mapboxgl-user-location-dot {
          background-color: #20364D !important;
        }
        
        .mapboxgl-user-location-dot::before,
        .mapboxgl-user-location-dot::after {
          background-color: #20364D !important;
        }

        /* Custom popup styles */
        .mapboxgl-popup {
          max-width: none !important;
        }
        
        .mapboxgl-popup-content {
          padding: 0 !important;
          border-radius: 8px !important;
        }
        
        .mapboxgl-popup-tip {
          border-top-color: white !important;
        }

        /* Draw tool control styles */
        .draw-tool-control-button {
          background: white !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
        }

        .draw-tool-control-button:hover {
          background: #f5f5f5 !important;
        }

        /* Mobile touch improvements */
        .mapboxgl-canvas {
          touch-action: none;
        }

        /* Drawing cursor */
        .mapboxgl-canvas.drawing-cursor {
          cursor: crosshair !important;
        }
      `}</style>
    </Box>
  );
};

export default MapView;
