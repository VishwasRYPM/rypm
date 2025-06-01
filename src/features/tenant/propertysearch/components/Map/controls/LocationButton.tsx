import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from "react";
import { LocationIcon } from "@/ui/icons";
import mapboxgl from "mapbox-gl";

// Error types for geolocation
enum LocationErrorType {
  PERMISSION_DENIED = 1,
  POSITION_UNAVAILABLE = 2,
  TIMEOUT = 3,
  UNKNOWN = 4,
}

interface LocationButtonProps {
  map: mapboxgl.Map | null;
  isActive?: boolean;
  onClick?: () => void;
}

const LocationButton: React.FC<LocationButtonProps> = ({
  map,
  isActive = false,
  onClick
}) => {
  const geolocateRef = useRef<mapboxgl.GeolocateControl | null>(null);
  const [showPermissionSheet, setShowPermissionSheet] = useState(false);
  const [showLocationOffSheet, setShowLocationOffSheet] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [locationActive, setLocationActive] = useState(isActive);
  const [selectedAccuracy, setSelectedAccuracy] = useState<
    "precise" | "approximate"
  >("precise");
  const [locationError, setLocationError] = useState<LocationErrorType | null>(
    null
  );
  const [locationAvailable, setLocationAvailable] = useState<boolean | null>(
    null
  );

  // Check if location is available
  useEffect(() => {
    if (!map) return;

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
          setLocationAvailable(false);
        });
    } else {
      setLocationAvailable(false);
    }
  }, [map]);

  // Setup geolocate control
  useEffect(() => {
    if (!map) return;

    // Only create the control once
    if (!geolocateRef.current) {
      // Create the geolocate control
      geolocateRef.current = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
          timeout: 6000,
        },
        trackUserLocation: true,
        showUserLocation: true,
      });

      // Add it to the map
      map.addControl(geolocateRef.current, "bottom-right");

      // Add event listeners
      geolocateRef.current.on("geolocate", () => {
        setLocationActive(true);
        setIsLocating(false);
        setLocationError(null);
        setLocationAvailable(true);
      });

      geolocateRef.current.on("error", (err) => {
        setLocationActive(false);
        setIsLocating(false);

        // Handle different error types
        if (err && err.code) {
          setLocationError(err.code);
          setLocationAvailable(false);
        }
      });

      geolocateRef.current.on("trackuserlocationstart", () => {
        setLocationActive(true);
        setLocationAvailable(true);
      });

      geolocateRef.current.on("trackuserlocationend", () => {
        setLocationActive(false);
      });

      // Hide the default control - we'll show our own UI
      const hideDefaultControl = () => {
        const geolocateControls = document.querySelectorAll(
          ".mapboxgl-ctrl-geolocate"
        );
        
        geolocateControls.forEach(control => {
          if (control && control.parentElement) {
            (control.parentElement as HTMLElement).style.display = "none";
          }
        });
      };

      // Wait a bit for the control to be added to the DOM
      setTimeout(hideDefaultControl, 300);
    }

    return () => {
      // Clean up if needed
      if (map && geolocateRef.current) {
        try {
          const controlContainers = document.querySelectorAll('.mapboxgl-ctrl-geolocate');
          controlContainers.forEach(container => {
            if (container && container.parentElement) {
              container.parentElement.remove();
            }
          });
        } catch (e) {
          console.error("Error removing geolocate control:", e);
        }
      }
    };
  }, [map]);

  // Handle custom location button click
  const handleLocationButtonClick = () => {
    if (onClick) {
      onClick();
    }
    
    if (locationAvailable) {
      // If location is available, show permission sheet
      setShowPermissionSheet(true);
    } else {
      // If location is not available, show location off sheet
      setShowLocationOffSheet(true);
    }
  };

  // Handle permission choice
  const handlePermission = (
    allow: boolean,
    type?: "whileUsing" | "onlyThisTime"
  ) => {
    if (allow) {
      setIsLocating(true);
      setShowPermissionSheet(false);

      // Configure the geolocate control based on selected accuracy
      if (geolocateRef.current) {
        // We need to access the internal properties of the control
        const control = geolocateRef.current as any;

        if (control._geolocateButton) {
          // Update the position options based on selected accuracy
          control.options.positionOptions = {
            enableHighAccuracy: selectedAccuracy === "precise",
            timeout: 6000,
            maximumAge: selectedAccuracy === "approximate" ? 60000 : 0,
          };

          // Trigger geolocation with the updated options
          setTimeout(() => {
            geolocateRef.current?.trigger();
          }, 300);
        }
      }
    } else {
      // User denied permission
      setShowPermissionSheet(false);
    }
  };

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

  // Add a global backdrop when sheets are shown
