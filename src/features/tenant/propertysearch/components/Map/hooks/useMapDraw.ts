import { useState, useRef, useCallback } from 'react';
import { polygon, point } from '@turf/helpers';
import { MapProperty } from './useMapProperties';

export interface DrawState {
  isDrawMode: boolean;
  isDrawing: boolean;
  hasDrawnArea: boolean;
  points: [number, number][];
}

export function useMapDraw() {
  const [drawState, setDrawState] = useState<DrawState>({
    isDrawMode: false,
    isDrawing: false,
    hasDrawnArea: false,
    points: []
  });

  // Refs for performance (avoid re-renders during drawing)
  const pointsRef = useRef<[number, number][]>([]);
  const lastPointTimeRef = useRef<number>(0);
  const throttleTimeRef = useRef<number>(20); // 20ms throttle for smooth drawing

  // Toggle draw mode
  const toggleDrawMode = useCallback(() => {
    setDrawState(prev => ({
      ...prev,
      isDrawMode: !prev.isDrawMode,
      isDrawing: false
    }));
  }, []);

  // Start drawing
  const startDrawing = useCallback((initialPoint: [number, number]) => {
    pointsRef.current = [initialPoint];
    lastPointTimeRef.current = Date.now();
    setDrawState(prev => ({
      ...prev,
      isDrawing: true,
      hasDrawnArea: false
    }));
  }, []);

  // Add point during drawing (throttled)
  const addPoint = useCallback((point: [number, number]) => {
    const now = Date.now();
    if (now - lastPointTimeRef.current >= throttleTimeRef.current) {
      pointsRef.current.push(point);
      lastPointTimeRef.current = now;
      return true;
    }
    return false;
  }, []);

  // Cancel drawing
  const cancelDrawing = useCallback(() => {
    pointsRef.current = [];
    setDrawState(prev => ({
      ...prev,
      isDrawing: false,
      isDrawMode: false
    }));
  }, []);

  // Simple point-in-polygon algorithm (Ray casting)
  const isPointInPolygon = useCallback((point: [number, number], polygon: [number, number][]): boolean => {
    const [x, y] = point;
    let inside = false;
    
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i];
      const [xj, yj] = polygon[j];
      
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    
    return inside;
  }, []);

  // Finish drawing
  const finishDrawing = useCallback(() => {
    if (pointsRef.current.length >= 3) {
      // Close the polygon
      pointsRef.current.push(pointsRef.current[0]);
      
      setDrawState(prev => ({
        ...prev,
        isDrawing: false,
        isDrawMode: false,
        hasDrawnArea: true,
        points: [...pointsRef.current]
      }));
    } else {
      // Not enough points, cancel drawing
      cancelDrawing();
    }
  }, [cancelDrawing]);

  // Remove boundary (reset)
  const removeBoundary = useCallback(() => {
    pointsRef.current = [];
    setDrawState({
      isDrawMode: true,
      isDrawing: false,
      hasDrawnArea: false,
      points: []
    });
  }, []);

  // Filter properties based on drawn area
  const filterPropertiesInArea = useCallback((properties: MapProperty[]) => {
    if (!drawState.hasDrawnArea || drawState.points.length < 4) {
      return properties; // Return all properties if no area drawn
    }

    try {
      return properties.filter(property => {
        try {
          // Use our simple point-in-polygon algorithm
          return isPointInPolygon([property.lng, property.lat], drawState.points);
        } catch (error) {
          console.error("Error checking point in polygon for property:", property.id, error);
          return false;
        }
      });
    } catch (error) {
      console.error("Error filtering properties:", error);
      return properties;
    }
  }, [drawState.hasDrawnArea, drawState.points, isPointInPolygon]);

  // Get current drawing points (for real-time line updates)
  const getCurrentPoints = useCallback(() => {
    return [...pointsRef.current];
  }, []);

  return {
    drawState,
    toggleDrawMode,
    startDrawing,
    addPoint,
    finishDrawing,
    cancelDrawing,
    removeBoundary,
    filterPropertiesInArea,
    getCurrentPoints
  };
}
