interface DashboardCardProps {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

const DashboardCard = ({ title }: DashboardCardProps) => {
  return (
    <button className="group bg-white rounded-lg p-4 flex items-center justify-center h-24 transition-colors duration-300 w-full hover:bg-[#001D3D]">
      <span className="text-sm font-medium text-center text-[#1a2c42] group-hover:text-white">
        {title}
      </span>
    </button>
  );
};

export default DashboardCard;