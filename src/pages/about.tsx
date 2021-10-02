import { useState } from 'react'
import Head from 'next/head'
import Team from '../components/Team/Team'
import TopHead from '../components/TopHead/TopHead'
import Container from '../components/Container/Container'
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
    <>
      <Head>
        <title>Yahht - About</title>
        <meta
          name="description"
          content="We are committed to creating and supporting products that help you take care of yourself. We are open to suggestions and feedback and willing to share our expertise in mental, wellness and productivity"
        />
        <meta name="author" content="Yahht" />
        <meta name="twitter:image:alt" content="Yahht - Digital product development team" />
        <meta
          name="keywords"
          content="Yahht, Team, Digital, Products, Breathhh, Alpaca, Lassie Smoke, Bot, API, Development, Mental, Wellness, Health, Productivity, Extension, Bot, Chatbot, Websites"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="profile:username" content="yahht_team"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Yahht" />
        <meta property="og:title" content="Yahht Team" />
        <meta
          property="og:description"
          content="We create digital products that help people take care of themselves. We are open to suggestions and feedback and willing to share our expertise in mental, wellness and productivity."
        />
        <meta property="og:url" content="https://yahht.com" />
        <meta property="og:image" content="https://yahht.com/opengraph.png" />
      </Head>

      <div className={styles.page}>
        <Container>
          <TopHead />
        </Container>
        <Team />
        <Container>
          <div className={styles.about__buttonContainer}>
            <p className={styles.about__buttonText}>Let’s do great things together!</p>
            <a className={styles.about__button} href="mailto:mail@yahht.com?subject=Join Team">
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
        </Container>
        <Footer click={handleClick} />
        <Popup
          success={success}
          show={show}
          click={handleClick}
          clickSuccess={handleClickSuccess}
        />
      </div>
    </>
  )
}

export default About
