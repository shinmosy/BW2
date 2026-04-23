import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cyber Portfolio v2",
  description: "Futuristic portfolio with cyber aesthetics",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @import url('./globals.css');
        `}</style>
      </head>
      <body className="cyber-bg">
        <div className="scanline"></div>
        {children}
      </body>
    </html>
  )
}
