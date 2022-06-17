import Base from '../components/Base'
import Blog from '../components/Blog'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Stat from '../components/Stat'

export default function Home() {
  return (
    <>
      <Base
        title='SoftcoVision-home'
        description='Bring your Business into the Software ideas.we turn the digital dreams of our clients into a reality'
        keywords={[
          'Software development',
          'Software customization',
          'Computer networking',
          'Software quality testing',
          'Manual testing',
          'Artificial intelligence software',
          'Providing profiles for job postings',
        ]}
      >
        <HeroSection />
        <Cta />
        <Stat />
        <Blog />
      </Base>
    </>
  )
}
