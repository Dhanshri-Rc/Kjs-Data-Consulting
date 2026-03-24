import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import { SectionLabel, SectionTitle, SectionSubtitle, Divider } from '../components/SectionWrapper'
import { MILESTONES, LEADERSHIP, WHY_US, METRICS } from '../utils/constants'
import { useInView, useCountUp } from '../hooks/useScrollAnimation'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

// Metric counter
function Metric({ value, suffix, label, color, index }) {
  const [ref, inView] = useInView(0.4)
  const count = useCountUp(value, 2000, inView)
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.1 }}
      className="text-center">
      <div className="font-serif font-black text-4xl lg:text-5xl mb-1" style={{ color }}>
        {count}{suffix}
      </div>
      <div className="text-white/35 text-xs font-mono tracking-wider uppercase">{label}</div>
    </motion.div>
  )
}

// Timeline item
function TimelineItem({ milestone, index }) {
  const isLeft = index % 2 === 0
  return (
    <div className={`relative flex ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col items-start lg:items-center gap-6 lg:gap-0`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65 }}
        className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-3"
          style={{ background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.2)', color: '#007BFF' }}>
          {milestone.year}
        </div>
        <h3 className="font-display font-bold text-white text-xl mb-2">{milestone.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed font-body">{milestone.desc}</p>
      </motion.div>

      {/* Center dot */}
      <div className="hidden lg:flex w-2/12 justify-center relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-4 h-4 rounded-full z-10 relative"
          style={{
            background: 'linear-gradient(135deg, #007BFF, #4FD1C5)',
            boxShadow: '0 0 15px rgba(0,123,255,0.5)',
          }}
        />
      </div>

      <div className="hidden lg:block w-5/12" />
    </div>
  )
}

// Leadership card
function LeaderCard({ leader, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.65 }}
      className="group relative rounded-2xl overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img src={leader.img} alt={leader.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(6,21,37,0.95) 100%)' }} />
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-display font-black text-white text-xl leading-tight">{leader.name}</h3>
        <div className="text-xs font-mono tracking-wider mb-3 mt-1"
          style={{ color: '#4FD1C5' }}>{leader.title}</div>
        <p className="text-white/40 text-sm leading-relaxed font-body">{leader.bio}</p>

        <motion.a
          href={leader.linkedin}
          whileHover={{ x: 3 }}
          className="inline-flex items-center gap-2 mt-4 text-xs font-mono tracking-wider"
          style={{ color: 'rgba(0,123,255,0.7)' }}
        >
          <span>LinkedIn Profile</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}

const VALUES = [
  { icon: '🎯', title: 'Outcome Obsessed', desc: 'Every engagement is measured by business impact — not the number of slides delivered.' },
  { icon: '🔬', title: 'Technically Rigorous', desc: 'We go deep. Surface-level consulting is not in our vocabulary.' },
  { icon: '🤝', title: 'Partnership First', desc: 'We embed within your teams and build lasting capability, not dependency.' },
  { icon: '🌍', title: 'Globally Minded', desc: 'Culturally fluent, internationally experienced, and locally aware.' },
  { icon: '💡', title: 'Intellectually Honest', desc: 'We tell clients what they need to hear, not just what they want to hear.' },
  { icon: '⚡', title: 'Velocity Focused', desc: 'We bias toward action. Momentum is a competitive advantage.' },
]

