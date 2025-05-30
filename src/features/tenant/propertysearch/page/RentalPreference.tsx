// "use client";
// import React from "react";
// import { BackIcon, RentalPreferencePeopleIcon } from "@/ui/icons";
// import { useRouter } from "next/navigation";
// import Heading from "../components/Heading";
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';



// interface RentalPreferenceProps {
//   // Add any props you need here
// }


// const RentalPreference: React.FC<RentalPreferenceProps> = () => {
//   const router = useRouter();

//   const handleBackClick = () => {
//     router.push(`/tenant/PropertySearch`);
//   };
//   function valuetext(value: number) {
//   return `${value}`;
// }
//   const [value, setValue] = React.useState<number[]>([1500, 8000]);
  
  
//    const handleChange = (event: Event, newValue: number[]) => {
//     setValue(newValue);
//   };
  
  
//   return (
//     <div className="py-5.5 px-4">
//       <header className="flex flex-row items-center gap-20  mt-4 mb-9">
//         <div onClick={handleBackClick}>
//           <BackIcon />
//         </div>
//         <h1 className="text-[#001D3D] text-[18px] font-bold  capitalize">
//           Rental Preference
//         </h1>
//       </header>
//       {/* Price Range */}
//       <div className="mb-6">
       
//               <div className="flex flex-row items-center justify-between">
//             <Heading text="Price" className=""/>
//             <div className="flex justify-between items-center gap-3">
//             <span className="text-[#001D3D] text-[14px] capitalize p-2.5 border-[1.5px] border-[#F1FCFF] rounded-[8px]">{`$${value[0]}`}</span>
//                 <span className="text-[#001D3D] text-[14px]">to</span>
//                 <span className="text-[#001D3D] text-[14px] capitalize p-2.5 border-[1.5px] border-[#F1FCFF] rounded-[8px]">{`$${value[1]}`}</span>
//             </div>
//          </div>
              
        
//           <Box>
//               <Slider
//                   getAriaLabel={() => 'Price Range'}
//                   value={value}
//                   onChange={handleChange}
//                   valueLabelDisplay="auto"
//                   getAriaValueText={valuetext}
//                   min={1000}
//                   max={100000}
//                 />
//           </Box>
            
              
//       </div>

//       {/* Bedrooms */}
//       <div className="mb-6">
//               <Heading text="Bedrooms" />
//               <div className="border-[1.5px] border-[#F1FCFF] rounded-[8px]">
//                   <div className="flex flex-row gap-10 p-2.5 text-[14px] text-[#001D3D] capitalize">
//                       <span>Studio+</span>
//                       <span>1+</span>
//                       <span>2+</span>
//                       <span>3+</span>
//                       <span>4+</span>
//                       <span>5+</span>
//                   </div>
//               </div>
//       </div>

//       {/* Bathrooms */}
//       <div className="mb-6">
//               <Heading text="Bathrooms" />
//               <div className="border-[1.5px] border-[#F1FCFF] rounded-[8px]">
//                   <div className="flex flex-row gap-10 py-2.5 px-9 text-[14px] text-[#001D3D] capitalize">
//                       <span>All</span>
//                       <span>1+</span>
//                       <span>2+</span>
//                       <span>3+</span>
//                       <span>4+</span>
//                       <span>5+</span>
//                   </div>
//               </div>
//       </div>

//       {/* Parking */}
//       <div className="mb-6">
//               <Heading text="Parking" />
//               <div className="border-[1.5px] border-[#F1FCFF] rounded-[8px]">
//                   <div className="flex flex-row gap-10 py-2.5 px-9  text-[14px] text-[#001D3D] capitalize">
//                       <span>All</span>
//                       <span>1+</span>
//                       <span>2+</span>
//                       <span>3+</span>
//                       <span>4+</span>
//                       <span>5+</span>
//                   </div>
//               </div>
//       </div>

//       {/* Move in date */}
//       <div className="flex flex-row justify-between items-center mb-6">
//         <Heading text="Move-In date" />
//         <span className="flex flex-row items-center justify-end  py-2.5 pr-4 rounded-[8px] border-[1.5px] border-[#F3F4F6] h-[4.22vh] w-[47.83vw] text-[16px] text-[#99A1AF] lowercase">dd/mm/yyyy</span>
//       </div>

//       {/* Property type */}
//       <div className="flex flex-row justify-between items-center ">
//         <Heading text="Property type" />
//         <span className="flex flex-row items-center justify-end py-2.5 pr-4 rounded-[8px] border-[1.5px] border-[#F3F4F6] h-[4.22vh] w-[47.83vw] text-[16px] text-[#99A1AF] capitalize">select</span>
//       </div>

//       <footer className="mt-22.5">
// {/* Stay on top */}
//           <div className="h-[11.61vh] py-4 pl-4 rounded-[16px] bg-[#F1FCFF] flex flex-row items-center gap-4 mb-6">
//               <RentalPreferencePeopleIcon/>
//               <div className="flex flex-col gap-2.5 text-[#001D3D] text-[14px]">
//                   <p className=" font-bold">Stay on top of your rentals!</p>
//                   <p className="">Click here to track applications, move-ins, and more!</p>
//               </div>
//       </div>

