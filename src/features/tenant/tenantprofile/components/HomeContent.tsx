import { useDispatch } from 'react-redux';
import { setActiveMainTab } from '@/features/tenant/tenantprofile/slices/tenantSlice';
import DashboardCard from '@/ui/DashboardCard';

const HomeContent = () => {
  const dispatch = useDispatch();

  const dashboardItems = [
    { title: 'My Investments' },
    { title: 'My Stays' },
    { title: 'List A Property' },
    { title: 'Account Details', isActive: true },
    { title: 'Services' },
    { title: 'Benefits' },
    { title: 'Calculator' },
    { title: 'Fees & Payments' },
    { title: 'Referrals & Credits' },
    { title: 'Get Pre-Qualified' },
  ];

  const handleCardClick = (title: string) => {
    if (title === 'Account Details') {
      dispatch(setActiveMainTab(title));
    }
  };

  return (
     <div className="p-2 bg-[#EDF2FA] m-2 rounded-4xl">
     <h1 className="text-lg font-medium text-center py-2 rounded-lg shadow-sm">Home</h1>
     <div className="grid grid-cols-2 gap-1">
        {dashboardItems.map((item) => (
          <div key={item.title} onClick={() => handleCardClick(item.title)}>
            <DashboardCard title={item.title} isActive={item.isActive} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;