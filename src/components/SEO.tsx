import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path?: string
}

const SITE_NAME = 'Aksha Global'
const BASE_URL = 'https://koteswaradk.github.io/AkshaGlobals-website/'
const SOCIAL_IMAGE_URL = `${BASE_URL}slider-images/slide1.webp`

export default function SEO({ title, description, path = '' }: SEOProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const route = path ? `/${path.replace(/^\/+/, '')}` : ''
  const url = route ? `${BASE_URL}#${route}` : BASE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={SOCIAL_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
    </Helmet>
  )
}
