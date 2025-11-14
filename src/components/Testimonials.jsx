import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Ava Thompson', role: 'Entrepreneur', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', text: 'The most seamless trip I have ever taken. Every detail was perfect.' },
  { name: 'Liam Nguyen', role: 'Photographer', photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop', text: 'Unforgettable memories. Truly premium service from start to finish.' },
  { name: 'Zoe Carter', role: 'Designer', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop', text: 'Loved the curated experiences. Exceptional guides and logistics.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          Traveler Stories
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, rotateX: -10, y: 20 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group perspective relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-4">
                <img src={t.photo} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-600">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
