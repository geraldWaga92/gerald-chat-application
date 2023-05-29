const express = require('express');
const app = express();
const cors = require('cors');


const rooms = ['general', 'tech', 'finance', 'crypto'];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);
const PORT = 5000;
// eslint-disable-next-line no-unused-vars
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})



app.get('/rooms', (req, res) => {
    res.json(rooms)
})


server.listen(PORT, () => {
    console.log('listening to port', PORT)
})