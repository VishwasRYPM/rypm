import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { Dialog } from '@mui/material';
import SearchCityModal from '@/features/tenant/propertysearch/components/SearchCityModal';
import FilterSettingsModal from '@/features/tenant/propertysearch/components/FilterSettingsModal';
import { closeModal } from '@/features/tenant/propertysearch/slices/modalSlice';
import { getModalPaperStyles, modalContainerSx } from './styles/ModalManager.styles';

const ModalManager: React.FC = () => {
  const { isOpen, modalType, modalProps } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  
  const renderModalContent = () => {
    switch (modalType) {
      case 'searchCity':
        return <SearchCityModal {...modalProps} />;
      case 'filterSettings':
        return <FilterSettingsModal {...modalProps} />;
      // Add more modal types here as needed
      default:
        return null;
    }
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={() => dispatch(closeModal())} 
      maxWidth="sm" 
      fullWidth
      slotProps={{ 
        paper: { 
          sx: getModalPaperStyles(modalType || '') 
        } 
      }}
      sx={modalContainerSx}
    >
      {renderModalContent()}
    </Dialog>
  );
};

export default ModalManager;
