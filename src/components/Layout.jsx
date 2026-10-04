import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import { SITE } from '../data/site.js'

export function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="CodeNLive home">
      <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-brand text-white shadow-md shadow-orange-200">
        <svg viewBox="0 0 64 64" className="w-6 h-6"><path d="M24 20 12 32l12 12M40 20l12 12-12 12" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="32" r="5" fill="currentColor"/></svg>
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
          CodeN<span className="text-brand">Live</span>
        </span>
        <span className={`block text-[10.5px] font-medium ${light ? 'text-stone-400' : 'text-slate-500'}`}>by {SITE.companyShort}</span>
      </span>
    </Link>
  )
}

const NAV = [
  { to: '/courses', label: 'Courses' },
  { to: '/#how', label: 'How it works' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => setOpen(false), [loc.pathname, loc.hash])

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-slate-600">
          {NAV.map((n) =>
            n.to.includes('#') ? (
              <Link key={n.to} to={n.to} className="hover:text-brand transition-colors">{n.label}</Link>
            ) : (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `hover:text-brand transition-colors ${isActive ? 'text-brand' : ''}`}>{n.label}</NavLink>
            ),
          )}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/courses" className="bg-brand hover:bg-brand-dark text-white text-[15px] font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-md shadow-orange-200">
            Enroll now
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 text-slate-700" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-white px-4 pb-4 pt-2">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="block px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-brand-soft hover:text-brand">{n.label}</Link>
          ))}
          <Link to="/courses" className="block text-center mt-3 bg-brand text-white font-semibold px-5 py-3 rounded-lg">Enroll now</Link>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm text-stone-400 leading-relaxed">
            Live coding courses with real practice, proctored exams and certificates anyone can verify.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Learn</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses" className="hover:text-brand">All courses</Link></li>
            <li><Link to="/certificates" className="hover:text-brand">Certificates</Link></li>
            <li><a href={SITE.verifyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Verify a certificate</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={SITE.anazkUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Anazk Technologies</a></li>
            <li><a href={SITE.codencommitUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">CodeNCommit</a></li>
            <li><Link to="/terms" className="hover:text-brand">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-brand">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-brand">Refund & Cancellation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-brand break-all"><Mail size={15} />{SITE.email}</a></li>
            <li><a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-brand"><Phone size={15} />{SITE.phone}</a></li>
            <li className="flex items-center gap-2"><MapPin size={15} />{SITE.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-stone-500">
          <span>© {new Date().getFullYear()} {SITE.company}. All rights reserved.</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand" /> CodeNLive is a product of {SITE.company}</span>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppButton() {
  const msg = encodeURIComponent('Hi! I want to know more about CodeNLive courses.')
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold pl-3.5 pr-4 py-3 rounded-full shadow-lg transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
