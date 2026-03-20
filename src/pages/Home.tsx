import { Link } from 'react-router-dom'
import { useState } from 'react'
import { courses, Course } from '../data/courses'
import HeroSlider from '../components/HeroSlider'

const courseImages: Record<string, string> = {
  'android-dev': 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&q=80',
  'ios-dev': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  'genai-ml': 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  'prompt-engineering': 'https://images.unsplash.com/photo-1655720408440-3debc14e5f3e?w=600&q=80',
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

      {/* Training Programs */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
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
