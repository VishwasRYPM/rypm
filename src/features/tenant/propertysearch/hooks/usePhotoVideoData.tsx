import React from "react";

// Define a type for each info block item
export interface ImageItem {
  image: string;
    text: string;
    id: string;
}




// Export the data structure
export const PhotoVideoData: ImageItem[] = [
    {
        id: "#exterior",
        text: "Exterior",
        image:"/images/exterior.png"
    },
    {
        id: "#livingroom",
        text: "Living Room",
        image:"/images/livingroom.png"
    },
    {
        id: "#kitchen",
        text: "Kitchen",
        image:"/images/kitchen.png"
    },
    {
        id: "#bathroom",
        text: "Bathroom",
        image:"/images/bathroom.png"
    },
];
