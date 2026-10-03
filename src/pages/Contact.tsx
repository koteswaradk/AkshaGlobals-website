import SEO from '../components/SEO'

export default function Contact() {
  // Coordinates for Vijayanagar, Bengaluru, Karnataka, India 560040
  const lat = 12.9696
  const lng = 77.5337
  const address =
    '51/102, 20th, Marenahalli Main Rd, Govindaraja Nagar Ward, PF Layout, Vijayanagar, Bengaluru, Karnataka 560040'

  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`

  return (
    <div className="min-h-screen bg-[#020b1a] px-4 py-12 text-white sm:px-6 lg:px-8">
      <SEO
        title="Contact Us"
        description="Get in touch with Aksha Globals — visit our Bengaluru office or contact us by phone or email."
        path="/contact"
      />
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-center text-4xl font-black tracking-tight text-white">Contact Us</h1>
        <p className="mb-10 text-center text-slate-300">
          We'd love to hear from you. Reach out to us anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="flex flex-col gap-6 rounded-m3-xl border border-cyan-400/20 bg-slate-900/55 p-8 shadow-[0_20px_45px_rgba(2,6,23,0.45)]">
            <h2 className="text-2xl font-semibold text-cyan-300">Get in Touch</h2>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="text-sm text-slate-300">{address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p className="text-sm text-slate-300">+91 9740488603</p>
                <p className="text-sm text-slate-300">+91 7795589555</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-sm text-slate-300">infoakshaglobal@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-medium text-white">Business Hours</p>
                <p className="text-sm text-slate-300">Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p className="text-sm text-slate-300">Sat: 10:00 AM – 2:00 PM</p>
              </div>
            </div>

            <div className="rounded-m3-lg border border-cyan-500/15 bg-slate-900/70 p-4">
              <p className="mb-2 font-medium text-white">Internship Requests</p>
              <p className="mb-3 text-sm text-slate-300">
                College students can send internship requests with resume and academic details.
              </p>
              <a
                href="mailto:infoakshaglobal@gmail.com?subject=Internship%20Request%20-%20Aksha%20Globals"
                className="inline-flex items-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Internship Request
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-m3-xl border border-cyan-400/20 bg-slate-900/55 shadow-[0_20px_45px_rgba(2,6,23,0.45)]">
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
      </div>
    </div>
  )
}
