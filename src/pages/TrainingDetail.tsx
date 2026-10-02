import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'
import type { CourseLevel } from '../data/courses'
import PaymentModal from '../components/PaymentModal'
import SEO from '../components/SEO'

const detailPageGradients: Record<string, string> = {
  'android-dev': 'from-m3-primary-20 via-m3-primary to-m3-primary-50',
  internship: 'from-m3-secondary-20 via-m3-secondary to-m3-secondary-30',
  'genai-ml': 'from-m3-tertiary-20 via-m3-tertiary to-m3-tertiary-30',
  'prompt-engineering': 'from-m3-primary-20 via-m3-tertiary-30 to-m3-primary',
  'kmp-dev': 'from-m3-primary-20 via-m3-primary-30 to-m3-secondary-30',
  'cmp-dev': 'from-m3-tertiary-20 via-m3-primary-30 to-m3-tertiary-30',
}

export default function TrainingDetail() {
  const { id } = useParams<{ id: string }>()
  const course = courses.find(item => item.id === id)
  const [activeLevel, setActiveLevel] = useState<string>('Basic')
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

  const currentLevel = course.levels.find(level => level.name === activeLevel) ?? course.levels[0]
  const isInternship = course.id === 'internship'
  const selectLevel = (level: CourseLevel) => setActiveLevel(level.name)
  const handleRegister = (level: CourseLevel) => {
    setSelectedLevel(level)
    setPaymentOpen(true)
  }

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
      <SEO title={course.name} description={course.description} path={`/training/${course.id}`} />
      <div className={`bg-gradient-to-br ${detailPageGradients[course.id] ?? course.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/training" className="text-white/80 hover:text-white text-sm mb-6 inline-flex">← All Courses</Link>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            <div className="text-8xl">{course.icon}</div>
            <div><h1 className="text-4xl md:text-5xl font-bold mb-2">{course.name}</h1><p className="text-xl text-white/90">{course.tagline}</p></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-3">Course Overview</h2>
          <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant leading-relaxed text-lg max-w-3xl">{course.description}</p>
        </div>
        {isInternship && (
          <div className="mb-10 rounded-m3-xl border border-m3-outline-variant bg-m3-surface-container-lowest p-5">
            <h3 className="text-xl font-bold text-m3-on-surface mb-2">Contact Us for Internship Request</h3>
            <p className="text-sm text-m3-on-surface-variant mb-4">
              Send your internship request with your college name, degree, and resume.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:infoakshaglobal@gmail.com?subject=Internship%20Request%20-%20Aksha%20Globals"
                className="inline-flex items-center justify-center rounded-full bg-m3-primary px-5 py-2.5 text-sm font-semibold text-m3-on-primary hover:bg-m3-primary/90"
              >
                Email Internship Request
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-m3-outline px-5 py-2.5 text-sm font-semibold text-m3-on-surface hover:bg-m3-surface-container"
              >
                Contact Us Page
              </Link>
            </div>
          </div>
        )}

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Students enrolled', course.students],
            ['Course rating', `${course.rating}/5`],
            ['Lead instructor', course.instructor],
            ['Skill levels', course.levels.length],
          ].map(([label, value]) => (
            <div key={label} className="rounded-m3-xl bg-m3-surface-container dark:bg-m3-dark-surface-container p-5">
              <div className="text-xs uppercase tracking-wide text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">{label}</div>
              <div className="mt-2 text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{value}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface mb-4">Choose Your Level</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-10">
          {course.levels.map(level => (
            <button key={level.name} type="button" onClick={() => selectLevel(level)} className={`rounded-m3-xl border p-5 text-left transition-all ${activeLevel === level.name ? 'border-m3-primary bg-m3-primary-container/40' : 'border-m3-outline-variant bg-m3-surface-container-lowest'}`}>
              <div className="flex items-center justify-between gap-3"><div><div className="text-lg font-bold">{level.name}</div><div className="text-sm">{level.duration}</div></div><div className="text-lg font-bold text-m3-primary">₹{level.price.toLocaleString()}</div></div>
              <ul className="mt-4 space-y-2">{level.curriculum.slice(0, 3).map(item => <li key={item} className="text-sm">• {item}</li>)}</ul>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2"><h3 className="text-xl font-bold mb-4">{currentLevel.name} Curriculum</h3><div className="space-y-2">{currentLevel.curriculum.map((item, index) => <div key={item} className="flex items-start gap-3 p-3 bg-m3-surface-container rounded-m3"><span className="font-bold">{index + 1}</span><span className="text-sm">{item}</span></div>)}</div></div>
          <div className="bg-m3-surface-container-lowest rounded-m3-xl shadow-m3-2 p-6 border border-m3-outline-variant h-fit">
            <div className="text-center mb-6"><div className="text-3xl font-bold">{isInternship ? 'Free' : `₹${currentLevel.price.toLocaleString()}`}</div><div className="text-sm mt-1">{currentLevel.duration} program</div></div>
            <div className="space-y-3 mb-6 text-sm"><div>✅ {currentLevel.curriculum.length} topics covered</div><div>✅ Certificate of completion</div><div>✅ Mentor support</div><div>✅ Project-based learning</div></div>
            {isInternship ? (
              <a
                href="mailto:infoakshaglobal@gmail.com?subject=Internship%20Request%20-%20Aksha%20Globals"
                className="block w-full py-3 bg-m3-primary hover:bg-m3-primary/90 text-center text-m3-on-primary font-bold rounded-full text-lg"
              >
                Apply via Email
              </a>
            ) : (
              <>
                <button onClick={() => handleRegister(currentLevel)} className="w-full py-3 bg-m3-primary hover:bg-m3-primary/90 text-m3-on-primary font-bold rounded-full text-lg">Register &amp; Pay</button>
                <div className="mt-6 space-y-2">{course.levels.map(level => <button key={level.name} onClick={() => handleRegister(level)} className="w-full flex justify-between text-sm hover:underline"><span>{level.name}</span><span>₹{level.price.toLocaleString()} · Enroll →</span></button>)}</div>
              </>
            )}
          </div>
        </div>
      </div>

      {!isInternship && selectedLevel && <PaymentModal isOpen={paymentOpen} onClose={() => setPaymentOpen(false)} courseName={course.name} level={selectedLevel.name} price={selectedLevel.price} />}
    </div>
  )
}
