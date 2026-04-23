'use client'

import { useState } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    icon: '🎨',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    icon: '⚙️',
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Git', 'CI/CD'],
    icon: '🚀',
  },
]

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="skills">
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .skill-card {
          background: #101111;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 32px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(85, 179, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .skill-card:hover::before {
          left: 100%;
        }

        .skill-card:hover {
          border-color: rgba(85, 179, 255, 0.3);
          background: rgba(85, 179, 255, 0.05);
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(85, 179, 255, 0.1);
        }

        .skill-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .skill-card h3 {
          margin-bottom: 16px;
          color: #f9f9f9;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(85, 179, 255, 0.1);
          border: 1px solid rgba(85, 179, 255, 0.2);
          border-radius: 6px;
          color: #55b3ff;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .skill-card:hover .skill-tag {
          background: rgba(85, 179, 255, 0.2);
          border-color: rgba(85, 179, 255, 0.4);
        }
      `}</style>

      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="skill-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
