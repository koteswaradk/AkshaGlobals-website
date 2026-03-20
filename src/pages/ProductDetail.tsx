import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'

const PlayStoreIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.199a1 1 0 0 1 0 1.717L15.396 14.7 12.79 12l2.608-2.701 2.3 1.409zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/>
  </svg>
)

const AppStoreIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-m3-surface dark:bg-m3-dark-surface">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <Link to="/products" className="text-m3-primary hover:underline">← Back to Products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${product.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="text-white/80 hover:text-white text-sm mb-6 inline-flex items-center gap-1">
            ← All Products
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            <div className="text-6xl md:text-8xl">{product.icon}</div>
            <div>
              <span className="text-white/70 text-sm font-medium uppercase tracking-wider">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-1 mb-2">{product.name}</h1>
              <p className="text-xl text-white/90">{product.tagline}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={product.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-200 text-sm font-semibold"
                >
                  <PlayStoreIcon />
                  Get on Google Play
                </a>
                <a
                  href={product.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-200 text-sm font-semibold"
                >
                  <AppStoreIcon />
                  Download on App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">About {product.name}</h2>
              <p className="text-m3-on-surface-variant leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-m3-surface-container dark:bg-m3-dark-surface-container rounded-m3">
                    <span className="text-m3-primary font-bold mt-0.5">✓</span>
                    <span className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specs Sidebar */}
          <div>
            <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">Specifications</h2>
            <div className="bg-m3-surface-container dark:bg-m3-dark-surface-container rounded-m3-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-m3-surface-container-lowest' : 'bg-m3-surface-container'}>
                      <td className="px-4 py-3 text-sm font-medium text-m3-on-surface-variant">{spec.label}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-m3-on-surface dark:text-m3-dark-on-surface">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={product.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-4 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full transition-colors duration-200 font-semibold"
              >
                <PlayStoreIcon />
                Google Play Store
              </a>
              <a
                href={product.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors duration-200 font-semibold"
              >
                <AppStoreIcon />
                Apple App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
