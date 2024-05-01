'use client'
import Link from 'next/link'
import { PushLogoIcon } from '~/icons'
import { Badge } from '~/components/ui/badge'

export function LogoApp() {
  return (
    <Link className="relative flex items-center text-xl" href="/">
      <PushLogoIcon className="m-3 h-9 w-auto" />
      <Badge className="bottom-0 right-0 bg-slate-50/20 text-xs text-white">
        LATAM
      </Badge>
    </Link>
  )
}
