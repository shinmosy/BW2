'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(85, 179, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(85, 179, 255, 0.5);
          }
        }

        .hero-content {
          animation: ${isVisible ? 'fadeInUp 0.8s ease-out' : 'none'};
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(85, 179, 255, 0.1);
          border: 1px solid rgba(85, 179, 255, 0.3);
          border-radius: 20px;
          color: #55b3ff;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          animation: ${isVisible ? 'slideInLeft 0.8s ease-out' : 'none'};
          transition: all 0.3s ease;
        }

        .hero-badge:hover {
          background: rgba(85, 179, 255, 0.2);
          border-color: rgba(85, 179, 255, 0.5);
          animation: glow 2s ease-in-out infinite;
        }

        .hero h1 {
          font-size: clamp(40px, 8vw, 72px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #f9f9f9 0%, #cecece 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
        }

        .hero h1:hover {
          background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 18px;
          color: #9c9c9d;
          max-width: 600px;
          margin: 0 auto 32px;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .hero-subtitle:hover {
          color: #cecece;
        }

        .cta-group {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }

        .scroll-indicator {
          margin-top: 48px;
          animation: bounce 2s infinite;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover {
          transform: scale(1.2);
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .scroll-indicator svg {
          width: 24px;
          height: 24px;
          color: #6a6b6c;
          transition: color 0.3s ease;
        }

        .scroll-indicator:hover svg {
          color: #55b3ff;
        }
      `}</style>

      <div className="hero-content">
        <div className="hero-badge">✨ Welcome to my portfolio</div>
        <h1>Full-Stack Developer & Creative Technologist</h1>
        <p className="hero-subtitle">
          I craft elegant digital experiences with modern web technologies. Specializing in React, Next.js, and scalable backend architectures. Let's build something amazing together.
        </p>

        <div className="cta-group">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Download Resume</button>
        </div>

        <div className="scroll-indicator" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
