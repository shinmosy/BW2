import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BW2",
  description: "Fresh portfolio build",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
