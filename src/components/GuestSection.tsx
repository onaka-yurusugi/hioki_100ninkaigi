import Link from 'next/link'
import GuestCard from './GuestCard'
import { guests } from '@/data/guests'
import styles from '../styles/GuestSection.module.css'

export default function GuestSection() {
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
            isComingSoon={guest.isComingSoon}
          />
        ))}
        <GuestCard number="" imageSrc="" description="" isComingSoon={true} />
        <GuestCard number="" imageSrc="" description="" isComingSoon={true} />
      </div>
      <Link href="#" className="button">
        <span>もっと見る &gt;</span>
      </Link>
    </section>
  )
}