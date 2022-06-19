import Base from '../components/Base'
import Company from '../components/Company'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function About() {
  return (
    <>
      <Base
        title='SoftcoVision-about'
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
        <Company />
        <Content />
      </Base>
    </>
  )
}
