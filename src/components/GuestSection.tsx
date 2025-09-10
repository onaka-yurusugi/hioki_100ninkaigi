'use client'

import Link from 'next/link'
import { useState } from 'react'
import GuestCard from './GuestCard'
import GuestModal from './GuestModal'
import { guests, Guest } from '@/data/guests'
import styles from '../styles/GuestSection.module.css'

export default function GuestSection() {
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGuestClick = (guest: Guest) => {
    setSelectedGuest(guest)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedGuest(null)
  }
  return (
    <section className={styles.guestSection}>
      <h2 className={styles.guestTitle}>GUEST100</h2>
      <p className={styles.guestDescription}>
        日置市に関わる100人の街の挑戦者。
        <br />
        登壇資料をご確認いただけます。
      </p>
      <div className={styles.guestGrid}>
        {guests.map((guest, index) => (
          <GuestCard
            key={index}
            number={guest.number}
            imageSrc={guest.imageSrc}
            description={guest.description}
            profile={guest.profile}
            url={guest.url}
            isComingSoon={guest.isComingSoon}
            onClick={() => handleGuestClick(guest)}
          />
        ))}
        <GuestCard number="" imageSrc="" description="" isComingSoon={true} />
        <GuestCard number="" imageSrc="" description="" isComingSoon={true} />
      </div>
      <Link href="#" className="button">
        <span>もっと見る &gt;</span>
      </Link>
      <GuestModal
        guest={selectedGuest}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}