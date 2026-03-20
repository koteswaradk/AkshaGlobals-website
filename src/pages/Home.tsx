import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { courses } from '../data/courses'
import HeroSlider from '../components/HeroSlider'

const stats = [
  { number: '4+', label: 'Software Products', icon: '🚀' },
  { number: '200K+', label: 'App Downloads', icon: '📲' },
  { number: '4', label: 'Training Courses', icon: '🎓' },
  { number: '5K+', label: 'Students Trained', icon: '👩‍💻' },
]

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats bar */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <span className="text-2xl">{stat.icon}</span>
                <div className="text-3xl md:text-4xl font-extrabold text-teal-600 dark:text-teal-400 leading-none">
                  {stat.number}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Software Products
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Powerful mobile and web applications built for real-world business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${product.color} p-10 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300" />
                  <span className="text-6xl drop-shadow-lg relative z-10">{product.icon}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{product.name}</h3>
                    <span className="text-xs bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-full font-medium whitespace-nowrap ml-2 mt-0.5">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-snug mb-3">{product.tagline}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span>{product.specs.find(s => s.label === 'Rating')?.value ?? ''}</span>
                    <span>{product.specs.find(s => s.label === 'Downloads')?.value ?? ''}{product.specs.find(s => s.label === 'Downloads')?.value ? ' downloads' : ''}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-500 font-bold rounded-xl hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View All Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
              Skill Up
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Training Programs
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Industry-aligned courses designed to fast-track your technology career.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map(course => (
              <Link
                key={course.id}
                to={`/training/${course.id}`}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${course.color} p-10 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300" />
                  <span className="text-6xl drop-shadow-lg relative z-10">{course.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{course.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{course.tagline}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {course.levels.map(l => (
                      <span key={l.name} className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-full font-medium">
                        {l.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/training"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-500 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore All Courses <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              The Aksha Globals Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Proven Excellence',
                desc: 'Trusted by 200K+ users across India with top-rated apps on Play Store and App Store.',
              },
              {
                icon: '⚡',
                title: 'Cutting-Edge Tech',
                desc: 'Products built with the latest technologies ensuring performance, security, and scalability.',
              },
              {
                icon: '🎯',
                title: 'Career-Ready Training',
                desc: 'Hands-on courses designed with industry experts to make you job-ready from day one.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-teal-100 mb-10 text-lg max-w-2xl mx-auto">
            Join thousands of businesses and students who trust Aksha Globals to power their growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/training"
              className="px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              Start Learning Today
            </Link>
            <a
              href="mailto:info@akshaglobals.com"
              className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/25 transition-all duration-200 border border-white/30 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
