from re import A
from flask import Blueprint, request, render_template
import os
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
        request.files["file"].save("./audio.mp3")
        b = From_File.main("./audio.mp3")
        print(b)
        # os.system(f"Backend\From_File.py -f {a}")
    return f"<h1>{a}</h1>"


@views.route("/Song")
def RecordedSearch():
    return render_template("FoundSong.html")
