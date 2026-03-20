import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

const courseIcons: Record<string, JSX.Element> = {
  'android-dev': (
    <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
    </svg>
  ),
  'ios-dev': (
    <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.5 2 7 4 7 4s-1 .5-1 2c0 1 .5 1.5.5 1.5S5 8.5 5 10.5c0 3.5 2 6 3.5 7.5S12 20 12 20s1.5-.5 3.5-2 3.5-4 3.5-7.5c0-2-.5-3-.5-3S19 7 19 6c0-1.5-1-2-1-2s-1.5-2-6-2z" />
    </svg>
  ),
  'genai-ml': (
    <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.699-1.384 2.316l-2.8-.7m0 0l-1.38-.345a.75.75 0 00-.818.214l-1.4 1.75a.75.75 0 01-1.2 0l-1.4-1.75a.75.75 0 00-.818-.214l-1.38.345m9.396 0L12 21m-4.2-4.9l-1.38.345" />
    </svg>
  ),
  'prompt-engineering': (
    <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
}

export default function Training() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Programs</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Industry-aligned courses with three skill levels to accelerate your tech career.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {courses.map(course => (
            <Link
              key={course.id}
              to={`/training/${course.id}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${course.color} p-10 flex items-center justify-center`}>
                {courseIcons[course.id] || <span className="text-7xl">{course.icon}</span>}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{course.name}</h2>
                <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mb-3">{course.tagline}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
                <div className="flex gap-3">
                  {course.levels.map(level => (
                    <div key={level.name} className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">{level.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{level.duration}</div>
                      <div className="text-sm font-bold text-teal-600 dark:text-teal-400 mt-1">
                        ₹{level.price.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-teal-600 dark:text-teal-400 text-sm font-semibold">
                  View Course Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
