import type { Translations } from '../types/i18n'

export const en: Translations = {
  meta: {
    title: 'Adam Drabo · Mobile Developer',
  },
  nav: {
    mainLabel: 'Main navigation',
    achievements: 'Work',
    web: 'Web',
    mobile: 'Mobile',
    about: 'About',
    cv: 'Resume',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    chooseLanguage: 'Choose language',
  },
  hero: {
    badge: 'Mobile developer · Montréal',
    titleStart: '',
    titleHighlight: 'Useful',
    titleEnd: ' apps, designed for the communities I know.',
    intro:
      'Android developer (Kotlin, Jetpack Compose) with an AEC in mobile application development from Collège Ahuntsic. I enjoy building practical tools, especially for the African diaspora.',
    primaryCta: 'See my work',
    secondaryCta: 'Download my resume',
    mockup: {
      amount: 'Amount',
      result: 'Result',
      convert: 'Convert',
      history: 'Recent conversions',
    },
  },
  projects: {
    web: {
      eyebrow: '01 · Web work',
      title: 'What I build for the web',
    },
    mobile: {
      eyebrow: '02 · Mobile work',
      title: "What I've built for mobile",
    },
    emptyTitle: 'Projects coming soon',
    emptyText: 'New projects are on the way.',
    technologies: 'Technologies',
    github: 'View on GitHub',
    previous: 'Previous project',
    next: 'Next project',
  },
  about: {
    eyebrow: '03 · About',
    title: "Hi, I'm Adam.",
    lead: "I live in Montréal-Est. I completed my AEC in mobile application development at Collège Ahuntsic in 2026, and I'm now continuing to learn web development.",
    body: 'What drives me: building apps that meet real needs, often those of the African diaspora. Outside of code, I coordinated volunteers for eight years, and I play soccer.',
    stats: [
      { value: 'AEC', label: 'Collège Ahuntsic, 2026' },
      { value: '3 platforms', label: 'Android, iOS, Web' },
      { value: '8 years', label: 'coordinating volunteers' },
    ],
  },
}
