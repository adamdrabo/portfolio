import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import LanguageSwitcher from './LanguageSwitcher'
import styles from './Navigation.module.css'

function Navigation() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWorkOpen, setIsWorkOpen] = useState(false)
  const workRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (workRef.current && !workRef.current.contains(event.target as Node)) {
        setIsWorkOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsWorkOpen(false)
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function closeMenus() {
    setIsWorkOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={closeMenus}>
          <span className={styles.mark} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          adam drabo
        </a>

        <nav aria-label={t.nav.mainLabel} className={styles.nav}>
          <ul id="main-menu" className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li ref={workRef} className={styles.dropdown}>
              <button
                type="button"
                className={styles.link}
                aria-expanded={isWorkOpen}
                aria-controls="work-menu"
                onClick={() => setIsWorkOpen(!isWorkOpen)}
              >
                {t.nav.achievements}
                <span className={styles.chevron} aria-hidden="true" />
              </button>
              <ul id="work-menu" className={`${styles.submenu} ${isWorkOpen ? styles.submenuOpen : ''}`}>
                <li>
                  <a href="#web" className={styles.sublink} onClick={closeMenus}>
                    {t.nav.web}
                  </a>
                </li>
                <li>
                  <a href="#mobile" className={styles.sublink} onClick={closeMenus}>
                    {t.nav.mobile}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#about" className={styles.link} onClick={closeMenus}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>
                {t.nav.cv}
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.link} onClick={closeMenus}>
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <button
            type="button"
            className={styles.burger}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation