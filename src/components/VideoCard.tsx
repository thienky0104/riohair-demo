import { useState, useRef, useEffect } from 'react';
import type { VideoItem } from '@/data/videoData';

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Single source of truth: is this card near the viewport right now?
  // No second "brain" for play/pause — the <video autoPlay loop playsInline>
  // attributes handle that natively. Mounting the element starts it,
  // unmounting it stops it. Nothing else to manage.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setMounted(entry.isIntersecting);
        }
      },
      { threshold: 0.2, rootMargin: '200px 0px 200px 0px' },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[9/16] w-[72vw] shrink-0 snap-start overflow-hidden rounded-xl bg-[#f0ebe2] sm:w-[300px] lg:w-[320px]"
    >
      {mounted ? (
        <video
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src={video.poster}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
