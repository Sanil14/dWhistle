from common._chain import w3, account_list

def create_account():
	global w3
	global account_list
	acct = w3.eth.account.create()
	account_list.append(acct)
	return acct

def get_account(key):
	global account_list
	for acct in account_list:
		if acct.key.hex() == key:
			return acct

if __name__ == '__main__':
	a = create_account()
	print(get_account(a.key.hex()))
