import React from "react";

interface KitchenImageProps {
  images?: string[];
}

const KitchenImageSection: React.FC<KitchenImageProps> = ({ images = [] }) => {
  // Group images into chunks of 4
  const chunks: string[][] = [];
  for (let i = 0; i < images.length; i += 4) {
    chunks.push(images.slice(i, i + 4));
  }

  return (
    <div className="flex flex-col gap-4">
      {chunks.map((group, groupIndex) => (
        <div key={groupIndex}>
          {/* Top Full Width Image */}
          {group[0] && (
            <div className="w-[91.86vw] h-[22.30vh] mb-2.5">
              <img
                src={group[0]}
                alt={`Image ${groupIndex * 4 + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Bottom Row - only render if any image exists */}
          {(group[1] || group[2] || group[3]) && (
            <div className="flex flex-row justify-between h-[26.99vh] gap-2.5">
              {/* Left Image */}
              {group[1] && (
                <div className="w-[44.02vw] h-full">
                  <img
                    src={group[1]}
                    alt={`Image ${groupIndex * 4 + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Right Two Small Images (only show wrapper if one of them exists) */}
              {(group[2] || group[3]) && (
                <div className="flex flex-col justify-between h-full w-[45.29vw] gap-2.5">
                  {group[2] && (
                    <div className="h-[12.91vh]">
                      <img
                        src={group[2]}
                        alt={`Image ${groupIndex * 4 + 3}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {group[3] && (
                    <div className="h-[12.91vh]">
                      <img
                        src={group[3]}
                        alt={`Image ${groupIndex * 4 + 4}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default KitchenImageSection;
