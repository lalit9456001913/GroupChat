import { io } from 'socket.io-client';
// import { getAuth } from './auth.service';

export const socket = io("http://localhost:5000", {
    autoConnect: false,
    transports: ["websocket"],
    // reconnection: false, // Disable automatic reconnection
    // reconnectionAttempts: 0, // Set the number of reconnection attempts to 0
});


export const socketEmit = (event, data = {}) => socket.emit(event, data);
