from web3 import Web3

## connecting to Eth node

provider_url="HTTP://127.0.0.1:7545" # test ganesh URL 



def make_trans(sender_add , reciever_add, private_key , amount ): 
    ## login to eth network
    W3 = Web3(Web3.HTTPProvider(provider_url))
    print(W3.isConnected())
    sender_address = Web3.toChecksumAddress(sender_add)
    print("ok")
    reciever_address = Web3.toChecksumAddress(reciever_add)
    print("ok")
    nonce = W3.eth.getTransactionCount(sender_address)
    print("ok")
    trans = {
        'nonce': nonce ,
        'to': reciever_add, 
        'value': W3.toWei(amount, "ether"),
        'gas':21000,
        'gasPrice': W3.toWei(40, 'gwei')
    }
    sign_trans = W3.eth.sign_transaction(trans, private_key)
    print("ok")
    tx_hash =W3.eth.sendRawTransaction(sign_trans.rawTransaction)
    print("ok")
    return "transaction has been sent"

def MyBalance(myadress):
    W3 = Web3(Web3.HTTPProvider(provider_url))
    print(W3.isConnected())
    if (W3.isConnected()):
        w_balance = W3.eth.getBalance(myadress) # gives balance in wei
        e_balance = W3.fromWei(w_balance, "ether")
        return e_balance
    else :
        return "Bad Connection"

