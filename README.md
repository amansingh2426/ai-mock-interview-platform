# AI Voice Agent Interview Platform

An interactive AI-powered web application that simulates job interviews through real-time voice conversations.  
Built with **Next.js**, **React**, **TailwindCSS**, **OpenAI**, and **Deepgram**, this platform delivers a realistic interview experience with AI-generated questions, dynamic follow-ups, and instant feedback.

---

## 🚀 Live Demo
🔗 **[View Project Here](https://ai-voice-agent-interview-platform-jlx6r2oyz.vercel.app/)**

---

## ✨ Features
- 🎙️ **Voice-based interaction** with an AI interviewer
- 🤖 **Dynamic AI-generated questions** using OpenAI
- ⏯️ **Pause/Resume** interview functionality
- 📊 **Track interview progress** through stages
- 🔄 **Real-time feedback** on responses
- 🎯 **Custom follow-up questions** based on answers
- 🛡️ **Rate limiting** to protect API endpoints
- ♿ **Accessibility-focused design** following WCAG guidelines

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
- **AI Services**:
  - OpenAI GPT for question generation
  - Deepgram for Speech-to-Text & Text-to-Speech
- **State Management**: React Context API
- **API Security**: In-memory rate limiting

---

## 📦 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/amansingh2426/ai-voice-agent-interview.git
cd ai-voice-agent-interview
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3️⃣ Set Up Environment Variables
Create a .env.local file in the root:

env
Copy
Edit
OPENAI_API_KEY=your_openai_api_key
DEEPGRAM_API_KEY=your_deepgram_api_key

RATE_LIMIT_POINTS=10
RATE_LIMIT_DURATION=1
RATE_LIMIT_BLOCK_DURATION=60
4️⃣ Run Locally
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit: http://localhost:3000

🔗 Project Links
Live Demo → https://ai-voice-agent-interview-platform-jlx6r2oyz.vercel.app/

GitHub Repo → https://github.com/amansingh2426/ai-voice-agent-interview

📜 License
MIT License © 2025 Aman Singh
