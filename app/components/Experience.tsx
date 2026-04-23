'use client'

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Tech Startup Inc',
    period: '2022 - Present',
    description: 'Leading development of core platform features, mentoring junior developers, and architecting scalable solutions.',
    achievements: ['Built real-time collaboration features', 'Reduced API latency by 60%', 'Mentored 3 junior developers'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Agency Co',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects, implemented CI/CD pipelines, and optimized performance.',
    achievements: ['Delivered 15+ projects on time', 'Implemented automated testing', 'Improved site performance by 40%'],
  },
  {
    role: 'Junior Developer',
    company: 'Web Solutions Ltd',
    period: '2019 - 2020',
    description: 'Started career building responsive websites and learning modern web technologies.',
    achievements: ['Built 10+ responsive websites', 'Learned React and Node.js', 'Contributed to open source'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <style>{`
        .experience-timeline {
          margin-top: 48px;
          position: relative;
          padding-left: 40px;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(85, 179, 255, 0.5) 0%, rgba(85, 179, 255, 0.1) 100%);
        }

        .experience-item {
          margin-bottom: 40px;
          position: relative;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: -48px;
          top: 0;
          width: 16px;
          height: 16px;
          background: #07080a;
          border: 2px solid #55b3ff;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .experience-item:hover::before {
          width: 24px;
          height: 24px;
          left: -52px;
          background: rgba(85, 179, 255, 0.1);
        }

        .experience-content {
          background: #101111;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .experience-item:hover .experience-content {
          border-color: rgba(85, 179, 255, 0.3);
          background: rgba(85, 179, 255, 0.05);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .experience-header h3 {
          margin: 0;
          color: #f9f9f9;
        }

        .experience-period {
          color: #55b3ff;
          font-size: 14px;
          font-weight: 500;
        }

        .experience-company {
          color: #9c9c9d;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .experience-description {
          color: #cecece;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .experience-achievements {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .achievement-tag {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(85, 179, 255, 0.1);
          border: 1px solid rgba(85, 179, 255, 0.2);
          border-radius: 4px;
          color: #55b3ff;
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>

      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-company">{exp.company}</div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <span key={i} className="achievement-tag">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
