import styles from '../styles/PhilosophySection.module.css'

export default function PhilosophySection() {
  return (
    <section className={styles.philosophySection}>
      <div className={styles.philosophyCard}>
        <h2>
          日置市100人カイギが<br />目指す場のあり方
        </h2>
        <div className={styles.philosophyContent}>
          1. 街で活躍するゲストの話を聞いて、
          <br />
          　 参加者が何か「<span className="highlight">刺激</span>」を受ける場。
          <br /> <br />
          2. 日置市を舞台に何か挑戦をしたい人が、
          <br />
          　 自身の気持ちを「<span className="highlight">宣言</span>」する場。
          <br /> <br />
          3. これから日置市で始まるプロジェクトを
          <br />
          　 「<span className="highlight">応援</span>」したくなる、参加者も関わりたくなる場。
        </div>
      </div>
    </section>
  )
}