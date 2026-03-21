export interface StudioVideo {
  id: string
  youtubeId: string
  title: string
  description: string
  category: 'Devotional' | 'Rhymes' | 'Stories'
  publishedAt: string
}

export const studioVideos: StudioVideo[] = [
  // ── Devotional ───────────────────────────────────────────────
  {
    id: 'om-namah-shivaya-chanting',
    youtubeId: '2ZIpFytCSVc',
    title: 'Om Namah Shivaya – Peaceful Chanting',
    description:
      'Experience inner peace with this soothing Om Namah Shivaya chanting. Perfect for meditation and daily prayers.',
    category: 'Devotional',
    publishedAt: 'March 10, 2024',
  },
  {
    id: 'hanuman-chalisa',
    youtubeId: 'AETFvQonfKA',
    title: 'Hanuman Chalisa – Full Devotional Hymn',
    description:
      'The complete Hanuman Chalisa with clear pronunciation and subtitles. A powerful prayer dedicated to Lord Hanuman.',
    category: 'Devotional',
    publishedAt: 'February 20, 2024',
  },
  {
    id: 'gayatri-mantra-108-times',
    youtubeId: 'O09FTSwGjWM',
    title: 'Gayatri Mantra – 108 Times',
    description:
      'Listen to the sacred Gayatri Mantra chanted 108 times for spiritual awakening and positive energy.',
    category: 'Devotional',
    publishedAt: 'January 15, 2024',
  },
  {
    id: 'vishnu-sahasranamam',
    youtubeId: 'M5FMiDOCFgI',
    title: 'Vishnu Sahasranamam – Divine Names',
    description:
      'A devotional rendition of Vishnu Sahasranamam — the thousand names of Lord Vishnu for blessings and protection.',
    category: 'Devotional',
    publishedAt: 'December 8, 2023',
  },

  // ── Rhymes ───────────────────────────────────────────────────
  {
    id: 'twinkle-twinkle-little-star',
    youtubeId: 'yCjJyiqpAuU',
    title: 'Twinkle Twinkle Little Star',
    description:
      'A colorful animated nursery rhyme for kids. Sing along with Twinkle Twinkle Little Star!',
    category: 'Rhymes',
    publishedAt: 'March 5, 2024',
  },
  {
    id: 'wheels-on-the-bus',
    youtubeId: 'e_04ZrNroTo',
    title: 'Wheels on the Bus – Fun Rhyme',
    description:
      'The classic Wheels on the Bus nursery rhyme with vibrant animations that kids love.',
    category: 'Rhymes',
    publishedAt: 'February 14, 2024',
  },
  {
    id: 'johny-johny-yes-papa',
    youtubeId: 'F4tHL8reNCs',
    title: 'Johny Johny Yes Papa',
    description:
      'A fun and engaging version of Johny Johny Yes Papa with lively characters and catchy music.',
    category: 'Rhymes',
    publishedAt: 'January 22, 2024',
  },
  {
    id: 'baa-baa-black-sheep',
    youtubeId: 'MR5XSOdjKMA',
    title: 'Baa Baa Black Sheep',
    description:
      'Baa Baa Black Sheep nursery rhyme beautifully animated for toddlers and preschoolers.',
    category: 'Rhymes',
    publishedAt: 'December 18, 2023',
  },

  // ── Stories ──────────────────────────────────────────────────
  {
    id: 'thirsty-crow-story',
    youtubeId: 'ULHQ6nh0MpU',
    title: 'The Thirsty Crow – Moral Story',
    description:
      'A timeless moral story about a clever crow who finds a way to quench its thirst. Great lesson for kids!',
    category: 'Stories',
    publishedAt: 'March 1, 2024',
  },
  {
    id: 'lion-and-mouse',
    youtubeId: 'wUCb3lZ1WEo',
    title: 'The Lion and the Mouse',
    description:
      'An animated story of friendship between a mighty lion and a tiny mouse. A beautiful tale of kindness.',
    category: 'Stories',
    publishedAt: 'February 5, 2024',
  },
  {
    id: 'tortoise-and-hare',
    youtubeId: 'BIGnshMfBwA',
    title: 'The Tortoise and the Hare',
    description:
      'The classic fable about slow and steady winning the race. A wonderful story with a powerful moral.',
    category: 'Stories',
    publishedAt: 'January 10, 2024',
  },
  {
    id: 'golden-egg-story',
    youtubeId: 'QFcGWIl5M2Y',
    title: 'The Golden Egg – Animated Story',
    description:
      'A beautifully animated story about a farmer and his goose that laid golden eggs. Learn the value of patience.',
    category: 'Stories',
    publishedAt: 'November 25, 2023',
  },
]
