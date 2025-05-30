# Agentic AI Mastery App
This repository contains the full-stack Agentic AI Mastery application, guiding users through structured learning modules, interactive code exercises, and AI-driven suggestions.
## Project Structure
- **backend/**: FastAPI server with OAuth, JWT auth, Cursor AI proxy, and code execution endpoints.
- **frontend/**: React (Vite) app with module navigation, Markdown content rendering, Monaco-based code editor, and route protection.
## Prerequisites
- Python 3.9+ (for backend)
- Node.js 16+ & npm
- Git
## Setup Instructions
### Backend
1. Create and activate a virtual environment:
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
![image](https://github.com/user-attachments/assets/19d95adb-2694-49f0-9dd3-202b82ecbd38)
Install dependencies:

pip install -r requirements.txt

Copy .env.example to .env and fill in your credentials:

SECRET_KEY=your_secret_key
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
CURSOR_API_KEY=...
CURSOR_API_URL=https://api.cursor.ai/suggestions

Run the server:

uvicorn app.main:app --reload

The API will be available at http://localhost:8000.

Frontend

Install dependencies:

cd ../frontend
npm install

Start the dev server:

npm run dev

The app will open at http://localhost:5173.

Testing

Backend Tests

cd backend
pytest -q

Frontend Tests

cd frontend
npm test

