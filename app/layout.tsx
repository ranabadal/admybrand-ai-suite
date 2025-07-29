import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite',
  description: 'AI-powered marketing that executes campaigns for you.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans bg-gradient-to-br from-[#0e0e10] via-[#14141a] to-[#1b1b24] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
