import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import CTA from '../components/CTA'
import { SectionLabel, SectionTitle, SectionSubtitle, Divider } from '../components/SectionWrapper'
import { SERVICES } from '../utils/constants'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

// Process step for each service
const PROCESS_STEPS = [
  { num: '01', label: 'Discovery', desc: 'Deep-dive assessment of your current data landscape, architecture, and pain points.' },
  { num: '02', label: 'Strategy', desc: 'Co-design a tailored roadmap with measurable milestones and defined ROI targets.' },
  { num: '03', label: 'Delivery', desc: 'Agile, iterative delivery with embedded consultants and transparent reporting.' },
  { num: '04', label: 'Enablement', desc: 'Knowledge transfer, documentation, and training ensuring your team operates independently.' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Page Header ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">

  {/* 🖼️ Background Image */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "brightness(0.25)",
    }}
  />

  {/* 🌌 Gradient Overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background:
        "linear-gradient(160deg, rgba(2,13,26,0.9) 0%, rgba(10,37,64,0.85) 60%, rgba(6,21,37,0.95) 100%)",
    }}
  />

  {/* 🔵 Animated Gradient Movement */}
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.12), transparent 40%)",
        "radial-gradient(circle at 30% 40%, rgba(0,123,255,0.18), transparent 45%), radial-gradient(circle at 70% 60%, rgba(79,209,197,0.18), transparent 45%)",
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.12), transparent 40%)",
      ],
    }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 🌐 Grid Overlay */}
  <div className="absolute inset-0 grid-overlay opacity-20 z-0" />

  {/* ✨ Glow Orbs */}
  <motion.div
    className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full z-0"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 10, repeat: Infinity }}
  />
  <motion.div
    className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full z-0"
    animate={{ scale: [1, 1.15, 1] }}
    transition={{ duration: 12, repeat: Infinity }}
  />

  {/* ✨ Floating Particles */}
  {[...Array(10)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full z-0"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -25, 0],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
      }}
    />
  ))}

  {/* Bottom Gradient Line */}
  <div className="absolute bottom-0 left-0 right-0 h-px z-10"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(0,123,255,0.3), rgba(79,209,197,0.3), transparent)",
    }}
  />

  {/* ✅ CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="max-w-3xl">
      <SectionLabel>Our Practice Areas</SectionLabel>
      <Divider />

      <SectionTitle className="text-3xl lg:text-5xl font-serif">
        Four Disciplines.<br />
        <span className="text-gradient-blue">One Partner.</span>
      </SectionTitle>

      <SectionSubtitle className="text-lg max-w-xl mt-4">
        Each practice is led by principals with 10+ years of hands-on delivery experience.
        We go deep — no generalists, no junior-heavy teams.
      </SectionSubtitle>
    </div>

    {/* Tabs */}
    <div className="flex flex-wrap gap-3 mt-12">
      {SERVICES.map((s, i) => (
        <motion.button
          key={s.id}
          onClick={() => {
            setActiveTab(i)
            document.getElementById(`service-${s.id}`)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-display font-semibold backdrop-blur-md transition-all duration-300"
          style={activeTab === i ? {
            background: `${s.color}20`,
            border: `1px solid ${s.color}50`,
            color: s.color,
          } : {
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <span>{s.icon}</span>
          <span>{s.title}</span>
        </motion.button>
      ))}
    </div>

  </div>
</section>

      {/* ── Service Detail Sections ── */}
      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={`service-${service.id}`}
          className="relative py-28 overflow-hidden"
          style={{
            background: i % 2 === 0
              ? 'linear-gradient(180deg, #061525 0%, #020d1a 100%)'
              : 'linear-gradient(180deg, #020d1a 0%, #061525 100%)',
          }}
        >
          <div className="absolute inset-0 grid-overlay opacity-30" />

          {/* Accent orb */}
          <div
            className="absolute opacity-15 rounded-full blur-[120px] pointer-events-none"
            style={{
              width: 500, height: 500,
              background: `radial-gradient(circle, ${service.color} 0%, transparent 70%)`,
              ...(i % 2 === 0 ? { right: -100, top: '20%' } : { left: -100, top: '20%' }),
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={i % 2 !== 0 ? 'lg:col-start-2' : ''}
              >
                {/* Service badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${service.color}12`, border: `1px solid ${service.color}25` }}>
                    {service.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-widest uppercase"
                      style={{ color: service.color }}>Service {service.number}</div>
                    <div className="font-serif font-black text-white text-2xl leading-tight">{service.title}</div>
                  </div>
                </div>

                <Divider color={service.color} />

                <p className="text-white/50 text-base leading-relaxed mb-8 font-body">{service.fullDesc}</p>

                {/* Offerings */}
                <div className="space-y-3 mb-10">
                  <div className="text-xs font-mono tracking-widest uppercase text-white/25 mb-4">What's Included</div>
                  {service.offerings.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.06 }}
                      className="flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
                      style={{ border: '1px solid transparent' }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${service.color}20`}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                      <span className="text-white/65 text-sm font-body">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Link to="/contact">
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                  >
                    Discuss This Service →
                  </motion.button>
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                <div className="relative rounded-3xl overflow-hidden group"
                  style={{ border: `1px solid ${service.color}20` }}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${service.color}25 0%, transparent 60%)` }} />

                  {/* Corner badge */}
                  <div className="absolute bottom-5 left-5 glass rounded-xl px-4 py-3"
                    style={{ border: `1px solid ${service.color}30` }}>
                    <div className="font-display font-black text-white text-2xl leading-none">{service.number}</div>
                    <div className="text-white/40 text-xs font-mono mt-0.5">{service.title.split(' ')[0]}</div>
                  </div>
                </div>

                {/* Mini stats row below image */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { v: '50+', l: 'Engineers' },
                    { v: '100+', l: 'Projects' },
                    { v: '15yr', l: 'Experience' },
                  ].map((stat) => (
                    <div key={stat.l} className="text-center py-3 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="font-display font-black text-lg" style={{ color: service.color }}>{stat.v}</div>
                      <div className="text-white/30 text-[10px] font-mono tracking-wider uppercase">{stat.l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Our Process ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0A2540 0%, #020d1a 100%)' }}>
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb-blue opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>How We Work</SectionLabel>
            <Divider color="#4FD1C5" />
            <SectionTitle className="text-4xl lg:text-5xl font-serif">Our Delivery Process</SectionTitle>
            <SectionSubtitle>A proven four-phase methodology built over 15 years and 200+ engagements.</SectionSubtitle>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 20, overflow: 'hidden' }}>
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 group"
                style={{ background: 'linear-gradient(160deg, #061525, #020d1a)' }}
              >
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-px h-6 bg-white/10" />
                )}

                <div className="font-mono text-4xl font-black mb-5"
                  style={{ color: 'rgba(0,123,255,0.2)' }}>{step.num}</div>

                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(0,123,255,0.08)', border: '1px solid rgba(0,123,255,0.15)' }}>
                  <div className="w-2 h-2 rounded-full bg-blue-electric group-hover:scale-150 transition-transform duration-300" />
                </div>

                <div className="font-display font-bold text-white text-lg mb-2">{step.label}</div>
                <div className="text-white/35 text-sm leading-relaxed font-body">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA
        title="Not Sure Which Service You Need?"
        subtitle="Book a complimentary 60-minute data health assessment. Our principals will diagnose your challenges and recommend the right engagement model."
        primaryLabel="Book Free Assessment"
      />

    </motion.div>
  )
}
