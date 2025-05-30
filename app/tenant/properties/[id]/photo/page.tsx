  'use client';
  import React from 'react';
  import { useParams } from 'next/navigation';
  import PhotoOfProperty from '@/features/tenant/propertysearch/page/PhotoOfProperty';

  export default function PropertyDetailsPage() {
    const params = useParams();
    const propertyId = params.id as string;

    return <PhotoOfProperty id={propertyId} />;
  }