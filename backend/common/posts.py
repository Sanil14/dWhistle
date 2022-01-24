from common._chain import w3, account_list
from common.accounts import get_account
from solcx import compile_source, compile_standard

contracts = []

def add_post(key, content, title):
	global account_list
	global contracts
	for char in content:
		# escape newlines
		if char == '\n':
			content = content.replace(char, '\\n')
	compiled_sol = compile_source(
		'''
		// SPDX-License-Identifier: UNLICENSED
		pragma solidity >0.5.0;

		contract Post {
			string public key;
			string public content;
			string public title;
			
			constructor() public {
				key = "%s";
				content = "%s";
				title = "%s";
			}
		
			function getkey() view public returns (string memory) {
				return key;
			}
			function getcontent() view public returns (string memory) {
				return content;
			}
			function gettitle() view public returns (string memory) {
				return title;
			}
		}
		''' %(key, content, title),
		output_values=['abi', 'bin']
	)


	acct = get_account(key)
	contract_id, contract_interface = compiled_sol.popitem()
	bytecode = contract_interface['bin']
	abi = contract_interface['abi']

	Post = w3.eth.contract(abi=abi, bytecode=bytecode)


	tx_hash = Post.constructor().transact()
	tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
	address = tx_receipt.contractAddress

	contracts.append((address, abi))

def get_posts():
	global contracts
	keys = []
	contents = []
	titles = []
	addresses = []
	for cmtadta in contracts:
		address = cmtadta[0]
		abi = cmtadta[1]
		post = w3.eth.contract(address=address, abi=abi)

		key = post.functions.getkey().call()
		content = post.functions.getcontent().call()
		title = post.functions.gettitle().call()

		keys.append(key)
		contents.append(content)
		titles.append(title)

		
	for akey in keys:
		acct = get_account(akey)
		if not acct:
			continue
		print(type(acct))
		addresses.append(acct[0].address)
	
	return (addresses, contents, titles)