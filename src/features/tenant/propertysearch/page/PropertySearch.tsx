'use client';
import React, { useState } from 'react';
import PropertySearchBar from '../components/PropertySearchBar';
import PropertyCarousel from '../components/PropertyCarousel';
import BottomNavigation from '@/ui/BottomNavigation';
import PropertyMapView from '../components/Map/PropertyMapView';


const PropertySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  
    const handleMapToggle = () => {
    setViewMode(viewMode === 'list' ? 'map' : 'list');
  };

  return (
    <div className={`flex flex-col ${viewMode === 'map' ? 'h-screen' : ''}`}>
      {viewMode === 'list' ? (
        <>
          <div>
            <PropertySearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
              isMapView={false}
              onMapToggle={handleMapToggle}
            />
          </div>
          <PropertyCarousel />
          <BottomNavigation /> 
        </>
      ) : (
        <PropertyMapView onBackToList={handleMapToggle} />
      )}
    </div>
  );
};

export default PropertySearch;
