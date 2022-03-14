import { useState } from 'react'
import Head from 'next/head'
import Team from '../components/Team/Team'
import TopHead from '../components/TopHead/TopHead'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Popup from '../components/Popup/Popup'
import styles from '../styles/vpn.module.scss'

const DATA = [
  {
    name: `Konstantin Shirshov`,
    dataconfig: `vpn/kshirshov.conf`,
    dataqr: `vpn/kshirshov.png`,
  },
  {
    name: `Sergey Elushev`,
    dataconfig: `vpn/selushev.conf`,
    dataqr: `vpn/selushev.png`,
  },
  {
    name: `Alexey Masalov`,
    dataconfig: `vpn/maleksey.conf`,
    dataqr: `vpn/maleksey.png`,
  },
  {
    name: `Alexander Sligan`,
    dataconfig: `vpn/asligan.conf`,
    dataqr: `vpn/asligan.png`,
  },
  {
    name: `Artem Milovanov`,
    dataconfig: `vpn/amilovanov.conf`,
    dataqr: `vpn/amilovanov.png`,
  },
  {
    name: `Alexander Shapovalov`,
    dataconfig: `vpn/ashapovalov.conf`,
    dataqr: `vpn/ashapovalov.png`,
  },
  {
    name: `Alexey Delendik`,
    dataconfig: `vpn/adelendik.conf`,
    dataqr: `vpn/adelendik.png`,
  },
  {
    name: `Denis Vorontsov`,
    dataconfig: `vpn/dvorontsov.conf`,
    dataqr: `vpn/dvorontsov.png`,
  },
  {
    name: `Ann Lakhotkina `,
    dataconfig: `vpn/alakhotkina.conf`,
    dataqr: `vpn/alakhotkina.png`,
  },
  {
    name: `Tania Raskalova`,
    dataconfig: `vpn/traskalova.conf`,
    dataqr: `vpn/traskalova.png`,
  },
]

function Vpn() {
  return (
    <>
      <Head>
        <title> Yahht – Virtual Private Network </title>
        <meta
          name="description"
          content="Page with team member access. Full compatibility with iOS, Android, macOS, Windows, and Linux."
        />
        <meta
          property="og:description"
          content="Page with team member access. Full compatibility with iOS, Android, macOS, Windows, and Linux."
        />
        <link rel="icon" href="/favicon-vpn.ico" />
        <meta property="profile:username" content="yahht_team"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Yahht" />
        <meta property="og:title" content="Yahht VPN" />
        <meta property="og:url" content="https://yahht.com" />
        <meta property="og:image" content="https://yahht.com/opengraph.png" />
      </Head>

      <div className={styles.page}>
        <Container>
          <TopHead />
        </Container>
        <h1 className={styles.vpn__title}>Virtual Private Network</h1>
        <p className={styles.vpn__text}>
          Hosted by Digital Ocean in Germany. A single output IP with a traffic limit of 4TB. Full
          compatibility with iOS, Android, macOS, Windows, and Linux.
        </p>
        <p className={styles.vpn__text}>
          You can download{' '}
          <a
            href="https://www.wireguard.com/install/"
            target="_blank"
            className={styles.vpn__text_link}
          >
            Wireguard App
          </a>{' '}
          or setup with native settings by your operating system.
        </p>
        <div className={styles.vpn__wrapper}>
          {DATA.map((item, index) => {
            return (
              <div key={index} className={styles.vpn__block}>
                <p className={styles.vpn__name}>{item.name}</p>
                <a className={styles.vpn__namedata} href={item.dataqr}>
                  {item.name}
                </a>
                <a className={styles.vpn__data} href={item.dataconfig} download>
                  Download configure
                </a>
              </div>
            )
          })}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Vpn
