from common._globals import w3, account_list
from web3 import Web3


def create_account():
	global w3
	global account_list
	acct = w3.eth.account.create()

	# give acct some cash
	acct_one = w3.eth.accounts[0]
	tx_hash = w3.eth.send_transaction({
	  'from': acct_one,
	  'to': acct.address,
	  'value': Web3.toWei(500, 'ether')
	})
	print(tx_hash)


	account_list.append([acct, 0])
	return acct

def get_account(key):
	global account_list
	for acct in account_list:
		if acct[0].key.hex() == key:
			return acct

if __name__ == '__main__':
	a = create_account()
	print(get_account(a.key.hex()))
