import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { videos } from '@/data/videoData';
import VideoCard from '@/components/VideoCard';
import CarouselControls from '@/components/CarouselControls';

gsap.registerPlugin(ScrollTrigger);

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // No Embla, no drag-gesture library — the browser's own native scrolling
  // handles the swipe/drag entirely (overflow-x-auto + snap-x snap-mandatory
  // on the track below). This function just nudges that native scroll
  // container, the same way the reference site's arrow buttons do.
  const scrollByDirection = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Video showcase"
      id="video"
      className="bg-[#FAF8F5] py-20 md:py-28"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span
              className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Thư Viện Video
            </span>
            <h2
              className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
              style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
            >
              Niềm Vui Của Khách Hàng Tại Rio Hair
            </h2>
            <p
              className="max-w-[480px] text-[14px] leading-[1.8] text-[#7a6b5d] md:text-[15px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hãy xem những trải nghiệm và kiểu tóc thực tế của khách hàng tại Lái Thiêu.
            </p>
          </div>

          {/* Carousel controls — upper right, desktop only */}
          <div className="hidden md:block">
            <CarouselControls
              scrollPrev={() => scrollByDirection(-1)}
              scrollNext={() => scrollByDirection(1)}
              canScrollPrev={true}
              canScrollNext={true}
            />
          </div>
        </div>

        {/* Video track — native horizontal scroll + snap, no JS drag library */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
          <div aria-hidden="true" className="w-1 shrink-0 md:w-3" />
        </div>

        {/* Mobile controls */}
        <div className="mt-8 flex md:hidden">
          <CarouselControls
            scrollPrev={() => scrollByDirection(-1)}
            scrollNext={() => scrollByDirection(1)}
            canScrollPrev={true}
            canScrollNext={true}
          />
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://zalo.me/0942777009"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2a221c] px-10 py-4 text-[12px] uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#3d2f24] active:scale-95"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Đặt Lịch Hẹn
          </a>
        </div>
      </div>
    </section>
  );
}
