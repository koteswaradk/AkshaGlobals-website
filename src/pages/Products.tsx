import { Link } from 'react-router-dom'
import { products } from '../data/products'
import SEO from '../components/SEO'

export default function Products() {
  const uniqueCategories = [...new Set(products.map(product => product.category))]

  return (
    <div className="min-h-screen bg-[#020b1a] text-white">
      <SEO
        title="Our Products"
        description="Discover Aksha Globals' suite of powerful mobile and web applications built to solve real-world problems."
        path="/products"
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300/90">
              Aksha Globals Products
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Solutions Built for{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Real-World Impact
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Explore our modern suite of mobile products crafted around safety, wellness, communication, and everyday utility.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/55 p-5 text-center">
              <p className="text-3xl font-black text-cyan-300">{products.length}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Products</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/55 p-5 text-center">
              <p className="text-3xl font-black text-cyan-300">{uniqueCategories.length}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Categories</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/55 p-5 text-center">
              <p className="text-3xl font-black text-cyan-300">24/7</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Global Access</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => {
            const featureImage = product.featureImage ?? product.icon
            const hasFeatureImage = Boolean(featureImage && featureImage.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i))
            const hasIconImage = Boolean(product.icon && product.icon.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i))

            return (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[linear-gradient(160deg,rgba(10,25,47,0.95),rgba(2,8,20,0.95))] shadow-[0_20px_45px_rgba(2,6,23,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_24px_60px_rgba(6,182,212,0.3)]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="relative p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/90">
                    {product.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-300/90">Mobile App</span>
                </div>

                <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${product.color} p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-slate-900/70">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]" />
                    {hasFeatureImage ? (
                      <img src={featureImage} alt={`${product.name} feature`} className="h-full w-full object-cover" />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-6xl sm:text-6xl">{product.icon || ''}</span>
                    )}

                    <div className="absolute left-3 top-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-slate-950/85 p-1.5 shadow-[0_8px_20px_rgba(2,6,23,0.45)]">
                      {hasIconImage ? (
                        <img src={product.icon} alt={`${product.name} icon`} className="h-full w-full object-contain" />
                      ) : (
                        <span className="text-xl">{product.icon || ''}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative border-t border-cyan-500/15 p-6 pt-5">
                <h2 className="text-2xl font-black tracking-tight text-white">{product.name}</h2>
                <p className="mt-2 text-sm font-medium text-cyan-200/95">{product.tagline}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-300/95">{product.description}</p>

                <ul className="mt-5 space-y-2">
                  {product.features.slice(0, 2).map(feature => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-200/90">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all duration-200 group-hover:gap-3">
                  Explore Product <span aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
