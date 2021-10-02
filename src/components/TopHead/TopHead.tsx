import Link from 'next/link'
import styles from './TopHead.module.scss'

export default function TopHead() {
  return (
    <div className={styles.topHead}>
      <Link href="/">
        <a>
          <img
            className={styles.topHead__picture}
            width="180"
            height="45"
            alt="yahht logo"
            src="/logotype-yahht.svg"
          />
        </a>
      </Link>
      <a className={styles.topHead__link} href="mailto:mail@yahht.com">
        Contact Us
      </a>
    </div>
  )
}
