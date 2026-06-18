import { Link } from 'react-router-dom'
import type { Course } from '../data/courses'

interface TrainingSpotlightProps {
  course: Course
  title?: string
}

export default function TrainingSpotlight({ course, title = 'Selected Training' }: TrainingSpotlightProps) {
  return (
    <div className="mt-12 rounded-m3-2xl border border-m3-outline-variant dark:border-m3-dark-outline bg-m3-surface-container-low dark:bg-m3-dark-surface-container p-6 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex-1">
          <span className="inline-flex rounded-full bg-m3-primary-container dark:bg-m3-dark-primary-container px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-m3-on-primary-container dark:text-m3-dark-on-primary-container">
            {title}
          </span>
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">
            {course.name}
          </h3>
          <p className="mt-2 text-base font-medium text-m3-primary dark:text-m3-dark-primary">
            {course.tagline}
          </p>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
            {course.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-m3-xl bg-m3-surface dark:bg-m3-dark-surface p-4">
              <div className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Students</div>
              <div className="mt-1 text-lg font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{course.students}</div>
            </div>
            <div className="rounded-m3-xl bg-m3-surface dark:bg-m3-dark-surface p-4">
              <div className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Rating</div>
              <div className="mt-1 text-lg font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{course.rating}/5</div>
            </div>
            <div className="rounded-m3-xl bg-m3-surface dark:bg-m3-dark-surface p-4">
              <div className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Instructor</div>
              <div className="mt-1 text-lg font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{course.instructor}</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-md">
          <div className="rounded-m3-xl bg-m3-surface dark:bg-m3-dark-surface p-5 shadow-m3-1">
            <h4 className="text-lg font-bold text-m3-on-surface dark:text-m3-dark-on-surface">Learning path</h4>
            <div className="mt-4 space-y-3">
              {course.levels.map(level => (
                <div
                  key={level.name}
                  className="rounded-m3-lg border border-m3-outline-variant dark:border-m3-dark-outline p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-m3-on-surface dark:text-m3-dark-on-surface">{level.name}</div>
                      <div className="text-xs text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">{level.duration}</div>
                    </div>
                    <div className="text-sm font-bold text-m3-primary dark:text-m3-dark-primary">
                      ₹{level.price.toLocaleString()}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5">
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
                </div>
              ))}
            </div>

            <Link
              to={`/training/${course.id}`}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-m3-primary px-5 py-3 text-sm font-semibold text-m3-on-primary transition-colors duration-200 hover:bg-m3-primary/90"
            >
              View Detailed Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
