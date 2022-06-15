from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app = Flask(__name__)
app.config["SECRET_KEY"] = "Apple"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:0102@localhost/logintest"
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)

from view import views
from auth import auth


app.register_blueprint(views, url_prefix="/")
app.register_blueprint(auth, url_prefix="/")
