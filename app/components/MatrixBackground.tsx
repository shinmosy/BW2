'use client'

import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const container = containerRef.current

    for (let i = 0; i < 20; i++) {
      const char = document.createElement('div')
      char.className = 'matrix-char'
      char.textContent = chars[Math.floor(Math.random() * chars.length)]
      char.style.left = Math.random() * 100 + '%'
      char.style.top = Math.random() * 100 + '%'
      char.style.animationDuration = (Math.random() * 10 + 5) + 's'
      char.style.animationDelay = Math.random() * 5 + 's'
      container.appendChild(char)
    }
  }, [])

  return <div ref={containerRef} className="matrix-bg"></div>
}
