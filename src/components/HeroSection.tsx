import styles from '../styles/HeroSection.module.css'

export default function HeroSection() {
  return (
    <header 
      className={styles.heroSection}
      style={{
        backgroundImage: 'url(/image-10.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
    >
      <div className={styles.heroContent}>
        <img
          src="/logo-main.png"
          alt="日置市100人カイギ ロゴ"
          width={200}
          height={200}
          className={styles.logo}
        />
        <h1 className={styles.title}>日置市100人カイギ</h1>
        <p className={styles.subtitle}>火、起きし街。日置市。</p>
      </div>
    </header>
  )
}