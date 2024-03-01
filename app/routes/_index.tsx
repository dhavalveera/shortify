import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'URL Shortener - Short URLs & Custom Free Link Shortener | Shortify' },
    { name: 'description', content: "Shortify's Connections Platform is more than a free URL shortener, with robust link management software, and a Link-in-bio solution." },
  ]
}

export default function Index() {
  return (
    <main>
      <p>home page</p>
    </main>
  )
}
