"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import LocationButton from "./controls/LocationButton";
import LocalInfoButton from "./controls/LocalInfoButton";
import MapButton from "./controls/MapButton";
import DrawButton from "./controls/DrawButton";
import RemoveBoundaryButton from "./controls/RemoveBoundaryButton";
import { useLocalInfo } from "./hooks/useLocalInfo";
import { useMapProperties, MapProperty } from "./hooks/useMapProperties";
import { useMapDraw } from "./hooks/useMapDraw";
import PropertyMarker from "./components/PropertyMarker";
import PropertyPopup from "./components/PropertyPopup";
import CategoryTabs from "./features/LocalInfo/CategoryTabs";
import { useGooglePlaces } from "./hooks/useGooglePlaces";
import PlaceMarker from "./components/PlaceMarker";
import PlacePopup from "./components/PlacePopup";
import ClusterMarker from "./components/ClusterMarker";
import CategoryBottomSheet from "./features/LocalInfo/CategoryBottomSheet";
import PlaceDetailBottomSheet from "./features/LocalInfo/PlaceDetailBottomSheet";
import SearchSheet from './features/SearchSheet';
import PropertySearchBar from "../PropertySearchBar";

const MAPBOX_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "pk.eyJ1IjoicHJpeWVzaGd1cmphciIsImEiOiJjbWFwMmliZnQwYnJsMmlzM3E2YzFhbnMyIn0.dgFK-9QjfR8H-f3YyLg28w";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

interface MapViewProps {
  initialLocation?: { lat: number; lng: number };
  zoom?: number;
  onViewToggle?: () => void; 
}

interface PropertyCluster {
  id: string;
  lat: number;
  lng: number;
  count: number;
  properties: MapProperty[];
}

