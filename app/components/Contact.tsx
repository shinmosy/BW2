'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 glow-text text-center">CONTACT</h2>

        <form onSubmit={handleSubmit} className="neon-border p-8 space-y-6">
          <div>
            <label className="block text-[#00ff88] mb-2 font-mono">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black/50 border border-[#00ff88]/30 px-4 py-2 text-white focus:outline-none focus:border-[#00ff88] transition"
              required
            />
          </div>

          <div>
            <label className="block text-[#00ff88] mb-2 font-mono">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/50 border border-[#00ff88]/30 px-4 py-2 text-white focus:outline-none focus:border-[#00ff88] transition"
              required
            />
          </div>

          <div>
            <label className="block text-[#00ff88] mb-2 font-mono">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-black/50 border border-[#00ff88]/30 px-4 py-2 text-white focus:outline-none focus:border-[#00ff88] transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition font-mono"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}
