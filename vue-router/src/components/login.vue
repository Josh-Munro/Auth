<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


   <h1>Login example</h1>

    <form @submit="postLogin" method="post">
      <input type="text" name="email" v-model="user.Email"> <br>
      <input type="password" name="password" v-model="user.Password"> <br>
      <button type="submit">Register</button>

      <h1 v-if="success">Invalid Credentials</h1>
    </form>

    
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: {
        Email: null,
        Password: null,
        IsAdmin: Boolean
      },

        success: false

    }
  },
  methods: {

    postLogin(e) {
      this.axios.post("http://localhost:3000/api/login", this.user)
      .then((result)=>{
        console.log('hello' + JSON.stringify(result));
        localStorage.setItem('user', JSON.stringify(result));
        this.$router.push('/dashboard');
       
      // console.log(user)
      })
      console.warn(this.user);
      this.success = true;
      e.preventDefault();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: #52af8a;

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
