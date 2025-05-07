import { useDispatch } from 'react-redux';
import { setActiveForm } from '@/features/tenant/tenantprofile/slices/tenantSlice';

const AccountDetailsSubDashboard = () => {
  const dispatch = useDispatch();

  const subDashboardItems = [
    { title: 'Profile', formKey: 'ProfileForm' },
    { title: 'Payment', formKey: 'PaymentForm' },
  ];

  const handleSubDashboardClick = (formKey: string) => {
    dispatch(setActiveForm(formKey));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">Account Details</h2>
      <div className="grid grid-cols-2 gap-4">
        {subDashboardItems.map((item) => (
          <button
            key={item.title}
            className="bg-gray-200 rounded-lg p-4 hover:bg-gray-300 transition-colors"
            onClick={() => handleSubDashboardClick(item.formKey)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccountDetailsSubDashboard;