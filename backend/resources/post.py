from ast import parse
from flask_restful import Resource, reqparse

parser = reqparse.RequestParser()
parser.add_argument('ukey')
parser.add_argument('data')

class Post(Resource):
	def post(self):
		args = parser.parse_args()
		print({'ukey': args['ukey'], 'data': args['data']})
		return 201
	
	def get(self):
		return {1: 'data1', 2: 'data2'}