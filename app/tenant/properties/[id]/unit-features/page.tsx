'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PropertyUnitFeatures from '@/features/tenant/propertysearch/page/PropertyUnitFeatures';

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = params.id as string;

  return <PropertyUnitFeatures id={propertyId} />;
}