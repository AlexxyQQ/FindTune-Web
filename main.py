from flask import Flask, render_template

app = Flask(__name__)
app.config["SECRET_KEY"] = "Apple"

from view import views
from auth import auth

app.register_blueprint(views, url_prefix="/")
app.register_blueprint(auth, url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
