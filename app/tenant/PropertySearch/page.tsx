import PropertySearchLayout from '@/layouts/PropertySearchLayout';
import PropertySearch from '@/features/tenant/propertysearch/page/PropertySearch';

export default function Home() {
  return (
    <PropertySearchLayout>
      <PropertySearch />
    </PropertySearchLayout>
  );
}