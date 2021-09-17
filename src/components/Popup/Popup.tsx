import cnBind from 'classnames/bind'
import styles from './Popup.module.scss'

const cx = cnBind.bind(styles)

interface PopupProps {
  success: boolean
  show: boolean
  click: () => void
  clickSuccess: () => void
}

const Popup: React.FC<PopupProps> = ({ success, show, click, clickSuccess }) => {
  let showPopup = cx('popup__container', {
    popup__hide: !show,
  })

  return (
    <div className={showPopup}>
      {!success && (
        <div className={styles.popup__popup}>
          <p className={styles.popup__title}>Beta access</p>
          <p className={styles.popup__subtitle}>
            A neural network to keep a cool head and reduce stress during the day
          </p>
          <input type="email" className={styles.popup__input} placeholder="Email"></input>
          <form action="">
            <button type="button" className={styles.lassie__button} onClick={clickSuccess}>
              Submit request
            </button>
          </form>
          <button type="button" onClick={click}>
            <img
              className={styles.popup__close}
              width="20"
              height="20"
              alt="close button"
              src="/close.svg"
            />
          </button>
        </div>
      )}
      {success && (
        <div className={styles.popup__popupSuccess}>
          <p className={styles.popup__title}>Success!</p>
          <p className={styles.popup__subtitle}>
            We've received your request.
            <br />
            Expect an invitation by email.
          </p>
          <form action="">
            <button type="button" className={styles.lassie__buttonSuccess} onClick={click}>
              Okay
            </button>
          </form>
          <button type="button" onClick={click}>
            <img
              className={styles.popup__close}
              width="20"
              height="20"
              alt="close button"
              src="/close.svg"
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default Popup
