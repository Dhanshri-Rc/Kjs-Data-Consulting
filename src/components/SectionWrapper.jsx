import React from 'react'
import { motion } from 'framer-motion'

export function SectionWrapper({ children, className = '', id }) {
  return (
    <section id={id} className={`relative py-28 overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

export function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-label mb-4"
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ children, className = '' }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className={`font-display font-black text-white tracking-tight leading-tight mb-5 ${className}`}
    >
      {children}
    </motion.h2>
  )
}

export function SectionSubtitle({ children, className = '' }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`text-white/45 leading-relaxed font-body font-light ${className}`}
    >
      {children}
    </motion.p>
  )
}

export function Divider({ color = '#007BFF' }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="origin-left w-12 h-0.5 rounded-full mb-6"
      style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
    />
  )
}
