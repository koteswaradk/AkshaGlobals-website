import { useTheme } from '../context/ThemeContext'

export default function Contact() {
  const { isDark } = useTheme()

  // Coordinates for 23 Tech Park, Hyderabad Telangana, India 500001
  const lat = 17.3850
  const lng = 78.4867
  const address = '23 Tech Park, Hyderabad, Telangana, India 500001'

  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-teal-500 mb-2">Contact Us</h1>
        <p className={`text-center mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          We'd love to hear from you. Reach out to us anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className={`rounded-2xl shadow-lg p-8 flex flex-col gap-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-semibold text-teal-500">Get in Touch</h2>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-medium">Address</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-medium">Phone</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-medium">Email</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>info@akshaglobals.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-medium">Business Hours</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Sat: 10:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className={`rounded-2xl shadow-lg overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <iframe
              title="Aksha Globals Location"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ minHeight: '280px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className={`mt-10 rounded-2xl shadow-lg p-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-2xl font-semibold text-teal-500 mb-6">Send Us a Message</h2>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={e => {
              // TODO: Implement form submission (e.g., send to a backend API or email service)
              e.preventDefault()
            }}
          >
            <div className="flex flex-col gap-1">
              <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
              <input
                type="text"
                placeholder="Your name"
                className={`rounded-lg px-4 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
              <input
                type="email"
                placeholder="Your email"
                className={`rounded-lg px-4 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className={`rounded-lg px-4 py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
