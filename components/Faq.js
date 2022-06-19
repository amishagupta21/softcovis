/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: 'How do I create a product with you?',
    answer:
      "If you have an idea contact us by our online form, e-mail or phone. We'll meet and talk it over. Just be sure to prepare as much info about your idea as possible, it will smoothen the meeting and benefit further cooperation. If you don't know how to get around to it, go ahead and read our blog entry on how to write a project brief.",
  },
  {
    question: 'What do I need to know before contacting you?',
    answer:
      "Well, the most important thing to know is what do you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application. You don't want to spend many months developing it with us without being sure what you need. If you have no experience in app development feel free to read our blog entry on that topic. We'll also be glad to help you get started, building projects from scratch is nothing new for us.",
  },
  {
    question: ' How much time will it take for you to make my app?',
    answer:
      "To give you a precise answer we must prepare a project scope and create a budget. We shall tell you how much of that scope can be completed within the budget and we'll be able to estimate how long will it take after at least a month of work. Don't worry, if you're not happy with our work after two weeks you can retract from the project with no penalties, this is our trial period and we believe that any reliable software house should give you one. Read our blog entry to learn more about our methods.",
  },
  {
    question: 'How do you guarantee product quality',
    answer:
      'We evaluate the result after every two weeks, we test our work (we conduct both development and acceptance tests), we present it to you, we apply your feedback so you know you get what you are paying for.',
  },
  {
    question:
      'How can I be sure you work at my project as much as you declare?',
    answer:
      'We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Redmine to track time spent on your project.',
  },
  {
    question: 'What happens after you finish my app?',
    answer:
      'Hopefully the app is exactly what you dreamed of :) But apart from delivering a finished product, we are happy to provide you with technical support and app maintenance should you need it. After all, we know our work inside out. Of course if you want to maintain the app by yourself the source code and all technical data is at your disposal, but even in that case, feel free to contact us if you need any help.',
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Feature() {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
          <h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Frequently asked questions
          </h2>
          <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
            {faqs.map((faq) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt className='text-lg'>
                      <Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
                        <span className='font-medium text-gray-900'>
                          {faq.question}
                        </span>
                        <span className='ml-6 h-7 flex items-center'>
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden='true'
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      <p className='text-base text-gray-500'>{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
