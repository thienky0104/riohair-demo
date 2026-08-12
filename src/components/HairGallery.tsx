import { useRef } from 'react';

const GALLERY_IMAGES = [
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364164/484978316_1808479776602735_1117950820531129718_n_1.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364163/94619370_242448817109689_6951844033924694016_n.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364158/0805_9.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364158/0805_10.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364163/0805.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364166/0805_4.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364161/0805_12.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364160/0805_11.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786364157/0805_5.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786441670/0805_3.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786441670/484824980_1808479793269400_7038359465863223345_n.jpg',
  'https://res.cloudinary.com/rca1th1a/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786441674/0805_8.jpg',
];

export default function HairGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="lookbook"
      aria-label="Hair gallery"
      className="bg-[#FAF8F5] pt-12 pb-16 md:pt-16 md:pb-24"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Lookbook
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Khoảnh Khắc Của Khách Hàng
          </h2>
          <p
            className="max-w-[480px] text-[14px] leading-[1.8] text-[#7a6b5d] md:text-[15px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Các kiểu tóc nam & nữ được thực hiện tại salon, từ những đường cắt tỉa tỉ mỉ, kiểu uốn tự nhiên đến những phối màu nhuộm đa chiều. Triệu Salon sẽ mang đến những kiểu tóc vượt cả mong đợi của bạn.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="gallery-card group aspect-[3/4] overflow-hidden rounded-xl bg-[#f0ebe2] shadow-[0_2px_12px_rgba(42,34,28,0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(42,34,28,0.12)]"
            >
              <img
                src={src}
                alt={`Kiểu tóc nam nữ thực tế tại Triệu Tóc Đẹp Lái Thiêu ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
