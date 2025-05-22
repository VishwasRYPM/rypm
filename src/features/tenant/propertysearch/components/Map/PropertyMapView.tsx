"use client"
import React, { useState } from 'react';
import MapView from './MapView';
import PropertySearchBar from '../PropertySearchBar';

interface PropertyMapViewProps {
  onBackToList?: () => void;
}

const PropertyMapView: React.FC<PropertyMapViewProps> = ({ onBackToList }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="h-screen w-full relative">
      {/* Map Component */}
      <MapView />
      
      {/* Search Bar - Positioned at the top */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-2 px-2">
        <PropertySearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
          isMapView={true}
          onMapToggle={onBackToList}
        />
      </div>
    </div>
  );
};

export default PropertyMapView;