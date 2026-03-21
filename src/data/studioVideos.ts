export interface Video {
  id: string
  youtubeId: string
  title: string
  description: string
  thumbnail: string
}

export interface Playlist {
  id: string
  title: string
  description: string
  category: 'devotional' | 'rhymes' | 'stories'
  thumbnail: string
  videos: Video[]
}

export const playlists: Playlist[] = [
  // Devotional playlists
  {
    id: 'devotional-bhajans',
    title: 'Divine Bhajans Collection',
    description: 'Soulful devotional bhajans for peace and spiritual awakening.',
    category: 'devotional',
    thumbnail: 'https://img.youtube.com/vi/aEBM2KTo2e8/hqdefault.jpg',
    videos: [
      {
        id: 'dev-1',
        youtubeId: 'aEBM2KTo2e8',
        title: 'Om Namah Shivaya',
        description: 'A powerful chant dedicated to Lord Shiva for inner peace.',
        thumbnail: 'https://img.youtube.com/vi/aEBM2KTo2e8/hqdefault.jpg',
      },
      {
        id: 'dev-2',
        youtubeId: '1qsgBF7ZgJE',
        title: 'Hanuman Chalisa',
        description: 'The sacred 40 verses praising Lord Hanuman.',
        thumbnail: 'https://img.youtube.com/vi/1qsgBF7ZgJE/hqdefault.jpg',
      },
      {
        id: 'dev-3',
        youtubeId: 'UyV3-F7oBGg',
        title: 'Gayatri Mantra',
        description: 'The most sacred mantra from the Vedas for wisdom and enlightenment.',
        thumbnail: 'https://img.youtube.com/vi/UyV3-F7oBGg/hqdefault.jpg',
      },
    ],
  },
  {
    id: 'devotional-aartis',
    title: 'Sacred Aartis',
    description: 'Collection of sacred aartis for daily worship and devotion.',
    category: 'devotional',
    thumbnail: 'https://img.youtube.com/vi/PH-bgmCJoJI/hqdefault.jpg',
    videos: [
      {
        id: 'aarti-1',
        youtubeId: 'PH-bgmCJoJI',
        title: 'Om Jai Jagdish Hare',
        description: 'The most popular aarti sung during evening prayers.',
        thumbnail: 'https://img.youtube.com/vi/PH-bgmCJoJI/hqdefault.jpg',
      },
      {
        id: 'aarti-2',
        youtubeId: 'Gar1A-GGcP0',
        title: 'Ganesh Aarti',
        description: 'Devotional aarti dedicated to Lord Ganesha.',
        thumbnail: 'https://img.youtube.com/vi/Gar1A-GGcP0/hqdefault.jpg',
      },
    ],
  },
  // Rhymes playlists
  {
    id: 'rhymes-english',
    title: 'English Nursery Rhymes',
    description: 'Fun and educational English nursery rhymes for children.',
    category: 'rhymes',
    thumbnail: 'https://img.youtube.com/vi/yCjJyiqpAuU/hqdefault.jpg',
    videos: [
      {
        id: 'rhyme-1',
        youtubeId: 'yCjJyiqpAuU',
        title: 'Twinkle Twinkle Little Star',
        description: 'Classic nursery rhyme that children love to sing along.',
        thumbnail: 'https://img.youtube.com/vi/yCjJyiqpAuU/hqdefault.jpg',
      },
      {
        id: 'rhyme-2',
        youtubeId: 'CD6NRBng9HM',
        title: 'Johny Johny Yes Papa',
        description: 'A playful and catchy rhyme perfect for toddlers.',
        thumbnail: 'https://img.youtube.com/vi/CD6NRBng9HM/hqdefault.jpg',
      },
      {
        id: 'rhyme-3',
        youtubeId: 'mXMofxtDPUQ',
        title: 'Wheels on the Bus',
        description: 'A fun action song loved by kids around the world.',
        thumbnail: 'https://img.youtube.com/vi/mXMofxtDPUQ/hqdefault.jpg',
      },
    ],
  },
  {
    id: 'rhymes-telugu',
    title: 'Telugu Rhymes for Kids',
    description: 'Colorful and fun Telugu nursery rhymes for little ones.',
    category: 'rhymes',
    thumbnail: 'https://img.youtube.com/vi/WiDKqGfxjdU/hqdefault.jpg',
    videos: [
      {
        id: 'trhyme-1',
        youtubeId: 'WiDKqGfxjdU',
        title: 'Chinnari Chitti Geethalu',
        description: 'Popular Telugu rhymes collection for children.',
        thumbnail: 'https://img.youtube.com/vi/WiDKqGfxjdU/hqdefault.jpg',
      },
      {
        id: 'trhyme-2',
        youtubeId: 'JrjFAOlCPak',
        title: 'Lakdi Ki Kathi',
        description: 'Classic Telugu rhyme with colorful animation.',
        thumbnail: 'https://img.youtube.com/vi/JrjFAOlCPak/hqdefault.jpg',
      },
    ],
  },
  // Stories playlists
  {
    id: 'stories-moral',
    title: 'Moral Stories for Kids',
    description: 'Engaging animated stories with valuable life lessons.',
    category: 'stories',
    thumbnail: 'https://img.youtube.com/vi/TnbPgfrIk80/hqdefault.jpg',
    videos: [
      {
        id: 'story-1',
        youtubeId: 'TnbPgfrIk80',
        title: 'The Thirsty Crow',
        description: 'A classic story about a clever crow who finds water using pebbles.',
        thumbnail: 'https://img.youtube.com/vi/TnbPgfrIk80/hqdefault.jpg',
      },
      {
        id: 'story-2',
        youtubeId: '5VRyFO9D6ME',
        title: 'The Tortoise and the Hare',
        description: 'The timeless fable teaching that slow and steady wins the race.',
        thumbnail: 'https://img.youtube.com/vi/5VRyFO9D6ME/hqdefault.jpg',
      },
      {
        id: 'story-3',
        youtubeId: 'P4_FKmj-mhA',
        title: 'The Lion and the Mouse',
        description: 'A beautiful story about how kindness is always rewarded.',
        thumbnail: 'https://img.youtube.com/vi/P4_FKmj-mhA/hqdefault.jpg',
      },
    ],
  },
  {
    id: 'stories-panchatantra',
    title: 'Panchatantra Stories',
    description: 'Ancient Indian fables with timeless wisdom and entertainment.',
    category: 'stories',
    thumbnail: 'https://img.youtube.com/vi/T0X7QzDnJMk/hqdefault.jpg',
    videos: [
      {
        id: 'panch-1',
        youtubeId: 'T0X7QzDnJMk',
        title: 'The Monkey and the Crocodile',
        description: 'A clever monkey outsmarts a crocodile in this classic tale.',
        thumbnail: 'https://img.youtube.com/vi/T0X7QzDnJMk/hqdefault.jpg',
      },
      {
        id: 'panch-2',
        youtubeId: 'CQcPzbprMzo',
        title: 'The Blue Jackal',
        description: 'A jackal who disguises himself and learns an important lesson.',
        thumbnail: 'https://img.youtube.com/vi/CQcPzbprMzo/hqdefault.jpg',
      },
    ],
  },
]

export const categories = [
  { id: 'devotional' as const, label: 'Devotional', icon: '🙏', description: 'Sacred chants, bhajans and spiritual content' },
  { id: 'rhymes' as const, label: 'Rhymes', icon: '🎵', description: 'Fun nursery rhymes for children' },
  { id: 'stories' as const, label: 'Stories', icon: '📖', description: 'Engaging animated stories with moral lessons' },
]
