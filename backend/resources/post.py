from flask_restful import Resource, reqparse

parser = reqparse.RequestParser()
parser.add_argument('data')
parser.add_argument('key')

class Post(Resource):
	def post(self):

		args = parser.parse_args()
		print({'data': args['data'], 'key': args['key']})
		return 201
	
	def get(self):
		return {1: 'data1', 2: 'data2'}