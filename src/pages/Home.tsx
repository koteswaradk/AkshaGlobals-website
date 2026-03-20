import { Link } from 'react-router-dom'
import { useState } from 'react'
import { courses, Course } from '../data/courses'
import HeroSlider from '../components/HeroSlider'

const stats = [
  { number: '200K+', label: 'App Downloads', icon: '📲' },
  { number: '4', label: 'Training Courses', icon: '🎓' },
  { number: '5K+', label: 'Students Trained', icon: '👩‍💻' },
  { number: '98%', label: 'Placement Rate', icon: '🏆' },
]

const courseImages: Record<string, string> = {
  'android-dev': 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&q=80',
  'ios-dev': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  'genai-ml': 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  'prompt-engineering': 'https://images.unsplash.com/photo-1655720408440-3debc14e5f3e?w=600&q=80',
}

const techActivities = [
  {
    icon: '💻',
    title: 'Technical Content',
    color: 'from-teal-500 to-cyan-600',
    items: [
      'In-depth Android & iOS development modules',
      'GenAI, LLM & Prompt Engineering tracks',
      'Live coding sessions & project walkthroughs',
      'Real-world case studies and industry use-cases',
    ],
  },
  {
    icon: '🏅',
    title: 'Activities & Participations',
    color: 'from-purple-500 to-indigo-600',
    items: [
      'Hackathons & coding competitions',
      'Industry seminars and tech talks',
      'Open-source contribution drives',
      'Peer collaboration and team projects',
    ],
  },
  {
    icon: '🎯',
    title: 'Achievement Goals',
    color: 'from-orange-500 to-amber-600',
    items: [
      'Certification upon course completion',
      '98% placement assistance & career support',
      'Build a professional portfolio of projects',
      'Mentorship from industry practitioners',
    ],
  },
]

function CourseCard({ course }: { course: Course }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      to={`/training/${course.id}`}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Real course image */}
      <div className="relative h-44 overflow-hidden">
        {imgError ? (
          <div className={`absolute inset-0 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
            <span className="text-6xl drop-shadow-lg">{course.icon}</span>
          </div>
        ) : (
          <img
            src={courseImages[course.id]}
            alt={course.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Course level badges */}
        <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
          {course.levels.map(l => (
            <span
              key={l.name}
              className="text-xs bg-white/20 backdrop-blur-sm text-white border border-white/30 px-2 py-0.5 rounded-full font-semibold"
            >
              {l.name}
            </span>
          ))}
        </div>
        {/* Icon badge */}
        <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl border border-white/30">
          {course.icon}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {course.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {course.tagline}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            Starting from{' '}
            <span className="font-bold text-teal-600 dark:text-teal-400">
              ₹{Math.min(...course.levels.map(l => l.price)).toLocaleString('en-IN')}
            </span>
          </span>
          <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats bar */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <span className="text-2xl">{stat.icon}</span>
                <div className="text-3xl md:text-4xl font-extrabold text-teal-600 dark:text-teal-400 leading-none">
                  {stat.number}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
              Skill Up
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Training Programs
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Industry-aligned courses designed to fast-track your technology career.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/training"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-500 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore All Courses <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Content, Activities & Achievement Goals */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Technical Content, Activities &amp; Achievement Goals
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A holistic learning ecosystem that goes beyond the classroom — from expert-crafted
              content to real-world competitions and career milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techActivities.map(section => (
              <div
                key={section.title}
                className="relative rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-br ${section.color} px-6 py-8 text-white`}>
                  <div className="text-5xl mb-3">{section.icon}</div>
                  <h3 className="text-xl font-extrabold">{section.title}</h3>
                </div>
                {/* Items list */}
                <ul className="bg-white dark:bg-gray-800 p-6 space-y-3">
                  {section.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-teal-600 dark:text-teal-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-teal-100 mb-10 text-lg max-w-2xl mx-auto">
            Join thousands of students who trust Aksha Globals to power their tech career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/training"
              className="px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              Start Learning Today
            </Link>
            <a
              href="mailto:info@akshaglobals.com"
              className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/25 transition-all duration-200 border border-white/30 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
