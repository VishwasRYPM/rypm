"use client";
import React from "react";

interface AddressProps {
  fullAddress?: string;
}

const SplitAddress = ({ fullAddress='' }: AddressProps) => {
  // Split the address at the comma after the street address
  const parts = fullAddress.split(/,(.+)/);

  if (parts.length >= 2) {
    const streetAddress = parts[0];
    const restOfAddress = parts[1].trim();

    return (
      <div className="text-[#1e3a59] text-[18px] font-bold leading-[1.4] tracking-tight capitalize whitespace-pre-line">
        {`${streetAddress}\n${restOfAddress}`}
      </div>
    );
  }

  // Fallback if the address doesn't have the expected format
  return (
    <div className="text-[#1e3a59] text-[18px] font-bold leading-[1.4] tracking-tight capitalize">
      {fullAddress}
    </div>
  );
};

export default SplitAddress;
 