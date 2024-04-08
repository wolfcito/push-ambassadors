import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '~/components/theme-provider'
import { PushNavigationMenu } from '~/components/site/header'
import { ModeToggle } from '~/components/site/modetoggle'
import { PushLogoIcon } from '~/icons'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid-cols-1fr grid h-full w-full grid-rows-[auto,1fr,auto]">
            <div className="flex w-full justify-center">
              <div className="flex w-full max-w-screen-xl justify-between">
                <Link className="flex items-center text-xl" href="/">
                  <PushLogoIcon className="m-3 w-28" />
                </Link>
                <PushNavigationMenu />
                <p className="flex items-center text-xl">
                  <ModeToggle />
                </p>
              </div>
            </div>
            <div className="h-full bg-slate-300">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
