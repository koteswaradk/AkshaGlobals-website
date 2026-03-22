import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Logo = () => {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#1a6a7a"/>
        <circle cx="20" cy="20" r="18" fill="none" stroke="#4DB8D6" strokeWidth="1.5"/>
        <text x="20" y="27" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="serif">A</text>
      </svg>
    )
  }

  return (
    <img
      src="https://github.com/user-attachments/assets/a3566f73-012a-405e-a33f-dd12f0982201"
      alt="Aksha Globals Logo"
      width="40"
      height="40"
      className="rounded-full object-cover"
      onError={() => setImgError(true)}
    />
  )
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isStudio = location.pathname === '/studio'

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/training', label: 'Training' },
    // { to: '/studio', label: 'Studio' }, // Hidden for now — can be re-enabled in the future
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-m3-on-primary-container dark:text-m3-dark-on-primary-container bg-m3-primary-container dark:bg-m3-dark-primary-container'
        : 'text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant hover:text-m3-primary dark:hover:text-m3-dark-primary'
    }`

  return (
    <nav className="bg-m3-surface-container-low dark:bg-m3-dark-surface-container shadow-m3-1 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              window.location.reload()
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Logo />
            <span className="text-xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">
              Aksha<span className="text-m3-primary dark:text-m3-dark-primary"> Globals{isStudio ? ' Studios' : ''}</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-m3-surface-container-high dark:bg-m3-dark-surface-container-high hover:bg-m3-surface-container-highest dark:hover:bg-m3-dark-surface-container-highest transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-m3-surface-container-high dark:bg-m3-dark-surface-container-high"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant hover:bg-m3-surface-container-high dark:hover:bg-m3-dark-surface-container-high"
              aria-label="Open menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-m3-surface-container dark:bg-m3-dark-surface-container border-t border-m3-outline-variant dark:border-m3-dark-outline px-4 py-3 flex flex-col gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-m3-on-primary-container dark:text-m3-dark-on-primary-container bg-m3-primary-container dark:bg-m3-dark-primary-container'
                    : 'text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant hover:text-m3-primary dark:hover:text-m3-dark-primary hover:bg-m3-surface-container-high dark:hover:bg-m3-dark-surface-container-high'
                }`
              }
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