//       {/* Clear fiters or Apply Filters */}
//           <div className="flex flex-row justify-between mb-7.5">
//               <button className="w-[44.02vw] py-3.5 px-10 rounded-[16px] text-[16px] font-bold capitalize text-[#001D3D] border-[1.5px] border-[#001D3D]">Clear All</button>
//               <button className="w-[44.02vw] py-3.5 px-10 rounded-[16px] text-[16px] font-bold capitalize text-[#FFF] bg-[#001D3D]">Apply</button>
//       </div>
//       </footer>
      
//     </div>
//   );
// };

// export default RentalPreference;

//-----------------------------------------------------------------------------------------------------

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
    console.log("Applied Filters:", filters);
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
      className={`cursor-pointer px-3 py-1.5 rounded-md text-sm 
        ${selected === opt ? "bg-[#EAF7FF] border border-[#E4F4FF] text-[#001D3D]" : "text-[#001D3D]"}
      `}
    >
      {opt}
    </span>
  ));


  return (
    <form onSubmit={handleSubmit} className="h-full">
      <div className="pt-5.5 px-4">
        <header className="flex flex-row items-center gap-20 mt-4 mb-9">
          <div onClick={handleBackClick}>
            <BackIcon />
          </div>
          <h1 className="text-[#001D3D] text-[18px] font-bold capitalize">
            Rental Preference
          </h1>
        </header>

        {/* Price Range */}
        <div className="mb-6">
          <div className="flex flex-row items-center justify-between">
            <Heading text="Price" className="" />
            <div className="flex justify-between items-center gap-3">
              <span className="text-[#001D3D] text-[14px] capitalize p-2.5 border-[1.5px] border-[#F1FCFF] rounded-[8px]">{`$${price[0]}`}</span>
              <span className="text-[#001D3D] text-[14px]">to</span>
              <span className="text-[#001D3D] text-[14px] capitalize p-2.5 border-[1.5px] border-[#F1FCFF] rounded-[8px]">{`$${price[1]}`}</span>
            </div>
          </div>
          <Box>
            <Slider
              getAriaLabel={() => "Price Range"}
              value={price}
              onChange={(e, val) => setPrice(val as number[])}
              valueLabelDisplay="auto"
              min={1000}
              max={10000}
            />
          </Box>
        </div>

        {/* Bedrooms */}
        <div className="mb-6">
          <Heading text="Bedrooms" />
          <div className="border border-[#F1FCFF] rounded-[8px] px-3 py-2">
  <div className="flex flex-wrap gap-2">
    {renderOptions(["Studio+", "1+", "2+", "3+", "4+", "5+"], bedroom, setBedroom)}
  </div>
</div>

        </div>

        {/* Bathrooms */}
        <div className="mb-6">
          <Heading text="Bathrooms" />
          <div className="border border-[#F1FCFF] rounded-[8px] px-3 py-2">
  <div className="flex flex-wrap gap-2">
    {renderOptions(["Studio+", "1+", "2+", "3+", "4+", "5+"],bathroom, setBathroom)}
  </div>
</div>

        </div>

        {/* Parking */}
        <div className="mb-6">
          <Heading text="Parking" />
          <div className="border border-[#F1FCFF] rounded-[8px] px-3 py-2">
  <div className="flex flex-wrap gap-2">
    {renderOptions(["Studio+", "1+", "2+", "3+", "4+", "5+"],  parking, setParking)}
  </div>
</div>

        </div>

        {/* Move in date */}
        <div className="flex flex-row justify-between items-center mb-6">
          <Heading text="Move-In date" />
          <input
            type="date"
            className="py-2.5 pr-4 pl-2 rounded-[8px] border-[1.5px] border-[#F3F4F6] h-[4.22vh] w-[47.83vw] text-[16px] text-[#001D3D] lowercase"
            value={moveInDate}
            onChange={(e) => setMoveInDate(e.target.value)}
          />
        </div>

        {/* Property type */}
        <div className="flex flex-row justify-between items-center mb-6">
          <Heading text="Property type" />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="py-2.5 pr-4 pl-2 rounded-[8px] border-[1.5px] border-[#F3F4F6] h-[4.9vh] w-[47.83vw] text-[16px] text-[#001D3D] capitalize"
          >
            <option value="">Select</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="house">House</option>
          </select>
        </div>

        {/* Footer: Info Banner */}
        <div className="h-[11.61vh] py-4 pl-4 rounded-[16px] bg-[#F1FCFF] flex flex-row items-center gap-4 mb-6 mt-22">
          <RentalPreferencePeopleIcon />
          <div className="flex flex-col gap-2.5 text-[#001D3D] text-[14px]">
            <p className="font-bold">Stay on top of your rentals!</p>
            <p>Click here to track applications, move-ins, and more!</p>
          </div>
        </div>

        {/* Footer: Buttons */}
        <div className="flex flex-row justify-between mb-5">
          <button
            type="button"
            onClick={handleClear}
            className="w-[44.02vw] py-3.5 px-10 rounded-[16px] text-[16px] font-bold capitalize text-[#001D3D] border-[1.5px] border-[#001D3D]"
          >
            Clear All
          </button>
          <button
            type="submit"
            className="w-[44.02vw] py-3.5 px-10 rounded-[16px] text-[16px] font-bold capitalize text-[#FFF] bg-[#001D3D]"
          >
            Apply
          </button>
        </div>
      </div>
    </form>
  );
};

export default RentalPreference;
