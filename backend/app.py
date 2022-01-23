from flask import Flask
from flask_restful import Api, Resource, url_for
from resources.post import Post
from resources.user import User
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'oqUsuZlT8mGUPOqViOWDtnSAv_muz5fJIc8zv8beww0'
api = Api(app)
CORS(app)

api.add_resource(User, '/user')
api.add_resource(Post, '/post')

if __name__ == '__main__':
	app.run(debug=True)