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
          'Software development in Canada',
          'Software customization in Ontario',
          'Computer networking in Greater Toronto Area',
          'Software quality testing in Toronto',
          'Manual testing in Mississauga',
          'Artificial intelligence software in Brampton',
          'Providing profiles for job postings in Alberta and Calgary',
        ]}
      >
        <Price />
        {/* <New /> */}
        <FAQ />
      </Base>
    </>
  )
}
