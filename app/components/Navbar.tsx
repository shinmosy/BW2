'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(10, 14, 39, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 255, 136, 0.3)',
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#00ff88',
          textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
          letterSpacing: '2px',
        }}>
          &lt;CYBER /&gt;
        </div>
        
        <div style={{
          display: 'none',
          gap: '2rem',
        }} className="md:flex">
          <a href="#hero" style={{ color: '#e0e0e0', textDecoration: 'none', fontFamily: 'Courier New, monospace', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00ff88'} onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>Home</a>
          <a href="#skills" style={{ color: '#e0e0e0', textDecoration: 'none', fontFamily: 'Courier New, monospace', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00ff88'} onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>Skills</a>
          <a href="#projects" style={{ color: '#e0e0e0', textDecoration: 'none', fontFamily: 'Courier New, monospace', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00ff88'} onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>Projects</a>
          <a href="#contact" style={{ color: '#e0e0e0', textDecoration: 'none', fontFamily: 'Courier New, monospace', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00ff88'} onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>Contact</a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#00ff88',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          backgroundColor: 'rgba(10, 14, 39, 0.9)',
          borderTop: '1px solid rgba(0, 255, 136, 0.3)',
          padding: '1rem',
        }}>
          <a href="#hero" style={{ color: '#e0e0e0', textDecoration: 'none', fontFamily: 'Courier New, monospace' }} onMouseEnter={(e) => e.target.style.color = '#00ff88'} onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>Home</a>
          <a href="#skills" style={{ color: '#e0e0e0', textDecoration: 'none', fontFamily: 'Courier New, monospace' }} onMouseEnter={(e) => e.target.style.color = '#00ff88'} onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>Skills</a>
          <a href="#projects" style={{ color: '#e0e0e0', textDecoration: 'none', fontFamily: 'Courier New, monospace' }} onMouseEnter={(e) => e.target.style.color = '#00ff88'} onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>Projects</a>
          <a href="#contact" style={{ color: '#e0e0e0', textDecoration: 'none', fontFamily: 'Courier New, monospace' }} onMouseEnter={(e) => e.target.style.color = '#00ff88'} onMouseLeave={(e) => e.target.style.color = '#e0e0e0'}>Contact</a>
        </div>
      )}
    </nav>
  )
}
