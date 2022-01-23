from flask_restful import Resource, abort, reqparse
from flask import session

parser = reqparse.RequestParser()
parser.add_argument('ukey')
parser.add_argument('uid')

class User(Resource):
	def get(self):
		return {'id':'wijwidrh2iruj', 'key': '0000a8b28ab9wbd8'} # dummy
	
	def post(self):
		args = parser.parse_args()
		# authenticate user here
		session['user'] = args['uid']
		print(session['user'])

	def delete(self):
		if not session.get('user'):
			abort(403)
		
		session.clear()
		return '', 200

