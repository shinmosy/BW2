'use client'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-[#00ff88] p-1 neon-border">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center text-4xl font-bold">
              M
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
          CYBER PORTFOLIO
        </h1>
        
        <p className="text-xl md:text-2xl text-[#00ff88] mb-8 font-mono">
          &gt; Welcome to the future
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Full-stack developer crafting digital experiences with cutting-edge technology and futuristic design.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition font-mono">
            View Work
          </button>
          <button className="px-8 py-3 border-2 border-[#0088ff] text-[#0088ff] hover:bg-[#0088ff] hover:text-black transition font-mono">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
