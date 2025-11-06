🧠 AI Mock Interview Platform

An intelligent, web-based platform that helps users master job interviews using AI-powered mock sessions, automated question generation, and personalized feedback.
Built with Next.js, ShadCN/UI, Convex, Clerk, OpenAI, and n8n, this platform enables users to practice and improve interview skills efficiently with realistic, adaptive simulations.

🔗 View Project Here
<img width="1905" height="905" alt="image" src="https://github.com/user-attachments/assets/36392c1c-8924-4f26-b979-45495f01fc7e" />


✨ Features

💼 AI-Generated Interview Questions – Role-based questions powered by OpenAI via n8n automation
📄 Resume Upload System – Upload your resume securely with ImageKit integration
🧠 AI-Powered Interview Practice – Conduct interviews using Arkjet’s AI engine
🧾 Real-Time Question Flow – Automatically transitions between rounds and topics
📊 Personalized Feedback – AI evaluates and scores your answers for continuous improvement
🔐 Authentication with Clerk – Secure sign-in and session management
💽 Convex Database – Fast, serverless, and reactive backend to store user and interview data
🎨 Modern UI with ShadCN/UI – Sleek, responsive design for an engaging experience
⚙️ n8n Integration – Automates job description parsing and AI prompt generation
📈 Dashboard Interface – Manage your interviews, history, and uploaded resumes in one place

♿ Accessibility Features

✅ Keyboard Navigation – Full navigation with visible focus states
✅ Screen Reader Support – ARIA roles, descriptive labels, and proper hierarchy
✅ Contrast-Friendly Design – High-contrast mode and readable typography
✅ Responsive Layout – Works perfectly across devices and screen sizes

🛠 Tech Stack
Layer	Technology
Framework	Next.js 15 (App Router)
Frontend	React + TailwindCSS
UI Library	ShadCN/UI
Authentication	Clerk
Database	Convex (Open Source)
File Storage	ImageKit.io
Automation	n8n + OpenAI
AI Engine	Arkjet AI
State Management	React Context API
Hosting	Vercel + Convex Cloud
📦 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/amansingh2426/ai-mock-interview-platform.git
cd ai-mock-interview-platform

2️⃣ Install Dependencies
npm install
# or
yarn install

3️⃣ Set Up Environment Variables

Create a .env.local file in the root directory:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment

NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url

⚙️ Running Locally
npm run dev
# or
yarn dev


Visit: http://localhost:3000

🧩 Project Structure
app/
 ├── (auth)/              # Clerk authentication routes
 │    ├── sign-in/page.tsx
 │    └── sign-up/page.tsx
 ├── (routes)/            # Dashboard and user routes
 │    ├── dashboard/page.tsx
 │    ├── layout.tsx
 │    └── _components/AppHeader.tsx
 ├── api/                 # API routes (e.g. resume upload, AI generation)
 │    └── upload/route.ts
 ├── provider.tsx         # Convex provider for global state
 └── page.tsx             # Landing page with Hero section

context/
 └── UserDetailContext.tsx

convex/
 ├── schema.ts
 ├── api.ts
 └── users.ts

🔗 Integrations
🔹 n8n Automation

Handles OpenAI prompt execution for question generation.
Workflow:

User uploads job description

n8n webhook triggers OpenAI API

AI generates 5–10 questions dynamically

Questions stored in Convex DB

🔹 ImageKit

Used to upload and retrieve resumes securely via /api/upload.

🔹 Arkjet AI

Enables intelligent, real-time interview simulations and evaluation.

🔹 Clerk Authentication

Simplifies secure sign-in, sign-out, and session management.

🔹 Convex Database

Stores users, resumes, interview history, and AI-generated questions.

🧠 Core Flow

User signs in via Clerk

Uploads resume (stored in ImageKit)

n8n workflow triggers OpenAI to generate interview questions

Arkjet AI conducts the mock interview

Convex DB saves user sessions, feedback, and results

Dashboard visualizes user’s progress and interviews

📊 Dashboard Features

View previous interviews

Upload or update resume

Generate new interview sessions

Access AI insights and feedback

🔐 API Security

Implemented rate limiting on OpenAI requests via n8n

Secure API routes with Clerk middleware

Sanitized and validated user inputs

🌈 Future Roadmap

🚀 Voice-based AI interviews (Deepgram integration)
📊 Detailed analytics & performance tracking
💬 Real-time AI feedback with sentiment analysis
🧩 Job-role-specific question templates
🪄 Resume scoring & improvement suggestions

🔗 Project Links

💻 GitHub Repo → https://github.com/amansingh2426/ai-mock-interview-platform

📜 License

MIT License © 2025 Aman Singh
