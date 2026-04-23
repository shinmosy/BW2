'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <style>{`
        footer {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 40px 20px;
          background: linear-gradient(180deg, rgba(7, 8, 10, 0) 0%, rgba(7, 8, 10, 0.5) 100%);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3 {
          color: #f9f9f9;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 12px;
        }

        .footer-section a {
          color: #9c9c9d;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: #55b3ff;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright {
          color: #6a6b6c;
          font-size: 14px;
        }

        .footer-socials {
          display: flex;
          gap: 24px;
        }

        .footer-social-link {
          color: #9c9c9d;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-social-link:hover {
          color: #55b3ff;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-socials {
            justify-content: center;
          }
        }
      `}</style>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#work">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Resume</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © {currentYear} Cyber Portfolio. All rights reserved.
        </div>
        <div className="footer-socials">
          <a href="#" className="footer-social-link">GitHub</a>
          <a href="#" className="footer-social-link">LinkedIn</a>
          <a href="#" className="footer-social-link">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
