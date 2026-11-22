import { useLanguage } from '../hooks/useLanguage'
import styles from './About.module.css'

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className={`container ${styles.about}`} aria-labelledby="about-title">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{t.about.eyebrow}</p>
        <h2 id="about-title" className={styles.title}>
          {t.about.title}
        </h2>
      </div>

      <div className={styles.content}>
        <p className={styles.lead}>{t.about.lead}</p>
        <p className={styles.body}>{t.about.body}</p>

        <ul className={styles.stats}>
          {t.about.stats.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
