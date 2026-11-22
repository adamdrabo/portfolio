import { contact } from '../data/contact'
import { useLanguage } from '../hooks/useLanguage'
import styles from './Contact.module.css'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className={`container ${styles.section}`} aria-labelledby="contact-title">
      <div className={styles.card}>
        <span className={styles.bars} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>

        <div className={styles.text}>
          <p className={styles.eyebrow}>{t.contact.eyebrow}</p>
          <h2 id="contact-title" className={styles.title}>
            {t.contact.title}
          </h2>
          <p className={styles.subtitle}>{t.contact.text}</p>
        </div>

        <div className={styles.actions}>
          <a href={`mailto:${contact.email}`} className={styles.primary}>
            {t.contact.emailCta}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
            aria-label={`${contact.githubLabel} (${t.contact.newTab})`}
          >
            {contact.githubLabel}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
