"use client";

import './globals.css'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
//import themes para gumana yung dark/light mode
import { ThemeProvider } from 'next-themes'
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'JKGC Portfolio',
//   description: 'Created by Janzenn Cruz',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='scrollbar scroll-thin scrollbar-thumb-neutral-800 dark:scrollbar-thumb-neutral-100'>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
