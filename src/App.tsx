import { useLanguage } from './hooks/useLanguage'

function App() {
  const { language, t, setLanguage } = useLanguage()

  return (
    <main className="container">
      <h1>adam drabo</h1>
      <p>
        {t.nav.achievements} · {t.nav.about} · {t.nav.contact}
      </p>
      <button type="button" onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}>
        {language === 'fr' ? 'EN' : 'FR'}
      </button>
    </main>
  )
}

export default App