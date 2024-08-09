document.addEventListener('DOMContentLoaded', ()=>{
    
//Establish a WebSocket connection to the server

const ws = new  WebSocket('ws://localhost:8000');

ws.onopen = ()=>{
    console.log('Connected to the Websocket server.');
};

ws.onmessage = (event) =>{
    console.log('Message from server:', event.data);
    
    //Display the message in the chat window
    const chatMessage = document.getElementById('chat-messages');
    const messageEle = document.createElement('div');
    messageEle.classList.add('chat-message', 'received');
    messageEle.textContent = event.data;
    chatMessage.appendChild(messageEle);

    //Scroll to the bottom of the chat
    chatMessage.scrollTop = chatMessage.scrollHeight
};

ws.onclose = ()=>{
    console.log('Disconnected from the WebScoket server');
};

//Handle the send button click event
document.getElementById('send-button').addEventListener('click',()=>{
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if(messageText !== ''){
        ws.send(messageText);

        const chatMessages = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'sent');
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);

        //Clear the Input field
        messageInput.value = '';

        //Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;

    }
});
});