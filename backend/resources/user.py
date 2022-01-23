from flask_restful import Resource, abort, reqparse
from flask import session
from backend.common.accounts import create_account, get_account

parser = reqparse.RequestParser()
parser.add_argument('key')

class User(Resource):
	def get(self):
		return {'key': '0000a8b28ab9wbd8'} # dummy
	
	def post(self):
		args = parser.parse_args()
		# authenticate user here
		session['user'] = args['key']
		print(session['user'])

	def delete(self):
		if not session.get('user'):
			abort(403)
		
		session.clear()
		return '', 200

