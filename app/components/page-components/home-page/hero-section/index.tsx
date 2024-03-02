import type { FC } from 'react'

// Common
import LinkButton from '~/components/common/link-button'

const HomeHeroSection: FC = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="mx-auto flex flex-col items-center py-24 md:flex-row md:px-5">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="text-4xl font-extrabold text-[#252628] md:text-6xl">
            Build superior digital <span className="text-blue-700">connections.</span>
          </h1>

          <p className="my-7 text-xl font-normal text-[#56575b]">
            Use our URL shortener, and Link-in-bio pages to engage your audience and connect them to the right &amp; correct detail. Create, update, and track each and everything easily and at your
            fingertips with <strong className="underline">Shortify</strong>.
          </p>

          <div className="flex justify-center">
            <LinkButton linkHref="/auth/signup" linkLabel="Register now" btnClass="w-full md:w-fit capitalize" />
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img className="rounded object-cover object-center" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
