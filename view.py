import os
import secrets
from flask import Blueprint, redirect, request, render_template, url_for
from matplotlib.pyplot import title
from Backend import From_File
from flask_login import current_user, login_required
from form import UpdateAccountForm
from __init__ import db, bcrypt, app
from PIL import Image
from models import user as DBUser

# from Backend import From_File

views = Blueprint("views", __name__)


@views.route("/", methods=["GET", "POST"])
def home():
    return render_template("Home.html")


@views.route("/<string:songname>", methods=["GET", "POST"])
def song(songname):
    import sqlite3

    con = sqlite3.connect("Backend/db/fingerprints.db")
    cur = con.cursor()
    a = cur.execute(
        f"""SELECT * FROM songs WHERE name = "{songname+ ".mp3"}";"""
    ).fetchall()
    if a != []:
        return render_template("FoundSong/FoundSong.html", songname=songname)
    else:
        return render_template("404/pagenotfound.html", title="Pagenotfound")


@views.route("/check", methods=["GET", "POST"])
def check():
    songname = "notfound"
    if request.method == "POST":
        request.files["file"].save("./audio.wav")
        b = From_File.main("./audio.wav")
        # print(b.pop().replace(".mp3", ""))
        result = b
        songname = b[0].pop().replace(".mp3", "")
        # return render_template(
        #     "FoundSong/FoundSong.html", songname=songname, title=songname
        # )
        return songname
    # return render_template(
    #     "FoundSong/FoundSong.html", songname=songname, title="Song Not Found"
    # )
    return songname


def save_pic(pic):
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(pic.filename)
    pic_fn = random_hex + f_ext
    pic_path = os.path.join(app.root_path, "static/Assets/userimage", pic_fn)
    pic.save(pic_path)
    output_size = (250, 250)
    i = Image.open(pic)
    i.thumbnail(output_size)
    i.save(pic_path)
    return pic_fn


@views.route("/<string:username>", methods=["GET", "POST"])
@login_required
def account(username):
    form = UpdateAccountForm()
    if request.method == "POST":
        if form.validate_on_submit():
            if form.picture.data:
                picture_file = save_pic(form.picture.data)
                current_user.image_file = picture_file
            current_user.username = form.username.data
            db.session.commit()
            return redirect(url_for("views.home"))
        elif request.method == "GET":
            form.username.data = current_user.username

    if DBUser.query.filter_by(username=username).first():
        return render_template(
            "UserProfile/Account.html", title=current_user.username, form=form
        )
    else:
        return render_template("404/pagenotfound.html", title="Pagenotfound")


@views.route("/Song")
def RecordedSearch():
    return render_template("FoundSong.html")


@views.route("/library", methods=["GET", "POST"])
@login_required
def Library():
    pass
