## Beware
Because Web3tester doesn't play well with Windows, we recommend using a Linux distribution to run the backend, if available. if not, use WSL, but be warned that Python virtual environments are particularly painful on WSL.
That last reason is why is project happens not to include a requirements file for Python, and why it has to be listed here. Having said that, the dependencies this project requires are as follows

- flask 2.0.2
- flask-restful 0.3.9
- web3 5.26.0
- py-solc-x

These can be installed as follows (assume Python and pip are in your PATH):

`pip install flask-restful`

`pip install web3 "web3[tester]"`

`pip install py-solc-x`

To complete the py-solc-x installation, 
Start a new python prompt 
`from solcx import install_solc`

`install_solc(version='latest')`

