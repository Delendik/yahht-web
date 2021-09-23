import Link from 'next/link'
import styles from './Footer.module.scss'

interface FooterProps {
  click: () => void
}

const Footer: React.FC<FooterProps> = ({ click }) => {
  return (
    <div className={styles.footer__main}>
      <div className={styles.footer__container}>
        <div className={styles.footer__part}>
          <Link href="/">
            <img
              className={styles.footer__label}
              width="68"
              height="68"
              alt="arrow"
              src="/emblem-yahht.png"
              srcSet="/emblem-yahht@2x.png 2x"
            />
          </Link>
          <div className={styles.footer__projects}>
            <div className={styles.footer__projectsColumn}>
              <Link href="/about">
                <a className={styles.footer__link}>About</a>
              </Link>
              <a target="_blank" href="https://medium.com/@yahht" className={styles.footer__link}>
                Medium
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/YahhtTeam"
                className={styles.footer__link}
              >
                Facebook
              </a>
            </div>
            <div className={styles.footer__projectsColumn}>
              <p className={styles.footer__link} onClick={click}>
                Project X
              </p>
              <a target="_blank" href="https://lassie.yahht.com/" className={styles.footer__link}>
                Lassie Smoke
              </a>
              <a target="_blank" href="https://alpaca.yahht.com/" className={styles.footer__link}>
                Alpaca
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer__part}>
          <p className={styles.footer__rights}>© Yahht, 2021 • All rights reserved</p>
          <a
            target="_blank"
            href="https://www.buymeacoffee.com/yahht"
            className={styles.footer__linkCoffee}
          >
            Buy us a coffee
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
