const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const db = require('./db'); // Reuse the database connection
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const groupRoutes = require('./routes/groups');
const messageRoutes = require('./routes/messages');
const messageService = require('./services/messages/messageService');


const port = process.env.PORT || 5000;

app.use(bodyParser.json());



app.use(cors());

app.use('/login', authRoutes);
app.use('/users', userRoutes);
app.use('/groups', groupRoutes);
app.use('/messages', messageRoutes);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });


  socket.on('joinGroup', (groupId) => {
    socket.join(groupId);
    console.log(`User joined group: ${groupId}`);
  });

  // Handle group chat messages
  socket.on('sendMessage', async (data) => {
    const { groupId, userId, message } = data;
    console.log("data---", data)
    // Save the message to the database (if needed)

    await messageService.sendMessage({ senderId: userId, groupId, content: message.content });

    // Broadcast the message to all clients in the group
    io.to(groupId).emit('message', data);
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
