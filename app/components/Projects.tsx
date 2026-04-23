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
    <section id="projects" className="py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 glow-text text-center">PROJECTS</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="neon-border p-6 hover:shadow-lg transition group cursor-pointer">
              <h3 className="text-xl font-bold text-[#00ff88] mb-2 group-hover:text-[#0088ff] transition">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-[#00ff88]/10 text-[#00ff88]">
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
