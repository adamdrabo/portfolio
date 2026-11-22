import Hero from '../components/Hero'
import { useLanguage } from '../hooks/useLanguage'
import styles from './HomePage.module.css'

type PlaceholderProps = {
  id: string
  title: string
}

function Placeholder({ id, title }: PlaceholderProps) {
  return (
    <section id={id} className={`container ${styles.placeholder}`}>
      <h2>{title}</h2>
    </section>
  )
}

function HomePage() {
  const { t } = useLanguage()

  return (
    <main>
      <Hero />
      <div id="work">
        <Placeholder id="web" title={t.nav.web} />
        <Placeholder id="mobile" title={t.nav.mobile} />
      </div>
      <Placeholder id="about" title={t.nav.about} />
      <Placeholder id="contact" title={t.nav.contact} />
    </main>
  )
}

export default HomePage