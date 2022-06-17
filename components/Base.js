import Footer from './Footer'
import Hero from './Hero'
import Head from 'next/head'

export default function Base({ children, title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Hero />

      {children}
      <Footer />
    </>
  )
}
