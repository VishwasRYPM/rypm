import DashboardLayout from '@/layouts/DashboardLayout';
import TenantDashboard from '@/features/tenant/tenantprofile/components/TenantDashboard';

export default function Home() {
  return (
    <DashboardLayout>
      <TenantDashboard />
    </DashboardLayout>
  );
}