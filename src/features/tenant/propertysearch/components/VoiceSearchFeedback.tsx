'use client';
import React from 'react';
import { Box, Typography, Fade, Snackbar, Alert } from '@mui/material';
import { keyframes } from '@mui/system';

// Pulsating animation
const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

// Listening indicator animation
const listeningDots = keyframes`
  0%, 20% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
`;

interface VoiceSearchFeedbackProps {
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  error: string | null;
  onErrorClose: () => void;
}

const VoiceSearchFeedback: React.FC<VoiceSearchFeedbackProps> = ({
  isListening,
  transcript,
  interimTranscript,
  error,
  onErrorClose,
}) => {
  const displayText = transcript || interimTranscript;

  return (
    <>
      {/* Live transcript overlay - only show when listening and has text */}
      <Fade in={isListening && !!displayText} timeout={300}>
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            mt: 1,
            p: 2,
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(32, 54, 77, 0.15)',
            border: '1px solid #E5E7EB',
            zIndex: 1000,
            maxWidth: '100%',
          }}
        >
          {/* Listening indicator */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#10B981',
                mr: 1,
                animation: `${pulseAnimation} 1.5s infinite`,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: '#10B981',
                fontWeight: 600,
                fontSize: '12px',
              }}
            >
              Listening
              <Box
                component="span"
                sx={{
                  '&::after': {
                    content: '"..."',
                    animation: `${listeningDots} 1.5s infinite`,
                  },
                }}
              />
            </Typography>
          </Box>

          {/* Transcript display */}
          <Typography
            variant="body2"
            sx={{
              color: transcript ? '#001D3D' : '#6B7280',
              fontStyle: transcript ? 'normal' : 'italic',
              minHeight: '20px',
              fontSize: '14px',
              lineHeight: 1.4,
              wordBreak: 'break-word',
            }}
          >
            {displayText || 'Start speaking...'}
          </Typography>
        </Box>
      </Fade>

      {/* Simple listening indicator when no text yet */}
      <Fade in={isListening && !displayText} timeout={300}>
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            mt: 1,
            p: 1.5,
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(32, 54, 77, 0.1)',
            border: '1px solid #E5E7EB',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              mr: 1,
              animation: `${pulseAnimation} 1s infinite`,
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: '#10B981',
              fontWeight: 500,
              fontSize: '12px',
            }}
          >
            Listening...
          </Typography>
        </Box>
      </Fade>

      {/* Error snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={4000}
        onClose={onErrorClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={onErrorClose}
          severity="error"
          sx={{
            backgroundColor: '#FEF2F2',
            color: '#DC2626',
            border: '1px solid #FECACA',
            borderRadius: '8px',
            fontSize: '14px',
            '& .MuiAlert-icon': {
              color: '#DC2626',
            },
          }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default VoiceSearchFeedback;
