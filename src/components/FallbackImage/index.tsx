import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface FallbackImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export default function FallbackImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder.webp',
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
