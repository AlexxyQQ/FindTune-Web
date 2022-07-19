from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from flask_login import current_user
from wtforms import StringField, PasswordField, SubmitField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from models import user as User


class RegistrationForm(FlaskForm):
    fullname = StringField(
        "Fullname", validators=[DataRequired(), Length(min=5, max=20)]
    )
    username = StringField(
        "Username", validators=[DataRequired(), Length(min=3, max=20)]
    )
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired()])
    cpassword = PasswordField(
        "Confirm Password", validators=[DataRequired(), EqualTo("password")]
    )
    submit = SubmitField("Sign Up")

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError(
                "That username is taken. Please choose a different one."
            )

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError("That email is taken. Please choose a different one.")


class LoginForm(FlaskForm):
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired()])
    submit = SubmitField("Login")


class UpdateAccountForm(FlaskForm):
    username = StringField(
        "Username", validators=[DataRequired(), Length(min=2, max=20)]
    )
    # email = StringField("Email", validators=[DataRequired(), Email()])
    picture = FileField("", validators=[FileAllowed(["png"])])
    submit = SubmitField("Update")

    def validate_username(self, username):
        if username.data != current_user.username:
            user = User.query.filter_by(username=username.data).first()
            if user:
                raise ValidationError("That username is taken.")

    # def validate_email(self, email):
    #     if email.data != current_user.email:
    #         user = User.query.filter_by(email=email.data).first()
    #         if user:
    #             raise ValidationError("That email is taken.")


class LyricsForm(FlaskForm):
    song_id = IntegerField("SongID", validators=[DataRequired()])
    lyrics = TextAreaField("Lyrics", validators=[])
    submit = SubmitField("Post")


class VoteForm(FlaskForm):
    song_id = IntegerField("SongID", validators=[DataRequired()])
    lyric_id = IntegerField("LyricID", validators=[DataRequired()])
    user_id = IntegerField("UserID", validators=[DataRequired()])
    vote = IntegerField("Vote", validators=[DataRequired()])
    submit = SubmitField("Vote")


class DeleteSong(FlaskForm):
    song_id = IntegerField("SongID", validators=[DataRequired()])
    submit = SubmitField("Delete")


class DeleteLyrics(FlaskForm):
    lyrics_id = IntegerField("LyricsID", validators=[DataRequired()])
    song_id = IntegerField("LyricsID", validators=[DataRequired()])

    submit = SubmitField("Delete")
