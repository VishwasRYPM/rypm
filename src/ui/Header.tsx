'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import Badge from '@mui/material/Badge';
import {BellIcon,Logo} from '@/ui/icons';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const notifications = useSelector((state: RootState) => state.tenant.notifications);

  return (
    <header className=" text-white p-4 pr-2 flex justify-between items-center  min-h-[105px]"
      style={{
      backgroundImage: 'url(/images/Header-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="flex items-center">
      <Logo width={34} height={40} className="text-white" />
      </div>
      <div className="flex items-center space-x-2">
        <IconButton color="inherit" aria-label="notifications" className="p-2">
          <Badge badgeContent={notifications} color="error">
          <BellIcon width={20} height={21} />
          </Badge>
        </IconButton>
        <IconButton color="inherit" aria-label="menu" className="p-2 ">
          <SearchIcon width={20} height={21} />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;