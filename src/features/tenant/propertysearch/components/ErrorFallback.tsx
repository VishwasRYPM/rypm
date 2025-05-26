import React from 'react';
import { Box, Button, Typography } from '@mui/material';
//import { ErrorIcon } from '@/ui/icons'; // Assuming you have this icon

interface ErrorFallbackProps {
  error: Error | unknown;
  resetErrorBoundary: () => void;
  message?: string;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error, 
  resetErrorBoundary,
  message = "Something went wrong while loading properties."
}) => {
  return (
    <Box className="p-4 flex flex-col items-center justify-center h-full">
      {/* <ErrorIcon className="mb-2 text-red-500" /> */}
      <Typography variant="body1" className="text-center mb-2">
        {message}
      </Typography>
      <Typography variant="caption" className="text-center text-gray-500 mb-4">
        {error instanceof Error ? error.message : 'Unknown error occurred'}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={resetErrorBoundary}
      >
        Try Again
      </Button>
    </Box>
  );
};

export default ErrorFallback;