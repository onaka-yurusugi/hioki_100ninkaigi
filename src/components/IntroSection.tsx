import Link from 'next/link'
import styles from '../styles/IntroSection.module.css'

export default function IntroSection() {
  return (
    <section className={styles.introSection}>
      <div className={styles.introTextBlock}>
        <p className={styles.introText}>
          日置市は今、まさに変化の渦中にあります。
          <br /> <br />
          2022年度に合併後初めて、
          転入者が転出者を100人以上も上回ったこと。
          <br /> <br />
          日置市に本社を持つ、挑戦的で面白い企業が増えつつあること。
          <br /> <br />
          日置市若者未来会議に参加していた学生たちが
          「日置市をもっとこうしていきたい」と
          当事者として夢を抱いていたこと。
          <br /> <br />
          日置市で育まれる、ちょっと変わった暖かな志の火は、
          少しずつ街の可能性を照らし始めています。
          <br /> <br />
          「日置市１００人カイギ」は、
          日置市に関わる面白い活動をしている人、
          これから何か挑戦を始めようとしている人、
          日置市ひいては鹿児島県の可能性を広げている人を中心に、
          毎回5名のゲストのお話を聞き、
          緩やかにつながりを作るイベントです。
          <br /> <br />
          ここに集まった人たちの志の火が、
          さらに燃え広がっていくことを願って。
        </p>
        <h2 className={styles.catchphrase}>火、起きし街。日置市。</h2>
      </div>
      <div className={styles.introContact}>
        <p className={styles.contactText}>
          最新情報・イベントご参加・お問い合わせは
          <br />
          公式Instagramをご確認ください。
        </p>
        <Link href="#" className="button">
          <span>Instagram &gt;</span>
        </Link>
      </div>
    </section>
  )
}