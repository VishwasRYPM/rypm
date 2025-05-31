import React from 'react';

export const getCategoryFallback = (category: string) => {
  const fallbacks = {
     restaurants: '/images/fallbacks/restaurant-placeholder.png',
    // grocery: '/images/fallbacks/grocery-placeholder.png',
    // healthcare: '/images/fallbacks/healthcare-placeholder.png',
    // education: '/images/fallbacks/education-placeholder.png',
    // fitness: '/images/fallbacks/fitness-placeholder.png',
    // shopping: '/images/fallbacks/shopping-placeholder.png',
    // business: '/images/fallbacks/business-placeholder.png',
    // travel: '/images/fallbacks/travel-placeholder.png',
    // services: '/images/fallbacks/services-placeholder.png',
     all: '/images/fallbacks/restaurant-placeholder.png',
    // property: '/images/fallbacks/property-placeholder.png',
    // place: '/images/fallbacks/place-placeholder.png'
  };
  return fallbacks[category as keyof typeof fallbacks] || fallbacks.all;
};

export const getGenericFallback = (type: 'property' | 'place' | 'user' | 'general' = 'general') => {
  const fallbacks = {
    property: '/images/fallbacks/property-placeholder.png',
    place: '/images/fallbacks/place-placeholder.png',
    user: '/images/fallbacks/user-placeholder.png',
    general: '/images/fallbacks/restaurant-placeholder.png'
  };
  return fallbacks[type];
};

export interface FallbackImageProps {
  src?: string;
  alt: string;
  className?: string;
  category?: string;
  fallbackType?: 'property' | 'place' | 'user' | 'general';
  onLoad?: () => void;
  onError?: () => void;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  className = '',
  category,
  fallbackType = 'general',
  onLoad,
  onError
}) => {
  const getFallbackSrc = () => {
    if (category) {
      return getCategoryFallback(category);
    }
    return getGenericFallback(fallbackType);
  };

  return (
    <img
      src={src || getFallbackSrc()}
      alt={alt}
      className={className}
      onLoad={onLoad}
      onError={(e) => {
        e.currentTarget.src = getFallbackSrc();
        onError?.();
      }}
    />
  );
};
