<script>
export default {
  name: 'Terminal',
  props: {
    output: String,
  },
}
</script>

<template lang="pug">
.terminal-container
  .terminal
    span $cihatsalik: ~/Desktop/terminal
    p {{ output }}
</template>

<style lang="scss" scoped>
.terminal-container {
  background-color: #f5f5f5;
  margin-top: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .terminal {
    width: 50%;
    height: 50%;
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 5px;

    p {
      margin: 0;
      color: white;
      height: 100%;
      white-space: pre-line;
      line-height: 1.5rem;
    }
  }
}
</style>