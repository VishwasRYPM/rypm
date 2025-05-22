'use client';
import React from 'react';
import NearByButton from './NearByButton';

export interface buttonData {
  id: string;
  text: string;
}

const mockButtonData: buttonData[] = [
  { id: '1', text: 'Grocery $ Stores' },
  { id: '2', text: 'Education & Schools' },
  { id: '3', text: 'Restaurant & Cafes' },
  { id: '4', text: 'Healthcare' },
  { id: '5', text: 'Fitness' },
  { id: '6', text: 'Shopping' },
  { id: '7', text: 'Businesses' },
  { id: '8', text: 'Travel' },
  { id: '9', text: 'Services' },
];

const WhatsNearByButtonContainer: React.FC = () => {
  return (
    <div  className=' mt-5 flex flex-row gap-1.5 w-[89.82vw] h-[5vh] py-0.5 overflow-auto scroll-smooth justify-between items-center border-[#F8FBF9] border-[1.5px] rounded-[8px] hide-scrollbar'>
      {mockButtonData.map((item) => (
        <NearByButton key={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default WhatsNearByButtonContainer;
