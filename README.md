🚀 AI Mock Interview Platform 🤖

Transform the way you prepare for interviews with AI!
A powerful, next-gen mock interview system built using cutting-edge AI, designed to help you practice, improve, and excel.
Built with Next.js, n8n, Convex, and Clerk, it delivers personalized interview experiences, real-time feedback, and AI-generated insights — all inside a sleek dashboard.



🌐 Live Demo
<img width="1905" height="905" alt="image" src="https://github.com/user-attachments/assets/6c37617a-e180-4207-aa31-2d1abb52c407" />




🧰 Tech Stack

⚛️ Next.js 15 (App Router)
🎨 ShadCN/UI + Tailwind CSS
🔐 Clerk Authentication
💾 Convex Database
☁️ ImageKit.io (Resume Upload Storage)
🤖 OpenAI via n8n Automation
🗂️ Arkjet AI (Mock Interview Engine)
⚡ React Context API


💡 Key Features
✅ Upload Resume — securely store your resume (PDF)
🤖 AI-Generated Questions — personalized per job role
🧠 Realistic AI Interviewer — powered by Arkjet + n8n
🔄 Live Question Flow — smooth and interactive
📊 Smart Feedback & Scoring — real-time AI evaluation
🔐 User Authentication — seamless login/signup with Clerk
🎨 Elegant UI — minimal, responsive design using ShadCN/UI
⚙️ Automated Workflows — fully integrated n8n automation
💽 Real-Time Storage — using Convex backend


🛠️ Installation Guide
✅ Prerequisites

Node.js v18+

npm / yarn

Convex CLI (optional, for local DB)

⚙️ Setup Steps
# Clone the repository
git clone https://github.com/amansingh2426/ai-mock-interview-platform.git

# Navigate to the project directory
cd ai-mock-interview-platform

# Install dependencies
npm install

# Run the local development server
npm run dev

🔧 Environment Variables

Create a .env.local file in your root directory and add:

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url

# n8n Webhook
N8N_WEBHOOK_URL=your_n8n_webhook_url

📂 Project Structure
app/
 ├── (auth)/sign-in
 ├── (auth)/sign-up
 ├── (routes)/dashboard
 ├── api/upload
 ├── provider.tsx
 └── page.tsx

context/
 └── UserDetailContext.tsx

convex/
 ├── schema.ts
 ├── api.ts
 └── users.ts

🌟 Highlights

🚀 Fast Resume Upload & Parsing

🤖 AI-Based Question Generation

🧩 Fully Automated with n8n

🧠 Real-Time Interview Simulation

📊 AI-Driven Feedback & Scoring

🔐 Secure Authentication via Clerk

🎨 Sleek UI with ShadCN + Tailwind

🔮 Future Enhancements

🎙️ Voice-Based Interview Mode

📈 Analytics Dashboard & Performance Graphs

🧠 AI-Based Resume Scoring System

💬 Sentiment Analysis for Answers

🧾 License

MIT License © 2025 Aman Singh
