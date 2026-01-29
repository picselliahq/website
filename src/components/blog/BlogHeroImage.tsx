'use client';

import Image from 'next/image';

export default function BlogHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mb-12 rounded-2xl overflow-hidden" style={{ aspectRatio: '2/1', border: '1px solid var(--border)' }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1200px) 100vw, 1200px"
      />
    </div>
  );
}
