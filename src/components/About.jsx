import React from 'react'
import { motion } from 'framer-motion'

const milestones = [
  { year: '2010', title: 'Founded', desc: 'Started with a mission to make premium travel effortless.' },
  { year: '2014', title: '10k+ Travelers', desc: 'Crossed our first major milestone with glowing reviews.' },
  { year: '2018', title: 'Global Network', desc: 'Expanded to 40+ countries with trusted local partners.' },
  { year: '2023', title: 'Awarded', desc: 'Recognized for excellence in curated experiences.' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          About GlobalExplore Tour
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-3xl text-slate-600"
        >
          We craft immersive journeys tailored to your style, blending luxury stays, seamless logistics, and authentic cultural encounters.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="text-sm font-semibold text-sky-600">{m.year}</div>
                <div className="text-lg font-bold text-slate-900">{m.title}</div>
                <p className="text-slate-600">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-100 to-teal-100 p-1"
          >
            <div className="h-full w-full rounded-3xl bg-white/60 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-slate-900">Our Promise</h3>
              <p className="mt-3 text-slate-600">Unmatched reliability, transparent pricing, and world-class safety standards. Travel like it should be: effortless, inspiring, unforgettable.</p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
                <li>• Licensed local experts</li>
                <li>• 24/7 concierge</li>
                <li>• Bespoke itineraries</li>
                <li>• Luxury transfers</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
