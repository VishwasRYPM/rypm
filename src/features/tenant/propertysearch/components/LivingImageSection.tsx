import React from "react";

interface LivingImageProps {
  images?: string[];
}

const LivingImageSection: React.FC<LivingImageProps> = ({ images = [] }) => {
  // Split images into chunks of 4
  const chunks: string[][] = [];
  for (let i = 0; i < images.length; i += 4) {
    chunks.push(images.slice(i, i + 4));
  }

  return (
    <div className="flex flex-col gap-4">
      {chunks.map((group, groupIndex) => (
        <div key={groupIndex}>
          {/* Top full-width image */}
          {group[0] ? (
            <div className="w-[91.86vw] h-[22.30vh] mb-2.5">
              <img
                src={group[0]}
                alt={`Living image ${groupIndex * 4 + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : null}

          {/* Bottom row - render only if any of group[1], group[2], or group[3] exists */}
          {(group[1] || group[2] || group[3]) && (
            <div className="flex flex-row justify-between h-[29.46vh] gap-2.5">
              {/* Left tall image */}
              {group[1] && (
                <div className="w-[44.02vw] h-full">
                  <img
                    src={group[1]}
                    alt={`Living image ${groupIndex * 4 + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Right two stacked images - only render wrapper if either exists */}
              {(group[2] || group[3]) && (
                <div className="flex flex-col justify-between h-full w-[45.29vw] gap-2.5">
                  {group[2] && (
                    <div className="h-[17.60vh]">
                      <img
                        src={group[2]}
                        alt={`Living image ${groupIndex * 4 + 3}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {group[3] && (
                    <div className="h-[10.68vh]">
                      <img
                        src={group[3]}
                        alt={`Living image ${groupIndex * 4 + 4}`}
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

export default LivingImageSection;
