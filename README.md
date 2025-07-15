# Ai-interviewCoach
# 🎙️ AI Interview Coach

> Simulate real interview experiences using AI. Personalized feedback. Role-based questions. Track your growth.

---

## 🧠 Project Overview

**AI Interview Coach** is a full-stack AI-powered platform that simulates mock interviews tailored to a user's resume and desired job role. It leverages NLP and LLMs to generate questions, assess answers, provide improvement feedback, and track candidate progress over time.

---

## 🎯 Problem

Aspiring candidates often struggle to prepare for real interviews due to:
- Lack of personalized mock questions.
- No clear feedback or improvement tips.
- No system to track growth or confidence over time.

---

## 💡 Solution

Build a web app where:
- Users upload their resume (PDF).
- AI extracts key data and generates tailored interview questions.
- Users answer in text format (or later via voice).
- AI evaluates tone, clarity, technical accuracy, and gives scores + suggestions.
- Users can track their improvement over time.

---

## 🚀 Features

| Feature | Description |
|--------|-------------|
| 📄 Resume Analysis | Upload a resume PDF to extract profile data, skills, and job role |
| 💬 Mock Interviews | AI asks tailored, contextual questions (chat-based) |
| 🧠 Feedback Engine | GPT-based evaluation of answers with scoring + improvement tips |
| 📈 Performance Tracking | Track scores, categories (communication, technical, tone) over time |
| 👔 Role-Based Flow | Interview tracks for SDE, PM, Designer, etc. |
| 🗣️ [Bonus] Voice Mode | Whisper for STT, ElevenLabs for TTS (future) |
| 🧪 Session History | View previous sessions and resume-specific insights |

---

## 🧱 Tech Stack

### Frontend

| Tech | Purpose |
|------|---------|
| **Next.js** | React framework for SSR + routing |
| **Tailwind CSS** | Utility-first CSS for responsive design |
| **Shadcn/ui** | Clean and composable component system |
| **TypeScript** | Type-safe code and props validation |

### Backend

| Tech | Purpose |
|------|---------|
| **Bun.js or Express** | Fast API server |
| **PostgreSQL** | Relational database |
| **Prisma ORM** | DB schema + queries |
| **OpenAI API** | LLM for question generation + feedback |
| **Whisper API** | Speech-to-text (future) |
| **ElevenLabs API** | Text-to-speech (future) |
| **Multer** | Resume file uploads |
| **pdf-parse** | Extract content from PDF |
| **Winston** | Logging library (prod-level) |
| **Zod** | Schema validation |
| **Helmet, CORS** | Security middlewares |
| **dotenv** | Environment variable management |

---

## 🗂️ Folder Structure

```bash
ai-interview-coach/
├── apps/
│   └── web/                  # Next.js frontend app
├── packages/
│   └── api/                  # Bun/Express backend API
│       ├── src/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── routes/
│       │   ├── utils/
│       │   ├── middleware/
│       │   ├── logger/
│       │   ├── config/
│       │   └── index.ts
│       └── prisma/
│           ├── schema.prisma
│           └── migrations/
├── .env
├── package.json
└── README.md
