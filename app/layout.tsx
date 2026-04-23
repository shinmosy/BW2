'use client'

const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: #07080a;
  }

  body {
    background: #07080a;
    color: #f9f9f9;
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    overflow-x: hidden;
    font-feature-settings: "calt", "kern", "liga", "ss03";
    letter-spacing: 0.2px;
  }

  a {
    color: #55b3ff;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.7;
  }

  /* Typography */
  h1 {
    font-size: 64px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: 0px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 56px;
    font-weight: 400;
    line-height: 1.17;
    letter-spacing: 0.2px;
    margin-bottom: 32px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.15;
    letter-spacing: 0.2px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.2px;
    color: #cecece;
    margin-bottom: 16px;
  }

  /* Buttons */
  .btn-primary {
    display: inline-block;
    padding: 12px 32px;
    background: hsla(0, 0%, 100%, 0.815);
    color: #18191a;
    border: none;
    border-radius: 86px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.3px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset;
  }

  .btn-primary:hover {
    opacity: 0.9;
    background: #ffffff;
  }

  .btn-secondary {
    display: inline-block;
    padding: 12px 24px;
    background: transparent;
    color: #f9f9f9;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.3px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 7px 3px;
  }

  .btn-secondary:hover {
    opacity: 0.8;
    border-color: rgba(255, 255, 255, 0.2);
  }

  /* Cards */
  .card {
    background: #101111;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 32px;
    transition: all 0.3s ease;
  }

  .card:hover {
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  /* Layout */
  main {
    position: relative;
    z-index: 1;
  }

  section {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero {
    padding: 120px 20px;
    text-align: center;
  }

  .hero h1 {
    margin-bottom: 16px;
  }

  .hero p {
    font-size: 18px;
    color: #9c9c9d;
    margin-bottom: 32px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-group {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 48px;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(7, 8, 10, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding: 16px 20px;
    z-index: 100;
  }

  nav .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav a {
    color: #9c9c9d;
    font-size: 16px;
    font-weight: 500;
    margin: 0 24px;
    transition: color 0.2s ease;
  }

  nav a:hover {
    color: #f9f9f9;
  }

  main {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 32px;
    }

    section {
      padding: 60px 20px;
    }

    .hero {
      padding: 80px 20px;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    nav a {
      margin: 0 12px;
      font-size: 14px;
    }
  }
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cyber Portfolio v2</title>
        <meta name="description" content="Futuristic portfolio with cyber aesthetics" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>
        <nav>
          <div className="container">
            <div style={{ fontSize: '20px', fontWeight: '600', color: '#f9f9f9' }}>M</div>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#work">Work</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
