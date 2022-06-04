from flask import Blueprint, render_template

views = Blueprint("views", __name__)


@views.route("/offline.html")
def offline():
    return views.send_static_file("offline.html")


@views.route("/service-worker.js")
def sw():
    return views.send_static_file("service-worker.js")


@views.route("/")
def home():
    return render_template("Home.html")
