import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { sourceSansProBold, sourceSansProBoldIt } from './fonts'

export const metadata: Metadata = {
  title: 'WashU Esports',
  description: 'Maintained by the WashU Esports Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceSansProBold.className}>{children}</body>
    </html>
  )
}
