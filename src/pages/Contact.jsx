import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel, SectionTitle, SectionSubtitle, Divider } from '../components/SectionWrapper'
import { COMPANY } from '../utils/constants'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const SERVICES_OPTIONS = [
  'Data Governance',
  'Ab Initio Development & Consulting',
  'Data Marketplace Solutions',
  'Data Strategy & Transformation',
  'Multiple Services',
  'Not Sure — Need Guidance',
]

const OFFICES = [
  {
    city: 'London',
    flag: '🇬🇧',
    role: 'Global HQ',
    address: '25 Canada Square, Canary Wharf',
    postcode: 'London E14 5LQ',
    phone: '+44 20 7946 0321',
    timezone: 'GMT / BST',
    color: '#007BFF',
  },
  {
    city: 'New York',
    flag: '🇺🇸',
    role: 'Americas HQ',
    address: 'One World Trade Center, Suite 8500',
    postcode: 'New York, NY 10007',
    phone: '+1 212 946 0321',
    timezone: 'EST / EDT',
    color: '#4FD1C5',
  },
  {
    city: 'Singapore',
    flag: '🇸🇬',
    role: 'APAC Office',
    address: 'Marina Bay Financial Centre',
    postcode: 'Singapore 018983',
    phone: '+65 6946 0321',
    timezone: 'SGT (UTC+8)',
    color: '#007BFF',
  },
]

// Animated input component
function FormInput({ label, name, type = 'text', placeholder, value, onChange, required, className = '' }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className={`relative ${className}`}>
      <label className="block text-white/40 text-xs font-mono tracking-wider uppercase mb-2">
        {label}{required && <span className="text-blue-electric ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="input-futuristic"
        />
        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px rounded-full transition-all duration-300"
          style={{
            background: focused
              ? 'linear-gradient(90deg, #007BFF, #4FD1C5)'
              : 'transparent',
            opacity: focused ? 1 : 0,
            transform: focused ? 'scaleX(1)' : 'scaleX(0)',
          }} />
      </div>
    </div>
  )
}

