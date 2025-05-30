# 1. Expand Modules & Quizzes

## Objective
Flesh out learning content and interactive assessments for the Agentic AI app.

## Tasks

1. **Define Module Schema**
   - Create `modules.json` (or YAML) under `/backend/data/`:
     ```json
     [
       {
         "id": "foundations",
         "title": "Foundations",
         "markdownContent": "path/to/foundations.md",
         "quizQuestions": [
           {
             "type": "multiple-choice",
             "prompt": "What is an AI agent?",
             "options": ["Option A", "Option B", "Option C", "Option D"],
             "answer": "Option A"
           }
         ]
       }
     ]
     ```
2. **Implement Quiz Component**
   - Create `src/components/Quiz.jsx`.
   - Support question types: `multiple-choice`, `true-false`, `short-answer`.
   - Capture user answers and emit results.

3. **Progress API**
   - Backend endpoints in `app/routers/progress.py`:
     ```python
     @router.post('/progress')
     def post_progress(item: ProgressRequest):
         # Save to DB
     @router.get('/progress/{user_id}')
     def get_progress(user_id: str):
         # Fetch from DB
     ```
4. **Frontend Integration**
   - After content render, show `<Quiz moduleId={currentModule} />`.
   - On completion, POST to `/progress`.

5. **Database Model**
   - SQLAlchemy model in `app/models.py`:
     ```python
     class Progress(Base):
         __tablename__ = 'progress'
         id = Column(Integer, primary_key=True)
         user_id = Column(String)
         module_id = Column(String)
         completed_at = Column(DateTime)
         score = Column(Float)
     ```

## Next
Create PRs for:
- `backend/data/modules.json`
- `src/components/Quiz.jsx`
- `app/routers/progress.py`
- `app/models.py` migration
