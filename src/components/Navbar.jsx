import React from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[94%] max-w-6xl rounded-2xl border border-white/50 bg-white/60 px-4 py-3 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-lg font-extrabold tracking-tight text-slate-900">
            <span className="bg-gradient-to-r from-sky-500 to-teal-400 bg-clip-text text-transparent">GlobalExplore</span> Tour
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {[
              ['Home','#home'],
              ['About','#about'],
              ['Packages','#packages'],
              ['Testimonials','#testimonials'],
              ['Why Us','#why'],
              ['Contact','#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="transition-colors hover:text-sky-600">{label}</a>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 grid gap-2 md:hidden">
            {[
              ['Home','#home'],
              ['About','#about'],
              ['Packages','#packages'],
              ['Testimonials','#testimonials'],
              ['Why Us','#why'],
              ['Contact','#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-xl bg-white/70 px-4 py-2 text-sm text-slate-700 backdrop-blur">
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  )
}
