from flask import Blueprint, flash, render_template, request, redirect, url_for
from flask_login import login_user, current_user, logout_user, login_required
from models import user as User
from form import RegistrationForm, LoginForm
from __init__ import db, bcrypt

auth = Blueprint("auth", __name__)


@auth.route("/FT<string:type>", methods=["GET", "POST"])
def LoginSignup(type):
    form_signup = RegistrationForm()
    form_login = LoginForm()
    if current_user.is_authenticated:
        return redirect(url_for("views.home"))
    if request.method == "POST":
        if type == "signup":
            if form_signup.validate_on_submit():
                if User.query.filter_by(username=form_signup.username.data).first():
                    flash("Username is already taken ", "Username-Used")
                elif User.query.filter_by(email=form_signup.email.data).first():
                    flash("Email is already taken ", "Email-Taken")

                else:
                    hashed_password = bcrypt.generate_password_hash(
                        form_signup.password.data
                    ).decode("utf-8")
                    user = User(
                        fullname=form_signup.fullname.data,
                        username=form_signup.username.data,
                        email=form_signup.email.data,
                        password=hashed_password,
                    )
                    db.session.add(user)
                    db.session.commit()
                    flash(
                        "Your account has been created! You are now able to log in",
                        "success",
                    )
                    return redirect(url_for("auth.LoginSignup", type="login"))

        if type == "login":
            if form_login.validate_on_submit():
                user = User.query.filter_by(email=form_login.email.data).first()
                Users = User.query.filter_by(email=form_login.email.data).first()

                if not Users:
                    flash("Email not found", "Username-Not-Found")
                    return redirect(url_for("auth.LoginSignup", type="login"))
                elif not bcrypt.check_password_hash(
                    Users.password, form_login.password.data
                ):
                    flash("Incorrect password", "Incorrect-Password")
                    return redirect(url_for("auth.LoginSignup", type="login"))

                elif user and bcrypt.check_password_hash(
                    user.password, form_login.password.data
                ):
                    login_user(user, remember=True)
                    next_page = request.args.get("next")
                    if current_user.username == "admin":
                        return redirect(url_for("admin.admin_page"))
                    return (
                        redirect(next_page)
                        if next_page
                        else redirect(url_for("views.home"))
                    )
                else:
                    flash(
                        "Login Unsuccessful. Please check email and password", "danger"
                    )
    return render_template(
        "LoginAndRegestration/LoginAndRegestration.html",
        title="LoginSignup",
        form_signup=form_signup,
        form_login=form_login,
    )


@auth.route("/Logout")
def Logout():
    logout_user()
    return redirect(url_for("views.home"))
