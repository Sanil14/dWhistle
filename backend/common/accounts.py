from _chain import w3

accounts = []

def create_account():
	global w3
	global accounts
	acct = w3.eth.account.create()
	accounts.append(acct)
	return acct

def get_account(key):
	global accounts
	for acct in accounts:
		if acct.key.hex() == key:
			return acct

if __name__ == '__main__':
	print(len(accounts))
	a = create_account()
	print(len(accounts))
