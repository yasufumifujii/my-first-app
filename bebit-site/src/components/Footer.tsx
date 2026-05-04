import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const links = [
  { label: 'Service', path: '/service' },
  { label: 'Contents', path: '/contents' },
  { label: 'News', path: '/news' },
  { label: 'Recruit', path: '/recruit' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>beBit</span>
            <p className={styles.tagline}>
              ユーザーを中心に、<br />ビジネスの成長を実現する。
            </p>
          </div>
          <nav className={styles.nav}>
            {links.map((l) => (
              <Link key={l.path} to={l.path} className={styles.navLink}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} beBit, Inc. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>プライバシーポリシー</a>
            <a href="#" className={styles.legalLink}>利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
