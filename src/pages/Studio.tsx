import { useState, useEffect, useCallback } from 'react'
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
  icon: JSX.Element | null
  emoji: string
  isHero?: boolean
}> = [
  {
    title: 'Bringing Stories To Life',
    subtitle: 'Premium video production studio — captivating stories, rhymes and devotional content for all ages.',
    category: null,
    gradient: 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #1F2937 100%)',
    icon: null,
    emoji: '',
    isHero: true,
  },
  {
    title: 'Captivating Stories',
    subtitle: 'Animated tales that inspire imagination and teach valuable life lessons',
    category: 'stories' as const,
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f2027 50%, #203a43 100%)',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    emoji: '📖',
  },
  {
    title: 'Joyful Rhymes',
    subtitle: 'Colorful animated nursery rhymes that children love to sing along',
    category: 'rhymes' as const,
    gradient: 'linear-gradient(135deg, #2d1b4e 0%, #1a1a2e 50%, #16213e 100%)',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
    emoji: '🎵',
  },
  {
    title: 'Divine Devotionals',
    subtitle: 'Sacred chants, bhajans and spiritual content for peace and harmony',
    category: 'devotional' as const,
    gradient: 'linear-gradient(135deg, #4a1a2e 0%, #1a0a0e 50%, #2d1b1b 100%)',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    emoji: '🙏',
  },
]

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

      {/* Combined Banner with Sliding Carousel */}
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div
              key={sliderIndex}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              style={{ animation: 'studioFadeIn 0.5s ease-out' }}
            >
              {/* Left - Text content */}
              <div className="flex-1 text-center md:text-left">
                <div
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
                  style={{ backgroundColor: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: '#F9FAFB' }}>
                    Premium Video Production Studio
                  </span>
                </div>

                {currentSlide.isHero ? (
                  <h1
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
                    style={{
                      background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 40%, #F9FAFB 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Bringing Stories<br />To Life
                  </h1>
                ) : (
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
                    style={{ color: '#F9FAFB' }}
                  >
                    {currentSlide.title}
                  </h2>
                )}

                <p
                  className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
                  style={{ color: '#D1D5DB' }}
                >
                  {currentSlide.subtitle}
                </p>

                {currentSlide.category && (
                  <button
                    onClick={() => handleCategoryClick(currentSlide.category as 'devotional' | 'rhymes' | 'stories')}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #F97316 0%, #EF4444 100%)',
                      color: '#F9FAFB',
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch {currentSlide.title}
                  </button>
                )}
              </div>

              {/* Right - Visual */}
              {currentSlide.isHero ? (
                <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                  <img
                    src="https://github.com/user-attachments/assets/b28fb353-0c2b-4bd7-9fa4-d4bb545fe7d6"
                    alt="Video Camera"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    style={{ filter: 'invert(1) brightness(0.9)' }}
                  />
                </div>
              ) : (
                <div className="flex-shrink-0 flex flex-col items-center gap-4">
                  <div
                    className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(249,115,22,0.1)', border: '2px solid rgba(249,115,22,0.3)' }}
                  >
                    {currentSlide.icon}
                  </div>
                  <span className="text-5xl">{currentSlide.emoji}</span>
                </div>
              )}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#F9FAFB' }}>
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

      <style>{`
        @keyframes studioFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes studioProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
