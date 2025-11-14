import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,.1),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          Get in Touch
        </motion.h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input required placeholder="Jane Doe" className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" required placeholder="jane@email.com" className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 outline-none transition focus:border-teal-300 focus:ring-4 focus:ring-teal-100" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Destination</label>
                <input placeholder="Where to?" className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} placeholder="Tell us about your dream tour..." className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 outline-none transition focus:border-teal-300 focus:ring-4 focus:ring-teal-100" />
              </div>
            </div>
            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-sky-500 to-teal-400 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200/60 transition-transform hover:scale-[1.01]">
              Submit Booking Request
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-100 to-teal-100 p-1"
          >
            <div className="h-full w-full rounded-3xl bg-white/60 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-slate-900">Our Offices</h3>
              <p className="mt-2 text-slate-600">Global presence with concierge desks in 15+ cities.</p>
              <div className="mt-6 grid gap-3 text-slate-700">
                <div>New York, USA</div>
                <div>Zurich, Switzerland</div>
                <div>Singapore</div>
                <div>Dubai, UAE</div>
              </div>
              <div className="mt-8 h-56 w-full overflow-hidden rounded-2xl border border-slate-200">
                <iframe title="map" className="h-full w-full" src="https://maps.google.com/maps?q=singapore&t=k&z=5&ie=UTF8&iwloc=&output=embed"></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
