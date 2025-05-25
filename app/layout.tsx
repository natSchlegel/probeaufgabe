import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '../styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'],  weight: ['400', '500', '600'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Chuck Norris Quotes',
  description: 'Project made with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#D9D9D9] sm:h-screen w-screen flex flex-col`}>{children}</body>
    </html>
  )
}