// In the useEffect for backdrop management:
useEffect(() => {
  // Create or remove backdrop based on sheet visibility
  if (showPermissionSheet || showLocationOffSheet) {
    // Create backdrop if it doesn't exist
    let backdrop = document.getElementById('location-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'location-backdrop';
      backdrop.style.position = 'fixed';
      backdrop.style.top = '0';
      backdrop.style.left = '0';
      backdrop.style.right = '0';
      backdrop.style.bottom = '0';
      backdrop.style.zIndex = '40'; // Lower z-index than the sheet (50)
      backdrop.style.backgroundColor = 'rgba(3, 29, 68, 0.30)';
      
      // Create a separate element for the blur effect
      const blurElement = document.createElement('div');
      blurElement.style.position = 'absolute';
      blurElement.style.top = '0';
      blurElement.style.left = '0';
      blurElement.style.right = '0';
      blurElement.style.bottom = '0';
      blurElement.style.backdropFilter = 'blur(2px)';
      (blurElement.style as any)['-webkit-backdrop-filter'] = 'blur(2px)';
      
      // Add the blur element to the backdrop
      backdrop.appendChild(blurElement);
      
      // Add the backdrop to the body
      document.body.appendChild(backdrop);
    }
  } else {
    // Remove backdrop if sheets are closed
    const backdrop = document.getElementById('location-backdrop');
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  }

  // Cleanup function
  return () => {
    const backdrop = document.getElementById('location-backdrop');
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  };
}, [showPermissionSheet, showLocationOffSheet]);


  return (
    <>
      {/* Custom Location Button */}
      <button
        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md bg-white`}
        onClick={handleLocationButtonClick}
      >
        {locationAvailable ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99992 5.33325C9.07694 5.33325 8.17469 5.60695 7.40726 6.11973C6.63983 6.63251 6.04169 7.36134 5.68848 8.21406C5.33527 9.06678 5.24286 10.0051 5.42292 10.9103C5.60299 11.8156 6.04744 12.6471 6.70009 13.2998C7.35273 13.9524 8.18425 14.3969 9.0895 14.5769C9.99474 14.757 10.9331 14.6646 11.7858 14.3114C12.6385 13.9581 13.3673 13.36 13.8801 12.5926C14.3929 11.8252 14.6666 10.9229 14.6666 9.99992C14.6651 8.7627 14.173 7.57657 13.2981 6.70172C12.4233 5.82688 11.2371 5.33473 9.99992 5.33325Z"
              fill="#001D3D"
            />
            <path
              d="M19.3333 9.33333H18.6329C18.4717 7.27422 17.5807 5.34032 16.1202 3.87986C14.6597 2.41941 12.7258 1.52837 10.6667 1.3672V0.666667C10.6667 0.489856 10.5964 0.320286 10.4714 0.195262C10.3464 0.0702379 10.1768 0 10 0C9.82319 0 9.65362 0.0702379 9.5286 0.195262C9.40357 0.320286 9.33333 0.489856 9.33333 0.666667V1.3672C7.27422 1.52837 5.3403 2.41941 3.87982 3.87986C2.41934 5.34032 1.52827 7.27422 1.36707 9.33333H0.666667C0.489856 9.33333 0.320286 9.40357 0.195262 9.5286C0.0702379 9.65362 0 9.82319 0 10C0 10.1768 0.0702379 10.3464 0.195262 10.4714C0.320286 10.5964 0.489856 10.6667 0.666667 10.6667H1.36707C1.52827 12.7258 2.41934 14.6597 3.87982 16.1201C5.3403 17.5806 7.27422 18.4716 9.33333 18.6328V19.3333C9.33333 19.5101 9.40357 19.6797 9.5286 19.8047C9.65362 19.9298 9.82319 20 10 20C10.1768 20 10.3464 19.9298 10.4714 19.8047C10.5964 19.6797 10.6667 19.5101 10.6667 19.3333V18.6328C12.7258 18.4716 14.6597 17.5806 16.1202 16.1201C17.5807 14.6597 18.4717 12.7258 18.6329 10.6667H19.3333C19.5101 10.6667 19.6797 10.5964 19.8047 10.4714C19.9298 10.3464 20 10.1768 20 10C20 9.82319 19.9298 9.65362 19.8047 9.5286C19.6797 9.40357 19.5101 9.33333 19.3333 9.33333ZM10 17.3333C8.5496 17.3333 7.13178 16.9032 5.92582 16.0974C4.71986 15.2916 3.77993 14.1463 3.22488 12.8063C2.66984 11.4664 2.52462 9.99187 2.80757 8.56934C3.09053 7.14681 3.78897 5.84014 4.81455 4.81455C5.84014 3.78897 7.14681 3.09053 8.56934 2.80757C9.99187 2.52462 11.4664 2.66984 12.8063 3.22488C14.1463 3.77993 15.2916 4.71986 16.0974 5.92582C16.9032 7.13178 17.3333 8.5496 17.3333 10C17.331 11.9442 16.5576 13.8081 15.1829 15.1829C13.8081 16.5576 11.9442 17.331 10 17.3333Z"
              fill="#001D3D"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
                       <path
              d="M9.99968 5.33325C9.0767 5.33325 8.17444 5.60695 7.40702 6.11973C6.63959 6.63251 6.04145 7.36134 5.68824 8.21406C5.33503 9.06678 5.24261 10.0051 5.42268 10.9103C5.60274 11.8156 6.0472 12.6471 6.69984 13.2998C7.35249 13.9524 8.18401 14.3969 9.08925 14.5769C9.9945 14.757 10.9328 14.6646 11.7855 14.3114C12.6383 13.9581 13.3671 13.36 13.8799 12.5926C14.3926 11.8252 14.6663 10.9229 14.6663 9.99992C14.6649 8.7627 14.1727 7.57657 13.2979 6.70172C12.423 5.82688 11.2369 5.33473 9.99968 5.33325Z"
              fill="#D40000"
            />
            <path
              d="M19.3333 9.33333H18.6329C18.4717 7.27422 17.5807 5.34032 16.1202 3.87986C14.6597 2.41941 12.7258 1.52837 10.6667 1.3672V0.666667C10.6667 0.489856 10.5964 0.320286 10.4714 0.195262C10.3464 0.0702379 10.1768 0 10 0C9.82319 0 9.65362 0.0702379 9.5286 0.195262C9.40357 0.320286 9.33333 0.489856 9.33333 0.666667V1.3672C7.27422 1.52837 5.3403 2.41941 3.87982 3.87986C2.41934 5.34032 1.52827 7.27422 1.36707 9.33333H0.666667C0.489856 9.33333 0.320286 9.40357 0.195262 9.5286C0.0702379 9.65362 0 9.82319 0 10C0 10.1768 0.0702379 10.3464 0.195262 10.4714C0.320286 10.5964 0.489856 10.6667 0.666667 10.6667H1.36707C1.52827 12.7258 2.41934 14.6597 3.87982 16.1201C5.3403 17.5806 7.27422 18.4716 9.33333 18.6328V19.3333C9.33333 19.5101 9.40357 19.6797 9.5286 19.8047C9.65362 19.9298 9.82319 20 10 20C10.1768 20 10.3464 19.9298 10.4714 19.8047C10.5964 19.6797 10.6667 19.5101 10.6667 19.3333V18.6328C12.7258 18.4716 14.6597 17.5806 16.1202 16.1201C17.5807 14.6597 18.4717 12.7258 18.6329 10.6667H19.3333C19.5101 10.6667 19.6797 10.5964 19.8047 10.4714C19.9298 10.3464 20 10.1768 20 10C20 9.82319 19.9298 9.65362 19.8047 9.5286C19.6797 9.40357 19.5101 9.33333 19.3333 9.33333ZM10 17.3333C8.5496 17.3333 7.13178 16.9032 5.92582 16.0974C4.71986 15.2916 3.77993 14.1463 3.22488 12.8063C2.66984 11.4664 2.52462 9.99187 2.80757 8.56934C3.09053 7.14681 3.78897 5.84014 4.81455 4.81455C5.84014 3.78897 7.14681 3.09053 8.56934 2.80757C9.99187 2.52462 11.4664 2.66984 12.8063 3.22488C14.1463 3.77993 15.2916 4.71986 16.0974 5.92582C16.9032 7.13178 17.3333 8.5496 17.3333 10C17.331 11.9442 16.5576 13.8081 15.1829 15.1829C13.8081 16.5576 11.9442 17.331 10 17.3333Z"
              fill="#D40000"
            />
          </svg>
        )}
      </button>

      {/* Loading Indicator for Geolocation */}
      {isLocating && (
        <div className="absolute bottom-5 right-5 z-[51] bg-white/80 rounded p-2 pointer-events-none">
          <div className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-blue-500"
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
            <span>Finding location...</span>
          </div>
        </div>
      )}

      {/* Permission Bottom Sheet - Normal flow when location is available */}
      {showPermissionSheet && ReactDOM.createPortal (
        <div className="max-h-[60vh] overflow-y-auto fixed bottom-0 left-0 right-0 z-50 bg-[rgba(3,29,68,0.4)] backdrop-blur-[5px] shadow-lg rounded-t-3xl transform transition-all duration-300 ease-in-out animate-[slideUp_0.3s_ease-out_forwards]">
          <div className="px-6 py-4 h-[48vh] flex flex-col items-center">
            <div className="mb-3 p-2 rounded-full">
              <LocationIcon className="w-6 h-8 text-white" />
            </div>
            <p className="text-center text-white text-sm sm:text-base font-normal leading-[1em] sm:leading-[1.25em] mb-5">
              Allow <span className="font-bold">RYPM</span> to access this
              device's location?
            </p>

            {/* Accuracy Selection */}
            <div className="flex justify-center space-x-6 w-full mb-5">
              {/* Precise Location Option */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedAccuracy("precise")}
              >
                <div
                  className={`w-24 h-24 rounded-full bg-white border ${
                    selectedAccuracy === "precise"
                      ? "border-blue-500 border-2"
                      : "border-gray-200"
                  } flex items-center justify-center mb-2 relative`}
                >
                  <img
                    src="/images/precise-map.png"
                    alt="Precise location"
                    className="w-24 h-24 object-cover"
                  />
                  {selectedAccuracy === "precise" && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <span
                  className={`text-sm text-white text-[14px] ${
                    selectedAccuracy === "precise" ? "font-bold" : "font-medium"
                  } text-center`}
                >
                  Precise
                </span>
              </div>

              {/* Approximate Location Option */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedAccuracy("approximate")}
              >
                <div
                  className={`w-24 h-24 rounded-full bg-white border ${
                    selectedAccuracy === "approximate"
                      ? "border-blue-500 border-2"
                      : "border-gray-200"
                  } flex items-center justify-center mb-2 relative`}
                >
                  <img
                    src="/images/approximate.png"
                    alt="Approximate location"
                    className="w-24 h-24 object-cover"
                  />
                  {selectedAccuracy === "approximate" && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <span
                  className={`text-sm text-white text-[14px] ${
                    selectedAccuracy === "approximate" ? "font-bold" : "font-medium"
                  } text-center`}
                >
                  Approximate
                </span>
              </div>
            </div>

            <button
              onClick={() => handlePermission(true, "whileUsing")}
              className="w-[15.5rem] py-3 bg-gray-800 rounded-full text-white font-medium mb-3"
            >
              While using the app
            </button>
            <button
              onClick={() => handlePermission(true, "onlyThisTime")}
              className="w-full py-3 rounded-full text-white text-[14px]"
            >
              Only this time
            </button>
            <button
              onClick={() => handlePermission(false)}
              className="w-full py-2 rounded-full text-white font-medium text-[14px]"
            >
              Don't allow
            </button>
          </div>
        </div>,
      document.body
      )}

      {/* Location Off Bottom Sheet - When device location is off or permission denied */}
      {showLocationOffSheet && ReactDOM.createPortal (
        <div className=" overflow-y-auto fixed bottom-0 left-0 right-0 z-50 bg-[rgba(3,29,68,0.4)] backdrop-blur-[5px] shadow-lg rounded-t-3xl transform transition-all duration-300 ease-in-out animate-[slideUp_0.3s_ease-out_forwards]">
          <div className="px-6 py-5 max-h-[48vh] flex flex-col items-center">
            <div className="mb-1 p-2 rounded-full bg-red-500/20">
              <LocationIcon className="w-6 h-8 text-red-500" />
            </div>

            <h3 className="text-center text-white text-lg font-bold mb-2">
              Location Access Required
            </h3>

            <p className="text-center text-white text-sm sm:text-base font-normal leading-[1.4em] mb-6">
              {locationError === LocationErrorType.PERMISSION_DENIED
                ? "You've denied location access. To use this feature, please enable location access in your browser settings."
                : "Your device's location is turned off. To use this feature, please enable location services."}
            </p>

            <div className="w-full p-4 bg-white/10 rounded-lg mb-6">
              <p className="text-white text-sm leading-relaxed">
                {getPlatformSpecificInstructions()}
              </p>
            </div>

            <button
              onClick={() => {
                setShowLocationOffSheet(false);
                // Try again - this will likely fail again if location is still off,
                // but it's a common pattern to provide this option
                setTimeout(() => {
                  if (geolocateRef.current) {
                    geolocateRef.current.trigger();
                  }
                }, 300);
              }}
              className="w-full py-3 bg-[#001D3D] rounded-full text-white font-medium mb-3"
            >
              Try Again
            </button>

            <button
              onClick={() => setShowLocationOffSheet(false)}
              className="w-full py-3 bg-transparent text-white font-bold"
            >
              Cancel
            </button>
          </div>
        </div>,
      document.body
      )}
    </>
  );
};

export default LocationButton;
