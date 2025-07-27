import Image from 'next/image'
import styles from '../styles/FutureSection.module.css'

export default function FutureSection() {
  return (
    <section className={styles.futureSection}>
      <h2>描きたい未来</h2>
      <Image
        src="/image-60.png"
        alt="描きたい未来 イメージ"
        width={600}
        height={400}
        className={styles.futureImage}
      />
      <p className={styles.futureText}>
        <span className="highlight">一歩踏みだす対話の場をつくることで、</span>
        <br />
        <span className="highlight">地域に対する誇りを持ち、</span>
        <br />
        <span className="highlight">いきいきと活動する人が増えていく。</span>
      </p>
    </section>
  )
}