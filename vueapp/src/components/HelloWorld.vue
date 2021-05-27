<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h1>Register example</h1>

    <form @submit="postData" method="post">
      <input type="text" name="email" v-model="user.Email"> <br>
      <input type="password" name="password" v-model="user.Password"> <br>
      <button type="submit">Register</button>
    </form>

    <h1>Create item example</h1>
     <form @submit="postItem" method="post">
      <input type="text" name="name" v-model="item.Name"> <br>
      <input type="text" name="description" v-model="item.Description"> <br>
      <button type="submit">Register</button>
    </form>

   <h1>Login example</h1>

    <form @submit="postLogin" method="post">
      <input type="text" name="email" v-model="user.Email"> <br>
      <input type="password" name="password" v-model="user.Password"> <br>
      <button type="submit">Register</button>

      <h1>Success lol</h1>
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
        Password: null
      },
      item: {
        Name: null,
        Description: null
      }
    }
  },
  methods: {

    postData(e) {
      this.axios.post("http://localhost:3000/api/register", this.user)
      .then((result)=>{
        console.warn(result);
      })
      console.warn(this.user);
      e.preventDefault();
    },

    postItem(e) {
      this.axios.post("http://localhost:3000/api/additem", this.item)
      .then((result)=>{
        console.warn(result);
      })
      console.warn(this.item);
      e.preventDefault();
    },

    postLogin(e) {
      this.axios.post("http://localhost:3000/api/login", this.user)
      .then((result)=>{
        console.warn(result);
      })
      console.warn(this.user);
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
