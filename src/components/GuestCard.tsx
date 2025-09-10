'use client'

import Image from 'next/image'
import styles from '../styles/GuestCard.module.css'

interface GuestCardProps {
  number: string
  imageSrc: string
  description: string
  profile?: string
  url?: string
  isComingSoon?: boolean
  onClick?: () => void
}

export default function GuestCard({ number, imageSrc, description, profile, url, isComingSoon = false, onClick }: GuestCardProps) {
  if (isComingSoon) {
    return <div className={`${styles.guestCard} ${styles.comingSoonPlaceholder}`}></div>
  }

  const handleClick = () => {
    if (profile && onClick) {
      onClick()
    } else if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className={styles.guestCard}>
      <div className={styles.guestNumber}>{number}</div>
      <Image
        src={imageSrc}
        alt={`ゲスト写真 ${number}`}
        width={150}
        height={150}
        className={`${styles.guestImage} ${(profile || url) ? styles.clickable : ''}`}
        onClick={handleClick}
        style={{ cursor: (profile || url) ? 'pointer' : 'default' }}
      />
      <p>{description}</p>
    </div>
  )
}