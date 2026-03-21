import SEO from '../components/SEO'

export default function Contact() {
  // Coordinates for 23 Tech Park, Hyderabad Telangana, India 500001
  const lat = 17.3850
  const lng = 78.4867
  const address = '23 Tech Park, Hyderabad, Telangana, India 500001'

  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-m3-surface dark:bg-m3-dark-surface text-m3-on-surface dark:text-m3-dark-on-surface">
      <SEO
        title="Contact Us"
        description="Get in touch with Aksha Globals — reach us at our Hyderabad office or send us a message."
        path="/contact"
      />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-m3-primary dark:text-m3-dark-primary mb-2">Contact Us</h1>
        <p className="text-center mb-10 text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
          We'd love to hear from you. Reach out to us anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="rounded-m3-xl shadow-m3-1 p-8 flex flex-col gap-6 bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high">
            <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary">Get in Touch</h2>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-medium text-m3-on-surface dark:text-m3-dark-on-surface">Address</p>
                <p className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">{address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-medium text-m3-on-surface dark:text-m3-dark-on-surface">Phone</p>
                <p className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-medium text-m3-on-surface dark:text-m3-dark-on-surface">Email</p>
                <p className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">info@akshaglobals.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-medium text-m3-on-surface dark:text-m3-dark-on-surface">Business Hours</p>
                <p className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">Sat: 10:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-m3-xl shadow-m3-1 overflow-hidden bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high">
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
        <div className="mt-10 rounded-m3-xl shadow-m3-1 p-8 bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high">
          <h2 className="text-2xl font-semibold text-m3-primary dark:text-m3-dark-primary mb-6">Send Us a Message</h2>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={e => {
              // TODO: Implement form submission (e.g., send to a backend API or email service)
              e.preventDefault()
            }}
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xs px-4 py-2 text-sm border border-m3-outline dark:border-m3-dark-outline bg-transparent text-m3-on-surface dark:text-m3-dark-on-surface focus:outline-none focus:border-m3-primary focus:border-2 placeholder-m3-on-surface-variant dark:placeholder-m3-dark-on-surface-variant"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="rounded-xs px-4 py-2 text-sm border border-m3-outline dark:border-m3-dark-outline bg-transparent text-m3-on-surface dark:text-m3-dark-on-surface focus:outline-none focus:border-m3-primary focus:border-2 placeholder-m3-on-surface-variant dark:placeholder-m3-dark-on-surface-variant"
              />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-sm text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="rounded-xs px-4 py-2 text-sm border border-m3-outline dark:border-m3-dark-outline bg-transparent text-m3-on-surface dark:text-m3-dark-on-surface focus:outline-none focus:border-m3-primary focus:border-2 resize-none placeholder-m3-on-surface-variant dark:placeholder-m3-dark-on-surface-variant"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#F97316] text-white hover:bg-[#EA580C] hover:shadow-m3-1 font-semibold text-sm transition-colors duration-200"
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
