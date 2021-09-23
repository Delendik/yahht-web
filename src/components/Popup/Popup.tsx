import cnBind from 'classnames/bind'
import { useState } from 'react'
import axios from 'axios'
import styles from './Popup.module.scss'

const cx = cnBind.bind(styles)

interface PopupProps {
  success: boolean
  show: boolean
  click: () => void
  clickSuccess: () => void
}

const Popup: React.FC<PopupProps> = ({ success, show, click, clickSuccess }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [valid, setValid] = useState(true)

  const handleSubmit = () => {
    clickSuccess()
    const article = { email: value }
    axios.post('https://api.breathhh.app/beta_requests ', article).then((res) => {
      if (res.status === 201) {
        setValue('')
      }
    })
  }

  let showPopup = cx('popup__container', {
    popup__hide: !show,
  })

  let showError = cx('popup__input', {
    popup__invalid: !valid,
  })

  const handleChange = (e) => {
    setValid(true)
    setError('')
    setValue(e.currentTarget.value)
  }

  const checkValid = (e) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(value).toLowerCase())) {
      setError('Incorrect email')
      setValid(false)
      e.preventDefault()
    } else {
      handleSubmit()
      setError('')
      setValid(true)
    }
  }

  return (
    <div className={showPopup}>
      {!success && (
        <div className={styles.popup__popup}>
          <p className={styles.popup__title}>Beta access</p>
          <p className={styles.popup__subtitle}>
            A neural network to keep a cool head and reduce stress during the day
          </p>
          <input
            type="email"
            className={showError}
            id="input"
            placeholder="Email"
            value={value}
            required
            onChange={(e) => handleChange(e)}
          ></input>
          {error && <label className={styles.popup__label}>{error}</label>}
          <form action="">
            <button type="submit" className={styles.lassie__button} onClick={checkValid}>
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
          <p className={styles.popup__subtitleSuccess}>
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
