import { Link } from 'react-router-dom'
import { courses } from '../data/courses'
import SEO from '../components/SEO'

const courseIcons: Record<string, JSX.Element> = {
  'android-dev': (
    <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  ),
  internship: (
    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.75V6A2.25 2.25 0 0014.25 3.75h-4.5A2.25 2.25 0 007.5 6v.75m9 0h1.5A2.25 2.25 0 0120.25 9v8.25A2.25 2.25 0 0118 19.5H6A2.25 2.25 0 013.75 17.25V9A2.25 2.25 0 016 6.75h1.5m9 0v2.25A2.25 2.25 0 0114.25 11.25h-4.5A2.25 2.25 0 017.5 9V6.75" />
    </svg>
  ),
  'genai-ml': (
    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v13" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 8.5c1.5 0 3.5 1 3.5 3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 8.5c-1.5 0-3.5 1-3.5 3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13c2 1 4 1 6 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13c-2 1-4 1-6 0" />
    </svg>
  ),
  'prompt-engineering': (
    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  'kmp-dev': (
    <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 2v20h4v-8l8 8h5L13 14l8-10h-5L8 12V2H4z" />
    </svg>
  ),
  'cmp-dev': (
    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13h12a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2a3 3 0 013-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 17h8" />
    </svg>
  ),
}

function parseStudents(value: string) {
  return Number(value.replace(/[^\d]/g, '')) || 0
}

export default function Training() {
  const trainingCourses = courses.filter(course => course.id !== 'internship')
  const featuredCourse = trainingCourses.find(course => course.featured) ?? trainingCourses[0] ?? null
  const averageRating = trainingCourses.length
    ? trainingCourses.reduce((sum, course) => sum + course.rating, 0) / trainingCourses.length
    : 0
  const totalLearners = trainingCourses.reduce((sum, course) => sum + parseStudents(course.students), 0)

  return (
    <div className="min-h-screen bg-[#020b1a] text-white">
      <SEO
        title="Professional Training Programs"
        description="Industry-aligned programs in Android, AI, Prompt Engineering, KMP, CMP, and internships with project-based outcomes."
        path="/training"
      />

      <section className="relative overflow-hidden bg-[linear-gradient(160deg,rgba(10,25,47,0.95),rgba(2,8,20,0.98))] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_55%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">Aksha Globals Academy</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            International-Standard Tech Training for Career Growth
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-300 sm:text-lg">
            Explore job-ready training tracks built with modern curriculum design, mentor support, and practical outcomes across mobile and AI technologies.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Programs', trainingCourses.length],
              ['Enrolled learners', `${totalLearners.toLocaleString()}+`],
              ['Average rating', `${averageRating.toFixed(1)}/5`],
              ['Mentors', new Set(trainingCourses.map(course => course.instructor)).size],
            ].map(([label, value]) => (
              <div key={label} className="rounded-m3-xl border border-cyan-400/20 bg-slate-900/55 p-4 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-wide text-slate-300">{label}</div>
                <div className="mt-2 text-2xl font-bold text-cyan-300">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {!trainingCourses.length ? (
          <div className="rounded-m3-xl border border-dashed border-cyan-400/25 bg-slate-900/40 p-10 text-center">
            <h2 className="text-xl font-bold text-white">No programs found</h2>
            <p className="mt-2 text-sm text-slate-300">Please check back soon.</p>
          </div>
        ) : (
          <>
            {featuredCourse && (
              <article className="mb-10 rounded-m3-2xl border border-cyan-400/20 bg-slate-900/55 p-6 shadow-[0_20px_45px_rgba(2,6,23,0.45)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Featured program</p>
                <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{featuredCourse.name}</h2>
                    <p className="mt-2 text-sm text-cyan-200/95">{featuredCourse.tagline}</p>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
                      {featuredCourse.description}
                    </p>
                  </div>
                  <Link
                    to={`/training/${featuredCourse.id}`}
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    View Program
                  </Link>
                </div>
              </article>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {trainingCourses.map(course => {
                return (
                  <article
                    key={course.id}
                    className="group relative flex h-full flex-col overflow-hidden rounded-m3-2xl border border-cyan-400/20 shadow-[0_20px_45px_rgba(2,6,23,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_24px_60px_rgba(6,182,212,0.3)]"
                  >
                    <div className={`relative overflow-hidden bg-gradient-to-br ${course.color} p-6`}>
                      <div className="pointer-events-none absolute inset-0 opacity-40">
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
                        <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                      </div>
                      <div className="relative flex items-start justify-between">
                        <div>
                          <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                            {course.levels.length} Levels
                          </span>
                          <div className="mt-3 text-sm font-semibold text-white/90">{course.students} learners</div>
                        </div>
                        {courseIcons[course.id] ?? <span className="text-3xl">{course.icon}</span>}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-white">{course.name}</h3>
                      <p className="mt-1 text-sm font-medium text-cyan-200/95">{course.tagline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300/95">
                        {course.description}
                      </p>

                      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        {course.levels.slice(0, 3).map(level => (
                          <div key={level.name} className="rounded-m3 border border-cyan-500/15 bg-slate-900/65 p-2">
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                              {level.name}
                            </div>
                            <div className="mt-1 text-xs text-slate-300">{level.duration}</div>
                            <div className="mt-1 text-sm font-bold text-cyan-300">₹{level.price.toLocaleString()}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2 rounded-m3-lg border border-cyan-500/15 bg-slate-900/65 p-3 text-center">
                        <div>
                          <div className="text-[11px] uppercase tracking-wide text-slate-300">Rating</div>
                          <div className="mt-1 text-sm font-bold text-cyan-300">{course.rating.toFixed(1)}/5</div>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wide text-slate-300">Instructor</div>
                          <div className="mt-1 truncate text-sm font-semibold text-white">{course.instructor}</div>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-end gap-3">
                        <Link
                          to={`/training/${course.id}`}
                          className="inline-flex items-center rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
                        >
                          Explore Program
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
