const WebSocket = require('ws');
const Web3 = require('web3');
const wss = new WebSocket.Server({ port: 7071 });

let clients = []

const web3 = new Web3("ws://localhost:7545")

const account = web3.eth.accounts.privateKeyToAccount("855cbffcb5e785180d53e536eccb2014730c92b2d6aa3487172677e98eaa8d70")


wss.on('connection', ws => {

    clients.push(ws)
    
    ws.on('message', message => {
        let msg = message.toString().replace('\n', '')

        if (msg == "123-456-789"){
            
            for (const client of clients){
                client.send("done")
            }
        }
    })
})