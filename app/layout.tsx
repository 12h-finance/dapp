import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: '12h',
  description: 'desc',
}
const fontSans = localFont({
  src: [
    { path: '../public/fonts/SF-Pro-Display-Regular.otf', style: 'normal' },
    {
      path: '../public/fonts/SF-Pro-Display-RegularItalic.otf',
      style: 'italic',
    },
  ],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(fontSans.variable)}>{children}</body>
    </html>
  )
}
