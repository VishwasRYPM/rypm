'use client'
import React, { useState, useEffect } from 'react';
import { modalPaperSx, modalContainerSx } from '@/ui/styles/ModalManager.styles';
import SearchCity from './SearchCity';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../slices/modalSlice';
import { setSelectedLocation, setSearchTerm,setActiveTab } from '../slices/searchSlice';
import {Typography, Divider } from '@mui/material';
import Image from 'next/image';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { RootState } from '@/store/rootReducer';

const SearchCityModal: React.FC = () => {
    const dispatch = useDispatch();
    const [localSearchTerm, setLocalSearchTerm] = useState('');
    
    const reduxSearchTerm = useSelector((state: RootState) => 
        state.propertySearch ? state.propertySearch.searchTerm : ''
    );
    
    const modalState = useSelector((state: RootState) => state.modal);
    const isModalOpen = modalState.isOpen && modalState.modalType === 'searchCity';
    useEffect(() => {
        if (reduxSearchTerm) {
            setLocalSearchTerm(reduxSearchTerm);
        }
    }, [reduxSearchTerm]);
    

    useEffect(() => {
        if (isModalOpen) {
            setLocalSearchTerm('');
        }
    }, [isModalOpen]);

    
    const hasSearched = localSearchTerm.length > 0;
    
    const dummyData = {
      newProperties: [
        { city: 'New York', country: 'USA', propertiesCount: 3654, imageUrl: '/images/toronto.png' },
        { city: 'Dubai', country: 'UAE', propertiesCount: 6550, imageUrl: '/images/toronto.png' },
        { city: 'London', country: 'UK', propertiesCount: 4250, imageUrl: '/images/toronto.png' },
        { city: 'Toronto', country: 'Canada', propertiesCount: 3120, imageUrl: '/images/toronto.png' },
      ],
      myStays: [
        { city: 'Montreal', country: 'Canada', status: 'Moved Out', imageUrl: '/images/toronto.png' },
        { city: 'Paris', country: 'France', status: 'Active', imageUrl: '/images/toronto.png' },
        { city: 'Berlin', country: 'Germany', status: 'Upcoming', imageUrl: '/images/toronto.png' },
      ],
      showings: [
        { 
          city: 'San Francisco', 
          country: 'USA', 
          day: 'Mon', 
          month: 'Jan', 
          date: 15, 
          time: '2:00 PM', 
          imageUrl: '/images/toronto.png' 
        },
        { 
          city: 'Chicago', 
          country: 'USA', 
          day: 'Wed', 
          month: 'Feb', 
          date: 8, 
          time: '3:30 PM', 
          imageUrl: '/images/toronto.png' 
        },
        { 
          city: 'Miami', 
          country: 'USA', 
          day: 'Fri', 
          month: 'Mar', 
          date: 22, 
          time: '1:00 PM', 
          imageUrl: '/images/toronto.png' 
        },
      ],
      events: [
        { 
          city: 'Sydney', 
          country: 'Australia', 
          day: 'Tue', 
          month: 'Apr', 
          date: 5, 
          time: '4:00 PM', 
          imageUrl: '/images/toronto.png' 
        },
        { 
          city: 'Berlin', 
          country: 'Germany', 
          day: 'Thu', 
          month: 'May', 
          date: 17, 
          time: '1:30 PM', 
          imageUrl: '/images/toronto.png' 
        },
      ],
    };

    const suggestedDestinations = [
        { city: 'New York', country: 'USA', propertiesCount: 3654, imageUrl: '/images/toronto.png' },
        { city: 'Tirana', country: 'Albania', propertiesCount: 2254, imageUrl: '/images/toronto.png' },
        { city: 'Montreal', country: 'Canada', propertiesCount: 5154, imageUrl:'/images/toronto.png' },
        { city: 'Dubai', country: 'UAE', propertiesCount: 6550, imageUrl:'/images/toronto.png' },
        { city: 'Panama City', country: 'Panama', propertiesCount: 2252, imageUrl: '/images/toronto.png'},
    ];
    
    const getFilteredDestinations = () => {
        if (!localSearchTerm) return suggestedDestinations;
        
        const term = localSearchTerm.toLowerCase();
        
        const matches = suggestedDestinations.filter(
            destination => 
                destination.city.toLowerCase().includes(term) || 
                destination.country.toLowerCase().includes(term)
        );
        
        return matches.sort((a, b) => {
            const cityA = a.city.toLowerCase();
            const cityB = b.city.toLowerCase();
            const countryA = a.country.toLowerCase();
            const countryB = b.country.toLowerCase();
            
            if (cityA.startsWith(term) && !cityB.startsWith(term)) return -1;
            if (!cityA.startsWith(term) && cityB.startsWith(term)) return 1;
            
            if (cityA.includes(term) && !cityB.includes(term)) return -1;
            if (!cityA.includes(term) && cityB.includes(term)) return 1;
            
            if (countryA.startsWith(term) && !countryB.startsWith(term)) return -1;
            if (!countryA.startsWith(term) && countryB.startsWith(term)) return 1;
            
            if (countryA.includes(term) && !countryB.includes(term)) return -1;
            if (!countryA.includes(term) && countryB.includes(term)) return 1;
            
            return cityA.localeCompare(cityB);
        });
    };
    
    const filteredDestinations = getFilteredDestinations();
    
    const handleCitySelect = (city: string, country: string) => {
        dispatch(setSelectedLocation({ city, country }));
        
        dispatch(setSearchTerm(localSearchTerm));
        
        dispatch(setActiveTab('newProperties'));

        dispatch(closeModal());

    };
    
    const handleSearchChange = (value: string) => {
        setLocalSearchTerm(value);
    };
    
    const handleSearch = () => {
        dispatch(setSearchTerm(localSearchTerm));
        dispatch(setActiveTab('newProperties'));
    };


       const renderCategorizedResults = () => {
        const term = localSearchTerm.toLowerCase();
        
        const filteredNewProperties = dummyData.newProperties.filter(
            item => item.city.toLowerCase().includes(term) || item.country.toLowerCase().includes(term)
        );
        
        const filteredMyStays = dummyData.myStays.filter(
            item => item.city.toLowerCase().includes(term) || item.country.toLowerCase().includes(term)
        );
        
        const filteredShowings = dummyData.showings.filter(
            item => item.city.toLowerCase().includes(term) || item.country.toLowerCase().includes(term)
        );
        
        const filteredEvents = dummyData.events.filter(
            item => item.city.toLowerCase().includes(term) || item.country.toLowerCase().includes(term)
        );
        
        const allCategoriesEmpty = 
            filteredNewProperties.length === 0 && 
            filteredMyStays.length === 0 && 
            filteredShowings.length === 0 && 
            filteredEvents.length === 0;
        
        if (allCategoriesEmpty) {
            return (
                <div className="text-center py-8 text-[#A7BBCE]">
                    No results found for "{localSearchTerm}"
                </div>
            );
        }
        
        return (
            <div className="mt-4">
                {filteredNewProperties.length > 0 && (
                    <div className="mb-4">
                        <Typography variant="subtitle2" className="text-[#63829E] mb-2 pl-2 font-medium">
                            New Properties
                        </Typography>
                        {filteredNewProperties.map((item, index) => (
                            <div 
                                key={`new-${index}`} 
                                className="flex items-center mb-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                onClick={() => handleCitySelect(item.city, item.country)}
                            >
                                <div className="relative w-[72px] h-[58px] mr-3">
                                    <Image
                                        src={item.imageUrl}
                                        alt={`${item.city}, ${item.country}`}
                                        fill
                                        className="object-cover rounded-lg border-[3px] border-[#F8F8F8]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-[#001D3D] text-[12px] font-bold leading-[100%]">
                                        {item.city}, {item.country}
                                    </div>
                                    <div className="text-[#A7BBCE] text-[12px] font-normal leading-[160%]">
                                        {item.propertiesCount} Properties
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                    
                        {filteredNewProperties.length > 0 && filteredMyStays.length > 0 && (
                    <Divider sx={{ my: 2 }} />
                )}
                
                {filteredMyStays.length > 0 && (
                    <div className="mb-4">
                        <Typography variant="subtitle2" className="text-[#63829E] mb-2 pl-2 font-medium">
                            My Stays
                        </Typography>
                        {filteredMyStays.map((item, index) => (
                            <div 
                                key={`stay-${index}`} 
                                className="flex items-center mb-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                onClick={() => handleCitySelect(item.city, item.country)}
                            >
                                <div className="relative w-[72px] h-[58px] mr-3">
                                    <Image
                                        src={item.imageUrl}
                                        alt={`${item.city}, ${item.country}`}
                                        fill
                                        className="object-cover rounded-lg border-[3px] border-[#F8F8F8]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-[#001D3D] text-[12px] font-bold leading-[100%]">
                                        {item.city}, {item.country}
                                    </div>
                                    <div className="text-[#63829E] text-[12px] font-normal leading-[160%]">
                                        Status: <span className="text-[#63829E]">{item.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                {(filteredNewProperties.length > 0 || filteredMyStays.length > 0) && filteredShowings.length > 0 && (
                    <Divider sx={{ my: 2 }} />
                )}
                
                {filteredShowings.length > 0 && (
                    <div className="mb-4">
                        <Typography variant="subtitle2" className="text-[#63829E] mb-2 pl-2 font-medium">
                            Showings
                        </Typography>
                        {filteredShowings.map((item, index) => (
                            <div 
                                key={`showing-${index}`} 
                                className="flex items-center mb-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                onClick={() => handleCitySelect(item.city, item.country)}
                            >
                                <div className="relative w-[72px] h-[58px] mr-3">
                                    <Image
                                        src={item.imageUrl}
                                        alt={`${item.city}, ${item.country}`}
                                        fill
                                        className="object-cover rounded-lg border-[3px] border-[#F8F8F8]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-[#001D3D] text-[12px] font-bold leading-[100%]">
                                        {item.city}, {item.country}
                                    </div>
                                    <div className="flex items-center text-[#63829E] text-[12px] font-normal leading-[160%]">
                                        <CalendarTodayIcon sx={{ fontSize: 14, marginRight: 0.5, color: '#63829E' }} />
                                        {item.day}, {item.month} {item.date}
                                        <Divider orientation="vertical" flexItem sx={{ mx: 1, backgroundColor: '#63829E', height: 14 }} />
                                        <AccessTimeIcon sx={{ fontSize: 14, marginRight: 0.5, color: '#63829E' }} />
                                        {item.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                    
                    {(filteredNewProperties.length > 0 || filteredMyStays.length > 0 || filteredShowings.length > 0) && filteredEvents.length > 0 && (
                        <Divider sx={{ my: 2 }} />
                    )}
                    
                    {filteredEvents.length > 0 && (
                        <div className="mb-4">
                            <Typography variant="subtitle2" className="text-[#63829E] mb-2 pl-2 font-medium">
                                Events
                            </Typography>
                            {filteredEvents.map((item, index) => (
                                <div 
                                    key={`event-${index}`} 
                                    className="flex items-center mb-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                    onClick={() => handleCitySelect(item.city, item.country)}
                                >
                                    <div className="relative w-[72px] h-[58px] mr-3">
                                        <Image
                                            src={item.imageUrl}
                                            alt={`${item.city}, ${item.country}`}
                                            fill
                                            className="object-cover rounded-lg border-[3px] border-[#F8F8F8]"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                    <div className="text-[#001D3D] text-[12px] font-bold leading-[100%]">
                                        {item.city}, {item.country}
                                    </div>
                                    <div className="flex items-center text-[#63829E] text-[12px] font-normal leading-[160%]">
                                        <CalendarTodayIcon sx={{ fontSize: 14, marginRight: 0.5, color: '#63829E' }} />
                                        {item.day}, {item.month} {item.date}
                                        <Divider orientation="vertical" flexItem sx={{ mx: 1, backgroundColor: '#63829E', height: 14 }} />
                                        <AccessTimeIcon sx={{ fontSize: 14, marginRight: 0.5, color: '#63829E' }} />
                                        {item.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };
    const renderSuggestedDestinations = () => {
        return (
            <>
                <h3 className="mt-4 text-[12px] font-medium text-[#A7BBCE] text-center">
                    {localSearchTerm 
                        ? `Showing ${filteredDestinations.length} ${filteredDestinations.length === 1 ? 'Result' : 'Results'}`
                        : 'Suggested Destinations'
                    }
                </h3>
                
                <div className="mt-2">
                    {filteredDestinations.map((destination, index) => (
                        <div 
                            key={`suggestion-${index}`}
                            className="flex items-center mb-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                            onClick={() => handleCitySelect(destination.city, destination.country)}
                        >
                            <div className="relative w-[72px] h-[58px] mr-3">
                                <Image
                                    src={destination.imageUrl}
                                    alt={`${destination.city}, ${destination.country}`}
                                    fill
                                    className="object-cover rounded-lg border-[3px] border-[#F8F8F8]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-[#001D3D] text-[12px] font-bold leading-[100%]">
                                    {destination.city}, {destination.country}
                                </div>
                                <div className="text-[#A7BBCE] text-[12px] font-normal leading-[160%]">
                                    {destination.propertiesCount} Properties
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {filteredDestinations.length === 0 && (
                        <div className="text-center py-4 text-[#A7BBCE]">
                            No cities found matching your search
                        </div>
                    )}
                </div>
            </>
        );
    };
    
        // Main component render
        return (
            <div className="bg-white rounded-[16px] p-4  ">
                
                <div className="mb-4">
                    <SearchCity 
                        value={localSearchTerm} 
                        onChange={handleSearchChange}
                        onSearch={handleSearch}
                        width="100%"
                        insideModal={true}
                    />
                </div>
                
                {/* Show either categorized results or suggested destinations based on whether there's a search term */}
                {hasSearched ? renderCategorizedResults() : renderSuggestedDestinations()}
            </div>
        );
    };
    
    export default SearchCityModal;
    