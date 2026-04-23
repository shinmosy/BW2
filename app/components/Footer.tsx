'use client'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0, 255, 136, 0.3)',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#a0a0a0',
          fontFamily: 'Courier New, monospace',
        }}>
          &lt;/&gt; Built with Next.js + Tailwind CSS | © 2026 Cyber Portfolio
        </p>
      </div>
    </footer>
  )
}
