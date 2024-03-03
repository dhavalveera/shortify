export type SEOTagProps = {
  title: string
  description: string
  keywords: string
  domainUrl: string
  authorName: string
  ogMetaImgUrl: string
  twitterMetaImgUrl: string
  preloadLogo: string
  preloadDVImg?: string
}

export type PageNameSEOType = {
  home: SEOTagProps
  urlShortener?: SEOTagProps
  contact?: SEOTagProps
}

export const SEOTagsData: PageNameSEOType = {
  home: {
    title: 'URL Shortener - Short URLs & Custom Free Link Shortener | Shortify',
    description: "Shortify's Connections Platform is more than a free URL shortener, with link management web app, and a Link-in-bio solution.",
    keywords: 'url shortener, link shortener, best link shortener, best url shortener',
    domainUrl: 'https://shortify.vercel.app/',
    authorName: 'Shortify',
    ogMetaImgUrl: 'https://shortify.vercel.app/Shortify.png',
    twitterMetaImgUrl: 'https://shortify.vercel.app/Shortify.png',
    preloadLogo: '/Shortify.png',
  },
}
