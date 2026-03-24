import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ServiceCard({ service, index, variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -6 }}
        className="group relative rounded-2xl p-6 overflow-hidden cursor-pointer beam-container"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          transition: 'all 0.35s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = `1px solid ${service.color}50`
          e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${service.glowColor}`
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        }}
      >
        {/* Number */}
        <div className="absolute top-4 right-5 font-mono text-xs font-bold opacity-15 text-white">
          {service.number}
        </div>

        {/* Glow spot */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
          style={{ background: service.glowColor }} />

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
          {service.icon}
        </div>

        <h3 className="font-display font-bold text-white text-lg mb-2 leading-tight">{service.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-5 font-body">{service.shortDesc}</p>

        <Link to="/services">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 group-hover:gap-3"
            style={{ color: service.color }}>
            <span>Explore</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </motion.div>
    )
  }

  // Full variant for Services page
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index % 2 === 0 ? 0 : 0.15 }}
      className="group relative rounded-3xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Top image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(6,21,37,0.9) 100%)' }} />
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest"
            style={{
              background: 'rgba(6,21,37,0.7)',
              border: `1px solid ${service.color}30`,
              color: service.color,
            }}>
            {service.icon} {service.number}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-display font-black text-white text-2xl mb-3 leading-tight">{service.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-6 font-body">{service.fullDesc}</p>

        {/* Offerings */}
        <ul className="space-y-2.5 mb-8">
          {service.offerings.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-white/60">
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: service.color }} />
              {item}
            </li>
          ))}
        </ul>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 rounded-xl font-display font-semibold text-sm text-white transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
              border: `1px solid ${service.color}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${service.color}30, ${service.color}15)`
              e.currentTarget.style.boxShadow = `0 8px 30px ${service.glowColor}`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${service.color}20, ${service.color}10)`
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Discuss This Service →
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}
