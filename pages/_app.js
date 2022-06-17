// import SEO from '@bradgarropy/next-seo'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <SEO
        title='SoftcoVision'
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
        icon='/favicon.ico'
        twitter={{
          card: 'summary',
          site: '@softcovision',
          image: '/vercel.svg',
        }}
      /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
