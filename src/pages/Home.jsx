import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import IndustryCard from '../components/IndustryCard'
import CTA from '../components/CTA'
import { SectionWrapper, SectionLabel, SectionTitle, SectionSubtitle, Divider } from '../components/SectionWrapper'
import { SERVICES, INDUSTRIES, WHY_US, METRICS, TESTIMONIALS } from '../utils/constants'
import { useInView, useCountUp } from '../hooks/useScrollAnimation'

// ── Metric counter box ────────────────────────────────────────────────────────
function MetricBox({ metric, index }) {
  const [ref, inView] = useInView(0.4)
  const count = useCountUp(metric.value, 2000, inView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="stat-card group"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at center, rgba(0,123,255,0.06), transparent 70%)' }} />
      <div className="font-display text-4xl font-black mb-1 text-gradient-blue">
        {count}{metric.suffix}
      </div>
      <div className="text-white/40 text-xs font-mono tracking-wider uppercase">{metric.label}</div>
    </motion.div>
  )
}

// ── Testimonial card ──────────────────────────────────────────────────────────
function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.65 }}
      className="relative rounded-2xl p-7 animated-border"
      style={{ background: 'rgba(255,255,255,0.025)' }}
    >
      {/* Quote mark */}
      <div className="absolute top-4 right-5 font-display text-6xl font-black text-white/[0.04] leading-none select-none">"</div>
      <p className="text-white/60 text-sm leading-relaxed italic mb-6 font-body">"{testimonial.quote}"</p>
      <div className="flex items-center gap-3">
        <img src={testimonial.img} alt={testimonial.author}
          className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10" />
        <div>
          <div className="text-white font-display font-semibold text-sm">{testimonial.author}</div>
          <div className="text-white/35 text-xs font-mono">{testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Why Us item ───────────────────────────────────────────────────────────────
function WhyItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="flex gap-4 group"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: 'rgba(0,123,255,0.1)', border: '1px solid rgba(0,123,255,0.2)' }}>
        {item.icon}
      </div>
      <div>
        <div className="font-display font-bold text-white text-sm mb-1">{item.title}</div>
        <div className="text-white/40 text-sm leading-relaxed font-body">{item.desc}</div>
      </div>
    </motion.div>
  )
}

// ── Page transition wrapper ───────────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
      <Hero />

      {/* ── Services Overview ── */}
      {/* <SectionWrapper className="bg-mesh-dark">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionLabel>What We Do</SectionLabel>
            <Divider />
            <SectionTitle className="text-4xl lg:text-5xl font-serif">
              Four Practice Areas.<br />One Trusted Partner.
            </SectionTitle>
            <SectionSubtitle className="text-base max-w-lg">
              Each practice is led by principals with 10+ years of hands-on delivery experience —
              not just slide decks. We solve the problems others find too complex.
            </SectionSubtitle>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} variant="compact" />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <Link to="/services">
              <motion.button className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                View All Services →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </SectionWrapper> */}


