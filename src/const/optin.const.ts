export const optin: OptinProps[] = [
  {
    title: 'Eventos',
    href: '/optin/events',
    description: 'Calendario de eventos, talleres y reuniones para embajadores',
  },
  {
    title: 'Noticias',
    href: '/optin/news',
    description:
      'Actualizaciones y anuncios importantes relacionados con el programa de embajadores y Push en general',
  },
]

interface OptinProps {
  title: string
  href: string
  description: string
}
