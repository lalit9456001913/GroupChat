require('dotenv').config(); // Load environment variables from .env
const mongoose = require('mongoose');

const dbURL = process.env.MONGODB_URI;

mongoose.connect(dbURL);

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
    // You can perform additional actions after the connection is established
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
    // You can handle reconnection logic here if needed
});

module.exports = db; // Export the db object
