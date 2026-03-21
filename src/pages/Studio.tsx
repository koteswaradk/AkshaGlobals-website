import { useState } from 'react'
import SEO from '../components/SEO'
import { playlists, categories, Playlist, Video } from '../data/studioVideos'

type ViewState =
  | { mode: 'categories' }
  | { mode: 'playlists'; category: 'devotional' | 'rhymes' | 'stories' }
  | { mode: 'videos'; playlist: Playlist }
  | { mode: 'player'; playlist: Playlist; video: Video }

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
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #1a1030 100%)' }}
      >
        {/* Floating decorative icon - music note (top-left) */}
        <div
          className="studio-banner-float absolute top-8 left-6 md:left-12 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: '#F97316' }}
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="#F9FAFB" viewBox="0 0 24 24">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6zM10 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
        </div>

        {/* Floating decorative icon - book (right side) */}
        <div
          className="studio-banner-float-delayed absolute bottom-24 right-6 md:right-16 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: 'rgba(249,115,22,0.2)', border: '2px solid rgba(249,115,22,0.4)' }}
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center relative z-10">
          {/* Badge */}
          <div className="studio-banner-fade-up inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
            style={{ backgroundColor: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#F97316" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" />
            </svg>
            <span className="text-sm font-medium" style={{ color: '#F9FAFB' }}>
              Premium Video Production Studio
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="studio-banner-fade-up-delay-1 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 40%, #F9FAFB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Bringing Stories<br />To Life
          </h1>

          {/* Subtitle */}
          <p
            className="studio-banner-fade-up-delay-2 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: '#D1D5DB' }}
          >
            Creating magical moments with animated rhymes, devotional videos, and captivating stories that inspire and entertain
          </p>

          {/* CTA Button */}
          <div className="studio-banner-fade-up-delay-3">
            <button
              onClick={() => {
                const contentEl = document.getElementById('studio-content')
                contentEl?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="studio-banner-pulse inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-shadow duration-300 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #F97316 0%, #EF4444 100%)',
                color: '#F9FAFB',
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Our Work
            </button>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #F97316, #1F2937, #F97316)' }} />
      </div>

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
      <div id="studio-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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
