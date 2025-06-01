import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('place_id');
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || "AIzaSyCHl2q8AVSHkjv9RfHbzUKxyK4UP8mAv_4";

  if (!placeId) {
    return NextResponse.json({ error: 'Place ID is required' }, { status: 400 });
  }

  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    const fields = [
      'place_id',
      'name',
      'formatted_address',
      'geometry',
      'rating',
      'user_ratings_total',
      'price_level',
      'opening_hours',
      'website',
      'formatted_phone_number',
      'photos',
      'reviews',
      'types',
      'business_status',
      'vicinity',
      'editorial_summary'
    ].join(',');

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: data.error_message || 'Failed to fetch place details' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error fetching place details:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}