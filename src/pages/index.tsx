import { YMInitializer } from 'react-yandex-metrika'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Breathhh from '../components/Breathhh/Breathhh'
import Lassie from '../components/Lassie/Lassie'
import Footer from '../components/Footer/Footer'
import styles from '../styles/index.module.scss'

function Home() {
  return (
    <div className={styles.page}>
      <YMInitializer accounts={[79520590]} />
      <Head>
        <title>Yahht - Software development</title>
        <meta
          name="description"
          content="A team of independent developers creating digital products"
        />
        <meta
          name="keywords"
          content="Yahht, Breathhh, Lassie Smoke, Alpaca, Tabula Rasa, Slang Shuffle, Weather forecast"
        />
        <link rel="icon" href="/favicon.ico" sizes="192x192" />
      </Head>
      <Head>
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Yahht" />
        <meta property="og:image" content="meta-img.png" />
        <meta property="og:site_name" content="Yahht" />
        <meta property="og:image" content="https://lassie.yahht.com/opengraph.png" />
        <meta property="og:url" content="https://yahht.com/" />
      </Head>
      <Header />
      <Breathhh />
      <Lassie />
      <Footer />
    </div>
  )
}

export default Home
