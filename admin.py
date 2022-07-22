from flask import Blueprint, redirect, request, render_template, url_for
from form import AdminForm
from models import Songs
from __init__ import db

admin = Blueprint("admin", __name__)


@admin.route("/admin", methods=["GET", "POST"])
def admin_page():
    form = AdminForm()

    return render_template("admin/AddSongs.html", form=form)


@admin.route("/admin/songs", methods=["GET", "POST"])
def songs():
    form = AdminForm()
    if request.method == "POST":
        print("ass")
        if form.validate_on_submit():
            details = Songs(
                title=form.title.data,
                artist=form.artist.data,
                album=form.album.data,
                year=form.year.data,
                tagid=form.tagid.data,
            )
            db.session.add(details)
            db.session.commit()
    return redirect(url_for("admin.admin_page"))
