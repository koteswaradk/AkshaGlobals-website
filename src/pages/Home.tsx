import SEO from '../components/SEO'
import HeroSlider from '../components/HeroSlider'

const baseUrl = import.meta.env.BASE_URL || '/'

const upcomingProducts = [
  {
    id: 'emergency-medical-care',
    name: 'Emergency Medical Care',
    subtitle: 'Urgent Care & First Response',
    description:
      'A location-aware emergency support platform that connects users with nearby hospitals, clinics, pharmacies, and ambulance services instantly. Built for fast decisions, real-time guidance, and high-trust support in critical moments.',
    icon: `${baseUrl}product-icons/em.png`,
    badge: 'Coming Soon',
    features: [
      'Emergency assistance and first-response guidance',
      'Nearby hospital, pharmacy and clinic discovery',
      'ICE profile and critical medical detail access',
      'Ambulance dispatch coordination and status tracking',
    ],
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)',
    border: 'rgba(239, 68, 68, 0.35)',
    glow: 'rgba(239, 68, 68, 0.22)',
  },
  {
    id: 'nearserve',
    name: 'NearServe',
    subtitle: 'Local Services. Trusted Professionals.',
    description:
      'A modern marketplace for local services that connects customers with reliable professionals, simplifies booking, streamlines payments, and helps service businesses operate more efficiently at scale.',
    icon: `${baseUrl}product-icons/emm.png`,
    badge: 'In Development',
    features: [
      'User app for discovery, booking and service requests',
      'Provider app for availability, schedule and earnings',
      'Admin dashboard for managing operations and payments',
      'Multi-currency payment flow and settlement tracking',
    ],
    gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
    border: 'rgba(16, 185, 129, 0.35)',
    glow: 'rgba(16, 185, 129, 0.2)',
  },
  {
    id: 'voicetranslate-pro',
    name: 'VoiceTranslate Pro',
    subtitle: 'Multilingual Voice-to-Text Conversion',
    description:
      'A premium voice-to-text solution built for global communication, supporting 50+ languages with intelligent transcription, real-time translation, and enterprise-grade accuracy for modern teams.',
    icon: `${baseUrl}product-icons/voxflow.png`,
    badge: 'Planning Phase',
    features: [
      'Real-time transcription across 50+ languages',
      'AI-powered language detection and auto switching',
      'Context-aware formatting for meetings and notes',
      'Secure cloud storage and offline-ready workflows',
    ],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    border: 'rgba(139, 92, 246, 0.35)',
    glow: 'rgba(139, 92, 246, 0.22)',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020b1a] text-white">
      <SEO
        title="Aksha Globals"
        description="Aksha Globals builds innovative mobile apps and offers professional training in Android, iOS, GenAI, Prompt Engineering, KMP, and CMP."
        path="/"
      />

      <HeroSlider />

      <section
        className="bg-[#020b1a] px-4 py-10 sm:px-6 lg:px-8"
        aria-label="Our core capabilities"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[#041426] shadow-[0_0_40px_rgba(34,211,238,0.12)]">
          <img
            src={`${baseUrl}capabilites.png`}
            alt="Aksha Globals core capabilities"
            className="block h-auto w-full object-contain"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-[#020b1a] px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300/80">
              Upcoming Products
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Innovation Beyond{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Boundaries
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Transforming ideas into powerful solutions that solve real-world problems
              with a global, professional, and human-centered approach.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {upcomingProducts.map(product => (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-[32px] transition-transform duration-500 hover:-translate-y-1"
                style={{
                  background:
                    'radial-gradient(circle at left, rgba(14,165,233,0.12), transparent 32%), linear-gradient(180deg, rgba(9,16,30,0.98), rgba(7,12,20,1))',
                  border: `1px solid ${product.border}`,
                  boxShadow: `0 0 35px ${product.glow}`,
                }}
              >
                <div
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: product.gradient }}
                />

                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="w-full lg:w-[38%] lg:shrink-0">
                      <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/25 bg-slate-950/65 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_40px_rgba(2,6,23,0.55)] sm:p-5">
                        <div
                          className="pointer-events-none absolute inset-0 opacity-20"
                          style={{ background: product.gradient }}
                        />
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-cyan-300/20 bg-[linear-gradient(160deg,rgba(15,23,42,0.9),rgba(2,6,23,0.98))]">
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_60%)]" />
                          {product.icon.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i) ? (
                            <img
                              src={product.icon}
                              alt={`${product.name} preview`}
                              className="relative z-10 h-full w-full object-contain p-4 sm:p-6"
                              loading="lazy"
                            />
                          ) : (
                            <span className="relative z-10 flex h-full w-full items-center justify-center text-5xl">
                              {product.icon}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="mt-5 hidden text-base leading-7 text-slate-300 lg:block">
                        {product.description}
                      </p>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300/80">
                          Upcoming Product
                        </p>
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
                          {product.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {product.subtitle}
                      </p>
                      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 lg:hidden">
                        {product.description}
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {product.features.map(feature => (
                          <div
                            key={feature}
                            className="flex min-h-24 items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4"
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-xs font-bold text-cyan-300">
                              ✓
                            </span>
                            <p className="text-sm leading-6 text-slate-200">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[28px] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.10),rgba(59,130,246,0.08))] px-8 py-10 text-center sm:px-10 sm:py-12">
            <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Want to be part of our innovation journey?
            </h3>
            <p className="mx-auto max-w-2xl text-slate-300">
              We build the next generation of experiences that improve lives, simplify
              business operations, and solve real-world challenges globally.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}
