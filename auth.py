from flask import Blueprint, flash, render_template, request, redirect, url_for
from flask_login import login_user, current_user, logout_user, login_required
from models import user as User
from form import RegistrationForm, LoginForm
from __init__ import db, bcrypt

auth = Blueprint("auth", __name__)


@auth.route("/LoginSignup", methods=["GET", "POST"])
def LoginSignup():
    # if request.method == "POST":
    #     if request.form["submit"] == "SIGNUP":
    #         if user.query.filter_by(username=request.form["Username"]).first():
    #             flash("Username is already taken ", "danger")
    #         elif user.query.filter_by(email=request.form["Email"]).first():
    #             flash("email is already taken ", "danger")
    #         elif request.form["Password"] != request.form["CPassword"]:
    #             flash("Password does not match ", "danger")
    #         else:
    #             hashed_password = bcrypt.generate_password_hash(
    #                 request.form["Password"]
    #             ).decode("utf-8")
    #             User = user(
    #                 fullname=request.form["FullName"],
    #                 username=request.form["Username"],
    #                 email=request.form["Email"],
    #                 password=hashed_password,
    #             )
    #             db.session.add(User)
    #             db.session.commit()
    #             flash(f"Account created for {request.form['Username']}!", "sucess")

    #     if request.form["submit"] == "LOGIN":
    #         User = user.query.filter_by(username=request.form["Username"]).first()
    #         if User and bcrypt.check_password_hash(
    #             User.password, request.form_signup["Username"]
    #         ):
    #             login_user(User)
    #             return redirect(url_for("home"))
    #         else:
    #             flash("Login unsucessfull", "danger")
    form_signup = RegistrationForm()
    form_login = LoginForm()

    if request.method == "POST":
        if current_user.is_authenticated:
            return redirect(url_for("home"))
        if form_signup.validate_on_submit():
            hashed_password = bcrypt.generate_password_hash(
                form_signup.password.data
            ).decode("utf-8")
            user = User(
                fullname=form_signup.fullname.data,
                username=form_signup.username.data,
                email=form_signup.email.data,
                password=hashed_password,
            )
            print(user)
            db.session.add(user)
            db.session.commit()
            flash(
                "Your account has been created! You are now able to log in",
                "success",
            )
            return redirect(url_for("auth.LoginSignup"))

        if form_login.validate_on_submit():
            user = User.query.filter_by(email=form_login.email.data).first()
            if user and bcrypt.check_password_hash(
                user.password, form_login.password.data
            ):
                login_user(user, remember=True)
                next_page = request.args.get("next")
                return (
                    redirect(next_page)
                    if next_page
                    else redirect(url_for("views.home"))
                )
            else:
                flash("Login Unsuccessful. Please check email and password", "danger")
    return render_template(
        "LoginSignup.html",
        title="LoginSignup",
        form_signup=form_signup,
        form_login=form_login,
    )
