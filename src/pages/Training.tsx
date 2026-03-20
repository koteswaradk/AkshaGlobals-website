import { useState } from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

const courseIcons: Record<string, JSX.Element> = {
  'android-dev': (
    <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  ),
  'ios-dev': (
    <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  'genai-ml': (
    <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
}

export default function Training() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const handleCourseSelect = (id: string) => {
    setSelectedCourse(prev => (prev === id ? null : id))
  }

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-m3-on-primary-container to-m3-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Programs</h1>
          <p className="text-m3-primary-container text-lg max-w-2xl mx-auto">
            Industry-aligned courses with three skill levels to accelerate your tech career.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {courses.map(course => (
            <div
              key={course.id}
              onClick={() => handleCourseSelect(course.id)}
              className={`group bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-m3-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 ${
                selectedCourse === course.id
                  ? 'border-m3-primary dark:border-m3-dark-primary shadow-m3-3'
                  : 'border-transparent shadow-m3-1 hover:shadow-m3-3 hover:border-m3-primary dark:hover:border-m3-dark-primary'
              }`}
              style={selectedCourse === course.id ? { animation: 'cardSelectPulse 0.6s ease-out' } : undefined}
            >
              <div className={`bg-gradient-to-br ${course.color} p-6 sm:p-10 flex items-center justify-center`}>
                {courseIcons[course.id] || <span className="text-5xl sm:text-7xl">{course.icon}</span>}
              </div>
              <div className="p-6">
                <h2 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                  selectedCourse === course.id
                    ? 'text-m3-primary dark:text-m3-dark-primary'
                    : 'text-m3-on-surface dark:text-m3-dark-on-surface'
                }`}>{course.name}</h2>
                <p className="text-m3-primary dark:text-m3-dark-primary text-sm font-medium mb-3">{course.tagline}</p>
                <p className="text-m3-on-surface-variant text-sm mb-4 line-clamp-2">{course.description}</p>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3">
                  {course.levels.map(level => (
                    <div key={level.name} className="flex-1 min-w-[80px] bg-m3-surface-container dark:bg-m3-dark-surface-container rounded-m3 p-2 sm:p-3 text-center">
                      <div className="text-xs font-semibold text-m3-on-surface dark:text-m3-dark-on-surface">{level.name}</div>
                      <div className="text-xs text-m3-on-surface-variant mt-0.5">{level.duration}</div>
                      <div className="text-sm font-bold text-m3-primary dark:text-m3-dark-primary mt-1">
                        ₹{level.price.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/training/${course.id}`}
                  className="mt-4 inline-block text-m3-primary dark:text-m3-dark-primary text-sm font-semibold hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Course Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
