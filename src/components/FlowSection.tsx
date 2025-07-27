import Image from 'next/image'
import styles from '../styles/FlowSection.module.css'

export default function FlowSection() {
  return (
    <section className={styles.flowSection}>
      <h2>イベントの流れ</h2>
      <div className={styles.flowItem}>
        <div>
          <h3>第１部 ゲストトーク</h3>
          <p>
            5名のゲストに、お一人10分でご自身の自己紹介や活動に込めた想い、これから描く未来についてお話いただく。
          </p>
        </div>
        <Image
          src="/event-talk-01.png"
          alt="ゲストトークの様子"
          width={400}
          height={300}
          className={styles.flowImage}
        />
      </div>
      <div className={styles.flowItem}>
        <div>
          <h3>第２部 ネットワーキング（交流会）</h3>
          <p>
            ゲストと参加者、そして参加者同士が交流を深め、繋がり合う。
          </p>
        </div>
        <Image
          src="/event-talk-02.png"
          alt="交流会の様子"
          width={400}
          height={300}
          className={styles.flowImage}
        />
      </div>
    </section>
  )
}