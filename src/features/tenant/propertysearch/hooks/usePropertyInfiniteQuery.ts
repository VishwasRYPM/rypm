import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef, useCallback, useEffect } from 'react';
import { PropertyData, mockProperties } from './usePropertyData';

interface FetchPropertiesResponse {
  properties: PropertyData[];
  nextPage: number | null;
  totalPages: number;
}

// Modified to use mock data instead of making API calls
const fetchProperties = async (page: number, limit: number): Promise<FetchPropertiesResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProperties = mockProperties.slice(startIndex, endIndex);
  
  // Calculate if there's a next page
  const hasNextPage = endIndex < mockProperties.length;
  
  return {
    properties: paginatedProperties,
    nextPage: hasNextPage ? page + 1 : null,
    totalPages: Math.ceil(mockProperties.length / limit)
  };
};

export const usePropertyInfiniteQuery = (initialLimit: number = 10) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  
  // Use React Query's useInfiniteQuery for data fetching with caching
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
    refetch,
    isPending, // Use isPending instead of checking status === 'loading'
  } = useInfiniteQuery({
    queryKey: ['properties'],
    queryFn: ({ pageParam }) => fetchProperties(pageParam as number, initialLimit),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 300000,
    gcTime: 600000,
  });
  
  // Flatten the pages data into a single array of properties
  const properties = data?.pages.flatMap(page => page.properties) || [];
  
  // Setup IntersectionObserver to detect when last element is visible
  const lastElementCallback = useCallback((node: HTMLDivElement | null) => {
    if (isFetchingNextPage) return;
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    }, { threshold: 0.1 });
    
    if (node) {
      lastElementRef.current = node;
      observerRef.current.observe(node);
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  
  // Clean up observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  return {
    properties,
    isLoading: isPending, // Use isPending instead of status === 'loading'
    isFetchingNextPage,
    error,
    hasNextPage,
    lastElementRef: lastElementCallback,
    refetch
  };
};
