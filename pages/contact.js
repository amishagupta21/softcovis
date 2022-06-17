import Base from '../components/Base'
import Contactsale from '../components/Contactsales'
import Footer from '../components/Footer'
import Getin from '../components/Get'
import Hero from '../components/Hero'
import Technical from '../components/Technical'

export default function Contact() {
  return (
    <>
      <Base
        title='SoftcoVision-contact'
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
        <Contactsale />
        <Getin />
        <Technical />
      </Base>
    </>
  )
}
