import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import type { CourseLevel } from '../data/courses'
import PaymentModal from '../components/PaymentModal'
import SEO from '../components/SEO'

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
      <div className="min-h-screen flex items-center justify-center bg-[#020b1a] text-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Course Not Found</h1>
          <Link to="/training" className="text-cyan-300 hover:underline">← Back to Training</Link>
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
    <div className="min-h-screen bg-[#020b1a] text-white">
      <SEO title={course.name} description={course.description} path={`/training/${course.id}`} />

      <section className="relative overflow-hidden bg-[linear-gradient(160deg,rgba(10,25,47,0.95),rgba(2,8,20,0.98))] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_55%)]" />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          {!isInternship && (
            <Link to="/training" className="inline-flex text-sm font-medium text-white/85 transition hover:text-white">← Back to all programs</Link>
          )}

          {isInternship && (
            <div className="relative mt-6 w-full overflow-hidden rounded-m3-2xl border border-white/20 bg-black/20 shadow-m3-3">
              <img
                src={internshipHeroImage}
                alt="Build Your Future with Internship program banner"
                className="h-auto w-full object-contain object-center"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          )}

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">Professional Program</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{course.name}</h1>
              <p className="mt-3 text-lg text-cyan-200/95">{course.tagline}</p>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{course.description}</p>
            </div>

            <div className="rounded-m3-xl border border-cyan-400/20 bg-slate-900/55 p-5 backdrop-blur-sm">
              <div className="text-sm text-slate-300">Trusted by learners globally</div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  ['Learners', course.students],
                  ['Rating', `${course.rating}/5`],
                  ['Levels', String(course.levels.length)],
                  ['Mentor', course.instructor],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-m3-lg border border-cyan-500/15 bg-slate-900/65 p-3">
                    <div className="text-[11px] uppercase tracking-wide text-slate-300">{label}</div>
                    <div className="mt-1 text-sm font-semibold text-cyan-100">{value}</div>
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
                    ? 'border-cyan-300/70 bg-cyan-500/10 shadow-[0_14px_32px_rgba(6,182,212,0.2)]'
                    : 'border-cyan-500/20 bg-slate-900/55 hover:border-cyan-300/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-white">{level.name}</h2>
                    <p className="mt-1 text-sm text-slate-300">{level.duration}</p>
                  </div>
                  <p className="text-base font-bold text-cyan-300">{formatPrice(level.price)}</p>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-slate-300">
                  {level.curriculum.slice(0, 3).map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-cyan-300">•</span>
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
          <article className="rounded-m3-2xl border border-cyan-500/20 bg-slate-900/55 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white">{currentLevel.name} Curriculum</h3>
            <p className="mt-2 text-sm text-slate-300">
              Structured learning journey designed for practical skill development and real-world application.
            </p>

            <div className="mt-6 space-y-3">
              {currentLevel.curriculum.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-m3-lg border border-cyan-500/15 bg-slate-900/65 p-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-200">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-m3-2xl border border-cyan-500/20 bg-slate-900/55 p-6 shadow-[0_20px_45px_rgba(2,6,23,0.45)] sm:p-7 lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-white">Enrollment</h3>
            <p className="mt-2 text-sm text-slate-300">{currentLevel.duration} guided track · {currentLevel.curriculum.length} modules</p>

            {!isInternship && (
              <div className="mt-5 rounded-m3-xl border border-cyan-500/15 bg-slate-900/75 px-4 py-5 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-300">Program fee</p>
                <p className="mt-2 text-3xl font-bold text-cyan-300">{formatPrice(currentLevel.price)}</p>
              </div>
            )}

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>✓ Curriculum aligned to industry outcomes</p>
              <p>✓ Mentor-supported practical learning</p>
              <p>✓ Certificate on successful completion</p>
              <p>✓ Project-focused hands-on experience</p>
            </div>

            {isInternship ? (
              <div className="mt-6 space-y-3">
                <Link
                  to="/contact"
                  className="block w-full rounded-full border border-cyan-400/25 px-5 py-3 text-center text-sm font-semibold text-slate-200 transition hover:bg-slate-900/70"
                >
                  Contact Admissions
                </Link>
              </div>
            ) : (
              <div className="mt-6 grid gap-4">
                <Link
                  to="/contact"
                  className="flex min-h-12 w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold leading-5 text-slate-950 transition hover:bg-cyan-300"
                >
                  Register &amp; Pay
                </Link>

                <div className="grid gap-2">
                  {course.levels.map(level => (
                    <button
                      key={level.name}
                      type="button"
                      onClick={() => handleRegister(level)}
                      className="flex w-full items-center justify-between rounded-m3 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900/70 hover:text-white"
                    >
                      <span>{level.name}</span>
                      <span>{formatPrice(level.price)} · Enroll</span>
                    </button>
                  ))}
                </div>
              </div>
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
