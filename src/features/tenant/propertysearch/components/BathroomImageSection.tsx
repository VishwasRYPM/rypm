import React from "react";

interface BathroomImageProps {
  images?: string[];
}

const BathroomImageSection: React.FC<BathroomImageProps> = ({ images = [] }) => {
  const chunks: string[][] = [];
  for (let i = 0; i < images.length; i += 3) {
    chunks.push(images.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col gap-4">
      {chunks.map((group, gIdx) => (
        <div key={gIdx}>
          {/* Row 1 – two side-by-side blocks */}
          {(group[0] || group[1]) && (
            <div className="flex flex-row justify-between mb-2.5">
              {/* Left */}
              {group[0] && (
                <div className="w-[44.78vw] h-[20.65vh]">
                  <img
                    src={group[0]}
                    alt={`Bathroom image ${gIdx * 3 + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Right */}
              {group[1] && (
                <div className="w-[44.78vw] h-[20.65vh]">
                  <img
                    src={group[1]}
                    alt={`Bathroom image ${gIdx * 3 + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          )}

          {/* Row 2 – single full-width block */}
          {group[2] && (
            <div className="w-[91.86vw] h-[22.30vh]">
              <img
                src={group[2]}
                alt={`Bathroom image ${gIdx * 3 + 3}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BathroomImageSection;
