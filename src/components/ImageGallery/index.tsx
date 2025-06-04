'use client';

import { useState } from 'react';
import FallbackImage from '@/components/FallbackImage';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="my-8">
      {/* Main Image */}
      <div className="relative w-full h-[400px] mb-4">
        <FallbackImage
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          fallbackSrc="/images/placeholder.svg"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-full h-24 rounded-lg overflow-hidden ${
              selectedImage === index ? 'ring-2 ring-blue-600' : ''
            }`}
          >
            <FallbackImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 20vw"
              fallbackSrc="/images/placeholder.svg"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
