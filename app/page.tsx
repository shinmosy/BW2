'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-gray-400">~/</span>mosy
          </div>
          <div className="flex gap-8">
            <a href="#art" className="text-gray-600 hover:text-gray-900 font-medium">Art</a>
            <a href="#airdrop" className="text-gray-600 hover:text-gray-900 font-medium">Airdrop</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Mosy
              </h1>
              <p className="text-xl text-gray-600">
                Airdrop Enthusiast & Digital Artist
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Drawing Vector Art • Making Money With Crypto Airdrop • Building Automation Tools
              </p>
              <p className="text-base text-gray-400 italic">
                "Hidup Tenang dengan Menjalani Passion and Dreams"
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://instagram.com/ehmosy" target="_blank" rel="noopener noreferrer" 
                   className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium">
                  Instagram
                </a>
                <a href="https://tiktok.com/@mosyafik" target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 font-medium">
                  TikTok
                </a>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-gray-600 font-medium">Vector Art & Crypto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Section */}
      <section id="art" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Vector Art</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-3">✨</div>
                  <p className="text-gray-600">Art Piece {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airdrop Section */}
      <section id="airdrop" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Airdrop Automation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-gray-900 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hermes Agent Tools</h3>
              <p className="text-gray-600 mb-4">
                Building intelligent automation tools for crypto airdrop discovery, tracking, and execution.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Airdrop Discovery & Filtering</li>
                <li>✓ Automated Waitlist Signup</li>
                <li>✓ Portfolio Tracking</li>
                <li>✓ Multi-Platform Integration</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-gray-900 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crypto Wallet</h3>
              <p className="text-gray-600 mb-4">
                Direct wallet management and airdrop opportunity tracking.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Wallet: 0x8cce57930bc7dfcb133f5d34889d362cb1bc282d</li>
                <li>✓ Real-time Balance Tracking</li>
                <li>✓ Airdrop Eligibility Checker</li>
                <li>✓ P&L Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Interested in collaborations, commissions, or airdrop opportunities?
          </p>
          <a href="mailto:mosyafik.jr@gmail.com" 
             className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Email Me
          </a>
          <div className="mt-12 flex justify-center gap-8">
            <a href="https://instagram.com/ehmosy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="https://tiktok.com/@mosyafik" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              TikTok
            </a>
            <a href="mailto:mosyafik.jr@gmail.com" className="text-gray-400 hover:text-white">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-8 px-6 text-center text-sm">
        <p>© 2026 Mosy. Hidup Tenang dengan Passion and Dreams.</p>
      </footer>
    </div>
  );
}
