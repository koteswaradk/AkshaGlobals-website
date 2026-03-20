import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

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
              <div className={`bg-gradient-to-br ${course.color} p-10 text-center`}>
                <span className="text-7xl">{course.icon}</span>
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
