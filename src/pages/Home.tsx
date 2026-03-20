import { Link } from 'react-router-dom'
import { courses, Course } from '../data/courses'
import HeroSlider from '../components/HeroSlider'

const courseIcons: Record<string, JSX.Element> = {
  'android-dev': (
    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
    </svg>
  ),
  'ios-dev': (
    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.5 2 7 4 7 4s-1 .5-1 2c0 1 .5 1.5.5 1.5S5 8.5 5 10.5c0 3.5 2 6 3.5 7.5S12 20 12 20s1.5-.5 3.5-2 3.5-4 3.5-7.5c0-2-.5-3-.5-3S19 7 19 6c0-1.5-1-2-1-2s-1.5-2-6-2z" />
    </svg>
  ),
  'genai-ml': (
    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.699-1.384 2.316l-2.8-.7m0 0l-1.38-.345a.75.75 0 00-.818.214l-1.4 1.75a.75.75 0 01-1.2 0l-1.4-1.75a.75.75 0 00-.818-.214l-1.38.345m9.396 0L12 21m-4.2-4.9l-1.38.345" />
    </svg>
  ),
  'prompt-engineering': (
    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
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
      className={`group bg-white rounded-2xl border-2 ${course.featured ? 'border-teal-400 shadow-lg shadow-teal-100' : 'border-gray-200'} p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
          {courseIcons[course.id]}
        </div>
      </div>
      {/* Name & tagline */}
      <h3 className="text-center font-bold text-gray-900 text-lg mb-2 group-hover:text-teal-600 transition-colors">{course.name}</h3>
      <p className="text-center text-gray-500 text-sm leading-relaxed mb-5">{course.tagline}</p>
      {/* Stats */}
      <div className="space-y-2 mb-5 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Students:</span>
          <span className="font-bold text-gray-900">{course.students}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Rating:</span>
          <span className="flex items-center gap-1 font-bold text-gray-900">
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {course.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Instructor:</span>
          <span className="font-bold text-gray-900">{course.instructor}</span>
        </div>
      </div>
      {/* Button */}
      <div className="mt-auto flex items-center justify-center gap-2 w-full px-4 py-3 bg-teal-600 group-hover:bg-teal-500 text-white font-semibold rounded-xl transition-colors duration-200">
        Learn More <span aria-hidden="true">→</span>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Training Programs */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Professional Training Programs
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
              Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Blog &amp; Technical Articles
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Stay ahead of the curve with expert insights, tutorials, and career guides crafted by
              our instructors and industry professionals.
            </p>
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

      {/* Reviews from Students and Learners */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-3 border border-teal-200 dark:border-teal-800 px-4 py-1 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Reviews from Students &amp; Learners
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Hear directly from our community — real experiences from real people who transformed
              their careers with Aksha Globals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map(review => (
              <div
                key={review.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Review text */}
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed italic">
                  "{review.review}"
                </p>
                {/* Reviewer info */}
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-700 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 flex items-center justify-center text-2xl flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">{review.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">{review.role} · {review.company}</div>
                    <div className="text-teal-600 dark:text-teal-400 text-xs font-medium mt-0.5">{review.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
