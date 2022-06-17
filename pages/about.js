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
          'Software development',
          'Software customization',
          'Computer networking',
          'Software quality testing',
          'Manual testing',
          'Artificial intelligence software',
          'Providing profiles for job postings',
        ]}
      >
        <Company />
        <Content />
      </Base>
    </>
  )
}
