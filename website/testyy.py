import re

a = "app"
pattern = re.compile(r"/^[A-Z][a-z]+$/")
print(pattern.search(a))
if pattern.search(a) != "none":
    print("ass")
else:
    print("dik")
