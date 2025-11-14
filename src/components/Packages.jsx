import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock3, ArrowRight } from 'lucide-react'

const packages = [
  { id: 1, title: 'Bali Luxury Retreat', location: 'Bali, Indonesia', duration: '6N / 7D', price: 1299, image: 'https://images.unsplash.com/photo-1654738763601-59b59ada3b20?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWxpJTIwTHV4dXJ5JTIwUmV0cmVhdHxlbnwwfDB8fHwxNzYzMTI3NjY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Swiss Alps Escape', location: 'Zermatt, Switzerland', duration: '4N / 5D', price: 1590, image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Santorini Sunset Tour', location: 'Santorini, Greece', duration: '3N / 4D', price: 980, image: 'https://images.unsplash.com/photo-1654738763601-59b59ada3b20?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWxpJTIwTHV4dXJ5JTIwUmV0cmVhdHxlbnwwfDB8fHwxNzYzMTI3NjY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'Tokyo Discovery', location: 'Tokyo, Japan', duration: '5N / 6D', price: 1499, image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop' },
]

export default function Packages() {
  return (
    <section id="packages" className="relative bg-gradient-to-b from-white to-sky-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          Popular Tour Packages
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packages.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <div className="rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 px-3 py-1 text-sm font-semibold text-white">${p.price}</div>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-sky-500" /> {p.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4 text-teal-500" /> {p.duration}</span>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-4 py-2 text-slate-700 transition-all hover:translate-x-0.5 hover:border-sky-200 hover:text-sky-700">
                  See Details <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
