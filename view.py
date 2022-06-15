from flask import Blueprint, redirect, request, render_template
from Backend import From_File

# from Backend import From_File

views = Blueprint("views", __name__)


@views.route("/")
def home():
    return render_template("Home.html")


@views.route("/check", methods=["GET", "POST"])
def check():
    a = "non"
    if request.method == "POST":
        request.files["file"].save("./audio.wav")
        b = From_File.main("./audio.wav")
        a = b
        # redirect("/check")
        # os.system(f"Backend\From_File.py -f {a}")
    return f"<h1>{a}</h1>"


@views.route("/Song")
def RecordedSearch():
    return render_template("FoundSong.html")
