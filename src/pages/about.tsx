import Team from '../components/Team/Team'
import Footer from '../components/Footer/Footer'
import styles from '../styles/about.module.scss'

function About() {
  return (
    <div className={styles.page}>
      <div className={styles.about__container}>
        <div className={styles.header__head}>
          <img
            className={styles.header__picture}
            width="180"
            height="45"
            alt="yahht logo"
            src="/logotype-yahht.svg"
          />
          <a className={styles.header__button} href="mailto:mail@yahht.com">
            Contact Us
          </a>
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  )
}

export default About
