'use client';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mosy — Airdrop Enthusiast & Digital Artist',
  description: 'Vector art, crypto airdrop automation, and creative passion. Hidup tenang dengan passion and dreams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
