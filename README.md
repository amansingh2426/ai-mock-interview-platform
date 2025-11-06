🤖 AI Mock Interview Platform

A powerful, modern, and AI-driven mock interview platform built using Next.js, ShadCN, Convex, Clerk, ImageKit, and n8n + OpenAI automation.
Upload your resume, generate job-specific interview questions, and practice with an intelligent AI interviewer — all in one place.

Perfect for students, job seekers, developers, and professionals preparing for interviews.

🚀 Live Demo
<img width="1905" height="905" alt="image" src="https://github.com/user-attachments/assets/48257982-f289-47b8-bb89-a4a481326941" />


🧰 Tech Stack

⚛️ Next.js (App Router)

🎨 ShadCN UI + Tailwind CSS

🔐 Clerk Authentication

🗄️ Convex Database

☁️ ImageKit.io for Resume Storage

🤖 OpenAI + n8n Automation

🧠 Arkjet AI Interview Engine

🔄 React Context API

🎯 TypeScript

📸 Features

✅ AI-generated interview questions based on your resume

📄 Upload resume with ImageKit cloud storage

🧠 Real-time AI mock interview using Arkjet

🔄 Automatic question generation using n8n + OpenAI

📊 Dashboard to view saved interviews and progress

🔐 Secure authentication using Clerk

🎨 Modern and clean UI with ShadCN components

⚡ Fast, real-time backend powered by Convex

🌐 Fully responsive design

🖼️ Screenshots

Add your images here if needed

[Screenshot Section — swap with actual images]

🛠️ Installation
✅ Prerequisites

Node.js 18+

npm / yarn / pnpm

Convex account

Clerk account

ImageKit account

n8n local or cloud workspace

✅ Steps
# Clone the repo
git clone https://github.com/amansingh2426/ai-mock-interview-platform.git

# Navigate into the project
cd ai-mock-interview-platform

# Install dependencies
npm install

# Start the local development server
npm run dev

🔧 Environment Variables

Create a .env.local file:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment

NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint

N8N_WEBHOOK_URL=your_n8n_webhook_url

📦 Project Structure
app/
 ├── (auth)/                # Clerk sign-in, sign-up
 ├── (routes)/dashboard/    # Dashboard pages
 ├── api/                   # Upload & AI routes
 ├── provider.tsx           # Convex provider
 └── page.tsx               # Homepage with Hero + Header

context/
 └── UserDetailContext.tsx  # Global state management

convex/
 ├── schema.ts
 ├── api.ts
 └── users.ts

🔗 Integrations
🤖 n8n + OpenAI

Automatically generates interview questions based on:

Resume content

Job title

Job description

☁️ ImageKit

Stores resume PDF files securely.

🔐 Clerk

Provides:

Sign-in

Sign-out

User sessions

Authentication middleware

🗄️ Convex

Stores:

User data

Interview questions

Interview history

Resume URLs

📜 License

MIT License © 2025 Aman Singh
