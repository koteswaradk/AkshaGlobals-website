import { Link } from 'react-router-dom'
import { Product } from '../data/products'

interface FirstProductCardProps {
  product: Product
}

export default function FirstProductCard({ product }: FirstProductCardProps) {
  return (
    <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-800">
      {/* Left accent bar */}
      <div className="flex">
        <div className="w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>
        
        <div className="flex-1">
          {/* Top section with images and title */}
          <div className="flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-8 bg-gradient-to-r from-slate-800 to-slate-700">
            {/* Small left image */}
            <div className="flex-shrink-0 w-24 h-24">
              <div className="w-24 h-24 rounded-2xl border-2 border-purple-600 overflow-hidden bg-slate-700">
                {product.icon && product.icon.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i) ? (
                  <img src={product.icon} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">{product.icon || ''}</div>
                )}
              </div>
            </div>

            {/* Center title and tagline */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center justify-start gap-3 mb-3">
                <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                <span className="text-xs bg-slate-700 text-purple-400 rounded-full px-3 py-1 flex items-center gap-1.5 border border-purple-600/30 whitespace-nowrap">
                  <span>🙏</span>
                  {product.category}
                </span>
              </div>
              <p className="text-amber-200 text-sm font-medium">{product.tagline}</p>
            </div>

            {/* Large right image - Hidden on small screens */}
            <div className="flex-shrink-0 w-40 h-40 hidden lg:block">
              <div className="w-40 h-40 rounded-2xl overflow-hidden bg-slate-700 border-2 border-amber-400/20 relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 via-transparent to-transparent pointer-events-none"></div>
                {product.largeImage && product.largeImage.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i) ? (
                  <img src={product.largeImage} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">{product.icon || ''}</div>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-6 sm:px-8 py-4 bg-slate-800">
            <p className="text-slate-300 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Features grid */}
          {product.featureDetails && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-6 sm:px-8 py-6 bg-slate-800 border-t border-slate-700">
              {product.featureDetails.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-slate-700/50 border border-slate-600/30 hover:border-purple-600/50 transition-colors"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-slate-400 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Bottom section with testimonial and stats */}
          <div className="px-6 sm:px-8 py-6 bg-slate-800 border-t border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Testimonial */}
            <div className="flex items-center gap-3">
              <span className="text-2xl text-amber-400">"</span>
              <div>
                {product.testimonial && (
                  <p className="text-amber-400 font-bold text-lg">{product.testimonial}</p>
                )}
                <div className="h-0.5 w-12 bg-gradient-to-r from-amber-400 to-transparent mt-1"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 sm:gap-8">
              {product.stats && product.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    {stat.label === 'Happy Devotees' && <span className="text-lg">👥</span>}
                    {stat.label === 'App Rating' && <span className="text-lg">⭐</span>}
                    <span className="text-white font-bold text-lg">{stat.value}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1 whitespace-nowrap">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to={`/products/${product.id}`}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition-all duration-200 hover:gap-3 whitespace-nowrap"
            >
              View Details
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
