import React from "react";
import mapboxgl from "mapbox-gl";

interface MapButtonProps {
  isActive: boolean;
  onClick: () => void;
  map: mapboxgl.Map | null;
  showStyleOptions: boolean;
  setShowStyleOptions: (show: boolean) => void;
  currentStyle: string;
  setCurrentStyle: (styleId: string) => void;
}

// Define available map styles with their icons
const mapStyles = [
  { 
    id: 'streets', 
    name: 'Map', 
    url: 'mapbox://styles/mapbox/streets-v11',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M3 6l6-3l6 3l6-3v15l-6 3l-6-3l-6 3V6z"></path>
        <path d="M9 3v15"></path>
        <path d="M15 6v15"></path>
      </svg>
    )
  },
  { 
    id: 'satellite', 
    name: 'Satellite', 
    url: 'mapbox://styles/mapbox/satellite-v9',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 12a4 4 0 0 1 8 0"></path>
        <line x1="12" y1="2" x2="12" y2="4"></line>
        <line x1="12" y1="20" x2="12" y2="22"></line>
        <line x1="20" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="12" x2="4" y2="12"></line>
      </svg>
    )
  },
  { 
    id: '3d', 
    name: '3D', 
    url: 'mapbox://styles/mapbox/light-v11',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"></path>
        <path d="M8 2v16"></path>
        <path d="M16 6v16"></path>
      </svg>
    )
  }
];

const MapButton: React.FC<MapButtonProps> = ({
  isActive,
  onClick,
  map,
  showStyleOptions,
  setShowStyleOptions,
  currentStyle,
  setCurrentStyle
}) => {
  const handleClick = () => {
    onClick();
    setShowStyleOptions(!showStyleOptions);
  };

const changeMapStyle = (styleId: string) => {
  if (!map) return;
  
  const style = mapStyles.find(s => s.id === styleId);
  if (style) {
    map.setStyle(style.url);
    
    if (styleId === 'satellite') {
      // Set optimal satellite view settings
      map.setPitch(0);  // Flat overhead view
      map.setBearing(0); // North up orientation
    } else if (styleId === '3d') {
      // Set 3D view settings
      map.setPitch(62);
      map.setBearing(-20);
      
      // Use once instead of on to ensure the handler runs only once per style change
      map.once('style.load', () => {
        // Check if the layer already exists
        if (map.getLayer('3d-buildings')) return;
        
        // Log available sources for debugging
        console.log('Available sources:', Object.keys(map.getStyle().sources));
        
        try {
          // Add our own source for buildings
          if (!map.getSource('mapbox-buildings')) {
            map.addSource('mapbox-buildings', {
              'type': 'vector',
              'url': 'mapbox://mapbox.mapbox-streets-v8'
            });
          }
          
          // Add the 3D buildings layer using our custom source
          map.addLayer({
            'id': '3d-buildings',
            'source': 'mapbox-buildings',
            'source-layer': 'building',
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': [
                'interpolate', ['linear'], ['zoom'],
                15, 0,
                15.05, ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate', ['linear'], ['zoom'],
                15, 0,
                15.05, ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.6
            }
          });
          console.log('3D buildings layer added successfully');
        } catch (error) {
          console.error('Error adding 3D buildings layer:', error);
        }
      });
    } else {
      // Reset to flat view for other styles
      map.setPitch(0);
      map.setBearing(0);
    }
    
    setCurrentStyle(styleId);
    setShowStyleOptions(false);
  }
};


  // Get current style object
  const currentStyleObj = mapStyles.find(s => s.id === currentStyle) || mapStyles[0];

  return (
    <div className="relative">
      {/* Main Button - Shows the currently selected style */}
      <button
        className={`flex px-[10px] py-[5px] items-center gap-1 rounded-[16px] ${
          isActive 
            ? "bg-[#20364D]" 
            : "bg-[rgba(32,54,77,0.30)]"
        }`}
        onClick={handleClick}
      >
        {currentStyleObj.icon}
        <span className="text-white text-[10px] font-bold">{currentStyleObj.name}</span>
      </button>

      {/* Map Style Options Dropdown */}
      {showStyleOptions && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col gap-2">
          {mapStyles
            .filter(style => style.id !== currentStyle) // Don't show the current style in the dropdown
            .map(style => (
              <button
                key={style.id}
                className={`flex px-[10px] py-[5px] items-center gap-1 rounded-[16px] bg-[rgba(32,54,77,0.80)] hover:bg-[#20364D] transition-colors`}
                onClick={() => changeMapStyle(style.id)}
              >
                {style.icon}
                <span className="text-white text-[10px] font-bold">{style.name}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

// Export the mapStyles for use in other components
export { mapStyles };
export default MapButton;
