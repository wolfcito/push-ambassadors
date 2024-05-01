'use client'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '~/components/ui/button'
import { LogoApp } from '~/components/logo-app'
import Link from 'next/link'
import { useState } from 'react'
import { PushNavigationMenu } from '../site/header'

const navigation = [
  { name: 'Comunidad', href: '/wip' },
  { name: 'Soporte', href: '/wip' },
  { name: 'Servicio', href: '/wip' },
  { name: 'Más Info', href: '/wip' },
]
export function HeaderSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex w-full max-w-screen-xl items-center justify-between rounded-3xl border border-slate-200/30 px-4 py-2.5">
          <div className="flex lg:flex-1">
            <LogoApp />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <PushNavigationMenu />

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="https://app.push.org/channels/0x026B7A15ad04180aBEe7fEaf34e0F695426BD193"
              target="_blank"
            >
              <Button
                variant="destructive"
                className="w-auto rounded-2xl bg-[#dd44b9] px-8 py-6"
              >
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <LogoApp />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-white/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://app.push.org/channels/0x026B7A15ad04180aBEe7fEaf34e0F695426BD193"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-white/10"
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
