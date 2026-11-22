import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={`container ${styles.footer}`}>
      <p>© {year} Adam Drabo</p>
    </footer>
  )
}

export default Footer
