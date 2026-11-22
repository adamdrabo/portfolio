import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'rate-exchange',
    category: 'mobile',
    name: 'rate-exchange',
    coverTitle: 'CAD / XOF',
    theme: 'green',
    platform: {
      fr: 'Android',
      en: 'Android',
    },
    description: {
      fr: 'Convertisseur de devises entre le dollar canadien et le franc CFA, pensé pour la diaspora africaine. Mon premier projet réalisé entièrement seul.',
      en: 'Currency converter between the Canadian dollar and the CFA franc, designed for the African diaspora. My first project built entirely on my own.',
    },
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit'],
    githubUrl: 'https://github.com/adamdrabo/rate-exchange',
  },
  {
    id: 'sofra',
    category: 'mobile',
    name: 'Sofra',
    coverTitle: 'Sofra',
    theme: 'peach',
    platform: {
      fr: 'Mobile multiplateforme',
      en: 'Cross-platform mobile',
    },
    description: {
      fr: 'Plan de repas sur 7 jours à partir de recettes sans porc ni alcool, avec estimation du coût de la semaine. Projet intégrateur, en chef d’équipe.',
      en: '7-day meal plan built from pork-free and alcohol-free recipes, with an estimate of the weekly cost. Capstone project, as team lead.',
    },
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/adamdrabo/sofra',
  },
  {
    id: 'cinefiche',
    category: 'mobile',
    name: 'CinéFiche',
    coverTitle: 'CinéFiche',
    theme: 'dark',
    platform: {
      fr: 'iOS',
      en: 'iOS',
    },
    description: {
      fr: 'Journal de films personnel alimenté par l’API TMDb. Projet solo présenté en examen.',
      en: 'Personal movie journal powered by the TMDb API. Solo project presented as an exam.',
    },
    technologies: ['SwiftUI', 'Core Data', 'MVVM'],
  },
]
