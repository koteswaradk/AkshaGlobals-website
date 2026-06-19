import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    src: 'https://github.com/user-attachments/assets/cde5589c-957a-41e7-83bf-011b991ea4f4',
    alt: 'Solving Real Problems with AI & Roboast Solutions',
  },
  {
    src: 'https://github.com/user-attachments/assets/e6a501b9-b55a-4b96-8c34-5471388d51bb',
    alt: 'Master the Latest Technologies – Professional Training Programs',
  },
  {
    src: 'https://github.com/user-attachments/assets/e1d53878-7981-498f-8a00-7b23055e22e3',
    alt: 'Bringing Stories to Life – Audio & Video Production',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const total = slides.length

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent((index + total) % total)
      setTimeout(() => setIsAnimating(false), 600)
    },
    [isAnimating, total],
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  return (
    <section
      className="relative w-full overflow-hidden bg-black h-[calc(90vh-4rem)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero slider"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          decoding="async"
          fetchPriority={i === 0 ? 'high' : 'auto'}
        />
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-3 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 shadow-lg text-white"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 shadow-lg text-white"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress bar */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 h-0.5 bg-white/20 w-full">
          <div
            key={current}
            className="h-full bg-white"
            style={{ animation: 'sliderProgress 5s linear' }}
          />
        </div>
      )}

      <style>{`
        @keyframes sliderProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
