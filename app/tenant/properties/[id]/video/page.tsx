'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import VideoOfProperty from '@/features/tenant/propertysearch/page/VideoOfProperty';

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = params.id as string;

  return <VideoOfProperty id={propertyId} />;
}