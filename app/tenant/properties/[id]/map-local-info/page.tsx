'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PropertyMapLocalInfo from '@/features/tenant/propertysearch/page/PropertyMapLocalInfo';


export default function PropertyDetailsPage() {
  const params = useParams();
  const propertyId = params.id as string;

  return <PropertyMapLocalInfo id={propertyId} />;
}