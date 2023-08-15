import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './global.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'HarmoNook',
  description:
    'Listen combinations of ambient sounds for relaxing or getting more productive on your task!',
  keywords: [
    'noise',
    'sound',
    'ambience',
    'relaxing',
    'productive',
    'noisli',
    'noisekun'
  ],
  authors: [
    {
      name: 'dos-shaman',
      url: 'https://github.com/dos-shaman'
    }
  ],
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: 'device-width',
    viewportFit: 'cover'
  },
  themeColor: '#04A2DC',

  manifest: '/manifest.json'
}

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-nunito'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      </head>
      <body className={nunito.variable}>{children}</body>
    </html>
  )
}
