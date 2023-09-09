import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { sourceSansProBold, sourceSansProBoldIt, sourceSansProLight } from './fonts'
import type { AppProps } from "next/app";
import Link from "next/link"

import NavBar from "./components/navigation/navbar"
import Footer from "./components/footer/footer"

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
      <link rel="icon" href="/icon.svg" sizes="any" />

      <body className={sourceSansProBold.className}>
      
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
