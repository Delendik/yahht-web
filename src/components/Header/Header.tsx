import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header__main}>
      <div className={styles.header__container}>
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
        <div className={styles.header__avatars}>
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/shirshov.png"
            srcSet="/shirshov@2x.png 2x"
          />
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/sergey.png"
            srcSet="/sergey@2x.png 2x"
          />
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/alexeym.png"
            srcSet="/alexeym@2x.png 2x"
          />
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/alexeyd.png"
            srcSet="/alexeyd@2x.png 2x"
          />
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/artem.png"
            srcSet="/artem@2x.png 2x"
          />
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/alexanders.png"
            srcSet="/alexanders@2x.png 2x"
          />
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/alexandersh.png"
            srcSet="/alexandersh@2x.png 2x"
          />
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/denis.png"
            srcSet="/denis@2x.png 2x"
          />
          <img
            className={styles.header__avatar}
            width="80"
            height="80"
            alt="avatar"
            src="/anna.png"
            srcSet="/anna@2x.png 2x"
          />
        </div>

        <Link href="/about">
          <div className={styles.header__link}>
            <p>
              We create digital products that&nbsp;
              <br />
              help people take care of themselves
            </p>
            <svg
              viewBox="0 0 41 41"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.header__linkIcon}
            >
              <path d="M8.08315 0.662476H40.0877V32.667H34.412V10.3515L4.25647 40.507L0.243164 36.4937L30.3987 6.33815H8.08315V0.662476Z" />
            </svg>
          </div>
        </Link>

        <div className={styles.header__hashtags}>
          <p className={styles.header__hashtag}>#mental</p>
          <p className={styles.header__hashtag}>#wellness</p>
          <p className={styles.header__hashtag}>#productivity</p>
        </div>
      </div>
    </div>
  )
}
