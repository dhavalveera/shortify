import { redirect, type ActionFunctionArgs, type MetaFunction } from '@remix-run/node'

// SEO Data
import { SEOTagsData } from '~/data'

// Home Page Components
import HomeHeroSection from '~/components/page-components/home-page/hero-section'
import HomeSignUpNProductTabsSection from '~/components/page-components/home-page/signup-n-product-tabs'

export const meta: MetaFunction = () => {
  return [
    { title: SEOTagsData['home'].title },
    { name: 'description', content: SEOTagsData['home'].description },
    { name: 'keywords', content: SEOTagsData['home'].keywords },
    { tagName: 'link', rel: 'alternate', href: SEOTagsData['home'].domainUrl, hrefLang: 'en-us' },
    { tagName: 'link', rel: 'alternate', href: SEOTagsData['home'].domainUrl, hrefLang: 'x-default' },

    // Meta
    { tagName: 'meta', property: 'og:url', content: SEOTagsData['home'].domainUrl },
    { tagName: 'meta', property: 'og:type', content: 'website' },
    { tagName: 'meta', property: 'og:title', content: SEOTagsData['home'].title },
    { tagName: 'meta', property: 'og:site_name', content: SEOTagsData['home'].title },
    { tagName: 'meta', property: 'og:description', content: SEOTagsData['home'].description },
    { tagName: 'meta', property: 'og:image', content: SEOTagsData['home'].ogMetaImgUrl },
    { tagName: 'meta', property: 'og:image:url', content: SEOTagsData['home'].ogMetaImgUrl },
    { tagName: 'meta', property: 'og:locale', content: 'en_US' },
    { tagName: 'meta', property: 'og:image:alt', content: SEOTagsData['home'].authorName },

    // Twitter
    { tagName: 'meta', name: 'twitter:card', content: 'summary_large_image' },
    { tagName: 'meta', name: 'twitter:site', content: '@dhavalveera' },
    { tagName: 'meta', name: 'twitter:creator', content: '@dhavalveera' },
    { tagName: 'meta', name: 'twitter:domain', content: SEOTagsData['home'].domainUrl },
    { tagName: 'meta', name: 'twitter:url', content: SEOTagsData['home'].domainUrl },
    { tagName: 'meta', name: 'twitter:title', content: SEOTagsData['home'].title },
    { tagName: 'meta', name: 'twitter:description', content: SEOTagsData['home'].description },
    { tagName: 'meta', name: 'twitter:image', content: SEOTagsData['home'].twitterMetaImgUrl },
    { tagName: 'link', rel: 'canonical', href: SEOTagsData['home'].domainUrl },
    // { tagName: 'link', rel: 'preload', as: 'image', href: SEOTagsData['home'].preloadDVImg, type: 'image/png' },
    // { tagName: 'link', rel: 'preload', as: 'image', href: SEOTagsData['home'].preloadLogo, type: 'image/png' },
  ]
}

// Action to handle form submission
export const action = async ({ request }: ActionFunctionArgs) => {
  // Get the form data from the Request body of HTTP GET Method
  const body = await request.formData()

  // use the `get` to get the form field value
  const longUrl = body.get('long-url')
  const customHalfBack = body.get('back-half')

  // return redirect(`/auth/login?longUrl=${longUrl}&customHalfBack=${customHalfBack}`)
  console.log({ longUrl, customHalfBack })

  return redirect(`/auth/login?longUrl=${longUrl}&optionText=${customHalfBack}`)
}

export default function Index() {
  return (
    <main>
      <HomeHeroSection />

      <HomeSignUpNProductTabsSection />
    </main>
  )
}
