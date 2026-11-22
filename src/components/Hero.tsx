import { contact } from '../data/contact'
import { useLanguage } from '../hooks/useLanguage'
import PhoneMockup from './PhoneMockup'
import styles from './Hero.module.css'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className={`container ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          {t.hero.badge}
        </p>

        <h1 id="hero-title" className={styles.title}>
          {t.hero.titleStart}
          <span className={styles.highlight}>{t.hero.titleHighlight}</span>
          {t.hero.titleEnd}
        </h1>

        <p className={styles.intro}>{t.hero.intro}</p>

        <div className={styles.actions}>
          <a href="#work" className={styles.primary}>
            {t.hero.primaryCta}
            <span aria-hidden="true">→</span>
          </a>
          {contact.cvUrl && (
            <a href={contact.cvUrl} download className={styles.secondary}>
              {t.hero.secondaryCta}
            </a>
          )}
        </div>
      </div>

      <PhoneMockup />
    </section>
  )
}

export default Hero