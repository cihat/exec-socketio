const express = require('express')
const socketServer = require('../socket-connection')
const { spawn } = require('child_process')

const router = express.Router()

// run project with exec command and send output to frontend with socket.io
router.get('/run-project', (req, res) => {
  const command = `
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  echo "With the sleep command, we simulate the output of the command that runs every 1 second."\n
  sleep 1
  
`
  const child = spawn(command, { shell: true })

  child.stdout.on('data', data => {
    console.log(`stdout: ${data}`)
    socketServer().emit('run:output', data)
  })

  child.stderr.on('data', data => {
    console.error(`stderr: ${data}`)
    socketServer().emit('run:output', data)
  })

  child.on('close', code => {
    console.log(`child process exited with code ${code}`)
    socketServer().emit('run:output', `child process exited with code ${code}`)
  })

  res.sendStatus(200)
})

module.exports = router
