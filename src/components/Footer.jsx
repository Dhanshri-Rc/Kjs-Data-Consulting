import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { COMPANY, NAV_LINKS } from '../utils/constants'

const FOOTER_COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Data Governance', path: '/services' },
      { label: 'Ab Initio Consulting', path: '/services' },
      { label: 'Data Marketplace', path: '/services' },
      { label: 'Data Strategy', path: '/services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Banking & Finance', path: '/' },
      { label: 'Pharmaceuticals', path: '/' },
      { label: 'Retail & CPG', path: '/' },
      { label: 'Telecom', path: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Leadership', path: '/about' },
      { label: 'Case Studies', path: '/about' },
      { label: 'Contact', path: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#020d1a', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,123,255,0.4), rgba(79,209,197,0.4), transparent)' }} />

      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #007BFF, #4FD1C5)' }}>
                <span className="font-display font-black text-white text-sm">KJ</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-[1.05rem] leading-none">
                  KJs <span className="text-gradient-blue">DataEdge</span>
                </div>
                <div className="text-white/25 text-[0.6rem] font-mono tracking-widest uppercase mt-0.5">Consulting</div>
              </div>
            </Link>

            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs font-body">
              A global data & IT consulting firm transforming enterprise data landscapes for 15+ years. Trusted by Fortune 500 companies across Banking, Pharma, Retail and Telecom.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <a href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-white/35 hover:text-white/60 text-xs font-mono transition-colors">
                <span className="text-blue-electric">✉</span>
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-white/35 hover:text-white/60 text-xs font-mono transition-colors">
                <span className="text-teal-neon">✆</span>
                {COMPANY.phone}
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {['LI', 'TW', 'GH', 'YT'].map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-mono text-white/30 hover:text-white/60 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div className="text-white/25 text-[0.65rem] font-mono tracking-widest uppercase mb-5">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/40 hover:text-white/75 text-sm font-body transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-mono">
            © {new Date().getFullYear()} KJs DataEdge Consulting Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms', 'Cookies'].map((item, i) => (
              <React.Fragment key={item}>
                <a href="#" className="text-white/20 hover:text-white/40 text-xs font-mono transition-colors">{item}</a>
                {i < 2 && <span className="text-white/10">·</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/20 text-xs font-mono">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
