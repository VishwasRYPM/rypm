import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { CardContainer, MediaContainer } from '../styles/components/propertyCardStyles';

const PropertyCardSkeleton: React.FC = () => {
  return (
    <CardContainer>
      <MediaContainer isDetailView={false} elevation={1}>
        {/* Media skeleton */}
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          animation="wave"
          sx={{ bgcolor: 'rgba(0, 0, 0, 0.1)' }}
        />
        
        {/* Info overlay skeleton */}
        <Box className="absolute bottom-0 left-0 right-0 flex flex-col">
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }}>
            <Skeleton variant="text" width={80} height={24} sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
            <Skeleton variant="text" width={60} height={24} sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
          </Box>
          
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }}>
            <Skeleton variant="text" width={120} height={20} sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Skeleton variant="text" width={30} height={20} sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
              <Skeleton variant="text" width={30} height={20} sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)' }} />
            </Box>
          </Box>
        </Box>
      </MediaContainer>
    </CardContainer>
  );
};

export default PropertyCardSkeleton;