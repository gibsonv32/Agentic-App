# 2. Persistent Storage for Progress

## Objective
Store and retrieve user progress across sessions.

## Tasks

1. **Choose Storage**
   - Use PostgreSQL. Configure `DATABASE_URL` in `.env`.

2. **Design Schema**
   - Tables: `users`, `modules`, `progress`, `quiz_results`.

3. **Implement Migrations**
   - Initialize Alembic:
     ```bash
     alembic init alembic
     ```
   - Create migration for `progress` table.

4. **Backend Services**
   - On user signup/callback, initialize default progress entries.
   - Protect `/progress` endpoints with JWT.

5. **Frontend Local Sync**
   - On initial load after login, fetch `/progress/{user_id}`.
   - Store in React state/context.

## Next
- PR for Alembic setup and migration files.
- Update `app/database.py` with session setup.
- Extend `auth_callback` to create initial progress rows.
