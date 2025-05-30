'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PhotosAndVideos from '@/features/tenant/propertysearch/page/PhotosAndVideos';

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = params.id as string;

  return <PhotosAndVideos id={propertyId} />;
}