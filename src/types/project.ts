import type { Language } from './i18n'

export type LocalizedText = Record<Language, string>

export type ProjectCategory = 'web' | 'mobile'

export type CoverTheme = 'green' | 'peach' | 'dark'

export type Project = {
  id: string
  category: ProjectCategory
  name: string
  coverTitle: string
  theme: CoverTheme
  platform: LocalizedText
  description: LocalizedText
  technologies: string[]
  githubUrl?: string
}
