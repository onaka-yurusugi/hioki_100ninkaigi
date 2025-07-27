import Link from 'next/link'
import styles from '../styles/MemberSection.module.css'

export default function MemberSection() {
  return (
    <section 
      className={styles.memberSection}
      style={{
        backgroundImage: 'url(/image-70.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <h2 className={styles.memberTitle}>MEMBER</h2>
      <h3 className={styles.memberSubtitle}>イベントを支える火起きしメンバー</h3>
      <div className={styles.memberGrid}>
        <div className={styles.memberCard}>
          <img
            src="/image-90.png"
            alt="メンバー写真"
            width={170}
            height={195}
            className={styles.memberImage}
          />
          <p>サキガケ日置市(移)民<br />伊牟田 孝弘</p>
          <Link href="#" className="button">
            <span>Instagram &gt;</span>
          </Link>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/image-80.png"
            alt="メンバー写真"
            width={170}
            height={195}
            className={styles.memberImage}
          />
          <p>LR株式会社<br />肥田 祐輔</p>
          <Link href="#" className="button">
            <span>Instagram &gt;</span>
          </Link>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/image-130.png"
            alt="メンバー写真"
            width={170}
            height={195}
            className={styles.memberImage}
          />
          <p>AIエンジニア<br />畠中 智弘</p>
          <Link href="#" className="button">
            <span>Instagram &gt;</span>
          </Link>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/member-photo-04.png"
            alt="メンバー写真"
            width={170}
            height={195}
            className={styles.memberImage}
          />
          <p>トリミングハウスCafune<br />池田 美汐</p>
          <Link href="#" className="button">
            <span>Instagram &gt;</span>
          </Link>
        </div>
        <div className={styles.memberCard}>
          <img
            src="/image-140.png"
            alt="メンバー写真"
            width={170}
            height={195}
            className={styles.memberImage}
          />
          <div>
            <p className={styles.role}>司会</p>
            <p>鹿児島タレント<br />岩本 あいか</p>
          </div>
          <Link href="#" className="button">
            <span>Instagram &gt;</span>
          </Link>
        </div>
        <div className={styles.memberCard}>
          <h4>日置市100人カイギ事務局</h4>
        </div>
      </div>
    </section>
  )
}