<SectionWrapper className="relative overflow-hidden bg-[#020d1a]">

  {/* 🌌 Animated Gradient Background */}
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.15), transparent 40%)",
        "radial-gradient(circle at 30% 40%, rgba(0,123,255,0.18), transparent 45%), radial-gradient(circle at 70% 60%, rgba(79,209,197,0.18), transparent 45%)",
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.15), transparent 40%)",
      ],
    }}
    transition={{ duration: 12, repeat: Infinity }}
  />

  {/* Grid Overlay */}
  <div className="absolute inset-0 grid-overlay opacity-30 z-0" />

  {/* Glow Effects */}
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-120px] left-[-120px]"
  />
  <motion.div
    animate={{ scale: [1, 1.15, 1] }}
    transition={{ duration: 12, repeat: Infinity }}
    className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-100px]"
  />

  {/* Floating Particles */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
      }}
    />
  ))}

  {/* CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mb-14"
    >
      <SectionLabel>What We Do</SectionLabel>
      <Divider />

      <SectionTitle className="text-4xl lg:text-5xl font-serif">
        Four Practice Areas One Trusted Partner.
      </SectionTitle>

      <SectionSubtitle className="text-base max-w-lg">
        Each practice is led by principals with 10+ years of hands-on delivery experience —
        not just slide decks. We solve the problems others find too complex.
      </SectionSubtitle>
    </motion.div>

    {/* SERVICES GRID */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {SERVICES.map((service, i) => (
        <motion.div
          key={service.id}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <ServiceCard service={service} index={i} variant="compact" />
        </motion.div>
      ))}
    </motion.div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="text-center mt-12"
    >
      <Link to="/services">
        <motion.button
          className="btn-ghost"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          View All Services →
        </motion.button>
      </Link>
    </motion.div>
  </div>
</SectionWrapper>

      {/* ── Industries ── */}
    <SectionWrapper className="relative overflow-hidden">
  
  {/* 🌌 Base Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(180deg, #061525 0%, #020d1a 100%)",
    }}
  />

  {/* 🔵 Animated Gradient Waves */}
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.12), transparent 40%)",
        "radial-gradient(circle at 30% 40%, rgba(0,123,255,0.18), transparent 45%), radial-gradient(circle at 70% 60%, rgba(79,209,197,0.18), transparent 45%)",
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.12), transparent 40%)",
      ],
    }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 🌐 Grid Overlay */}
  <div className="absolute inset-0 grid-overlay opacity-20 z-0" />

  {/* ✨ Floating Glow Orbs */}
  <motion.div
    className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px] z-0"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 10, repeat: Infinity }}
  />
  <motion.div
    className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px] z-0"
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
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
      }}
    />
  ))}

  {/* ✅ CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
      
      <div className="max-w-xl">
        <SectionLabel>Deep Vertical Expertise</SectionLabel>
        <Divider color="#4FD1C5" />

        <SectionTitle className="text-4xl lg:text-5xl font-serif">
          Industries We<br />Serve
        </SectionTitle>

        <SectionSubtitle>
          We embed domain knowledge into every engagement — not just technology skills.
          Our consultants have prior industry tenure in the sectors they advise.
        </SectionSubtitle>
      </div>

      {/* Animated Stat Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="relative rounded-2xl p-6 text-center min-w-[200px] backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="font-display text-5xl font-black text-gradient-blue mb-1">
          185+
        </div>
        <div className="text-white/35 text-xs font-mono tracking-widest uppercase">
          Total Clients Across All Industries
        </div>
      </motion.div>
    </div>

    {/* INDUSTRY GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {INDUSTRIES.map((ind, i) => (
        <IndustryCard key={ind.name} industry={ind} index={i} />
      ))}
    </div>

  </div>
</SectionWrapper>

      {/* ── Metrics ── */}
      <div className="relative py-12 overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #020d1a 0%, #0A2540 50%, #020d1a 100%)' }}>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,123,255,0.05), transparent)' }} />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {METRICS.map((m, i) => <MetricBox key={m.label} metric={m} index={i} />)}
          </div>
        </div>
      </div>

      {/* ── About Preview ── */}
      <SectionWrapper className="relative overflow-hidden">

  {/* 🌌 Base Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(180deg, #061525 0%, #020d1a 100%)",
    }}
  />

  {/* 🔵 Animated Gradient Movement */}
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        "radial-gradient(circle at 15% 30%, rgba(0,123,255,0.12), transparent 40%), radial-gradient(circle at 85% 70%, rgba(79,209,197,0.1), transparent 40%)",
        "radial-gradient(circle at 25% 40%, rgba(0,123,255,0.18), transparent 45%), radial-gradient(circle at 75% 60%, rgba(79,209,197,0.15), transparent 45%)",
        "radial-gradient(circle at 15% 30%, rgba(0,123,255,0.12), transparent 40%), radial-gradient(circle at 85% 70%, rgba(79,209,197,0.1), transparent 40%)",
      ],
    }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 🌐 Subtle Grid */}
  <div className="absolute inset-0 grid-overlay opacity-20 z-0" />

  {/* ✨ Glow Effects */}
  <motion.div
    className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px] z-0"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 12, repeat: Infinity }}
  />
  <motion.div
    className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-100px] z-0"
    animate={{ scale: [1, 1.15, 1] }}
    transition={{ duration: 14, repeat: Infinity }}
  />

  {/* ✨ Floating Particles */}
  {[...Array(8)].map((_, i) => (
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
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
      }}
    />
  ))}

  {/* ✅ CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
            alt="KJs DataEdge global team"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent" />
        </div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 text-center backdrop-blur-md border border-white/10"
          style={{ animation: 'float 7s ease-in-out infinite' }}
        >
          <div className="text-4xl font-black text-gradient-blue">15+</div>
          <div className="text-white/40 text-xs font-mono uppercase">
            Years of Global Excellence
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute -top-5 -left-5 glass rounded-2xl p-4 backdrop-blur-md border border-white/10"
          style={{ animation: 'float 9s ease-in-out 2s infinite' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/20">🏆</div>
            <div>
              <div className="text-white font-bold text-xs">Fortune 500</div>
              <div className="text-white/35 text-[10px] font-mono">Trusted Partner</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionLabel>About KJs DataEdge</SectionLabel>
        <Divider />

        <SectionTitle className="text-4xl lg:text-5xl font-serif">
          Built on Expertise.<br />Driven by Outcomes.
        </SectionTitle>

        <SectionSubtitle className="text-base mb-8">
          Founded in London in 2009 as a specialist Ab Initio consultancy, we've grown into a global 
          data & IT consulting firm trusted across Banking, Pharma, Retail, and Telecom.
        </SectionSubtitle>

        <p className="text-white/35 text-sm leading-relaxed mb-10">
          We embed domain knowledge, regulatory understanding, and business acumen into every engagement —
          enabling long-term independence for our clients.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {['Ab Initio CoE', 'GDPR Specialists', 'Data Mesh', 'Cloud-Native', 'BCBS 239'].map(tag => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-mono border border-blue-500/30 text-cyan-300 bg-blue-500/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link to="/about">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Our Story & Team →
          </motion.button>
        </Link>
      </motion.div>

    </div>
  </div>
</SectionWrapper>

      {/* ── Why Us ── */}
     <SectionWrapper className="relative overflow-hidden">

  {/* 🌌 Base Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(180deg, #020d1a 0%, #061525 100%)",
    }}
  />

  {/* 🔵 Animated Gradient Flow */}
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        "radial-gradient(circle at 10% 20%, rgba(0,123,255,0.12), transparent 40%), radial-gradient(circle at 90% 80%, rgba(79,209,197,0.1), transparent 40%)",
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.15), transparent 45%)",
        "radial-gradient(circle at 10% 20%, rgba(0,123,255,0.12), transparent 40%), radial-gradient(circle at 90% 80%, rgba(79,209,197,0.1), transparent 40%)",
      ],
    }}
    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 🌐 Grid Overlay */}
  <div className="absolute inset-0 grid-overlay opacity-20 z-0" />

  {/* ✨ Glow Blobs */}
  <motion.div
    className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[130px] rounded-full top-[-120px] left-[-120px] z-0"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 12, repeat: Infinity }}
  />
  <motion.div
    className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px] z-0"
    animate={{ scale: [1, 1.15, 1] }}
    transition={{ duration: 14, repeat: Infinity }}
  />

  {/* ✨ Floating Particles */}
  {[...Array(6)].map((_, i) => (
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
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
      }}
    />
  ))}

  {/* ✅ CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT */}
      <div>
        <SectionLabel>Why KJs DataEdge</SectionLabel>
        <Divider color="#4FD1C5" />

        <SectionTitle className="text-4xl lg:text-5xl font-serif">
          What Sets Us Apart<br />from Every Other<br />Data Firm
        </SectionTitle>

        <SectionSubtitle className="text-base mt-4">
          We don't sell consulting hours. We sell measurable outcomes — faster pipelines,
          cleaner data, smarter decisions, and a team that's honest about what it takes.
        </SectionSubtitle>

        {/* IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-10 rounded-2xl overflow-hidden border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80"
            alt="Global consulting"
            className="w-full h-48 object-cover opacity-60"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/40 to-cyan-400/20">
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-1">200+</div>
              <div className="text-white/70 text-xs font-mono uppercase tracking-widest">
                Enterprise Engagements Delivered
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="space-y-6 pt-4">
        {WHY_US.map((item, i) => (
          <WhyItem key={item.title} item={item} index={i} />
        ))}
      </div>

    </div>
  </div>
</SectionWrapper>

      {/* ── Testimonials ── */}
     <SectionWrapper className="relative overflow-hidden">

  {/* 🌌 Base Dark Mesh */}
  <div className="absolute inset-0 z-0 bg-[#020d1a]" />

  {/* 🔵 Soft Animated Gradient (very subtle for testimonials) */}
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        "radial-gradient(circle at 30% 30%, rgba(0,123,255,0.08), transparent 50%), radial-gradient(circle at 70% 70%, rgba(79,209,197,0.08), transparent 50%)",
        "radial-gradient(circle at 40% 40%, rgba(0,123,255,0.12), transparent 55%), radial-gradient(circle at 60% 60%, rgba(79,209,197,0.12), transparent 55%)",
        "radial-gradient(circle at 30% 30%, rgba(0,123,255,0.08), transparent 50%), radial-gradient(circle at 70% 70%, rgba(79,209,197,0.08), transparent 50%)",
      ],
    }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 🌐 Grid Overlay */}
  <div className="absolute inset-0 grid-overlay opacity-15 z-0" />

  {/* ✨ Minimal Floating Particles */}
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-400 rounded-full z-0"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -15, 0],
        opacity: [0.1, 0.6, 0.1],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
      }}
    />
  ))}

  {/* ✨ Soft Glow (very light) */}
  <motion.div
    className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full top-[-100px] left-[20%] z-0"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 14, repeat: Infinity }}
  />

  {/* ✅ CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center max-w-2xl mx-auto mb-14">
      <SectionLabel>Client Voices</SectionLabel>
      <Divider color="#4FD1C5" />

      <SectionTitle className="text-4xl lg:text-5xl font-serif">
        Trusted by the World's <br />Most Data-Intensive Organisations
      </SectionTitle>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {TESTIMONIALS.map((t, i) => (
        <TestimonialCard key={i} testimonial={t} index={i} />
      ))}
    </div>

  </div>
</SectionWrapper>

      {/* ── CTA ── */}
      <CTA
        secondaryLabel="Explore Services"
        secondaryLink="/services"
      />

    </motion.div>
  )
}
