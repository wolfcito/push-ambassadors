import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <section className="m-7 flex w-full justify-center">
      <div className="flex flex-col items-center justify-center">
        <article>
          <h1 className="pb-3 text-3xl font-bold">Redes sociales</h1>

          <Link
            href="https://push.org"
            className="hover:text-[#8B43EE]"
            target="_blank"
          >
            Website: https://push.org
          </Link>
          <p>Twitter: https://twitter.com/pushprotocol</p>
          <p>Discord: discord.gg/pushprotocol</p>
          <p>Docs: https://push.org/docs/notifications</p>
        </article>
      </div>
      <div>
        <Image
          src="/images/emoji-push.png"
          alt="contact"
          width={300}
          height={300}
          className="drop-shadow-md"
        />
      </div>
    </section>
  )
}
