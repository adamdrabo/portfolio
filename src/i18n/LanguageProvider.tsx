import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from './languageContext'
import { fr } from './fr'
import { en } from './en'
import type { Language } from '../types/i18n'

const STORAGE_KEY = 'language'
const translations = { fr, en }

function readSavedLanguage(): Language | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'fr' || saved === 'en' ? saved : null
  } catch {
    return null
  }
}

function saveLanguage(language: Language): void {
  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch {
    return
  }
}

function getInitialLanguage(): Language {
  const saved = readSavedLanguage()
  if (saved) {
    return saved
  }
  return navigator.language.startsWith('en') ? 'en' : 'fr'
}

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = translations[language].meta.title
    saveLanguage(language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}