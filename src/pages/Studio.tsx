import { useState } from 'react'
import SEO from '../components/SEO'
import { playlists, categories, Playlist, Video } from '../data/studioVideos'

type ViewState =
  | { mode: 'categories' }
  | { mode: 'playlists'; category: 'devotional' | 'rhymes' | 'stories' }
  | { mode: 'videos'; playlist: Playlist }
  | { mode: 'player'; playlist: Playlist; video: Video }

const bannerCards = [
  { id: 'stories' as const, icon: '📖', label: 'Stories', sub: 'Storytelling' },
  { id: 'rhymes' as const, icon: '🎵', label: 'Rhymes', sub: 'Music & Fun' },
  { id: 'devotional' as const, icon: '🙏', label: 'Devotional', sub: 'Spiritual' },
  { icon: '🎬', label: 'Animation', sub: 'Video Production' },
]

export default function Studio() {
  const [view, setView] = useState<ViewState>({ mode: 'categories' })

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
    if (view.mode === 'player') {
      setView({ mode: 'videos', playlist: view.playlist })
    } else if (view.mode === 'videos') {
      setView({ mode: 'playlists', category: view.playlist.category })
    } else if (view.mode === 'playlists') {
      setView({ mode: 'categories' })
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1F2937' }}>
      <SEO
        title="Studio - Aksha Globals"
        description="Watch devotional videos, rhymes and stories from Aksha Globals Studio. High quality video content for all ages."
        path="/studio"
      />

      {/* Banner */}
      <section className="relative bg-gradient-to-br from-m3-primary-10 via-m3-primary to-m3-secondary text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text content */}
            <div
              className="flex-1 text-center lg:text-left"
              style={{ animation: 'studioFadeIn 0.5s ease-out' }}
            >
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-white/70 mb-4 border border-white/30 px-4 py-1 rounded-full backdrop-blur-sm">
                Aksha Globals Studio
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Create. Produce.
                <span className="block text-white/80 font-black mt-1">Inspire.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Premium video production for Stories, Rhymes &amp; Devotional
                content — crafted with love and shared on YouTube.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const el = document.getElementById('studio-categories')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-8 py-4 bg-white text-m3-primary font-bold rounded-full hover:bg-white/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-center"
                >
                  Browse Videos
                </button>
                <button
                  onClick={() => setView({ mode: 'categories' })}
                  className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/25 transition-all duration-200 border border-white/30 shadow-lg text-center"
                >
                  Explore Categories
                </button>
              </div>
            </div>

            {/* Visual panel — 2×2 category card grid */}
            <div
              className="flex-shrink-0 w-full lg:w-80 xl:w-96"
              style={{ animation: 'studioFadeInRight 0.5s ease-out' }}
            >
              <div className="grid grid-cols-2 gap-4">
                {bannerCards.map(card => {
                  const isCategory = 'id' in card
                  const Wrapper = isCategory ? 'button' : 'div'
                  return (
                    <Wrapper
                      key={card.label}
                      {...(isCategory
                        ? { onClick: () => handleCategoryClick(card.id as 'stories' | 'rhymes' | 'devotional') }
                        : {})}
                      className="bg-white/10 backdrop-blur-md rounded-m3-lg p-5 border border-white/20 text-center hover:bg-white/20 transition-all duration-200 hover:-translate-y-1 shadow-lg"
                    >
                      <div className="text-4xl mb-2">{card.icon}</div>
                      <div className="text-sm font-bold">{card.label}</div>
                      <div className="text-xs text-white/60 mt-1">{card.sub}</div>
                    </Wrapper>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes studioFadeIn {
            from { opacity: 0; transform: translateX(-24px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes studioFadeInRight {
            from { opacity: 0; transform: translateX(24px); }
            to   { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </section>

      {/* Breadcrumb navigation */}
      {view.mode !== 'categories' && (
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
      <div id="studio-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Categories View */}
        {view.mode === 'categories' && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#F9FAFB' }}>
              Browse by <span style={{ color: '#F97316' }}>Category</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="group rounded-2xl p-8 md:p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border-2"
                  style={{
                    backgroundColor: '#111827',
                    borderColor: 'rgba(249,115,22,0.3)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#F97316' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.3)' }}
                >
                  <div className="text-6xl mb-4">{cat.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#F9FAFB' }}>{cat.label}</h3>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>{cat.description}</p>
                  <div
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: '#F97316' }}
                  >
                    Explore
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Playlists View */}
        {view.mode === 'playlists' && (
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
        {view.mode === 'videos' && (
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
        {view.mode === 'player' && (
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

      {/* Footer area */}
      <div className="text-center py-8" style={{ borderTop: '1px solid rgba(249,115,22,0.2)' }}>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          © {new Date().getFullYear()} Aksha Globals Studio. All rights reserved.
        </p>
      </div>
    </div>
  )
}
