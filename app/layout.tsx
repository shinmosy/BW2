import type { Metadata } from "next"
import { StyleProvider } from "./components/StyleProvider"

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
      <body className="cyber-bg">
        <StyleProvider>
          <div className="scanline"></div>
          {children}
        </StyleProvider>
      </body>
    </html>
  )
}
