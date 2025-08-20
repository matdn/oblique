"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";

const images = [
    "/images/editions/2024/1.png",
    "/images/editions/2024/2.png",
    "/images/editions/2024/3.png",
    "/images/editions/2024/4.png",
    "/images/editions/2024/5.png",
    "/images/editions/2024/6.png",
];

const breakpoints = {
    default: 3,
    1024: 2,
    640: 1,
};

export default function EditionGallery() {
    return (
        <div className="px-4 md:px-16 py-8">
            <Masonry
                breakpointCols={breakpoints}
                className="flex gap-4"
                columnClassName="space-y-4"
            >
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-xl">
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-full object-cover rounded-xl hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0"
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    );
}
