from flask import session, abort
from flask_restful import Resource, reqparse

parser = reqparse.RequestParser()
parser.add_argument('data')

class Post(Resource):
	def post(self):
		if not session.get('user'):
			abort(403)

		args = parser.parse_args()
		print({'data': args['data']})
		return 201
	
	def get(self):
		return {1: 'data1', 2: 'data2'}