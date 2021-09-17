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
        <div className={styles.header__head}>
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
      </div>
      <Team />
      <Footer click={handleClick} />
      <Popup success={success} show={show} click={handleClick} clickSuccess={handleClickSuccess} />
    </div>
  )
}

export default About
