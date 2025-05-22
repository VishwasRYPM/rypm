// 'use client';
// import React, { useState } from 'react';
// import PropertySearchBar from './PropertySearchBar';
// import PropertyCarousel from './PropertyCarousel';
// import MapView from './Map/MapView';
// import BottomNavigation from '@/ui/BottomNavigation';

// const PropertySearch: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

//     const handleMapToggle = () => {
//     setViewMode(viewMode === 'list' ? 'map' : 'list');
//   };

//   return (
//     <>
//      <div className={`flex flex-col ${viewMode === 'map' ? 'h-screen' : ''}`}>
//       {/* PropertySearchBar with different styling based on view mode */}
//       <div className={`${viewMode === 'map' ? 'absolute top-0 left-0 right-0 z-10 pt-2 px-2' : ''}`}>
//         <PropertySearchBar 
//           searchTerm={searchTerm} 
//           onSearchChange={setSearchTerm} 
//           isMapView={viewMode === 'map'}
//           onMapToggle={handleMapToggle}
//         />
//       </div>
      
//       {/* Content area */}
//       {viewMode === 'list' ? (
//         <>
//           <PropertyCarousel />
//           <BottomNavigation /> {/* Only show BottomNavigation in list view */}
//         </>
//       ) : (
//         <div className="flex-grow">
//           <MapView />
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default PropertySearch;




// 'use client';
// import React, { useState } from 'react';
// import PropertySearchBar from './PropertySearchBar';
// import PropertyCarousel from './PropertyCarousel';
// import BottomNavigation from '@/ui/BottomNavigation';
// import PropertyMapView from './Map/PropertyMapView';

// const PropertySearch: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

//   const handleMapToggle = () => {
//     setViewMode(viewMode === 'list' ? 'map' : 'list');
//   };

//   return (
//     <div className={`flex flex-col ${viewMode === 'map' ? 'h-screen' : ''}`}>
//       {viewMode === 'list' ? (
//         <>
//           <div>
//             <PropertySearchBar 
//               searchTerm={searchTerm} 
//               onSearchChange={setSearchTerm} 
//               isMapView={false}
//               onMapToggle={handleMapToggle}
//             />
//           </div>
//           <PropertyCarousel />
//           <BottomNavigation /> 
//         </>
//       ) : (
//         <PropertyMapView onBackToList={handleMapToggle} />
//       )}
//     </div>
//   );
// };

// export default PropertySearch;

