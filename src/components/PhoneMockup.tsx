import { useLanguage } from '../hooks/useLanguage'
import styles from './PhoneMockup.module.css'

function PhoneMockup() {
  const { t } = useLanguage()
  const mockup = t.hero.mockup

  return (
    <div className={styles.visual} aria-hidden="true">
      <span className={styles.circleOrange} />
      <span className={styles.circleGreen} />

      <div className={styles.phone}>
        <div className={styles.screen}>
          <p className={styles.appName}>rate-exchange</p>
          <p className={styles.pair}>CAD → XOF</p>

          <div className={styles.field}>
            <span className={styles.fieldLabel}>{mockup.amount}</span>
            <span className={styles.fieldValue}>100 CAD</span>
          </div>

          <div className={styles.field}>
            <span className={styles.fieldLabel}>{mockup.result}</span>
            <span className={`${styles.fieldValue} ${styles.result}`}>• • • XOF</span>
          </div>

          <span className={styles.convert}>{mockup.convert}</span>

          <div className={styles.history}>
            <p className={styles.historyLabel}>{mockup.history}</p>
            <div className={styles.row}>
              <span>20 CAD</span>
              <span className={styles.currency}>XOF</span>
            </div>
            <div className={styles.row}>
              <span>250 CAD</span>
              <span className={styles.currency}>XOF</span>
            </div>
          </div>
        </div>
      </div>

      <span className={styles.techPill}>Kotlin · Jetpack Compose</span>
    </div>
  )
}

export default PhoneMockup