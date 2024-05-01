export function Section({ id, children }: SectionProps) {
  return (
    <section id={id}>
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

interface SectionProps {
  readonly id: string
  readonly children: React.ReactNode
}
