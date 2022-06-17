import Base from '../components/Base'
import FAQ from '../components/Faq'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import New from '../components/News'
import Price from '../components/Price'

export default function Feature() {
  return (
    <>
      <Base
        title='SoftcoVision-Features'
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
        <Price />
        <New />
        <FAQ />
      </Base>
    </>
  )
}
