from flask_restful import Resource, reqparse
from common.accounts import get_account
from common.posts import add_post, get_posts

parser = reqparse.RequestParser()
parser.add_argument('title')
parser.add_argument('content')
parser.add_argument('key')

class Post(Resource):
	def post(self):
		args = parser.parse_args()
		key = args['key']
		if not get_account(key):
			return {'success': False}, 200
		
		add_post(key, args['content'], args['title'])
		return {'success': True}, 201
	
	def get(self):
		address, content, title = get_posts()


		return {'address': address, 'title': title, 'content': content}