import Blog from '../components/Blog'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Stat from '../components/Stat'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Cta />
      <Stat />
      <Blog />
      <Footer />
    </>
  )
}
