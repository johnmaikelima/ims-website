'use client';

import FallbackImage from '@/components/FallbackImage';

interface FeaturedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function FeaturedImage({ src, alt, width, height }: FeaturedImageProps) {
  return (
    <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
      <FallbackImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        fallbackSrc="/images/placeholder.webp"
      />
    </div>
  );
}
