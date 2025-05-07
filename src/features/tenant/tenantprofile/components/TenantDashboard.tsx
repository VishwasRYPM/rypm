'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { setActiveMainTab } from '@/features/tenant/tenantprofile/slices/tenantSlice';
import ProfileSection from './ProfileSection';
import NavigationRow from './NavigationRow';
import HomeContent from './HomeContent';
import AccountDetailsSubDashboard from './AccountDetailsSubDashboard';

const TenantDashboard = () => {
  const dispatch = useDispatch();
  const activeMainTab = useSelector((state: RootState) => state.tenant.activeMainTab);

  const renderContent = () => {
    switch (activeMainTab) {
      case 'Home':
        return <HomeContent />;
      case 'Account Details':
        return <AccountDetailsSubDashboard />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="flex flex-col">
      <ProfileSection />
      <NavigationRow />
      <div className="flex-grow p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default TenantDashboard;