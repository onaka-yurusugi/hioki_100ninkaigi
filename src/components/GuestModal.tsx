'use client'

import { Guest } from '@/data/guests'
import styles from '../styles/GuestModal.module.css'

interface GuestModalProps {
  guest: Guest | null
  isOpen: boolean
  onClose: () => void
}

export default function GuestModal({ guest, isOpen, onClose }: GuestModalProps) {
  if (!isOpen || !guest || !guest.profile) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.imageContainer}>
              <img src={guest.imageSrc} alt={`Guest ${guest.number}`} />
            </div>
            <div className={styles.headerText}>
              <h2 className={styles.guestNumber}>GUEST {guest.number}</h2>
              {guest.name && <h3 className={styles.guestName}>{guest.name}</h3>}
              {guest.position && <p className={styles.guestPosition}>{guest.position}</p>}
              {guest.description && <p className={styles.description}>{guest.description}</p>}
            </div>
          </div>
          <div className={styles.profileSection}>
            <h3>プロフィール</h3>
            <p className={styles.profileText}>{guest.profile}</p>
            {guest.sns && (
              <div className={styles.snsSection}>
                <h4>SNS</h4>
                <p className={styles.snsText}>{guest.sns}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}