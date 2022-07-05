from email.policy import default
from flask_login import UserMixin
from __init__ import db, login_manager


@login_manager.user_loader
def load_user(id):
    return user.query.get(int(id))


class user(db.Model, UserMixin):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(120), nullable=False, default="default.jpg")
    password = db.Column(db.String(60), nullable=False)
    songs = db.relationship(
        "Songs", cascade="all, delete-orphan", backref="author", lazy=True
    )
    lyrics = db.relationship("Songs", cascade="all", backref="author", lazy=True)

    def __repr__(self):
        return f"user('{self.username}','{self.email}','{self.password}')"


class Songs(db.Model):
    __tablename__ = "songs"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    artist = db.Column(db.String(100), nullable=True)
    album = db.Column(db.String(100), nullable=True)
    year = db.Column(db.String(100), nullable=True)
    genre = db.Column(db.String(100), nullable=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey("user.id", ondelete="CASCADE"), nullable=False
    )
    lyrics = db.relationship(
        "Songs", cascade="all,delete-orphan", backref="author", lazy=True
    )

    def __repr__(self):
        return f"Songs('{self.title}','{self.artist}','{self.album}','{self.year}','{self.genre}','{self.lyrics}')"


class Lyrics(db.Model):
    __tablename__ = "lyrics"
    id = db.Column(db.Integer, primary_key=True)
    lyrics = db.Column(db.String(1000000), nullable=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey("user.id", ondelete="CASCADE"), nullable=False
    )
    song_id = db.Column(
        db.Integer, db.ForeignKey("songs.id", ondelete="CASCADE"), nullable=False
    )

    def __repr__(self):
        return f"Lyrics('{self.lyrics}')"
