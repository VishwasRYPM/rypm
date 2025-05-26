import { useState, useEffect, useRef, useCallback } from 'react';

interface UseVoiceSearchProps {
  onResult: (transcript: string) => void;
  onError?: (error: string) => void;
}

export const useVoiceSearch = ({ onResult, onError }: UseVoiceSearchProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const debounceRef = useRef<number | null>(null);

  // Check browser support
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsSupported(true);
      recognitionRef.current = new SpeechRecognition();
      
      // Configure recognition
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.maxAlternatives = 1;
    }
  }, []);

  // Setup recognition event handlers
  useEffect(() => {
    if (!recognitionRef.current) return;

    const recognition = recognitionRef.current;

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
      
      // Set timeout for recognition (8 seconds)
      timeoutRef.current = window.setTimeout(() => {
        stopListening();
        setError('No speech detected. Please try again.');
      }, 8000);
    };

    recognition.onresult = (event) => {
      let interimText = '';
      let finalText = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        const confidence = event.results[i][0].confidence || 1;

        if (event.results[i].isFinal) {
          finalText += transcript;
          setTranscript(finalText.trim());
          setInterimTranscript('');

          // Clear debounce if exists
          if (debounceRef.current) {
            window.clearTimeout(debounceRef.current);
          }
          
          // Immediately call onResult for final transcript
          if (finalText.trim()) {
            if (confidence > 0.5) {
              onResult(finalText.trim());
              // Stop listening after getting result
              setTimeout(() => {
                stopListening();
              }, 100);
            } else {
              setError('Please speak more clearly and try again.');
            }
          }
        } else {
          interimText += transcript;
          setInterimTranscript(interimText);
          
          // Also update the input field with interim results
          if (interimText.trim()) {
            onResult(interimText.trim());
          }
        }
      }
    };

    recognition.onerror = (event) => {
      let errorMessage = '';
      
      switch (event.error) {
        case 'not-allowed':
          errorMessage = 'Microphone access denied. Please allow access and try again.';
          setPermissionDenied(true);
          break;
        case 'no-speech':
          errorMessage = 'No speech detected. Please try again.';
          break;
        case 'audio-capture':
          errorMessage = 'No microphone found. Please check your microphone.';
          break;
        case 'network':
          errorMessage = 'Network error. Please check your connection.';
          break;
        default:
          errorMessage = 'Voice search error. Please try again.';
      }

      setError(errorMessage);
      setIsListening(false);
      
      if (onError) {
        onError(errorMessage);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [onResult, onError]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || isListening || !isSupported) return;

    setError(null);
    setTranscript('');
    setInterimTranscript('');
    setPermissionDenied(false);

    try {
      recognitionRef.current.start();
    } catch (error) {
      setError('Failed to start voice search. Please try again.');
    }
  }, [isListening, isSupported]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  }, [isListening]);

  return {
    isListening,
    isSupported,
    transcript,
    interimTranscript,
    error,
    permissionDenied,
    startListening,
    stopListening,
  };
};
