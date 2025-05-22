import { useState, useRef, useCallback, MutableRefObject } from 'react';
import mapboxgl from 'mapbox-gl';

export function useMapbox(
  mapContainer: MutableRefObject<HTMLDivElement | null>,
  initialLocation: { lat: number; lng: number },
  zoom: number
) {
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const initializeMap = useCallback(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialLocation.lng, initialLocation.lat],
      zoom: zoom,
    });

    map.current.on("load", () => {
      setMapLoaded(true);
    });
  }, [initialLocation.lat, initialLocation.lng, zoom, mapContainer]);

  // Cleanup function
  const cleanupMap = useCallback(() => {
    if (map.current) {
      map.current.remove();
      map.current = null;
      setMapLoaded(false);
    }
  }, []);

  return {
    map: map.current,
    mapLoaded,
    initializeMap,
    cleanupMap
  };
}
