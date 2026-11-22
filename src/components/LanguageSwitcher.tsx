import { useLanguage } from '../hooks/useLanguage'
import type { Language } from '../types/i18n'
import styles from './LanguageSwitcher.module.css'

const LANGUAGES: Language[] = ['fr', 'en']

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className={styles.switcher} role="group" aria-label={t.nav.chooseLanguage}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          className={styles.option}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher