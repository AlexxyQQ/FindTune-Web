from flask import Blueprint, request, render_template


# from Backend import From_File

views = Blueprint("views", __name__)


@views.route("/")
def home():
    return render_template("Home.html")


@views.route("/check", methods=["GET", "POST"])
def check():
    if request.method == "POST":
        request.files["file"].save("./audio.mp3")
        print("FILE CLOSED")
    return "<h1>Apple"


@views.route("/Song")
def RecordedSearch():
    return render_template("FoundSong.html")
