import { useState, useEffect } from 'react';

export interface MapProperty {
  id: string;
  lat: number;
  lng: number;
  price: string;
  bedCount: number;
  bathCount: number;
  propertyType: string;
  city: string;
  country: string;
  address: string;
  images: string[];
}

export interface PropertyCluster {
  id: string;
  lat: number;
  lng: number;
  count: number;
  properties: MapProperty[];
}

const dummyMapProperties: MapProperty[] = [
  {
    id: '1',
    lat: 43.6532,
    lng: -79.3832,
    price: '$2,500',
    bedCount: 2,
    bathCount: 1,
    propertyType: 'Apartment',
    city: 'Toronto',
    country: 'Canada',
    address: '123 King St W, Toronto, ON',
    images: ['/images/Panama.png']
  },
  {
    id: '2',
    lat: 43.6426,
    lng: -79.3871,
    price: '$3,200',
    bedCount: 3,
    bathCount: 2,
    propertyType: 'Condo',
    city: 'Toronto',
    country: 'Canada',
    address: '456 Queen St W, Toronto, ON',
    images: ['/images/toronto.png']
  },
  {
    id: '3',
    lat: 43.6629,
    lng: -79.3957,
    price: '$1,800',
    bedCount: 1,
    bathCount: 1,
    propertyType: 'Studio',
    city: 'Toronto',
    country: 'Canada',
    address: '789 Dundas St W, Toronto, ON',
    images: ['/images/Panama.png']
  },
  {
    id: '4',
    lat: 43.6481,
    lng: -79.3708,
    price: '$4,500',
    bedCount: 4,
    bathCount: 3,
    propertyType: 'House',
    city: 'Toronto',
    country: 'Canada',
    address: '321 Bay St, Toronto, ON',
    images: ['/images/toronto.png']
  },
  {
    id: '5',
    lat: 43.6369,
    lng: -79.4107,
    price: '$2,100',
    bedCount: 2,
    bathCount: 2,
    propertyType: 'Apartment',
    city: 'Toronto',
    country: 'Canada',
    address: '654 College St, Toronto, ON',
    images: ['/images/Panama.png']
  },
{
  id: '6',
  lat: 41.8781,
  lng: -87.6298,
  price: '$1,600',
  bedCount: 2,
  bathCount: 1,
  propertyType: 'Apartment',
  city: 'Chicago',
  country: 'USA',
  address: '300 Michigan Ave, Chicago, IL',
  images: ['/images/toronto.png']
},
{
  id: '7',
  lat: 29.7604,
  lng: -95.3698,
  price: '$2,200',
  bedCount: 3,
  bathCount: 2,
  propertyType: 'Townhouse',
  city: 'Houston',
  country: 'USA',
  address: '400 Westheimer Rd, Houston, TX',
  images: ['/images/Panama.png']
},
  {
  id: '8',
  lat: 51.5074,
  lng: -0.1278,
  price: '£2,300',
  bedCount: 2,
  bathCount: 1,
  propertyType: 'Flat',
  city: 'London',
  country: 'UK',
  address: '10 Downing St, London',
  images: ['/images/toronto.png']
},
{
  id: '9',
  lat: 53.4808,
  lng: -2.2426,
  price: '£1,600',
  bedCount: 1,
  bathCount: 1,
  propertyType: 'Apartment',
  city: 'Manchester',
  country: 'UK',
  address: '200 Deansgate, Manchester',
  images: ['/images/Panama.png']
},
{
  id: '10',
  lat: 55.9533,
  lng: -3.1883,
  price: '£1,800',
  bedCount: 2,
  bathCount: 2,
  propertyType: 'Flat',
  city: 'Edinburgh',
  country: 'UK',
  address: '45 Princes St, Edinburgh',
  images: ['/images/toronto.png']
},
{
  id: '11',
  lat: 52.4862,
  lng: -1.8904,
  price: '£1,400',
  bedCount: 1,
  bathCount: 1,
  propertyType: 'Studio',
  city: 'Birmingham',
  country: 'UK',
  address: '88 Broad St, Birmingham',
  images: ['/images/Panama.png']
},
{
  id: '12',
  lat: 51.4545,
  lng: -2.5879,
  price: '£1,750',
  bedCount: 2,
  bathCount: 1,
  propertyType: 'Terraced',
  city: 'Bristol',
  country: 'UK',
  address: '120 Park St, Bristol',
  images: ['/images/toronto.png']
},

 {
  id: '13',
  lat: -33.8688,
  lng: 151.2093,
  price: '$2,200',
  bedCount: 2,
  bathCount: 1,
  propertyType: 'Apartment',
  city: 'Sydney',
  country: 'Australia',
  address: '100 George St, Sydney',
  images: ['/images/Panama.png']
},
{
  id: '14',
  lat: -37.8136,
  lng: 144.9631,
  price: '$1,950',
  bedCount: 1,
  bathCount: 1,
  propertyType: 'Flat',
  city: 'Melbourne',
  country: 'Australia',
  address: '250 Collins St, Melbourne',
  images: ['/images/toronto.png']
},
{
  id: '15',
  lat: -34.9285,
  lng: 138.6007,
  price: '$1,750',
  bedCount: 2,
  bathCount: 1,
  propertyType: 'Apartment',
  city: 'Adelaide',
  country: 'Australia',
  address: '15 Rundle Mall, Adelaide',
  images: ['/images/Panama.png']
},
{
  id: '16',
  lat: 51.509865,
  lng: -0.118092,
  price: '£2,000',
  bedCount: 2,
  bathCount: 2,
  propertyType: 'Flat',
  city: 'London',
  country: 'UK',
  address: '221B Baker St, London',
  images: ['/images/toronto.png']
},
{
  id: '17',
  lat: -33.8688,
  lng: 151.2093,
  price: '$2,400',
  bedCount: 3,
  bathCount: 2,
  propertyType: 'Townhouse',
  city: 'Sydney',
  country: 'Australia',
  address: '300 Pitt St, Sydney',
  images: ['/images/Panama.png']
},
{
  id: '18',
  lat: 40.730610,
  lng: -73.935242,
  price: '$2,000',
  bedCount: 2,
  bathCount: 1,
  propertyType: 'Apartment',
  city: 'Brooklyn',
  country: 'USA',
  address: '456 Flatbush Ave, Brooklyn, NY',
  images: ['/images/toronto.png']
},
{
  id: '19',
  lat: 53.349805,
  lng: -6.26031,
  price: '£1,850',
  bedCount: 2,
  bathCount: 1,
  propertyType: 'Flat',
  city: 'Dublin',
  country: 'UK',
  address: '150 Dame St, Dublin',
  images: ['/images/Panama.png']
},
 {
    id: '20',
    lat: 43.6510,
    lng: -79.3470,
    price: '$2,800',
    bedCount: 2,
    bathCount: 2,
    propertyType: 'Condo',
    city: 'Toronto',
    country: 'Canada',
    address: '100 Front St E, Toronto, ON',
    images: ['/images/toronto.png']
  },
  {
    id: '21',
    lat: 43.6440,
    lng: -79.3950,
    price: '$1,950',
    bedCount: 1,
    bathCount: 1,
    propertyType: 'Studio',
    city: 'Toronto',
    country: 'Canada',
    address: '200 Spadina Ave, Toronto, ON',
    images: ['/images/Panama.png']
  },
  {
    id: '22',
    lat: 43.6580,
    lng: -79.3600,
    price: '$3,500',
    bedCount: 3,
    bathCount: 2,
    propertyType: 'Apartment',
    city: 'Toronto',
    country: 'Canada',
    address: '300 Yonge St, Toronto, ON',
    images: ['/images/toronto.png']
  },
  {
    id: '23',
    lat: 43.6350,
    lng: -79.4200,
    price: '$2,300',
    bedCount: 2,
    bathCount: 1,
    propertyType: 'Condo',
    city: 'Toronto',
    country: 'Canada',
    address: '400 Ossington Ave, Toronto, ON',
    images: ['/images/Panama.png']
  },
  {
    id: '24',
    lat: 43.6600,
    lng: -79.3400,
    price: '$4,200',
    bedCount: 4,
    bathCount: 3,
    propertyType: 'Townhouse',
    city: 'Toronto',
    country: 'Canada',
    address: '500 Church St, Toronto, ON',
    images: ['/images/toronto.png']
  }
];

