from flask import Blueprint, flash, render_template, request, redirect, url_for
from flask_login import login_user
from models import user
from __init__ import db, bcrypt

auth = Blueprint("auth", __name__)


@auth.route("/LoginSignup", methods=["GET", "POST"])
def LoginSignup():
    if request.method == "POST":
        if request.form["submit"] == "SIGNUP":
            if user.query.filter_by(username=request.form["Username"]).first():
                flash("Username is already taken ", "danger")
            elif user.query.filter_by(email=request.form["Email"]).first():
                flash("email is already taken ", "danger")
            elif request.form["Password"] != request.form["CPassword"]:
                flash("Password does not match ", "danger")
            else:
                hashed_password = bcrypt.generate_password_hash(
                    request.form["Password"]
                ).decode("utf-8")
                User = user(
                    fullname=request.form["FullName"],
                    username=request.form["Username"],
                    email=request.form["Email"],
                    password=hashed_password,
                )
                db.session.add(User)
                db.session.commit()
                flash(f"Account created for {request.form['Username']}!", "sucess")

        if request.form["submit"] == "LOGIN":
            User = user.query.filter_by(username=request.form["Username"]).first()
            if User and bcrypt.check_password_hash(
                User.password, request.form["Username"]
            ):
                login_user(User)
                return redirect(url_for("home"))
            else:
                flash("Login unsucessfull", "danger")

    return render_template("LoginSignup.html", title=LoginSignup)
