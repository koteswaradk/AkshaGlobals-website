/* Added download buttons for brochure and syllabus next to Register button */
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'
import type { CourseLevel } from '../data/courses'
import PaymentModal from '../components/PaymentModal'
import SEO from '../components/SEO'

const courseIcons: Record<string, JSX.Element> = {
  'android-dev': (
    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1[...]"></path>
    </svg>
  ),
  'ios-dev': (
    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02[...]" />
    </svg>
  ),
  'genai-ml': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25[...]" />
    </svg>
  ),
  'kmp-dev': (
    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 2v20h4v-8l8 8h5L13 14l8-10h-5L8 12V2H4z" />
    </svg>
  ),
  'cmp-dev': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13h12a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2a3 3 0 013-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 17h8" />
    </svg>
  ),
}

export default function TrainingDetail() {
  const { id } = useParams<{ id: string }>()
  const course = courses.find(c => c.id === id)
  const [activeLevel, setActiveLevel] = useState<'Basic' | 'Advanced' | 'Expert'>('Basic')
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | null>(null)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-m3-surface dark:bg-m3-dark-surface">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">Course Not Found</h1>
          <Link to="/training" className="text-m3-primary hover:underline">← Back to Training</Link>
        </div>
      </div>
    )
  }

  const currentLevel = course.levels.find(l => l.name === activeLevel)!

  const handleRegister = (level: CourseLevel) => {
    setSelectedLevel(level)
    setPaymentOpen(true)
  }

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      <SEO
        title={course.name}
        description={course.description}
        path={`/training/${course.id}`}
      />
      {/* Hero */}
      <div className={`bg-gradient-to-br ${course.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/training" className="text-white/80 hover:text-white text-sm mb-6 inline-flex items-center gap-1">
            ← All Courses
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            <div className="text-6xl md:text-8xl">{courseIcons[course.id] || <span>{course.icon}</span>}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{course.name}</h1>
              <p className="text-xl text-white/90">{course.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-3">Course Overview</h2>
          <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant leading-relaxed text-lg max-w-3xl">{course.description}</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-m3-xl bg-m3-surface-container dark:bg-m3-dark-surface-container p-5">
            <div className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Students enrolled</div>
            <div className="mt-2 text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{course.students}</div>
          </div>
          <div className="rounded-m3-xl bg-m3-surface-container dark:bg-m3-dark-surface-container p-5">
            <div className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Course rating</div>
            <div className="mt-2 text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{course.rating}/5</div>
          </div>
          <div className="rounded-m3-xl bg-m3-surface-container dark:bg-m3-dark-surface-container p-5">
            <div className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Lead instructor</div>
            <div className="mt-2 text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{course.instructor}</div>
          </div>
          <div className="rounded-m3-xl bg-m3-surface-container dark:bg-m3-dark-surface-container p-5">
            <div className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Skill levels</div>
            <div className="mt-2 text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{course.levels.length}</div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">Learning Path</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {course.levels.map(level => (
              <button
                key={level.name}
                type="button"
                onClick={() => setActiveLevel(level.name)}
                className={`rounded-m3-xl border p-5 text-left transition-all duration-200 ${
                  activeLevel === level.name
                    ? 'border-m3-primary dark:border-m3-dark-primary bg-m3-primary-container/40 dark:bg-m3-dark-primary-container/20'
                    : 'border-m3-outline-variant dark:border-m3-dark-outline bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-lg font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{level.name}</div>
                    <div className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">{level.duration}</div>
                  </div>
                  <div className="text-lg font-bold text-m3-primary dark:text-m3-dark-primary">
                    ₹{level.price.toLocaleString()}
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {level.curriculum.slice(0, 3).map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant"
                    >
                      <span className="mt-1 text-m3-primary dark:text-m3-dark-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>

        {/* Level Tabs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">Choose Your Level</h2>
          <div className="flex gap-1 bg-m3-surface-container dark:bg-m3-dark-surface-container p-1 rounded-full overflow-x-auto">
            {course.levels.map(level => (
              <button
                key={level.name}
                onClick={() => setActiveLevel(level.name)}
                className={`font-semibold text-sm transition-colors duration-200 whitespace-nowrap rounded-full px-4 py-2 ${
                  activeLevel === level.name
                    ? 'bg-m3-secondary-container dark:bg-m3-dark-secondary-container text-m3-on-secondary-container dark:text-m3-dark-on-secondary-container'
                    : 'text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant hover:bg-m3-surface-container-high dark:hover:bg-m3-dark-surface-container-high'
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>

        {/* Level Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Curriculum */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">
              {activeLevel} Curriculum
            </h3>
            <div className="space-y-2">
              {currentLevel.curriculum.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-m3-surface-container dark:bg-m3-dark-surface-container rounded-m3">
                  <span className="bg-m3-primary-container dark:bg-m3-dark-primary-container text-m3-on-primary-container dark:text-m3-dark-on-primary-container text-xs font-bold rounded-full w-6[...]">
                    {i + 1}
                  </span>
                  <span className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enrollment Card */}
          <div>
            <div className="bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-m3-xl shadow-m3-2 p-6 border border-m3-outline-variant dark:border-m3-dark-outline sticky:top-28">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">
                  ₹{currentLevel.price.toLocaleString()}
                </div>
                <div className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant text-sm mt-1">
                  {currentLevel.duration} program
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                <div className="flex items-center gap-2">✅ {currentLevel.curriculum.length} topics covered</div>
                <div className="flex items-center gap-2">✅ Certificate of completion</div>
                <div className="flex items-center gap-2">✅ Mentor support</div>
                <div className="flex items-center gap-2">✅ Project-based learning</div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleRegister(currentLevel)}
                  className="w-full py-3 bg-m3-primary hover:bg-m3-primary/90 text-m3-on-primary font-bold rounded-full transition-colors duration-200 text-lg"
                >
                  Register &amp; Pay
                </button>

                <div className="flex gap-3 justify-center">
                  <a href="/brochures/android-brochure-1.png" download className="inline-flex items-center gap-2 px-4 py-2 border border-m3-outline-variant rounded-full text-sm hover:shadow">Download Brochure 1</a>
                  <a href="/brochures/android-brochure-2.png" download className="inline-flex items-center gap-2 px-4 py-2 border border-m3-outline-variant rounded-full text-sm hover:shadow">Download Brochure 2</a>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.68[...]" />
                  </svg>
                  Secure payment
                </div>
              </div>

            </div>

            {/* All levels quick register */}
            <div className="mt-6">
              <h3 className="font-semibold text-m3-on-surface dark:text-m3-dark-on-surface mb-3 text-sm">All Levels</h3>
              {course.levels.map(level => (
                <div key={level.name} className="flex items-center justify-between p-3 border border-m3-outline-variant dark:border-m3-dark-outline rounded-m3 mb-2">
                  <div>
                    <div className="text-sm font-semibold text-m3-on-surface dark:text-m3-dark-on-surface">{level.name}</div>
                    <div className="text-xs text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">{level.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-m3-primary dark:text-m3-dark-primary">₹{level.price.toLocaleString()}</div>
                    <button
                      onClick={() => handleRegister(level)}
                      className="text-xs text-m3-primary dark:text-m3-dark-primary hover:underline"
                    >
                      Enroll →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {selectedLevel && (
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
