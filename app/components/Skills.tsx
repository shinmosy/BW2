'use client'

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 glow-text text-center">SKILLS</h2>
        <div className="cyber-line"></div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill) => (
            <div key={skill.category} className="hologram-card p-6 rounded">
              <h3 className="text-xl font-bold text-[#00ff88] mb-4 neon-text">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1 border border-[#00ff88]/50 text-sm hover:bg-[#00ff88]/10 transition rounded">
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
