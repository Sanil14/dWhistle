from flask import Flask, Blueprint
from flask_restful import Api, Resource, url_for
from backend.resources.post import Post
from backend.resources.user import User

app = Flask(__name__)
app.config['SECRET_KEY'] = 'oqUsuZlT8mGUPOqViOWDtnSAv_muz5fJIc8zv8beww0'
api = Api(app)

api.add_resource(User, '/user')
api.add_resource(Post, '/post')