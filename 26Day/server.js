const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8000});

wss.on('connection', (ws) =>{
    console.log('A new client connected!!');

    ws.on('message', (message) =>{
        console.log(`Received messge from client: ${message}`);
    });

    ws.on('close', () =>{
        console.log('A client disconnected.');
    });

    ws.send('Welcome to the WebSocket server!!');
});

console.log('WebSocket server is running on ws://localhost:8000');