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
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero slider"
    >
      {/* Image slides */}
      <div className="relative w-full h-full">
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
              className="w-full h-full object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 z-10">
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
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 shadow-lg z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress bar */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full z-10">
          <div
            key={current}
            className="h-full bg-white"
            style={{ animation: 'progressBar 5s linear' }}
          />
        </div>
      )}

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
