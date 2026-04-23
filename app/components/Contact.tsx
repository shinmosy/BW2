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
    <section id="contact" style={{
      paddingTop: '5rem',
      paddingBottom: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        maxWidth: '42rem',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'center',
          color: '#00ff88',
          textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
          animation: 'glow 2s ease-in-out infinite',
        }}>
          CONTACT
        </h2>
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
          margin: '1.25rem 0',
        }}></div>

        <form onSubmit={handleSubmit} style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 136, 255, 0.05) 100%)',
          border: '1px solid rgba(0, 255, 136, 0.2)',
          padding: '2rem',
          borderRadius: '4px',
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          <div>
            <label style={{
              display: 'block',
              color: '#00ff88',
              marginBottom: '0.5rem',
              fontFamily: 'Courier New, monospace',
              textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
              letterSpacing: '2px',
            }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                background: 'rgba(0, 255, 136, 0.05)',
                border: '1px solid rgba(0, 255, 136, 0.3)',
                color: '#e0e0e0',
                padding: '10px 12px',
                fontFamily: 'Courier New, monospace',
                transition: 'all 0.3s ease',
                borderRadius: '4px',
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.style.outline = 'none';
                e.target.style.borderColor = '#00ff88';
                e.target.style.boxShadow = '0 0 10px rgba(0, 255, 136, 0.3), inset 0 0 10px rgba(0, 255, 136, 0.1)';
                e.target.style.background = 'rgba(0, 255, 136, 0.1)';
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.style.borderColor = 'rgba(0, 255, 136, 0.3)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'rgba(0, 255, 136, 0.05)';
              }}
              required
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              color: '#00ff88',
              marginBottom: '0.5rem',
              fontFamily: 'Courier New, monospace',
              textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
              letterSpacing: '2px',
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                background: 'rgba(0, 255, 136, 0.05)',
                border: '1px solid rgba(0, 255, 136, 0.3)',
                color: '#e0e0e0',
                padding: '10px 12px',
                fontFamily: 'Courier New, monospace',
                transition: 'all 0.3s ease',
                borderRadius: '4px',
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.style.outline = 'none';
                e.target.style.borderColor = '#00ff88';
                e.target.style.boxShadow = '0 0 10px rgba(0, 255, 136, 0.3), inset 0 0 10px rgba(0, 255, 136, 0.1)';
                e.target.style.background = 'rgba(0, 255, 136, 0.1)';
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                e.target.style.borderColor = 'rgba(0, 255, 136, 0.3)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'rgba(0, 255, 136, 0.05)';
              }}
              required
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              color: '#00ff88',
              marginBottom: '0.5rem',
              fontFamily: 'Courier New, monospace',
              textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
              letterSpacing: '2px',
            }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={{
                width: '100%',
                background: 'rgba(0, 255, 136, 0.05)',
                border: '1px solid rgba(0, 255, 136, 0.3)',
                color: '#e0e0e0',
                padding: '10px 12px',
                fontFamily: 'Courier New, monospace',
                transition: 'all 0.3s ease',
                borderRadius: '4px',
                resize: 'vertical',
              }}
              onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                e.target.style.outline = 'none';
                e.target.style.borderColor = '#00ff88';
                e.target.style.boxShadow = '0 0 10px rgba(0, 255, 136, 0.3), inset 0 0 10px rgba(0, 255, 136, 0.1)';
                e.target.style.background = 'rgba(0, 255, 136, 0.1)';
              }}
              onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                e.target.style.borderColor = 'rgba(0, 255, 136, 0.3)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'rgba(0, 255, 136, 0.05)';
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              position: 'relative',
              padding: '12px 24px',
              border: '2px solid #00ff88',
              background: 'transparent',
              color: '#00ff88',
              fontFamily: 'Courier New, monospace',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.boxShadow = '0 0 20px #00ff88';
              e.currentTarget.style.background = '#00ff88';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.color = '#00ff88';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}
