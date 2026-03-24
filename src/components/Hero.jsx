// import React, { useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { HERO_STATS } from '../utils/constants'
// import { useInView, useCountUp } from '../hooks/useScrollAnimation'

// // Animated stat counter
// function StatItem({ stat, index }) {
//   const [ref, inView] = useInView(0.5)
//   const count = useCountUp(stat.value, 1800, inView)

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
//       className="text-center"
//     >
//       <div className="font-display text-3xl lg:text-4xl font-black leading-none mb-1">
//         <span className="text-gradient-blue">{count}{stat.suffix}</span>
//       </div>
//       <div className="text-white/40 text-xs font-mono tracking-wider uppercase">{stat.label}</div>
//     </motion.div>
//   )
// }

// // Floating badge
// function FloatingBadge({ children, className, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className={`animated-border glass rounded-2xl p-4 ${className}`}
//       style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
//     >
//       {children}
//     </motion.div>
//   )
// }

// // Particle dot
// function Dot({ x, y, size, opacity, delay }) {
//   return (
//     <motion.div
//       className="absolute rounded-full"
//       style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: '#007BFF' }}
//       animate={{ opacity: [opacity, opacity * 2, opacity], scale: [1, 1.5, 1] }}
//       transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay, ease: 'easeInOut' }}
//     />
//   )
// }

// const DOTS = Array.from({ length: 20 }, (_, i) => ({
//   id: i,
//   x: Math.random() * 100,
//   y: Math.random() * 100,
//   size: Math.random() * 3 + 1,
//   opacity: Math.random() * 0.3 + 0.1,
//   delay: Math.random() * 4,
// }))

// export default function Hero() {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({ target: containerRef })
//   const y = useTransform(scrollYProgress, [0, 1], [0, 150])
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen flex items-center overflow-hidden"
//       style={{
//         background: 'linear-gradient(160deg, #020d1a 0%, #0A2540 50%, #061525 100%)',
//       }}
//     >
//       {/* Grid overlay */}
//       <div className="absolute inset-0 grid-overlay" />

//       {/* Animated orbs */}
//       <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] orb-blue opacity-60" />
//       <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] orb-teal opacity-40" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] orb-blue opacity-20" />

//       {/* Particle dots */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {DOTS.map((d) => <Dot key={d.id} {...d} />)}
//       </div>

//       {/* Scan line */}
//       <div
//         className="absolute left-0 right-0 h-px opacity-10 pointer-events-none"
//         style={{
//           background: 'linear-gradient(90deg, transparent, #007BFF, #4FD1C5, transparent)',
//           animation: 'scanline 8s linear infinite',
//         }}
//       />

//       {/* Main content */}
//       <motion.div style={{ y, opacity }} className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left: Copy */}
//           <div>
//             {/* Badge */}
//             {/* <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-flex items-center gap-3 mb-4"
//             >
//               <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase"
//                 style={{
//                   background: 'rgba(79,209,197,0.08)',
//                   border: '1px solid rgba(79,209,197,0.25)',
//                   color: '#4FD1C5',
//                 }}>
//                 <span className="w-1.5 h-1.5 rounded-full bg-teal-neon animate-pulse" />
//                 Global Data & IT Consulting · Est. 2009
//               </div>
//             </motion.div> */}

//             {/* Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className=" text-2xl lg:text-[3rem] xl:text-[3.2rem] font-black leading-[1.03]  mb-5"
//             >
//               <span className="block text-white font-serif">Transforming</span>
//               <span className="block text-gradient-blue font-serif">Data into</span>
//               <span className="block text-white font-serif">Strategic</span>
//               <span className="block relative">
//                 <span className="shimmer-text font-serif">Advantage.</span>
//               </span>
//             </motion.h1>

//             {/* Subtext */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="text-white/55 text-lg leading-relaxed mb-6 max-w-xl font-body font-light"
//             >
//               For 15+ years, KJs DataEdge has partnered with Fortune 500 enterprises across four continents — 
//               architecting data ecosystems that drive decisions, reduce regulatory risk, and accelerate growth.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.45 }}
//               className="flex flex-wrap gap-4 mb-14"
//             >
//               <Link to="/services">
//                 <motion.button
//                   className="btn-primary text-base"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   Explore Services
//                   <svg className="ml-2 w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </motion.button>
//               </Link>
//               <Link to="/contact">
//                 <motion.button
//                   className="btn-ghost text-base"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   Talk to an Expert
//                 </motion.button>
//               </Link>
//             </motion.div>

//             {/* Stats row */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="grid grid-cols-4 gap-6 pt-8"
//               style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
//             >
//               {HERO_STATS.map((stat, i) => (
//                 <StatItem key={stat.label} stat={stat} index={i} />
//               ))}
//             </motion.div>
//           </div>

