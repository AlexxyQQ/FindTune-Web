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
    image_file = db.Column(db.String(120), nullable=False, default="default.png")
    password = db.Column(db.String(60), nullable=False)
    lyrics = db.relationship("Lyrics", backref="User", lazy=True)

    def __repr__(self):
        return f"user('{self.username}','{self.email}','{self.password}')"


class Songs(db.Model):
    __tablename__ = "songs"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    artist = db.Column(db.String(100), nullable=True)
    album = db.Column(db.String(100), nullable=True)
    year = db.Column(db.String(100), nullable=True)
    tagid = db.Column(db.String(100), nullable=False, unique=True)
    cover_image = db.Column(db.String(10000), nullable=False, default="NotFound.png")
    lyrics = db.relationship(
        "Lyrics", backref="Song", cascade="all, delete-orphan", lazy=True
    )

    def __repr__(self):
        return f"Songs('{self.title}','{self.artist}','{self.album}','{self.year}','{self.tagid}','{self.cover_image}')"


class Lyrics(db.Model):
    __tablename__ = "lyrics"
    id = db.Column(db.Integer, primary_key=True)
    lyrics = db.Column(db.String(16000), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    song_id = db.Column(
        db.Integer, db.ForeignKey("songs.id", ondelete="CASCADE"), nullable=False
    )

    def __repr__(self):
        return f"Lyrics('{self.lyrics}')"


class Votes(db.Model):
    __tablename__ = "votes"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    lyrics_id = db.Column(db.Integer, db.ForeignKey("lyrics.id"), nullable=False)
    vote = db.Column(db.Integer, nullable=True)
