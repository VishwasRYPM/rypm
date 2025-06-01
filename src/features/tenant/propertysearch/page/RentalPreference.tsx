"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import { BackIcon, RentalPreferencePeopleIcon } from "@/ui/icons";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const RentalPreference: React.FC = () => {
  const router = useRouter();

  // State
  const [price, setPrice] = React.useState<number[]>([1500, 8000]);
  const [bedroom, setBedroom] = React.useState<string | null>(null);
  const [bathroom, setBathroom] = React.useState<string | null>(null);
  const [parking, setParking] = React.useState<string | null>(null);
  const [moveInDate, setMoveInDate] = React.useState<string>("");
  const [propertyType, setPropertyType] = React.useState<string>("");

  const handleBackClick = () => {
    router.push(`/tenant/PropertySearch`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filters = {
      price,
      bedroom,
      bathroom,
      parking,
      moveInDate,
      propertyType,
    };
  };

  const handleClear = () => {
    setPrice([1500, 8000]);
    setBedroom(null);
    setBathroom(null);
    setParking(null);
    setMoveInDate("");
    setPropertyType("");
  };

  const renderOptions = (
    options: string[],
    selected: string | null,
    onSelect: (val: string) => void
  ) =>
    options.map((opt) => (
      <span
        key={opt}
        onClick={() => onSelect(opt)}
        className={`cursor-pointer px-2 py-1 rounded-md text-xs
          ${selected === opt ? "bg-[#EAF7FF] border border-[#E4F4FF] text-[#001D3D]" : "text-[#001D3D]"}
        `}
      >
        {opt}
      </span>
    ));

  return (
    <div className="h-screen flex flex-col relative">
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="flex-1 px-4 py-2">
          {/* Header - Fixed height */}
          <header className="flex flex-row items-center gap-20 mb-3 h-12">
            <div onClick={handleBackClick}>
              <BackIcon />
            </div>
            <h1 className="text-[#001D3D] text-lg font-bold capitalize">
              Rental Preference
            </h1>
          </header>

          {/* Scrollable Content Area - Add bottom padding to prevent overlap */}
          <div className="flex-1 space-y-3 overflow-y-auto pb-40">
            {/* Price Range */}
            <div className="space-y-1">
              <div className="flex flex-row items-center justify-between">
                <Heading text="Price" className="text-sm" />
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[#001D3D] text-xs p-1.5 border border-[#F1FCFF] rounded-md">{`$${price[0]}`}</span>
                  <span className="text-[#001D3D] text-xs">to</span>
                  <span className="text-[#001D3D] text-xs p-1.5 border border-[#F1FCFF] rounded-md">{`$${price[1]}`}</span>
                </div>
              </div>
              <Box sx={{ px: 1 }}>
                <Slider
                  getAriaLabel={() => "Price Range"}
                  value={price}
                  onChange={(e, val) => setPrice(val as number[])}
                  valueLabelDisplay="auto"
                  min={1000}
                  max={10000}
                  size="small"
                />
              </Box>
            </div>

            {/* Bedrooms */}
            <div className="space-y-1">
              <Heading text="Bedrooms" className="text-sm" />
              <div className="border border-[#F1FCFF] rounded-md px-2 py-1.5">
                <div className="flex flex-wrap gap-1">
                  {renderOptions(["Studio+", "1+", "2+", "3+", "4+", "5+"], bedroom, setBedroom)}
                </div>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="space-y-1">
              <Heading text="Bathrooms" className="text-sm" />
              <div className="border border-[#F1FCFF] rounded-md px-2 py-1.5">
                <div className="flex flex-wrap gap-1">
                  {renderOptions(["Studio+", "1+", "2+", "3+", "4+", "5+"], bathroom, setBathroom)}
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="space-y-1">
              <Heading text="Parking" className="text-sm" />
              <div className="border border-[#F1FCFF] rounded-md px-2 py-1.5">
                <div className="flex flex-wrap gap-1">
                  {renderOptions(["Studio+", "1+", "2+", "3+", "4+", "5+"], parking, setParking)}
                </div>
              </div>
            </div>

            {/* Move in date */}
            <div className="flex flex-row justify-between items-center">
              <Heading text="Move-In date" className="text-sm" />
              <input
                type="date"
                className="py-1.5 px-2 rounded-md border border-[#F3F4F6] text-sm text-[#001D3D] w-[47.83vw]"
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
              />
            </div>

            {/* Property type */}
            <div className="flex flex-row justify-between items-center">
              <Heading text="Property type" className="text-sm" />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="py-1.5 px-2 rounded-md border border-[#F3F4F6] text-sm text-[#001D3D] capitalize w-[47.83vw]"
              >
                <option value="">Select</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="house">House</option>
              </select>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Section - Info Banner + Buttons */}
        <div className="absolute bottom-5 left-0 right-0 px-4 space-y-3 bg-white">
          {/* Info Banner */}
          <div className="py-2 px-3 rounded-xl bg-[#F1FCFF] flex flex-row items-center gap-3">
            <div className="flex-shrink-0">
              <RentalPreferencePeopleIcon />
            </div>
            <div className="flex flex-col gap-1 text-[#001D3D]">
              <p className="font-bold text-xs">Stay on top of your rentals!</p>
              <p className="text-xs">Click here to track applications, move-ins, and more!</p>
            </div>
          </div>

          {/* Footer: Buttons */}
          <div className="flex flex-row justify-between gap-3">
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 py-2.5 rounded-xl text-sm font-bold capitalize text-[#001D3D] border border-[#001D3D]"
            >
              Clear All
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl text-sm font-bold capitalize text-[#FFF] bg-[#001D3D]"
            >
              Apply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RentalPreference;
