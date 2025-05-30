# 3. Capstone Project Repository Integration

## Objective
Enable users to create or link a GitHub repository for their capstone project.

## Tasks

1. **GitHub OAuth Scopes**
   - Update OAuth config to include `repo` scope.

2. **Backend Endpoint**
   - Create `app/routers/capstone.py`:
     ```python
     @router.post('/capstone/repos')
     def create_repo(req: CapstoneRequest, current_user=Depends(get_current_user)):
         # Use GitHub API to create repo from template
     ```

3. **Database Model**
   - Add `CapstoneProject` table:
     ```python
     class CapstoneProject(Base):
         __tablename__ = 'capstone_projects'
         id = Column(Integer, primary_key=True)
         user_id = Column(String)
         repo_url = Column(String)
         created_at = Column(DateTime)
         status = Column(String)
     ```

4. **Frontend UI**
   - `src/pages/CapstoneSetup.jsx` for project details.
   - On submit, POST to `/capstone/repos` and show `repo_url`.

5. **GitHub Actions (Optional)**
   - Include CI template in repo template.

## Next
- PR for `capstone.py`, model, and front-end page.
- Configure GitHub template repo.
