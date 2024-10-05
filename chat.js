const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.querySelector('.chat-messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        addMessage('user', message);
        messageInput.value = '';
    }
});

function addMessage(type, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', type);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
}

// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

