import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <h3 className={styles.comingSoon}>パワフルアンバサダー<br />（ComingSoon）</h3>
        <p className={styles.contactText}>
          最新情報・イベントご参加・お問い合わせは
          <br />
          公式Instagramをご確認ください。
        </p>
        <Link href="#" className="button">
          <span>Instagram &gt;</span>
        </Link>
        <p className={styles.copyright}>
          © HIOKI CITY 100ninkaigi. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}