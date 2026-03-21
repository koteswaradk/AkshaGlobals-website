import { useState } from 'react'
import { Link } from 'react-router-dom'
import { studioVideos } from '../data/studioVideos'
import SEO from '../components/SEO'

const categories = ['All', 'Devotional', 'Rhymes', 'Stories'] as const

export default function Studio() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered =
    activeCategory === 'All'
      ? studioVideos
      : studioVideos.filter(v => v.category === activeCategory)

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      <SEO
        title="Studio"
        description="Aksha Globals Studio — watch devotional chants, fun rhymes, and inspiring stories on our video channel."
        path="/studio"
      />

      {/* ── Banner ────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-m3-primary-10 to-m3-primary text-white py-16 overflow-hidden">
        {/* Decorative film-strip / play-button background element */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
          <svg
            className="w-72 h-72"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1 rounded-full mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            Video Production
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aksha Globals Studio</h1>
          <p className="text-m3-primary-container text-lg max-w-2xl mx-auto">
            Handcrafted videos — from soulful devotional chants to fun-filled rhymes and captivating
            stories — produced and shared on our YouTube channel.
          </p>
        </div>
      </div>

      {/* ── Category filter ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? 'bg-m3-primary text-m3-on-primary'
                  : 'bg-m3-surface-container-high dark:bg-m3-dark-surface-container-high text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant hover:bg-m3-primary-container dark:hover:bg-m3-dark-primary-container'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Video grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <p className="text-center text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
            No videos found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(video => (
              <Link
                key={video.id}
                to={`/studio/${video.id}`}
                className="group bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-m3-xl overflow-hidden shadow-sm hover:shadow-xl border border-m3-outline-variant transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-black">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                    <svg
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-m3-primary dark:text-m3-dark-primary mb-1">
                    {video.category}
                  </span>
                  <h2 className="text-sm font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-1 group-hover:text-m3-primary dark:group-hover:text-m3-dark-primary transition-colors leading-snug line-clamp-2">
                    {video.title}
                  </h2>
                  <p className="text-xs text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant leading-relaxed line-clamp-2 flex-1">
                    {video.description}
                  </p>
                  <span className="text-xs text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mt-2">
                    {video.publishedAt}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
