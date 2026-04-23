'use client'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '56rem',
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            width: '128px',
            height: '128px',
            margin: '0 auto 2rem',
            borderRadius: '50%',
            border: '2px solid #00ff88',
            padding: '4px',
            animation: 'float 3s ease-in-out infinite',
            boxShadow: '0 0 10px #00ff88, inset 0 0 10px rgba(0, 255, 136, 0.1)',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00ff88 0%, #0088ff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#000',
            }}>
              M
            </div>
          </div>
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 10vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#00ff88',
          textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
          animation: 'glow 2s ease-in-out infinite',
        }}>
          CYBER PORTFOLIO
        </h1>
        
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
          margin: '1.25rem 0',
        }}></div>

        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          color: '#00ff88',
          marginBottom: '2rem',
          fontFamily: 'Courier New, monospace',
        }}>
          &gt; Welcome to the future
        </p>

        <p style={{
          fontSize: '1.125rem',
          color: '#a0a0a0',
          marginBottom: '3rem',
          maxWidth: '42rem',
          margin: '0 auto 3rem',
        }}>
          Full-stack developer crafting digital experiences with cutting-edge technology and futuristic design.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button style={{
            position: 'relative',
            padding: '12px 24px',
            border: '2px solid #00ff88',
            background: 'transparent',
            color: '#00ff88',
            fontFamily: 'Courier New, monospace',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
          }} onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            const target = e.currentTarget as HTMLButtonElement;
            target.style.color = '#000';
            target.style.boxShadow = '0 0 20px #00ff88';
            target.style.background = '#00ff88';
          }} onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            const target = e.currentTarget as HTMLButtonElement;
            target.style.color = '#00ff88';
            target.style.boxShadow = 'none';
            target.style.background = 'transparent';
          }}>
            View Work
          </button>
          <button style={{
            position: 'relative',
            padding: '12px 24px',
            border: '2px solid #0088ff',
            background: 'transparent',
            color: '#0088ff',
            fontFamily: 'Courier New, monospace',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
          }} onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            const target = e.currentTarget as HTMLButtonElement;
            target.style.color = '#000';
            target.style.boxShadow = '0 0 20px #0088ff';
            target.style.background = '#0088ff';
          }} onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            const target = e.currentTarget as HTMLButtonElement;
            target.style.color = '#0088ff';
            target.style.boxShadow = 'none';
            target.style.background = 'transparent';
          }}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
