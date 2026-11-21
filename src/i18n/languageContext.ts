import { createContext } from 'react'
import type { Language, Translations } from '../types/i18n'

export type LanguageContextValue = {
  language: Language
  t: Translations
  setLanguage: (language: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)