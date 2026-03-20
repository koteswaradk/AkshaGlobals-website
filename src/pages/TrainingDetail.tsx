import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'
import type { CourseLevel } from '../data/courses'
import PaymentModal from '../components/PaymentModal'

const courseIcons: Record<string, JSX.Element> = {
  'android-dev': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
    </svg>
  ),
  'ios-dev': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.5 2 7 4 7 4s-1 .5-1 2c0 1 .5 1.5.5 1.5S5 8.5 5 10.5c0 3.5 2 6 3.5 7.5S12 20 12 20s1.5-.5 3.5-2 3.5-4 3.5-7.5c0-2-.5-3-.5-3S19 7 19 6c0-1.5-1-2-1-2s-1.5-2-6-2z" />
    </svg>
  ),
  'genai-ml': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.699-1.384 2.316l-2.8-.7m0 0l-1.38-.345a.75.75 0 00-.818.214l-1.4 1.75a.75.75 0 01-1.2 0l-1.4-1.75a.75.75 0 00-.818-.214l-1.38.345m9.396 0L12 21m-4.2-4.9l-1.38.345" />
    </svg>
  ),
  'prompt-engineering': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Course Not Found</h1>
          <Link to="/training" className="text-teal-600 hover:underline">← Back to Training</Link>
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
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${course.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/training" className="text-white/80 hover:text-white text-sm mb-6 inline-flex items-center gap-1">
            ← All Courses
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            <div className="text-8xl">{courseIcons[course.id] || <span>{course.icon}</span>}</div>
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Course Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-3xl">{course.description}</p>
        </div>

        {/* Level Tabs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Level</h2>
          <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
            {course.levels.map(level => (
              <button
                key={level.name}
                onClick={() => setActiveLevel(level.name)}
                className={`px-6 py-3 font-semibold text-sm transition-colors duration-200 border-b-2 -mb-px ${
                  activeLevel === level.name
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {activeLevel} Curriculum
            </h3>
            <div className="space-y-2">
              {currentLevel.curriculum.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enrollment Card */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  ₹{currentLevel.price.toLocaleString()}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {currentLevel.duration} program
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">✅ {currentLevel.curriculum.length} topics covered</div>
                <div className="flex items-center gap-2">✅ Certificate of completion</div>
                <div className="flex items-center gap-2">✅ Mentor support</div>
                <div className="flex items-center gap-2">✅ Project-based learning</div>
              </div>

              <button
                onClick={() => handleRegister(currentLevel)}
                className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-colors duration-200 text-lg"
              >
                Register &amp; Pay
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Secure payment
              </div>
            </div>

            {/* All levels quick register */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">All Levels</h3>
              {course.levels.map(level => (
                <div key={level.name} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg mb-2">
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{level.name}</div>
                    <div className="text-xs text-gray-500">{level.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-teal-600 dark:text-teal-400">₹{level.price.toLocaleString()}</div>
                    <button
                      onClick={() => handleRegister(level)}
                      className="text-xs text-teal-600 dark:text-teal-400 hover:underline"
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
