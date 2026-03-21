import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'
import type { CourseLevel } from '../data/courses'
import PaymentModal from '../components/PaymentModal'
import SEO from '../components/SEO'

const courseIcons: Record<string, JSX.Element> = {
  'android-dev': (
    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  ),
  'ios-dev': (
    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
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
                  <span className="bg-m3-primary-container dark:bg-m3-dark-primary-container text-m3-on-primary-container dark:text-m3-dark-on-primary-container text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enrollment Card */}
          <div>
            <div className="bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-m3-xl shadow-m3-2 p-6 border border-m3-outline-variant dark:border-m3-dark-outline sticky top-24">
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

              <button
                onClick={() => handleRegister(currentLevel)}
                className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-full transition-colors duration-200 text-lg"
              >
                Register &amp; Pay
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Secure payment
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
