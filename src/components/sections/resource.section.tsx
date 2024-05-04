import { resources } from '~/components/links'
import { Section } from './section'
import { LinkPink } from '~/components/link-pink'

export function ResourceSection() {
  return (
    <Section id="resources">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        📚 Resources
      </h1>
      <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
        {`This is your one-stop resource center. Stay in the know, and use these resources to help spread the word about Push.`}
      </p>
      <div className="mt-10 flex flex-col items-start gap-6">
        {resources.map((item) => (
          <LinkPink key={item.href} href={item.href} icon={item.icon}>
            {item.children}
          </LinkPink>
        ))}
      </div>
    </Section>
  )
}
