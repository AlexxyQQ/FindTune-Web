import sqlite3

a = "BoyWithUke - Contigo" + ".mp3"
con = sqlite3.connect("Backend/db/fingerprints.db")
cur = con.cursor()
print(cur.execute(f"""SELECT * FROM songs WHERE name = "{a}";"""))
a =(cur.execute(f"""SELECT * FROM songs WHERE name = "{a}";""")).fetchall()
print(a)
con.close()
