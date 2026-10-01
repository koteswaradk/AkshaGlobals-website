interface Capability {
  id: string
  title: string
  tagline: string
  description: string
  icon: string
  technologies: string[]
  features: string[]
  color: string
}

export const capabilities: Capability[] = [
  {
    id: 'kmp-compose',
    title: 'Cross-Platform Mobile Engineering',
    tagline: 'KMP + COMPOSE MULTIPLATFORM',
    description: 'Build Android and iOS products with Kotlin Multiplatform and Compose Multiplatform while keeping platform-specific capabilities where they matter.',
    icon: '💻',
    technologies: ['Kotlin', 'KMP', 'Compose Multiplatform', 'Android', 'iOS', 'Swift'],
    features: ['Shared Architecture', 'Native Performance', 'Code Reusability', 'Cross-Platform UI'],
    color: 'from-purple-600 to-blue-600',
  },
  {
    id: 'ai-mobile',
    title: 'AI-Powered Mobile Experiences',
    tagline: 'AI-NATIVE APPS',
    description: 'Transform traditional mobile applications into intelligent experiences with on-device AI, LLMs, multimodal AI, personalization, and AI-assisted workflows.',
    icon: '🤖',
    technologies: ['LLM APIs', 'Multimodal AI', 'Prompt Engineering', 'AI Features', 'On-Device AI'],
    features: ['Conversational UI', 'Smart Recommendations', 'Content Generation', 'Real-time Analysis'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Systems',
    tagline: 'AGENTIC AI',
    description: 'Build AI agents that can reason, use tools, access data, execute workflows, and make intelligent decisions with controlled oversight and multi-agent coordination.',
    icon: '🧠',
    technologies: ['AI Agents', 'Tool Calling', 'MCP', 'A2A', 'Multi-Agent', 'Memory', 'Evaluation'],
    features: ['Autonomous Reasoning', 'Tool Integration', 'Workflow Orchestration', 'Decision Making'],
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'rag',
    title: 'Enterprise Knowledge AI',
    tagline: 'RAG',
    description: 'Connect AI to your organization\'s documents, knowledge bases, APIs and internal information using powerful RAG pipelines for accurate, grounded responses.',
    icon: '📚',
    technologies: ['Embeddings', 'Vector DB', 'Hybrid Search', 'Chunking', 'Metadata', 'Ranking'],
    features: ['Document Integration', 'Semantic Search', 'Knowledge Base Access', 'Grounded Responses'],
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 'workflow',
    title: 'Intelligent Workflow Automation',
    tagline: 'WORKFLOW AUTOMATION',
    description: 'Automate work and orchestrate intelligence. Design automated workflows that combine events, APIs, AI agents, and human approval gates with intelligent decisions.',
    icon: '⚡',
    technologies: ['Event-Driven', 'Workflow Engine', 'AI Automation', 'API Integration', 'Notifications'],
    features: ['Trigger-based Actions', 'AI Decision Making', 'Human Approval', 'Audit & Logging'],
    color: 'from-amber-600 to-orange-600',
  },
  {
    id: 'architecture',
    title: 'Product & System Architecture',
    tagline: 'SYSTEM DESIGN',
    description: 'Design secure, observable, testable and scalable products from mobile clients to backend services, databases and cloud deployment.',
    icon: '🏗️',
    technologies: ['Microservices', 'API Gateway', 'Event Driven', 'Cloud Infrastructure', 'Security', 'CI/CD'],
    features: ['Scalable Design', 'Security Implementation', 'Observability', 'Clean Architecture'],
    color: 'from-rose-600 to-pink-600',
  },
]
