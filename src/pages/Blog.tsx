import { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import SEO from '../components/SEO'

const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter(p => p.category === activeCategory)

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      <SEO
        title="Blog"
        description="Insights, tutorials, and tech articles from Aksha Globals — covering Android, iOS, Generative AI, Prompt Engineering, and career growth."
        path="/blog"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-m3-primary-10 to-m3-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights &amp; Blog</h1>
          <p className="text-m3-primary-container text-lg max-w-2xl mx-auto">
            Tutorials, technical deep-dives, and career advice from the Aksha Globals team
          </p>
        </div>
      </div>

      {/* Category filter */}
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

      {/* Blog grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(article => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-m3-xl overflow-hidden shadow-sm hover:shadow-xl border border-m3-outline-variant transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Colored header banner */}
              <div className={`bg-gradient-to-br ${article.color} px-6 py-7 text-white`}>
                <span className="text-xs font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-0.5 rounded-full">
                  {article.category}
                </span>
                <div className="text-5xl mt-4 mb-1 drop-shadow">{article.icon}</div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-extrabold text-m3-on-surface dark:text-m3-dark-on-surface mb-3 group-hover:text-m3-primary dark:group-hover:text-m3-dark-primary transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant text-sm leading-relaxed mb-5 flex-1">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="text-xs bg-m3-surface-container-high dark:bg-m3-dark-surface-container-highest text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-m3-outline-variant text-xs text-m3-on-surface-variant">
                  <span className="font-medium">{article.author}</span>
                  <div className="flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
