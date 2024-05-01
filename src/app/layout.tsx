import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '~/components/theme-provider'
import { HeaderSection } from '~/components/sections/header.section'

export const metadata: Metadata = {
  title: 'Embajadores | Push (Previously EPNS)',
  description:
    'Conectando y empoderando a la comunidad a través de notificaciones descentralizadas.',
  appleWebApp: {
    title: 'Embajadores | Push (Previously EPNS)',
    capable: true,
    statusBarStyle: 'default',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Embajadores | Push (Previously EPNS)',
    description:
      'Conectando y empoderando a la comunidad a través de notificaciones descentralizadas.',
  },
  openGraph: {
    title: 'Embajadores | Push (Previously EPNS)',
    description:
      'Conectando y empoderando a la comunidad a través de notificaciones descentralizadas.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <HeaderSection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
