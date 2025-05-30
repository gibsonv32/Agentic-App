from pydantic import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str
    ALGORITHM: str = 'HS256'
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    GITHUB_CLIENT_ID: str
    GITHUB_CLIENT_SECRET: str
    CURSOR_API_KEY: str
    CURSOR_API_URL: str

    class Config:
        env_file = '.env'

settings = Settings()
