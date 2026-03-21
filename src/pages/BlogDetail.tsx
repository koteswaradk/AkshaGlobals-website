import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import SEO from '../components/SEO'

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-m3-surface dark:bg-m3-dark-surface">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-m3-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 3)

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
      />

      {/* Hero */}
      <div className={`bg-gradient-to-br ${post.color} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="text-white/80 hover:text-white text-sm mb-6 inline-flex items-center gap-1">
            ← All Posts
          </Link>
          <div className="mt-4">
            <span className="text-xs font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-0.5 rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-3 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="font-medium text-white">{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main content */}
          <article className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant leading-relaxed text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Tags */}
            <div>
              <h3 className="text-sm font-bold text-m3-on-surface dark:text-m3-dark-on-surface uppercase tracking-wider mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs bg-m3-surface-container-high dark:bg-m3-dark-surface-container-highest text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-m3-primary-container dark:bg-m3-dark-primary-container rounded-m3-xl p-5">
              <h3 className="font-bold text-m3-on-primary-container dark:text-m3-dark-on-primary-container mb-2 text-sm">
                Ready to learn?
              </h3>
              <p className="text-xs text-m3-on-primary-container/80 dark:text-m3-dark-on-primary-container/80 mb-4 leading-relaxed">
                Explore our professional training programs and start building real-world skills today.
              </p>
              <Link
                to="/training"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-[#F97316] text-white rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-[#EA580C]"
              >
                View Training Programs →
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-m3-outline-variant dark:border-m3-dark-outline">
            <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-8">
              More from the Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(article => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="group bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-m3-xl overflow-hidden shadow-sm hover:shadow-xl border border-m3-outline-variant transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className={`bg-gradient-to-br ${article.color} px-5 py-5 text-white`}>
                    <span className="text-xs font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm border border-white/30 px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <div className="text-4xl mt-3 drop-shadow">{article.icon}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-sm font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-2 group-hover:text-m3-primary dark:group-hover:text-m3-dark-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <div className="mt-auto pt-3 text-xs text-m3-on-surface-variant">
                      {article.date} · {article.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
