import { pushMissions } from '~/components/links'
import { Section } from './section'
import { LinkPink } from '~/components/link-pink'

export function MissionsSection() {
  return (
    <Section id="mision-push-pip-github-discussions">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        🌐 Push Mission, PIP & GitHub Discussions
      </h1>
      <p className="mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
        {`Stay updated with our Push Missions, get an overview of the Push Improvement Proposals (PIP), or join our GitHub discussions to contribute your ideas and solutions.`}
      </p>
      <div className="mt-10 flex flex-col items-start gap-6">
        {pushMissions.map((item) => (
          <LinkPink key={item.href} href={item.href} icon={item.icon}>
            {item.children}
          </LinkPink>
        ))}
      </div>
    </Section>
  )
}
