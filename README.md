# 🧠 Vexa — AI-Powered Second Brain & Knowledge Engine

[![React](https://img.shields.io/badge/React-19.0-blue.svg?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg?logo=nodedotjs)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-lightgrey.svg?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen.svg?logo=mongodb)](https://www.mongodb.com/)
[![Pinecone](https://img.shields.io/badge/Pinecone-Vector_DB-blueviolet.svg)](https://www.pinecone.io/)
[![LangChain](https://img.shields.io/badge/LangChain-Integration-orange.svg)](https://www.langchain.com/)
[![Vite](https://img.shields.io/badge/Vite-7.x-purple.svg?logo=vite)](https://vitejs.dev/)
[![Chrome Extension](https://img.shields.io/badge/Chrome_Extension-Manifest_V3-yellow.svg?logo=googlechrome)](https://developer.chrome.com/docs/extensions/)

> **Vexa** is an intelligent, AI-driven personal knowledge management platform your second brain. It automatically captures, embeds, organizes, and connects your web bookmarks, notes, and ideas. Powered by vector embeddings, semantic search, interactive knowledge graphs, and LLM-driven metadata extraction.

---

## ✨ Key Features

- 🌐 **Seamless Web Capture & Scraping**: Automatically fetch web page titles, meta descriptions, logos, and hero images using `metascraper` when saving any link.
- 🧩 **Chrome Extension Integration**: Save articles, videos, and websites directly from any browser tab with one click.
- 🧠 **Vector Embeddings & Semantic Search**: Uses **Mistral AI Embeddings** (`mistral-embed`) and **Pinecone Vector Database** to find items based on concept and context rather than just keyword matches.
- 🤖 **AI-Driven Tagging & Intelligence**: Leverages **Groq** (`llama-3.1-8b-instant`) via **LangChain** for auto-tagging, content summarization, and key concept extraction.
- 🕸️ **Interactive Knowledge Graph**: Visualizes relationships between stored items and topics using **D3.js** network nodes connected by cosine similarity vector metrics.
- 📁 **Custom Collections & Inbox**: Organize items into customized collections or let them route through an unified inbox for triage.
- 🔁 **Smart Resurfacing Engine**: Periodically resurfaces relevant past bookmarks and notes so you never lose track of important knowledge.
- 🔐 **Secure User Authentication**: Built-in authentication featuring JWT tokens, HTTP-only cookies, password hashing with bcryptjs, and protected API routes.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: React 19 + Vite 7
- **Routing**: React Router v7
- **Styling**: TailwindCSS v4, SCSS / Modular SASS
- **Visualization**: D3.js (Force-directed Knowledge Graph)
- **HTTP Client**: Axios

### **Backend**
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js 5
- **Database**: MongoDB (Mongoose ORM)
- **Vector Database**: Pinecone Database (`vexa-embeddings` index)
- **AI & Orchestration**: LangChain (`@langchain/groq`, `@langchain/mistralai`), Groq API, Mistral AI API
- **Web Scraping**: Metascraper & Got HTTP engine
- **Auth & Security**: JSON Web Tokens (JWT), Cookie-Parser, BcryptJS, CORS

### **Browser Extension**
- **Format**: Chrome Extension (Manifest V3)

---

## 📁 Repository Structure

```
Vexa/
├── Backend/                    # Node.js / Express API Server & Extension
│   ├── src/
│   │   ├── config/             # DB & Pinecone initialization
│   │   ├── controllers/        # Auth, Items, Collections & Graph Controllers
│   │   ├── extension/          # Manifest V3 Chrome Extension (popup.html, popup.js)
│   │   ├── Middlewares/        # Auth verification & Error handling
│   │   ├── Models/             # Mongoose Schemas (User, Item, Collection, RelatedItem)
│   │   ├── routes/             # REST API Endpoint definitions
│   │   ├── services/           # AI, Embeddings, Graph & Semantic Search logic
│   │   └── app.js              # Express app entry & middleware stack
│   ├── server.js               # HTTP Server launcher
│   └── package.json
│
├── Frontend/                   # React + Vite Web Dashboard
│   ├── src/
│   │   ├── assets/             # Graphical assets & icons
│   │   ├── Features/           # Modular Feature Folders
│   │   │   ├── Authentication/ # Login & Register pages/services
│   │   │   ├── Collections/    # Collection management & detail views
│   │   │   ├── Dashboard/      # Main dashboard & item feed
│   │   │   ├── Items/          # Detailed item view & controls
│   │   │   ├── KnowledgeGraph/ # D3.js Knowledge graph visualizer
│   │   │   ├── Landing Page/   # Product landing page
│   │   │   ├── Resurfacing/    # Intelligent resurfacing views
│   │   │   └── Search/         # Semantic search interface & results
│   │   ├── Shared/             # Reusable UI components & layouts
│   │   ├── App.jsx             # Main application layout
│   │   ├── Routes.jsx          # React Router route registry
│   │   └── index.scss          # Global styles & design system tokens
│   ├── vite.config.js
│   └── package.json
│
└── README.md                   # Project documentation
```

---

## ⚙️ Environment Setup

### 1. Backend Configuration (`Backend/.env`)

Create a `.env` file inside the `Backend/` directory:

```env
PORT=9000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

# Vector Database (Pinecone)
PINCONE_API=your_pinecone_api_key

# AI & LLM Providers
GROQ_API_KEY=your_groq_api_key
MISTRAL_API_KEY=your_mistral_api_key

# Redis (Optional / Cache)
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

### 2. Frontend Configuration (`Frontend/.env`)

Create a `.env` file inside the `Frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:9000
```

---

## 🔌 API Reference Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | Authenticate user & issue cookie/JWT |
| **POST** | `/api/auth/logout` | Clear user session |
| **GET** | `/api/items` | Fetch all user items |
| **POST** | `/api/items` | Add a new web link/item (auto-extract & embed) |
| **GET** | `/api/items/:id` | Get details of a specific item |
| **DELETE** | `/api/items/:id` | Remove item & vector embeddings |
| **GET** | `/api/collections` | List user collections |
| **POST** | `/api/collections` | Create a new collection |
| **GET** | `/api/knowledgeGraph` | Generate nodes & similarity edges for D3 graph |

---
