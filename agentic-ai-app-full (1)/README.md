
# Agentic AI Mastery App

This repository contains the full-stack Agentic AI Mastery application, guiding users through structured learning modules, interactive code exercises, and AI-driven suggestions.

## Repository Structure

```
agentic-ai-app/
├── backend/
│   ├── app/
│   │   ├── config.py
│   │   ├── utils.py
│   │   ├── routers/
│   │   │   ├── auth.py
│   │   │   ├── cursor.py
│   │   │   ├── dependencies.py
│   │   │   └── protected.py
│   │   └── main.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ModuleNav.jsx
│   │   │   ├── ContentRenderer.jsx
│   │   │   ├── CodeEditor.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   └── AuthCallback.jsx
│   │   ├── App.jsx
│   │   └── AppContent.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .gitignore
├── README.md
└── .gitignore
```

## Prerequisites

- **Python 3.9+** with `pip`
- **Node.js 16+** and `npm`
- **Git**

---

## 1. Backend Setup

```bash
# Navigate to the backend folder
cd agentic-ai-app/backend

# (Optional) Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Copy and edit environment variables
cp .env.example .env
# Open .env and set:
# SECRET_KEY=your_secret_key
# GITHUB_CLIENT_ID=your_github_client_id
# GITHUB_CLIENT_SECRET=your_github_client_secret
# CURSOR_API_KEY=your_cursor_api_key
# CURSOR_API_URL=https://api.cursor.ai/suggestions

# Run the FastAPI server
uvicorn app.main:app --reload
```

- The backend API will now be available at **http://localhost:8000**.
- Health check: **http://localhost:8000/health**

---

## 2. Frontend Setup

```bash
# In a new terminal tab/window, navigate to the frontend folder
cd agentic-ai-app/frontend

# Install Node.js dependencies
npm install

# Start the development server
npm run dev
```

- The React app will be served at **http://localhost:5173**.

---

## 3. Running Automated Tests

### Backend Tests

```bash
# In your backend terminal
pytest -q
```

### Frontend Tests

```bash
# In your frontend terminal
npm test
```

---

## 4. Feature Overview

- **Module Navigation:** Sidebar for selecting learning modules.
- **Content Rendering:** Markdown-driven module content.
- **Interactive Code Editor:** Monaco-based Python editor with AI suggestions and execution.
- **Authentication:** GitHub OAuth, JWT-based protected routes.
- **AI Suggestions:** Integration with Cursor AI for code improvement hints.
- **Sandbox Execution:** Safe code execution endpoint.

---

## 5. Next Steps

- Expand modules, quizzes, and progress tracking.
- Integrate persistent storage for user progress.
- Add Capstone project repository integration.
- Enhance UI (dark mode, animations, responsive design).

---

Happy coding! 🎉
