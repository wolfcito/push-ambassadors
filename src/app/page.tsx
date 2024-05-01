'use client'

import Link from 'next/link'
import { AmbassadorCard } from '~/components/ambassador-card'
import { HomeSection, Section } from '~/components/sections'
import { DiscordIcon, XIcon } from '~/icons'
import { latamAmbassadors } from '~/menu'

export default function Home() {
  return <HomeView />
}

function HomeView() {
  return (
    <div className="text-white">
      <HomeSection
        id="home"
        pictures={
          <>
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <AmbassadorCard image={latamAmbassadors[0]} />
            </div>
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
          </>
        }
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Bienvenidos a Push Ambassadors.
        </h1>
        <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
          {`
Bienvenidos a nuestro centro dedicado para Embajadores de Push Protocol. Estamos emocionados de que te unas a nuestro esfuerzo para impulsar Push Protocol hacia adelante.`}
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="https://discord.gg/kSg6VDbx"
            target="_blank"
            className="cursor-pointer  hover:text-[#F424C6]"
          >
            <DiscordIcon classname="fill-white hover:fill-[#F424C6]" />
          </Link>
          <Link
            href="https://twitter.com/PushEnEspanol"
            target="_blank"
            className="cursor-pointer hover:text-[#F424C6]"
          >
            <XIcon />
          </Link>
          <a
            href="https://app.push.org/channels/0xB88460Bb2696CAb9D66013A05dFF29a28330689D"
            target="_blank"
            className="text-sm font-semibold leading-6 hover:text-[#F424C6]"
          >
            Dale Opt-In <span aria-hidden="true">→</span>
          </a>
        </div>
      </HomeSection>

      <Section id="resources">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          📚 Resources
        </h1>
        <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
          {`This is your one-stop resource center. Stay in the know, and use these resources to help spread the word about Push.`}
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a href="#" className="text-sm font-semibold leading-6">
            Live demo <span aria-hidden="true">→</span>
          </a>
        </div>
      </Section>
    </div>
  )
}
