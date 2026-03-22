import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { playlists, categories, Playlist, Video } from '../data/studioVideos'

type ViewState =
  | { mode: 'playlists'; category: 'devotional' | 'rhymes' | 'stories' }
  | { mode: 'videos'; playlist: Playlist }
  | { mode: 'player'; playlist: Playlist; video: Video }

const sliderData: Array<{
  title: string
  subtitle: string
  category: 'stories' | 'rhymes' | 'devotional' | null
  gradient: string
  isHero?: boolean
  bannerImage?: string
}> = [
  {
    title: 'Bringing Life to Thoughts...',
    subtitle: 'Captivating stories, rhymes and devotional content for all ages.',
    category: null,
    gradient: 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #1F2937 100%)',
    isHero: true,
    bannerImage: 'https://github.com/user-attachments/assets/70ca7d48-284c-494c-b239-df4535cb46cd',
  },
  {
    title: 'Captivating Stories',
    subtitle: 'Animated tales that inspire imagination and teach valuable life lessons',
    category: 'stories' as const,
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f2027 50%, #203a43 100%)',
  },
  {
    title: 'Joyful Rhymes',
    subtitle: 'Colorful animated nursery rhymes that children love to sing along',
    category: 'rhymes' as const,
    gradient: 'linear-gradient(135deg, #2d1b4e 0%, #1a1a2e 50%, #16213e 100%)',
  },
  {
    title: 'Divine Devotionals',
    subtitle: 'Sacred chants, bhajans and spiritual content for peace and harmony',
    category: 'devotional' as const,
    gradient: 'linear-gradient(135deg, #4a1a2e 0%, #1a0a0e 50%, #2d1b1b 100%)',
  },
]

const studioSocialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5V8h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.696 4.533-4.696 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.886v2.286h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
]

function StudioFooterLogo() {
  const [imgError, setImgError] = useState(false)
  return imgError ? (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#1F2937"/>
      <circle cx="24" cy="24" r="21" fill="none" stroke="#F97316" strokeWidth="2"/>
      <text x="24" y="32" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="serif">A</text>
    </svg>
  ) : (
    <img
      src="https://github.com/user-attachments/assets/a3566f73-012a-405e-a33f-dd12f0982201"
      alt="Aksha Globals Logo"
      width="48"
      height="48"
      className="rounded-full object-cover"
      onError={() => setImgError(true)}
    />
  )
}

