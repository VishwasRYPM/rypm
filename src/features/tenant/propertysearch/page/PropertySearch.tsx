"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PropertySearchBar from "../components/PropertySearchBar";
import PropertyCarousel from "../components/PropertyCarousel";
import BottomNavigation from "@/ui/BottomNavigation";
import PropertyMapView from "../components/Map/PropertyMapView";

// ✅ Main content component that uses search params
const PropertySearchContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  // ✅ Sync URL params with view state
  useEffect(() => {
    const view = searchParams.get('view');
    setViewMode(view === 'map' ? 'map' : 'list');
  }, [searchParams]);

  const handleMapToggle = () => {
    const params = new URLSearchParams(searchParams);
    
    if (viewMode === "list") {
      // Switch to map view
      params.set('view', 'map');
    } else {
      // Switch to list view
      params.delete('view');
    }
    
    const newUrl = `/tenant/PropertySearch${params.toString() ? `?${params.toString()}` : ''}`;
    
    router.push(newUrl);
  };

  return (
    <div className={`flex flex-col ${viewMode === "map" ? "h-screen" : ""}`}>
      {viewMode === "list" ? (
        <>
          <div>
            <PropertySearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              isMapView={false}
              onMapToggle={handleMapToggle} // ✅ Now updates URL
            />
          </div>
          <div className="pt-20">
            <PropertyCarousel />
          </div>
          <BottomNavigation />
        </>
      ) : (
        <PropertyMapView onBackToList={handleMapToggle} /> // ✅ Now updates URL
      )}
    </div>
  );
};

// ✅ Wrapper component with Suspense for useSearchParams
const PropertySearch: React.FC = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#001D3D] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PropertySearchContent />
    </Suspense>
  );
};

export default PropertySearch;
