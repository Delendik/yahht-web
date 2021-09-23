import styles from './Breathhh.module.scss'

interface BreathhhProps {
  click: () => void
}

const Breathhh: React.FC<BreathhhProps> = ({ click }) => {
  return (
    <div className={styles.breathhh__main}>
      <div className={styles.breathhh__container}>
        <div className={styles.breathhh__about}>
          <h2 className={styles.breathhh__title}>Project X</h2>
          <p className={styles.breathhh__subtitle}>
            A neural network to keep a cool head
            <br /> and reduce stress during the day
          </p>
          <form className={styles.breathhh__button} onClick={click}>
            Try the beta
            <img
              className={styles.breathhh__buttonPicture}
              width="20"
              height="20"
              alt="arrow"
              src="/icon-arrow.svg"
            />
          </form>
        </div>
        <img
          className={styles.breathhh__picture}
          width="615"
          height="615"
          alt="arrow"
          src="/illustrate-project-x.png"
          srcSet="/illustrate-project-x@2x.png 2x"
        />
      </div>
    </div>
  )
}

export default Breathhh
