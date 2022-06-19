/* This example requires Tailwind CSS v2.0+ */
export default function Team() {
  return (
    <div className='relative bg-indigo-800'>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
          alt=''
        />
        <div
          className='absolute inset-0 bg-indigo-800 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          Get in touch
        </h1>
        <p className='mt-6 text-xl text-indigo-100 max-w-3xl'>
          We know that our clients have unique needs and circumstances. Tell us
          more about your project, and we will get back to you soon with some
          ideas of how we can address those circumstances while creating the
          most stable software possible.
        </p>
      </div>
    </div>
  )
}
