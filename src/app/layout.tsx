import type { Metadata } from 'next'

import { ReactNode } from 'react'

import Header from '@/components/header/header'

import '../styles/index.scss'

export const metadata: Metadata = {
  description: 'This app will help you learn something new',
  title: 'Cards',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body>
        <Header isAuth={false} />
        {children}
      </body>
    </html>
  )
}
