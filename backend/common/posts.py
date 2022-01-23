from common._chain import w3, account_list
from common.accounts import get_account
from solcx import compile_source, compile_standard

contracts = []

def add_post(key, content, title):
	global account_list
	global contracts
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

	# compiled_sol = compile_standard({
	# 	'language': 'Solidity',
    # 	'sources': {'Foo.sol':{ 'content': '''
	# 	// SPDX-License-Identifier: UNLICENSED
	# 	pragma solidity >0.5.0;

	# 	contract Post {
	# 		string public key;
	# 		string public content;
	# 		string public title;
			
	# 		constructor() public {
	# 			key = "%s";
	# 			content = "%s";
	# 			title = "%s";
	# 		}
	# 	 }
	# 	'''%(key, content, title)}
	# 	},
	# })



	acct = get_account(key)
	contract_id, contract_interface = compiled_sol.popitem()
	bytecode = contract_interface['bin']
	abi = contract_interface['abi']
	# tx = {
	# 	'data': bytecode,
	# 	'value': 0,
	# 	'gas': 100000,
	# 	'gasPrice': w3.eth.get_block('pending')['baseFeePerGas'],
	# 	'nonce': acct[1]
	# }
	# acct[1]+=1
	Post = w3.eth.contract(abi=abi, bytecode=bytecode)

	# signed = w3.eth.account.sign_transaction(tx, acct[0].key.hex())

	# tx_hash = w3.eth.send_raw_transaction(signed.rawTransaction)
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