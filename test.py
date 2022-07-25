# try:
#     from app import app
#     import unittest

# except Exception as e:
#     print(e)


# class FlaskTest(unittest.TestCase):
#     def test_index(self):
#         tester = app.test_client(self)
#         response = tester.post("/", content_type="html/text")
#         self.assertEqual(response.status_code, 200)
#         self.assertIn(response.data)

#     def test_index_content(self):
#         tester = app.test_client(self)
#         response = tester.post("/", content_type="html/text")
#         self.assertIn(response.data)


# if __name__ == "__main__":
#     unittest.main()
#     # app.run(debug=True)
#     # app.run(host="


from email import header
from http import client
import unittest
from flask import Flask
import json

# from urllib3 import urlencode
from multidimensional_urlencode import urlencode

# import werkzeug
from app import app as create_app


# Normal login get test
class FlaskTest(unittest.TestCase):
    def test_base_route(self):
        # app = Flask(__name__)
        app = create_app
        # app.register_blueprint(auth, url_prefix="/")
        # app.iter_blueprints
        client = app.test_client()
        url = "/FTlogin"

        response = client.get(url)
        # assert response.get_data() == b'Hello, World!'
        assert response.status_code == 200

    # Login successfull test
    def test_login(self):
        # app = Flask(__name__)
        app = create_app
        # app.register_blueprint(auth, url_prefix="/")
        # app.iter_blueprints
        client = app.test_client()
        url = "/FTlogin"

        mockRequestHeaders = {"Content-Type": "application/x-www-form-urlencoded"}

        mockData = urlencode({"email": "admin@admin.coma", "password": "asdfghjkl"})

        response = client.post(url, data=mockData, headers=mockRequestHeaders)

        # assert response.get_data() == b'Hello, World!'
        assert response.status_code == 200

    # Create new account
    def test_signup(self):
        app = create_app
        client = app.test_client()
        url = "/FTsignup"

        mockRequestHeaders = {"Content-Type": "application/x-www-form-urlencoded"}

        mockData = urlencode(
            {
                "fullname": "Asdasd",
                "username": "Asdasd",
                "email": "Asdasd@gmail.com",
                "passwords": "AsdasdAsdasd",
                "cpassword": "AsdasdAsdasd",
            }
        )

        response = client.post(url, data=mockData, headers=mockRequestHeaders)

        assert response.status_code == 200


if __name__ == "__main__":
    unittest.main()
