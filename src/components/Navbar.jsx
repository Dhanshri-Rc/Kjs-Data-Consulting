import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile on route change
  useEffect(() => setMobileOpen(false), [location])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/30  ${
          scrolled
            ? 'glass-dark border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <div className="relative w-11 h-10 rounded-xl overflow-hidden flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #007BFF, #4FD1C5)' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black text-white text-xs leading-none">KJs</span>
              </div>
              <div className="absolute  transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #4FD1C5, #007BFF)' }} />
            </div>
            <div>
              <div className="font-display font-bold text-white text-[1.05rem] leading-tight">
                 <span className="text-gradient-blue">DataEdge</span>
              </div>
              <div className="text-white/80 text-[0.6rem] font-mono tracking-widest uppercase leading-none">
                Consulting
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 rounded-lg text-[16px] font-body font-semi-bold transition-all duration-200 ${
                      active ? 'text-white' : 'text-white hover:text-blue-500'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'rgba(0,123,255,0.12)', border: '1px solid rgba(0,123,255,0.2)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="h-4 w-px bg-white/10" />
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm py-2.5 px-6"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'linear-gradient(160deg, #020d1a 0%, #0A2540 100%)' }}
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-overlay opacity-30" />

            <div className="relative flex flex-col items-center justify-center h-full gap-8 px-8">
              {/* Logo */}
              <Link to="/" className="mb-8">
                <span className="font-display font-bold text-2xl text-white">
                  KJs <span className="text-gradient-blue">DataEdge</span>
                </span>
              </Link>

              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-3xl font-bold transition-colors ${
                      location.pathname === link.path
                        ? 'text-gradient-blue'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link to="/contact">
                  <button className="btn-primary">Get in Touch →</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