function FormSelect({ label, name, value, onChange, options, required, className = '' }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className={`relative ${className}`}>
      <label className="block text-white/40 text-xs font-mono tracking-wider uppercase mb-2">
        {label}{required && <span className="text-blue-electric ml-1">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="input-futuristic appearance-none cursor-pointer"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.3)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '16px' }}
      >
        <option value="" style={{ background: '#061525' }}>Select an option</option>
        {options.map(opt => (
          <option key={opt} value={opt} style={{ background: '#061525' }}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

function FormTextarea({ label, name, value, onChange, placeholder, required, rows = 5 }) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="relative">
      <label className="block text-white/40 text-xs font-mono tracking-wider uppercase mb-2">
        {label}{required && <span className="text-blue-electric ml-1">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="input-futuristic resize-none"
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '',
    role: '', service: '', budget: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500)) // Simulate API call
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ── */}
     <section className="relative pt-36 pb-20 overflow-hidden">

  {/* 🖼️ Background Image */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600')",
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
        "linear-gradient(160deg, rgba(2,13,26,0.95) 0%, rgba(10,37,64,0.9) 50%, rgba(6,21,37,0.95) 100%)",
    }}
  />

  {/* 🌊 Animated Gradient */}
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.12), transparent 40%)",
        "radial-gradient(circle at 30% 40%, rgba(0,123,255,0.18), transparent 45%), radial-gradient(circle at 70% 60%, rgba(79,209,197,0.18), transparent 45%)",
        "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.12), transparent 40%), radial-gradient(circle at 80% 70%, rgba(79,209,197,0.12), transparent 40%)",
      ],
    }}
    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 🌐 Grid Overlay */}
  <div className="absolute inset-0 grid-overlay opacity-20 z-0" />

  {/* 🔵 Floating Orbs */}
  <motion.div
    className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full z-0"
    animate={{
      scale: [1, 1.2, 1],
      x: [0, -30, 0],
      y: [0, -20, 0],
    }}
    transition={{ duration: 18, repeat: Infinity }}
  />

  <motion.div
    className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full z-0"
    animate={{
      scale: [1, 1.15, 1],
      x: [0, 20, 0],
      y: [0, -15, 0],
    }}
    transition={{ duration: 20, repeat: Infinity }}
  />

  {/* ✨ Particles */}
  {[...Array(10)].map((_, i) => (
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
        "linear-gradient(90deg, transparent, rgba(0,123,255,0.3), transparent)",
    }}
  />

  {/* ✅ CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

    <div className="max-w-3xl">
      <SectionLabel>Get in Touch</SectionLabel>
      <Divider />

      <SectionTitle className="text-3xl lg:text-5xl font-serif">
        Start the<br />
        <span className="text-gradient-blue">Conversation.</span>
      </SectionTitle>

      <SectionSubtitle className="text-lg mt-4 max-w-lg">
        Whether you have a specific data challenge or just want to explore possibilities — 
        our senior experts are ready to listen. No sales pitch. No junior consultants.
      </SectionSubtitle>

      {/* Trust items */}
      <div className="flex flex-wrap gap-6 mt-10">
        {[
          { icon: '⚡', label: 'Response within 1 business day' },
          { icon: '🔒', label: 'Confidential & NDA-ready' },
          { icon: '🎯', label: 'Talk directly to a Principal' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span>{item.icon}</span>
            <span className="text-white/40 text-sm font-mono">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* ── Main Contact Section ── */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #061525 0%, #020d1a 100%)' }}>
        <div className="absolute inset-0 grid-overlay opacity-25" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-serif font-black text-white text-3xl mb-2">Our Offices</h2>
                <p className="text-white/35 text-sm font-body leading-relaxed mb-8">
                  Four strategic locations serving clients across Europe, Americas, Asia-Pacific, and the Middle East.
                </p>

                {OFFICES.map((office, i) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-2xl p-5 mb-4 group overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={(e) => e.currentTarget.style.border = `1px solid ${office.color}30`}
                    onMouseLeave={(e) => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'}
                  >
                    <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                      style={{ background: `${office.color}20` }} />

                    <div className="flex items-start gap-4 relative">
                      <div className="text-2xl mt-0.5">{office.flag}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="font-display font-bold text-white text-base">{office.city}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                            style={{ background: `${office.color}15`, color: office.color }}>
                            {office.role}
                          </span>
                        </div>
                        <div className="text-white/35 text-xs font-body leading-relaxed">
                          {office.address}, {office.postcode}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-mono" style={{ color: office.color }}>{office.phone}</span>
                          <span className="text-white/20 text-[10px] font-mono">{office.timezone}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Email & Phone */}
                <div className="rounded-2xl p-5 mt-6"
                  style={{ background: 'rgba(0,123,255,0.05)', border: '1px solid rgba(0,123,255,0.15)' }}>
                  <div className="text-white/25 text-[10px] font-mono tracking-widest uppercase mb-3">Direct Contact</div>
                  <a href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 font-mono transition-colors mb-2">
                    <span className="text-blue-electric">✉</span> {COMPANY.email}
                  </a>
                  <a href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white/80 font-mono transition-colors">
                    <span style={{ color: '#4FD1C5' }}>✆</span> {COMPANY.phone}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="relative rounded-3xl p-8 lg:p-10 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                {/* Form glow */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #007BFF, transparent)' }} />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-16"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6"
                        style={{ background: 'linear-gradient(135deg, rgba(0,123,255,0.2), rgba(79,209,197,0.2))', border: '1px solid rgba(79,209,197,0.3)' }}
                      >
                        ✓
                      </motion.div>
                      <h3 className="font-serif font-black text-white text-3xl mb-3">Message Sent!</h3>
                      <p className="text-white/45 text-base font-body max-w-sm leading-relaxed">
                        Thank you, <strong className="text-white">{form.firstName}</strong>! We've received your enquiry 
                        and a senior principal will be in touch within 1 business day.
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-xs font-mono"
                        style={{ color: '#4FD1C5' }}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4FD1C5' }} />
                        Confirmation sent to {form.email}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-8">
                        <h2 className="font-serif font-black text-white text-2xl mb-1">Send Us a Message</h2>
                        <p className="text-white/35 text-sm font-body">All enquiries are handled by a senior principal — not an account manager.</p>
                      </div>

                      {/* Name row */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <FormInput label="First Name" name="firstName" placeholder="Jane" value={form.firstName} onChange={handleChange} required />
                        <FormInput label="Last Name" name="lastName" placeholder="Smith" value={form.lastName} onChange={handleChange} required />
                      </div>

                      {/* Email */}
                      <FormInput label="Work Email" name="email" type="email" placeholder="jane@yourcompany.com" value={form.email} onChange={handleChange} required className="mb-4" />

                      {/* Company + Role */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <FormInput label="Company" name="company" placeholder="Your Organisation" value={form.company} onChange={handleChange} />
                        <FormInput label="Your Role" name="role" placeholder="Chief Data Officer" value={form.role} onChange={handleChange} />
                      </div>

                      {/* Service + Budget */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <FormSelect
                          label="Service of Interest"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          options={SERVICES_OPTIONS}
                        />
                        <FormSelect
                          label="Engagement Budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          options={['< £50K', '£50K – £200K', '£200K – £500K', '£500K – £1M', '£1M+', 'Not Yet Defined']}
                        />
                      </div>

                      {/* Message */}
                      <div className="mb-7">
                        <FormTextarea
                          label="Your Challenge or Objective"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your data challenge, transformation objective, or the type of engagement you're considering. The more context you share, the more targeted our response will be."
                          rows={5}
                        />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={!loading ? { scale: 1.02 } : {}}
                        whileTap={!loading ? { scale: 0.98 } : {}}
                        className="w-full btn-primary py-4 text-base flex items-center justify-center gap-3"
                        style={{ opacity: loading ? 0.8 : 1 }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                            />
                            Sending Enquiry...
                          </>
                        ) : (
                          <>
                            Submit Enquiry
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </motion.button>

                      <p className="text-white/20 text-xs font-mono text-center mt-4">
                        By submitting you agree to our Privacy Policy. We never share your information.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ / Process ── */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A2540 0%, #020d1a 100%)' }}>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>What to Expect</SectionLabel>
            <Divider color="#4FD1C5" />
            <SectionTitle className="text-4xl font-serif">After You Hit Submit</SectionTitle>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '📬', title: 'Response within 24hrs', desc: 'A senior principal will review your enquiry and respond personally — no automated replies.' },
              { step: '02', icon: '📞', title: '60-min Discovery Call', desc: 'A structured conversation to understand your challenge, current landscape, and success criteria.' },
              { step: '03', icon: '📋', title: 'Tailored Proposal', desc: 'A bespoke engagement framework with team structure, timeline, and commercial model.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5"
                  style={{ background: 'rgba(79,209,197,0.1)', border: '1px solid rgba(79,209,197,0.2)' }}>
                  {item.icon}
                </div>
                <div className="font-mono text-xs tracking-widest mb-2" style={{ color: '#4FD1C5' }}>STEP {item.step}</div>
                <div className="font-display font-bold text-white text-lg mb-2">{item.title}</div>
                <div className="text-white/35 text-sm font-body leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  )
}
