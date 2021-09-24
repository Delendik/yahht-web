import { YMInitializer } from 'react-yandex-metrika'
import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Breathhh from '../components/Breathhh/Breathhh'
import Lassie from '../components/Lassie/Lassie'
import Footer from '../components/Footer/Footer'
import styles from '../styles/index.module.scss'
import Popup from '../components/Popup/Popup'

function Home() {
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const handleClick = () => {
    setShow(!show)
    setSuccess(false)
  }

  const handleSuccess = () => {
    setSuccess(!success)
    setShow(true)
  }
  return (
    <div className={styles.page}>
      <YMInitializer accounts={[79520590]} />
      <Head>
        <title>Yahht - Digital product development team</title>
        <meta
          name="description"
          content="We create digital products that help people take care of themselves. We are open to suggestions and feedback and willing to share our expertise in mental, wellness and productivity."
        />
        <meta name="author" content="Yahht" />
        <meta name="twitter:image:alt" content="Yahht - Digital product development team" />
        <meta
          name="keywords"
          content="Yahht, Team, Digital, Products, Breathhh, Alpaca, Lassie Smoke, Bot, API, Development, Mental, Wellness, Health, Productivity, Extension, Bot, Chatbot, Websites"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
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
      <Header />
      <Breathhh click={handleClick} />
      <Lassie />
      <Footer click={handleClick} />
      <Popup success={success} show={show} click={handleClick} clickSuccess={handleSuccess} />
    </div>
  )
}

export default Home
