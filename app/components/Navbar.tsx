'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-[#00ff88]/30 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold glow-text">&lt;CYBER /&gt;</div>
        
        <div className="hidden md:flex gap-8">
          <a href="#hero" className="hover:text-[#00ff88] transition">Home</a>
          <a href="#skills" className="hover:text-[#00ff88] transition">Skills</a>
          <a href="#projects" className="hover:text-[#00ff88] transition">Projects</a>
          <a href="#contact" className="hover:text-[#00ff88] transition">Contact</a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#00ff88]"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 border-t border-[#00ff88]/30 p-4 flex flex-col gap-4">
          <a href="#hero" className="hover:text-[#00ff88]">Home</a>
          <a href="#skills" className="hover:text-[#00ff88]">Skills</a>
          <a href="#projects" className="hover:text-[#00ff88]">Projects</a>
          <a href="#contact" className="hover:text-[#00ff88]">Contact</a>
        </div>
      )}
    </nav>
  )
}
