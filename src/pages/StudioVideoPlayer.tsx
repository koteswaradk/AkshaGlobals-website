import { useParams, Link } from 'react-router-dom'
import { studioVideos } from '../data/studioVideos'
import SEO from '../components/SEO'

export default function StudioVideoPlayer() {
  const { id } = useParams<{ id: string }>()
  const video = studioVideos.find(v => v.id === id)

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-m3-surface dark:bg-m3-dark-surface">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">
            Video Not Found
          </h1>
          <Link to="/studio" className="text-m3-primary hover:underline">
            ← Back to Studio
          </Link>
        </div>
      </div>
    )
  }

  const related = studioVideos
    .filter(v => v.category === video.category && v.id !== video.id)
    .slice(0, 4)

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      <SEO
        title={video.title}
        description={video.description}
        path={`/studio/${video.id}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <Link
          to="/studio"
          className="inline-flex items-center gap-1 text-sm text-m3-primary dark:text-m3-dark-primary hover:underline mb-6"
        >
          ← Back to Studio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
          {/* ── Main player area ───────────────────────────── */}
          <div>
            {/* YouTube embed */}
            <div className="relative w-full aspect-video rounded-m3-xl overflow-hidden shadow-m3-2 bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Video info */}
            <div className="mt-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-m3-primary dark:text-m3-dark-primary">
                {video.category}
              </span>
              <h1 className="text-xl md:text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mt-1 mb-3">
                {video.title}
              </h1>
              <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant leading-relaxed">
                {video.description}
              </p>
              <p className="text-xs text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mt-3">
                Published on {video.publishedAt}
              </p>
            </div>
          </div>

          {/* ── Sidebar: related videos ────────────────────── */}
          <aside>
            <h2 className="text-sm font-bold text-m3-on-surface dark:text-m3-dark-on-surface uppercase tracking-wider mb-4">
              More {video.category} Videos
            </h2>

            {related.length === 0 ? (
              <p className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                No related videos yet.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {related.map(rv => (
                  <Link
                    key={rv.id}
                    to={`/studio/${rv.id}`}
                    className="group flex gap-3 rounded-m3 overflow-hidden hover:bg-m3-surface-container-high dark:hover:bg-m3-dark-surface-container-high transition-colors duration-200 p-1"
                  >
                    <div className="relative w-40 min-w-[10rem] aspect-video rounded-lg overflow-hidden bg-black flex-shrink-0">
                      <img
                        src={`https://img.youtube.com/vi/${rv.youtubeId}/mqdefault.jpg`}
                        alt={rv.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                        <svg
                          className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <h3 className="text-sm font-semibold text-m3-on-surface dark:text-m3-dark-on-surface group-hover:text-m3-primary dark:group-hover:text-m3-dark-primary transition-colors leading-snug line-clamp-2">
                        {rv.title}
                      </h3>
                      <span className="text-xs text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mt-1">
                        {rv.publishedAt}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 bg-m3-primary-container dark:bg-m3-dark-primary-container rounded-m3-xl p-5">
              <h3 className="font-bold text-m3-on-primary-container dark:text-m3-dark-on-primary-container mb-2 text-sm">
                Enjoy our content?
              </h3>
              <p className="text-xs text-m3-on-primary-container/80 dark:text-m3-dark-on-primary-container/80 mb-4 leading-relaxed">
                Subscribe to the Aksha Globals YouTube channel for new devotional chants, rhymes,
                and stories every week.
              </p>
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-m3-primary text-m3-on-primary rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-m3-primary/90"
              >
                Browse All Videos →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
