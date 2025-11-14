import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Plane, MapPin, Briefcase } from 'lucide-react'

const FloatingIcon = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: [0, -12, 0], opacity: 1 }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
    className={`absolute text-white/90 drop-shadow-xl ${className}`}
  >
    {children}
  </motion.div>
)

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-white">
      <div className="absolute inset-0">
        <motion.div style={{ y: parallaxY, scale: parallaxScale }} className="h-full w-full">
          <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
        {/* Glass gradient overlay for futurism */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight text-slate-800 drop-shadow-sm sm:text-6xl lg:text-7xl"
        >
          Explore The World
          <span className="block bg-gradient-to-r from-sky-500 to-teal-400 bg-clip-text text-transparent">With Confidence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg"
        >
          Premium, fully curated tours and bespoke travel planning. Experience seamless itineraries, trusted local guides, and luxury comfort—anywhere on Earth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#contact" className="rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 px-6 py-3 text-white shadow-lg shadow-sky-200/60 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-sky-300">
            Book Tour Now
          </a>
          <a href="#packages" className="rounded-xl border border-sky-200/70 bg-white/50 px-6 py-3 text-sky-700 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-transform hover:scale-[1.02]">
            View Packages
          </a>
        </motion.div>
      </div>

      {/* Floating travel icons */}
      <FloatingIcon className="left-8 top-24 hidden md:block">
        <Plane className="h-8 w-8 text-sky-500" />
      </FloatingIcon>
      <FloatingIcon delay={1.2} className="right-10 top-36 hidden lg:block">
        <Briefcase className="h-8 w-8 text-teal-500" />
      </FloatingIcon>
      <FloatingIcon delay={0.6} className="right-16 bottom-28 hidden md:block">
        <MapPin className="h-8 w-8 text-sky-600" />
      </FloatingIcon>

      {/* Glassmorphism card stats */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 w-[92%] -translate-x-1/2 sm:w-auto">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[['150+','Destinations'],['24/7','Support'],['98%','Satisfaction'],['Premium','Guides']].map(([k,v]) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/40 bg-white/30 p-4 text-center backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              <div className="text-xl font-bold text-slate-800">{k}</div>
              <div className="text-xs text-slate-600">{v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
