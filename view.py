from flask import Blueprint, render_template

views = Blueprint("views", __name__)


@views.route("/")
def home():
    return render_template("Home.html")


@views.route("/Song")
def RecordedSearch():
    return render_template("FoundSong.html")