export default function Studio() {
  const [view, setView] = useState<ViewState | null>(null)
  const [sliderIndex, setSliderIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCategoryClick = (category: 'devotional' | 'rhymes' | 'stories') => {
    setView({ mode: 'playlists', category })
  }

  const handlePlaylistClick = (playlist: Playlist) => {
    setView({ mode: 'videos', playlist })
  }

  const handleVideoClick = (playlist: Playlist, video: Video) => {
    setView({ mode: 'player', playlist, video })
  }

  const handleBack = () => {
    if (!view) return
    if (view.mode === 'player') {
      setView({ mode: 'videos', playlist: view.playlist })
    } else if (view.mode === 'videos') {
      setView({ mode: 'playlists', category: view.playlist.category })
    } else if (view.mode === 'playlists') {
      setView(null)
    }
  }

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setSliderIndex((index + sliderData.length) % sliderData.length)
      setTimeout(() => setIsAnimating(false), 500)
    },
    [isAnimating],
  )

  const nextSlide = useCallback(() => goToSlide(sliderIndex + 1), [sliderIndex, goToSlide])
  const prevSlide = useCallback(() => goToSlide(sliderIndex - 1), [sliderIndex, goToSlide])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide, isPaused])

  const currentSlide = sliderData[sliderIndex]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1F2937' }}>
      <SEO
        title="Aksha Globals Studios"
        description="Watch devotional videos, rhymes and stories from Aksha Globals Studio. High quality video content for all ages."
        path="/studio"
      />

      {/* Combined Sliding Banner */}
      <section
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Studio content slider"
      >
        <div
          className="transition-all duration-700"
          style={{ background: currentSlide.gradient }}
        >
          {/* Banner background image */}
          {currentSlide.bannerImage && (
            <div className="absolute inset-0">
              <img
                src={currentSlide.bannerImage}
                alt="Aksha Globals Studios — Bringing Life to Thoughts"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.75) 40%, rgba(17,24,39,0.35) 100%)',
                }}
              />
            </div>
          )}

          {/* Decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
            <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
            <div
              key={sliderIndex}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              style={{ animation: 'studioFadeIn 0.5s ease-out' }}
            >
              {/* Left - Text content */}
              <div className="flex-1 text-center lg:text-left">

                {currentSlide.isHero ? (
                  <>
                    <span
                      className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1 rounded-full backdrop-blur-sm"
                      style={{ color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.3)' }}
                    >
                      Welcome to Aksha Globals Studios
                    </span>
                    <h1
                      className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
                      style={{
                        background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 40%, #F9FAFB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Bringing Life<br />to Thoughts...
                    </h1>
                  </>
                ) : (
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
                    style={{ color: '#F9FAFB' }}
                  >
                    {currentSlide.title}
                  </h2>
                )}

                <p
                  className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0"
                  style={{ color: '#D1D5DB' }}
                >
                  {currentSlide.subtitle}
                </p>

                {!currentSlide.isHero && currentSlide.category && (() => {
                  const category = currentSlide.category
                  return (
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="px-8 py-4 font-bold rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                      style={{ backgroundColor: '#F97316', color: '#FFFFFF' }}
                    >
                      Explore {currentSlide.title}
                    </button>
                  )
                })()}
              </div>

              {/* Right - Visual panel */}
              <div
                className="flex-shrink-0 w-full lg:w-80 xl:w-96"
                style={{ animation: 'studioHeroFadeInRight 0.6s ease-out' }}
              >
                {currentSlide.isHero ? (
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map(cat => {
                      const count = playlists.filter(p => p.category === cat.id).length
                      return (
                        <button
                          key={cat.id}
                          onClick={() => handleCategoryClick(cat.id)}
                          aria-label={`View ${cat.label} playlists`}
                          className="rounded-2xl p-5 border text-center transition-all duration-200 hover:-translate-y-1 shadow-lg backdrop-blur-md"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            borderColor: 'rgba(255,255,255,0.15)',
                          }}
                        >
                          <div className="text-4xl mb-2">{cat.icon}</div>
                          <div className="text-sm font-bold" style={{ color: '#F9FAFB' }}>{cat.label}</div>
                          <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{count} playlists</div>
                        </button>
                      )
                    })}
                  </div>
                ) : currentSlide.category ? (
                  (() => {
                    const cat = categories.find(c => c.id === currentSlide.category)
                    const catPlaylists = playlists.filter(p => p.category === currentSlide.category)
                    const totalVideos = catPlaylists.reduce((sum, pl) => sum + pl.videos.length, 0)
                    return (
                      <div
                        className="rounded-2xl p-6 sm:p-8 border text-center backdrop-blur-md shadow-2xl"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          borderColor: 'rgba(255,255,255,0.15)',
                        }}
                      >
                        <div className="text-6xl md:text-7xl mb-4 drop-shadow-xl">{cat?.icon}</div>
                        <div className="text-2xl font-bold mb-1" style={{ color: '#F9FAFB' }}>{cat?.label}</div>
                        <div className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>{cat?.description}</div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                            <div className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>Playlists</div>
                            <div className="font-bold text-sm" style={{ color: '#F9FAFB' }}>{catPlaylists.length}</div>
                          </div>
                          <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                            <div className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>Videos</div>
                            <div className="font-bold text-sm" style={{ color: '#F9FAFB' }}>{totalVideos}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })()
                ) : null}
              </div>
            </div>
          </div>

          {/* Slider navigation dots */}
          <div className="flex items-center justify-center gap-3 pb-6">
            {sliderData.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === sliderIndex
                    ? 'w-8 h-3 bg-orange-500'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full w-11 h-11 flex items-center justify-center transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full w-11 h-11 flex items-center justify-center transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Decorative bottom border */}
          <div className="h-1" style={{ background: 'linear-gradient(90deg, #F97316, #1F2937, #F97316)' }} />

          {/* Progress bar */}
          {!isPaused && (
            <div className="absolute bottom-0 left-0 h-0.5 bg-white/20 w-full">
              <div
                key={sliderIndex}
                className="h-full bg-orange-500"
                style={{ animation: 'studioProgress 5s linear' }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Breadcrumb navigation */}
      {view !== null && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            style={{ color: '#F97316', backgroundColor: 'rgba(249,115,22,0.1)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div id="studio-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Categories View */}
        {view === null && (
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-6 text-center" style={{ color: '#F9FAFB' }}>
              Explore Our <span style={{ color: '#F97316' }}>Video Categories</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(cat => {
                const catPlaylists = playlists.filter(pl => pl.category === cat.id)
                const totalVideos = catPlaylists.reduce((sum, pl) => sum + pl.videos.length, 0)
                const thumbnail = catPlaylists[0]?.thumbnail
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className="group rounded-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border"
                    style={{ backgroundColor: '#111827', borderColor: 'rgba(249,115,22,0.2)' }}
                  >
                    {/* Category Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={cat.label}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-5xl" style={{ backgroundColor: '#1F2937' }}>
                          {cat.icon}
                        </div>
                      )}
                      {/* Count overlay */}
                      <div
                        className="absolute bottom-0 right-0 px-3 py-1.5 text-xs font-bold flex items-center gap-1.5"
                        style={{ backgroundColor: 'rgba(0,0,0,0.85)', color: '#F9FAFB' }}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        {catPlaylists.length} playlists · {totalVideos} videos
                      </div>
                      {/* Icon overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: '#F97316' }}
                        >
                          <span className="text-3xl">{cat.icon}</span>
                        </div>
                      </div>
                    </div>
                    {/* Category Info */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{cat.icon}</span>
                        <h3 className="font-bold text-lg" style={{ color: '#F9FAFB' }}>
                          {cat.label}
                        </h3>
                      </div>
                      <p className="text-sm line-clamp-2" style={{ color: '#9CA3AF' }}>
                        {cat.description}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Playlists View */}
        {view !== null && view.mode === 'playlists' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F9FAFB' }}>
              <span style={{ color: '#F97316' }}>
                {categories.find(c => c.id === view.category)?.label}
              </span>{' '}
              Playlists
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlists
                .filter(pl => pl.category === view.category)
                .map(playlist => (
                  <button
                    key={playlist.id}
                    onClick={() => handlePlaylistClick(playlist)}
                    className="group rounded-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border"
                    style={{ backgroundColor: '#111827', borderColor: 'rgba(249,115,22,0.2)' }}
                  >
                    {/* Playlist Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={playlist.thumbnail}
                        alt={playlist.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Video count overlay */}
                      <div
                        className="absolute bottom-0 right-0 px-3 py-1.5 text-xs font-bold flex items-center gap-1.5"
                        style={{ backgroundColor: 'rgba(0,0,0,0.85)', color: '#F9FAFB' }}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        {playlist.videos.length} videos
                      </div>
                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: '#F97316' }}
                        >
                          <svg className="w-7 h-7 ml-1" fill="white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Playlist Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1" style={{ color: '#F9FAFB' }}>
                        {playlist.title}
                      </h3>
                      <p className="text-sm line-clamp-2" style={{ color: '#9CA3AF' }}>
                        {playlist.description}
                      </p>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Videos List View */}
        {view !== null && view.mode === 'videos' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#F9FAFB' }}>
                {view.playlist.title}
              </h2>
              <p className="mt-2 text-sm" style={{ color: '#9CA3AF' }}>
                {view.playlist.description} · {view.playlist.videos.length} videos
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {view.playlist.videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoClick(view.playlist, video)}
                  className="group rounded-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border"
                  style={{ backgroundColor: '#111827', borderColor: 'rgba(249,115,22,0.2)' }}
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Index badge */}
                    <div
                      className="absolute top-2 left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: '#F97316', color: '#F9FAFB' }}
                    >
                      {index + 1}
                    </div>
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#F97316' }}
                      >
                        <svg className="w-7 h-7 ml-1" fill="white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-bold mb-1" style={{ color: '#F9FAFB' }}>
                      {video.title}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: '#9CA3AF' }}>
                      {video.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Video Player View */}
        {view !== null && view.mode === 'player' && (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Player */}
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#111827' }}>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${view.video.youtubeId}?autoplay=1&rel=0`}
                    title={view.video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#F9FAFB' }}>
                    {view.video.title}
                  </h2>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>
                    {view.video.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar - Playlist Videos */}
            <div
              className="lg:w-80 xl:w-96 rounded-2xl overflow-hidden flex flex-col"
              style={{ backgroundColor: '#111827' }}
            >
              <div className="p-4 border-b" style={{ borderColor: 'rgba(249,115,22,0.2)' }}>
                <h3 className="font-bold" style={{ color: '#F9FAFB' }}>{view.playlist.title}</h3>
                <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>
                  {view.playlist.videos.length} videos
                </p>
              </div>
              <div className="flex-1 overflow-y-auto max-h-[600px]">
                {view.playlist.videos.map((v, index) => (
                  <button
                    key={v.id}
                    onClick={() => setView({ mode: 'player', playlist: view.playlist, video: v })}
                    className="w-full flex items-start gap-3 p-3 text-left transition-colors duration-200"
                    style={{
                      backgroundColor: v.id === view.video.id ? 'rgba(249,115,22,0.15)' : 'transparent',
                    }}
                    onMouseEnter={e => {
                      if (v.id !== view.video.id) (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(249,115,22,0.08)'
                    }}
                    onMouseLeave={e => {
                      if (v.id !== view.video.id) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                    }}
                  >
                    <span className="text-xs font-bold mt-1 w-5 text-center flex-shrink-0" style={{ color: v.id === view.video.id ? '#F97316' : '#6B7280' }}>
                      {v.id === view.video.id ? '▶' : index + 1}
                    </span>
                    <div className="flex-shrink-0 w-28 aspect-video rounded overflow-hidden">
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-sm font-semibold leading-tight line-clamp-2"
                        style={{ color: v.id === view.video.id ? '#F97316' : '#F9FAFB' }}
                      >
                        {v.title}
                      </h4>
                      <p className="text-xs mt-1 line-clamp-1" style={{ color: '#6B7280' }}>
                        {v.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Studio Footer */}
      <footer style={{ backgroundColor: '#1F2937' }} className="pt-14 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <StudioFooterLogo />
                <div>
                  <div className="text-xl font-bold leading-tight" style={{ color: '#F9FAFB' }}>Aksha Globals</div>
                  <div className="text-sm font-medium" style={{ color: '#F97316' }}>Imagination to Innovation</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#9CA3AF' }}>
                Leading provider of innovative software solutions and professional training programs.
                Empowering developers and businesses to build the future with cutting-edge technology.
              </p>
            </div>

            {/* Send a Message */}
            <div>
              <h3 className="text-lg font-medium tracking-wide mb-5" style={{ color: '#F9FAFB' }}>Send a Message</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9CA3AF' }}>
                Have a question or want to work with us? We'd love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
                style={{ backgroundColor: '#F97316', color: '#FFFFFF' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#EA580C' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F97316' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Send a Message
              </Link>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-lg font-medium tracking-wide mb-5" style={{ color: '#F9FAFB' }}>Connect With Us</h3>
              <div className="flex gap-3 mb-5">
                {studioSocialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
                    style={{ backgroundColor: '#374151', color: '#F9FAFB' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#F97316' }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#374151' }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                Join our community for the latest updates, industry insights, and exclusive learning resources.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="border-t py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
            style={{ borderColor: 'rgba(107,114,128,0.3)', color: '#9CA3AF' }}
          >
            <p>© {new Date().getFullYear()} Aksha Globals. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="studio-footer-link">Privacy Policy</Link>
              <Link to="/terms-of-service" className="studio-footer-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .studio-footer-link {
          color: #9CA3AF;
          transition: color 0.2s;
        }
        .studio-footer-link:hover {
          color: #F97316;
        }
        @keyframes studioFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes studioProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes studioHeroFadeIn {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes studioHeroFadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
