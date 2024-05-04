import { Section } from './section'
import { LinkPink } from '~/components/link-pink'

export function DevResourcesSection() {
  return (
    <Section id="dev-resources">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        🔧 Development Resources
      </h1>
      <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
        {`Dive into the 'awesome-push' repo for all your essential resources to kick-start your journey with using and developing the Push Protocol! 
`}
      </p>
      <div className="mt-10 flex flex-col items-start gap-6">
        <LinkPink href="https://push.org/docs/hackers/">Hackers Doc</LinkPink>
      </div>
    </Section>
  )
}
