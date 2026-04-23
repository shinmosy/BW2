'use client'

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ]

  return (
    <section id="skills" style={{
      paddingTop: '5rem',
      paddingBottom: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        maxWidth: '1152px',
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
          SKILLS
        </h2>
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
          margin: '1.25rem 0',
        }}></div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem',
        }}>
          {skills.map((skill) => (
            <div key={skill.category} style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 136, 255, 0.05) 100%)',
              border: '1px solid rgba(0, 255, 136, 0.2)',
              transition: 'all 0.3s ease',
              padding: '1.5rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 136, 255, 0.1) 100%)';
              e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.5)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3), inset 0 0 20px rgba(0, 255, 136, 0.1)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 136, 255, 0.05) 100%)';
              e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#00ff88',
                marginBottom: '1rem',
                textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
                letterSpacing: '2px',
              }}>
                {skill.category}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {skill.items.map((item) => (
                  <span key={item} style={{
                    paddingLeft: '0.75rem',
                    paddingRight: '0.75rem',
                    paddingTop: '0.25rem',
                    paddingBottom: '0.25rem',
                    border: '1px solid rgba(0, 255, 136, 0.5)',
                    fontSize: '0.875rem',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }} onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 255, 136, 0.1)';
                  }} onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
