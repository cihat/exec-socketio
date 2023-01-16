import { createStore } from 'vuex'
import axios from 'axios'
// import io from 'socket.io-client'

// const socket = io(process.env.VUE_APP_BASE_PATH, {
//   withCredentials: true,
// })

axios.defaults.baseURL = process.env.VUE_APP_BASE_PATH
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default createStore({
  state: {},
  mutations: {},
  actions: {
    async fetchSession() {
      // socket.emit('join-room')
    },
    // get the output from backend to the frontend with socket.io
    async runProject() {
      await axios.get('/frontend-gui/run-project')
      // return socket.on('run:output', async (data) => new TextDecoder("utf-8").decode(data))
    },
  },
  modules: {},
})
