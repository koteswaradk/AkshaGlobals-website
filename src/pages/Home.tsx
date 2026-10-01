import SEO from '../components/SEO'
import HeroSlider from '../components/HeroSlider'

const baseUrl = import.meta.env.BASE_URL || '/'

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
    </div>
  )
}
