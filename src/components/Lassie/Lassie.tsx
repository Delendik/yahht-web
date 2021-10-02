import Container from '../Container/Container'
import styles from './Lassie.module.scss'

export default function Lassie() {
  return (
    <div className={styles.lassie__main}>
      <Container>
        <div className={styles.lassie__container}>
          <div className={styles.lassie__about}>
            <h2 className={styles.lassie__title}>Lassie Smoke</h2>
            <p className={styles.lassie__subtitle}>
              Increase the intervals between smoking and quit the bad habit in 14-17 days
            </p>
            <a href="https://lassie.yahht.com/" className={styles.lassie__button} target="_blank">
              How it works
              <img
                className={styles.lassie__buttonPicture}
                width="20"
                height="20"
                alt="arrow"
                src="/icon-arrow-black.svg"
              />
            </a>
          </div>
          <div className={styles.lassie__picture}></div>
        </div>
      </Container>
    </div>
  )
}
