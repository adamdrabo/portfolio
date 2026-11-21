import { useLanguage } from '../hooks/useLanguage'
import styles from './HomePage.module.css'

function HomePage() {
  const { t } = useLanguage()

  const sections = [
    { id: 'web', title: t.nav.web },
    { id: 'mobile', title: t.nav.mobile },
    { id: 'about', title: t.nav.about },
    { id: 'contact', title: t.nav.contact },
  ]

  return (
    <main>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className={`container ${styles.placeholder}`}>
          <h2>{section.title}</h2>
        </section>
      ))}
    </main>
  )
}

export default HomePage