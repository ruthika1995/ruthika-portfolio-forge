# S Ruthika — Generative AI & Full-Stack Portfolio 🚀

> **Production Engineering Portfolio** showcasing 3 end-to-end deployed AI platforms powered by **FastAPI (Python 3.12)**, **React 19 + TypeScript**, **OpenRouter Multi-Model Gateways**, and **Decoupled Local Vector Embeddings**.

---

## 🏛️ Featured Production Projects (Deployed on Render & Vercel)

### 1. [DocMind AI](https://github.com/ruthika1995/docmind-ai) — Enterprise Document Intelligence & Grounded RAG Platform
- **Concept:** Enterprise IDP system with an OpenRouter AI Gateway and decoupled 384-dimensional dense semantic embeddings.
- **5 Core Pipelines:**
  1. OpenRouter few-shot document taxonomy classification (Invoice, Contract, Resume, Financial Report).
  2. Schema-validated JSON extraction with Pydantic v2.
  3. Hierarchical executive summarization & key action items.
  4. Contract clause divergence diffing & risk scoring.
  5. Grounded conversational RAG with verifiable chunk citations (`[Chunk X | Page Y]`).
- **Tech Stack:** FastAPI, Python 3.12, PostgreSQL + pgvector, OpenRouter API (Llama 3.3, Gemini Flash), React 19, TypeScript, Vite.
- **Deployment:** Render (FastAPI Web Service) + Vercel (React Frontend).

### 2. [SupportFlow AI](https://github.com/ruthika1995/supportflow-ai) — Autonomous Customer Support & Agentic Operations Platform
- **Concept:** Full-stack agentic platform with a ReAct (Reason + Act) loop, real database tool mutations, and a Human-in-the-Loop (HITL) supervisor safety gate.
- **Key Capabilities:**
  1. ReAct Agent Orchestrator: Dynamic intent classification, database tools (`get_order_status`, `cancel_order`, `request_refund`), and observation loops.
  2. Dual-Persona Interactive Portal: Switch between Customer Experience Mode and Operations Desk.
  3. Human-in-the-Loop (HITL) Gate: Low-risk tasks auto-execute; high-risk actions (refunds >$50, order cancellations) pause for supervisor authorization.
  4. Vector Policy RAG: Ingests corporate policies to enforce company rules.
  5. WebSockets: Real-time event broadcasts to synchronise customer and supervisor states.
- **Tech Stack:** FastAPI, Python 3.12, SQLAlchemy ORM, WebSockets, SQLite / PostgreSQL, React 19, TypeScript, Impeccable UI.
- **Deployment:** Render + Vercel / Docker.

### 3. [AI Career Copilot](https://github.com/ruthika1995/ai-career-copilot) — Production Career Intelligence & ATS Match Platform
- **Concept:** High-performance career intelligence platform replacing generic resume scores with transparent, multi-weight deterministic matching.
- **Key Capabilities:**
  1. 5-Dimensional Match Engine: 40% Tech Stack, 25% Project Alignment, 20% Experience, 10% Education, 5% Soft Skills.
  2. PyMuPDF Native Ingestion: In-memory PDF text extraction without storing unencrypted files.
  3. Interactive ATS Resume Studio: Real-time bullet point rewriter amplifying quantifiable metrics.
  4. Adaptive Mock Interview Simulator: Evaluates behavioral, technical, and system design answers against structured rubrics.
  5. Dynamic Milestone Roadmaps: Step-by-step learning progression.
- **Tech Stack:** React 19, TypeScript, Tailwind CSS, FastAPI, Python, PyMuPDF, JWT Auth, SQLite / PostgreSQL, OpenRouter.
- **Deployment:** Render Web Service + Vercel Frontend.

---

## 🛠️ Portfolio Architecture & Design System

- **Framework:** React 19 + TypeScript powered by Vite
- **Styling:** Vanilla Tailwind CSS with Kinpaku/Obsidian dark design tokens
- **Components:** Radix UI primitives & Lucide React icons
- **Micro-interactions:** Particle engine (`@tsparticles/react`), smooth scroll, Sonner toast alerts, interactive project modal
- **Responsive:** Mobile-first, tablet-optimized, ultra-wide desktop support

---

## 🏃 Local Development

```bash
# Clone the repository
git clone https://github.com/ruthika1995/ruthika-portfolio-forge.git
cd ruthika-portfolio-forge

# Install dependencies
npm install

# Start development server
npm run dev
# Portfolio will be available at http://localhost:5173

# Build for production
npm run build
npm run preview
```

---

## 👩‍💻 Author

- **S Ruthika** — Computer Science Undergrad at BVRIT Hyderabad (2023 - 2027)
- **GitHub:** [@ruthika1995](https://github.com/ruthika1995)
- **LinkedIn:** [Shakkarikonda Ruthika](https://linkedin.com/in/shakkarikonda-ruthika-bb037134b)
- **Email:** ruthika7784@gmail.com
