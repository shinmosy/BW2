'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Project Alpha',
      desc: 'Next.js + TypeScript full-stack application',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'Project Beta',
      desc: 'Real-time collaboration platform',
      tech: ['React', 'Node.js', 'WebSocket'],
    },
    {
      title: 'Project Gamma',
      desc: 'AI-powered content generator',
      tech: ['Python', 'FastAPI', 'React'],
    },
  ]

  return (
    <section id="projects" style={{
      paddingTop: '5rem',
      paddingBottom: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
          PROJECTS
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
          {projects.map((project) => (
            <div key={project.title} style={{
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
                marginBottom: '0.5rem',
                textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
                letterSpacing: '2px',
                transition: 'all 0.3s ease',
              }} onMouseEnter={(e) => {
                e.target.style.color = '#0088ff';
                e.target.style.textShadow = '0 0 10px #0088ff, 0 0 20px #0088ff, 0 0 30px #0088ff';
              }} onMouseLeave={(e) => {
                e.target.style.color = '#00ff88';
                e.target.style.textShadow = '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88';
              }}>
                {project.title}
              </h3>
              <p style={{
                color: '#a0a0a0',
                marginBottom: '1rem',
              }}>
                {project.desc}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: '0.75rem',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                    paddingTop: '0.25rem',
                    paddingBottom: '0.25rem',
                    background: 'rgba(0, 255, 136, 0.1)',
                    color: '#00ff88',
                    borderRadius: '4px',
                  }}>
                    {t}
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
