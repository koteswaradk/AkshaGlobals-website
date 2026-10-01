import SEO from '../components/SEO'
import HeroSlider from '../components/HeroSlider'

const baseUrl = import.meta.env.BASE_URL || '/'

const upcomingProducts = [
  {
    name: 'Emergency Medical Care',
    tag: 'Urgent Care & First Response',
    description:
      'Location-aware emergency support to connect users with nearby hospitals, clinics, pharmacies, and ambulance services in seconds.',
    points: [
      'Emergency medical assistance and first-response guidance',
      'Nearby hospital, clinic and pharmacy discovery',
      'Quick access to critical health profile and ICE information',
    ],
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'NearServe',
    tag: 'Local Services. Trusted Professionals.',
    description:
      'A digital marketplace for local service discovery, trusted providers, bookings, payment flows, and backend management for service businesses.',
    points: [
      'User app for service discovery and booking',
      'Provider app for scheduling, availability and payouts',
      'Admin web dashboard for operations and payments',
    ],
    accent: 'from-emerald-500 to-teal-500',
  },
]

export default function Home() {
  return (
    <div className="bg-[#020b1a] text-white">
      <SEO
        title="Aksha Globals"
        description="Aksha Globals builds innovative mobile apps and offers professional training in Android, iOS, GenAI, Prompt Engineering, KMP, and CMP."
        path="/"
      />

      <HeroSlider />

      <section className="bg-[#020b1a] px-4 py-10 sm:px-6 lg:px-8" aria-label="Our core capabilities">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[#041426] shadow-[0_0_40px_rgba(34,211,238,0.12)]">
          <img
            src={`${baseUrl}capabilites.png`}
            alt="Aksha Globals core capabilities"
            className="block h-auto w-full object-contain"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-[#020b1a] px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300/80">Upcoming Products</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built for real-world <span className="text-cyan-300">needs</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {upcomingProducts.map(product => (
              <article
                key={product.name}
                className="overflow-hidden rounded-[30px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),transparent_30%),linear-gradient(180deg,#071827,#0a1525)] shadow-[0_0_35px_rgba(34,211,238,0.12)]"
              >
                <div className={`h-2 bg-gradient-to-r ${product.accent}`} />

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">{product.tag}</p>
                      <h3 className="mt-2 text-3xl font-black text-white">{product.name}</h3>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-xl font-black text-white shadow-[0_0_20px_rgba(34,211,238,0.25)]`}>
                      {product.name === 'Emergency Medical Care' ? '🚑' : '📍'}
                    </div>
                  </div>

                  <p className="mb-6 text-base leading-7 text-slate-300">{product.description}</p>

                  <div className="space-y-3">
                    {product.points.map(point => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/40 p-3">
                        <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-xs font-bold text-cyan-300">
                          ✓
                        </span>
                        <p className="text-sm leading-6 text-slate-200">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
