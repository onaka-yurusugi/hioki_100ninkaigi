import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import AboutSection from '@/components/AboutSection'
import PhilosophySection from '@/components/PhilosophySection'
import FutureSection from '@/components/FutureSection'
import FlowSection from '@/components/FlowSection'
import GuestSection from '@/components/GuestSection'
import MemberSection from '@/components/MemberSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <main className="main-content">
        <IntroSection />
        <AboutSection />
        <PhilosophySection />
        <FutureSection />
        <FlowSection />
        <GuestSection />
        <MemberSection />
      </main>
      <Footer />
    </div>
  )
}