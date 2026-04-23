export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Cyber Portfolio</h1>
        <p>Full-stack developer crafting elegant digital experiences. Specializing in modern web technologies and scalable architectures.</p>
        <div className="cta-group">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Get In Touch</button>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">
            <h3>Frontend</h3>
            <p>React, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <p>Node.js, Express, PostgreSQL, MongoDB, REST APIs</p>
          </div>
          <div className="card">
            <h3>Tools</h3>
            <p>Git, Docker, AWS, Vercel, GitHub Actions</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work">
        <h2>Featured Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Project Alpha</h3>
            <p>A real-time collaboration platform built with Next.js and WebSockets. Enables teams to work together seamlessly.</p>
            <a href="#" style={{ marginTop: '16px', display: 'inline-block' }}>View Project →</a>
          </div>
          <div className="card">
            <h3>Project Beta</h3>
            <p>E-commerce platform with advanced filtering and payment integration. Built with React and Node.js backend.</p>
            <a href="#" style={{ marginTop: '16px', display: 'inline-block' }}>View Project →</a>
          </div>
          <div className="card">
            <h3>Project Gamma</h3>
            <p>Analytics dashboard for tracking user behavior. Real-time data visualization with D3.js and PostgreSQL.</p>
            <a href="#" style={{ marginTop: '16px', display: 'inline-block' }}>View Project →</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Get In Touch</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 32px' }}>Have a project in mind? Let's talk about how I can help bring your ideas to life.</p>
        <form style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#101111',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                color: '#f9f9f9',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#101111',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                color: '#f9f9f9',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
              }}
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <textarea
              placeholder="Your Message"
              rows={5}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#101111',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                color: '#f9f9f9',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                resize: 'vertical',
              }}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '40px 20px',
        textAlign: 'center',
        color: '#6a6b6c',
        fontSize: '14px',
      }}>
        <p>© 2024 Cyber Portfolio. All rights reserved.</p>
      </footer>
    </>
  )
}
