import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import SEO from '../components/SEO'

const PlayStoreIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.199a1 1 0 0 1 0 1.717L15.396 14.7 12.79 12l2.608-2.701 2.3 1.409zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
  </svg>
)

const AppStoreIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === id)
  const hasProductImage = Boolean(product?.icon && product.icon.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i))

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-m3-surface dark:bg-m3-dark-surface">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">Product Not Found</h1>
          <Link to="/products" className="text-m3-primary hover:underline">← Back to Products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020b1a] text-white">
      <SEO
        title={product.name}
        description={product.description}
        path={`/products/${product.id}`}
      />

      <section className={`bg-gradient-to-br ${product.color} py-16`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white">
            ← All Products
          </Link>

          <div className="mt-6 grid gap-8 rounded-[28px] border border-white/15 bg-slate-950/45 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.45)] backdrop-blur-sm md:grid-cols-2 md:p-10">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {product.category}
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">{product.name}</h1>
              <p className="mt-3 text-lg font-medium text-cyan-100/95">{product.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-slate-200/90">{product.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={product.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                >
                  <PlayStoreIcon />
                  Get on Google Play
                </a>
                <a
                  href={product.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  <AppStoreIcon />
                  Download on App Store
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/30 bg-[linear-gradient(165deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_50px_rgba(2,6,23,0.65)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_60%)]" />
              <div className="relative z-10">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200/80">Feature Image</p>
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-cyan-200/20 bg-slate-950/70 p-5">
                  {hasProductImage ? (
                    <img src={product.icon} alt={`${product.name} feature preview`} className="h-full w-full object-contain" />
                  ) : (
                    <span className="text-7xl">{product.icon || ''}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-cyan-400/15 bg-slate-900/65 p-6 shadow-[0_18px_45px_rgba(2,6,23,0.55)]">
              <h2 className="text-2xl font-bold text-white">About {product.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{product.description}</p>
            </div>

            <div className="rounded-3xl border border-cyan-400/15 bg-slate-900/65 p-6 shadow-[0_18px_45px_rgba(2,6,23,0.55)]">
              <h2 className="text-2xl font-bold text-white">Key Features</h2>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-cyan-300/10 bg-slate-950/60 p-3">
                    <span className="mt-0.5 text-cyan-300">✓</span>
                    <span className="text-sm text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/15 bg-slate-900/65 p-6 shadow-[0_18px_45px_rgba(2,6,23,0.55)]">
            <h2 className="text-2xl font-bold text-white">Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/50">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-900/55' : 'bg-slate-950/70'}>
                      <td className="px-4 py-3 text-sm font-medium text-slate-400">{spec.label}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-white">{spec.value}</td>
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
                className="flex w-full items-center gap-3 rounded-full bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition-colors duration-200 hover:bg-cyan-400"
              >
                <PlayStoreIcon />
                Google Play Store
              </a>
              <a
                href={product.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/20"
              >
                <AppStoreIcon />
                Apple App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
