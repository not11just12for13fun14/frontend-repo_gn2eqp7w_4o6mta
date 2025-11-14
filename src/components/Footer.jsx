import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} GlobalExplore Tour. All rights reserved.</div>
        <div className="flex gap-4 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#packages" className="hover:text-slate-900">Packages</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}
