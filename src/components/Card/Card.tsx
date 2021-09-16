import styles from './Card.module.scss'

interface CardProps {
  picture: string
  picture2: string
  name: string
  description: string
}

const Card: React.FC<CardProps> = ({ picture, picture2, name, description }) => {
  return (
    <div className={styles.card__container}>
      <img
        className={styles.card__avatar}
        width="370"
        height="370"
        alt="avatar"
        src={picture}
        srcSet={picture2}
      />
      <p className={styles.cart__title}>{name}</p>
      <p className={styles.cart__subtitle}>{description}</p>
    </div>
  )
}

export default Card
