import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { courses, getDefaultSelectedCourseId } from '../data/courses'
import SEO from '../components/SEO'
import TrainingSpotlight from '../components/TrainingSpotlight'

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
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLevel, setActiveLevel] = useState<string>('All Levels')
  const [selectedCourse, setSelectedCourse] = useState<string | null>(getDefaultSelectedCourseId(courses))

  const allLevels = useMemo(
    () => ['All Levels', ...new Set(courses.flatMap(course => course.levels.map(level => level.name)))],
    []
  )

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return courses.filter(course => {
      const matchesLevel = activeLevel === 'All Levels' || course.levels.some(level => level.name === activeLevel)
      const matchesQuery =
        query.length === 0 ||
        course.name.toLowerCase().includes(query) ||
        course.tagline.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)

      return matchesLevel && matchesQuery
    })
  }, [activeLevel, searchQuery])

  useEffect(() => {
    if (!filteredCourses.length) {
      setSelectedCourse(null)
      return
    }

    if (!selectedCourse || !filteredCourses.some(course => course.id === selectedCourse)) {
      setSelectedCourse(filteredCourses[0].id)
    }
  }, [filteredCourses, selectedCourse])

  const selectedCourseData = filteredCourses.find(course => course.id === selectedCourse) ?? filteredCourses[0] ?? null
  const featuredCourse = filteredCourses.find(course => course.featured) ?? filteredCourses[0] ?? null
  const averageRating = courses.reduce((sum, course) => sum + course.rating, 0) / courses.length
  const totalLearners = courses.reduce((sum, course) => sum + parseStudents(course.students), 0)

  return (
    <div className="min-h-screen bg-m3-surface dark:bg-m3-dark-surface">
      <SEO
        title="Professional Training Programs"
        description="Industry-aligned programs in Android, AI, Prompt Engineering, KMP, CMP, and internships with project-based outcomes."
        path="/training"
      />

      <section className="bg-gradient-to-br from-m3-primary-10 via-m3-primary to-m3-primary-40 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">Aksha Globals Academy</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            International-Standard Tech Training for Career Growth
          </h1>
          <p className="mt-5 max-w-3xl text-base text-white/90 sm:text-lg">
            Explore job-ready training tracks built with modern curriculum design, mentor support, and practical outcomes across mobile and AI technologies.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Programs', courses.length],
              ['Enrolled learners', `${totalLearners.toLocaleString()}+`],
              ['Average rating', `${averageRating.toFixed(1)}/5`],
              ['Mentors', new Set(courses.map(course => course.instructor)).size],
            ].map(([label, value]) => (
              <div key={label} className="rounded-m3-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-wide text-white/75">{label}</div>
                <div className="mt-2 text-2xl font-bold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-m3-2xl border border-m3-outline-variant bg-m3-surface-container-lowest p-5 shadow-m3-1 dark:border-m3-dark-outline dark:bg-m3-dark-surface-container-high sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <label htmlFor="training-search" className="mb-2 block text-sm font-semibold text-m3-on-surface dark:text-m3-dark-on-surface">
                Search programs
              </label>
              <input
                id="training-search"
                type="search"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                placeholder="Search by technology, outcome, or track"
                className="w-full rounded-m3-lg border border-m3-outline bg-m3-surface px-4 py-3 text-sm text-m3-on-surface outline-none transition focus:border-m3-primary dark:border-m3-dark-outline dark:bg-m3-dark-surface"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-m3-on-surface dark:text-m3-dark-on-surface">Filter by level</p>
              <div className="flex flex-wrap gap-2">
                {allLevels.map(level => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setActiveLevel(level)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      activeLevel === level
                        ? 'bg-m3-primary text-m3-on-primary dark:bg-m3-dark-primary dark:text-m3-dark-on-primary'
                        : 'bg-m3-surface-container text-m3-on-surface-variant hover:bg-m3-surface-container-high dark:bg-m3-dark-surface-container dark:text-m3-dark-on-surface-variant'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {!filteredCourses.length ? (
          <div className="rounded-m3-xl border border-dashed border-m3-outline p-10 text-center dark:border-m3-dark-outline">
            <h2 className="text-xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">No programs found</h2>
            <p className="mt-2 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
              Try a different search keyword or clear level filters.
            </p>
          </div>
        ) : (
          <>
            {featuredCourse && (
              <article className="mb-10 rounded-m3-2xl border border-m3-outline-variant bg-m3-surface-container-low p-6 shadow-m3-2 dark:border-m3-dark-outline dark:bg-m3-dark-surface-container sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-m3-primary dark:text-m3-dark-primary">Featured program</p>
                <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{featuredCourse.name}</h2>
                    <p className="mt-2 text-sm text-m3-primary dark:text-m3-dark-primary">{featuredCourse.tagline}</p>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                      {featuredCourse.description}
                    </p>
                  </div>
                  <Link
                    to={`/training/${featuredCourse.id}`}
                    className="inline-flex items-center justify-center rounded-full bg-m3-primary px-6 py-3 text-sm font-semibold text-m3-on-primary transition hover:bg-m3-primary/90 dark:bg-m3-dark-primary dark:text-m3-dark-on-primary"
                  >
                    View Program
                  </Link>
                </div>
              </article>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map(course => {
                const isSelected = selectedCourseData?.id === course.id
                return (
                  <article
                    key={course.id}
                    className={`group flex h-full flex-col overflow-hidden rounded-m3-xl border transition-all duration-300 ${
                      isSelected
                        ? 'border-m3-primary shadow-m3-3 dark:border-m3-dark-primary'
                        : 'border-m3-outline-variant shadow-m3-1 hover:-translate-y-1 hover:shadow-m3-3 dark:border-m3-dark-outline'
                    }`}
                  >
                    <div className={`bg-gradient-to-br ${course.color} p-6`}>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                          {course.levels.length} Levels
                        </span>
                        {courseIcons[course.id] ?? <span className="text-3xl">{course.icon}</span>}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{course.name}</h3>
                      <p className="mt-1 text-sm font-medium text-m3-primary dark:text-m3-dark-primary">{course.tagline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                        {course.description}
                      </p>

                      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        {course.levels.slice(0, 3).map(level => (
                          <div key={level.name} className="rounded-m3 bg-m3-surface-container p-2 dark:bg-m3-dark-surface-container">
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                              {level.name}
                            </div>
                            <div className="mt-1 text-xs text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">{level.duration}</div>
                            <div className="mt-1 text-sm font-bold text-m3-primary dark:text-m3-dark-primary">₹{level.price.toLocaleString()}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedCourse(course.id)}
                          className="text-sm font-semibold text-m3-on-surface-variant underline-offset-4 transition hover:underline dark:text-m3-dark-on-surface-variant"
                        >
                          Compare in spotlight
                        </button>
                        <Link
                          to={`/training/${course.id}`}
                          className="inline-flex items-center rounded-full bg-m3-primary px-4 py-2 text-xs font-semibold text-m3-on-primary transition hover:bg-m3-primary/90 dark:bg-m3-dark-primary dark:text-m3-dark-on-primary"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {selectedCourseData && <TrainingSpotlight course={selectedCourseData} title="Program Spotlight" />}
          </>
        )}
      </section>
    </div>
  )
}
