import type { MetaFunction } from '@remix-run/node'

// Layout
import Layout from '~/layout'

// Home Page Components
import HomeHeroSection from '~/components/page-components/home-page/hero-section'
import HomeSignUpNProductTabsSection from '~/components/page-components/home-page/signup-n-product-tabs'

export const meta: MetaFunction = () => {
  return [
    { title: 'URL Shortener - Short URLs & Custom Free Link Shortener | Shortify' },
    { name: 'description', content: "Shortify's Connections Platform is more than a free URL shortener, with link management web app, and a Link-in-bio solution." },
  ]
}

export default function Index() {
  return (
    <Layout>
      <main>
        <HomeHeroSection />

        <HomeSignUpNProductTabsSection />
      </main>
    </Layout>
  )
}
