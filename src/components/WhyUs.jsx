import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Wallet, Award, Users } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Safety First', desc: 'Global standards, vetted partners, and comprehensive coverage.' },
  { icon: Wallet, title: 'Transparent Pricing', desc: 'Premium experiences with honest, clear pricing.' },
  { icon: Award, title: 'Trusted Expertise', desc: 'Seasoned travel designers and licensed local guides.' },
  { icon: Users, title: 'Personalized Care', desc: '24/7 concierge to handle anything, anytime.' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-gradient-to-b from-sky-50 to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          Why Choose Us
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="inline-flex rounded-2xl bg-gradient-to-r from-sky-500 to-teal-400 p-3 text-white shadow-lg">
                {React.createElement(f.icon, { className: 'h-6 w-6' })}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
