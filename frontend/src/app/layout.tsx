import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background flex flex-col`}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <header className="sticky top-0 z-50 bg-background shadow-sm w-full">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />
              </div>
            </header>

            <div className="flex-grow w-full">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <main className="py-4">{children}</main>
              </div>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

