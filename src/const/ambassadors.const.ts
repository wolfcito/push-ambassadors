export const ambassadors: AmbassadorProps[] = [
  {
    title: 'Perfiles Destacados',
    href: '/heros',
    description: 'Calendario de eventos, talleres y reuniones para embajadores',
  },
  {
    title: 'Únete al Programa',
    href: '/program',
    description:
      'Actualizaciones y anuncios importantes relacionados con el programa de embajadores y Push en general',
  },
]

interface AmbassadorProps {
  title: string
  href: string
  description: string
}
