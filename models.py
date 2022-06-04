# from email.policy import default
# from time import timezone
# from . import db
# from flask_login import UserMixin


# class Note(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     data = db.Column(db.String(100000))
#     date = db.Column(db.DateTime(timezone=True), default=db.func.now())
#     user_id = db.Column(db.Integer, db.ForeignKey("user.id"))


# class User(db.Model, UserMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     FullName = db.Column(db.String(100), nullable=False)
#     Username = db.Column(db.String(20), unique=True, nullable=False)
#     Email = db.Column(db.String(120), unique=True, nullable=False)
#     Password = db.Column(db.String(60), nullable=False)
#     notes = db.relationship("Note", backref="user", lazy=True)

#     def __repr__(self):
#         return f"User('{self.username}', '{self.email}')"
