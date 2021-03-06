/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Content() {
  return (
    <div className='py-16 bg-red-50 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8'>
        <div className='text-base max-w-prose mx-auto lg:max-w-none'>
          <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
            About SoftCOVision
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-900 sm:text-4xl'>
            What makes us different
          </p>
        </div>
        <div className='relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72'>
          <p className='text-lg text-gray-500'>
            Rigorous Testing: Once we have finished the initial development of
            our client&apos;s product, we begin performing meticulous bug
            checks. These tests are included in the price of the development
            package. After testing, we deliver the software to our clients.
          </p>
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start'>
          <div className='relative z-10'>
            <div className='prose prose-indigo text-gray-500 mx-auto lg:max-w-none'>
              <p>
                Quality Guaranteed: The world of technology can be fast-paced
                and scary. That&apos;s why our goal is to provide a high-quality
                product that aligns with your company&apos;s needs. No matter
                the budget, we pride ourselves on providing professional
                customer service. We guarantee you will be satisfied with our
                work.
              </p>

              <h3>We&apos;re here to help</h3>
              <br></br>
              <p>
                We understand the unique business goals, needs, and pains of
                prospects, helping them grow their business with IT products.
                Our team works with prospects through an entire sales cycle,
                from intro conversations through to contract negotiations.
                Uncovering new business opportunities. Effectively moving the
                way through the sales cycle managing your pipeline.
                Collaborating on projects within the team and region with other
                teams to deliver the highest level of merchant experience.
                Making the most of the opportunity to work at an amazing,
                innovative, and rapidly growing company; have an impact; be
                involved and do something incredible!
              </p>
            </div>
            <div className='mt-10 flex text-base max-w-prose mx-auto lg:max-w-none'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700'
                >
                  Contact sales
                </a>
              </div>
              {/* <div className='rounded-md shadow ml-4'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50'
                >
                  Learn more
                </a>
              </div> */}
            </div>
          </div>
          <div className='mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none'>
            <svg
              className='absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='bedc54bc-7371-44a2-a2bc-dc68d819ae60'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)'
              />
            </svg>
            <blockquote className='relative bg-white rounded-lg shadow-lg'>
              <div className='rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8'>
                <img src='logo.PNG' alt='SoftCOVision' className='h-8' />
                <div className='relative text-lg text-gray-700 font-medium mt-8'>
                  <svg
                    className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-200'
                    fill='currentColor'
                    viewBox='0 0 32 32'
                    aria-hidden='true'
                  >
                    <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                  </svg>
                  <p className='relative'>
                    Softco vision is a company that helps grow and guide a high
                    impact, high leverage, and high visibility team that
                    supports the productivity of IT engineers working on every
                    code. The team creates and supports frontend services,
                    tools, and practices used by IT engineers every day. Team
                    work to support frontend development workflows; to expand
                    and improve frontend testing capabilities; to maintain a
                    high bar for the quality and reliability of frontend code;
                    and to generally identify and eliminate rough edges in the
                    frontend development lifecycle. and handling middleware and
                    backend.
                  </p>
                </div>
              </div>
              <cite className='relative flex items-center sm:items-start bg-red-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10'>
                <span className='relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2'>
                  <img
                    className='w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300'
                    src='https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80'
                    alt=''
                  />
                </span>
                <span className='relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1'>
                  <span className='text-white font-semibold sm:inline'>
                    Judith Black
                  </span>{' '}
                  <span className='sm:inline'>CEO at SoftCOVision</span>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
