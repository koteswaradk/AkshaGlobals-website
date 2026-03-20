import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { courses, Course } from '../data/courses'
import HeroSlider from '../components/HeroSlider'

const courseIcons: Record<string, JSX.Element> = {
  'android-dev': (
    <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  ),
  'ios-dev': (
    <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  'genai-ml': (
    <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  'prompt-engineering': (
    <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
}

const blogArticles = [
  {
    icon: '📱',
    category: 'Android Development',
    title: 'Getting Started with Android Development in 2024',
    excerpt:
      "A complete beginner's guide covering Kotlin fundamentals, Jetpack Compose, and building your first real-world Android app from scratch.",
    author: 'Aksha Globals Team',
    date: 'March 10, 2024',
    readTime: '8 min read',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: '🤖',
    category: 'GenAI & Prompt Engineering',
    title: 'Mastering Prompt Engineering: Tips, Tricks & Best Practices',
    excerpt:
      'Unlock the full potential of large language models with proven prompt design strategies used by AI engineers in top tech companies.',
    author: 'Aksha Globals Team',
    date: 'February 22, 2024',
    readTime: '6 min read',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: '🚀',
    category: 'Career Growth',
    title: 'How Our Students Land Top Tech Jobs After Training',
    excerpt:
      'Real stories and actionable strategies from our alumni who cracked placements at leading product companies and startups.',
    author: 'Aksha Globals Team',
    date: 'January 15, 2024',
    readTime: '5 min read',
    color: 'from-orange-500 to-amber-600',
  },
]

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Android Developer',
    company: 'TechCorp India',
    avatar: '👩‍💻',
    rating: 5,
    review:
      'The Android Development course at Aksha Globals completely transformed my career. The hands-on projects and mentorship helped me land my dream job within 2 months of completing the course!',
    course: 'Android Development',
  },
  {
    name: 'Rahul Verma',
    role: 'AI/ML Engineer',
    company: 'StartupHub',
    avatar: '👨‍🔬',
    rating: 5,
    review:
      'The GenAI and Prompt Engineering track was incredibly insightful. Real-world case studies and live sessions gave me the confidence to work on cutting-edge AI projects professionally.',
    course: 'GenAI & Prompt Engineering',
  },
  {
    name: 'Ananya Patel',
    role: 'iOS Developer',
    company: 'MobiSolutions',
    avatar: '👩‍🎨',
    rating: 5,
    review:
      "From zero experience to a full-time iOS developer in 4 months — that's what Aksha Globals did for me. The curriculum is industry-relevant and the instructors are genuinely passionate about teaching.",
    course: 'iOS Development',
  },
  {
    name: 'Kiran Reddy',
    role: 'Full Stack Developer',
    company: 'InnovateTech',
    avatar: '👨‍💼',
    rating: 5,
    review:
      'Exceptional training quality with a perfect balance of theory and practice. The placement support team went above and beyond to help me prepare for interviews. Highly recommended!',
    course: 'Android Development',
  },
]

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/training/${course.id}`}
      className={`group bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
          {courseIcons[course.id]}
        </div>
      </div>
      {/* Name & tagline */}
      <h3 className="text-center font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{course.name}</h3>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{course.tagline}</p>
      {/* Stats */}
      <div className="space-y-2 mb-5 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Students:</span>
          <span className="font-bold text-gray-900 dark:text-white">{course.students}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Rating:</span>
          <span className="flex items-center gap-1 font-bold text-gray-900 dark:text-white">
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {course.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Instructor:</span>
          <span className="font-bold text-gray-900 dark:text-white">{course.instructor}</span>
        </div>
      </div>
      {/* Button */}
      <div className="mt-auto flex items-center justify-center gap-2 w-full px-4 py-3 bg-teal-600 group-hover:bg-teal-500 text-white font-semibold rounded-xl transition-colors duration-200">
        Learn More <span aria-hidden="true">→</span>
      </div>
    </Link>
  )
}

function ReviewSlider({ reviews }: { reviews: { name: string; role: string; company: string; avatar: string; rating: number; review: string; course: string }[] }) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const total = reviews.length

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent(((index % total) + total) % total)
      setTimeout(() => setIsAnimating(false), 500)
    },
    [isAnimating, total],
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  const review = reviews[current]

  return (
    <section
      className="pt-20 pb-10 bg-white dark:bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
            Testimonials
          </span>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Review card */}
          <div
            key={current}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-5"
            style={{ animation: 'reviewFadeIn 0.5s ease-out' }}
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {/* Review text */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed italic text-center">
              &ldquo;{review.review}&rdquo;
            </p>
            {/* Reviewer info */}
            <div className="flex justify-end mt-auto">
              <div className="text-right">
                <div className="font-bold text-gray-900 dark:text-white text-sm">{review.name}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">{review.role} · {review.company}</div>
                <div className="text-teal-600 dark:text-teal-400 text-xs font-medium mt-0.5">{review.course}</div>
              </div>
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 shadow-md"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 shadow-md"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-3 bg-teal-600 dark:bg-teal-400'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes reviewFadeIn {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Training Programs */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Professional Training Programs
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Master the latest technologies with our comprehensive, industry-aligned training courses
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog and Technical Articles */}
      <section className="pt-20 pb-10 bg-gray-50 dark:bg-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
              Insights
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogArticles.map(article => (
              <article
                key={article.title}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                {/* Colored header banner */}
                <div className={`bg-gradient-to-br ${article.color} px-6 py-7 text-white`}>
                  <span className="text-xs font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <div className="text-5xl mt-4 mb-1 drop-shadow">{article.icon}</div>
                </div>
                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 text-xs text-gray-400 dark:text-gray-500">
                    <span className="font-medium">{article.author}</span>
                    <div className="flex items-center gap-2">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewSlider reviews={reviews} />
    </div>
  )
}
