import styles from '../styles/GuestCard.module.css'

interface GuestCardProps {
  number: string
  imageSrc: string
  description: string
  isComingSoon?: boolean
}

export default function GuestCard({ number, imageSrc, description, isComingSoon = false }: GuestCardProps) {
  if (isComingSoon) {
    return <div className={`${styles.guestCard} ${styles.comingSoonPlaceholder}`}></div>
  }

  return (
    <div className={styles.guestCard}>
      <div className={styles.guestNumber}>{number}</div>
      <img
        src={imageSrc}
        alt={`ゲスト写真 ${number}`}
        width={150}
        height={150}
        className={styles.guestImage}
      />
      <p>{description}</p>
    </div>
  )
}