export function useMapProperties() {
  const [properties, setProperties] = useState<MapProperty[]>([]);
  const [clusters, setClusters] = useState<PropertyCluster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setProperties(dummyMapProperties);
        setError(null);
      } catch (err) {
        setError('Failed to load properties');
        console.error('Error loading properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const createClusters = (props: MapProperty[], zoomLevel: number): PropertyCluster[] => {
    if (zoomLevel >= 12) {
      return []; 
    }

    const clusters: PropertyCluster[] = [];
    const clustered: Set<string> = new Set();
    const threshold = 0.01; 

    props.forEach(property => {
      if (clustered.has(property.id)) return;

      const nearbyProperties = props.filter(p => {
        if (clustered.has(p.id) || p.id === property.id) return false;
        
        const distance = Math.sqrt(
          Math.pow(p.lat - property.lat, 2) + Math.pow(p.lng - property.lng, 2)
        );
        
        return distance < threshold;
      });

      if (nearbyProperties.length > 0) {
        const allProperties = [property, ...nearbyProperties];
        const centerLat = allProperties.reduce((sum, p) => sum + p.lat, 0) / allProperties.length;
        const centerLng = allProperties.reduce((sum, p) => sum + p.lng, 0) / allProperties.length;

        clusters.push({
          id: `cluster-${property.id}`,
          lat: centerLat,
          lng: centerLng,
          count: allProperties.length,
          properties: allProperties
        });

        allProperties.forEach(p => clustered.add(p.id));
      }
    });

    return clusters;
  };

  const getClusters = (zoomLevel: number): PropertyCluster[] => {
    return createClusters(properties, zoomLevel);
  };

  const getIndividualProperties = (zoomLevel: number): MapProperty[] => {
    if (zoomLevel >= 12) {
      return properties; 
    }

    const clusters = getClusters(zoomLevel);
    const clusteredPropertyIds = new Set(
      clusters.flatMap(cluster => cluster.properties.map(p => p.id))
    );

    return properties.filter(p => !clusteredPropertyIds.has(p.id));
  };

  const refreshProperties = async () => {
    setLoading(true);
    setLoading(false);
  };

  return {
    properties,
    clusters,
    loading,
    error,
    refreshProperties,
    getClusters,
    getIndividualProperties
  };
}
