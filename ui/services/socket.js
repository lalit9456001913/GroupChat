import { io } from 'socket.io-client';
// import { getAuth } from './auth.service';
const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

export const socket = io(ApiUrl, {
    autoConnect: false,
    transports: ["websocket"],
    // reconnection: false, // Disable automatic reconnection
    // reconnectionAttempts: 0, // Set the number of reconnection attempts to 0
});


export const socketEmit = (event, data = {}) => socket.emit(event, data);
