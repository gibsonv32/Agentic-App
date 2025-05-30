from fastapi import APIRouter
from starlette.requests import Request
from starlette.responses import JSONResponse
from authlib.integrations.starlette_client import OAuth
from app.config import settings
from app.utils import create_access_token
from app.database import upsert_user

router = APIRouter(prefix="/auth")

oauth = OAuth()
oauth.register(
    name='github',
    client_id=settings.GITHUB_CLIENT_ID,
    client_secret=settings.GITHUB_CLIENT_SECRET,
    authorize_url='https://github.com/login/oauth/authorize',
    access_token_url='https://github.com/login/oauth/access_token',
    api_base_url='https://api.github.com/',
    client_kwargs={'scope': 'read:user'},
)

@router.get('/login/github')
async def login_github(request: Request):
    redirect_uri = request.url_for('auth_callback')
    return await oauth.github.authorize_redirect(request, redirect_uri)

@router.get('/callback/github', name='auth_callback')
async def auth_callback(request: Request):
    token = await oauth.github.authorize_access_token(request)
    user_info = await oauth.github.parse_id_token(request, token)
    user_id = upsert_user(user_info)
    access_token = create_access_token({"sub": str(user_id)})
    return JSONResponse({"access_token": access_token, "token_type": "bearer"})
