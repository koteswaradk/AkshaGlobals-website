import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path?: string
}

const SITE_NAME = 'Aksha Globals'
const BASE_URL = 'https://koteswaradk.github.io/AkshaGlobals-website/'

export default function SEO({ title, description, path = '' }: SEOProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const url = `${BASE_URL}#${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
