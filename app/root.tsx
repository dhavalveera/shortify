import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

// Flowbite React
import { ThemeModeScript } from 'flowbite-react'

// CSS
import stylesheet from '~/tailwind.css'
import outputCss from '~/output.css'

// UI
import { MainParentLayout } from './ui'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  ...(process.env.NODE_ENV === 'development' ? [{ rel: 'stylesheet', href: stylesheet, as: 'style' }] : []),
  ...(process.env.NODE_ENV === 'production' ? [{ rel: 'stylesheet', href: outputCss }] : []),
]

export const APP_NAME: string = 'URL Shortener - Short URLs & Custom Free Link Shortener | Shortify'

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Meta Tags */}
        <meta name="application-name" content={APP_NAME} />
        <meta name="author" content="Dhaval Vira" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        {/* <link rel="canonical" href={process.env.SHARE_URL} /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="creationdate" content="01-Mar-2024" />
        <meta name="distribution" content="global" />

        {/* GeoTag */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Koday" />
        <meta name="geo.position" content="22.897066;69.388919" />
        <meta name="ICBM" content="22.897066, 69.388919" />

        {/* Some Extra Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* <meta name="theme-color" content="#54ca95" /> */}
        <link rel="manifest" href="/manifest.json" />
        {/* <link rel="apple-touch-icon" href="/D_V_Cropped.png" /> */}

        {/* Icons */}
        {/* <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/apple-icon-precomposed.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#54ca95" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-TileImage" content="/ms-icon-150x150.png" />
        <meta name="msapplication-TileImage" content="/ms-icon-310x310.png" />
        <meta name="theme-color" content="#54ca95" /> */}

        {/* Flowbite React */}
        <ThemeModeScript />

        <Meta />
        <Links />
      </head>
      <body className={MainParentLayout}>
        <Outlet />

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  )
}
