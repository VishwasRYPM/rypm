'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { setActiveTab } from '@/features/tenant/propertysearch/slices/searchSlice';
import {
  HeaderContainer,
  TabsContainer,
  TabItem,
  TabText,
  TabDivider
} from '../styles/components/searchResultsHeaderStyles';

const SearchResultsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) =>
    state.propertySearch ? state.propertySearch.activeTab : null
  );
 
  const resultsCount = useSelector((state: RootState) =>
    state.propertySearch ? state.propertySearch.resultsCount : 2740
  );

  const tabs = [
    { id: 'results', label: `${resultsCount} Results` },
    { id: 'newProperties', label: 'New Properties' },
    { id: 'showings', label: 'Showings' },
    { id: 'myStays', label: 'My Stays' },
  ];

  return (
    <HeaderContainer>
      <TabsContainer>
        <TabItem 
          isActive={activeTab === 'newProperties'} 
          onClick={() => dispatch(setActiveTab('newProperties'))}
        >
          <TabText isActive={activeTab === 'newProperties'}>
            {tabs[1].label}
          </TabText>
        </TabItem>

        <TabDivider orientation="vertical" flexItem />

        <TabItem 
          isActive={activeTab === 'showings'} 
          onClick={() => dispatch(setActiveTab('showings'))}
        >
          <TabText isActive={activeTab === 'showings'}>
            {tabs[2].label}
          </TabText>
        </TabItem>

        <TabDivider orientation="vertical" flexItem />

        <TabItem 
          isActive={activeTab === 'myStays'} 
          onClick={() => dispatch(setActiveTab('myStays'))}
        >
          <TabText isActive={activeTab === 'myStays'}>
            {tabs[3].label}
          </TabText>
        </TabItem>
      </TabsContainer>
    </HeaderContainer>
  );
};

export default SearchResultsHeader;
