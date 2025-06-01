"use client";

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
      {/* Map Component - Pass the onBackToList function */}
      <MapView onViewToggle={onBackToList} />
    </div>
  );
};

export default PropertyMapView;
