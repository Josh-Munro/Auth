<template>
  <div class="hello">
    
    <header>
      <ul>
        <li> <router-link to="/foo">Login</router-link></li>
        <li> <router-link to="/dashboard">Dashboard</router-link></li>
        
      </ul>
    </header>
    
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

export default {
  name: 'Navigation',
  props: {
   
  },
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: #52af8a;

}

header {
  background-color: #52af8a;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0e1311;
}

button {
  margin-top: 20px;
}
</style>
