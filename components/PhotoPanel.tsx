'use client';

import { type ReactNode } from 'react';

/**
 * Full-viewport cinematic photographic panel.
 * Self-hosted image, duotone-graded, with teal/amber wash + grain +
 * legibility scrim, and a slow parallax-style zoom on the photo.
 */
export default function PhotoPanel({
  src,
  alt = '',
  children,
  className = '',
  minH = 'min-h-screen',
  position = 'items-center',
  zoom = true,
  priority = false,
}: {
  src: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
  minH?: string;
  position?: string;
  zoom?: boolean;
  priority?: boolean;
}) {
  return (
    <section
      className={`text-scrim duotone-wash grain relative flex ${minH} w-full items-stretch overflow-hidden ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        {...(alt ? {} : { 'aria-hidden': true })}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`duotone-img absolute inset-0 h-full w-full object-cover ${
          zoom ? 'animate-slowZoom' : ''
        }`}
      />
      <div
        className={`relative z-10 mx-auto flex w-full max-w-6xl ${position} px-6 py-24 sm:px-10 md:px-14`}
      >
        {children}
      </div>
    </section>
  );
}
