export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  category: string
  features: string[]
  specs: { label: string; value: string }[]
  playStoreUrl: string
  appStoreUrl: string
  color: string
}

export const products: Product[] = [
  {
    id: 'edutrack',
    name: 'EduTrack',
    tagline: 'Student Management App',
    description: 'EduTrack is a comprehensive student management platform designed for schools and colleges. It streamlines attendance, grades, and communication between students, teachers, and parents.',
    icon: '🎓',
    category: 'Education',
    features: [
      'Real-time attendance tracking',
      'Grade management and analytics',
      'Parent-teacher communication portal',
      'Assignment and homework tracking',
      'Fee management integration',
      'Timetable scheduling',
      'Performance reports and insights',
      'Multi-language support',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '3.2.1' },
      { label: 'Size', value: '42 MB' },
      { label: 'Rating', value: '4.7 ★' },
      { label: 'Downloads', value: '50K+' },
      { label: 'Last Updated', value: 'Dec 2024' },
    ],
    playStoreUrl: 'https://play.google.com',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-primary to-m3-primary-10',
  },
  {
    id: 'shopease',
    name: 'ShopEase',
    tagline: 'E-commerce Mobile App',
    description: 'ShopEase is a feature-rich e-commerce mobile application that empowers businesses to set up online stores quickly. Supports multiple payment gateways and real-time inventory management.',
    icon: '🛒',
    category: 'E-commerce',
    features: [
      'Product catalog management',
      'Multi-payment gateway support',
      'Real-time inventory tracking',
      'Push notifications for offers',
      'Order tracking and management',
      'Customer reviews and ratings',
      'Wishlist and cart features',
      'Analytics dashboard',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '2.8.0' },
      { label: 'Size', value: '38 MB' },
      { label: 'Rating', value: '4.5 ★' },
      { label: 'Downloads', value: '25K+' },
      { label: 'Last Updated', value: 'Nov 2024' },
    ],
    playStoreUrl: 'https://play.google.com',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-secondary to-m3-secondary-10',
  },
  {
    id: 'healthsync',
    name: 'HealthSync',
    tagline: 'Health Monitoring App',
    description: 'HealthSync connects patients with healthcare providers seamlessly. Track vitals, schedule appointments, and access medical records securely from your smartphone.',
    icon: '❤️',
    category: 'Healthcare',
    features: [
      'Vital signs monitoring',
      'Doctor appointment scheduling',
      'Medical records storage',
      'Medication reminders',
      'Telemedicine consultations',
      'Fitness and diet tracking',
      'Emergency contact alerts',
      'Health analytics reports',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '1.9.4' },
      { label: 'Size', value: '55 MB' },
      { label: 'Rating', value: '4.8 ★' },
      { label: 'Downloads', value: '30K+' },
      { label: 'Last Updated', value: 'Dec 2024' },
    ],
    playStoreUrl: 'https://play.google.com',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-primary-10 to-m3-primary',
  },
  {
    id: 'payquick',
    name: 'PayQuick',
    tagline: 'Payment Solution App',
    description: 'PayQuick is a lightning-fast digital payment solution supporting UPI, cards, and wallets. Built with enterprise-grade security and instant transaction processing.',
    icon: '💳',
    category: 'FinTech',
    features: [
      'UPI & QR code payments',
      'Credit and debit card support',
      'Digital wallet integration',
      'Instant money transfers',
      'Transaction history and analytics',
      'Bill payments and recharges',
      'Bank-grade encryption',
      'Merchant payment solutions',
    ],
    specs: [
      { label: 'Platform', value: 'Android & iOS' },
      { label: 'Version', value: '4.1.0' },
      { label: 'Size', value: '28 MB' },
      { label: 'Rating', value: '4.6 ★' },
      { label: 'Downloads', value: '100K+' },
      { label: 'Last Updated', value: 'Dec 2024' },
    ],
    playStoreUrl: 'https://play.google.com',
    appStoreUrl: 'https://apps.apple.com',
    color: 'from-m3-tertiary to-m3-tertiary-10',
  },
]
