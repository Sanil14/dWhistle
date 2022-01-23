from flask_restful import Resource, abort, reqparse
from flask import session
from common.accounts import create_account, get_account

parser = reqparse.RequestParser()
parser.add_argument('key')

class User(Resource):
	def get(self):
		acct = create_account()
		return {'key': acct.key.hex(), 'address': acct.address}
	
	def post(self):
		args = parser.parse_args()
		# authenticate user here
		key = args['key']
		acct = get_account('key')
		if not acct:
			return {'success': False}, 200

		session['user'] = args['key']
		print(session['user'])
		return {'success': True}, 200

	def delete(self):
		if not session.get('user'):
			abort(403)
		
		session.clear()
		return '', 200