const MapView: React.FC<MapViewProps> = ({
  initialLocation = { lat: 43.6532, lng: -79.3832 },
  zoom = 13,
  onViewToggle
}) => {
  const router = useRouter();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const clusterMarkersRef = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  const [mapLoaded, setMapLoaded] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [selectedProperty, setSelectedProperty] = useState<MapProperty | null>(
    null
  );
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [showPlacePopup, setShowPlacePopup] = useState(false);
  const [showPlaceDetailSheet, setShowPlaceDetailSheet] = useState(false);
  const [selectedPlaceForDetails, setSelectedPlaceForDetails] =
    useState<any>(null);
  const [placeDetailsLoading, setPlaceDetailsLoading] = useState(false);

  const [activeMode, setActiveMode] = useState<"map" | "localInfo" | "draw">(
    "map"
  );
  const [showStyleOptions, setShowStyleOptions] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("streets");
  const [showCategoryBottomSheet, setShowCategoryBottomSheet] = useState(false);

  // ✅ Add the missing state variables
  const [showSearchSheet, setShowSearchSheet] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const {
    places,
    loading: placesLoading,
    error: placesError,
    searchPlaces,
    getPlaceDetails,
    clearPlaces,
  } = useGooglePlaces();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const displayProperties = drawState.hasDrawnArea
    ? filterPropertiesInArea(properties)
    : drawState.isDrawMode
    ? []
    : properties;
  const shouldShowMarkers =
    !drawState.isDrawMode && !drawState.isDrawing && !isLocalInfoActive;

  // detail sheet Convert places to CategoryItem format
  const convertPlacesToCategoryItems = (places: any[]) => {
    return places.map((place) => ({
      id: place.id,
      title: place.name,
      address: place.vicinity || place.address || "Address not available",
      rating: place.rating || 0,
      thumbnail: place.photoUrl, //fallback to a default image
      distance: place.distance,
    }));
  };

  // Clustering logic
  const createClusters = useCallback(
    (props: MapProperty[], zoomLevel: number): PropertyCluster[] => {
      if (zoomLevel >= 14) {
        return []; // Show individual properties only at very high zoom
      }

      const clusters: PropertyCluster[] = [];
      const clustered: Set<string> = new Set();

      // Super aggressive clustering thresholds
      const threshold =
        zoomLevel < 4
          ? 10.0 // Entire continents
          : zoomLevel < 6
          ? 5.0 // Countries
          : zoomLevel < 8
          ? 1.0 // Provinces/States
          : zoomLevel < 10
          ? 0.2 // Cities
          : zoomLevel < 12
          ? 0.05 // Districts
          : zoomLevel < 14
          ? 0.01
          : 0.005; // Neighborhoods

      props.forEach((property) => {
        if (clustered.has(property.id)) return;

        const nearbyProperties = props.filter((p) => {
          if (clustered.has(p.id) || p.id === property.id) return false;

          const distance = Math.sqrt(
            Math.pow(p.lat - property.lat, 2) +
              Math.pow(p.lng - property.lng, 2)
          );

          return distance < threshold;
        });

        // Always cluster at zoom < 10, require 2+ properties at higher zoom
        const shouldCluster = zoomLevel < 10 || nearbyProperties.length > 0;

        if (shouldCluster) {
          const allProperties =
            nearbyProperties.length > 0
              ? [property, ...nearbyProperties]
              : [property];

          const centerLat =
            allProperties.reduce((sum, p) => sum + p.lat, 0) /
            allProperties.length;
          const centerLng =
            allProperties.reduce((sum, p) => sum + p.lng, 0) /
            allProperties.length;

          clusters.push({
            id: `cluster-${property.id}`,
            lat: centerLat,
            lng: centerLng,
            count: allProperties.length,
            properties: allProperties,
          });

          allProperties.forEach((p) => clustered.add(p.id));
        }
      });

      return clusters;
    },
    []
  );

  const getClusters = useCallback(
    (zoomLevel: number): PropertyCluster[] => {
      return createClusters(displayProperties, zoomLevel);
    },
    [displayProperties, createClusters]
  );

  const getIndividualProperties = useCallback(
    (zoomLevel: number): MapProperty[] => {
      if (zoomLevel >= 12) {
        return displayProperties; // Show all individual properties at high zoom
      }

      const clusters = getClusters(zoomLevel);
      const clusteredPropertyIds = new Set(
        clusters.flatMap((cluster) => cluster.properties.map((p) => p.id))
      );

      return displayProperties.filter((p) => !clusteredPropertyIds.has(p.id));
    },
    [displayProperties, getClusters]
  );

  const handleClusterClick = useCallback(
    (cluster: PropertyCluster) => {
      if (map.current) {
        map.current.flyTo({
          center: [cluster.lng, cluster.lat],
          zoom: currentZoom + 3,
          duration: 1000,
        });
      }
    },
    [currentZoom]
  );

  const initializeDrawingLayers = useCallback(() => {
    if (!map.current) return;

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
          features: [],
        },
      });
    }

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
          "fill-color": "#001D3D",
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

      if (map.current.getLayer("drawing-fill")) {
        map.current.moveLayer("map-overlay", "drawing-fill");
      }
    }
  }, []);

  // Map initialization
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialLocation.lng, initialLocation.lat],
      zoom: zoom,
      doubleClickZoom: false,
    });

    map.current.on("load", () => {
      setMapLoaded(true);
    });

    // Track zoom changes
    map.current.on("zoom", () => {
      if (map.current) {
        setCurrentZoom(map.current.getZoom());
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [initialLocation.lat, initialLocation.lng, zoom]);

  // Places search effect
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const handleZoomEnd = () => {
      const newZoom = map.current?.getZoom() || zoom;
      setCurrentZoom(newZoom);
    };

    map.current.on("zoomend", handleZoomEnd);

    return () => {
      if (map.current) {
        map.current.off("zoomend", handleZoomEnd);
      }
    };
  }, [mapLoaded, zoom]);

  useEffect(() => {
    if (isLocalInfoActive && map.current) {
      const center = map.current.getCenter();
      searchPlaces(selectedCategory, { lat: center.lat, lng: center.lng });
    } else {
      clearPlaces();
    }
  }, [isLocalInfoActive, selectedCategory, searchPlaces, clearPlaces]);

  useEffect(() => {
    if (showPlacePopup) {
      setShowCategoryBottomSheet(false);
    } else if (selectedCategory !== "all" && isLocalInfoActive) {
      setShowCategoryBottomSheet(true);
    }
  }, [showPlacePopup, selectedCategory, isLocalInfoActive]);

  const handlePlaceClick = (place: any) => {
    setSelectedPlace(place);
    setShowPlacePopup(true);
    console.log("Place clicked:", place);
  };

  const handlePlacePopupClose = () => {
    setShowPlacePopup(false);
    setSelectedPlace(null);
  };

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const existingPlaceMarkers = document.querySelectorAll(
      "[data-place-marker]"
    );
    existingPlaceMarkers.forEach((marker) => marker.remove());

    // ✅ Don't render if loading or not active or no places
    if (placesLoading || !isLocalInfoActive || !places || places.length === 0) {
      return;
    }

    places.forEach((place) => {
      const markerElement = document.createElement("div");
      markerElement.setAttribute("data-place-marker", "true");

      const root = ReactDOM.createRoot(markerElement);
      root.render(
        <PlaceMarker
          place={place}
          onClick={handlePlaceClick}
          isSelected={selectedPlace?.id === place.id}
          searchCategory={selectedCategory}
        />
      );

      new mapboxgl.Marker(markerElement)
        .setLngLat([place.lng, place.lat])
        .addTo(map.current!);
    });
  }, [
    map.current,
    mapLoaded,
    places,
    placesLoading,
    isLocalInfoActive,
    selectedPlace?.id,
    selectedCategory,
  ]);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const timer = setTimeout(() => {
      if (map.current && map.current.isStyleLoaded()) {
        initializeDrawingLayers();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [mapLoaded, initializeDrawingLayers]);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const handleStyleLoad = () => {
      setTimeout(() => {
        initializeDrawingLayers();

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

    map.current.on("style.load", handleStyleLoad);

    return () => {
      if (map.current) {
        map.current.off("style.load", handleStyleLoad);
      }
    };
  }, [
    mapLoaded,
    initializeDrawingLayers,
    drawState.hasDrawnArea,
    drawState.points,
  ]);

  // Drawing event listeners
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    const mapInstance = map.current;

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

    mapInstance.on("mousedown", handleMouseDown);
    mapInstance.on("mousemove", handleMouseMove);
    mapInstance.on("mouseup", handleMouseUp);
    mapInstance.on("touchstart", handleTouchStart);
    mapInstance.on("touchmove", handleTouchMove);
    mapInstance.on("touchend", handleTouchEnd);

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

  // Drawing line update
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

  // Polygon update
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

  // Clear drawing line when not drawing
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

  // ESC key handler
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

  // Property markers rendering
  useEffect(() => {
    if (!map.current || !mapLoaded || loading) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};
    Object.values(clusterMarkersRef.current).forEach((marker) =>
      marker.remove()
    );
    clusterMarkersRef.current = {};

    if (!shouldShowMarkers) return;

    const currentClusters = getClusters(currentZoom);
    const currentIndividualProperties = getIndividualProperties(currentZoom);

    // Render cluster markers
    currentClusters.forEach((cluster) => {
      const markerElement = document.createElement("div");
      const root = ReactDOM.createRoot(markerElement);
      root.render(
        <ClusterMarker
          count={cluster.count}
          onClick={() => handleClusterClick(cluster)}
          isSelected={false}
        />
      );

      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([cluster.lng, cluster.lat])
        .addTo(map.current!);

      clusterMarkersRef.current[cluster.id] = marker;
    });

    // Render individual property markers
    currentIndividualProperties.forEach((property) => {
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

    return () => {
      Object.values(markersRef.current).forEach((marker) => marker.remove());
      markersRef.current = {};
      Object.values(clusterMarkersRef.current).forEach((marker) =>
        marker.remove()
      );
      clusterMarkersRef.current = {};
    };
  }, [
    map.current,
    mapLoaded,
    displayProperties,
    loading,
    selectedProperty,
    shouldShowMarkers,
    currentZoom,
    getClusters,
    getIndividualProperties,
    handleClusterClick,
  ]);

  // Property interaction handlers
  const handlePropertyClick = (property: MapProperty) => {
    if (!map.current || drawState.isDrawMode) return;
    setSelectedProperty(property);

    if (popupRef.current) {
      popupRef.current.remove();
      popupRef.current = null;
    }
  };

  const handleClosePopup = () => {
    if (popupRef.current) {
      popupRef.current.remove();
      popupRef.current = null;
    }
    setSelectedProperty(null);
  };

  const handleViewPropertyDetails = (propertyId: string) => {
    router.push(`/tenant/properties/${propertyId}`);
  };

  const handleRemoveBoundary = () => {
    removeBoundary();
    //setActiveMode("map");
  };

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowStyleOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Mode change handlers
  const handleLocalInfoClick = () => {
    toggleLocalInfo();
    setShowStyleOptions(false);
    setActiveMode("localInfo");
    if (drawState.isDrawMode || drawState.isDrawing) {
      cancelDrawing();
    }
  };

  const handleMapClick = () => {
    setActiveMode("map");
    if (isLocalInfoActive) {
    toggleLocalInfo();
  }
    if (drawState.isDrawMode || drawState.isDrawing) {
      cancelDrawing();
    }
  };

const handleDrawClick = () => {
  if (activeMode === "draw") {
    setActiveMode("map");
    cancelDrawing();
  } else {
    setActiveMode("draw");
    
    // ✅ Deactivate local info when activating draw
    if (isLocalInfoActive) {
      toggleLocalInfo();
    }
    
    toggleDrawMode();
  }
  setShowStyleOptions(false);
};

  // Bottom sheet handlers
  const handleCategoryTabClick = (category: any) => {
    handleCategoryChange(category);

    // Show bottom sheet when a specific category is selected (not "all")
    if (category !== "all") {
      setShowCategoryBottomSheet(true);
    } else {
      setShowCategoryBottomSheet(false);
    }
  };

  const handleCloseBottomSheet = () => {
    setShowCategoryBottomSheet(false);
  };

  const handlePlaceDetailRequest = async (placeId: string) => {
    setPlaceDetailsLoading(true);
    setShowPlaceDetailSheet(true);

    try {
      const placeDetails = await getPlaceDetails(placeId);
      setSelectedPlaceForDetails(placeDetails);
    } catch (error) {
      console.error("Error fetching place details:", error);
      setSelectedPlaceForDetails(null);
    } finally {
      setPlaceDetailsLoading(false);
    }
  };

  const handlePlaceDetailClose = () => {
    setShowPlaceDetailSheet(false);
    setSelectedPlaceForDetails(null);
  };

  const handlePlaceDetailBack = () => {
    setShowPlaceDetailSheet(false);
    setSelectedPlaceForDetails(null);
    // Keep the category bottom sheet open
  };

  const handleSearchSheetOpen = () => {
    setShowSearchSheet(true);
  };

  const handleSearchSheetClose = () => {
    setShowSearchSheet(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleNearbySearch = () => {
    // Trigger nearby search functionality
    if (map.current) {
      const center = map.current.getCenter();
      searchPlaces('all', { lat: center.lat, lng: center.lng });
    }
  };

  const handleLocalInfoSearch = () => {
    // Activate local info mode
    if (!isLocalInfoActive) {
      toggleLocalInfo();
    }
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
              className="animate-spin h-4 w-4 mr-2 text-[#001D3D]"
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
            <span className="text-sm text-[#001D3D]">
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

      {/* Remove Boundary Button */}
      {drawState.hasDrawnArea && (
        <RemoveBoundaryButton
          onRemove={handleRemoveBoundary}
          propertiesCount={displayProperties.length}
        />
      )}

      {/* Category Tabs */}
      <div
        className={`absolute top-13 left-0 right-0 z-20 inline-flex items-center gap-1.5 transition-transform duration-300 ease-in-out ${
          isLocalInfoActive ? "transform-none" : "-translate-y-full"
        }`}
      >
        {isLocalInfoActive && (
          <CategoryTabs
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryTabClick}
          />
        )}
      </div>

      {/* Map Controls */}
      {mapLoaded && (
        <>
          {/* Location Button */}
          <div className="absolute bottom-13 right-4 z-10">
            <LocationButton map={map.current} />
          </div>

          {/* Bottom Center Controls */}
          <div className="absolute bottom-13 left-0 right-0 z-9 flex justify-center">
            <div className="flex items-center gap-4" ref={dropdownRef}>
              <LocalInfoButton
                isActive={isLocalInfoActive}
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

      {/* Property Popup */}
      {selectedProperty && (
        <PropertyPopup
          property={selectedProperty}
          onClose={handleClosePopup}
          onViewDetails={handleViewPropertyDetails}
        />
      )}

      {/* Places Loading Indicator */}
      {isLocalInfoActive && placesLoading && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2">
            <svg
              className="animate-spin h-4 w-4 text-[#20364D]"
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
            <span className="text-sm text-gray-700">Loading places...</span>
          </div>
        </div>
      )}

      {/* Places Error Indicator */}
      {isLocalInfoActive && placesError && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg px-4 py-2 text-sm">
            {placesError}
          </div>
        </div>
      )}

      {/* Place Popup */}
      {showPlacePopup && selectedPlace && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-end justify-center pb-3">
          <div className="w-[94vw] max-w-[420px] h-[177px] bg-white rounded-2xl shadow-xl pointer-events-auto">
            <PlacePopup place={selectedPlace} onClose={handlePlacePopupClose} />
          </div>
        </div>
      )}

      {/* Category Bottom Sheet */}
      <CategoryBottomSheet
        isOpen={showCategoryBottomSheet && !showPlaceDetailSheet}
        onClose={handleCloseBottomSheet}
        category={selectedCategory}
        items={convertPlacesToCategoryItems(places)}
        onPlaceDetailRequest={handlePlaceDetailRequest}
        initialHeight={0.35}
      />

      {/* Place Detail Bottom Sheet */}
      <PlaceDetailBottomSheet
        isOpen={showPlaceDetailSheet}
        onClose={handlePlaceDetailClose}
        onBack={handlePlaceDetailBack}
        place={selectedPlaceForDetails}
        loading={placeDetailsLoading}
        category={selectedCategory}
      />


       <SearchSheet
        isOpen={showSearchSheet}
        onClose={handleSearchSheetClose}
        onSearch={handleSearch}
        onNearbyClick={handleNearbySearch}
        onLocalInfoClick={handleLocalInfoSearch}
        searchValue={searchQuery}
      />

      <PropertySearchBar
        searchTerm={searchQuery}
        onSearchChange={setSearchQuery}
        isMapView={true}
        onMapToggle={onViewToggle}
        onSearchSheetOpen={handleSearchSheetOpen} 
      />
      
      {/* Custom Styles */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0%); }
        }
        
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0%); }
        }
        
        /* Mapbox geolocate button styles */
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
          background-color: #001D3D !important;
        }
        
        .mapboxgl-user-location-dot::before,
        .mapboxgl-user-location-dot::after {
          background-color: #001D3D !important;
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

        /* Scrollbar hide utility */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Add to your existing style tag in MapView */
.category-sheet-enter {
  transform: translateY(100%);
}

.category-sheet-enter-active {
  transform: translateY(0%);
  transition: transform 300ms ease-out;
}

.category-sheet-exit {
  transform: translateY(0%);
}

.category-sheet-exit-active {
  transform: translateY(100%);
  transition: transform 300ms ease-in;
}

.mapboxgl-ctrl-geolocate {
  display: none !important;
}

.mapboxgl-ctrl-group .mapboxgl-ctrl-geolocate {
  display: none !important;
}

      `}</style>
    </Box>
  );
};

export default MapView;
