import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import mapboxgl from 'mapbox-gl';

interface MapStylesControlProps {
  map: mapboxgl.Map | null;
}

type MapStyle = {
  name: string;
  url: string;
  icon: string;
};

const mapStyles: MapStyle[] = [
  {
    name: 'Streets',
    url: 'mapbox://styles/mapbox/streets-v11',
    icon: '🛣️'
  },
  {
    name: 'Satellite',
    url: 'mapbox://styles/mapbox/satellite-v9',
    icon: '🛰️'
  },
  {
    name: 'Satellite Streets',
    url: 'mapbox://styles/mapbox/satellite-streets-v11',
    icon: '🏙️'
  },
  {
    name: 'Light',
    url: 'mapbox://styles/mapbox/light-v10',
    icon: '☀️'
  },
  {
    name: 'Dark',
    url: 'mapbox://styles/mapbox/dark-v10',
    icon: '🌙'
  }
];

const MapStylesControl: React.FC<MapStylesControlProps> = ({ map }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentStyle, setCurrentStyle] = useState<string>('Streets');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeMapStyle = (style: MapStyle) => {
    if (map) {
      map.setStyle(style.url);
      setCurrentStyle(style.name);
    }
    handleClose();
  };

  return (
    <>
      <Tooltip title="Map Style">
        <IconButton 
          onClick={handleClick}
          sx={{
            backgroundColor: 'white',
            width: 40,
            height: 40,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#f5f5f5'
            }
          }}
        >
          <span role="img" aria-label="Map Style">
            {mapStyles.find(style => style.name === currentStyle)?.icon || '🗺️'}
          </span>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {mapStyles.map((style) => (
          <MenuItem 
            key={style.name} 
            onClick={() => changeMapStyle(style)}
            selected={currentStyle === style.name}
          >
            <span role="img" aria-label={style.name} style={{ marginRight: 8 }}>
              {style.icon}
            </span>
            {style.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MapStylesControl;