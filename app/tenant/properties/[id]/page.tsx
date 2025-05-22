'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PropertyDetails from '@/features/tenant/propertysearch/page/PropertyDetails';

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = params.id as string;

  return <PropertyDetails id={propertyId} />;
}