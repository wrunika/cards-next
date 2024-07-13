import type { Metadata } from 'next'

import '../styles/index.scss'

export const metadata: Metadata = {
  description: 'This app will help you learn something new',
  title: 'Cards',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body>{children}</body>
    </html>
  )
}
