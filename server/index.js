const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('room', (data) => {
        socket.join(data)
    })
})

const PORT = 5000

server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})

//45.45