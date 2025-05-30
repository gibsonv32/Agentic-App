from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import httpx
from app.config import settings

class SuggestRequest(BaseModel):
    code: str

router = APIRouter(prefix="/cursor")

@router.post('/suggestions')
async def get_suggestions(req: SuggestRequest):
    async with httpx.AsyncClient() as client:
        resp = await client.post(
            settings.CURSOR_API_URL,
            json={'code': req.code},
            headers={'Authorization': f'Bearer {settings.CURSOR_API_KEY}'}
        )
    if resp.status_code != 200:
        raise HTTPException(status_code=resp.status_code, detail='Cursor AI API error')
    data = resp.json()
    return {'suggestions': data.get('suggestions', [])}
