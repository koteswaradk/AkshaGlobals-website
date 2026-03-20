import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

const slides = [
  {
    tag: 'Welcome to Aksha Globals',
    headline: 'Innovate. Learn. Transform.',
    sub: 'World-class software products and technology training — empowering businesses and professionals across India.',
    cta: { label: 'Explore Products', to: '/products' },
    ctaAlt: { label: 'View Training', to: '/training' },
    icon: null,
    product: null,
  },
  ...products.map(p => ({
    tag: p.category,
    headline: p.name,
    sub: p.description,
    cta: { label: 'Learn More', to: `/products/${p.id}` },
    ctaAlt: { label: 'All Products', to: '/products' },
    icon: p.icon,
    product: p,
  })),
]

const gradients = [
  'from-teal-700 via-teal-600 to-cyan-600',
  'from-blue-700 via-blue-600 to-indigo-700',
  'from-orange-600 via-orange-500 to-amber-600',
  'from-green-700 via-green-600 to-emerald-600',
  'from-purple-700 via-purple-600 to-violet-700',
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

  const slide = slides[current]
  const bgGradient = gradients[current % gradients.length]

  return (
    <section
      className={`relative bg-gradient-to-br ${bgGradient} text-white overflow-hidden transition-all duration-700`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero slider"
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div
            key={current}
            className="flex-1 text-center lg:text-left animate-fade-in"
            style={{ animation: 'fadeSlideIn 0.5s ease-out' }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-white/70 mb-4 border border-white/30 px-4 py-1 rounded-full backdrop-blur-sm">
              {slide.tag}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {slide.product ? (
                <>
                  <span className="mr-3">{slide.icon}</span>
                  {slide.headline}
                </>
              ) : (
                <>
                  Innovate. Learn.
                  <span className="block text-white/80 font-black mt-1">Transform.</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {slide.sub}
            </p>

            {/* Feature badges for products */}
            {slide.product && (
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                {slide.product.features.slice(0, 3).map(f => (
                  <span
                    key={f}
                    className="text-xs bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1.5 rounded-full font-medium"
                  >
                    ✓ {f}
                  </span>
                ))}
              </div>
            )}

            {/* Rating & downloads for products */}
            {slide.product && (
              <div className="flex items-center gap-6 justify-center lg:justify-start mb-8 text-white/80 text-sm">
                {(['Rating', 'Downloads'] as const).map(label => {
                  const spec = slide.product!.specs.find(s => s.label === label)
                  if (!spec) return null
                  return (
                    <div key={label} className="flex items-center gap-1">
                      <span className="font-bold text-white">{spec.value}</span>
                      <span>{spec.label}</span>
                    </div>
                  )
                })}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to={slide.cta.to}
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-center"
              >
                {slide.cta.label}
              </Link>
              <Link
                to={slide.ctaAlt.to}
                className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/25 transition-all duration-200 border border-white/30 shadow-lg text-center"
              >
                {slide.ctaAlt.label}
              </Link>
            </div>
          </div>

          {/* Visual panel */}
          <div
            key={`visual-${current}`}
            className="flex-shrink-0 w-full lg:w-80 xl:w-96"
            style={{ animation: 'fadeSlideInRight 0.5s ease-out' }}
          >
            {slide.product ? (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 sm:p-8 border border-white/20 shadow-2xl text-center">
                <div className="text-6xl md:text-8xl mb-6 drop-shadow-xl">{slide.icon}</div>
                <div className="text-2xl font-bold mb-1">{slide.product.name}</div>
                <div className="text-white/70 text-sm mb-6">{slide.product.tagline}</div>
                <div className="grid grid-cols-2 gap-3">
                  {(['Platform', 'Version', 'Rating', 'Downloads'] as const).map(label => {
                    const spec = slide.product!.specs.find(s => s.label === label)
                    if (!spec) return null
                    return (
                      <div key={label} className="bg-white/10 rounded-xl p-3">
                        <div className="text-xs text-white/60 mb-0.5">{spec.label}</div>
                        <div className="font-bold text-sm">{spec.value}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-6 flex gap-3 justify-center">
                  <a
                    href={slide.product.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200"
                  >
                    <span>▶</span> Play Store
                  </a>
                  <a
                    href={slide.product.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200"
                  >
                    <span>🍎</span> App Store
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {products.map(p => (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center hover:bg-white/20 transition-all duration-200 hover:-translate-y-1 shadow-lg"
                  >
                    <div className="text-4xl mb-2">{p.icon}</div>
                    <div className="text-sm font-bold">{p.name}</div>
                    <div className="text-xs text-white/60 mt-1">{p.category}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 rounded-full w-11 h-11 flex items-center justify-center transition-all duration-200 shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 rounded-full w-11 h-11 flex items-center justify-center transition-all duration-200 shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress bar */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 h-0.5 bg-white/30 w-full">
          <div
            key={current}
            className="h-full bg-white"
            style={{ animation: 'progressBar 5s linear' }}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
