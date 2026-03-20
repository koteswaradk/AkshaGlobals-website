export interface CurriculumItem {
  topic: string
}

export interface CourseLevel {
  name: 'Basic' | 'Advanced' | 'Expert'
  duration: string
  price: number
  curriculum: string[]
}

export interface Course {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  color: string
  students: string
  rating: number
  instructor: string
  featured?: boolean
  levels: CourseLevel[]
}

export const courses: Course[] = [
  {
    id: 'android-dev',
    name: 'Android Development',
    tagline: 'Master Android app development with Kotlin and Jetpack Compose',
    description: 'Master Android app development from fundamentals to advanced concepts. Learn to build production-ready apps using Kotlin, Jetpack Compose, and modern Android architecture patterns.',
    icon: '🤖',
    color: 'from-green-500 to-emerald-700',
    students: '15,000+',
    rating: 4.8,
    instructor: 'Rahul Sharma',
    levels: [
      {
        name: 'Basic',
        duration: '4 Weeks',
        price: 4999,
        curriculum: [
          'Introduction to Android & Kotlin',
          'Android Studio setup and basics',
          'Layouts and UI components',
          'Activities and Intents',
          'ListView and RecyclerView',
          'SharedPreferences and SQLite',
          'Networking with Retrofit',
          'Build and publish your first app',
        ],
      },
      {
        name: 'Advanced',
        duration: '6 Weeks',
        price: 8999,
        curriculum: [
          'Jetpack Compose fundamentals',
          'MVVM Architecture pattern',
          'Room Database & LiveData',
          'Coroutines and Flow',
          'Dependency Injection with Hilt',
          'Firebase integration',
          'Push notifications',
          'Performance optimization',
        ],
      },
      {
        name: 'Expert',
        duration: '8 Weeks',
        price: 14999,
        curriculum: [
          'Advanced Compose animations',
          'Custom views and canvas drawing',
          'Multi-module architecture',
          'CI/CD for Android',
          'Testing: Unit, Integration, UI',
          'Play Store deployment strategies',
          'App security best practices',
          'Capstone project with mentorship',
        ],
      },
    ],
  },
  {
    id: 'ios-dev',
    name: 'iOS Development',
    tagline: 'Build stunning iOS apps with Swift and SwiftUI',
    description: 'Learn iOS app development with Swift and SwiftUI. From App Store guidelines to advanced animations, this course takes you from beginner to job-ready iOS developer.',
    icon: '🍎',
    color: 'from-gray-600 to-gray-900',
    students: '12,500+',
    rating: 4.9,
    instructor: 'Priya Kapoor',
    levels: [
      {
        name: 'Basic',
        duration: '4 Weeks',
        price: 4999,
        curriculum: [
          'Swift fundamentals',
          'Xcode IDE mastery',
          'UIKit basics and Auto Layout',
          'Navigation and Tab Bar Controllers',
          'Table Views and Collection Views',
          'Data persistence with UserDefaults',
          'Networking with URLSession',
          'Submit to TestFlight',
        ],
      },
      {
        name: 'Advanced',
        duration: '6 Weeks',
        price: 8999,
        curriculum: [
          'SwiftUI fundamentals',
          'Combine framework',
          'Core Data and CloudKit',
          'MVVM pattern in iOS',
          'Authentication with Sign in with Apple',
          'ARKit and RealityKit basics',
          'In-app purchases',
          'App Store Connect and deployment',
        ],
      },
      {
        name: 'Expert',
        duration: '8 Weeks',
        price: 14999,
        curriculum: [
          'Advanced SwiftUI animations',
          'Accessibility and localization',
          'Widget and App Extension development',
          'Core ML on-device intelligence',
          'Metal graphics programming',
          'Advanced testing strategies',
          'Enterprise app distribution',
          'Capstone project with mentorship',
        ],
      },
    ],
  },
  {
    id: 'genai-ml',
    name: 'Generative AI',
    tagline: 'Harness the power of AI for creative and business applications',
    description: 'Dive deep into Generative AI and its applications. Build LLM-powered applications, work with image generation models, and deploy scalable AI solutions using industry-leading tools and frameworks.',
    icon: '🧠',
    color: 'from-purple-500 to-violet-700',
    students: '20,000+',
    rating: 4.9,
    instructor: 'Dr. Arjun Patel',
    featured: true,
    levels: [
      {
        name: 'Basic',
        duration: '4 Weeks',
        price: 5999,
        curriculum: [
          'Python for Data Science',
          'Introduction to Machine Learning',
          'NumPy, Pandas, Matplotlib',
          'Supervised and Unsupervised Learning',
          'Introduction to Neural Networks',
          'What is Generative AI?',
          'Working with OpenAI API',
          'Building your first AI chatbot',
        ],
      },
      {
        name: 'Advanced',
        duration: '6 Weeks',
        price: 10999,
        curriculum: [
          'Deep Learning with TensorFlow/PyTorch',
          'Large Language Models (LLMs)',
          'LangChain framework',
          'RAG (Retrieval Augmented Generation)',
          'Fine-tuning open-source models',
          'Vector databases (Pinecone, ChromaDB)',
          'Image generation with Stable Diffusion',
          'AI application deployment',
        ],
      },
      {
        name: 'Expert',
        duration: '8 Weeks',
        price: 17999,
        curriculum: [
          'Advanced RAG architectures',
          'Multi-agent systems with AutoGen',
          'Model evaluation and benchmarking',
          'Responsible AI and ethics',
          'MLOps and model monitoring',
          'Custom model training at scale',
          'Enterprise AI solution design',
          'Capstone: End-to-end AI product',
        ],
      },
    ],
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    tagline: 'Master the art of communicating with AI systems effectively',
    description: 'Become a Prompt Engineering expert. Learn advanced techniques to craft effective prompts for ChatGPT, Claude, Gemini, and other LLMs to build powerful AI-driven workflows and applications.',
    icon: '✨',
    color: 'from-yellow-500 to-amber-600',
    students: '18,000+',
    rating: 4.7,
    instructor: 'Sneha Reddy',
    levels: [
      {
        name: 'Basic',
        duration: '2 Weeks',
        price: 2999,
        curriculum: [
          'Introduction to LLMs and how they work',
          'Zero-shot and few-shot prompting',
          'Chain-of-thought prompting',
          'Role and persona prompting',
          'Prompt structure best practices',
          'Common pitfalls and how to fix them',
          'Prompt testing and iteration',
          'Practical use cases and exercises',
        ],
      },
      {
        name: 'Advanced',
        duration: '3 Weeks',
        price: 5499,
        curriculum: [
          'Advanced reasoning techniques',
          'Tree-of-thought prompting',
          'Constitutional AI principles',
          'System prompts for applications',
          'Prompt chaining and orchestration',
          'Evaluation frameworks for prompts',
          'Multi-modal prompting (text + image)',
          'Building prompt libraries and templates',
        ],
      },
      {
        name: 'Expert',
        duration: '4 Weeks',
        price: 8999,
        curriculum: [
          'LLM fine-tuning via prompts (RLHF)',
          'Automated prompt optimization',
          'Red teaming and adversarial prompting',
          'Enterprise prompt governance',
          'Prompt engineering for agents',
          'Industry-specific prompt strategies',
          'Building prompt marketplaces',
          'Capstone: Prompt Engineering portfolio',
        ],
      },
    ],
  },
]
