

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