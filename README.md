<!--lint disable  no-literal-urls-->


![alt text](https://cdn.discordapp.com/attachments/825403700901969931/934824961909092442/pog3.png)

# DWHISTLE :milky_way:

# Table Of Contents :zap:
*  **[FLASK](https://flask.palletsprojects.com/en/2.0.x/)**
  &emsp;
* **[REACTJS](https://reactjs.org/)**
  &emsp;
*  **[WEB3.py](https://web3py.readthedocs.io/en/stable/)**


## **Inspiration** :mechanical_arm:
- Providing confidentiality. A whistleblowing platform provides a confidential service that allows employees to draw attention to any issues that they feel are inappropriate for the workplace.
- We built a platform on the ethereum blockchain, seeking to create a decentralized platform. The user's " POSTS " will virtually remain anonymous to anybody reading the information.

## **What it does** :gear:
- DWHISTLE is a decentralized application that can operate autonomously, through the use of smart contracts, that runs on a decentralized computing, blockchain system (ETHEREUM BLOCKCHAIN) .
- It's a platform where anyone can report (" POST ") information or activity within a private, public, or government organisation that's deemed illegal, immoral, illicit, unsafe, fraud, or misuse of taxpayer funds.

## **How we built it**
We used the Web3 API to create a sandbox ethereum blockchain to run our service in. Our Users' posts were stored as smart contracts on the chain. The front-end website, which was built using ReactJS and TailwindCSS, was designed to provide an anonymous experience, avoiding login and localstorage. An API built in the Flask Web Framework was used to interface between the two.

## **Challenges we ran into**
Many Web3 and dApp tools have less-than-ideal documentation and inconsistent version control/compatibility issues. (We ended up using WSL for hosting our backend environment fue to Windows not being supported by Web3 sandbox env). We debated using Whisper protocol vs smart contracts. We were unable to implement proof-of-work to legitimise the client.

## **Accomplishments that we're proud of**
We are proud to have completed a functional, blockchain-based, secure, and anonymous broadcasting application over the Web.

## **What we learned**
We learned valuable skills in implementing Web3-based dApps, and working with blockchains and smart contracts.

## **What's next for dWhistle :hourglass:**
- A custom blockchain network / crypto currency
- Implement Proof of Work (PoW) to verify/regulate client credibility
