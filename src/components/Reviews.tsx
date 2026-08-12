const REVIEWS = [
  {
    name: 'Tố Nga',
    service: 'Nhuộm & Uốn',
    text: 'Uốn tóc từ trước tết tới giờ vẫn giữ nếp rất ok, thái độ phục vụ của tiệm cx rất tốt 👍',
  },
  {
    name: 'Trần Thanh Hằng',
    service: 'Cắt Tóc & Phục Hồi',
    text: 'Kiểu tóc cắt tỉa rất tinh tế, đúng như mình mong muốn. Liệu trình phục hồi giúp tóc mềm mại trở lại.',
  },
  {
    name: 'Khang Nguyễn',
    service: 'Nhuộm tóc',
    text: 'Đã làm tóc ở đây được 2 năm nhân viên rất hòa đồng nhiệt tình! Gotcha.',
  },
  {
    name: 'Nguyễn Hương',
    service: 'Uốn Hàn Quốc',
    text: 'Làm tóc ở tiệm cx cỡ 5 năm rồi , rất ưng ý. Uốn tóc và cắt tóc đều đúng với yêu cầu, thái độ nhiệt tình với khách hàng.',
  },
  {
    name: 'Het Cao Van',
    service: 'Cắt Layer & Style',
    text: '10đ a làm tóc hoà đồng thân thiện lắm luôn, giá tốt.',
  },
  {
    name: 'Si Bu',
    service: 'Nhuộm Balayage',
    text: 'Tiệm làm tóc tóc ưng quá chừng 😘, uốn nhuộm 1 lần luôn mà vẫn còn mượt, dịch vụ tốt, nhiệt tình lắm nhee😍😍',
  },
  {
    name: 'Phố Ngô',
    service: 'Phục Hồi Tóc',
    text: 'Anh chủ salon rất tâm , tư vấn phù hợp với từng loại tóc cỉa mình , mấy bạn nhân viên đều rất thân thiện.',
  },
  {
    name: 'Hải Yến',
    service: 'Nối Tóc',
    text: 'Trải nghiệm xứng đáng 5 sao. Không gian sang trọng, phong cách chuyên nghiệp.',
  },
];

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <figure className="mx-3 flex h-full w-[320px] shrink-0 flex-col gap-5 rounded-xl border border-[#2a221c]/10 bg-white/60 p-8 md:w-[360px]">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-[14px] text-[#c9a96e]">
            ★
          </span>
        ))}
      </div>
      <blockquote
        className="text-[15px] leading-[1.8] text-[#2a221c]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        “{review.text}”
      </blockquote>
      <figcaption className="mt-auto">
        <p
          className="text-[16px] text-[#2a221c]"
          style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
        >
          {review.name}
        </p>
        <p
          className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#7a6b5d]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {review.service}
        </p>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section
      aria-label="Client reviews"
      className="overflow-hidden bg-[#FAF8F5] py-16 md:py-24"
    >
      <div className="container mx-auto mb-12 px-6 md:mb-16 md:px-12">
        <div className="flex flex-col gap-3">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Khách Hàng Nói Gì
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Cảm Nhận Khách Hàng
          </h2>
        </div>
      </div>

      <div className="group/marquee relative">
        <div className="marquee-track flex w-max will-change-transform group-hover/marquee:[animation-play-state:paused]">
          {loop.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAF8F5] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAF8F5] to-transparent" />
      </div>
    </section>
  );
}
