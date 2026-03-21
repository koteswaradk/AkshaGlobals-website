import { useMemo, useState } from 'react'

interface Video {
  id: string
  title: string
  duration: string
  youtubeId: string
}

interface Playlist {
  id: string
  name: string
  description: string
  icon: string
  videoCount: number
  videos: Video[]
}

const playlists: Playlist[] = [
  {
    id: 'android',
    name: 'Android Development',
    description: 'Master Android app development with Kotlin and Jetpack Compose',
    icon: '🤖',
    videoCount: 4,
    videos: [
      { id: 'a1', title: 'Getting Started with Android Studio', duration: '15:30', youtubeId: 'fis26HvvDII' },
      { id: 'a2', title: 'Kotlin Fundamentals for Android', duration: '22:45', youtubeId: 'F9UC9DY-vIU' },
      { id: 'a3', title: 'Building Layouts with Jetpack Compose', duration: '18:20', youtubeId: 'cDabx3SjuOY' },
      { id: 'a4', title: 'MVVM Architecture Pattern', duration: '25:10', youtubeId: 'ijXjCtCXcN4' },
    ],
  },
  {
    id: 'ios',
    name: 'iOS Development',
    description: 'Build stunning iOS apps with Swift and SwiftUI',
    icon: '🍎',
    videoCount: 4,
    videos: [
      { id: 'i1', title: 'Introduction to Swift Programming', duration: '20:15', youtubeId: 'CwA1VWP0Ldw' },
      { id: 'i2', title: 'SwiftUI Essentials', duration: '19:40', youtubeId: 'F2ojC6TNwws' },
      { id: 'i3', title: 'Navigation and Data Flow', duration: '17:30', youtubeId: 'hQMrVCY7XXk' },
      { id: 'i4', title: 'Core Data and Persistence', duration: '23:55', youtubeId: 'bz0lKIsNWEI' },
    ],
  },
  {
    id: 'genai',
    name: 'Generative AI',
    description: 'Harness the power of AI for creative and business applications',
    icon: '🧠',
    videoCount: 4,
    videos: [
      { id: 'g1', title: 'Introduction to Generative AI', duration: '16:45', youtubeId: 'hfIUstzHs9A' },
      { id: 'g2', title: 'Working with Large Language Models', duration: '21:30', youtubeId: '5sLYAQhwSfk' },
      { id: 'g3', title: 'Building AI Applications with LangChain', duration: '24:20', youtubeId: 'aywZrzNaKjs' },
      { id: 'g4', title: 'RAG: Retrieval Augmented Generation', duration: '28:10', youtubeId: 'T-D1OfcDW1M' },
    ],
  },
  {
    id: 'prompt',
    name: 'Prompt Engineering',
    description: 'Master the art of communicating with AI systems effectively',
    icon: '✨',
    videoCount: 4,
    videos: [
      { id: 'p1', title: 'Prompt Engineering Fundamentals', duration: '14:20', youtubeId: '_ZvnD96BbJI' },
      { id: 'p2', title: 'Advanced Prompting Techniques', duration: '18:50', youtubeId: 'jC4v5AS4RIM' },
      { id: 'p3', title: 'Chain-of-Thought Prompting', duration: '16:35', youtubeId: 'eqOfr4AGLk8' },
      { id: 'p4', title: 'Building Prompt Libraries', duration: '20:45', youtubeId: 'hhiGSgCkFKg' },
    ],
  },
]

