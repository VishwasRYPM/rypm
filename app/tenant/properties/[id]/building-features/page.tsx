'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PropertyBuildingFeatures from '@/features/tenant/propertysearch/page/PropertyBuildingFeatures';

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = params.id as string;

  return <PropertyBuildingFeatures id={propertyId} />;
}