from flask_restful import Resource, reqparse
from common.accounts import create_account

parser = reqparse.RequestParser()
parser.add_argument('key')

class User(Resource):
	def get(self):
		acct = create_account()
		return {'key': acct.key.hex(), 'address': acct.address}
	
	