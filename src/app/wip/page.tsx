import { cva } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '~/components/sections'

export default function Wip() {
  return (
    <Section id="wip">
      <div className="m-7 flex w-full justify-center">
        <div className="flex flex-col items-center justify-center">
          <article className="flex flex-col gap-3">
            <h1 className="pb-3 text-3xl font-bold">Redes sociales</h1>

            <Link
              href="https://push.org"
              className={contactLinkStyle()}
              target="_blank"
            >
              Website: https://push.org
            </Link>
            <Link
              href="https://twitter.com/pushprotocol"
              className={contactLinkStyle()}
              target="_blank"
            >
              Twitter: https://twitter.com/pushprotocol
            </Link>
            <Link
              href="https://discord.gg/pushprotocol"
              className={contactLinkStyle()}
              target="_blank"
            >
              Discord: discord.gg/pushprotocol
            </Link>
            <Link
              href="https://push.org/docs/notifications"
              className={contactLinkStyle()}
              target="_blank"
            >
              Docs: https://push.org/docs/notifications
            </Link>
          </article>
        </div>
        <div className="shadow-[#F424C6] drop-shadow-md">
          <Image
            src="/images/emoji-push.png"
            alt="contact"
            width={300}
            height={300}
          />
        </div>
      </div>
    </Section>
  )
}

const contactLinkStyle = cva('hover:text-[#F424C6] hover:underline')
