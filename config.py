import os


class Config:
    SECRET_KEY = "FindTune"
    SQLALCHEMY_DATABASE_URI = "sqlite:///findtune.db"
    MAIL_SERVER = "smtp.googlemail.com"
    MAIL_PORT = 465
    MAIL_USE_SSL = True
    MAIL_USE_TLS = False
    MAIL_USERNAME = os.environ.get("EMAIL_USER")
    MAIL_PASSWORD = os.environ.get("EMAIL_PASS")
