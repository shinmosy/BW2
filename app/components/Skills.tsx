'use client'

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 glow-text text-center">SKILLS</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="neon-border p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#00ff88] mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1 border border-[#00ff88]/50 text-sm hover:bg-[#00ff88]/10 transition">
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
