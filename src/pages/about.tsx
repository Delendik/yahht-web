import { useState } from 'react'
import Link from 'next/link'
import Team from '../components/Team/Team'
import Footer from '../components/Footer/Footer'
import Popup from '../components/Popup/Popup'
import styles from '../styles/about.module.scss'

function About() {
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const handleClick = () => {
    setShow(!show)
    setSuccess(false)
  }

  const handleClickSuccess = () => {
    setSuccess(!success)
    setShow(true)
  }

  return (
    <div className={styles.page}>
      <div className={styles.about__container}>
        <Link href="/">
          <img
            className={styles.header__picture}
            width="180"
            height="45"
            alt="yahht logo"
            src="/logotype-yahht.svg"
          />
        </Link>
        <a className={styles.header__button} href="mailto:mail@yahht.com">
          Contact Us
        </a>
      </div>
      <Team />
      <div className={styles.about__buttonContainer}>
        <p className={styles.about__buttonText}>Let’s do great things together!</p>
        <a className={styles.about__button} href="mailto:mail@yahht.com">
          Join the team
          <img
            className={styles.about__buttonPicture}
            width="20"
            height="20"
            alt="arrow"
            src="/icon-arrow.svg"
          />
        </a>
      </div>
      <Footer click={handleClick} />
      <Popup success={success} show={show} click={handleClick} clickSuccess={handleClickSuccess} />
    </div>
  )
}

export default About
