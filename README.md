AI Mock Interview is a next-generation, AI-powered interview preparation platform built with Next.js, Convex, Clerk, and n8n automation.
It helps users practice real-world interviews with intelligent, adaptive AI questions and personalized feedback — all in a sleek, modern UI powered by ShadCN/UI.

🚀 Features

✅ AI-Generated Questions — Get role-specific interview questions powered by n8n + OpenAI
✅ Resume Upload — Upload and store your resume securely via ImageKit.io
✅ Smart Dashboard — Manage interviews, track performance, and store progress
✅ Authentication — Secure user sessions with Clerk Auth
✅ Realtime Database — Powered by Convex, a fast open-source backend
✅ Modern UI — Built using ShadCN/UI library and Tailwind CSS
✅ AI-Powered Interviews — Conduct real-time AI interviews using Arkjet Integration
✅ Responsive Design — Fully optimized for desktop and mobile

🧩 Tech Stack
Layer	Technology
Frontend	Next.js 15 (App Router), React, Tailwind CSS
UI Library	ShadCN/UI
Authentication	Clerk Auth
Database	Convex (Open Source BaaS)
File Storage	ImageKit.io
Automation	n8n + OpenAI Integration
AI Interview Engine	Arkjet AI
State Management	React Context API
Hosting	Vercel (Frontend) + Convex Cloud
🏗️ Architecture Overview
AI Mock Interview Platform
│
├── app/
│   ├── (auth)/                 # Clerk Auth pages
│   │   ├── sign-in/page.tsx
│   │   └── sign-up/page.tsx
│   ├── (routes)/               # Dashboard-related routes
│   │   ├── dashboard/page.tsx
│   │   ├── layout.tsx          # Dashboard Layout wrapper
│   │   └── _components/
│   │       └── AppHeader.tsx
│   ├── api/                    # API Routes (ImageKit Uploads etc.)
│   │   └── upload/route.ts
│   ├── provider.tsx            # Convex Provider & Context wrapper
│   └── page.tsx                # Home Page (Hero + CTA)
│
├── context/
│   ├── UserDetailContext.tsx   # Global Context for user + interview data
│
├── convex/
│   ├── schema.ts               # Database Schema
│   ├── api.ts                  # API routes for Convex backend
│   └── users.ts                # User session logic
│
├── public/
│   └── logo.svg                # Project logo
│
├── .env.local                  # Env variables (Clerk, Convex, ImageKit)
├── tailwind.config.ts
├── package.json
└── README.md

⚙️ Installation & Setup

Follow these steps to run the project locally 👇

1️⃣ Clone the repository
git clone https://github.com/yourusername/ai-mock-interview-platform.git
cd ai-mock-interview-platform

2️⃣ Install dependencies
npm install
# or
yarn install

3️⃣ Configure environment variables

Create a .env.local file in the project root:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment

NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url

4️⃣ Setup Convex Database
npx convex dev


This command will create a convex/ directory containing schema.ts and api.ts.

5️⃣ Setup Clerk Authentication

Visit Clerk Dashboard

Create an application → Copy the publishable and secret keys

Add redirect URLs for /sign-in and /sign-up

6️⃣ Setup n8n Automation

Create a free account on n8n.io

Create a Webhook node that connects to OpenAI

Use it to generate job-specific interview questions dynamically

Store questions via Convex API endpoint

7️⃣ Run the development server
npm run dev


Then open http://localhost:3000
