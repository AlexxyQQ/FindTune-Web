from flask import Blueprint, flash, render_template, request, redirect, url_for
from werkzeug.security import check_password_hash, generate_password_hash

auth = Blueprint("auth", __name__)


@auth.route("/LoginSignup", methods=["GET", "POST"])
def renderpage():
    return render_template("LoginSignup.html")


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
