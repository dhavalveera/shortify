import type { FC } from 'react'

// Flowbite React
import { Tabs } from 'flowbite-react'

// Tab Components
import ShortenURLFormSection from './short-url-form'

const HomeSignUpNProductTabsSection: FC = () => {
  return (
    <section className="box-border py-10 text-xl">
      <div>
        <div className="px-10 pb-3 pt-0">
          <h2 className="text-center text-xl font-extrabold text-primaryDarkBlue">Curated connections start with just one click.</h2>

          <p className="my-5 text-center text-3xl font-extrabold text-[#252628]">Sign up today and start using Shortify.</p>
        </div>
      </div>

      <div className="mt-10">
        <Tabs aria-label="URL Shortener & Link-in-bio Tabs" style="default" className="mx-auto">
          <Tabs.Item active title="Link Shortener">
            <ShortenURLFormSection />
          </Tabs.Item>
          <Tabs.Item title="Link-in-bio">
            <span>Link-in-bio</span>
          </Tabs.Item>
        </Tabs>
      </div>
    </section>
  )
}

export default HomeSignUpNProductTabsSection
