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
          'Software development in Canada',
          'Software customization in Ontario',
          'Computer networking in Greater Toronto Area',
          'Software quality testing in Toronto',
          'Manual testing in Mississauga',
          'Artificial intelligence software in Brampton',
          'Providing profiles for job postings in Alberta and Calgary',
        ]}
      >
        <Contactsale />
        <Getin />
        <Technical />
      </Base>
    </>
  )
}
