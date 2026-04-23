import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cyber Portfolio v2",
  description: "Futuristic portfolio with cyber aesthetics",
}

const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #0a0e27;
    color: #e0e0e0;
    font-family: 'Courier New', monospace;
    overflow-x: hidden;
  }

  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
    }
    50% {
      text-shadow: 0 0 20px #00ff88, 0 0 30px #00ff88, 0 0 40px #00ff88;
    }
  }

  @keyframes scanlines {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }

  @keyframes matrix-rain {
    0% {
      transform: translateY(-100%);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .glow-text {
    animation: glow 2s ease-in-out infinite;
    color: #00ff88;
  }

  .neon-text {
    color: #00ff88;
    text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88;
    letter-spacing: 2px;
  }

  .scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(0, 255, 136, 0.3);
    animation: scanlines 8s linear infinite;
    pointer-events: none;
    z-index: 9999;
  }

  .cyber-bg {
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
    position: relative;
    overflow: hidden;
  }

  .matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .matrix-char {
    position: absolute;
    color: rgba(0, 255, 136, 0.1);
    font-size: 14px;
    font-weight: bold;
    animation: matrix-rain linear infinite;
  }

  .hologram-card {
    position: relative;
    background: linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 136, 255, 0.05) 100%);
    border: 1px solid rgba(0, 255, 136, 0.2);
    transition: all 0.3s ease;
  }

  .hologram-card:hover {
    background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 136, 255, 0.1) 100%);
    border-color: rgba(0, 255, 136, 0.5);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3), inset 0 0 20px rgba(0, 255, 136, 0.1);
  }

  .cyber-btn {
    position: relative;
    padding: 12px 24px;
    border: 2px solid #00ff88;
    background: transparent;
    color: #00ff88;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .cyber-btn:hover {
    color: #000;
    box-shadow: 0 0 20px #00ff88;
    background: #00ff88;
  }

  .cyber-input {
    background: rgba(0, 255, 136, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.3);
    color: #e0e0e0;
    padding: 10px 12px;
    font-family: 'Courier New', monospace;
    transition: all 0.3s ease;
  }

  .cyber-input:focus {
    outline: none;
    border-color: #00ff88;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3), inset 0 0 10px rgba(0, 255, 136, 0.1);
    background: rgba(0, 255, 136, 0.1);
  }

  .cyber-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, #00ff88, transparent);
    margin: 20px 0;
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }

  .neon-border {
    border: 2px solid #00ff88;
    box-shadow: 0 0 10px #00ff88, inset 0 0 10px rgba(0, 255, 136, 0.1);
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
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body className="cyber-bg">
        <div className="scanline"></div>
        {children}
      </body>
    </html>
  )
}
