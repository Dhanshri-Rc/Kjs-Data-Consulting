import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CTA({ 
  title = 'Ready to Unlock the Value in Your Data?',
  subtitle = 'Our senior experts are ready to assess your current data landscape and design a transformation roadmap tailored to your business goals.',
  primaryLabel = 'Schedule a Free Consultation',
  primaryLink = '/contact',
  secondaryLabel = null,
  secondaryLink = '/services',
}) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A2540 0%, #061525 40%, #0d3560 70%, #0A2540 100%)',
        }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Orbs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
        style={{ background: 'radial-gradient(circle, #007BFF 0%, transparent 70%)' }} />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px] opacity-15"
        style={{ background: 'radial-gradient(circle, #4FD1C5 0%, transparent 70%)' }} />

      {/* Animated border top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,123,255,0.5), rgba(79,209,197,0.5), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,209,197,0.3), rgba(0,123,255,0.3), transparent)' }} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <div className="section-label justify-center mb-6">
            Start Your Journey
          </div>

          {/* Title */}
          <h2 className=" font-black text-4xl lg:text-6xl text-white leading-tight tracking-tight mb-6 font-serif">
            {title.split('Data').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-gradient-blue">Data</span>}
              </React.Fragment>
            ))}
          </h2>

          <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-body font-light">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to={primaryLink}>
              <motion.button
                className="btn-primary text-base px-10 py-4"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {primaryLabel}
                <svg className="ml-2 w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
            {secondaryLabel && (
              <Link to={secondaryLink}>
                <motion.button
                  className="btn-ghost text-base px-10 py-4"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {secondaryLabel}
                </motion.button>
              </Link>
            )}
          </div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-6 flex-wrap"
          >
            {['200+ Enterprise Clients', '15+ Years Experience', '12 Countries', 'No Lock-in Contracts'].map((item, i) => (
              <React.Fragment key={item}>
                <span className="text-white/30 text-xs font-mono tracking-wider">{item}</span>
                {i < 3 && <span className="text-white/10">·</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
