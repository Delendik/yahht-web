import Link from 'next/link'
import Container from '../Container/Container'
import styles from './Footer.module.scss'

interface FooterProps {
  click: () => void
}

const Footer: React.FC<FooterProps> = ({ click }) => {
  return (
    <div className={styles.footer__main}>
      <Container>
        <div className={styles.footer__container}>
          <div className={styles.footer__part}>
            <Link href="/">
              <a>
                <img
                  className={styles.footer__label}
                  width="68"
                  height="68"
                  alt="arrow"
                  src="/emblem-yahht.png"
                  srcSet="/emblem-yahht@2x.png 2x"
                />
              </a>
            </Link>
            <div className={styles.footer__projects}>
              <div className={styles.footer__projectsColumn}>
                <div className={styles.footer__linkWrap}>
                  <Link href="/about">
                    <a className={styles.footer__link}>About</a>
                  </Link>
                </div>
                <div className={styles.footer__linkWrap}>
                  <a
                    target="_blank"
                    href="https://medium.com/@yahht"
                    className={styles.footer__link}
                  >
                    Medium
                  </a>
                </div>
                <div className={styles.footer__linkWrap}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/74047264"
                    className={styles.footer__link}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className={styles.footer__projectsColumn}>
                <div className={styles.footer__linkWrap}>
                  <span className={styles.footer__link} onClick={click}>
                    Breathhh
                  </span>
                </div>
                <div className={styles.footer__linkWrap}>
                  <a
                    target="_blank"
                    href="https://lassie.yahht.com/"
                    className={styles.footer__link}
                  >
                    Lassie Smoke
                  </a>
                </div>
                <div className={styles.footer__linkWrap}>
                  <a
                    target="_blank"
                    href="https://alpaca.yahht.com/"
                    className={styles.footer__link}
                  >
                    Alpaca
                  </a>
                </div>
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
      </Container>
    </div>
  )
}

export default Footer
