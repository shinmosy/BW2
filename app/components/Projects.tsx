'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Real-Time Collaboration Platform',
    description: 'A modern collaboration tool enabling teams to work together seamlessly with real-time updates.',
    longDescription: 'Built a full-stack collaboration platform using Next.js, WebSockets, and PostgreSQL. Features include real-time document editing, user presence indicators, and comment threads. Deployed on Vercel with 99.9% uptime.',
    tags: ['Next.js', 'WebSockets', 'PostgreSQL', 'Vercel'],
    stats: { users: '5K+', uptime: '99.9%', latency: '<100ms' },
    link: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with advanced filtering, payment integration, and analytics.',
    longDescription: 'Developed a scalable e-commerce platform handling 10K+ daily transactions. Integrated Stripe for payments, implemented advanced product filtering, and built a real-time inventory system.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    stats: { transactions: '10K+/day', conversion: '3.2%', revenue: '$500K+' },
    link: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization and predictive insights.',
    longDescription: 'Created an interactive analytics dashboard using D3.js and React. Features include real-time data updates, custom report generation, and machine learning-powered insights.',
    tags: ['React', 'D3.js', 'PostgreSQL', 'AWS'],
    stats: { dataPoints: '1M+', queries: '<500ms', users: '2K+' },
    link: '#',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="work">
      <style>{`
        .projects-container {
          margin-top: 48px;
        }

        .project-card {
          background: #101111;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(85, 179, 255, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .project-card:hover {
          border-color: rgba(85, 179, 255, 0.3);
          transform: translateX(8px);
          box-shadow: 0 12px 24px rgba(85, 179, 255, 0.1);
        }

        .project-card:hover::after {
          opacity: 1;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .project-card h3 {
          margin: 0;
          color: #f9f9f9;
        }

        .project-arrow {
          color: #55b3ff;
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-arrow {
          transform: translateX(4px);
        }

        .project-description {
          color: #9c9c9d;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .project-tag {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(85, 179, 255, 0.1);
          border: 1px solid rgba(85, 179, 255, 0.2);
          border-radius: 4px;
          color: #55b3ff;
          font-size: 12px;
          font-weight: 500;
        }

        .project-expanded {
          background: rgba(85, 179, 255, 0.05);
          border-color: rgba(85, 179, 255, 0.3);
        }

        .project-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 16px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
          z-index: 1;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 600;
          color: #55b3ff;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: #6a6b6c;
        }

        .project-long-description {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          color: #cecece;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <h2>Featured Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${selectedProject === project.id ? 'project-expanded' : ''}`}
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-arrow">→</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            {selectedProject === project.id && (
              <>
                <div className="project-long-description">{project.longDescription}</div>
                <div className="project-stats">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="stat">
                      <div className="stat-value">{value}</div>
                      <div className="stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
