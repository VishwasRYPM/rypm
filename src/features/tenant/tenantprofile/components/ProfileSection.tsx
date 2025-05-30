import Image from 'next/image';
import VerifiedIcon from '@mui/icons-material/Verified';
import Chip from '@mui/material/Chip';
import {OnlineIcon, FiveRatingIcon,EditIcon} from '@/ui/icons';

const ProfileSection = () => {
  return (
    <div className="bg-[#EDF2FA] rounded-3xl m-2 p-4 shadow-sm">
      <div className="flex items-center">
        <div className="mr-4 relative">
          <Image
            src="/images/testimonial-client-01 1.png"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full border-3 border-white"
          />
          <div className="absolute -bottom-3 left-[42%] transform -translate-x-1/2">
            <EditIcon width={24} height={24} />
          </div>
          <div className="absolute -right-1.5 top-[59%]">
    <OnlineIcon />
  </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center">
            <h2 className="text-lg  text-[#001D3D] font-bold leading-[100%] capitalize">
              Mae
            </h2>
            <VerifiedIcon
              className="ml-1 text-[#3A9A76]"
              sx={{ width: "18px", height: "18px" }}
            />
          </div>
          <p className="text-[#5285B7] text-xs font-normal leading-[160%] capitalize">
            SwipeName
          </p>
          <div className="items-center mt-1">
            <span className="mr-1 text-[#001D3D] text-sm font-bold leading-[160%] capitalize">
              4/5
            </span>
            <FiveRatingIcon />
          </div>
        </div>
        <div className="flex flex-col space-y-2 ">
          <Chip
            label={
              <span className="flex items-center text-[#001D3D] text-xs font-bold leading-[120%] capitalize">
                Testimonials{" "}
                <span className="ml-1 bg-[#1a2c42] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  7
                </span>
              </span>
            }
            size="small"
            className="font-medium"
            sx={{
              backgroundColor: "white",
              "& .MuiChip-label": {
                paddingRight: 0,
              },
            }}
          />
          <Chip
            label={
              <span className="flex items-center text-[#001D3D] text-xs font-bold leading-[120%] capitalize">
                Showings{" "}
                <span className="ml-1 bg-[#1a2c42] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
              </span>
            }
            size="small"
            className="font-medium"
            sx={{ backgroundColor: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;