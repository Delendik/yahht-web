import styles from './Icon.module.scss'

interface IconProps {
  picture: string
  link: string
}

const Icon: React.FC<IconProps> = ({ picture, link }) => {
  return (
    <a target="_blank" href={link} className={styles.icon__container}>
      <img className={styles.icon__avatar} width="24" height="24" alt="icon" src={picture} />
    </a>
  )
}

export default Icon