const OFFICE_LOCATIONS = [
  { city: 'London', role: 'Global HQ', address: '25 Canada Square, Canary Wharf, E14 5LQ', flag: '🇬🇧' },
  { city: 'New York', role: 'Americas HQ', address: 'One World Trade Center, Suite 8500', flag: '🇺🇸' },
  { city: 'Singapore', role: 'APAC HQ', address: 'Marina Bay Financial Centre, Tower 2', flag: '🇸🇬' },
  { city: 'Dubai', role: 'MEA Office', address: 'Dubai International Financial Centre', flag: '🇦🇪' },
]

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
     <section className="relative pt-36 pb-28 overflow-hidden">

  {/* 🌌 Base Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background:
        "linear-gradient(160deg, #020d1a 0%, #0A2540 60%, #061525 100%)",
    }}
  />

  {/* 🌊 Animated Gradient Overlay */}
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.12), transparent 40%)",
        "radial-gradient(circle at 30% 40%, rgba(0,123,255,0.2), transparent 45%), radial-gradient(circle at 70% 60%, rgba(79,209,197,0.18), transparent 45%)",
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.12), transparent 40%)",
      ],
    }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 🌐 Grid */}
  <div className="absolute inset-0 grid-overlay opacity-20 z-0" />

  {/* 🔵 Animated Orbs */}
  <motion.div
    className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full z-0"
    animate={{
      scale: [1, 1.2, 1],
      x: [0, -40, 0],
      y: [0, -30, 0],
    }}
    transition={{ duration: 18, repeat: Infinity }}
  />

  <motion.div
    className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full z-0"
    animate={{
      scale: [1, 1.15, 1],
      x: [0, 30, 0],
      y: [0, -20, 0],
    }}
    transition={{ duration: 20, repeat: Infinity }}
  />

  {/* ✨ Floating Particles */}
  {[...Array(12)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full z-0"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 3 + Math.random() * 3,
        repeat: Infinity,
      }}
    />
  ))}

  {/* Bottom Line */}
  <div
    className="absolute bottom-0 left-0 right-0 h-px z-10"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(0,123,255,0.3), rgba(79,209,197,0.3), transparent)",
    }}
  />

  {/* ✅ CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div>
        <SectionLabel>About KJs DataEdge</SectionLabel>
        <Divider />

        <SectionTitle className="text-3xl lg:text-5xl font-serif">
          15 Years.<br />
          <span className="text-gradient-blue">200 Clients.</span><br />
          One Mission.
        </SectionTitle>

        <SectionSubtitle className="text-lg mt-4 max-w-lg">
          KJs DataEdge was founded on a single belief: every enterprise sits on a goldmine of 
          untapped data potential. Our mission is to surface it, govern it, and turn it into 
          lasting competitive advantage.
        </SectionSubtitle>

        <div className="flex flex-wrap gap-3 mt-8">
          {['Ab Initio CoE', 'GDPR Specialists', 'Cloud-Native', 'Data Mesh Pioneers', 'BCBS 239'].map(tag => (
            <span key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-md"
              style={{
                background: 'rgba(79,209,197,0.08)',
                border: '1px solid rgba(79,209,197,0.2)',
                color: '#4FD1C5'
              }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
            alt="KJs DataEdge office"
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(0,123,255,0.2) 0%, transparent 60%)' }} />
        </div>

        {/* Floating Card */}
        <motion.div
          className="absolute -bottom-6 -left-6 animated-border glass rounded-2xl p-5"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className="font-display font-black text-4xl text-gradient-blue mb-0.5">15+</div>
          <div className="text-white/35 text-xs font-mono tracking-wider uppercase">
            Years of Global<br />Excellence
          </div>
        </motion.div>
      </motion.div>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {[
        { value: 200, suffix: '+', label: 'Enterprise Engagements', color: '#007BFF' },
        { value: 50, suffix: '+', label: 'Ab Initio Engineers', color: '#4FD1C5' },
        { value: 12, suffix: '+', label: 'Countries Active', color: '#007BFF' },
        { value: 98, suffix: '%', label: 'Client Retention', color: '#4FD1C5' },
      ].map((m, i) => (
        <Metric key={m.label} {...m} index={i} />
      ))}
    </div>

  </div>
</section>

      {/* ── Journey Timeline ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #061525 0%, #020d1a 100%)' }}>
        <div className="absolute inset-0 grid-overlay opacity-25" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <SectionLabel>Our Journey</SectionLabel>
            <Divider color="#4FD1C5" />
            <SectionTitle className="text-4xl lg:text-5xl font-serif">
              Built Milestone<br />by Milestone
            </SectionTitle>
            <SectionSubtitle>
              Every year, a new chapter. Every engagement, a deeper expertise.
            </SectionSubtitle>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(0,123,255,0.3) 10%, rgba(79,209,197,0.3) 90%, transparent)' }} />

            <div className="space-y-12 lg:space-y-16">
              {MILESTONES.map((milestone, i) => (
                <TimelineItem key={milestone.year} milestone={milestone} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0A2540 0%, #020d1a 100%)' }}>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] orb-blue opacity-15" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Our Leadership</SectionLabel>
            <Divider />
            <SectionTitle className="text-4xl lg:text-5xl font-serif">
              The Principals Behind<br />the Practice
            </SectionTitle>
            <SectionSubtitle>
              Our leadership team has collectively delivered 500+ data programmes across 30+ countries. They're not just advisors — they're practitioners.
            </SectionSubtitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #020d1a 0%, #061525 100%)' }}>
        <div className="absolute inset-0 grid-overlay opacity-25" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Our Values</SectionLabel>
            <Divider color="#4FD1C5" />
            <SectionTitle className="text-4xl lg:text-5xl font-serif">
              How We Show Up<br />for Clients
            </SectionTitle>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl p-7 overflow-hidden group"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(0,123,255,0.3)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(0,123,255,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: 'rgba(0,123,255,0.15)' }} />
                <div className="text-3xl mb-5">{v.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Offices ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #061525 100%)' }}>
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] orb-teal opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(79,209,197,0.3), transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>Our Presence</SectionLabel>
            <Divider color="#4FD1C5" />
            <SectionTitle className="text-4xl lg:text-5xl font-serif">Global Offices</SectionTitle>
            <SectionSubtitle>Four strategic locations. One global standard of excellence.</SectionSubtitle>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICE_LOCATIONS.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(79,209,197,0.12)' }}
              >
                <div className="text-3xl mb-4">{office.flag}</div>
                <div className="font-display font-black text-white text-xl mb-0.5">{office.city}</div>
                <div className="text-xs font-mono mb-3" style={{ color: '#4FD1C5' }}>{office.role}</div>
                <div className="text-white/35 text-xs font-body leading-relaxed">{office.address}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA
        title="Ready to Work with Our Team?"
        subtitle="Meet our principals and discover how our domain expertise can transform your data strategy into measurable business advantage."
        primaryLabel="Get in Touch Today"
        secondaryLabel="View Our Services"
        secondaryLink="/services"
      />

    </motion.div>
  )
}
