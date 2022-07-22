try:
    from app import app
    import unittest

except Exception as e:
    print(e)


class FlaskTest(unittest.TestCase):
    def test_index(self):
        tester = app.test_client(self)
        response = tester.post("/", content_type="html/text")
        self.assertEqual(response.status_code, 200)
        self.assertIn(response.data)

    def test_index_content(self):
        tester = app.test_client(self)
        response = tester.post("/", content_type="html/text")
        self.assertIn(response.data)


if __name__ == "__main__":
    unittest.main()
    # app.run(debug=True)
    # app.run(host="
