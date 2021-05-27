<template>
  <div class="home">
    <h1>Dashboard</h1>

    <h1 v-if="test">It works</h1>
  </div>
</template>
<script>

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: JSON.parse(localStorage.getItem('user')).Email
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>