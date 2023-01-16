const io = require('socket.io')

let socketServer = null

module.exports = (app, server) => {
  if (socketServer) return socketServer

  socketServer = io(server, {
    cors: {
      origin: '*',
      // origin: 'http://localhost:3000',
      methods: ['GET'],
      credentials: true,
    }
  })

  socketServer.on('connection', socket => {
    socket.on('join-room', eventId => {
      socket.join(eventId)
    })
  })

  return socketServer
}