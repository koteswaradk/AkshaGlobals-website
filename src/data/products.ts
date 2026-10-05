export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  featureImage?: string
  category: string
  features: string[]
  specs: { label: string; value: string }[]
  playStoreUrl: string
  appStoreUrl: string
  color: string
}

const productIconBase = `${import.meta.env.BASE_URL}product-icons/`

export const products: Product[] = [
  {
    id: 'Om SaiBaba',
    name: 'Om SaiBaba',
    tagline: 'Manthra|Bajana|shloka in one place',
    description: 'A divine companion for all devotees. Listen to powerful mantras, shlokas, and bhajans. Seeking Blessings and feel the Sai Baba Presence in your Daily life',
    icon: `${productIconBase}icon1.webp`,
    featureImage: `${import.meta.env.BASE_URL}saibabafeaturescreen.webp`,
    category: "Devotional",
    features: [
      'Listen to Mantra|shlokas|bhajans',
      'Live darshan',
      'Community access and share the Sai Baba experience in your life',
      'Reach the Sai Baba temple through the nearby map',
      'List of all the temples',
      'Daily quotes',
      'Book tickets to Sai Baba darshan',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '3.2.1' },
      { label: 'Size', value: '42 MB' },
      { label: 'Rating', value: '4.7 ★' },
      { label: 'Downloads', value: '50K+' },
      { label: 'Last Updated', value: 'Dec 2024' },
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.skyries.saibaba&hl=en_IN',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-primary to-m3-primary-10',
  },
  {
    id: 'Callsecure',
    name: 'CallSecure',
    tagline: 'AI-powered call management system',
    description: 'A privacy-focused, AI-powered call management system that blocks spam, filters unwanted calls, and provides intelligent call handling across multiple modes..',
    icon: `${productIconBase}callsecure.webp`,
    featureImage: `${import.meta.env.BASE_URL}bannersecure.webp`,
    category: "Call",
    features: [
      'Basic Whitelist Filtering - Allow only selected contacts on modes',
      'Call Blocking - Block spam and unwanted calls',
      'Call Logging - Track all incoming and outgoing calls',
      'Contact Management - Whitelist, Blacklist, Family, Emergency categories',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '3.2.1' },
      { label: 'Size', value: '42 MB' },
      { label: 'Rating', value: '4.7 ★' },
      { label: 'Downloads', value: '50K+' },
      { label: 'Last Updated', value: 'Dec 2024' },
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.akshaglobal.smartcallshield',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-primary to-m3-primary-10',
  },
  {
    id: 'driveshield',
    name: 'DriveShield',
    tagline: 'Smart driving safety and vehicle protection',
    description: 'DriveShield is an advanced vehicle safety application that monitors driving behavior, detects potential hazards, and provides real-time alerts to ensure safe and secure driving experience.',
    icon: `${productIconBase}driveshield.webp`,
    featureImage: `${import.meta.env.BASE_URL}driveshieldfeature.webp`,
    category: "Safety",
    features: [
      'Real-time driving monitoring',
      'Hazard detection and alerts',
      'Trip history and analytics',
      'Emergency assistance integration',
      'Vehicle diagnostics',
      'Safe driving rewards',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '2.1.0' },
      { label: 'Size', value: '35 MB' },
      { label: 'Rating', value: '4.6 ★' },
      { label: 'Downloads', value: '25K+' },
      { label: 'Last Updated', value: 'Nov 2024' },
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.akshaglobal.driveshield',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-secondary to-m3-secondary-10',
  },
  {
    id: 'resona',
    name: 'Resona',
    tagline: 'Sound meditation or Sound healing meditation',
    description: 'Meditating through sound is often called sound meditation or sound healing meditation. It uses sound as the main focus to calm the mind and body instead of focusing only on breath.',
    icon: `${productIconBase}sm.webp`,
    featureImage: `${import.meta.env.BASE_URL}resonafeature.webp`,
    category: "meditation",
    features: [
      'Helps calm the mind',
      'Reduces stress and anxiety',
      'Improves concentration',
      'Supports emotional balance',
      'Helps with sleep',
      'Creates a deeper meditative state',
      'Feel physically relaxed during sound meditation',
      'Helps people feel more connected, peaceful, or spiritually focused',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '3.2.1' },
      { label: 'Size', value: '42 MB' },
      { label: 'Rating', value: '4.7 ★' },
      { label: 'Downloads', value: '50K+' },
      { label: 'Last Updated', value: 'Dec 2024' },
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.akshaglobal.resona',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-primary to-m3-primary-10',
  },
  {
    id: 'custom clock',
    name: 'Floral Clock widget',
    tagline: 'clock widget',
    description: 'Analog Clock widget with a natural flower look  and feel that decorates the phone with a natural analog clock.',
    icon: `${productIconBase}icon4.webp`,
    featureImage: `${import.meta.env.BASE_URL}clockfeature.webp`,
    category: 'clock widget',
    features: [
      'Analog Clock widget',
      'Natural flower look',
      'Animation with the natural petal',
      'Looks stunning on the phone screen',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '3.2.1' },
      { label: 'Size', value: '42 MB' },
      { label: 'Rating', value: '4.7 ★' },
      { label: 'Downloads', value: '50K+' },
      { label: 'Last Updated', value: 'Dec 2024' },
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.akshaglobal.flowerclockwidget',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-primary to-m3-primary-10',
  }
]
