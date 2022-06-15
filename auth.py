from flask import Blueprint, flash, render_template, request, redirect, url_for
from flask_login import login_user, current_user
from models import user
from __init__ import db, bcrypt

auth = Blueprint("auth", __name__)


@auth.route("/LoginSignup", methods=["GET", "POST"])
def LoginSignup():
    if request.method == "POST":
        if request.form["submit"] == "SIGNUP":
            if user.query.filter_by(username=request.form["username"]).first():
                flash("Username is already taken ", "danger")
            elif user.query.filter_by(email=request.form["email"]).first():
                flash("email is already taken ", "danger")
            elif request.form["password"] != request.form["confirm_password"]:
                flash("Password does not match ", "danger")
            else:
                hashed_password = bcrypt.generate_password_hash(
                    request.form["password"]
                ).decode("utf-8")
                User = user(
                    username=request.form["username"],
                    email=request.form["email"],
                    password=hashed_password,
                )
                db.session.add(User)
                db.session.commit()
                flash(f"Account created for {request.form['username']}!", "sucess")

        if request.form["submit"] == "LOGIN":
            User = user.query.filter_by(username=request.form["username"]).first()
            if User and bcrypt.check_password_hash(
                User.password, request.form["password"]
            ):
                login_user(User)
                return redirect(url_for("home"))
            else:
                flash("Login unsucessfull", "danger")

    return render_template("LoginSignup.html", title=LoginSignup)


# def signup():
#     if request.method == "POST":
#         FullName = request.form.get("FullName")
#         Email = request.form.get("Email")
#         Username = request.form.get("Username")
#         Password = request.form.get("Password")
#         CPassword = request.form.get("CPassword")
#         if FullName == None:
#             flash("Full Name is required", category="EmptyFullName")
#         if Email == None:
#             flash("Email is required", category="EmptyEmail")
#         if Username == None:
#             flash("Username is required", category="EmptyUsername")
#         if Password == None:
#             flash("Password is required", category="EmptyPassword")
#         if CPassword == None:
#             flash("Confirm Password is required", category="EmptyCPassword")
#         elif Password != CPassword:
#             flash("Password does not match", category="PasswordMismatch")
# new_user = User(
#     FullName=FullName,
#     Email=Email,
#     Username=Username,
#     Password=generate_password_hash(Password, method="sha256"),
# )
# db.session.add(new_user)
# db.session.commit()
# print(FullName, Email, Username, Password, CPassword)
#     return redirect(url_for("views.home"))
# else:


# def login():
#     if request.method == "POST":
#         Email = request.form.get("Email")
#         Password = request.form.get("Password")
#         user = User.query.filter_by(Email=Email).first()
#         if user and check_password_hash(user.Password, Password):
#             return redirect(url_for("views.home"))
#         else:
#             return render_template("LoginSignup.html")
#     return render_template("LoginSignup.html")
