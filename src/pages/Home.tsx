import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { courses } from '../data/courses'

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Innovate. Learn.
              <span className="block text-teal-100">Transform.</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Aksha Globals delivers world-class software products and technology training to empower businesses and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition-colors duration-200 shadow-lg"
              >
                Explore Products
              </Link>
              <Link
                to="/training"
                className="px-8 py-4 bg-teal-800 text-white font-bold rounded-xl hover:bg-teal-900 transition-colors duration-200 shadow-lg border border-teal-400"
              >
                View Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '4+', label: 'Software Products' },
              { number: '200K+', label: 'App Downloads' },
              { number: '4', label: 'Training Courses' },
              { number: '5K+', label: 'Students Trained' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Products</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful mobile and web applications built for real-world business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${product.color} p-8 text-center`}>
                  <span className="text-5xl">{product.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{product.name}</h3>
                  <p className="text-teal-600 dark:text-teal-400 text-sm">{product.tagline}</p>
                  <span className="inline-block mt-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block px-6 py-3 border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 font-semibold rounded-xl hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 transition-all duration-200"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Training Programs</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Industry-aligned courses designed to fast-track your technology career.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map(course => (
              <Link
                key={course.id}
                to={`/training/${course.id}`}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${course.color} p-8 text-center`}>
                  <span className="text-5xl">{course.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{course.name}</h3>
                  <p className="text-teal-600 dark:text-teal-400 text-sm">{course.tagline}</p>
                  <div className="mt-3 flex gap-1 flex-wrap">
                    {course.levels.map(l => (
                      <span key={l.name} className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-full">
                        {l.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/training"
              className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-500 transition-colors duration-200"
            >
              Explore All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Join thousands of businesses and students who trust Aksha Globals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/training"
              className="px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-500 transition-colors duration-200"
            >
              Start Learning Today
            </Link>
            <a
              href="mailto:info@akshaglobals.com"
              className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
