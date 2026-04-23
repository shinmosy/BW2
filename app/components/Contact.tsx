'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted!', formData)
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <section id="contact">
      <style>{`
        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          margin-top: 48px;
        }

        .contact-intro {
          text-align: center;
          margin-bottom: 48px;
        }

        .contact-intro p {
          color: #9c9c9d;
          font-size: 18px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #f9f9f9;
          font-size: 14px;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          background: #101111;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: #f9f9f9;
          font-size: 16px;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: rgba(85, 179, 255, 0.5);
          background: rgba(85, 179, 255, 0.05);
          box-shadow: 0 0 0 3px rgba(85, 179, 255, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #6a6b6c;
        }

        .form-group textarea {
          min-height: 120px;
          font-family: 'Inter', sans-serif;
        }

        .form-submit {
          width: 100%;
          padding: 12px 32px;
          background: hsla(0, 0%, 100%, 0.815);
          color: #18191a;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 24px;
        }

        .form-submit:hover:not(:disabled) {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          background: rgba(95, 201, 146, 0.1);
          border: 1px solid rgba(95, 201, 146, 0.3);
          border-radius: 6px;
          padding: 16px;
          color: #5fc992;
          text-align: center;
          margin-bottom: 24px;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .social-link {
          color: #9c9c9d;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: #55b3ff;
        }
      `}</style>

      <h2>Let's Work Together</h2>
      <div className="contact-container">
        <div className="contact-intro">
          <p>Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.</p>
        </div>

        {submitted && <div className="success-message">✓ Message sent successfully! I'll get back to you soon.</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />
          </div>

          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="social-links">
          <a href="#" className="social-link">
            GitHub
          </a>
          <a href="#" className="social-link">
            LinkedIn
          </a>
          <a href="#" className="social-link">
            Twitter
          </a>
          <a href="#" className="social-link">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
