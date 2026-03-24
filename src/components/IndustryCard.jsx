import React from 'react'
import { motion } from 'framer-motion'

export default function IndustryCard({ industry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative rounded-2xl p-7 overflow-hidden cursor-default"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${industry.color}40`
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5), 0 0 40px ${industry.color}20`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Glow spot on hover */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{ background: `${industry.color}25` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${industry.color}12`, border: `1px solid ${industry.color}25` }}
      >
        {industry.icon}
      </div>

      {/* Name */}
      <h3 className="font-display font-bold text-white text-lg mb-2 leading-tight">{industry.name}</h3>

      {/* Desc */}
      <p className="text-white/40 text-sm leading-relaxed mb-5 font-body">{industry.desc}</p>

      {/* Client count */}
      <div
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
        style={{
          background: `${industry.color}10`,
          border: `1px solid ${industry.color}20`,
          color: industry.color,
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: industry.color }} />
        {industry.clients}
      </div>
    </motion.div>
  )
}
