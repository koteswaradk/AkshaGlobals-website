import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface">
      <SEO
        title="Aksha Globals"
        description="Aksha Globals builds innovative mobile apps and offers professional training in Android, iOS, GenAI, Prompt Engineering, KMP, and CMP."
        path="/"
      />

      <section className="py-20 bg-m3-surface dark:bg-m3-dark-surface border-t border-m3-outline-variant dark:border-m3-dark-outline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">
            Professional Training Programs
          </h2>
          <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant max-w-2xl mx-auto text-lg mb-8">
            Master the latest technologies with industry-aligned tracks in Android, iOS, GenAI, Prompt Engineering, KMP, and CMP.
          </p>
          <Link
            to="/training"
            className="inline-flex items-center gap-2 px-6 py-3 bg-m3-primary text-m3-on-primary font-semibold rounded-full transition-colors duration-200 hover:bg-m3-primary/90"
          >
            View Training Programs <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
