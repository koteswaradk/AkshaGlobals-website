import { useState, useEffect, useCallback } from 'react'

const baseUrl: string = import.meta.env.BASE_URL || '/'

const slides = [
  {
    image: `${baseUrl}slider-images/slide1.png`,
    title: 'Solving Real Problems with AI & Roboast Solutions',
    alt: 'AI-powered solutions with robot',
  },
  {
    image: `${baseUrl}slider-images/slide2.png`,
    title: 'Master the Latest Technologies',
    alt: 'Professional training programs',
  },
  {
    image: `${baseUrl}slider-images/slide3.png`,
    title: 'Bringing Stories to Life',
    alt: 'Audio and video production',
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
      setTimeout(() => setIsAnimating(false), 500)
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
      className="relative w-full overflow-hidden bg-[#020b1a] px-4 py-6 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Hero slider"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[#041426] shadow-[0_0_40px_rgba(34,211,238,0.12)]">
        <div className="relative aspect-[16/9] w-full">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={s.image}
                alt={s.alt}
                className="h-full w-full object-contain"
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={idx === 0 ? 'high' : 'auto'}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-3 sm:bottom-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-3 bg-white'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors duration-200 hover:bg-black/50 sm:left-4 sm:p-3"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors duration-200 hover:bg-black/50 sm:right-4 sm:p-3"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Progress bar */}
        {!isPaused && (
          <div className="absolute bottom-0 left-0 z-10 h-1 w-full bg-white/20">
            <div
              key={current}
              className="h-full bg-white"
              style={{ animation: 'progressBar 5s linear' }}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