export default function VideoPlaylist() {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null)
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null)

  const handlePlaylistClick = (playlist: Playlist) => {
    setSelectedPlaylist(playlist)
    setPlayingVideo(null)
  }

  const handleVideoClick = (video: Video) => {
    setPlayingVideo(video)
  }

  const handleBack = () => {
    if (playingVideo) {
      setPlayingVideo(null)
    } else {
      setSelectedPlaylist(null)
    }
  }

  const currentVideoIndex = useMemo(() => {
    if (!selectedPlaylist || !playingVideo) return 0
    return selectedPlaylist.videos.findIndex(v => v.id === playingVideo.id) + 1
  }, [selectedPlaylist, playingVideo])

  return (
    <section className="py-16 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 bg-[#F97316] text-white px-4 py-1 rounded-full">
            Video Tutorials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F9FAFB] mb-4">
            Learn from Our Video Library
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Browse our curated playlists and watch expert-led tutorials on the latest technologies
          </p>
        </div>

        {/* Breadcrumb navigation */}
        {selectedPlaylist && (
          <div className="mb-6">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-[#F97316] hover:text-[#FB923C] text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {playingVideo ? selectedPlaylist.name : 'All Playlists'}
            </button>
          </div>
        )}

        {/* Playlist Grid View */}
        {!selectedPlaylist && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map(playlist => (
              <button
                key={playlist.id}
                onClick={() => handlePlaylistClick(playlist)}
                className="group bg-[#1F2937] rounded-xl overflow-hidden border border-gray-700/50 hover:border-[#F97316]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F97316]/10 text-left"
              >
                {/* Playlist cover */}
                <div className="relative bg-gradient-to-br from-[#1F2937] to-[#374151] p-8 flex items-center justify-center">
                  <span className="text-6xl">{playlist.icon}</span>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                    {playlist.videoCount} videos
                  </div>
                </div>
                {/* Playlist info */}
                <div className="p-4">
                  <h3 className="font-bold text-[#F9FAFB] mb-1 group-hover:text-[#F97316] transition-colors">
                    {playlist.name}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {playlist.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Video List View (when playlist selected) */}
        {selectedPlaylist && !playingVideo && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">{selectedPlaylist.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-[#F9FAFB]">{selectedPlaylist.name}</h3>
                <p className="text-gray-400 text-sm">{selectedPlaylist.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedPlaylist.videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                  className="group bg-[#1F2937] rounded-xl overflow-hidden border border-gray-700/50 hover:border-[#F97316]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-left"
                >
                  {/* Video thumbnail */}
                  <div className="relative bg-[#374151] aspect-video flex items-center justify-center">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                    {/* Video number */}
                    <div className="absolute top-2 left-2 bg-[#F97316] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  {/* Video info */}
                  <div className="p-3">
                    <h4 className="font-semibold text-[#F9FAFB] text-sm group-hover:text-[#F97316] transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">
                      {selectedPlaylist.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Video Player View */}
        {selectedPlaylist && playingVideo && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
            {/* Player */}
            <div>
              <div className="relative bg-black rounded-xl overflow-hidden aspect-video shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${playingVideo.youtubeId}?autoplay=1&rel=0`}
                  title={playingVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#F9FAFB]">{playingVideo.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-gray-400 text-sm">
                  <span>{selectedPlaylist.icon} {selectedPlaylist.name}</span>
                  <span>•</span>
                  <span>{playingVideo.duration}</span>
                </div>
              </div>
            </div>

            {/* Playlist sidebar */}
            <div className="bg-[#1F2937] rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="p-4 border-b border-gray-700/50">
                <h4 className="font-bold text-[#F9FAFB] text-sm">{selectedPlaylist.name}</h4>
                <p className="text-gray-500 text-xs mt-1">
                  {currentVideoIndex} / {selectedPlaylist.videos.length} videos
                </p>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {selectedPlaylist.videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoClick(video)}
                    className={`w-full flex items-start gap-3 p-3 text-left transition-colors duration-200 ${
                      video.id === playingVideo.id
                        ? 'bg-[#F97316]/10 border-l-2 border-[#F97316]'
                        : 'hover:bg-white/5 border-l-2 border-transparent'
                    }`}
                  >
                    <span className={`text-xs font-bold flex-shrink-0 mt-1 ${
                      video.id === playingVideo.id ? 'text-[#F97316]' : 'text-gray-500'
                    }`}>
                      {video.id === playingVideo.id ? '▶' : index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        video.id === playingVideo.id ? 'text-[#F97316]' : 'text-[#F9FAFB]'
                      }`}>
                        {video.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">{video.duration}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
