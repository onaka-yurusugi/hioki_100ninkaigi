import styles from '../styles/AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <h2>100人カイギとは</h2>
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutContent}>
          <p>
            日本全国で開催されている、会社・組織・地域に"身近な人"同士のゆるいつながりを作るコミュニティ活動です。
            <br />
            街で働く100人を起点に人と人とをゆるやかにつなぎ、都市のあり方や価値の再発見を目的としています。
            <br /> <br />
            ルールは簡単。
            <br />
            ・毎回、身近で面白い活動をしている5名のゲストの話を聞く。
            <br />
            ・ゲストが100名に達したら解散する。
            <br /> <br />
            100人100様の生き方に触れることで、いつもの景色が少し違って見えてきます。
          </p>
        </div>
        <img
          src="/logo-about.png"
          alt="100人カイギ ロゴ 2"
          width={200}
          height={200}
          className={styles.aboutImage}
        />
      </div>
    </section>
  )
}