//           {/* Right: Floating UI */}
//           <div className="relative hidden lg:block h-[520px]">
//             {/* Central dashboard card */}
//             <motion.div
//               initial={{ opacity: 0, y: 40, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px]"
//             >
//               <div className="animated-border glass rounded-2xl overflow-hidden shadow-card beam-container">
//                 <div className="p-4 border-b border-white/[0.06]">
//                   <div className="flex items-center gap-2 mb-1">
//                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                     <span className="text-white/60 text-xs font-mono">DataEdge Platform · Live</span>
//                   </div>
//                   <div className="text-white font-display font-bold text-sm">Enterprise Data Governance</div>
//                 </div>
//                 <div className="p-4">
//                   {/* Mini chart bars */}
//                   <div className="flex items-end gap-1.5 h-16 mb-4">
//                     {[40, 65, 50, 80, 70, 95, 85, 100, 78, 90].map((h, i) => (
//                       <motion.div
//                         key={i}
//                         className="flex-1 rounded-sm"
//                         style={{ background: i % 3 === 0 ? '#4FD1C5' : 'rgba(0,123,255,0.5)' }}
//                         initial={{ height: 0 }}
//                         animate={{ height: `${h}%` }}
//                         transition={{ delay: 0.8 + i * 0.05, duration: 0.6, ease: 'easeOut' }}
//                       />
//                     ))}
//                   </div>
//                   <div className="space-y-2">
//                     {[
//                       { label: 'Data Quality Score', value: '98.4%', color: '#4FD1C5' },
//                       { label: 'Pipeline Throughput', value: '2.3B rec/day', color: '#007BFF' },
//                       { label: 'Compliance Status', value: 'BCBS 239 ✓', color: '#4FD1C5' },
//                     ].map((item) => (
//                       <div key={item.label} className="flex justify-between items-center py-1 border-b border-white/[0.04]">
//                         <span className="text-white/40 text-xs">{item.label}</span>
//                         <span className="text-xs font-mono font-medium" style={{ color: item.color }}>{item.value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Floating badge - top left */}
//             <FloatingBadge className="absolute top-4 left-0 w-52" delay={0.7}>
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
//                   style={{ background: 'rgba(0,123,255,0.15)' }}>⚙️</div>
//                 <div>
//                   <div className="text-white font-display font-bold text-xs">Ab Initio CoE</div>
//                   <div className="text-white/40 text-[10px] font-mono">50+ Certified Engineers</div>
//                 </div>
//               </div>
//             </FloatingBadge>

//             {/* Floating badge - bottom right */}
//             <FloatingBadge className="absolute bottom-16 right-0 w-56" delay={1.0}>
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
//                   style={{ background: 'rgba(79,209,197,0.15)' }}>🌍</div>
//                 <div>
//                   <div className="text-white font-display font-bold text-xs">12+ Countries</div>
//                   <div className="text-white/40 text-[10px] font-mono">Active Engagements</div>
//                 </div>
//               </div>
//             </FloatingBadge>

//             {/* Floating badge - top right */}
//             <FloatingBadge className="absolute top-20 right-4 w-44" delay={0.85}>
//               <div className="text-center">
//                 <div className="text-2xl font-display font-black text-gradient-blue">200+</div>
//                 <div className="text-white/40 text-[10px] font-mono tracking-wider uppercase mt-0.5">Enterprise Clients</div>
//               </div>
//             </FloatingBadge>

//             {/* Floating indicator */}
//             <motion.div
//               className="absolute bottom-0 left-8 flex items-center gap-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.2 }}
//             >
//               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//               <span className="text-white/30 text-[10px] font-mono tracking-widest">LIVE DATA MONITORING</span>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//       >
//         <span className="text-white/25 text-[10px] font-mono tracking-widest uppercase">Scroll</span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//           className="w-px h-8"
//           style={{ background: 'linear-gradient(180deg, rgba(0,123,255,0.5), transparent)' }}
//         />
//       </motion.div>
//     </section>
//   )
// }

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 🌊 Smooth parallax
  const bgYRaw = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const bgY = useSpring(bgYRaw, { stiffness: 40, damping: 25 });

  const opacityRaw = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const opacity = useSpring(opacityRaw, { stiffness: 60, damping: 20 });

  const scaleRaw = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);
  const scale = useSpring(scaleRaw, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🖼️ Background with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <motion.img
          src="https://www.shutterstock.com/shutterstock/photos/2695070611/display_1500/stock-vector-abstract-digital-blockchain-cube-blocks-concept-d-big-data-cubes-quantum-computer-technology-idea-2695070611.jpg"
          alt="data background"
          className="w-full h-full object-cover scale-110 opacity-40"
          animate={{ scale: [1.1, 1.15, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#020d1a]/80 z-0" />

      {/* 🔵 Glow Orbs */}
      <motion.div
        className="absolute z-0 w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full top-[-100px] left-[-100px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute z-0 w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

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
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* CONTENT */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-32 pb-24 text-white"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs tracking-widest uppercase text-cyan-300"
          >
            🌍 15+ Years Global Data Consulting
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-4xl lg:text-5xl font-black leading-tight mb-6"
          >
            <span className="block">Transforming Data</span>

            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent bg-[length:200%_200%]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              Into Strategic Advantage
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            KJs DataEdge Consulting empowers enterprises with advanced Data
            Governance, Ab Initio expertise, and scalable data ecosystems —
            delivering measurable impact across Banking, Pharma, Retail, and
            Telecom.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 flex-wrap mb-16"
          >
            <Link to="/services">
              <motion.button
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0px 10px 40px rgba(0,123,255,0.4)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white font-semibold"
              >
                Explore Services →
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3 border border-white/20 rounded-xl hover:bg-white/10 backdrop-blur transition"
              >
                Talk to an Expert
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "Clients" },
              { value: "12+", label: "Countries" },
              { value: "50+", label: "Experts" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="text-xl md:text-2xl font-bold text-blue-300">
                  {item.value}
                </div>
                <div className="text-white/40 text-xs uppercase mt-1">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-20"
      >
        <p className="text-white/40 text-xs mb-2">Scroll</p>
        <div className="w-[2px] h-8 bg-gradient-to-b from-blue-400 to-transparent" />
      </motion.div>
    </section>
  );
}