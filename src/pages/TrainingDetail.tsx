import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import type { CourseLevel } from '../data/courses'
import PaymentModal from '../components/PaymentModal'
import SEO from '../components/SEO'

const detailPageGradients: Record<string, string> = {
  'android-dev': 'from-m3-primary-20 via-m3-primary to-m3-primary-50',
  internship: 'from-m3-secondary-20 via-m3-secondary to-m3-secondary-30',
  'genai-ml': 'from-m3-tertiary-20 via-m3-tertiary to-m3-tertiary-30',
  'prompt-engineering': 'from-m3-primary-20 via-m3-tertiary-30 to-m3-primary',
  'kmp-dev': 'from-m3-primary-20 via-m3-primary-30 to-m3-secondary-30',
  'cmp-dev': 'from-m3-tertiary-20 via-m3-primary-30 to-m3-tertiary-30',
}

const internshipHeroImage = 'https://github.com/user-attachments/assets/5bcf305a-fa6a-4c1e-afac-6cd08e2ce124'

function formatPrice(price: number) {
  return price === 0 ? 'Free' : `₹${price.toLocaleString()}`
}

export default function TrainingDetail() {
  const { id } = useParams<{ id: string }>()
  const course = courses.find(item => item.id === id)
  const [activeLevel, setActiveLevel] = useState<string>('')
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | null>(null)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-m3-surface dark:bg-m3-dark-surface">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">Course Not Found</h1>
          <Link to="/training" className="text-m3-primary hover:underline">← Back to Training</Link>
        </div>
      </div>
    )
  }

  const currentLevel = course.levels.find(level => level.name === activeLevel) ?? course.levels[0]
  const isInternship = course.id === 'internship'

  const handleRegister = (level: CourseLevel) => {
    setSelectedLevel(level)
    setPaymentOpen(true)
  }

  return (
    <div className="min-h-screen bg-m3-surface dark:bg-m3-dark-surface">
      <SEO title={course.name} description={course.description} path={`/training/${course.id}`} />

      <section className={`bg-gradient-to-br ${detailPageGradients[course.id] ?? course.color} text-white`}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Link to="/training" className="inline-flex text-sm font-medium text-white/85 transition hover:text-white">← Back to all programs</Link>

          {isInternship && (
            <div className="mt-6 overflow-hidden rounded-m3-2xl border border-white/20 bg-black/20 shadow-m3-3">
              <img
                src={internshipHeroImage}
                alt="Build Your Future with Internship program banner"
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>
          )}

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Professional Program</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{course.name}</h1>
              <p className="mt-3 text-lg text-white/90">{course.tagline}</p>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">{course.description}</p>
            </div>

            <div className="rounded-m3-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <div className="text-sm text-white/80">Trusted by learners globally</div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  ['Learners', course.students],
                  ['Rating', `${course.rating}/5`],
                  ['Levels', String(course.levels.length)],
                  ['Mentor', course.instructor],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-m3-lg bg-white/10 p-3">
                    <div className="text-[11px] uppercase tracking-wide text-white/70">{label}</div>
                    <div className="mt-1 text-sm font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {course.levels.map(level => {
            const isActive = currentLevel.name === level.name
            return (
              <button
                key={level.name}
                type="button"
                onClick={() => setActiveLevel(level.name)}
                className={`rounded-m3-xl border p-5 text-left transition ${
                  isActive
                    ? 'border-m3-primary bg-m3-primary-container/40 shadow-m3-1 dark:border-m3-dark-primary'
                    : 'border-m3-outline-variant bg-m3-surface-container-lowest hover:border-m3-primary/60 dark:border-m3-dark-outline dark:bg-m3-dark-surface-container-high'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{level.name}</h2>
                    <p className="mt-1 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">{level.duration}</p>
                  </div>
                  <p className="text-base font-bold text-m3-primary dark:text-m3-dark-primary">{formatPrice(level.price)}</p>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                  {level.curriculum.slice(0, 3).map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-m3-primary dark:text-m3-dark-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </button>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          <article className="rounded-m3-2xl border border-m3-outline-variant bg-m3-surface-container-lowest p-6 dark:border-m3-dark-outline dark:bg-m3-dark-surface-container-high sm:p-8">
            <h3 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{currentLevel.name} Curriculum</h3>
            <p className="mt-2 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              Structured learning journey designed for practical skill development and real-world application.
            </p>

            <div className="mt-6 space-y-3">
              {currentLevel.curriculum.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-m3-lg border border-m3-outline-variant bg-m3-surface-container p-3 dark:border-m3-dark-outline dark:bg-m3-dark-surface-container">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-m3-primary-container text-xs font-bold text-m3-primary dark:bg-m3-dark-primary-container dark:text-m3-dark-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-m3-on-surface dark:text-m3-dark-on-surface">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-m3-2xl border border-m3-outline-variant bg-m3-surface-container-low p-6 shadow-m3-2 dark:border-m3-dark-outline dark:bg-m3-dark-surface-container sm:p-7 lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">Enrollment</h3>
            <p className="mt-2 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">{currentLevel.duration} guided track · {currentLevel.curriculum.length} modules</p>

            <div className="mt-5 rounded-m3-xl bg-m3-surface px-4 py-5 text-center dark:bg-m3-dark-surface">
              <p className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Program fee</p>
              <p className="mt-2 text-3xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{formatPrice(currentLevel.price)}</p>
            </div>

            <div className="mt-5 space-y-2 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              <p>✓ Curriculum aligned to industry outcomes</p>
              <p>✓ Mentor-supported practical learning</p>
              <p>✓ Certificate on successful completion</p>
              <p>✓ Project-focused hands-on experience</p>
            </div>

            {isInternship ? (
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:infoakshaglobal@gmail.com?subject=Internship%20Request%20-%20Aksha%20Globals"
                  className="block w-full rounded-full bg-m3-primary px-5 py-3 text-center text-sm font-semibold text-m3-on-primary transition hover:bg-m3-primary/90"
                >
                  Apply via Email
                </a>
                <Link
                  to="/contact"
                  className="block w-full rounded-full border border-m3-outline px-5 py-3 text-center text-sm font-semibold text-m3-on-surface transition hover:bg-m3-surface-container"
                >
                  Contact Admissions
                </Link>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => handleRegister(currentLevel)}
                  className="mt-6 w-full rounded-full bg-m3-primary px-5 py-3 text-sm font-semibold text-m3-on-primary transition hover:bg-m3-primary/90"
                >
                  Register &amp; Pay
                </button>

                <div className="mt-4 space-y-2">
                  {course.levels.map(level => (
                    <button
                      key={level.name}
                      type="button"
                      onClick={() => handleRegister(level)}
                      className="flex w-full items-center justify-between rounded-m3 px-3 py-2 text-sm text-m3-on-surface-variant transition hover:bg-m3-surface-container hover:text-m3-on-surface dark:text-m3-dark-on-surface-variant dark:hover:bg-m3-dark-surface-container"
                    >
                      <span>{level.name}</span>
                      <span>{formatPrice(level.price)} · Enroll</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </aside>
        </div>
      </section>

      {!isInternship && selectedLevel && (
        <PaymentModal
          isOpen={paymentOpen}
          onClose={() => setPaymentOpen(false)}
          courseName={course.name}
          level={selectedLevel.name}
          price={selectedLevel.price}
        />
      )}
    </div>
  )
}
