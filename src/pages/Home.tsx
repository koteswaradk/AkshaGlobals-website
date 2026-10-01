import SEO from '../components/SEO'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <div className="bg-[#020b1a] text-white">
      <SEO
        title="Aksha Globals"
        description="Aksha Globals builds innovative mobile apps and offers professional training in Android, iOS, GenAI, Prompt Engineering, KMP, and CMP."
        path="/"
      />

      <HeroSlider />

      <section className="bg-[#020b1a] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[#041426] shadow-[0_0_40px_rgba(34,211,238,0.12)]">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
            alt="Aksha Globals capabilities overview"
            className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[650px]"
          />
        </div>
      </section>
    </div>
  )
}
