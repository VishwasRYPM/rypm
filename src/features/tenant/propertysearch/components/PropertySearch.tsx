'use client';
import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/store/rootReducer';
import PropertySearchBar from './PropertySearchBar';
// import SearchResultsHeader from './SearchResultsHeader';
//import CityCard from './CityCard';
import PropertyCarousel from './PropertyCarousel';

const PropertySearch: React.FC = () => {
  // const cityData = [
  //   { city: 'Toronto', country: 'Canada', propertiesCount: 3654, imageUrl: '/images/toronto.png' },
  //   { city: 'New York', country: 'USA', propertiesCount: 2364, imageUrl: '/images/new york, USA.png' },
  //   { city: 'Panama city', country: 'Panama', propertiesCount: 1821, imageUrl: '/images/Panama.png' },
  // ];

  const [searchTerm, setSearchTerm] = useState("");
  // const dispatch = useDispatch();
  
 
  // const selectedCity = useSelector((state: RootState) => state.propertySearch?.selectedCity);
  // const selectedCountry = useSelector((state: RootState) => state.propertySearch?.selectedCountry);

  // Get the selected city and country from Redux
  // const selectedCity = useSelector((state: RootState) => 
  //   state.propertySearch ? state.propertySearch.selectedCity : null
  // );
  // const selectedCountry = useSelector((state: RootState) => 
  //   state.propertySearch ? state.propertySearch.selectedCountry : null
  //);

  // return (
  //   <>
  //     <PropertySearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
  //      <SearchResultsHeader />
  //       {selectedCity ? (
  //       // Show property listings for selected city
  //       <>
  //         <PropertyCarousel city={selectedCity} country={selectedCountry}   />
  //       </>
  //     ) : (
  //       // Show city selection
  //       <div className=" py-1">
  //         <div className=" grid grid-cols-1 md:grid-cols-1 gap-3">
  //           {cityData.map((city) => (
  //             <CityCard key={city.city} {...city} />
  //           ))}
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );

  return (
    <>
      <PropertySearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PropertyCarousel  />
    </>
  );
};

export default PropertySearch;
