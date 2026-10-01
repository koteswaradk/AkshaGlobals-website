import SEO from '../components/SEO'
import HeroSlider from '../components/HeroSlider'
import { capabilities } from '../data/capabilities'

const emergencyFeatures = [
  'Emergency medical care coordination and first-response guidance',
  'Nearby hospital, clinic, pharmacy, and urgent-care discovery',
  'Location-based service search with distance and availability filters',
  'ICE profile, emergency contacts, and quick access to critical info',
]

const nearbyServiceCards = [
  {
    name: 'Emergency Care',
    detail: 'Critical care locator',
    icon: '🚑',
  },
  {
    name: 'Hospitals',
    detail: 'Nearest facilities',
    icon: '🏥',
  },
  {
    name: 'Pharmacies',
    detail: '24/7 medicines',
    icon: '💊',
  },
  {
    name: 'Ambulance',
    detail: 'Fast dispatch',
    icon: '🚐',
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

      <section className="relative overflow-hidden bg-[#020b1a] px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(90,91,255,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(22,163,74,0.12),_transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300/80">
              Our Core Capabilities
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology That Turns{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Ideas Into Products
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg text-slate-300">
              We combine modern mobile engineering, AI systems, automation and scalable architecture to create products designed for real-world growth.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {capabilities.map(card => (
              <article
                key={card.id}
                className="group relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(12,22,45,0.9),rgba(8,15,29,0.95))] p-5 shadow-[0_0_30px_rgba(36,99,235,0.12)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10`} />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-slate-900/60 text-2xl shadow-[0_0_18px_rgba(56,189,248,0.28)]">
                      {card.icon}
                    </div>
                    <span className="rounded-full border border-cyan-400/30 bg-sky-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      {card.tagline}
                    </span>
                  </div>

                  <h3 className="mb-3 text-3xl font-bold leading-tight text-white">{card.title}</h3>
                  <p className="mb-5 text-sm leading-6 text-slate-300">{card.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {card.features.map(feature => (
                      <span
                        key={feature}
                        className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium text-sky-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {card.technologies.map(tech => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-600 bg-slate-950/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#020b1a] px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-cyan-400/20 bg-[radial-gradient(circle_at_left,_rgba(14,165,233,0.18),_transparent_28%),linear-gradient(180deg,rgba(9,16,30,0.98),rgba(7,12,20,1))] p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300/80">
                Upcoming Product
              </p>
              <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Emergency Medical Care & Nearby Services
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                A location-aware health support platform designed to connect users with emergency care, nearest doctors, hospitals, pharmacies, and urgent response services in seconds.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {emergencyFeatures.map(feature => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/50 p-4">
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                      ✓
                    </div>
                    <p className="text-sm leading-6 text-slate-200">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400">
                  Request Emergency Support
                </button>
                <button className="rounded-full border border-cyan-400/40 bg-slate-900/60 px-6 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-300 hover:bg-slate-800">
                  Find Nearby Services
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[30px] border border-cyan-500/20 bg-slate-950/60 p-4 shadow-[0_0_32px_rgba(34,211,238,0.16)]">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
                  alt="Emergency medical care and healthcare services"
                  className="h-[420px] w-full rounded-[22px] object-cover"
                />

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {nearbyServiceCards.map(card => (
                    <div key={card.name} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
                      <div className="mb-2 text-2xl">{card.icon}</div>
                      <div className="text-sm font-bold text-white">{card.name}</div>
                      <div className="text-[11px] text-slate-400">{card.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
