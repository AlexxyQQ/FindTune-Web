import email
import re
from flask import Blueprint, render_template, request

auth = Blueprint("auth", __name__)


@auth.route("/login")
def login():
    return "Login"


@auth.route("/logout")
def logout():
    return "Logout"


@auth.route("/LoginSignup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        FullName = request.form.get("FullName")
        Email = request.form.get("Email")
        Username = request.form.get("Username")
        Password = request.form.get("Password")
        CPassword = request.form.get("CPassword")
        print(FullName, Email, Username, Password, CPassword)

    return render_template("LoginSignup.html")
