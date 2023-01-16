<script>
import { mapActions } from 'vuex'
import io from "socket.io-client";
import Terminal from '@/components/terminal.vue'

export default {
  name: 'Home',
  data: () => ({
    socket: {},
    output: '',
  }),
  components: {
    Terminal
  },
  created() {
    this.socket = io(process.env.VUE_APP_BASE_PATH)
  },
  mounted() {
    this.socket.emit('join-room')

    this.socket.on('run:output', async (data) => {
      this.output += new TextDecoder("utf-8").decode(data)
    })
  },
  methods: {
    ...mapActions(['runProject']),
    // async handleCommand() {
    //   const { data } = await this.runCommand()
    //   console.log(data)
    // },
  },
}
</script>

<template>
  <div>
    <h2>Check Run Command</h2>
    <button @click="this.runProject()">Run Project</button>
    <Terminal :output="output" />
  </div>
</template>
