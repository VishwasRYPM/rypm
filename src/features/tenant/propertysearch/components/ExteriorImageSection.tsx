import React from "react";

interface ExteriorImageProps {
  images?: string[];
}

const ExteriorImageSection: React.FC<ExteriorImageProps> = ({ images = [] }) => {

  const chunks: string[][] = [];
  for (let i = 0; i < images.length; i += 4) {
    chunks.push(images.slice(i, i + 4));
  }

  return (
    <div className="flex flex-col gap-4">
      {chunks.map((group, groupIndex) => (
        <div key={groupIndex} className={`` }>
          {/* Top full-width image */}
          {group[0] ? (
            <div className="w-[91.86vw] h-[22.30vh] mb-2.5"> 
              <img
                src={group[0]}
                alt={`Exterior image ${groupIndex * 4 + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            null
          )}

          {/*  Bottom 3 side-by-side images*/}
          <div className="flex flex-row justify-between">
            {[1, 2, 3].map((index) =>
          group[index] ? (
            <div key={index} className="w-[29.26vw] h-[13.26vh]">
              <img
                src={group[index]}
                alt={`Exterior image ${groupIndex * 4 + index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : null 
        )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExteriorImageSection;
