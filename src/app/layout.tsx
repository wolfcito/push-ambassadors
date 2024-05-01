import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '~/components/theme-provider'
import { HeaderSection } from '~/components/sections/header.section'
import { PushNavigationMenu } from '~/components/site/header'

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
          {/* <div className="grid-cols-1fr grid h-full w-full grid-rows-[auto,1fr,auto]">
            <div className="flex w-full justify-center px-8 pt-11 lg:px-12">
              <div className="flex w-full max-w-screen-xl justify-between rounded-3xl border border-slate-200/30 px-4 py-2.5">
                
                
                <p className="flex items-center text-xl">
                  
                  <ModeToggle />
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex w-full max-w-screen-xl justify-between">
              </div>
            </div>
          </div> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
