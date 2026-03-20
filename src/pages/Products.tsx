import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Products() {
  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Discover our suite of powerful mobile and web applications built to solve real-world problems.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-m3-xl shadow-m3-1 overflow-hidden hover:shadow-m3-3 transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row"
            >
              <div className={`bg-gradient-to-br ${product.color} p-6 sm:p-8 flex items-center justify-center min-w-[100px] sm:min-w-[120px]`}>
                <span className="text-4xl sm:text-6xl">{product.icon}</span>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{product.name}</h2>
                    <span className="text-xs bg-m3-surface-container-high dark:bg-m3-dark-surface-container-highest text-m3-on-surface-variant rounded-full px-2 py-0.5">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-m3-primary dark:text-m3-dark-primary text-sm font-medium mb-2">{product.tagline}</p>
                  <p className="text-m3-on-surface-variant text-sm line-clamp-3">{product.description}</p>
                </div>
                <div className="mt-4 flex items-center text-m3-primary dark:text-m3-dark-primary text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
