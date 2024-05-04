import { AmbassadorCard } from '~/components/ambassador-card'
import { LinkPink } from '~/components/link-pink'
import { DiscordIcon, XIcon } from '~/icons'
import { latamAmbassadors } from '~/menu'

export function HomeSection() {
  return (
    <main id="home">
      <div className="relative isolate">
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Bienvenidos a Push Ambassadors.
                </h1>
                <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                  {`
Bienvenidos a nuestro centro dedicado para Embajadores de Push Protocol. Estamos emocionados de que te unas a nuestro esfuerzo para impulsar Push Protocol hacia adelante.`}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  {socials.map((item) => (
                    <LinkPink key={item.href} href={item.href} icon={item.icon}>
                      {item.children}
                    </LinkPink>
                  ))}
                </div>
              </div>
              <div className="mt-14 flex w-full justify-end gap-8 sm:-mt-44 lg:mt-0">
                {/* <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <AmbassadorCard image={latamAmbassadors[0]} />
            </div> */}
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  {latamAmbassadors.slice(1, 3).map((image) => (
                    <AmbassadorCard key={image} image={image} />
                  ))}
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  {latamAmbassadors.slice(3).map((image) => (
                    <AmbassadorCard key={image} image={image} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const socials = [
  {
    href: 'https://discord.gg/kSg6VDbx',
    children: <DiscordIcon classname="fill-white hover:fill-[#F424C6]" />,
    icon: false,
  },
  {
    href: 'https://twitter.com/PushEnEspanol',
    children: <XIcon />,
    icon: false,
  },
  {
    href: 'https://app.push.org/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D',
    children: 'Dale Opt-In',
    icon: true,
  },
]
