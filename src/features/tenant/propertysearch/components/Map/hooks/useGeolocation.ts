import { useState, useEffect } from 'react';

// Error types for geolocation
export enum LocationErrorType {
  PERMISSION_DENIED = 1,
  POSITION_UNAVAILABLE = 2,
  TIMEOUT = 3,
  UNKNOWN = 4,
}

export function useGeolocation() {
  const [locationAvailable, setLocationAvailable] = useState<boolean | null>(null);
  const [locationError, setLocationError] = useState<LocationErrorType | null>(null);

  useEffect(() => {
    // Test if geolocation is available
    if ("geolocation" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          if (result.state === "granted") {
            setLocationAvailable(true);
          } else if (result.state === "denied") {
            setLocationAvailable(false);
          } else {
            // Try a test geolocation request
            navigator.geolocation.getCurrentPosition(
              () => setLocationAvailable(true),
              (error) => {
                console.log("Initial location check error:", error);
                setLocationAvailable(false);
                if (error.code === LocationErrorType.PERMISSION_DENIED) {
                  setLocationError(LocationErrorType.PERMISSION_DENIED);
                } else if (
                  error.code === LocationErrorType.POSITION_UNAVAILABLE
                ) {
                  setLocationError(LocationErrorType.POSITION_UNAVAILABLE);
                }
              },
              { timeout: 3000, maximumAge: 0 }
            );
          }
        })
        .catch((error) => {
          console.log("Permissions API error:", error);
          setLocationAvailable(false);
        });
    } else {
      setLocationAvailable(false);
    }
  }, []);

  // Get platform-specific instructions
  const getPlatformSpecificInstructions = () => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      return "Please enable location services on your device. Go to Settings > Location and turn on 'Use location'.";
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      return "Please enable location services on your device. Go to Settings > Privacy > Location Services and turn on location for this app.";
    } else {
      return "Please enable location services in your browser settings and refresh the page.";
    }
  };

  return {
    locationAvailable,
    locationError,
    getPlatformSpecificInstructions
  };
}
