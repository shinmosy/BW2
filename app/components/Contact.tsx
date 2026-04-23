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
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 glow-text text-center">CONTACT</h2>
        <div className="cyber-line"></div>

        <form onSubmit={handleSubmit} className="hologram-card p-8 space-y-6 rounded mt-12">
          <div>
            <label className="block text-[#00ff88] mb-2 font-mono neon-text">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full cyber-input rounded"
              required
            />
          </div>

          <div>
            <label className="block text-[#00ff88] mb-2 font-mono neon-text">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full cyber-input rounded"
              required
            />
          </div>

          <div>
            <label className="block text-[#00ff88] mb-2 font-mono neon-text">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full cyber-input rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cyber-btn rounded"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}
