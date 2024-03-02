import type { FC } from 'react'

// Common
import LinkButton from '~/components/common/link-button'

// UI
import { MdTwoColXsOneCol } from '~/ui'

const HomeHeroSection: FC = () => {
  return (
    <div className="py-10">
      <div className={MdTwoColXsOneCol}>
        <div>
          <h1 className="text-4xl font-extrabold text-[#252628] md:text-6xl">
            Build superior digital <span className="text-blue-700">connections.</span>
          </h1>

          <p className="my-7 text-xl font-normal text-[#56575b]">
            Use our URL shortener, and Link-in-bio pages to engage your audience and connect them to the right &amp; correct detail. Create, update, and track each and everything easily and at your
            fingertips with <strong className="underline">Shortify</strong>.
          </p>

          <LinkButton linkHref="/auth/signup" linkLabel="Register now" btnClass="w-full md:w-fit capitalize" />
        </div>
      </div>
    </div>
  )
}

export default HomeHeroSection
