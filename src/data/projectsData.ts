export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Agentic AI & RAG' | 'Enterprise Operations' | 'Full-Stack SaaS';
  badge: string;
  overview: string;
  status: string;
  deployment: {
    backend: string;
    frontend: string;
    database: string;
    aiGateway: string;
  };
  metrics: { label: string; value: string }[];
  keyCapabilities: { title: string; description: string }[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  architectureDiagram: string;
  keyDesignDecisions: { question: string; answer: string }[];
  interviewTalkingPoints: string[];
  gradient: string;
  glowColor: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'docmind-ai',
    title: 'DocMind AI',
    tagline: 'Enterprise Document Intelligence & Grounded RAG Platform',
    category: 'Agentic AI & RAG',
    badge: 'Production Deployed • Render + Vercel',
    overview:
      'Modern Intelligent Document Processing (IDP) platform built with an OpenRouter AI Gateway, decoupled 384-dimensional dense semantic embeddings, and a hybrid PostgreSQL + pgvector retrieval engine. Delivers 5 automated document pipelines including taxonomy classification, structured JSON extraction, hierarchical synthesis, clause divergence diffing, and grounded conversational Q&A with verifiable page and chunk citations.',
    status: 'Live on Render & Vercel',
    deployment: {
      backend: 'FastAPI Python 3.12 (Render Web Service)',
      frontend: 'React 19 + TypeScript (Vercel Edge CDN)',
      database: 'PostgreSQL + pgvector (Supabase / SQLite dev)',
      aiGateway: 'OpenRouter (Meta Llama 3.3 70B / Gemini 2.0 Flash / DeepSeek)',
    },
    metrics: [
      { label: 'Embedding Engine', value: '384-Dim Local' },
      { label: 'AI Gateway Models', value: '100+ via OpenRouter' },
      { label: 'Token Ingestion Cost', value: '$0 on Indexing' },
      { label: 'Citation Fidelity', value: 'Exact Chunk & Page' },
    ],
    keyCapabilities: [
      {
        title: 'Taxonomy Classification',
        description:
          'OpenRouter few-shot prompt categorizes multi-page PDFs into Invoices, Contracts, Resumes, or Reports with a confidence score and reasoning log.',
      },
      {
        title: 'Schema-Validated JSON Extraction',
        description:
          'Transforms raw, unstructured documents into strict, typed JSON objects (totals, line items, liabilities, parties, key dates) with Pydantic v2 validation.',
      },
      {
        title: 'Hierarchical Summarization',
        description:
          'Multi-pass synthesis producing high-level executive summaries, actionable bullet points, and instant TL;DR digests for rapid stakeholder triage.',
      },
      {
        title: 'Clause Divergence & Contract Diff',
        description:
          'Aligns two contract versions side-by-side, auditing modified, added, and removed legal clauses with risk scoring and negotiation guidance.',
      },
      {
        title: 'Grounded RAG Assistant with Citations',
        description:
          'Semantic vector search finds dense chunks and generates factual answers accompanied by clickable [Chunk X | Page Y] verification tags.',
      },
    ],
    techStack: [
      'FastAPI',
      'Python 3.12',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'OpenRouter API',
      'Llama 3.3',
      'Gemini Flash',
      'Pydantic v2',
      'SQLAlchemy 2.0',
      'Vite',
      'Render',
      'Vercel',
    ],
    githubUrl: 'https://github.com/ruthika1995/docmind-ai',
    liveDemoUrl: 'https://docmind-ai.vercel.app',
    architectureDiagram: `[ Client Browser / React 19 ]
       │
       ▼ (HTTPS / SSE Streaming)
[ FastAPI Async Backend on Render ]
  ├── Document Parser & 384-Dim Dense Local Embedder
  ├── Decoupled Embedding Engine (Zero Token Ingestion Cost)
  ├── OpenRouter Multi-Model Gateway (Llama 3.3 / Gemini / DeepSeek)
  └── pgvector / PostgreSQL Hybrid Semantic & Relational Store`,
    keyDesignDecisions: [
      {
        question: 'Why decouple LLM inference from vector embeddings?',
        answer:
          'Indexing 1,000s of PDF pages through commercial LLM APIs drains token quotas and causes API rate-limiting. By calculating 384-dimensional dense vectors locally, vector ingestion is completely free, instant, and fault-tolerant.',
      },
      {
        question: 'Why use an OpenRouter Gateway rather than direct client SDKs?',
        answer:
          'Client-side API keys are an immense enterprise security liability. OpenRouter through a centralized FastAPI service enables model agnosticism (swap models in 1 env variable), zero frontend credential leakage, and built-in offline heuristic simulation.',
      },
      {
        question: 'Why PostgreSQL + pgvector instead of standalone vector DBs?',
        answer:
          'Standalone vector databases (like Pinecone) introduce operational fragmentation and double licensing costs. pgvector allows executing joined transactional metadata queries and cosine distance vector retrieval in a single ACID-compliant database.',
      },
    ],
    interviewTalkingPoints: [
      'Engineered an enterprise Document Intelligence Platform handling multi-format PDFs, contracts, and resumes with strict schema validation.',
      'Designed an OpenRouter Gateway architecture allowing instant benchmarking and zero-downtime model switching between Llama 3.3 70B, Gemini Flash, and DeepSeek.',
      'Implemented verified chunk-level citations in RAG streams to eliminate hallucinations in mission-critical legal and financial auditing.',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    glowColor: 'cyan',
  },
  {
    id: 'supportflow-ai',
    title: 'SupportFlow AI',
    tagline: 'Autonomous Customer Support & Agentic Operations Platform',
    category: 'Enterprise Operations',
    badge: 'Production Deployed • WebSockets + Agentic ReAct',
    overview:
      'End-to-end full-stack agentic platform designed to bridge autonomous AI support with human operations. Utilizes an autonomous ReAct loop where the AI reasons, retrieves company policy via RAG, invokes backend tools to mutate database records (status check, order cancellations, refunds), and pauses to route high-risk actions to human supervisors in a real-time operations desk.',
    status: 'Live on Render & Vercel',
    deployment: {
      backend: 'FastAPI Python 3.12 (Render Web Service / Docker)',
      frontend: 'React 19 + TypeScript + Impeccable CSS (Vercel)',
      database: 'SQLite / PostgreSQL via SQLAlchemy ORM',
      aiGateway: 'OpenRouter ReAct Agent Engine with Fallback',
    },
    metrics: [
      { label: 'AI Resolution Rate', value: '~78% Auto-Handled' },
      { label: 'Human Escalation', value: '~12% Complex Cases' },
      { label: 'Real-Time Streaming', value: 'WebSockets Bidirectional' },
      { label: 'Safety Protocol', value: 'Human-in-the-Loop (HITL)' },
    ],
    keyCapabilities: [
      {
        title: 'ReAct Agentic Orchestrator',
        description:
          'The LLM iteratively thinks, chooses actions, executes parameterized database tools (e.g. get_order_status, cancel_order, request_refund), and evaluates tool observations before answering.',
      },
      {
        title: 'Dual-Persona Interactive Portal',
        description:
          'Seamless toggle between Customer Experience (live chat with real persona presets, order tracking sidebar) and Operations Desk (ticket queue, supervisor desk, inventory manager).',
      },
      {
        title: 'Human-in-the-Loop (HITL) Safety Gate',
        description:
          'Low-risk actions auto-execute immediately; high-risk operations (refunds >$50 or critical cancellations) generate an approval ticket for human supervisor authorization.',
      },
      {
        title: 'Vector Policy RAG Engine',
        description:
          'Retrieves corporate return, warranty, and shipping guidelines from vector-indexed policies, ensuring answers strictly align with company rules.',
      },
      {
        title: 'Bidirectional WebSocket Streaming',
        description:
          'Live event broadcasts update the customer chat and operations supervisor desk simultaneously as tickets are generated, approved, or escalated.',
      },
    ],
    techStack: [
      'FastAPI',
      'Python 3.12',
      'React 19',
      'TypeScript',
      'WebSockets',
      'SQLAlchemy 2.0',
      'SQLite',
      'PostgreSQL',
      'OpenRouter API',
      'Docker',
      'Render',
      'Vercel',
      'Impeccable UI',
    ],
    githubUrl: 'https://github.com/ruthika1995/supportflow-ai',
    liveDemoUrl: 'https://supportflow-ai.onrender.com',
    architectureDiagram: `[ Customer Message ]
         │
         ▼
[ Agentic ReAct Orchestrator ] ───► [ LLM Intent & Reasoning ]
         │
    ┌────┴──────────────────────────┐
    ▼                               ▼
 [ Backend Tools ]           [ RAG Vector Knowledge ]
 - get_order_status           - return_policy.md
 - cancel_order               - shipping_policy.md
 - request_refund             - warranty_policy.md
    │
    ▼
 [ Safety & Guardrail Engine ]
    ├── Low-risk ──► Auto-execute & respond to customer
    └── High-risk ──► Pause & route to [ Human Approval Queue ]`,
    keyDesignDecisions: [
      {
        question: 'Why an Agentic ReAct loop instead of a basic chatbot?',
        answer:
          'Basic chatbots frequently hallucinate and lack system agency. SupportFlow employs a ReAct (Reason + Act) loop that dynamically decides whether to query relational tables, trigger actions, or consult policy documents before generating a response.',
      },
      {
        question: 'How are high-risk financial actions protected against rogue AI hallucination?',
        answer:
          'Implemented a deterministic Human-in-the-Loop (HITL) safety threshold. Automated database updates are permitted for read-only actions and refunds under $50. Anything exceeding the risk limit creates a locked approval ticket requiring supervisor review.',
      },
      {
        question: 'Why combine Relational Tools with Vector RAG?',
        answer:
          'Structured operational records (orders, tracking numbers, inventory) belong in relational tables accessed via verified tools. Unstructured corporate policies belong in vector embeddings. The agent bridges both seamlessly.',
      },
    ],
    interviewTalkingPoints: [
      'Architected a production ReAct agentic workflow with real database mutations and safety guardrails.',
      'Designed a dual-portal interface allowing interviewers to view both customer-facing streaming interactions and the back-office supervisor approval desk.',
      'Leveraged WebSockets for zero-latency synchronization between customer requests and supervisor action authorizations.',
    ],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    glowColor: 'emerald',
  },
  {
    id: 'ai-career-copilot',
    title: 'AI Career Copilot',
    tagline: 'Production Career Intelligence & ATS Match Assessment Platform',
    category: 'Full-Stack SaaS',
    badge: 'Production Deployed • Render + Vercel',
    overview:
      'High-performance career platform that bridges candidate qualifications with target job descriptions using transparent deterministic match ranking algorithms and modern generative AI. Replaces generic resume scores with a 5-dimensional multi-weight evaluation engine, interactive ATS bullet rewriter with metric amplification, adaptive mock interview simulator, and context-aware career advisor.',
    status: 'Live on Render & Vercel',
    deployment: {
      backend: 'FastAPI Python (Render Web Service)',
      frontend: 'React 19 + TypeScript (Vercel Edge)',
      database: 'SQLite / PostgreSQL via SQLAlchemy 2.0',
      aiGateway: 'OpenRouter API (Gemini Flash / Liquid LFM)',
    },
    metrics: [
      { label: 'Evaluation Dimensions', value: '5-Factor Weighted' },
      { label: 'PDF Parsing', value: 'PyMuPDF Native' },
      { label: 'Auth & Security', value: 'JWT + Bcrypt' },
      { label: 'ATS Enhancement', value: 'Real-Time Rewrite' },
    ],
    keyCapabilities: [
      {
        title: '5-Dimensional Weighted Match Engine',
        description:
          'Calculates granular fit percentages across 5 weighted dimensions: 40% Tech Stack, 25% Project Alignment, 20% Seniority/Experience, 10% Education, and 5% Soft Skills with exact evidence quotes.',
      },
      {
        title: 'Interactive AI Resume Studio',
        description:
          'PyMuPDF-powered PDF text ingestion with real-time bullet point rewriting that amplifies quantifiable metrics, action verbs, and ATS keyword relevance.',
      },
      {
        title: 'Adaptive Mock Interview Simulator',
        description:
          'Configurable behavioral, technical, and system design interviews evaluated with structured rubrics, constructive critiques, and actionable scoring.',
      },
      {
        title: 'Context-Aware AI Career Mentor',
        description:
          'Conversational career mentor preserving chat history and profile state to deliver personalized roadmap advice and skill development strategies.',
      },
      {
        title: 'Dynamic Milestone Roadmaps',
        description:
          'Generates sequential, milestone-based learning paths tailored to candidate skill gaps identified during job description assessments.',
      },
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'FastAPI',
      'Python',
      'PyMuPDF',
      'JWT Auth',
      'Bcrypt',
      'Tailwind CSS',
      'SQLAlchemy 2.0',
      'SQLite',
      'OpenRouter API',
      'Render',
      'Vercel',
    ],
    githubUrl: 'https://github.com/ruthika1995/ai-career-copilot',
    liveDemoUrl: 'https://ai-career-copilot-backend.onrender.com',
    architectureDiagram: `[ React 19 + TypeScript Client ]
       │
       ▼ (REST / JSON with JWT Auth)
[ FastAPI Async Backend on Render ]
  ├── PyMuPDF Text & Metadata Extraction
  ├── 5-Dimensional Deterministic Weighted Match Engine
  ├── OpenRouter Generative AI Gateway
  └── SQLite / PostgreSQL SQLAlchemy Data Store`,
    keyDesignDecisions: [
      {
        question: 'Why a 5-dimensional weighted algorithm instead of a single LLM score?',
        answer:
          'Single LLM "scores" are subjective, non-deterministic, and hallucination-prone. DocMind and Career Copilot split evaluation into 5 mathematically weighted factors with explicit evidence extraction, ensuring reliable, explainable scoring.',
      },
      {
        question: 'How is candidate resume data securely processed?',
        answer:
          'PDF ingestion is handled in-memory using PyMuPDF (fitz) on the FastAPI backend without leaving sensitive unencrypted candidate files on public storage.',
      },
      {
        question: 'How does the Mock Interview Simulator evaluate answers?',
        answer:
          'Utilizes structured JSON output schemas that evaluate candidate answers against specific technical rubrics: core correctness, edge case handling, and communication clarity.',
      },
    ],
    interviewTalkingPoints: [
      'Developed a production full-stack SaaS application with JWT token authentication and encrypted credential management.',
      'Created a deterministic multi-factor ATS candidate scoring algorithm evaluated against real tech industry job descriptions.',
      'Integrated native PDF document parsing with PyMuPDF to streamline candidate onboarding in under 3 seconds.',
    ],
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    glowColor: 'purple',
  },
];
