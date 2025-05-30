from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from app.config import settings
from app.database import get_user

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/auth/login/github')

def get_current_user(token: str = Depends(oauth2_scheme)):
    creds_exc = HTTPException(status_code=401, detail="Could not validate credentials")
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        user_id: str = payload.get('sub')
        if not user_id:
            raise creds_exc
    except JWTError:
        raise creds_exc
    user = get_user(user_id)
    if user is None:
        raise creds_exc
    return user
