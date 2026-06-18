import SEO from '../components/SEO'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface">
      <SEO
        title="Aksha Globals"
        description="Aksha Globals builds innovative mobile apps and offers professional training in Android, iOS, GenAI, Prompt Engineering, KMP, and CMP."
        path="/"
      />

      <HeroSlider />
    </div>
  )
}
