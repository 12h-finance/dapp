import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'

import { StarknetWalletConnectors } from '@dynamic-labs/starknet'
import Header from '@/components/header'

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
      <body className={cn(fontSans.variable, 'font-sans antialiased')}>
        <DynamicContextProvider
          settings={{
            environmentId: '201e3fd9-3fe6-4826-b166-b22ec13a4ef8',
            walletConnectors: [StarknetWalletConnectors],
          }}
        >
          <div
            className='relative flex flex-col min-h-screen bg-center bg-cover'
            style={{ backgroundImage: 'url(/luch.svg)' }}
          >
            <Header />
            <div className='relative z-20 flex-grow'>{children}</div>
          </div>
        </DynamicContextProvider>
      </body>
    </html>
  )
}
