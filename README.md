# AI Voice Agent Interview Platform

An advanced AI-powered web application that simulates real job interviews with interactive, dynamic, and personalized question flows.
Built using Next.js, ShadCN/UI, Convex, Clerk, ImageKit, n8n, and Arkjet AI, this platform helps users practice interviews, analyze performance, and improve confidence — all within an elegant dashboard.

---

## 🚀 VIEW PROJECT
🔗 <img width="1902" height="907" alt="image" src="https://github.com/user-attachments/assets/0eb0f378-37d4-4249-8420-f5262ddeefac" />


---

## ✨ Features
- 🧠 **AI-generated interview** questions tailored to your resume
- 🎙️ **Interactive AI** interview sessions powered by Arkjet
- 📄 **Resume upload** using ImageKit cloud storage
- 🤖 **Automated workflows** with n8n (OpenAI integration)
- 🔐 **Secure authentication** via Clerk
- 💽 **Convex database** for instant data updates
- 🎨 **Modern UI** built with ShadCN + TailwindCSS
- ⚡ **Seamless routing** & dashboard management using Next.js App Router

---

## ♿ Accessibility Features
- **Keyboard Navigation** – full keyboard support & visible focus indicators  
- **Screen Reader Support** – semantic HTML, ARIA landmarks, descriptive labels  
- **Audio Interface** – play/pause controls, synced visual indicators  
- **Visual Accessibility** – high contrast mode, clear status indicators  

---

## 🛠 Tech Stack
- **Framework**: Next.js 14
- **Frontend**: React, TailwindCSS
- **Authentication**: Clerk
- **Database**: Convex (Open Source)
- **Storage**: ImageKit.io (Resume Uploads)
- **Automation**: n8n + OpenAI Integration
- **AI Engine**: Arkjet (Interview Generation)
- **State Management**: React Context API

---

📦 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/amansingh2426/ai-mock-interview-platform.git
cd ai-mock-interview-app

2️⃣ Install Dependencies
npm install
# or
yarn install

3️⃣ Set Up Environment Variables

Create a .env.local file in the root directory and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url

NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

OPENAI_API_KEY=your_openai_api_key
ARKJET_API_KEY=your_arkjet_api_key
N8N_WEBHOOK_URL=your_n8n_workflow_webhook

4️⃣ Run Locally
npm run dev
# or
yarn dev


Visit 👉 http://localhost:3000

🔗 Project Links

💻 GitHub Repo → https://github.com/amansingh2426/ai-mock-interview-platform

📜 License

MIT License © 2025 Aman Singhingh
