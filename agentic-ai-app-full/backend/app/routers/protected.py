from fastapi import APIRouter, Depends
from app.routers.dependencies import get_current_user

router = APIRouter()

@router.get('/protected')
async def protected_route(current_user = Depends(get_current_user)):
    return {"message": f"Hello {current_user.username}"}
