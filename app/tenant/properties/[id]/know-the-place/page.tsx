'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PropertyKnowThePlace from '@/features/tenant/propertysearch/page/PropertyKnowThePlace';

export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = params.id as string;

  return <PropertyKnowThePlace id={propertyId} />;
}